import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ variable: "--font-noto-sans-jp", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "FORGE | パーソナルジム - 理想の体を、最短で。",
  description:
    "完全マンツーマンのパーソナルトレーニングジムFORGE。食事指導付き・駅徒歩3分。まずは無料体験から。",
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
