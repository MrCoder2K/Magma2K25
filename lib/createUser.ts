export async function createUser(data: any) {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return { status: res.status, ...result };
  } catch (err) {
    console.error("❌ Network error:", err);
    return { status: 500, error: "Network error" };
  }
}
