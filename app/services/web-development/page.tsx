import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "网页开发 - 服务",
  description: "专业的网页开发服务",
};

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← 返回服务
        </Link>

        <div className="mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            网页开发
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            构建现代化、响应式、高性能的网页应用程序，满足您的需求。
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            我提供的服务
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              定制网页应用开发
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              全设备响应式设计
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              性能优化
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              SEO 最佳实践
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              现代框架 (React、Next.js 等)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            技术栈
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            开发流程
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">1. 需求分析</h3>
              <p className="text-gray-600 dark:text-gray-400">
                了解您的需求和目标
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">2. 设计</h3>
              <p className="text-gray-600 dark:text-gray-400">
                创建线框图和视觉设计
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">3. 开发</h3>
              <p className="text-gray-600 dark:text-gray-400">
                使用简洁、可维护的代码构建您的应用程序
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">4. 测试与上线</h3>
              <p className="text-gray-600 dark:text-gray-400">
                全面测试和顺利部署
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
