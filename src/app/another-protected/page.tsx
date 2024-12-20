import LogoutButton from "@/components/logout-button";

export default function ProtectedPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Another Protected Page</h1>
      <p>This page is only visible to authenticated users.</p>
      <LogoutButton />
    </div>
  );
}
