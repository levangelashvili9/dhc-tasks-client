"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { Search as SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Search = () => {
  const t = useTranslations("tasks.search");

  const [search, setSearch] = useState<string>("");

  const [, setSearchParams] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });

  const handleSearch = () => {
    setSearchParams(search);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("placeholder")}
        className="border-none pr-12 shadow-md shadow-shadow"
      />

      <div
        onClick={handleSearch}
        className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-primary hover:bg-blue-500"
      >
        <SearchIcon className="size-3.5 text-white" strokeWidth={2.25} />
      </div>
    </div>
  );
};
