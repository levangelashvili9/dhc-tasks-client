"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  ChevronUp,
  CircleCheck,
  PencilLine,
  Trash2,
} from "lucide-react";

export const TaskCard = () => {
  const t = useTranslations("tasks.card");

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="rounded-xl bg-secondary p-3 shadow-md shadow-shadow">
      <div
        onClick={toggleIsExpanded}
        className="mb-7 flex cursor-pointer items-center justify-between"
      >
        <h3 className="text-sm font-medium text-primary-foreground">
          Dorem ipsum dolor sit
        </h3>

        {isExpanded ? (
          <ChevronUp
            strokeWidth={2.25}
            className="size-[18px] text-quaternary"
          />
        ) : (
          <ChevronDown
            strokeWidth={2.25}
            className="size-[18px] text-quaternary"
          />
        )}
      </div>

      {isExpanded && (
        <div className="mb-6 border-2 border-dashed bg-background p-3">
          <p className="text-[10px] font-semibold text-tertiary-foreground">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit consectetur adipiscing.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PencilLine className="size-4 cursor-pointer text-quaternary" />
          <Trash2 className="size-4 cursor-pointer text-destructive" />
        </div>

        <div className="flex cursor-pointer items-center gap-1">
          <h4 className="text-[11px] font-medium text-tertiary-foreground">
            {t("mark-completed")}
          </h4>
          <CircleCheck className="size-4 text-success" />
        </div>
      </div>
    </div>
  );
};
