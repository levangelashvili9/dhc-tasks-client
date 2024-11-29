import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CreateTask = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CreateTaskTrigger />
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Edit task name</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const CreateTaskTrigger = () => {
  return (
    <div className="fixed bottom-3 left-1/2 flex size-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-primary">
      <Plus strokeWidth={3} className="size-4 text-white" />
    </div>
  );
};
