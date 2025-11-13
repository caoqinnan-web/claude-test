import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map((line) => {
                  // Convert markdown headers
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">${line.slice(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">${line.slice(4)}</h3>`;
                  }
                  // Convert code blocks
                  if (line.startsWith('```')) {
                    const lang = line.slice(3);
                    if (lang) {
                      return `<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code class="language-${lang}">`;
                    } else {
                      return `</code></pre>`;
                    }
                  }
                  // Convert inline code
                  line = line.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>');
                  // Convert bold
                  line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                  // Convert lists
                  if (line.startsWith('- ')) {
                    return `<li class="ml-6">${line.slice(2)}</li>`;
                  }
                  // Regular paragraphs
                  if (line.trim() && !line.startsWith('<')) {
                    return `<p class="mb-4">${line}</p>`;
                  }
                  return line;
                })
                .join(''),
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Written by
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {post.author}
              </p>
            </div>

            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              More Articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
