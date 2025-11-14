"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于阿楠" },
    { href: "/services", label: "服务" },
    { href: "/blog", label: "文章" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              曹钦楠
            </Link>
            <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
              人生整理师
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-base ${
                  pathname === link.href
                    ? "text-[#FF6B6B] font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#FF6B6B] dark:hover:text-[#FF8787]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
