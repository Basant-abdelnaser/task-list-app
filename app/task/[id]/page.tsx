import { db } from "@/db";
import { Task } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

import { IoMdArrowBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import StatusBadge from "@/app/components/StatusBadge";
import { notFound } from "next/navigation";
import { deleteTask } from "@/utils/actions";

interface ArticleDetailsProps {
  params: Promise<{ id: string }>;
  searchParams: URLSearchParams;
}

const ArticleDetailsPage = async ({ params }: ArticleDetailsProps) => {
  const id = (await params).id;
  const task = await db.query.Task.findFirst({
    where: eq(Task.id, Number(id)),
  });
  if (!task) return notFound();

  
  return (
    <div className=" w-full md:w-2/3 lg:w-1/2 flex items-center h-screen mx-auto ">
      <div className="flex flex-col m-5 gap-10 w-full  ">
        <div className=" flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 border p-3 border-gray-100 rounded-md "
          >
            <IoMdArrowBack />
            <span>Back to task list </span>
          </Link>
          <div className="flex gap-6">
            <Link href={`/task/${task.id}/edit`}>
              <button className="flex items-center gap-2 bg-green-500 rounded-md  py-2 px-4 cursor-pointer hover:bg-green-600">
                Edit
                <FaRegEdit />
              </button>
            </Link>
            <form action={deleteTask}>
              <input type="hidden" name="id" value={task.id} />
              <button className="flex items-center gap-2 bg-red-500 rounded-md  py-2 px-4 cursor-pointer hover:bg-red-600">
                Delete
                <MdDeleteOutline />
              </button>
            </form>
          </div>
        </div>
        <div className="bg-blue-900 p-5 rounded-md">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl ">{task?.title}</h1>
              <small className="text-gray-400">
                {task.createdAt!.toDateString()}
              </small>
            </div>

            <StatusBadge status={task?.status} />
          </div>

          <p className="text-xl">{task?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
