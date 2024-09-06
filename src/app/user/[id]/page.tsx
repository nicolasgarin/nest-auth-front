import { User } from "@/app/@types/user";
import { getMyUser } from "../../user.api";


type Props = {
  params: {
      id: string
  }
}

async function MyUser({ params }: Props) {
  const userData = await getMyUser(params.id);
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Auth app</h1>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default MyUser;
