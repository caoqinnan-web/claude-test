import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let&apos;s work <br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md">
              准备好开始改变了吗？让我们一起构建你的低熵系统。
            </p>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <a
              href="mailto:cqn1024@icloud.com"
              className="group flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-blue-600 transition-colors"
            >
              <Mail className="w-8 h-8" />
              cqn1024@icloud.com
              <ArrowRight className="w-8 h-8 group-hover:-rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-8 mb-8 md:mb-0">
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              关于我
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              服务
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              文章
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://xhslink.com/m/741qhM8BMO0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors font-medium flex items-center gap-2"
            >
              小红书
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Cao Qinnan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
