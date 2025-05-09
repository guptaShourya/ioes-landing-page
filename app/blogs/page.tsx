"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { blogPosts, type BlogPost } from "../../data/blog-posts";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  // Get unique tags
  const allTags = blogPosts.flatMap((post) => post.tags);
  const uniqueTags = Array.from(new Set(allTags));

  useEffect(() => {
    let result = blogPosts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#102324] to-[#1c3638]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-5xl font-normal font-satoshi tracking-tighter text-white sm:text-7xl font-normal">
                  IOES
                  <span className="font-nibpro font-light italic"> Blog </span>
                </h1>
                <p className="max-w-[700px] text-white/80 md:text-xl font-light">
                  Insights, guides, and expert advice for your international
                  education journey
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="w-full appearance-none bg-white pl-10 shadow-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blog Content Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#f0ebe6] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1fr_300px]">
              {/* Main Content */}
              <div className="space-y-10">
                {/* Filter Status */}
                {(selectedCategory || selectedTag || searchQuery) && (
                  <motion.div
                    className="flex flex-wrap items-center gap-2 rounded-lg bg-blue-50 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-sm text-gray-600">
                      Filtered by:
                      {selectedCategory && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {selectedCategory}
                        </span>
                      )}
                      {selectedTag && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {selectedTag}
                        </span>
                      )}
                      {searchQuery && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                          "{searchQuery}"
                        </span>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="ml-auto text-gray-500 hover:text-gray-700"
                    >
                      Clear Filters
                    </Button>
                  </motion.div>
                )}

                {/* Results Count */}
                <div className="text-sm text-gray-500">
                  Showing {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "article" : "articles"}
                </div>

                {/* Blog Posts */}
                {filteredPosts.length > 0 ? (
                  <motion.div
                    className="space-y-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredPosts.map((post) => (
                      <motion.article
                        key={post.id}
                        className="group rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
                        variants={itemFadeIn}
                      >
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="block overflow-hidden"
                        >
                          <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px]">
                            <Image
                              src={
                                post.coverImage ||
                                "/placeholder.svg?height=600&width=800"
                              }
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.publishedAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readingTime}
                              </span>
                            </div>
                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600">
                              {post.title}
                            </h2>
                            <p className="mt-2 line-clamp-3 text-gray-600">
                              {post.excerpt}
                            </p>
                            <div className="mt-4 flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                  <Image
                                    src={
                                      post.author.avatar ||
                                      "/placeholder.svg?height=32&width=32"
                                    }
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="text-sm font-medium">
                                  {post.author.name}
                                </span>
                              </div>
                              <div className="ml-auto text-sm font-medium text-blue-600 group-hover:text-blue-800">
                                Read more
                                <ChevronRight className="ml-1 inline-block h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Search className="h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">
                      No articles found
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold">Categories</h3>
                  <div className="mt-4 space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category ? null : category
                          )
                        }
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-100 text-blue-800"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold">Popular Tags</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uniqueTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          setSelectedTag(selectedTag === tag ? null : tag)
                        }
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                          selectedTag === tag
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Featured Article */}
                <motion.div
                  className="rounded-lg border bg-white shadow-sm overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="relative h-[150px] w-full">
                    <Image
                      src="/blogs/featured-post.jpg"
                      alt="Featured article"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4">
                      <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold">Subscribe to Our Newsletter</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Get the latest articles, resources, and updates delivered
                      to your inbox.
                    </p>
                    <div className="mt-4 space-y-2">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="w-full"
                      />
                      <Button className="w-full bg-[#ED4746] hover:bg-[#ED4746]/90">
                        Subscribe
                      </Button>
                    </div>
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
