"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "服务形式",
      question: "咨询形式是什么样的？",
      answer: `我提供两种咨询形式：

**线上咨询（推荐）：**
- 通过腾讯会议进行一对一视频咨询
- 可以屏幕共享，实时指导操作
- 适合数字整理、AI 工具、时间管理等咨询
- 更灵活，不受地域限制

**线下咨询：**
- 入户进行家庭空间整理
- 实地评估和指导
- 需提前预约，确认服务区域
- 适合家庭整理、物品断舍离等需求

所有咨询都是一对一定制化服务，不是标准课程。`,
    },
    {
      category: "准备工作",
      question: "我需要准备什么？",
      answer: `**线上咨询需要准备：**
- 一台正常联网的电脑（台式机或笔记本均可）
- 稳定的网络环境
- 安装好腾讯会议
- 一个好状态的自己 ✨

**线下咨询需要准备：**
- 提前整理出需要处理的区域
- 准备一些收纳工具（根据具体情况沟通）
- 充足的时间（通常需要半天到一天）

**心态准备：**
- 愿意改变的决心
- 对整理过程的耐心
- 接受"断舍离"的心理准备`,
    },
    {
      category: "效果预期",
      question: "一般多久能看到效果？",
      answer: `这个因人而异，取决于：
- 你的当前状态（混乱程度）
- 投入的时间和精力
- 执行力和坚持程度

**一般来说：**

**立竿见影（1-2 天）：**
- 手机、电脑桌面立即变整洁
- 文件找寻速度明显提升

**短期效果（1-2 周）：**
- 数字空间明显改善
- 工作效率开始提升
- 焦虑感降低

**中期效果（1-3 个月）：**
- 养成新的整理习惯
- 生活节奏更有秩序
- 时间掌控感增强

**长期效果（3-6 个月）：**
- 建立稳定的低熵系统
- 从根本上改变生活方式
- 持续的掌控感和幸福感

**关键是：**整理不是一次性的，而是建立一个可持续运转的系统。`,
    },
    {
      category: "适用人群",
      question: "适合哪些人来做整理咨询？",
      answer: `**最适合的人群：**

**35+ 岁的职场人：**
- 工作压力大，时间紧张
- 数字设备使用频繁但混乱
- 想提升效率但不知从何下手

**数字工作者：**
- 程序员、设计师、内容创作者
- 每天大量使用电脑和手机
- 文件、照片、笔记管理混乱

**知识工作者：**
- 需要管理大量信息和知识
- 想建立"第二大脑"系统
- 需要高效的学习和输出

**生活节奏失控的人：**
- 总觉得时间不够用
- 想做的事很多但无从下手
- 焦虑、拖延、注意力涣散

**不太适合的情况：**
- 只想要"快速解决方案"但不愿改变习惯
- 期待整理师代劳一切（我们是引导，不是代劳）
- 完全没有时间投入的人`,
    },
    {
      category: "隐私保护",
      question: "如何保护我的隐私和数据安全？",
      answer: `**隐私保护承诺：**

**咨询过程中：**
- 不会在未经允许的情况下截图、录屏或分享内容
- 如需使用录音/转录，仅用于本人复盘与交付文档整理
- 所有涉及个人信息的内容都会严格保密

**案例分享：**
- 如需分享案例，会完全匿名化处理
- 事前征得你的同意
- 不涉及任何可识别个人身份的信息

**数据安全：**
- 咨询过程中看到的文件、照片、密码等信息绝不外泄
- 不会保留你的任何敏感信息
- 咨询结束后，相关记录仅保留必要的服务档案

**可以签署保密协议：**
如果你有特别的隐私要求，我们可以签署简单的保密承诺（NDA 风格）。

**核心原则：**
严格保护个人隐私，建立信任是一切合作的基础。`,
    },
    {
      category: "定价说明",
      question: "服务价格是多少？",
      answer: `所有服务定价为**面议**，因为每个人的情况不同：

**影响定价的因素：**
- 服务类型（数字整理 / AI 咨询 / 家庭整理）
- 服务时长和次数
- 问题复杂程度
- 线上还是线下（线下需考虑交通等成本）

**定价原则：**
- 一对一定制化服务，不是标准化产品
- 根据实际需求和投入时间确定
- 保证物有所值，帮你真正解决问题

**如何确定价格：**
1. 通过邮件初步沟通你的需求
2. 我会评估所需时间和精力
3. 给出具体的服务方案和报价
4. 双方确认后开始服务

**投资回报：**
虽然需要一定的投资，但相比于长期的时间浪费、焦虑和低效，这是一个高回报的选择。`,
    },
    {
      category: "服务次数",
      question: "只咨询一次可以吗？",
      answer: `**可以，但不推荐。**

**为什么不推荐单次咨询：**
- 整理是一个系统工程，不是一次性任务
- 第一次主要是诊断和建立基础
- 需要后续跟进才能确保系统稳定运行
- 习惯养成需要时间和反馈

**推荐的方式：**
- **2-4 次咨询包**：适合单一领域（如数字整理）
- **每周一次，持续 1 个月**：建立基础系统并养成习惯
- **前期密集 + 后期跟进**：前 2-3 次密集，之后每月一次复盘

**当然，你可以：**
- 先尝试一次，看是否适合
- 根据实际情况决定是否继续
- 没有强制捆绑

**目标是：**
帮你建立一个可以自己维护的系统，而不是长期依赖咨询。`,
    },
    {
      category: "服务区域",
      question: "线下服务覆盖哪些城市？",
      answer: `**目前主要服务区域：**
- 北京
- 杭州
- 上海
- 成都

**其他城市：**
如果你在其他城市，可以联系我沟通：
- 如果时间合适，可以安排上门服务
- 需要提前预约（至少 2 周）
- 可能需要承担差旅成本

**推荐线上咨询：**
对于数字整理、AI 工具、时间管理等需求，**强烈推荐线上咨询**：
- 效果不打折扣
- 更灵活方便
- 成本更低
- 可以屏幕共享，实时指导

**只有家庭空间整理才必须线下。**`,
    },
    {
      category: "交付内容",
      question: "咨询后会提供什么交付物？",
      answer: `**根据服务类型，会提供：**

**数字整理咨询：**
- 个性化的文件管理架构方案
- PARA 系统设置指南
- 推荐的工具和设置清单
- 维护检查清单

**AI 效率咨询：**
- 常用场景的 Prompt 模板库
- AI 工具使用手册（定制）
- 工作流优化方案
- 持续学习资源清单

**时间管理咨询：**
- 个人时间系统设计方案
- 每日/每周/每月的节奏表
- 习惯养成计划
- 复盘模板

**家庭整理：**
- 空间规划方案
- 物品分类标签系统
- 维护指南
- 前后对比照片（如需要）

**所有咨询都会包含：**
- 咨询记录和要点总结
- 下一步行动清单
- 后续支持（邮件答疑）`,
    },
    {
      category: "联系方式",
      question: "我还有其他问题，如何联系你？",
      answer: `**欢迎通过以下方式联系我：**

**📧 邮件（推荐）：**
cqn1024@icloud.com
- 详细说明你的需求和问题
- 我会在 24-48 小时内回复

**📕 小红书：**
可以关注我的小红书账号，了解更多整理案例和方法

**🎙️ 播客：**
可以先听听我的播客分享，了解我的理念

**回复时效：**
- 工作日通常 24 小时内回复
- 周末可能稍慢，但一定会回复
- 咨询预约至少提前 1 周

**建议：**
在邮件中尽量详细说明你的情况，这样我能给你更精准的建议和方案。`,
    },
  ];

  return (
    <div className="bg-base-bg dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-coral/5 to-base-bg dark:from-coral/10 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-text dark:text-white mb-6">
            常见问题
          </h1>
          <p className="text-xl text-neutral-gray dark:text-gray-300 leading-relaxed">
            关于咨询服务的一切，你想知道的都在这里
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-coral dark:hover:border-coral"
            >
              {/* Question Header - Clickable */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-10 h-10 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-coral font-semibold uppercase tracking-wide mb-1">
                      {faq.category}
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-deep-text dark:text-white">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <svg
                  className={`w-6 h-6 text-coral transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Content - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="pl-14 text-neutral-gray dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-coral via-accent-blue to-mint py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            还有其他问题？
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            欢迎通过邮件与我联系，我会尽快回复你
          </p>
          <Button href="mailto:cqn1024@icloud.com" variant="outline" size="lg" className="!bg-white !text-coral hover:!bg-gray-100 !border-0">
            📧 发送邮件
          </Button>
        </div>
      </section>
    </div>
  );
}
