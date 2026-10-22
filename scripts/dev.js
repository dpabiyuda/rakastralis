#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nextDistBin = path.resolve(projectRoot, 'node_modules/next/dist/bin/next');
const args = process.argv.slice(2);

console.log('\x1b[36m%s\x1b[0m', '⚡ Starting Website Bisnis Tralis Dev Server...');

// Inject ~/.local/node/bin into PATH so node and npm are always found
const localNodeBin = path.join(process.env.HOME || '', '.local/node/bin');
const localBin = path.join(process.env.HOME || '', '.local/bin');
const envPath = `${localNodeBin}:${localBin}:${process.env.PATH || ''}`;

// Spawn node with next script directly - safe for directory paths with spaces!
const nextProcess = spawn(process.execPath, [nextDistBin, 'dev', ...args], {
  cwd: projectRoot,
  stdio: ['inherit', 'pipe', 'pipe'],
  env: {
    ...process.env,
    PATH: envPath,
  },
});

let browserOpened = false;

function openBrowser(targetUrl) {
  if (browserOpened) return;
  browserOpened = true;

  console.log('\x1b[32m%s\x1b[0m', `\n🚀 Opening ${targetUrl} in your browser...\n`);

  const platform = process.platform;
  let cmd = '';
  if (platform === 'darwin') {
    cmd = `open "${targetUrl}"`;
  } else if (platform === 'win32') {
    cmd = `start "" "${targetUrl}"`;
  } else {
    cmd = `xdg-open "${targetUrl}"`;
  }

  exec(cmd, (err) => {
    if (err) {
      console.warn('\x1b[33m%s\x1b[0m', `⚠️ Note: Browser could not be opened automatically: ${err.message}`);
      console.log(`Please visit ${targetUrl} manually.`);
    }
  });
}

function handleOutput(data, isErrorStream = false) {
  const text = data.toString();
  if (isErrorStream) {
    process.stderr.write(text);
  } else {
    process.stdout.write(text);
  }

  if (!browserOpened) {
    const match = text.match(/https?:\/\/(localhost|127\.0\.0\.1):(\d+)/i);
    if (match) {
      openBrowser(match[0]);
    } else if (text.includes('Ready in') || text.includes('Local:')) {
      openBrowser('http://localhost:3000');
    }
  }
}

nextProcess.stdout.on('data', (d) => handleOutput(d, false));
nextProcess.stderr.on('data', (d) => handleOutput(d, true));

// Fallback timer: ensure browser opens even if Next logs are quiet
const fallbackTimer = setTimeout(() => {
  if (!browserOpened) {
    openBrowser('http://localhost:3000');
  }
}, 2000);

nextProcess.on('exit', (code) => {
  clearTimeout(fallbackTimer);
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  clearTimeout(fallbackTimer);
  nextProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  clearTimeout(fallbackTimer);
  nextProcess.kill('SIGTERM');
  process.exit(0);
});
