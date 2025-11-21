import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "曹钦楠 - 人生整理师 | 数字生活整理 | AI 效率工具教练",
  description: "通过物理整理 + 数字整理 + AI 效率提升，帮助你建立低熵、有序、可持续的生活和工作系统。专业一对一咨询服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden")}>
        <div className="bg-noise" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
