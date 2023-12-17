import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4">
      <h1 className="text-3xl font-bold my-5">Landing Page</h1>
      <Link href="/home" className="text-base">Proceed To Dashboard</Link>
    </main>
  );
}
