"use client";

import { memo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  ChevronUp,
  CircleCheck,
  PencilLine,
  Trash2,
} from "lucide-react";

import { useCompleteTask, useDeleteTask } from "@/features/tasks/api";

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
      <TaskControlls task={task} />
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
    className="mb-7 flex cursor-pointer items-center justify-between"
  >
    <h3 className="text-sm font-medium text-primary-foreground">
      {task.title}
    </h3>
    {isExpanded ? (
      <ChevronUp strokeWidth={2.25} className="size-[18px] text-quaternary" />
    ) : (
      <ChevronDown strokeWidth={2.25} className="size-[18px] text-quaternary" />
    )}
  </div>
);

// TASK DESCRIPTION
type TaskDescriptionProps = {
  description: string;
};

const TaskDescription: React.FC<TaskDescriptionProps> = ({ description }) => (
  <div className="mb-6 border-2 border-dashed bg-background p-3">
    <p className="text-[10px] font-semibold text-tertiary-foreground">
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
        <PencilLine className="size-4 cursor-pointer text-quaternary" />
        <Trash2
          onClick={() => deleteTask(task.id)}
          className="size-4 cursor-pointer text-destructive"
        />
      </div>

      {task.isCompleted ? (
        <div className="flex cursor-pointer items-center gap-1">
          <h4 className="text-[11px] font-medium text-tertiary-foreground">
            {t("completed")}
          </h4>
          <CircleCheck className="size-4 text-success" />
        </div>
      ) : (
        <div
          onClick={() => completeTask(task.id)}
          className="flex cursor-pointer items-center gap-1"
        >
          <h4 className="text-[11px] font-medium text-tertiary-foreground">
            {t("mark-completed")}
          </h4>
          <CircleCheck className="size-4 text-success" />
        </div>
      )}
    </div>
  );
});

TaskControlls.displayName = "TaskControlls";
