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
            人生整理师 · 个人数字空间建筑师 · 家庭整理收纳师 · AI 效率工具教练
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
              我出生于中原河南，成长于西北新疆，求学于东北哈尔滨，从小在棉花地里长大，对&ldquo;劳动&rdquo;和&ldquo;秩序&rdquo;有很具体的体感。大学期间参军入伍服役两年，培养了强执行力与抗压能力。
            </p>

            <p>
              毕业后，我做过快消零售管培生、教育基地运营、国企项目管理等多领域工作。看起来一切按部就班，但内心始终有种说不清的失控感：
              手机里几千张照片找不到想要的那一张、
              电脑桌面堆满文件却不知道哪个是最新版本、
              每天忙得团团转却说不清到底做了什么…
            </p>

            <p>
              <span className="text-[#FF6B6B] font-semibold">2023 年，我从国企辞职了。</span>
            </p>

            <p>
              辞职后，我去了青藏高原——唐古拉山镇，做了 1 个月的环保志愿者，捡垃圾、做环保宣传、垃圾分类。在那片纯净的高原上，我开始重新思考：为什么明明拥有这么多便利工具，生活反而越来越混乱？
            </p>

            <p>
              回来后，我开始尝试整理他人的家庭，也整理自己的数字世界。累计 <span className="font-semibold">近 500 小时</span>的线下入户整理经验让我意识到：<span className="font-semibold">整理不只是东西归位，而是帮助别人重建掌控感的方式</span>。
            </p>

            <p>
              我逐步从单纯的&ldquo;家庭收纳师&rdquo;，升级为同时处理：
              <span className="font-semibold text-gray-900 dark:text-white"> 物理空间</span>（家居、衣物、物品）、
              <span className="font-semibold text-gray-900 dark:text-white">数字空间</span>（电脑、手机、文件、照片、密码、账户）、
              <span className="font-semibold text-gray-900 dark:text-white">时间与精力管理</span>（时间块、节奏设计）、
              <span className="font-semibold text-gray-900 dark:text-white">AI 工具协作</span>（第二大脑搭建、AI 使用策略）。
            </p>

            <p>
              我提出<span className="text-[#FF6B6B] font-semibold">&ldquo;低熵生活&rdquo;</span>与<span className="text-[#FF6B6B] font-semibold">&ldquo;数字栖息地&rdquo;</span>理念：
              在高噪音时代，我们每个人都变得数据化。通过搭建稳定、有序、可维护的系统，减少精力损耗，让人重新成为自己生活的主人。
            </p>

            <p>
              现在，我已经服务 <span className="font-semibold">20+ 位</span>个体客户，覆盖北京、杭州、上海、成都等城市，帮助他们建立属于自己的低熵系统。
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
          href="mailto:cqn1024@icloud.com"
          className="inline-block px-10 py-4 bg-[#FF6B6B] text-white rounded-xl hover:bg-[#FF5252] transition-all shadow-lg shadow-[#FF6B6B]/20 hover:shadow-xl font-medium text-lg"
        >
          联系阿楠
        </a>
      </section>
    </div>
  );
}
