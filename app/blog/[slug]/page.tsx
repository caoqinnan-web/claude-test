"use client";

import { FadeIn } from "@/components/FadeIn";
import { getPost } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPost(slug);

  if (!post) {
    return notFound();
  }

  // Simple markdown parser for MVP
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('* ')) {
        return <li key={index} className="ml-4 list-disc mb-2 text-gray-600 dark:text-gray-400">{line.replace('* ', '')}</li>;
      }
      if (line.startsWith('1. ')) {
        return <li key={index} className="ml-4 list-decimal mb-2 text-gray-600 dark:text-gray-400">{line.replace('1. ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <article className="container px-4 md:px-6 mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            返回文章列表
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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

            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className={cn("w-full h-64 md:h-96 rounded-3xl mb-12", post.image)} />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
