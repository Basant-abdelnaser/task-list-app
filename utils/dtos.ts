import { Status } from "@/db/schema";

export type createTaskDto = {
  title: string;
  description: string;
};
export type EditTaskDto = {
  title: string;
  description: string;
  status: Status;
};

export type TaskDto = {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date | null;
  updatedAt: Date | null;
};
