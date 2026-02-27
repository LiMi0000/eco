import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";
import { ArrowLeft } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
  const { id } = useParams();
  const { t } = useTranslation();

  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm p-8 border border-stone-200">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <p className="text-gray-600 mt-2">
            The blog post you’re looking for doesn’t exist.
          </p>
          <Link
            to="/#blog"
            className="inline-block mt-6 rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-semibold hover:bg-green-700"
          >
            <ArrowLeft className="inline mr-2" size={20} />
            {t("common.back", "Mbrapa")}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(post.titleKey);
  const excerpt = t(post.excerptKey);
  const author = t(post.authorKey);
  const contentHtml = t(post.contentKey);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/#blog"
            className="text-sm font-medium text-green-700 hover:text-green-800"
          >
            <ArrowLeft className="inline mr-2" size={20} />
            {t("common.back", "Mbrapa")}
          </Link>

          <div className="fixed bottom-4 right-4 md:static z-50">
            <LanguageSelector />
          </div>
        </div>

        <article>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(post.tagKeys || []).map((tagKey) => (
              <span
                key={tagKey}
                className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {t(`blogs.tags.${tagKey}`)}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {title}
          </h1>

          {/* Author + Date */}
          <div className="mt-6 text-gray-500 text-sm">
            <span className="font-medium text-gray-900">{author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          <div className="w-full h-px bg-gray-200 my-10" />

          {/* Excerpt */}
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            {excerpt}
          </p>

          {/* Content from sq.json / mk.json */}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </div>
  );
}
