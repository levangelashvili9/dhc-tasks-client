import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return <div className="text-3xl text-black">{t("welcome")}</div>;
}
