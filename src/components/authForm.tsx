"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { getMyUser, logOut, userLogin } from "@/app/user.api";
import { UserLoginData } from "@/app/@types/user";
import useAuthStore from "@/store/authStore";

export function AuthForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data: UserLoginData) => {
    userLogin(data);
  });

  const onGetUserInfo = () => {
    getMyUser("0fc44ce2-33e9-4521-9c65-ac0137d5de6f");
  };

  const onSignOut = () => {
    logOut();
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>Please enter your credentials here</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input {...register("email")} id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                id="password"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Login</Button>
        </CardFooter>
      </form>
      <Button onClick={onGetUserInfo}>User info</Button>
      <Button onClick={onSignOut}>Logout</Button>
    </Card>
  );
}
