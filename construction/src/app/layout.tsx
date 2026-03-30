import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ variable: "--font-noto-sans-jp", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TAKUMI建設 | 地域に根ざして30年。信頼の施工実績。",
  description:
    "TAKUMI建設は新築・リフォーム・商業施設・公共工事まで、地域密着で30年以上の実績を持つ総合建設会社です。無料お見積りはお気軽に。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
