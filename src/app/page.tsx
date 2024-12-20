import Link from "next/link";

export default function Home() {
  return (
<div>
  <h1 className="text-xl">Choose a page</h1>
  <ul>
    <li>
      <Link href="/public">Public page</Link>
    </li>
    <li>
      <Link href="/protected">Protected page</Link>
    </li>
  </ul>
</div>
  );
}
