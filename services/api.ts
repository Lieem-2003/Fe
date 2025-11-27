const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://brevicaudate-marquerite-realisingly.ngrok-free.dev";

export async function apiRequest(path: string, options: RequestInit = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: any = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  // chỉ thêm Authorization khi token tồn tại
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 401 || response.status === 403) {
    console.warn("Token hết hạn hoặc không hợp lệ!");
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}
