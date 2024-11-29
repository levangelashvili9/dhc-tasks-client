import { CreateTask, ActiveTasksList } from "@/features/tasks/components";

export default function HomePage() {
  return (
    <>
      <ActiveTasksList />
      <CreateTask />
    </>
  );
}
