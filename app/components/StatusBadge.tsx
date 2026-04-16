import React from "react";
import { Status } from "@/db/schema";

interface StatusBadgeProps {
  status: string;
}
const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColor =
    status === "TO_DO"
      ? "text-red-500 border border-red-500 p-2"
      : status === "IN_PROGRESS"
        ? "text-yellow-500 border border-yellow-500 p-2"
        : "text-green-500 border border-green-500 p-2";
  return <div className={statusColor}>{status.toString()}</div>;
};

export default StatusBadge;
