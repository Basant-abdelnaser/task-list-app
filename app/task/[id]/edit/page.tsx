import { db } from "@/db";
import { Task } from "@/db/schema";

import { TaskDto } from "@/utils/dtos";

import { eq } from "drizzle-orm";
import Link from "next/link";

import { IoMdArrowBack } from "react-icons/io";

import EditForm from "./EditForm";
import { notFound } from "next/navigation";
interface EditTaskProps {
  params: Promise<{ id: string }>;
  searchParams: URLSearchParams;
}

const EditTaskPage = async ({ params }: EditTaskProps) => {
  const id = (await params).id;
  const task = (await db.query.Task.findFirst({
    where: eq(Task.id, Number(id)),
  })) as TaskDto;
  if (!task) {
    return notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans text-start m-3    ">
      <Link href={`/task/${id}`} className="self-start">
        <button className=" rounded-md  p-2 cursor-pointer hover:bg-green-600 flex items-center gap-2 mb-10  border border-gray-50  ml-5">
          {" "}
          <IoMdArrowBack /> <span>Back to task details </span>
        </button>
      </Link>
      <div className=" bg-blue-950 p-6 rounded-lg shadow-lg  lg:w-1/2 md:w-full w-full  border border-gray-50">
        <h1 className="text-4xl font-bold mb-10">Edit Task</h1>
        <div>
          <EditForm task={task} />
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
