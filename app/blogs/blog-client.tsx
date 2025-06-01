"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { type BlogPost } from "../../data/blog-posts";
import { motion } from "framer-motion";

// Animation variants
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

interface BlogClientProps {
  initialPosts?: any[];
}

export default function BlogClient({ initialPosts = [] }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  // Fetch all categories and tags on component mount
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch("/api/blogs/metadata");
        const data = await response.json();
        setAllCategories(data.categories || []);
        setAllTags(data.tags || []);
      } catch (error) {
        console.error("Error fetching metadata:", error);
        // Fallback to categories and tags from current posts
        setAllCategories(
          Array.from(new Set(allPosts.map((post) => post.category)))
        );
        setAllTags(Array.from(new Set(allPosts.flatMap((post) => post.tags))));
      }
    };

    fetchMetadata();
  }, []);

  // Load more posts function
  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/blogs?offset=${allPosts.length}&limit=5`
      );
      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setAllPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 5) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let result = allPosts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(query))
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
  }, [searchQuery, selectedCategory, selectedTag, allPosts]);

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
    <>
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#102324] to-[#1c3638]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
          <div className="grid gap-10 md:grid-cols-[1fr_300px] items-start">
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
                <>
                  <motion.div
                    className="space-y-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredPosts.map((post) => (
                      <motion.article
                        key={post.id || post.slug}
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
                                post.image ||
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
                                {post.timeToRead}
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
                                      post.authorImage ||
                                      "/placeholder.svg?height=32&width=32"
                                    }
                                    alt={post.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="text-sm font-medium">
                                  {post.author}
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

                  {/* Load More Button */}
                  {hasMore &&
                    !searchQuery &&
                    !selectedCategory &&
                    !selectedTag && (
                      <motion.div
                        className="flex justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Button
                          onClick={loadMorePosts}
                          disabled={isLoading}
                          className="px-8 py-2 bg-[#102324] hover:bg-[#1c3638] text-white"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Loading...
                            </>
                          ) : (
                            "Load More Articles"
                          )}
                        </Button>
                      </motion.div>
                    )}
                </>
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
            <aside className="md:sticky md:top-8 md:self-start md:pt-16">
              <div className="space-y-8">
                {/* Categories */}
                <motion.div
                  className="rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold">Categories</h3>
                  <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                    {allCategories.map((category: string) => (
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
                  <div className="mt-4 flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                    {allTags.map((tag: string) => (
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
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
