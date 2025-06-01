"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Tag,
  ArrowLeft,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronLeft,
  Search,
  FileText,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react";
import { PortableText } from "next-sanity";
import Markdown from "react-markdown";
import type { BlogPost } from "../../../data/blog-posts";
import type { PortableTextComponents } from "next-sanity";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface BlogPostClientProps {
  post: BlogPost | any;
  relatedPosts: BlogPost[];
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function BlogPostClient({
  post,
  relatedPosts,
  prevPost,
  nextPost,
}: BlogPostClientProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Custom components for PortableText
  const portableTextComponents: PortableTextComponents = {
    block: {
      // Paragraphs
      normal: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
      // Headings
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-5 mb-3">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-lg font-semibold mt-3 mb-2">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-base font-semibold mt-2 mb-2">{children}</h6>
      ),
      // Quote
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 bg-gray-50 py-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      // Bullet points
      bullet: ({ children }) => (
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          {children}
        </ul>
      ),
      // Numbered lists
      number: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
          {children}
        </ol>
      ),
    },
    listItem: {
      // List items
      bullet: ({ children }) => <li className="leading-7">{children}</li>,
      number: ({ children }) => <li className="leading-7">{children}</li>,
    },
    marks: {
      // Bold text
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      // Italic text
      em: ({ children }) => <em className="italic">{children}</em>,
      // Underline
      underline: ({ children }) => (
        <span className="underline">{children}</span>
      ),
      // Strike through
      "strike-through": ({ children }) => (
        <span className="line-through">{children}</span>
      ),
      // Code
      code: ({ children }) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
      // Links
      link: ({ children, value }) => (
        <a
          href={value?.href}
          className="text-blue-600 hover:text-blue-800 underline"
          target={value?.blank ? "_blank" : undefined}
          rel={value?.blank ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ),
    },
    types: {
      // Image blocks
      image: ({ value }) => (
        <div className="my-6">
          <Image
            src={value?.asset?.url || "/placeholder.svg"}
            alt={value?.alt || ""}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          {value?.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      ),
      // Code blocks
      code: ({ value }) => (
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6">
          <code className={`language-${value?.language || "text"}`}>
            {value?.code}
          </code>
        </pre>
      ),
    },
  };
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full inline-block mb-4"></div>
            <p>Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // CTA Component to be inserted within content
  const CTAComponent = () => (
    <motion.div
      className="my-12 p-6 md:p-8 bg-gradient-to-t from-white to-[#f0ebe6] rounded-xl not-prose"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#b82b35] rounded-xl p-6 md:p-8 text-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tighter">
                How IOES Helps You
                <span className="my-2 block font-light font-nibpro italic">
                  Achieve Your Dreams
                </span>
              </h3>
            </div>
            <ul className="grid gap-4 md:gap-3">
              <li className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">
                  Personalized university and program matching based on your
                  profile and aspirations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                  <FileText className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">
                  Expert guidance on applications, SOPs, and document
                  preparation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">
                  Interview preparation and visa counseling support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                  <Search className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">
                  Scholarship search and financial aid guidance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">
                  Pre-departure orientation and ongoing support throughout your
                  journey
                </span>
              </li>
            </ul>
            <div className="w-full flex justify-center items-center lg:block">
              <Button
                size="lg"
                className="bg-[#1c1a1a] text-white hover:bg-[#1c1a1a]/90 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="items-center justify-center hidden md:flex">
            <Image
              src="/ioes-counseling-session.webp"
              width={500}
              height={400}
              alt="IOES counseling session"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    if (Array.isArray(post.content)) {
      // Sanity PortableText content
      const contentLength = post.content.length;
      // Place CTA at 30% of content instead of 50%
      const ctaPosition = Math.max(1, Math.floor(contentLength * 0.3));

      return (
        <div className="prose prose-lg max-w-none">
          {/* First 30% of content */}
          <PortableText
            value={post.content.slice(0, ctaPosition)}
            components={portableTextComponents}
          />

          {/* Spacing before CTA */}
          <div className="my-16">
            <CTAComponent />
          </div>

          {/* Remaining 70% of content */}
          <PortableText
            value={post.content.slice(ctaPosition)}
            components={portableTextComponents}
          />
        </div>
      );
    }

    // Markdown content - split by paragraphs and insert CTA at 30%
    const content = post.content || "";
    const paragraphs = content.split("\n\n");
    // Place CTA at 30% of paragraphs instead of 50%
    const ctaPosition = Math.max(1, Math.floor(paragraphs.length * 0.3));

    return (
      <div className="prose prose-lg max-w-none">
        <Markdown>{paragraphs.slice(0, ctaPosition).join("\n\n")}</Markdown>

        {/* Spacing before CTA */}
        <div className="my-16">
          <CTAComponent />
        </div>

        <Markdown>{paragraphs.slice(ctaPosition).join("\n\n")}</Markdown>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0">
            <Image
              src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative flex min-h-[400px] flex-col items-center justify-center px-4 py-24 text-center text-white md:px-6">
            <motion.div
              className="space-y-4 max-w-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="inline-flex items-center rounded-full bg-blue-500/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="text-xl text-white/80">{post.excerpt}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Article Content */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid gap-10 md:grid-cols-[1fr_300px] lg:gap-16">
              {/* Main Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Back to Blog */}
                <div>
                  <Button
                    variant="ghost"
                    asChild
                    className="p-0 hover:bg-transparent"
                  >
                    <Link
                      href="/blogs"
                      className="flex items-center text-gray-500 hover:text-gray-900"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>

                {/* Article */}
                <article className="prose prose-lg max-w-none">
                  {renderContent()}
                </article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Share */}
                <div className="border-t border-b py-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-medium">Share this article:</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Share on Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Share on Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </Button>
                    </div>
                    <Button variant="outline" className="ml-auto gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save for later
                    </Button>
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {prevPost && (
                    <Link
                      href={`/blogs/${prevPost.slug}`}
                      className="flex flex-col gap-1 rounded-lg border p-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="flex items-center text-sm text-gray-500">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Previous Article
                      </div>
                      <div className="font-medium">{prevPost.title}</div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blogs/${nextPost.slug}`}
                      className="flex flex-col gap-1 rounded-lg border p-4 text-right transition-colors hover:bg-gray-50 sm:ml-auto"
                    >
                      <div className="flex items-center justify-end text-sm text-gray-500">
                        Next Article
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                      <div className="font-medium">{nextPost.title}</div>
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold">About the Author</h3>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={
                          post.authorImage ||
                          "/placeholder.svg?height=64&width=64"
                        }
                        alt={post.author || "Author"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        {post.author || "IOES Team"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {post.author == "Shourya"
                          ? "Marketing Associate"
                          : "Education Consultant"}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Expert in international education with years of experience
                    helping students achieve their study abroad goals.
                  </p>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold">Related Articles</h3>
                  <div className="mt-4 space-y-4">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blogs/${relatedPost.slug}`}
                          className="flex gap-4 group"
                        >
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={
                                relatedPost.image ||
                                "/placeholder.svg?height=64&width=64"
                              }
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="mt-1 text-xs text-gray-500">
                              {formatDate(relatedPost.publishedAt)}
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        No related articles found
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/blogs">View All Articles</Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  className="rounded-lg border bg-[#102324] p-6 shadow-sm text-white"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <h3 className="text-lg font-bold">Stay Updated</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Subscribe to our newsletter for the latest articles,
                    resources, and updates.
                  </p>
                  <div className="mt-4 space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <Button className="w-full bg-[#ED4746] hover:bg-[#ED4746]/90">
                      Subscribe
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
