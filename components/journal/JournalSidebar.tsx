"use client";

import { useState } from "react";
import Link from "next/link";
import { Article, Keyword, PersonMember } from "@/types/journal";

type Tab = {
  id: string;
  label: string;
  content?: string;
};

function keywordLabel(k: Keyword): string {
  if (typeof k === "string") return k;
  return k.keyword || k.name || k.title || "";
}

function personName(p: PersonMember): string {
  return p.display_name || p.name || "";
}

function personRole(p: PersonMember): string {
  return p.role || p.designation || "";
}

function highlightItems(h?: string | string[]): string[] {
  if (!h) return [];
  if (Array.isArray(h)) return h.map((s) => String(s).trim()).filter(Boolean);
  return h
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function JournalSidebar({
  tabs,
  articles,
  journalSlug,
  keywords = [],
  peopleMembers = [],
  highlights,
}: {
  tabs: Tab[];
  articles?: Article[];
  journalSlug: string;
  keywords?: Keyword[];
  peopleMembers?: PersonMember[];
  highlights?: string | string[];
}) {
  const allTabs = [...tabs];
  allTabs.push({ id: "highlights", label: "Highlights" });
  allTabs.push({ id: "articles", label: "Articles" });
  allTabs.push({ id: "keywords", label: "Keywords" });
  allTabs.push({ id: "people-members", label: "People and Members" });

  const highlightList = highlightItems(highlights);

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

      <div className="journal-sidebar-dropdown-wrap">
        <select
          className="journal-sidebar-dropdown"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          {allTabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      <div className="journal-sidebar-content">
        {activeTab?.id === "highlights" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Highlights
            </h2>
            {highlightList.length > 0 ? (
              <ul className="journal-highlights-list">
                {highlightList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No highlights available yet.</p>
            )}
          </div>
        ) : activeTab?.id === "articles" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Articles
            </h2>
            {!articles || articles.length === 0 ? (
              <p>No articles available yet.</p>
            ) : (
            <div className="journal-articles-scroll">
              {articles.map((article) => (
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
                  <div className="journal-article-actions">
                    <Link
                      href={`/journal/${journalSlug}/article/${article.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                    {article.media && article.media.length > 0 && (
                      <a
                        href={`https://smrg.arditsonline.com/public/public/${article.media[0].url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        {article.media[0].label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        ) : activeTab?.id === "keywords" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Keywords
            </h2>
            {keywords.length > 0 ? (
              <div className="article-keyword-list">
                {keywords.map((kw, i) => {
                  const label = keywordLabel(kw);
                  return label ? (
                    <span key={i} className="article-keyword-tag">
                      {label}
                    </span>
                  ) : null;
                })}
              </div>
            ) : (
              <p>No keywords available yet.</p>
            )}
          </div>
        ) : activeTab?.id === "people-members" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              People and Members
            </h2>
            {peopleMembers.length > 0 ? (
              <div className="journal-people-list">
                {peopleMembers.map((person, i) => (
                  <div key={i} className="journal-person-card">
                    <span className="journal-person-avatar">
                      {(personName(person) || "?").charAt(0).toUpperCase()}
                    </span>
                    <div className="journal-person-info">
                      <span className="journal-person-name">
                        {personName(person) || "—"}
                      </span>
                      {personRole(person) && (
                        <span className="journal-person-role">
                          {personRole(person)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No people and members available yet.</p>
            )}
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
