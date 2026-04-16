import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export enum Status {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export const Task = pgTable("Tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status", { enum: ["TO_DO", "IN_PROGRESS", "DONE"] })
    .notNull()
    .default(Status.TO_DO),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
