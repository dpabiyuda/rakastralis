import { NextResponse } from "next/server";

// Contoh API route - Health Check
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
}
