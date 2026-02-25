import React from 'react';
import blogs from "../data/blogs";
import { useTranslation } from "react-i18next";

export const Blog = () => {
    const { t } = useTranslation();
    return (
        <section id="blog" className="py-20 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("blogs.blogMainTitle")}</h2>
                    <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t("blogs.blogDescription")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <a
                            key={post.id}
                            href={`/blog/${post.id}`}
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-t-4 border-green-500 hover:-translate-y-1"
                        >
                            <div className="flex gap-2 mb-4">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md uppercase tracking-wider"
                                    >
                                        {t(`blogs.blogTag${post.tags.indexOf(tag) + 1}`)}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                                {t(`blogs.blog${post.id}Title`)}
                            </h3>

                            <p className="text-gray-600 mb-6">{t(`blogs.blog${post.id}Description`)}</p>

                            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <span className="font-medium text-gray-900">{t(`blogs.blog${post.id}Author`)}</span>
                                <span>{post.date}</span>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};
