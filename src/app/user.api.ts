const BACKEND_URL = process.env.BACKEND_URL;

export async function getUsers() {
    const data = await fetch(`${BACKEND_URL}/users`, {
      cache: "no-store",
    });
    return await data.json();
  }

  export async function userLogin(data: { email: string; password: string }) {
    const res = await fetch(`${BACKEND_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const response = await res.json();
    console.log(response);
  }