"use client";

import { TaskCard } from "@/features/tasks/components";
import axiosInstance from "@/lib/api-client";
import { useTasks } from "@/features/tasks/api";

export const getTasks = async (): Promise<Task[]> => {
  const response = await axiosInstance.get("/task");
  return response.data.data;
};

export const TasksList = () => {
  const { data: tasks, status } = useTasks();

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
