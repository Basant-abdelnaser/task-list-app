"use server";
import { db } from "@/db";
import { Task } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTaskDto, EditTaskDto } from "./dtos";
import { eq } from "drizzle-orm";

// // server action funs

// create new task
export async function addTask(newTask: createTaskDto) {
  if (
    typeof newTask.title !== "string" ||
    typeof newTask.description !== "string"
  ) {
    console.log(newTask.title, newTask.description);
    return;
  }
  if (newTask.title.length < 1 || newTask.description.length < 1) {
    return;
  }

  await db.insert(Task).values({
    title: newTask.title,
    description: newTask.description,
  });

  // revalidatePath("/");   //because home is converted to dynamic
  // redirect("/");
}

// delte task

export async function deleteTask(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .delete(Task)
    .where(eq(Task.id, id))
    .catch((e) => {
      console.log(e);
    });
  // revalidatePath("/");   //because home is converted to dynamic
  redirect("/");
}

// update Task

export async function edittask(updatedTask: EditTaskDto, id: number) {
  await db
    .update(Task)
    .set({
      title: updatedTask.title,
      description: updatedTask.description,
      status: updatedTask.status,
    })
    .where(eq(Task.id, id));
  revalidatePath("/");
  // revalidatePath(`/task/${id}`); //because home is converted to dynamic
  // redirect(`/task/${id}`);
}
