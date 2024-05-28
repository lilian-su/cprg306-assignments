import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="h-screen p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-red-300">
        <h1>Shopping List</h1>
        <StudentInfo />

    </main>
  );
}