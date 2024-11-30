"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PencilLine, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { EditTaskForm } from "@/features/tasks/components";

type EditTaskProps = {
  task: Task;
};

export const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const t = useTranslations("tasks.edit");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <PencilLine className="size-4 cursor-pointer text-quaternary md:size-5" />
      </DialogTrigger>

      <DialogContent
        className="max-w-xs md:max-w-md"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <div>
            <DialogTitle>{t("heading")}</DialogTitle>
            <DialogClose className="absolute right-3 top-3">
              <X className="size-4 md:size-5" />
            </DialogClose>
          </div>
        </DialogHeader>

        <EditTaskForm task={task} closeDialog={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
