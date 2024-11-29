import { TaskCard } from "@/features/tasks/components";

export const TasksList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};
