import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术咨询 - 服务",
  description: "专业的技术咨询服务",
};

export default function ConsultingPage() {
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
          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            技术咨询
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            为您的项目提供关于技术决策、架构和最佳实践的专业指导。
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            咨询服务
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              技术栈选择和评估
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              系统架构设计和审查
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              代码审查和质量评估
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              性能优化策略
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              团队培训和指导
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              技术尽职调查
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            专业领域
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">前端架构</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React、Next.js、Vue、状态管理和组件设计
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">后端系统</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Node.js、微服务、API 设计和数据库优化
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">云基础设施</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS、Azure、GCP、无服务器和容器化
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps 和 CI/CD</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                自动化部署、测试和监控
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            为什么选择我的咨询？
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">实战经验</h3>
              <p className="text-gray-600 dark:text-gray-400">
                多年构建和扩展真实应用程序的实践经验
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">中立建议</h3>
              <p className="text-gray-600 dark:text-gray-400">
                基于您的具体需求和约束条件提供公正的建议
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">长远眼光</h3>
              <p className="text-gray-600 dark:text-gray-400">
                考虑可维护性和未来增长的解决方案
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
