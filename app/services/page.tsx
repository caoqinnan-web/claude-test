import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务 - 曹钦楠",
  description: "数字生活整理、AI 效率工具教练、人生整理 & 时间管理 - 专业一对一咨询服务",
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            三大核心服务
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            从物理空间到数字世界，从时间管理到AI效率<br className="hidden sm:block" />
            全方位帮你建立低熵系统
          </p>
        </div>
      </section>

      {/* Service 1: 数字生活整理 */}
      <section id="digital" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm font-medium mb-4">
                Service 01
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                重建你的数字栖息地
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                你的手机、电脑、云端，应该是你的工具，而不是负担。
                让我帮你建立一个干净、直观、可持续的数字世界——一个真正属于你的数字栖息地。
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">手机、电脑、平板系统级优化</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">从设置到使用习惯的全方位改造</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">文件/照片/密码/账号整理</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">建立清晰的数字资产管理系统</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Apple 全家桶深度设置</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">iCloud、连续互通、快捷指令等</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PARA 架构 & 第二大脑搭建</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">科学的信息管理和知识管理系统</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">数字极简 + 数字审美</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">让你的数字空间既高效又赏心悦目</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 dark:from-[#FF6B6B]/20 dark:to-[#FF6B6B]/10 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-8xl">💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: AI 效率工具教练 */}
      <section id="ai" className="bg-gray-50 dark:bg-gray-800/50 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-[#51CF66]/10 to-[#51CF66]/5 dark:from-[#51CF66]/20 dark:to-[#51CF66]/10 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-8xl">🤖</div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-[#51CF66]/10 text-[#51CF66] rounded-full text-sm font-medium mb-4">
                Service 02
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                和 AI 合作，而不是被它吓到
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                AI 不是用来&ldquo;聊天&rdquo;的，而是应该成为你的外脑和助理。
                让我教你如何真正用好 AI，让它成为你的效率放大器。
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#51CF66] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">一对一 AI 工作流咨询</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">根据你的行业和需求定制专属方案</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#51CF66] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Prompt 工程 & 结构化写作</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">让 AI 真正理解你、配合你</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#51CF66] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI 工具深度应用</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">ChatGPT、Claude、NotebookLM、Notion AI 等</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#51CF66] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">效率系统改造</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">文档管理、知识管理、任务管理的 AI 化升级</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#51CF66] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI 协作模式建立</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">把 AI 真正融入你的日常工作流程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: 人生整理 & 时间管理 */}
      <section id="life" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#845EF7]/10 text-[#845EF7] rounded-full text-sm font-medium mb-4">
                Service 03
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                让时间重新站在你这边
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                工具和方法只是表面，真正的改变来自于底层的生活秩序重建。
                让我帮你从根本上改变与时间、精力、注意力的关系。
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">一对一深度咨询</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">不是课程，而是针对你的情况定制方案</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">生活秩序搭建</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">从作息、饮食到工作节奏的系统优化</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">时间管理系统</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">不是&ldquo;挤时间&rdquo;，而是&ldquo;设计时间&rdquo;</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">注意力管理</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">在信息过载时代保持专注的能力</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">拖延症改善 & 行动力提升</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">从根源解决拖延问题，建立行动系统</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#845EF7] rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">个人策略制定</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">长期目标规划与实现路径设计</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#845EF7]/10 to-[#845EF7]/5 dark:from-[#845EF7]/20 dark:to-[#845EF7]/10 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-8xl">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#845EF7] py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备好开始改变了吗？
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            不提供标准课程，只提供为你量身定制的一对一咨询。<br className="hidden sm:block" />
            让我们一起建立属于你的低熵系统。
          </p>
          <a
            href="mailto:cqn1024@icloud.com"
            className="inline-block px-10 py-4 bg-white text-[#FF6B6B] rounded-xl hover:bg-gray-100 transition-all shadow-xl font-medium text-lg"
          >
            联系阿楠咨询
          </a>
        </div>
      </section>
    </div>
  );
}
