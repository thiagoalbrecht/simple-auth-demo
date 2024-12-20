import { isLoggedIn } from "@/app/actions/authenticate";
import LogoutButton from "@/components/logout-button";
import Link from "next/link";

export default async function SemiProtectedPage() {
  const isAuthenticated = await isLoggedIn();

  if (!isAuthenticated) {
    return (
      <div className="text-center">
        <h1 className="text-2xl text-purple-500">If you see this, you are not logged in</h1>
        <p>
          You can see this page, but it has a completely different content if
          you are logged in.
        </p>
        <Link href="/login?redirect=/different-content" className="text-blue-500 hover:text-blue-700">
          Login here
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl text-green-500">Hey there!</h1>
      <p>
        You are in.
      </p>
      <LogoutButton />
    </div>
  );
}
