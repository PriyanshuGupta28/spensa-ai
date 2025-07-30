import { RegisterForm } from "@/components/auth/register-form";
import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex min-h-[80svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
