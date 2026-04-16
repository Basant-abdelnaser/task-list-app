import React from "react";
import AddTaskForm from "./AddTaskForm";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
const AddTaskPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans text-start m-3    ">
      <Link href="/" className="self-start">
        <button className="bg-green-500 rounded-md  p-2 cursor-pointer hover:bg-green-600 flex items-center gap-2 mb-10   ml-5">
          {" "}
          <IoMdArrowBack /> <span>Back to task list </span>
        </button>
      </Link>
      <div className=" bg-blue-950 p-6 rounded-lg shadow-lg  lg:w-1/2 md:w-full w-full  border border-gray-50">
        <h1 className="text-4xl font-bold mb-10">Add New Task</h1>
        <div>
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
};

export default AddTaskPage;
