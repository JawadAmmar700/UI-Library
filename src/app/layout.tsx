import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/lib/providers";

// const open_Sans = Open_Sans({
//   subsets: ["latin"],
//   style: "normal",
//   display: "swap",
// });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
