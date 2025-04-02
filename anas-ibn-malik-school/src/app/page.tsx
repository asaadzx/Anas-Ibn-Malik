import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Anas Ibn Malik School</h1>
        <p className="text-lg mt-4">Empowering students for a brighter future.</p>
      </header>
      <main className="flex flex-col items-center gap-4">
        <Image
          src="/school-logo.svg"
          alt="School Logo"
          width={200}
          height={200}
          priority
        />
        <Link
          href="/admin"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Admin
        </Link>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        © 2025 Anas Ibn Malik School. All rights reserved.
      </footer>
    </div>
  );
}
