"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";

import { cn } from "@/lib/utils";
import { useTasks } from "@/features/tasks/api";
import { TaskStatus } from "@/features/tasks/enums";

import { Spinner } from "@/components/ui/spinner";
import { TaskCard } from "@/features/tasks/components";

export const ActiveTasksList = () => {
  const t = useTranslations("tasks");

  const [searchParams] = useQueryState("search", {
    defaultValue: "",
  });

  const { data: tasks, status } = useTasks({
    search: searchParams,
    status: TaskStatus.PENDING,
  });

  if (status === "pending")
    return (
      <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    );

  if (status === "error") return <p>{t("error")}</p>;

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4",
        { "border-t border-primary/30": !tasks.length },
      )}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
