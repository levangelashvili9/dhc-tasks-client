"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CreateTaskForm } from "@/features/tasks/components";

export const CreateTask = () => {
  const t = useTranslations("tasks.create");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <CreateTaskTrigger />
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

        <CreateTaskForm closeDialog={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

const CreateTaskTrigger = () => {
  return (
    <div className="fixed bottom-3 left-1/2 flex size-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-blue-500 md:size-14">
      <Plus strokeWidth={3} className="size-4 text-white md:size-5" />
    </div>
  );
};
