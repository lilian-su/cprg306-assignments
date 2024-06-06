import Link from "next/link";

export default function StudentInfo() {
  const linkStyles = "text-red-300 hover:text-cyan-300 hover:underline decoration-wavy ";
  return (
    <main className="h-screen">
      <h1>Lilian Su</h1>
      <Link href="https:github.com/lilian-su" className = {linkStyles}>https://github.com</Link>
    </main>
  );
}