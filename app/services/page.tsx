"use client";

import { FadeIn } from "@/components/FadeIn";
import { Smartphone, Brain, Layout, Check, CircleHelp, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mx-auto mb-20 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            重建你的<span className="text-gradient">个人操作系统</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            从数字空间到物理世界，从时间管理到 AI 赋能。
            <br />
            我们提供全方位的咨询与教练服务。
          </p>
        </FadeIn>
      </section>

      {/* 3 Pillars Detail */}
      <section className="container px-4 md:px-6 mx-auto mb-32">
        <div className="grid grid-cols-1 gap-12">
          {/* Service 1 */}
          <FadeIn delay={0}>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8">
                    <Smartphone size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">数字生活整理</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    你的数字设备就是你的“第二大脑”。如果它充满了混乱的文件、重复的照片和找不到的笔记，你的思考也会变得混乱。
                    我们帮你建立一套清晰、直观、自动化的数字秩序。
                  </p>
                  <ul className="space-y-4">
                    {[
                      "手机、电脑、平板系统级优化",
                      "文件、照片、密码、账号深度整理",
                      "Apple 全家桶深度设置与联动",
                      "PARA 知识库架构搭建"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          <Check size={14} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-full min-h-[300px] bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl overflow-hidden flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  {/* Visual Composition */}
                  <div className="relative z-10 w-64 h-64">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform -rotate-6 transition-transform group-hover:-rotate-12 duration-500" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-blue-100 dark:bg-blue-900/40 rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800 transform rotate-3 transition-transform group-hover:rotate-6 duration-500 flex flex-col items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                        <Smartphone size={24} />
                      </div>
                      <div className="w-24 h-2 bg-blue-200 dark:bg-blue-700 rounded-full" />
                      <div className="w-16 h-2 bg-blue-200 dark:bg-blue-700 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6 text-9xl font-bold text-blue-200 dark:text-blue-900/20 opacity-20 select-none">01</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 2 */}
          <FadeIn delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-last lg:order-first relative h-full min-h-[300px] bg-purple-50/50 dark:bg-purple-900/10 rounded-2xl overflow-hidden flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  {/* Visual Composition */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
                    <div className="relative w-32 h-32 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-purple-100 dark:border-purple-800 flex items-center justify-center z-20">
                      <Brain size={48} className="text-purple-500" />
                    </div>
                    {/* Orbiting nodes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-500 shadow-lg animate-bounce">
                      <span className="text-xs font-bold">AI</span>
                    </div>
                    <div className="absolute bottom-0 right-0 translate-x-8 translate-y-4 w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-500 shadow-lg delay-75">
                      <div className="w-2 h-2 bg-current rounded-full" />
                    </div>
                    <div className="absolute bottom-0 left-0 -translate-x-8 translate-y-4 w-10 h-10 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center text-pink-500 shadow-lg delay-150">
                      <div className="w-2 h-2 bg-current rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 text-9xl font-bold text-purple-200 dark:text-purple-900/20 opacity-20 select-none">02</div>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-8">
                    <Brain size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">AI 效率工具教练</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    AI 不会取代你，但善用 AI 的人会。
                    拒绝焦虑，我们将 AI 变成你最得力的私人助理。从简单的对话到复杂的工作流，手把手带你上手。
                  </p>
                  <ul className="space-y-4">
                    {[
                      "一对一 AI 深度咨询与教学",
                      "定制化 Prompt (提示词) 设计",
                      "AI 辅助写作、总结与决策流",
                      "Notion AI / ChatGPT / Claude 深度整合"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                          <Check size={14} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 3 */}
          <FadeIn delay={0.2}>
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-8">
                    <Layout size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">人生整理 & 时间管理</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    混乱的房间往往映射着混乱的内心。
                    我们从物理空间的整理入手，延伸到时间管理与人生目标的梳理，帮你找回生活的掌控感。
                  </p>
                  <ul className="space-y-4">
                    {[
                      "生活秩序搭建与习惯养成",
                      "时间管理系统与精力分配",
                      "行动力提升与拖延改善",
                      "个人长期发展策略制定"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                          <Check size={14} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-full min-h-[300px] bg-green-50/50 dark:bg-green-900/10 rounded-2xl overflow-hidden flex items-center justify-center border border-green-100 dark:border-green-800/30">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  {/* Visual Composition */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 transform rotate-45 group-hover:rotate-0 transition-transform duration-700">
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-100 dark:border-green-800 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50" />
                    </div>
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 flex items-center justify-center">
                      <div className="w-12 h-2 bg-green-500 rounded-full" />
                    </div>
                    <div className="w-24 h-24 bg-green-500 text-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Layout size={32} />
                    </div>
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-100 dark:border-green-800 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-3 h-3 bg-green-200 rounded-full" />
                        <div className="w-3 h-3 bg-green-200 rounded-full" />
                        <div className="w-3 h-3 bg-green-200 rounded-full" />
                        <div className="w-3 h-3 bg-green-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6 text-9xl font-bold text-green-200 dark:text-green-900/20 opacity-20 select-none">03</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Packages */}
      <section className="container px-4 md:px-6 mx-auto mb-32">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">服务方案</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <FadeIn delay={0.1}>
            <div className="h-full p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">数字栖息地基础包</h3>
              <p className="text-gray-500 mb-6 text-sm">适合：刚意识到数字世界很乱、但还没用顺手任何工具的人</p>
              <div className="text-3xl font-bold mb-8">2-4 <span className="text-base font-normal text-gray-500">次咨询</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-500" />
                  <span>电脑 & 手机文件结构梳理</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-500" />
                  <span>照片与截图归档策略</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-500" />
                  <span>账户与密码管理建议</span>
                </li>
              </ul>
              <a href="mailto:cqn1024@icloud.com" className="w-full py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 font-bold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                预约咨询
              </a>
            </div>
          </FadeIn>

          {/* Package 2 */}
          <FadeIn delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-black dark:bg-white text-white dark:text-black border border-gray-200 dark:border-gray-800 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-bl-xl">
                最受欢迎
              </div>
              <h3 className="text-2xl font-bold mb-2">AI 效率升级包</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-6 text-sm">适合：已经在用 AI 工具，但用得零散、不成体系的人</p>
              <div className="text-3xl font-bold mb-8">3-6 <span className="text-base font-normal text-gray-400 dark:text-gray-600">次咨询</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-400 dark:text-blue-600" />
                  <span>常用任务梳理（写作、总结、决策）</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-400 dark:text-blue-600" />
                  <span>提示词 (Prompt) 优化与协作模式设计</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-blue-400 dark:text-blue-600" />
                  <span>与现有工具整合（Notion、备忘录等）</span>
                </li>
              </ul>
              <a href="mailto:cqn1024@icloud.com" className="w-full py-3 rounded-xl bg-white dark:bg-black text-black dark:text-white font-bold text-center hover:scale-105 transition-transform">
                预约咨询
              </a>
            </div>
          </FadeIn>

          {/* Package 3 */}
          <FadeIn delay={0.3}>
            <div className="h-full p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">生活系统定制</h3>
              <p className="text-gray-500 mb-6 text-sm">适合：家里东西多、反复收拾反复乱，希望彻底改变的家庭</p>
              <div className="text-3xl font-bold mb-8">项目制 <span className="text-base font-normal text-gray-500">按需定制</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>重点空间整理方案 + 决策引导</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>物品流转规则建立（进/出家门）</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-1 text-green-500" />
                  <span>数字与物理空间联动</span>
                </li>
              </ul>
              <a href="mailto:cqn1024@icloud.com" className="w-full py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 font-bold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                预约咨询
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "咨询形式是什么样的？",
                a: "主要通过线上视频会议（腾讯会议/Zoom）进行一对一沟通。我们会共享屏幕，直接在你的设备上进行演示和操作指导。对于物理空间整理，目前支持部分城市的线下入户服务，其他城市可进行远程指导。"
              },
              {
                q: "需要提前准备什么？",
                a: "不需要特意整理！请保持你最真实的状态，这样我才能发现问题的根源。在开始前，我会发一份简单的问卷了解你的基本情况和困扰。"
              },
              {
                q: "一般多久能看到效果？",
                a: "整理是一个循序渐进的过程。通常在第 1-2 次咨询后，你就能感受到明显的秩序感提升。但建立长期的系统和习惯，通常需要 1-3 个月的持续陪伴与练习。"
              },
              {
                q: "如何保护我的隐私和数据安全？",
                a: "我严格遵守职业道德。在未经允许的情况下，绝不会截图、录屏或分享你的任何内容。如需使用录音/转录仅用于复盘，会提前征得同意。我们可以签署保密协议。"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                  <CircleHelp className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  {item.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-8 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
