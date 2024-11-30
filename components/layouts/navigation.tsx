"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useQueryState } from "nuqs";
import { Calendar, History } from "lucide-react";

import { cn } from "@/lib/utils";
import { paths } from "@/config/paths";

export const Navigation = () => {
  const pathname = usePathname();
  const [searchParams] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });

  return (
    <div className="flex items-center gap-4">
      <Link
        href={`${paths.home.getHref()}${searchParams && `?search=${searchParams}`}`}
        className={cn(
          "flex size-9 cursor-pointer items-center justify-center rounded-md bg-tertiary hover:bg-primary md:size-10",
          { "bg-primary": paths.home.getHref() === pathname },
        )}
      >
        <Calendar className="text-white" />
      </Link>

      <Link
        href={`${paths.history.getHref()}${searchParams && `?search=${searchParams}`}`}
        className={cn(
          "flex size-9 cursor-pointer items-center justify-center rounded-md bg-tertiary hover:bg-primary md:size-10",
          { "bg-primary": paths.history.getHref() === pathname },
        )}
      >
        <History className="text-white" />
      </Link>
    </div>
  );
};
