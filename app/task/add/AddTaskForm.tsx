"use client";
import { addTask } from "@/utils/actions";
import { createTaskDto } from "@/utils/dtos";
import { createTaskSchema } from "@/utils/validationSchema";
import { redirect } from "next/navigation";

import { toast } from "react-toastify";

const AddTaskForm = () => {
  const clientAction = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const validation = createTaskSchema.safeParse({
      title,
      description,
    });
    console.log(title, description);

    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      console.log(validation.error.issues[0].message);
      return;
    }
    await addTask({ title, description } as createTaskDto);
    toast.success("Task added successfully");
    redirect("/");
  };

  return (
    <form className="flex flex-col gap-10 " action={clientAction}>
      <div className="">
        <input
          type="text"
          name="title"
          placeholder="task title"
          className="p-2  border border-gray-50 placeholder:text-gray-400 rounded-md bg-amber-50 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <textarea
        name="description"
        placeholder="task description"
        className="p-3  border border-gray-50 placeholder:text-gray-400 rounded-md bg-amber-50 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="bg-green-500 rounded-md  p-2 cursor-pointer hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
