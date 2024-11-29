"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useQueryState } from "nuqs";
import { Calendar, History } from "lucide-react";

import { paths } from "@/config/paths";

import { useClearAll } from "@/features/tasks/api";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const t = useTranslations("tasks.header");

  const pathname = usePathname();
  const [searchParams] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });

  const { mutate: clearAll } = useClearAll();

  return (
    <div className="mb-4 flex justify-between">
      <div className="flex items-center gap-4">
        <Link
          href={`${paths.home.getHref()}${searchParams && `?search=${searchParams}`}`}
          className={cn(
            "flex size-9 cursor-pointer items-center justify-center rounded-md bg-tertiary hover:bg-primary",
            { "bg-primary": paths.home.getHref() === pathname },
          )}
        >
          <Calendar className="text-white" />
        </Link>

        <Link
          href={`${paths.history.getHref()}${searchParams && `?search=${searchParams}`}`}
          className={cn(
            "flex size-9 cursor-pointer items-center justify-center rounded-md bg-tertiary hover:bg-primary",
            { "bg-primary": paths.history.getHref() === pathname },
          )}
        >
          <History className="text-white" />
        </Link>
      </div>

      <div className="flex items-end">
        <h3
          onClick={() => clearAll()}
          className="text-xs font-medium text-primary-foreground underline underline-offset-[1.2px]"
        >
          {t("clear-all")}
        </h3>
      </div>
    </div>
  );
};
