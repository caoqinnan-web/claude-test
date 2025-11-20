"use client";

import { FadeIn } from "@/components/FadeIn";
import { Calendar, MapPin, Heart, Award, Coffee, Book, Terminal, Code } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mx-auto mb-20">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              关于<span className="text-gradient">阿楠</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              人生整理师 / 个人数字空间建筑师 / AI 效率工具教练
            </p>
          </div>
        </FadeIn>
      </section>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Story */}
          <div className="lg:col-span-8 space-y-20">
            {/* My Story */}
            <section>
              <FadeIn delay={0.1}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Book className="w-6 h-6 text-blue-500" />
                  我的故事
                </h2>
                <div className="prose dark:prose-invert max-w-none space-y-6 text-lg text-gray-600 dark:text-gray-400">
                  <p>
                    我叫曹钦楠。出生于中原河南，成长于西北新疆的棉花地里，求学于东北哈尔滨。
                    从小在广阔的土地上劳作，让我对“劳动”与“秩序”有着最原始、最具体的体感。
                  </p>
                  <p>
                    大学期间，我选择了参军入伍。两年的军旅生涯，不仅锻炼了我的体魄，
                    更将“执行力”与“抗压能力”刻进了我的骨子里。
                  </p>
                  <p>
                    毕业后，我像大多数人一样，进入了职场的洪流。做过快消零售的管培生，
                    负责过教育基地运营，也担任过国企的项目管理。
                    虽然工作光鲜，但我内心始终有一种“失控感”。
                  </p>
                  <p>
                    2023年，我做出了一个重要的决定：<strong>从国企辞职</strong>。
                    辞职后，我独自前往青藏高原——唐古拉山镇，做了一个月的环保志愿者。
                    在捡拾垃圾、进行环保宣传的日子里，面对着壮阔的自然与被人类废弃物侵蚀的草原，
                    我深刻地意识到：<strong>无论是大自然还是我们的生活，都需要“净化”与“秩序”。</strong>
                  </p>
                  <p>
                    回到城市后，我开始投身于“整理”事业。
                    在帮助他人整理家庭物品和数字世界的过程中，我发现：
                    <strong>整理不只是把东西归位，而是一种帮助别人重建掌控感的方式。</strong>
                  </p>
                </div>
              </FadeIn>
            </section>

            {/* Timeline */}
            <section>
              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-purple-500" />
                  成长轨迹
                </h2>
                <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-8 relative">
                  {/* Item 1 */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-black" />
                    <span className="text-sm text-blue-500 font-bold mb-1 block">2023 - 至今</span>
                    <h3 className="text-xl font-bold mb-2">自由职业者 / 人生整理师</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      专注于“整理 + AI + 时间管理”。累计家庭整理时长近 500 小时，
                      服务超过 20+ 位个体客户，足迹覆盖北京、杭州、上海、成都。
                    </p>
                  </div>
                  {/* Item 2 */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-black" />
                    <span className="text-sm text-gray-500 font-bold mb-1 block">2023</span>
                    <h3 className="text-xl font-bold mb-2">环保志愿者</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      青藏高原唐古拉山镇。垃圾捡拾、环保宣传、垃圾分类。
                      在无人区思考人与环境的关系。
                    </p>
                  </div>
                  {/* Item 3 */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-black" />
                    <span className="text-sm text-gray-500 font-bold mb-1 block">2019 - 2023</span>
                    <h3 className="text-xl font-bold mb-2">职场探索期</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      历任快消管培生、教育运营、国企项目经理。
                      积累了丰富的项目管理与跨部门沟通经验。
                    </p>
                  </div>
                  {/* Item 4 */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-black" />
                    <span className="text-sm text-gray-500 font-bold mb-1 block">大学期间</span>
                    <h3 className="text-xl font-bold mb-2">参军入伍</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      两年军旅生涯。培养了极强的执行力、纪律性与抗压能力。
                    </p>
                  </div>
                </div>
              </FadeIn>
            </section>
          </div>

          {/* Sidebar - Philosophy & Stats */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn delay={0.3}>
              <div className="glass-card p-8 rounded-3xl sticky top-24">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  我的信条
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">低熵生活</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      在高噪音时代，我们每个人都变得数据化。通过搭建稳定、有序、可维护的系统，减少精力损耗。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-wider">数字栖息地</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      你的电脑和手机，就是你赛博空间的“家”。它应该像你的卧室一样干净、温馨。
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    经验积累
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-xs text-gray-500 mt-1">整理时长(h)</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                      <div className="text-2xl font-bold text-purple-600">20+</div>
                      <div className="text-xs text-gray-500 mt-1">深度客户</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
