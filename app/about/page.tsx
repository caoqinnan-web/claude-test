import type { Metadata } from "next";
import Button from "@/components/Button";
import {
  GrowthIcon,
  MilitaryIcon,
  CareerIcon,
  TurningPointIcon,
  VolunteerIcon,
  OrganizerIcon,
} from "@/components/illustrations/TimelineIcons";

export const metadata: Metadata = {
  title: "关于阿楠 - 曹钦楠",
  description: "人生整理师、数字生活整理师、AI 效率工具教练 - 了解我的故事和理念",
};

export default function AboutPage() {
  return (
    <div className="bg-base-bg dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral/5 to-base-bg dark:from-coral/10 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-deep-text dark:text-white mb-6">
            你好，我是曹钦楠（阿楠）
          </h1>
          <p className="text-xl text-neutral-gray dark:text-gray-300 leading-relaxed">
            人生整理师 · 个人数字空间建筑师 · 家庭整理收纳师 · AI 效率工具教练
          </p>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl font-bold text-deep-text dark:text-white mb-16 text-center">
          我的故事
        </h2>

        <div className="space-y-12 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-accent-blue to-mint" />

          {/* Timeline Item 1: 成长 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-right md:pr-12">
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-3">
                河南 · 新疆 · 哈尔滨
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                出生于中原河南，成长于西北新疆，求学于东北哈尔滨。从小在棉花地里长大，对&ldquo;劳动&rdquo;和&ldquo;秩序&rdquo;有很具体的体感。
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <GrowthIcon />
            </div>
            <div className="md:w-1/2 md:pl-12 invisible md:visible" />
          </div>

          {/* Timeline Item 2: 军旅 */}
          <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-left md:pl-12">
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-3">
                参军入伍
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                大学期间参军入伍服役两年，培养了强执行力与抗压能力，学会了在高压环境下保持秩序。
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <MilitaryIcon />
            </div>
            <div className="md:w-1/2 md:pr-12 invisible md:visible" />
          </div>

          {/* Timeline Item 3: 职场 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-right md:pr-12">
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-3">
                多领域职场经历
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                做过快消零售管培生、教育基地运营、国企项目管理。但内心始终有种失控感：文件找不到、照片成千上万、每天忙碌却说不清做了什么…
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <CareerIcon />
            </div>
            <div className="md:w-1/2 md:pl-12 invisible md:visible" />
          </div>

          {/* Timeline Item 4: 转折点 */}
          <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-left md:pl-12">
              <h3 className="text-2xl font-bold text-coral dark:text-coral mb-3">
                2023 年辞职
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                从国企辞职，开始重新思考人生方向。这是一个勇敢的决定，也是一切改变的起点。
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <TurningPointIcon />
            </div>
            <div className="md:w-1/2 md:pr-12 invisible md:visible" />
          </div>

          {/* Timeline Item 5: 西藏 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-right md:pr-12">
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-3">
                青藏高原志愿者
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                去唐古拉山镇做了 1 个月环保志愿者。在纯净的高原上，我开始重新思考：为什么拥有这么多便利工具，生活反而越来越混乱？
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <VolunteerIcon />
            </div>
            <div className="md:w-1/2 md:pl-12 invisible md:visible" />
          </div>

          {/* Timeline Item 6: 整理师 */}
          <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            <div className="md:w-1/2 md:text-left md:pl-12">
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-3">
                成为人生整理师
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed mb-4">
                累计<span className="font-semibold text-coral">近 500 小时</span>的入户整理经验，服务<span className="font-semibold text-coral">20+ 位</span>客户，覆盖北京、杭州、上海、成都等城市。
              </p>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed">
                我提出<span className="font-semibold text-coral">&ldquo;低熵生活&rdquo;</span>与<span className="font-semibold text-coral">&ldquo;数字栖息地&rdquo;</span>理念，帮助人们重建掌控感。
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
              <OrganizerIcon />
            </div>
            <div className="md:w-1/2 md:pr-12 invisible md:visible" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white dark:bg-gray-800/50 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-deep-text dark:text-white mb-12 text-center">
            我的核心理念
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-coral transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                低熵系统
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                熵代表混乱度。低熵意味着有序、清晰、可预测。
                建立低熵系统，就是让生活从混沌走向秩序。
              </p>
            </div>

            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-accent-blue transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                系统思维
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                不是教你&ldquo;收纳技巧&rdquo;，而是帮你建立一个可持续运转的生活系统，
                让整理变成习惯，而不是负担。
              </p>
            </div>

            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-mint transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                一对一定制
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                每个人的生活状态、工作习惯、数字使用方式都不同。
                我提供的不是标准课程，而是为你量身定制的解决方案。
              </p>
            </div>

            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                AI 赋能
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                AI 不是威胁，而是你的&ldquo;外脑&rdquo;和&ldquo;助理&rdquo;。
                正确使用 AI 工具，能让你的效率提升 10 倍。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl font-bold text-deep-text dark:text-white mb-12 text-center">
          我的专业领域
        </h2>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-2xl">
              💻
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-2">
                数字生活整理
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                Apple 全家桶深度优化、PARA 架构搭建、第二大脑建设、
                文件/照片/密码/账号系统化管理、数字极简生活方式设计
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-2">
                AI 效率工具教练
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                ChatGPT、Claude、NotebookLM、Notion AI 等工具的深度应用、
                Prompt 工程、AI 工作流设计、行业定制化 AI 方案
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-mint/10 rounded-xl flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-2">
                人生整理 & 时间管理
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                生活秩序重建、时间管理系统、注意力管理、
                拖延症改善、个人策略制定、行动力提升
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-r from-coral/10 via-accent-blue/10 to-mint/10 dark:from-coral/20 dark:via-accent-blue/20 dark:to-mint/20 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-deep-text dark:text-white mb-6">
            我能帮助谁？
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-300 leading-relaxed mb-8">
            如果你是一位 35 岁以上、生活节奏快、工作压力大的职场人，<br className="hidden sm:block" />
            正在被数字混乱、时间失控、精力涣散困扰，<br className="hidden sm:block" />
            <span className="text-coral font-semibold">渴望重新掌控自己的生活</span>…
          </p>
          <p className="text-xl font-semibold text-deep-text dark:text-white">
            那么，我可以帮到你。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center bg-base-bg dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-deep-text dark:text-white mb-6">
          让我们开始你的改变之旅
        </h2>
        <p className="text-lg text-neutral-gray dark:text-gray-400 mb-8">
          一对一咨询，为你量身定制专属的低熵系统
        </p>
        <Button href="mailto:cqn1024@icloud.com" variant="primary" size="lg">
          联系阿楠
        </Button>
      </section>
    </div>
  );
}
