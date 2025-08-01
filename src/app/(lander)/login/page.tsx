import { LoginForm } from "@/components/auth/login-form";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-[80svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
