"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Article,
  JournalIssue,
  JournalVolume,
  Keyword,
  PersonMember,
} from "@/types/journal";
import { slugify } from "@/lib/helpers";

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

function formatDate(value?: string): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function asNumber(value: string | number | undefined): number {
  if (value === undefined || value === null || value === "") return -1;
  const n = Number(value);
  return Number.isFinite(n) ? n : -1;
}

function sortVolumes(volumes: JournalVolume[]): JournalVolume[] {
  return [...volumes].sort(
    (a, b) =>
      asNumber(b.publishing_year) - asNumber(a.publishing_year) ||
      asNumber(b.volume_no) - asNumber(a.volume_no)
  );
}

function sortIssues(issues: JournalIssue[]): JournalIssue[] {
  return [...issues].sort((a, b) => {
    const dateA = a.publication_date ? new Date(a.publication_date).getTime() : 0;
    const dateB = b.publication_date ? new Date(b.publication_date).getTime() : 0;
    return dateB - dateA || asNumber(b.issue_no) - asNumber(a.issue_no);
  });
}

function ArticleCards({
  articles,
  journalSlug,
}: {
  articles: Article[];
  journalSlug: string;
}) {
  return (
    <div className="journal-articles-scroll">
      {articles.map((article, index) => (
        <div key={article.id ?? index} className="journal-article-card">
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
              const formatted = formatDate(article.publication_date);
              return formatted ? (
                <span>
                  <strong>Published:</strong> {formatted}
                </span>
              ) : null;
            })()}
          </div>
          <div className="journal-article-actions">
            <Link
              href={`/journal/${journalSlug}/article/${article.slug || slugify(article.title) || article.id}`}
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
  );
}

export default function JournalSidebar({
  tabs,
  articles = [],
  journalSlug,
  keywords = [],
  peopleMembers = [],
  highlights,
  volumes = [],
}: {
  tabs: Tab[];
  articles?: Article[];
  journalSlug: string;
  keywords?: Keyword[];
  peopleMembers?: PersonMember[];
  highlights?: string | string[];
  volumes?: JournalVolume[];
}) {
  const allTabs = [...tabs];
  allTabs.push({ id: "highlights", label: "Highlights" });
  allTabs.push({ id: "articles", label: "Articles" });
  allTabs.push({ id: "keywords", label: "Keywords" });
  allTabs.push({ id: "people-members", label: "People and Members" });
  allTabs.push({ id: "current-issue", label: "Current Issue" });
  allTabs.push({ id: "articles-in-press", label: "Articles in Press" });
  allTabs.push({ id: "volumes", label: "Volumes" });
  allTabs.push({ id: "issues", label: "Issues" });

  const highlightList = highlightItems(highlights);

  const sortedVolumes = sortVolumes(volumes);
  const currentVolume = sortedVolumes[0];
  const currentIssue = currentVolume
    ? sortIssues(currentVolume.issues ?? [])[0]
    : undefined;
  const currentIssueArticles = currentIssue?.articles ?? [];

  const articlesInPress = articles.filter((article) =>
    (article.publication_status ?? "").toLowerCase().includes("in press")
  );

  const allIssues = sortedVolumes.flatMap((volume) =>
    sortIssues(volume.issues ?? []).map((issue) => ({ volume, issue }))
  );

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
            {articles.length === 0 ? (
              <p>No articles available yet.</p>
            ) : (
              <ArticleCards articles={articles} journalSlug={journalSlug} />
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
        ) : activeTab?.id === "current-issue" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Current Issue
            </h2>
            {!currentVolume || !currentIssue ? (
              <p>No current issue available yet.</p>
            ) : (
              <div>
                <div className="journal-issue-header">
                  <h3 className="journal-issue-heading">
                    Volume {currentVolume.volume_no ?? "—"} · Issue{" "}
                    {currentIssue.issue_no ?? "—"}
                  </h3>
                  {(currentVolume.publishing_year || currentIssue.publication_date) && (
                    <p className="journal-volume-meta">
                      {currentVolume.publishing_year && (
                        <span>Year: {currentVolume.publishing_year}</span>
                      )}
                      {formatDate(currentIssue.publication_date) && (
                        <span>
                          Published: {formatDate(currentIssue.publication_date)}
                        </span>
                      )}
                    </p>
                  )}
                </div>
                {currentIssueArticles.length > 0 ? (
                  <ArticleCards
                    articles={currentIssueArticles}
                    journalSlug={journalSlug}
                  />
                ) : (
                  <p>No articles in this issue yet.</p>
                )}
              </div>
            )}
          </div>
        ) : activeTab?.id === "articles-in-press" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Articles in Press
            </h2>
            {articlesInPress.length === 0 ? (
              <p>No articles in press available yet.</p>
            ) : (
              <ArticleCards
                articles={articlesInPress}
                journalSlug={journalSlug}
              />
            )}
          </div>
        ) : activeTab?.id === "volumes" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Volumes
            </h2>
            {sortedVolumes.length === 0 ? (
              <p>No volumes available yet.</p>
            ) : (
              <div className="journal-volume-list">
                {sortedVolumes.map((volume, i) => {
                  const issues = sortIssues(volume.issues ?? []);
                  return (
                    <div
                      key={`${volume.volume_no}-${volume.publishing_year}-${i}`}
                      className="journal-volume-card"
                    >
                      <h3 className="journal-volume-title">
                        Volume {volume.volume_no ?? "—"}
                      </h3>
                      <p className="journal-volume-meta">
                        {volume.publishing_year && (
                          <span>Year: {volume.publishing_year}</span>
                        )}
                        <span>
                          {issues.length} issue{issues.length === 1 ? "" : "s"}
                        </span>
                      </p>
                      {issues.length > 0 && (
                        <div className="journal-issue-chips">
                          {issues.map((issue, j) => {
                            const date = formatDate(issue.publication_date);
                            return (
                              <span
                                key={`${issue.issue_no}-${j}`}
                                className="journal-issue-chip"
                              >
                                Issue {issue.issue_no ?? "—"}
                                {date ? ` · ${date}` : ""}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : activeTab?.id === "issues" ? (
          <div>
            <h2 className="title" style={{ marginBottom: "1rem" }}>
              Issues
            </h2>
            {allIssues.length === 0 ? (
              <p>No issues available yet.</p>
            ) : (
              <div className="journal-volume-list">
                {allIssues.map(({ volume, issue }, i) => (
                  <div
                    key={`${volume.volume_no}-${issue.issue_no}-${i}`}
                    className="journal-volume-card"
                  >
                    <h3 className="journal-volume-title">
                      Volume {volume.volume_no ?? "—"} · Issue{" "}
                      {issue.issue_no ?? "—"}
                    </h3>
                    <p className="journal-volume-meta">
                      {volume.publishing_year && (
                        <span>Year: {volume.publishing_year}</span>
                      )}
                      {formatDate(issue.publication_date) && (
                        <span>
                          Published: {formatDate(issue.publication_date)}
                        </span>
                      )}
                      <span>
                        {issue.articles?.length ?? 0} article
                        {(issue.articles?.length ?? 0) === 1 ? "" : "s"}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
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
