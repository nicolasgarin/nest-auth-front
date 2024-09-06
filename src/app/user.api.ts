import { UserLoginData } from "./@types/user";
const BACKEND_URL = process.env.BACKEND_URL;

export async function getUsers() {
    const data = await fetch(`${BACKEND_URL}/users`, {
      cache: "no-store",
    });
    return await data.json();
  }

  export async function userLogin(data: UserLoginData) {
    const res = await fetch(`http://localhost:5000/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const response = await res.json();
    console.log(response);
  }

  export async function getMyUser(id: string) {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    console.log(res.headers.getSetCookie())
    console.log(response);
  }