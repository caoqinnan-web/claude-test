"use client";

import { FadeIn } from "@/components/FadeIn";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CATEGORIES, getPostsByCategory } from "@/lib/blog-data";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = getPostsByCategory(activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container px-4 md:px-6 mx-auto mb-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            思考与<span className="text-gradient">沉淀</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            分享关于数字整理、AI 效率与低熵生活的深度思考。
          </p>
        </FadeIn>
      </section>

      {/* Filter */}
      <section className="container px-4 md:px-6 mx-auto mb-16">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-black dark:bg-white text-white dark:text-black scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Blog Grid */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <Link href={`/blog/${post.id}`} className="block h-full">
                <article className="group cursor-pointer flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className={cn("h-48 w-full relative overflow-hidden", post.image)}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-4xl font-bold text-black dark:text-white">
                        {post.categoryLabel.slice(0, 2)}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Tag size={14} />
                        {post.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:gap-2 transition-all">
                      阅读全文
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container px-4 md:px-6 mx-auto mt-32">
        <FadeIn delay={0.4}>
          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">订阅更新</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              每月 1-2 篇深度文章。关于如何在这个混乱的世界里，构建属于你的秩序。
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform">
                订阅
              </button>
            </form>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

