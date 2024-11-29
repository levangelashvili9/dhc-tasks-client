import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const TasksSearch = () => {
  const t = useTranslations("tasks.search");

  return (
    <div className="relative mb-11">
      <Input
        placeholder={t("placeholder")}
        className="border-none pr-12 shadow-md shadow-shadow"
      />

      <div className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md bg-primary">
        <Search className="size-3.5 text-white" strokeWidth={2.25} />
      </div>
    </div>
  );
};
