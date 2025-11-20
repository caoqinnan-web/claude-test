export const CATEGORIES = [
  { id: "all", label: "全部文章" },
  { id: "digital", label: "数字整理" },
  { id: "ai", label: "AI 效率" },
  { id: "life", label: "时间管理" },
  { id: "story", label: "客户故事" },
];

export const POSTS = [
  {
    id: "digital-para-system",
    title: "如何用 PARA 系统重构你的数字生活",
    excerpt: "你的电脑桌面是不是永远堆满了文件？本文将带你了解 PARA 知识管理方法，让每一个文件都有家可归。",
    content: `
## 为什么你的桌面永远乱糟糟？

我们每天都在产生大量的文件：截图、文档、下载的安装包... 如果没有一个清晰的系统，它们就会像杂草一样疯长。

## 什么是 PARA 系统？

PARA 是 Tiago Forte 提出的一套通用的信息组织方法，它将所有信息分为四大类：

1.  **Projects (项目)**：有明确截止日期和目标的一系列任务。例如：“完成网站改版”、“策划一次旅行”。
2.  **Areas (领域)**：你需要长期维护的责任范围。例如：“健康”、“财务”、“职业发展”。
3.  **Resources (资源)**：你感兴趣并希望持续收集的主题。例如：“咖啡制作”、“网页设计灵感”、“心理学”。
4.  **Archives (归档)**：以上三类中不再活跃的内容。

## 如何开始？

不要试图一次性整理所有文件。创建一个名为 "Archive [日期]" 的文件夹，把桌面上所有东西都扔进去。然后，从今天开始，新产生的文件严格按照 PARA 分类。

## 结语

整理不是为了整齐，而是为了在需要的时候能立刻找到。
    `,
    category: "digital",
    categoryLabel: "数字整理",
    date: "2024-03-15",
    readTime: "8 min",
    image: "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20",
  },
  {
    id: "ai-knowledge-base",
    title: "AI 时代的个人知识库搭建指南",
    excerpt: "不再做信息的搬运工。利用 Notion + AI，打造一个能自动帮你思考的第二大脑。",
    content: `
## 传统知识库的痛点

不仅要收集，还要整理、打标签、分类... 维护成本太高，最后变成了“收藏夹吃灰”。

## AI 能做什么？

1.  **自动摘要**：保存文章时，让 AI 自动生成一句话总结。
2.  **自动打标**：根据内容自动推荐标签。
3.  **对话式检索**：不再通过文件夹查找，而是直接问 AI：“我上次关于 React 性能优化的笔记在哪里？”

## 推荐工具栈

*   **Notion**: 数据库功能强大，AI 整合度高。
*   **Obsidian**: 本地优先，适合深度链接。
*   **Mem.ai**: 主打 AI 自动组织的笔记应用。

## 核心原则

**以我为主，为我所用。** 知识库不是图书馆，而是你的思想车间。
    `,
    category: "ai",
    categoryLabel: "AI 效率",
    date: "2024-03-10",
    readTime: "12 min",
    image: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
  },
  {
    id: "start-small-order",
    title: "告别拖延：从建立一个微小的秩序开始",
    excerpt: "混乱的环境会消耗你的意志力。通过整理物理空间，我们如何重获内心的平静与行动力？",
    content: `
## 熵增定律与生活

物理学告诉我们，在一个封闭系统中，混乱度（熵）总是趋于增加的。房间变乱、桌面变乱，这是自然规律。

## 为什么整理能治愈拖延？

当你面对一个混乱的桌面时，你的大脑需要消耗额外的能量去“屏蔽”这些干扰。这会消耗你的意志力资源，让你更难开始困难的任务。

## 微小秩序行动

1.  **归位**：用完的东西立刻放回原处。
2.  **留白**：保持桌面 50% 以上的区域是空的。
3.  **睡前 5 分钟**：每天睡前花 5 分钟复原环境。

## 结语

外部的秩序会内化为内心的平静。
    `,
    category: "life",
    categoryLabel: "时间管理",
    date: "2024-03-05",
    readTime: "6 min",
    image: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20",
  },
  {
    id: "client-story-designer",
    title: "案例复盘：帮助自由职业者找回 30% 的工作时间",
    excerpt: "一位焦虑的设计师，是如何通过优化工作流与文件管理，从无休止的加班中解脱出来的。",
    content: `
## 客户背景

小 A，自由插画师。每天工作 12 小时，但感觉效率很低。经常找不到之前的素材，文件命名混乱（final_v2_real_final.psd）。

## 诊断问题

1.  **文件管理混乱**：每次找素材平均花费 15 分钟。
2.  **沟通成本高**：与客户反复确认需求，缺乏标准文档。
3.  **精力分散**：画画时不断被微信消息打断。

## 解决方案

1.  **建立素材库**：使用 Eagle 管理图片素材，标签化管理。
2.  **文件命名规范**：项目名_类别_日期_版本号。
3.  **番茄工作法**：25 分钟专注，5 分钟休息。

## 成果

经过 2 周的调整，小 A 每天的工作时间缩短到了 8 小时，收入反而提升了。
    `,
    category: "story",
    categoryLabel: "客户故事",
    date: "2024-02-28",
    readTime: "10 min",
    image: "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20",
  },
];

export function getPost(id: string) {
  return POSTS.find((post) => post.id === id);
}

export function getPostsByCategory(categoryId: string) {
  if (categoryId === "all") return POSTS;
  return POSTS.filter((post) => post.category === categoryId);
}
