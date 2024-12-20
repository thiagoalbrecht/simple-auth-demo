"use client";
import { unsetCookie } from "@/app/actions/authenticate";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    unsetCookie();
    router.refresh();
    // or:
    // router.push("/");
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-2"
    >
      Logout
    </button>
  );
}
