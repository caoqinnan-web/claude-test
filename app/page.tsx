"use client";

import Link from "next/link";
import Button from "@/components/Button";
import ChaosToOrderIllustration from "@/components/illustrations/ChaosToOrder";
import {
  DigitalSpaceIcon,
  AIToolIcon,
  HomeSpaceIcon,
} from "@/components/illustrations/ServiceIcons";

export default function Home() {
  return (
    <div className="bg-base-bg dark:bg-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium">
                人生整理师 · 数字生活整理师 · AI 效率工具教练
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-deep-text dark:text-white leading-tight">
              从混乱到有序<br />
              <span className="text-coral">重建你的低熵系统</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-gray dark:text-gray-300 leading-relaxed">
              通过物理整理 + 数字整理 + AI 效率提升，<br />
              帮助你建立一个<span className="text-coral font-semibold">低熵、有序、可持续</span>的生活和工作系统。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/services" variant="primary" size="lg">
                了解我的服务
              </Button>
              <Button href="/about" variant="outline" size="lg">
                认识阿楠
              </Button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="animate-slide-up">
            <ChaosToOrderIllustration />
          </div>
        </div>
      </section>

      {/* Problem Section - 痛点共鸣 */}
      <section className="bg-white dark:bg-gray-800/50 py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-text dark:text-white mb-4">
              你是否也有这些困扰？
            </h2>
            <p className="text-neutral-gray dark:text-gray-400">
              现代生活的混乱，不是你的错
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-coral/40 transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                数字混乱
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                文件找不到、照片成千上万、账号密码记不住、通知消息看不完…
              </p>
            </div>

            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-accent-blue/40 transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                时间失控
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
                总是很忙却不知道忙了什么、拖延症严重、计划总是完不成…
              </p>
            </div>

            <div className="bg-base-bg dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-mint/40 transition-all hover:shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-deep-text dark:text-white mb-3">
                精力涣散
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-bold text-deep-text dark:text-white mb-4">
              三大核心服务
            </h2>
            <p className="text-neutral-gray dark:text-gray-400">
              从物理空间到数字世界，全方位帮你重建秩序
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 数字生活整理 */}
            <Link
              href="/services#digital"
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-coral dark:hover:border-coral hover:shadow-2xl hover:shadow-coral/10 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mb-6 mx-auto">
                <DigitalSpaceIcon />
              </div>
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-4 group-hover:text-coral transition-colors">
                数字生活整理
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed mb-6">
                手机、电脑、云端的系统级优化，让你的数字世界干净、直观、可持续
              </p>
              <div className="text-coral font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>

            {/* AI 效率工具教练 */}
            <Link
              href="/services#ai"
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-accent-blue dark:hover:border-accent-blue hover:shadow-2xl hover:shadow-accent-blue/10 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mb-6 mx-auto">
                <AIToolIcon />
              </div>
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-4 group-hover:text-accent-blue transition-colors">
                AI 效率工具教练
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed mb-6">
                一对一定制 AI 工作流，让 AI 成为你的外脑和助理，而不是负担
              </p>
              <div className="text-accent-blue font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>

            {/* 人生整理 */}
            <Link
              href="/services#life"
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-mint dark:hover:border-mint hover:shadow-2xl hover:shadow-mint/10 hover:-translate-y-1"
            >
              <div className="w-24 h-24 mb-6 mx-auto">
                <HomeSpaceIcon />
              </div>
              <h3 className="text-2xl font-bold text-deep-text dark:text-white mb-4 group-hover:text-mint transition-colors">
                人生整理 & 时间管理
              </h3>
              <p className="text-neutral-gray dark:text-gray-300 leading-relaxed mb-6">
                深度一对一咨询，从底层重建稳定有序的生活节奏和行动力
              </p>
              <div className="text-mint font-medium group-hover:translate-x-2 transition-transform inline-block">
                了解更多 →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-r from-coral/10 via-accent-blue/10 to-mint/10 dark:from-coral/20 dark:via-accent-blue/20 dark:to-mint/20 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="text-5xl mb-6">✨</div>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-text dark:text-white mb-6 leading-tight">
            一个人如果能掌控自己的<br className="hidden sm:block" />
            <span className="text-coral">物理空间</span>、
            <span className="text-accent-blue">数字空间</span>和
            <span className="text-mint">注意力</span><br className="hidden sm:block" />
            他就能掌控自己的人生
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-300 leading-relaxed">
            这就是低熵系统的力量
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-base-bg dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-text dark:text-white mb-6">
            准备好开始改变了吗？
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            从混乱到有序，从被动到主动。<br />
            让我们一起建立属于你的低熵系统。
          </p>
          <Button href="/about" variant="primary" size="lg">
            联系阿楠
          </Button>
        </div>
      </section>
    </div>
  );
}
