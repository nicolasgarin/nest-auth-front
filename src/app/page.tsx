import { getUsers } from "./user.api";
import { User } from "./@types/user";
import { AuthForm } from "@/components/authForm";

export const dynamic = "force-dynamic";

async function HomePage() {
  const users = await getUsers();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Auth app</h1>
      </div>
      <div>
        {users.map((user: User) => (
          <>
            <div>{user.id}</div>
            <div>{user.email}</div>
          </>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <AuthForm />
      </div>
    </>
  );
}

export default HomePage;
