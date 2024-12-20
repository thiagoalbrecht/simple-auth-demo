import { logout } from "@/app/actions/authenticate";

export default function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-2"
    >
      Logout
    </button>
  );
}
