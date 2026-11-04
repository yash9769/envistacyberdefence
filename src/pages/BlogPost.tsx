import { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  Clock,
  Copy,
  Check,
  LinkedinLogo,
  XLogo,
  ShareNetwork,
} from "@phosphor-icons/react";
import { Kicker, Btn } from "../components/ui";
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
  type BlogPost as BlogPostType,
} from "../data/blogs";
import { CtaBand } from "./Home";

const WRAP = "mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post: BlogPostType | undefined = useMemo(() => {
    return slug ? getBlogPostBySlug(slug) : undefined;
  }, [slug]);

  const relatedPosts = useMemo(() => {
    return slug ? getRelatedBlogPosts(slug, 3) : [];
  }, [slug]);

  // Set document title & SEO meta tags dynamically
  useEffect(() => {
    if (post) {
      document.title = `${post.seo.metaTitle} | Envista Cyber Defence`;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", post.seo.metaDescription);
    } else {
      document.title = "Article Not Found | Envista Cyber Defence";
    }

    // Scroll to top when slug changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = post ? `${post.title} via Envista Cyber Defence` : "";

  // 404 State if post slug doesn't exist
  if (!post) {
    return (
      <section className="mx-auto flex min-h-[75vh] max-w-[1320px] flex-col items-center justify-center px-6 py-24 text-center">
        <Kicker tone="accent">404 - Article Not Found</Kicker>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          This article does not exist or has been moved.
        </h1>
        <p className="mt-4 max-w-md text-sm text-slate-400">
          The requested article slug could not be located in our publication index.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Btn to="/blog">Browse All Articles</Btn>
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition hover:border-[#B4FF00] hover:text-[#B4FF00]"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#050713] text-white min-h-screen">
      {/* SECTION 1: ARTICLE HERO HEADER */}
      <article className="relative">
        <div className="relative overflow-hidden border-b border-white/10 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          {/* Subtle background ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-5xl rounded-full bg-gradient-to-b from-violet-900/15 via-indigo-950/10 to-transparent blur-[120px]"
          />

          <div className={WRAP}>
            {/* Top Navigation & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 text-xs">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#B4FF00] transition-colors"
              >
                <ArrowLeft size={14} weight="bold" />
                <span>Back to All Articles</span>
              </Link>

              <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-500">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link to="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-[#c4b5fd] truncate max-w-[200px] sm:max-w-xs">
                    {post.category}
                  </li>
                </ol>
              </nav>
            </div>

            {/* Badges & Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded bg-[#B4FF00] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-950">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                <CalendarBlank size={13} />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.14]">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="mt-5 max-w-3xl text-base sm:text-lg font-normal leading-relaxed text-slate-300">
                {post.subtitle}
              </p>
            )}

            {/* Author Bar & Social Share Controls */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full object-cover border border-white/20"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-violet-600/40 border border-violet-400/40 flex items-center justify-center font-bold text-white text-sm">
                    {post.author.initials}
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                  <ShareNetwork size={14} />
                  Share:
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                  className="flex h-9 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-medium text-slate-200 hover:border-[#B4FF00] hover:text-[#B4FF00] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} weight="bold" className="text-[#B4FF00]" />
                      <span className="text-[#B4FF00]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:border-violet-400 hover:bg-violet-600/20 hover:text-white transition-colors"
                >
                  <LinkedinLogo size={16} weight="bold" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                  )}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:border-violet-400 hover:bg-violet-600/20 hover:text-white transition-colors"
                >
                  <XLogo size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ARTICLE BODY CONTENT */}
        <div className="py-14 sm:py-20 lg:py-24 bg-[#070914]">
          <div className="mx-auto w-full max-w-[840px] px-4 sm:px-6 lg:px-8">
            {/* Executive Summary Callout */}
            <div className="mb-12 rounded-2xl border-l-2 border-l-[#B4FF00] border border-white/10 bg-[#0c0e1e] p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#B4FF00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B4FF00]" />
                Executive Brief
              </div>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-200 font-medium">
                {post.excerpt}
              </p>
            </div>

            {/* Render Structured Sections */}
            <div className="space-y-12">
              {post.sections.map((section, idx) => (
                <section key={idx} className="space-y-5">
                  {section.heading && (
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white pt-4">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg leading-relaxed text-slate-300"
                    >
                      {para}
                    </p>
                  ))}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="my-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                      <ul className="space-y-3.5">
                        {section.bulletPoints.map((item, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B4FF00]/15 text-[#B4FF00]">
                              <Check size={12} weight="bold" />
                            </span>
                            <span className="text-sm sm:text-base leading-relaxed text-slate-200">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div
                      className={`my-6 rounded-2xl border p-6 sm:p-7 ${
                        section.callout.type === "warning"
                          ? "border-amber-500/30 bg-amber-950/20"
                          : section.callout.type === "takeaway"
                            ? "border-[#B4FF00]/30 bg-[#121915]"
                            : "border-violet-500/30 bg-violet-950/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            section.callout.type === "warning"
                              ? "bg-amber-400"
                              : section.callout.type === "takeaway"
                                ? "bg-[#B4FF00]"
                                : "bg-violet-400"
                          }`}
                        />
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-300">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Quote Block */}
                  {section.quote && (
                    <div className="my-8 rounded-2xl border-l-4 border-l-violet-500 border border-white/10 bg-gradient-to-r from-violet-950/30 to-transparent p-7">
                      <blockquote className="font-display text-lg sm:text-xl font-semibold italic leading-snug text-white">
                        "{section.quote.text}"
                      </blockquote>
                      {section.quote.author && (
                        <div className="mt-3 font-mono text-xs text-[#c4b5fd]">
                          {section.quote.author}
                        </div>
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags Pill Row */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mr-2">
                Filed under:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Profile Footer Card */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-[#0c0e1e] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-14 w-14 rounded-full object-cover border border-white/20"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-full bg-violet-600/40 text-white font-bold text-lg flex items-center justify-center">
                      {post.author.initials}
                    </div>
                  )}
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#c4b5fd]">
                      Written By
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {post.author.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {post.author.linkedin && (
                  <a
                    href={post.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:border-[#B4FF00] hover:text-[#B4FF00] transition-colors"
                  >
                    <LinkedinLogo size={16} weight="bold" />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#B4FF00] transition-colors"
              >
                <ArrowLeft size={14} weight="bold" />
                <span>All Articles</span>
              </Link>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#B4FF00]" />
                    <span className="text-[#B4FF00]">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Article Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-white/10 bg-[#050713] py-16 sm:py-20">
            <div className={WRAP}>
              <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
                    Related Field Intelligence
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    More from Envista Cyber Defence
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B4FF00] hover:underline"
                >
                  <span>View All Articles</span>
                  <ArrowRight size={13} weight="bold" />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    to={`/blog/${rPost.slug}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0a0d1f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4FF00]/50"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd]">
                          {rPost.category}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          {rPost.readTime}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-base font-bold text-white transition-colors group-hover:text-[#B4FF00] line-clamp-2">
                        {rPost.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs font-semibold text-[#B4FF00]">
                      <span>Read Insight</span>
                      <ArrowRight
                        size={13}
                        weight="bold"
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* Global Bottom CTA */}
      <CtaBand />
    </div>
  );
}
