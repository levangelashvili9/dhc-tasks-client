import Image from "next/image";
import { useTranslations } from "next-intl";
import { Settings } from "lucide-react";

import images from "@/config/images";

export const RootHeader = () => {
  const t = useTranslations("layout.header");

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-7">
      <div className="flex items-center gap-2.5">
        <Image
          src={images.avatar}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full"
        />

        <h2 className="font-bold text-secondary-foreground">
          {t("user-name")}
        </h2>
      </div>

      <Settings
        strokeWidth={1.5}
        className="size-7 cursor-pointer text-primary"
      />
    </div>
  );
};
