import type { Metadata } from "next";

import { RootHeader } from "@/components/layouts";

export const metadata: Metadata = {
  title: "DHC Tasks",
  description: "DHC Tasks Root layout",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RootHeader />
      <main className="mx-auto max-w-7xl px-5 pb-7 pt-4">{children}</main>
    </>
  );
};

export default RootLayout;
