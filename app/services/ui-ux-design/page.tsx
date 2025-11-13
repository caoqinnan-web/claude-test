import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX 设计 - 服务",
  description: "专业的 UI/UX 设计服务",
};

export default function UIUXDesignPage() {
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
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UI/UX 设计
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            创建美观直观的用户界面，让用户爱不释手。
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            设计服务
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              用户界面设计
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              用户体验优化
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              线框图和原型设计
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              设计系统和组件库
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              全设备响应式设计
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            设计工具
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            设计原则
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">以用户为中心</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                始终将用户需求放在首位
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">一致性</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                在整个设计中保持一致性
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">无障碍访问</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                为所有用户设计，包括有障碍的用户
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">简洁性</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                保持设计简洁易懂
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
