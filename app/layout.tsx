import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "曹钦楠 - 全栈开发工程师 & 人生整理师",
  description: "探索数字与生活的秩序之美。个人作品集网站，使用 Next.js 和 TailwindCSS 构建。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://your-domain.com",
    title: "曹钦楠 - 全栈开发工程师 & 人生整理师",
    description: "探索数字与生活的秩序之美。",
    siteName: "曹钦楠的个人网站",
  },
  twitter: {
    card: "summary_large_image",
    title: "曹钦楠 - 全栈开发工程师 & 人生整理师",
    description: "探索数字与生活的秩序之美。",
  },
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
