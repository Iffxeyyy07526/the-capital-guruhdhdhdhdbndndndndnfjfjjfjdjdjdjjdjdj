"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { ArrowRight, Calendar, User, Search } from "lucide-react";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <AppNavbar />
      
      <main className="flex-1 relative pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black -z-10" />
        
        {/* Header Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-space font-bold tracking-tight mb-8"
          >
            Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Enhance your trading knowledge with 25+ in-depth guides on Nifty, BankNifty, Options Strategies, and Trading Psychology.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search guides, strategies, psychology..."
              className="w-full bg-zinc-900 border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-emerald-500/50 text-white placeholder:text-gray-500 transition-colors"
            />
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="group flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-emerald-500/90 backdrop-blur-md text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    href={`/blogs/${blog.id}`} 
                    className="mt-auto inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors w-fit"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}
