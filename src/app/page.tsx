import Link from "next/link";
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Choose a page</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/public-page" className="text-blue-500 hover:text-blue-700">Public page</Link>
        </li>
        <li>
          <Link href="/protected" className="text-blue-500 hover:text-blue-700">Protected page</Link>
        </li>
        <li>
          <Link href="/another-protected" className="text-blue-500 hover:text-blue-700">Another protected page</Link>
        </li>
        <li>
          <Link href="/semi-protected" className="text-blue-500 hover:text-blue-700">Semi-protected page</Link>
        </li>
        <li>
          <Link href="/different-content" className="text-blue-500 hover:text-blue-700">Different content page</Link>
        </li>
        <li>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        </li>
      </ul>
    </div>
  );
}
