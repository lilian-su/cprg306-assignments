import Link from "next/link";

export default function Page() {
  const linkStyles = "text-red-300 hover:text-cyan-300 hover:underline decoration-wavy ";
  return (
  

    <main className="h-screen p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-red-300">
      <h1 className="text-4xl pb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
          <li><Link href="week-2" className = {linkStyles}> Week 2 Assignment</Link></li>
          <li><Link href="week-3"className = {linkStyles}> Week 3 Assignment</Link></li>
          <li><Link href="week-4"className = {linkStyles}> Week 4 Assignment</Link></li>
          <li><Link href="week-5"className = {linkStyles}> Week 5 Assignment</Link></li>
          <li><Link href="week-6"className = {linkStyles}> Week 6 Assignment</Link></li>
          <li><Link href="week-7"className = {linkStyles}> Week 7 Assignment</Link></li>
          <li><Link href="week-8"className = {linkStyles}> Week 8 Assignment</Link></li>
        
      </ul>
    </main>
  );
}