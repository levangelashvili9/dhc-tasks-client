"use client";

import { useQueryState } from "nuqs";

import { TaskStatus, useTasks } from "@/features/tasks/api";

import { TaskCard } from "@/features/tasks/components";

export const ActiveTasksList = () => {
  const [searchParams] = useQueryState("search", {
    defaultValue: "",
  });

  const { data: tasks, status } = useTasks({
    search: searchParams,
    status: TaskStatus.Pending,
  });

  if (status === "pending") return <p>Loading tasks...</p>;
  if (status === "error") return <p>Error loading tasks</p>;

  return (
    <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
