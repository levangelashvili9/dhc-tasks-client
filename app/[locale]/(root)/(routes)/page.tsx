import {
  CreateTask,
  TasksHeader,
  TasksList,
  TasksSearch,
} from "@/features/tasks/components";

export default function HomePage() {
  return (
    <>
      <TasksSearch />
      <TasksHeader />
      <TasksList />
      <CreateTask />
    </>
  );
}
