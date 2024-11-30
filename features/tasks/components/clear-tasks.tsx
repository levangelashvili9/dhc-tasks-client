"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { paths } from "@/config/paths";
import { TaskStatus, useClearAll } from "@/features/tasks/api";

import { ConfirmDialog } from "@/components/shared";

export const ClearTasks = () => {
  const t = useTranslations("tasks.clear");
  const pathname = usePathname();

  const isHistoryPage = pathname === paths.history.getHref();

  const text = isHistoryPage ? t("history") : t("pending");

  const callback = isHistoryPage
    ? () => clearAll({ status: TaskStatus.Completed })
    : () => clearAll({ status: TaskStatus.Pending });

  const { mutate: clearAll } = useClearAll();

  return (
    <ConfirmDialog callback={callback}>
      <div className="flex items-end">
        <h3 className="cursor-pointer text-xs font-medium text-primary-foreground underline underline-offset-[1.2px]">
          {text}
        </h3>
      </div>
    </ConfirmDialog>
  );
};
