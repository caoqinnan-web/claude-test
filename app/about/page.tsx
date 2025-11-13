import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我 - 个人网站",
  description: "了解更多关于我的背景和经历",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            充满热情的开发者，热爱为复杂问题创造优雅的解决方案。
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              我的故事
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                我是一名拥有超过5年网页应用开发经验的全栈工程师。
                我的技术之旅始于对网站工作原理的好奇，这种好奇心很快变成了对创建网站的热情。
              </p>
              <p>
                我专注于现代网页技术，包括 React、Next.js、TypeScript 和 TailwindCSS。
                我相信编写简洁、可维护的代码，并创建既美观又实用的用户体验。
              </p>
              <p>
                当我不写代码时，你可以看到我在探索新技术、为开源项目做贡献，
                或通过博客文章和教程分享我的知识。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              技能与技术
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">前端开发</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">后端开发</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">工具与其他</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Vercel", "CI/CD"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            工作经历
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  高级全栈开发工程师
                </h3>
                <p className="text-gray-600 dark:text-gray-400">科技公司 • 2021 - 至今</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                主导多个网页应用的开发，指导初级开发人员，
                并实施代码质量和性能的最佳实践。
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  全栈开发工程师
                </h3>
                <p className="text-gray-600 dark:text-gray-400">创业公司 • 2019 - 2021</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                开发和维护多个客户项目，与跨职能团队合作，
                为公司的成长做出贡献。
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  初级开发工程师
                </h3>
                <p className="text-gray-600 dark:text-gray-400">网页设计公司 • 2018 - 2019</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                开始我的职业生涯，学习行业最佳实践，
                并参与各种客户项目。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
