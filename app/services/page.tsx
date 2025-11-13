import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务 - 个人网站",
  description: "探索我提供的服务",
};

const services = [
  {
    id: "web-development",
    title: "网页开发",
    description: "使用现代技术和最佳实践构建定制的网页应用程序。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "blue",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX 设计",
    description: "提供优秀用户体验的美观直观的用户界面。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "green",
  },
  {
    id: "api-development",
    title: "API 开发",
    description: "为您的应用程序和服务提供健壮且可扩展的 RESTful API。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "purple",
  },
  {
    id: "consulting",
    title: "技术咨询",
    description: "提供关于架构、技术栈和最佳实践的专业建议。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "orange",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            服务项目
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            我提供一系列服务，帮助您实现数字项目。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg flex items-center justify-center mb-6 text-${service.color}-600 dark:text-${service.color}-400 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                了解更多 →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              需要定制解决方案？
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              每个项目都是独一无二的。让我们讨论您的具体需求，创建量身定制的解决方案。
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              联系我
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
