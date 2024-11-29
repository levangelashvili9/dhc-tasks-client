"use client";

import { useQueryState } from "nuqs";

import { TaskStatus, useTasks } from "@/features/tasks/api";

import { TaskCard } from "@/features/tasks/components";

export const CompletedTasksList = () => {
  const [searchParams] = useQueryState("search", {
    defaultValue: "",
  });

  const { data: tasks, status } = useTasks({
    search: searchParams,
    status: TaskStatus.Completed,
  });

  if (status === "pending") return <p>Loading tasks...</p>;
  if (status === "error") return <p>Error loading tasks</p>;

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};