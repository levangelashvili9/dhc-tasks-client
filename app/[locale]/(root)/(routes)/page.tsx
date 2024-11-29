import { Plus } from "lucide-react";

import {
  TasksHeader,
  TasksList,
  TasksSearch,
} from "@/features/tasks/components";

export default function HomePage() {
  return (
    <div>
      <TasksSearch />
      <TasksHeader />
      <TasksList />

      <div className="fixed bottom-3 left-1/2 flex size-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-primary">
        <Plus strokeWidth={3} className="size-4 text-white" />
      </div>
    </div>
  );
}
