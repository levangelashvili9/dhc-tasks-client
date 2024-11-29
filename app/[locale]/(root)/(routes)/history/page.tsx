import { CreateTask, CompletedTasksList } from "@/features/tasks/components";

export default function HistoryPage() {
  return (
    <>
      <CompletedTasksList />
      <CreateTask />
    </>
  );
}
