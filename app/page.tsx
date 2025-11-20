"use client";

import Link from "next/link";
import { ArrowRight, Smartphone, Clock, Layout, Brain, Database } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                人生整理师 / 数字栖息地架构师
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                重建你的
                <br />
                <span className="text-gradient">数字栖息地</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                在高噪音时代，通过建立低熵、有序的个人系统，
                <br className="hidden md:block" />
                让你重新掌控生活，回到真正重要的事情上。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  探索服务
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  了解阿楠
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
                <div className="relative glass-card p-8 md:p-12 rounded-3xl">
                  <h2 className="text-3xl font-bold mb-6">我是曹钦楠</h2>
                  <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      从新疆棉花地到唐古拉山志愿者，从国企项目经理到自由职业者。
                      我跨越了不同的地理与职业边界，最终在“整理”中找到了内心的秩序。
                    </p>
                    <p>
                      我不仅仅是一名整理师，更是一名<strong>数字空间的建筑师</strong>。
                      我帮助你打理的不仅是房间，更是你的电脑、手机、时间与注意力。
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  混乱不是你的错，
                  <br />
                  <span className="text-gray-400">只是系统需要升级。</span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  我们提出了<strong>“低熵生活”</strong>理念：通过搭建稳定、有序、可维护的系统，减少精力损耗，让人重新成为自己生活的主人。
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                    <Database className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">数字有序</h4>
                    <p className="text-sm text-gray-500">文件、照片、密码归位</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
                    <Clock className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold mb-2">精力管理</h4>
                    <p className="text-sm text-gray-500">时间块与节奏设计</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview (3 Pillars) */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">三大核心服务</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                全方位重建你的个人操作系统
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Digital Organizing */}
            <FadeIn delay={0.1}>
              <div className="group relative h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">数字生活整理</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  手机、电脑、云端文件深度清理与结构化。建立PARA系统，让每一个文件都有家可归。
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Apple 全家桶深度优化
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    照片与资产归档
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    第二大脑搭建
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Pillar 2: AI Coach */}
            <FadeIn delay={0.2}>
              <div className="group relative h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI 效率教练</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  不仅仅是教你用工具，而是构建 AI 工作流。让 AI 成为你的外脑，而不是负担。
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    定制化 Prompt 设计
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    AI 辅助写作与决策
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    知识管理自动化
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Pillar 3: Life Organizing */}
            <FadeIn delay={0.3}>
              <div className="group relative h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Layout size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">人生整理咨询</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  从物理空间到内心秩序。通过深度对话，帮你理清生活优先级，重建掌控感。
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    时间与注意力管理
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    生活节奏设计
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    行动力与拖延改善
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-4 transition-all"
              >
                查看详细服务方案
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Podcast / Media Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">收听我的声音</h2>
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                小宇宙
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold mb-2">低熵生活指南</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  分享关于整理、效率与生活哲学的深度对谈。
                </p>
                <a
                  href="https://www.xiaoyuzhoufm.com/episode/681b3d04e29814cf20d71c04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                >
                  点击收听最新单集 →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
