import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API 开发 - 服务",
  description: "专业的 API 开发服务",
};

export default function APIDevelopmentPage() {
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
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            API 开发
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            为您的应用程序和服务构建健壮、可扩展且安全的 API。
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            API 服务
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              RESTful API 设计与开发
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              GraphQL API 实现
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              使用 Swagger/OpenAPI 的 API 文档
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              身份验证和授权 (JWT、OAuth)
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              速率限制和缓存策略
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              API 测试和监控
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            技术栈
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Node.js", "Express", "Fastify", "GraphQL", "REST", "PostgreSQL", "MongoDB", "Redis"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            最佳实践
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">安全优先</h3>
              <p className="text-gray-600 dark:text-gray-400">
                实施强大的安全措施，包括身份验证、授权和数据验证
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">可扩展性</h3>
              <p className="text-gray-600 dark:text-gray-400">
                设计能够有效应对增长和增加流量的 API
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">文档完善</h3>
              <p className="text-gray-600 dark:text-gray-400">
                提供全面的文档，便于集成和维护
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">版本控制</h3>
              <p className="text-gray-600 dark:text-gray-400">
                适当的 API 版本控制以确保向后兼容性
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
