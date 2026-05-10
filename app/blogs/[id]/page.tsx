import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Markdown from "react-markdown";
import { getBlogById } from "@/lib/blogs";
import { FadeIn } from "@/components/FadeIn";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogById(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <AppNavbar />
      
      <main className="flex-1 relative pb-24">
        {/* Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-black to-black -z-10" />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <FadeIn delay={0.1}>
            {/* Back Button */}
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-10 group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-emerald-400 uppercase tracking-wider mb-6">
                <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {blog.category}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-space font-bold tracking-tight mb-8 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-y border-white/10 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-gray-300">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
              </div>
            </header>
          </FadeIn>

          <FadeIn delay={0.3}>
            {/* Featured Image */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-3xl overflow-hidden mb-16 ring-1 ring-white/10 shadow-2xl group">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            {/* Content */}
            <div className="markdown-body group-hover:scale-100">
              <Markdown>{blog.content}</Markdown>
            </div>
          </FadeIn>
        </article>
      </main>

      <AppFooter />
    </div>
  );
}
