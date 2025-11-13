import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts, getCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - My Portfolio",
  description: "Read my latest articles and tutorials",
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
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            All
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors"
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
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
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
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles and tutorials delivered to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
