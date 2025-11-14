import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              曹钦楠
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              人生整理师 · 个人数字空间建筑师 · AI 效率工具教练
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              建立低熵系统，掌控你的生活
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white uppercase tracking-wider">
              导航
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors"
                >
                  关于阿楠
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors"
                >
                  服务
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors"
                >
                  文章
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white uppercase tracking-wider">
              联系方式
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:cqn1024@icloud.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors flex items-center gap-2"
                >
                  <span>📧</span>
                  <span>邮件咨询</span>
                </a>
              </li>
              <li>
                <a
                  href="https://xhslink.com/m/741qhM8BMO0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors flex items-center gap-2"
                >
                  <span>📕</span>
                  <span>小红书</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.xiaoyuzhoufm.com/episode/681b3d04e29814cf20d71c04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8787] text-sm transition-colors flex items-center gap-2"
                >
                  <span>🎙️</span>
                  <span>播客</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} 曹钦楠. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
