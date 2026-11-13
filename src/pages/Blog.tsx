import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  MagnifyingGlass,
  ArrowRight,
  Clock,
  CalendarBlank,
} from "@phosphor-icons/react";
import { Reveal, RevealText } from "../components/ui";
import {
  getPublishedBlogPosts,
  getFeaturedBlogPost,
  getAllBlogCategories,
} from "../data/blogs";
import { CtaBand } from "./Home";

const WRAP = "mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = useMemo(() => getPublishedBlogPosts(), []);
  const featuredPost = useMemo(() => getFeaturedBlogPost(), []);
  const categories = useMemo(() => getAllBlogCategories(), []);

  // Filter posts dynamically
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="bg-[#050713] text-white min-h-screen">
      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-14 sm:pt-36 sm:pb-18 lg:pt-40 lg:pb-20">
        {/* Subtle background ambient gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-full max-w-6xl rounded-full bg-gradient-to-b from-violet-900/20 via-indigo-950/10 to-transparent blur-[120px]"
        />

        <div className={WRAP}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c4b5fd]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B4FF00]" />
              <span>Envista Threat Research & Advisory</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] leading-[1.1]">
              <RevealText
                text="Articles, Advisories & Technical Field Notes."
                stagger={35}
              />
            </h1>

            <Reveal delay={120}>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl font-normal">
                Analysis on enterprise attack surfaces, DPDP compliance engineering,
                adversary emulation findings, and cloud risk mitigation from practicing
                cyber defence architects.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED ADVISORY (Editorial Spotlight) */}
      {featuredPost && selectedCategory === "All" && searchQuery === "" && (
        <section className="border-b border-white/10 bg-[#080a18] py-12 sm:py-16">
          <div className={WRAP}>
            <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#111428] to-[#0c0e1e] p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[#B4FF00]/40">
              {/* Subtle top indicator line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B4FF00] to-transparent opacity-60"
              />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                <div className="flex-1 space-y-4">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded bg-[#B4FF00] px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-950">
                      Featured Advisory
                    </span>
                    <span className="font-mono text-xs text-violet-300">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-slate-400">
                      <CalendarBlank size={13} />
                      {featuredPost.publishedAt}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-slate-400">
                      <Clock size={13} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${featuredPost.slug}`} className="block group">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white transition-colors group-hover:text-[#B4FF00] leading-snug">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Card & CTA Action */}
                <div className="lg:w-72 shrink-0 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Research Author
                    </span>
                    <div className="mt-3 flex items-center gap-3">
                      {featuredPost.author.avatar ? (
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="h-12 w-12 rounded-full object-cover border border-white/20"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-violet-600/40 border border-violet-400/40 flex items-center justify-center font-bold text-xs text-white">
                          {featuredPost.author.initials}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-tight">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B4FF00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#B4FF00]/15"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: DIRECTORY WITH SEARCH & CATEGORY FILTERS */}
      <section className="py-14 sm:py-20">
        <div className={WRAP}>
          {/* Controls Bar: Category Navigation & Search Bar */}
          <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? allPosts.length
                    : allPosts.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-slate-950 font-bold shadow-sm"
                        : "border border-white/15 bg-white/[0.04] text-slate-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        isActive
                          ? "bg-slate-900/20 text-slate-950"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <MagnifyingGlass
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & keywords..."
                className="w-full rounded-full border border-white/15 bg-white/[0.05] pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-[#B4FF00] focus:bg-white/[0.08] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center my-8">
              <h3 className="font-display text-lg font-bold text-white">
                No matching articles found
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Try searching for different keywords or reset your category selection.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:border-[#B4FF00] hover:text-[#B4FF00]"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <article className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-[#0a0d1f] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4FF00]/60 hover:shadow-[0_12px_36px_rgba(180,255,0,0.12)]">
                    <div>
                      {/* Top Category & Read Time */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#c4b5fd]">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link to={`/blog/${post.slug}`} className="block mt-3">
                        <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#B4FF00]">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom Row: Author & Action Link */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {post.author.avatar ? (
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full object-cover shrink-0 border border-white/20"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-violet-600/30 text-violet-300 border border-violet-400/30 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {post.author.initials}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="truncate text-xs font-bold uppercase tracking-wider text-white">
                            {post.author.name}
                          </div>
                          <div className="truncate text-[10px] text-slate-400">
                            {post.publishedAt}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="shrink-0 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-[#B4FF00] transition-transform group-hover:translate-x-1"
                        aria-label={`Read ${post.title}`}
                      >
                        <span>Read</span>
                        <ArrowRight size={13} weight="bold" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CtaBand />
    </div>
  );
}
