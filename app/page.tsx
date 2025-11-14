import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm font-medium">
              人生整理师 · 数字生活整理师 · AI 效率工具教练
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            重建低熵系统<br />
            <span className="text-[#FF6B6B]">掌控你的生活</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            从混乱到有序，从焦虑到掌控。<br />
            通过物理整理 + 数字整理 + AI 效率提升，<br className="hidden sm:block" />
            帮助你建立一个<span className="text-[#FF6B6B] font-medium">低熵、有序、可持续</span>的生活和工作系统。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-[#FF6B6B] text-white rounded-xl hover:bg-[#FF5252] transition-all shadow-lg shadow-[#FF6B6B]/20 hover:shadow-xl font-medium"
            >
              了解我的服务
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-[#FF6B6B] dark:hover:border-[#FF8787] transition-all font-medium"
            >
              认识阿楠
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - 痛点共鸣 */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              你是否也有这些困扰？
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              现代生活的混乱，不是你的错
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-[#FF6B6B]/30 transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                数字混乱
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                文件找不到、照片成千上万、账号密码记不住、通知消息看不完…
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-[#51CF66]/30 transition-all">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                时间失控
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                总是很忙却不知道忙了什么、拖延症严重、计划总是完不成…
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-[#845EF7]/30 transition-all">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                精力涣散
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                注意力无法集中、信息过载、焦虑却不知道该从哪里开始改变…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              三大核心服务
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              从物理空间到数字世界，全方位帮你重建秩序
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 数字生活整理 */}
            <Link
              href="/services#digital"
              className="group bg-gradient-to-br from-[#FF6B6B]/5 to-[#FF6B6B]/10 dark:from-[#FF6B6B]/10 dark:to-[#FF6B6B]/20 p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FF6B6B]/30"
            >
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#FF6B6B] transition-colors">
                数字生活整理
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                手机、电脑、云端的系统级优化，让你的数字世界干净、直观、可持续
              </p>
              <div className="text-[#FF6B6B] font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>

            {/* AI 效率工具教练 */}
            <Link
              href="/services#ai"
              className="group bg-gradient-to-br from-[#51CF66]/5 to-[#51CF66]/10 dark:from-[#51CF66]/10 dark:to-[#51CF66]/20 p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-[#51CF66]/30"
            >
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#51CF66] transition-colors">
                AI 效率工具教练
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                一对一定制 AI 工作流，让 AI 成为你的外脑和助理，而不是负担
              </p>
              <div className="text-[#51CF66] font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>

            {/* 人生整理 */}
            <Link
              href="/services#life"
              className="group bg-gradient-to-br from-[#845EF7]/5 to-[#845EF7]/10 dark:from-[#845EF7]/10 dark:to-[#845EF7]/20 p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-[#845EF7]/30"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#845EF7] transition-colors">
                人生整理 & 时间管理
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                深度一对一咨询，从底层重建稳定有序的生活节奏和行动力
              </p>
              <div className="text-[#845EF7] font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B]/10 via-[#51CF66]/10 to-[#845EF7]/10 dark:from-[#FF6B6B]/20 dark:via-[#51CF66]/20 dark:to-[#845EF7]/20 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="text-5xl mb-6">✨</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            一个人如果能掌控自己的<br className="hidden sm:block" />
            <span className="text-[#FF6B6B]">物理空间</span>、
            <span className="text-[#51CF66]">数字空间</span>和
            <span className="text-[#845EF7]">注意力</span><br className="hidden sm:block" />
            他就能掌控自己的人生
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            这就是低熵系统的力量
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            准备好开始改变了吗？
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            从混乱到有序，从被动到主动。<br />
            让我们一起建立属于你的低熵系统。
          </p>
          <Link
            href="/about"
            className="inline-block px-10 py-4 bg-[#FF6B6B] text-white rounded-xl hover:bg-[#FF5252] transition-all shadow-lg shadow-[#FF6B6B]/20 hover:shadow-xl font-medium text-lg"
          >
            联系阿楠
          </Link>
        </div>
      </section>
    </div>
  );
}
