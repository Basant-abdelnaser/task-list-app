"use client";
import React from "react";
import { EditTaskDto, TaskDto } from "@/utils/dtos";
import { createTaskSchema } from "@/utils/validationSchema";
import { toast } from "react-toastify";
import { edittask } from "@/utils/actions";
import { Status } from "@/db/schema";
import { redirect } from "next/navigation";

const EditForm = ({ task }: { task: TaskDto }) => {
  const clientAction = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const status = formData.get("status")?.toString() as Status;

    const validation = createTaskSchema.safeParse({
      title,
      description,
    });

    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      console.log(validation.error.issues[0].message);
      return;
    }

    await edittask({ title, description, status } as EditTaskDto, task.id);
    toast.success("Task updated successfully");
    redirect(`/task/${task.id}`);
  };

  return (
    <form className="flex flex-col gap-10 " action={clientAction}>
      <div className="">
        <input
          type="text"
          name="title"
          placeholder="task title"
          defaultValue={task?.title}
          className="p-2  border border-gray-50 placeholder:text-gray-400 rounded-md bg-amber-50 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <select
        name="status"
        defaultValue={task?.status}
        className=" bg-amber-50 p-2  border border-gray-50 rounded-md w-full text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      >
        <option value="TO_DO">TO_DO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
      <textarea
        defaultValue={task?.description}
        name="description"
        placeholder="task description"
        className="p-3  border border-gray-50 placeholder:text-gray-400 rounded-md bg-amber-50 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="bg-green-500 rounded-md  p-2 cursor-pointer hover:bg-green-600"
      >
        Edit Task
      </button>
    </form>
  );
};

export default EditForm;
