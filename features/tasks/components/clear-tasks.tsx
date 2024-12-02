"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { paths } from "@/config/paths";
import { useClearAll } from "@/features/tasks/api";
import { TaskStatus } from "@/features/tasks/enums";

import { ConfirmDialog } from "@/components/shared";

export const ClearTasks = () => {
  const t = useTranslations("tasks.clear");
  const pathname = usePathname();

  const isHistoryPage = pathname === paths.history.getHref();

  const text = isHistoryPage ? t("history") : t("pending");

  const callback = isHistoryPage
    ? () => clearAll({ status: TaskStatus.COMPLETED })
    : () => clearAll({ status: TaskStatus.PENDING });

  const { mutate: clearAll } = useClearAll();

  return (
    <ConfirmDialog callback={callback}>
      <div className="flex items-end">
        <h3 className="cursor-pointer text-xs font-medium text-primary-foreground underline underline-offset-[1.2px] hover:text-tertiary-foreground md:text-sm lg:text-base">
          {text}
        </h3>
      </div>
    </ConfirmDialog>
  );
};
