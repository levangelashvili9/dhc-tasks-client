import { useTranslations } from "next-intl";
import { Calendar, History } from "lucide-react";

export const TasksHeader = () => {
  const t = useTranslations("tasks.header");

  return (
    <div className="mb-4 flex justify-between">
      <div className="flex items-center gap-4">
        <div className="flex size-9 items-center justify-center rounded-md bg-primary">
          <Calendar className="text-white" />
        </div>

        <div className="flex size-9 items-center justify-center rounded-md bg-tertiary">
          <History className="text-white" />
        </div>
      </div>

      <div className="flex items-end">
        <h3 className="text-xs font-medium text-primary-foreground underline underline-offset-[1.2px]">
          {t("clear-all")}
        </h3>
      </div>
    </div>
  );
};
