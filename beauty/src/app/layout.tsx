import type { Metadata } from "next";
import { Geist, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ variable: "--font-noto-sans-jp", subsets: ["latin"], display: "swap" });
const notoSerifJP = Noto_Serif_JP({ variable: "--font-noto-serif-jp", weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "LUMINE CLINIC | 美容クリニック - あなたの美しさを、科学で。",
  description:
    "LUMINE CLINICは15,000件以上の症例実績を持つ美容クリニックです。女性院長による丁寧なカウンセリングと最新機器で、あなたの美を科学的にサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
