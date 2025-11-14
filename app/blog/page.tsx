import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts, getCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "文章 - 曹钦楠 | 人生整理师",
  description: "阅读关于数字整理、AI 效率和生活整理的实用文章",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getCategories();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            文章分享
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            数字整理、AI 效率提升、生活整理的实践经验与深度思考
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-[#FF6B6B] text-white rounded-full text-sm font-medium">
            全部
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-[#FF6B6B] hover:text-white dark:hover:bg-[#FF6B6B] cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#FF6B6B]/10 dark:bg-[#FF6B6B]/20 text-[#FF6B6B] dark:text-[#FF6B6B] rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block mt-4 text-[#FF6B6B] dark:text-[#FF6B6B] font-semibold hover:underline"
                >
                  阅读全文 →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-[#FF6B6B] to-[#845EF7] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            想要了解更多？
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            如果你也想建立低熵、有序、可持续的生活系统，欢迎通过邮件与我交流。
          </p>
          <a
            href="mailto:hello@caoqinnan.com"
            className="inline-block px-8 py-3 bg-white text-[#FF6B6B] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            📧 联系我：hello@caoqinnan.com
          </a>
        </div>
      </div>
    </div>
  );
}
