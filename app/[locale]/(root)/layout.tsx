import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DHC Tasks",
  description: "DHC Tasks Root layout",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
