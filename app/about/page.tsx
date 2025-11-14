import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于阿楠 - 曹钦楠",
  description: "人生整理师、数字生活整理师、AI 效率工具教练 - 了解我的故事和理念",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FF6B6B]/5 to-white dark:from-[#FF6B6B]/10 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            你好，我是曹钦楠（阿楠）
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            人生整理师 · 数字生活整理师 · AI 效率工具教练
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            我的故事
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              我不是传统意义上的&ldquo;家务整理师&rdquo;或&ldquo;技术极客&rdquo;。
            </p>

            <p>
              在成为人生整理师之前，我经历过现代人都会遭遇的困境：
              手机里几千张照片找不到想要的那一张、
              电脑桌面堆满文件却不知道哪个是最新版本、
              每天忙得团团转却说不清到底做了什么、
              想改变却不知从何开始…
            </p>

            <p>
              <span className="text-[#FF6B6B] font-semibold">那种被生活推着走的失控感</span>，
              让我开始思考：为什么明明拥有这么多便利工具，生活反而越来越混乱？
            </p>

            <p>
              后来我发现，<span className="font-semibold">问题不在于我们拥有太多，而在于缺乏一个有序的系统</span>。
            </p>

            <p>
              于是我开始研究整理术、时间管理、信息管理、AI 工具应用…
              从物理空间到数字空间，从时间规划到注意力管理，
              一点一点为自己建立起一个<span className="text-[#FF6B6B] font-semibold">&ldquo;低熵系统&rdquo;</span>。
            </p>

            <p>
              当我的生活真正变得有序、清晰、可控后，
              我决定把这套方法分享给更多人。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            我的核心理念
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                低熵系统
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                熵代表混乱度。低熵意味着有序、清晰、可预测。
                建立低熵系统，就是让生活从混沌走向秩序。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                系统思维
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                不是教你&ldquo;收纳技巧&rdquo;，而是帮你建立一个可持续运转的生活系统，
                让整理变成习惯，而不是负担。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                一对一定制
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                每个人的生活状态、工作习惯、数字使用方式都不同。
                我提供的不是标准课程，而是为你量身定制的解决方案。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI 赋能
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                AI 不是威胁，而是你的&ldquo;外脑&rdquo;和&ldquo;助理&rdquo;。
                正确使用 AI 工具，能让你的效率提升 10 倍。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          我的专业领域
        </h2>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center text-2xl">
              💻
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                数字生活整理
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Apple 全家桶深度优化、PARA 架构搭建、第二大脑建设、
                文件/照片/密码/账号系统化管理、数字极简生活方式设计
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-[#51CF66]/10 rounded-xl flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI 效率工具教练
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                ChatGPT、Claude、NotebookLM、Notion AI 等工具的深度应用、
                Prompt 工程、AI 工作流设计、行业定制化 AI 方案
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-[#845EF7]/10 rounded-xl flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                人生整理 & 时间管理
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                生活秩序重建、时间管理系统、注意力管理、
                拖延症改善、个人策略制定、行动力提升
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-r from-[#FF6B6B]/10 via-[#51CF66]/10 to-[#845EF7]/10 dark:from-[#FF6B6B]/20 dark:via-[#51CF66]/20 dark:to-[#845EF7]/20 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            我能帮助谁？
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            如果你是一位 35 岁以上、生活节奏快、工作压力大的职场人，<br className="hidden sm:block" />
            正在被数字混乱、时间失控、精力涣散困扰，<br className="hidden sm:block" />
            <span className="text-[#FF6B6B] font-semibold">渴望重新掌控自己的生活</span>…
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            那么，我可以帮到你。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          让我们开始你的改变之旅
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          一对一咨询，为你量身定制专属的低熵系统
        </p>
        <a
          href="mailto:hello@caoqinnan.com"
          className="inline-block px-10 py-4 bg-[#FF6B6B] text-white rounded-xl hover:bg-[#FF5252] transition-all shadow-lg shadow-[#FF6B6B]/20 hover:shadow-xl font-medium text-lg"
        >
          联系阿楠
        </a>
      </section>
    </div>
  );
}
