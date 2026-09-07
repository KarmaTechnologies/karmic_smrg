"use client";

import { useState } from "react";
import { Article } from "@/types/journal";

type Tab = {
  id: string;
  label: string;
  content?: string;
};

export default function JournalSidebar({
  tabs,
  articles,
}: {
  tabs: Tab[];
  articles?: Article[];
}) {
  const allTabs = [...tabs];
  if (articles && articles.length > 0) {
    allTabs.push({ id: "articles", label: "Articles" });
  }

  const [active, setActive] = useState(allTabs[0]?.id || "");
  const activeTab = allTabs.find((t) => t.id === active);

  return (
    <div className="journal-sidebar-layout">
      <aside className="journal-sidebar-nav">
        {allTabs.map((tab) => (
          <button
            key={tab.id}
            className={`journal-sidebar-btn ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      <div className="journal-sidebar-content">
        {activeTab?.id === "articles" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Articles
            </h2>
            <div className="journal-articles-scroll">
              {articles!.map((article) => (
                <div key={article.id} className="journal-article-card">
                  <h3 className="journal-article-title">{article.title}</h3>
                  {article.authors && article.authors.length > 0 && (
                    <p className="journal-article-authors">
                      <strong>Authors:</strong> {article.authors.join(", ")}
                    </p>
                  )}
                  {article.article_type && (
                    <p className="journal-article-field">
                      <strong>Type:</strong> {article.article_type}
                    </p>
                  )}
                  {article.publication_status && (
                    <p className="journal-article-field">
                      <strong>Status:</strong> {article.publication_status}
                    </p>
                  )}
                  {article.abstract && (
                    <p className="journal-article-abstract">
                      <strong>Abstract:</strong> {article.abstract}
                    </p>
                  )}
                  <div className="journal-article-meta">
                    {article.volume && (
                      <span>
                        <strong>Volume:</strong> {article.volume}
                      </span>
                    )}
                    {article.issue && (
                      <span>
                        <strong>Issue:</strong> {article.issue}
                      </span>
                    )}
                    {article.publication_date && (() => {
                        const d = new Date(article.publication_date);
                        const day = String(d.getDate()).padStart(2, "0");
                        const month = String(d.getMonth() + 1).padStart(2, "0");
                        const year = d.getFullYear();
                        return (
                          <span>
                            <strong>Published:</strong> {day}/{month}/{year}
                          </span>
                        );
                      })()}
                  </div>
                  {article.media && article.media.length > 0 && (
                    <div className="journal-article-media">
                      {article.media.map((m, i) => (
                        <a
                          key={i}
                          href={`https://smrg.arditsonline.com/public/public/${m.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                        >
                          {m.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          activeTab?.content && (
            <div>
              <h2 className="title" style={{ marginBottom: "1rem" }}>
                {activeTab.label}
              </h2>
              {activeTab.content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginTop: i > 0 ? "1rem" : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
