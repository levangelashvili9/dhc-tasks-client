"use client";

import { memo, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp, CircleCheck, Trash2 } from "lucide-react";

import { useCompleteTask, useDeleteTask } from "@/features/tasks/api";

import { EditTask } from "@/features/tasks/components";
import { cn } from "@/lib/utils";
import { ConfirmDialog } from "@/components/shared";

type TaskCardProps = {
  task: Task;
};

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="rounded-xl bg-secondary p-3 shadow-md shadow-shadow">
      <TaskTitle
        task={task}
        isExpanded={isExpanded}
        toggleIsExpanded={toggleIsExpanded}
      />
      {isExpanded && <TaskDescription description={task.description} />}
      {(isExpanded || !task.isCompleted) && <TaskControlls task={task} />}
    </div>
  );
};

// TASK TITLE
type TaskTitleProps = {
  task: Task;
  isExpanded: boolean;
  toggleIsExpanded: () => void;
};

const TaskTitle: React.FC<TaskTitleProps> = ({
  task,
  isExpanded,
  toggleIsExpanded,
}) => (
  <div
    onClick={toggleIsExpanded}
    className={cn("mb-7 flex cursor-pointer items-center justify-between", {
      "mb-0": task.isCompleted && !isExpanded,
    })}
  >
    <h3 className="flex items-center gap-1 text-sm font-medium text-primary-foreground md:text-base lg:text-lg">
      {task.title}
      <CircleCheck
        className={cn("hidden size-4 text-success md:size-5", {
          flex: task.isCompleted && !isExpanded,
        })}
      />
    </h3>
    {isExpanded ? (
      <ChevronUp
        strokeWidth={2.25}
        className="size-[18px] text-quaternary md:size-5"
      />
    ) : (
      <ChevronDown
        strokeWidth={2.25}
        className="size-[18px] text-quaternary md:size-5"
      />
    )}
  </div>
);

// TASK DESCRIPTION
type TaskDescriptionProps = {
  description: string;
};

const TaskDescription: React.FC<TaskDescriptionProps> = ({ description }) => (
  <div className={"mb-6 border-2 border-dashed bg-background p-3"}>
    <p className="text-[10px] font-semibold text-tertiary-foreground md:text-sm">
      {description}
    </p>
  </div>
);

// TASK CONTROLLS
type TaskControllsProps = {
  task: Task;
};

const TaskControlls: React.FC<TaskControllsProps> = memo(({ task }) => {
  const t = useTranslations("tasks.card");

  const { mutate: completeTask } = useCompleteTask();
  const { mutate: deleteTask } = useDeleteTask();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {!task.isCompleted && <EditTask task={task} />}

        <ConfirmDialog callback={() => deleteTask(task.id)}>
          <Trash2 className="size-4 cursor-pointer text-destructive md:size-5" />
        </ConfirmDialog>
      </div>

      {task.isCompleted ? (
        <div className="flex cursor-pointer items-center gap-1">
          <h4 className="text-[11px] font-medium text-tertiary-foreground">
            {t("completed")}
          </h4>
          <CircleCheck className="size-4 text-success md:size-5" />
        </div>
      ) : (
        <div
          onClick={() => completeTask(task.id)}
          className="flex cursor-pointer items-center gap-1"
        >
          <h4 className="text-[11px] font-medium text-tertiary-foreground hover:text-primary-foreground md:text-sm">
            {t("mark-completed")}
          </h4>
          <CircleCheck className="size-4 text-success md:size-5" />
        </div>
      )}
    </div>
  );
});

TaskControlls.displayName = "TaskControlls";
