import type { Metadata } from "next";

import "../styles/globals.css";
import { noto_serif_sc, noto_sans_sc, poppins, oppo_sans } from "@/helpers/fonts";
import injectScanner from "@/helpers/scanner";
import DynamicAside from "@/components/layout/DynamicAside";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={oppo_sans.className}>
      {injectScanner()}
      <body>
        <div className="flex size-full flex-row">
          <DynamicAside />
          <div className="flex-1 overflow-y-scroll">
            <header className="h-[48px]">
              <nav className="h-full"></nav>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
