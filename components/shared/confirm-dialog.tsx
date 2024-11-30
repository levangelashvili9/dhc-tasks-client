import { useTranslations } from "next-intl";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

type ConfirmDialogProps = React.PropsWithChildren & {
  description?: string;
  callback: () => void;
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  children,
  callback,
}) => {
  const t = useTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="max-w-xs p-3 md:max-w-md md:p-4"
      >
        <DialogHeader className="text-start">
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex items-end">
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button variant={"secondary"} className="h-8 w-14">
                No
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                variant={"default"}
                onClick={callback}
                className="h-8 w-16"
              >
                Yes
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
