import { db } from "@/db";
import { Task } from "@/db/schema";
import Link from "next/link";
import StatusBadge from "./components/StatusBadge";
import { asc } from "drizzle-orm";

// force page to be dynamic
export const dynamic = "force-dynamic";
// if page is SSG revalidate it every 10 sec
// export const revalidate = 10;

export default async function Home() {
  const tasks = await db.select().from(Task).orderBy(asc(Task.id));

  return (
    <div className="p-7 ">
      <div className="flex justify-end">
        <Link href="/task/add">
          <button className="bg-green-500 rounded-md p-2 cursor-pointer hover:bg-green-600">
            Add new Task
          </button>
        </Link>
      </div>
      <div className=" font-sans p-4 w-full ">
        <h1 className="text-4xl font-bold self-start ml-5 mb-10 ">Task list</h1>
        <table className="w-full">
          <thead className="text-2xl bg-blue-900">
            <tr className="border-b border-gray-50">
              <th className="p-3">#</th>
              <th className="p-3"> Task Title</th>
              <th className="p-3">Task Status</th>
              <th className="p-3">Task Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b border-gray-50 text-lg">
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4 text-center">{task.title}</td>
                <td className="p-4 text-center">
                  <StatusBadge status={task.status} />
                </td>
                <td className="p-4 text-center">
                  <Link href={`/task/${task.id}`}>
                    <button className="bg-green-500 rounded-md  p-2 cursor-pointer hover:bg-green-600">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
