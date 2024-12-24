import LoginForm from "@/components/login";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-6">Login</h1>
      <Suspense fallback="Loading...">
        <LoginForm />
      </Suspense>
    </div>
  );
}
