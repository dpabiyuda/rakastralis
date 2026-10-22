// Placeholder untuk API utilities
// Tambahkan fungsi API client di sini

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}/api${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
