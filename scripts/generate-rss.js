const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const SITE_URL = "https://www.kaerecomputer.dk";
const SITE_TITLE = "Kære Computer";
const SITE_DESCRIPTION = "Infrequent newsletter about tech.";

function escape(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toHtml(markdown) {
  // Replace lines containing only \ with blank lines so marked creates <p> tags
  const processed = markdown.replace(/^\\\s*$/gm, "");
  let html = marked.parse(processed);
  // Make relative src and href attributes absolute
  html = html.replace(/src="(\/[^"]+)"/g, `src="${SITE_URL}$1"`);
  html = html.replace(/href="(\/[^"]+)"/g, `href="${SITE_URL}$1"`);
  return html;
}

const postsDir = path.join(__dirname, "..", "data", "posts");
const files = fs.readdirSync(postsDir).sort();

const posts = files.map((fileName) => {
  const raw = fs.readFileSync(path.join(postsDir, fileName), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: fileName.replace(".md", ""),
    title: data.title || fileName.replace(".md", ""),
    date: data.date ? new Date(data.date) : null,
    content: content.trim(),
  };
});

const sorted = posts
  .filter((p) => p.date)
  .sort((a, b) => b.date - a.date);

const items = sorted
  .map(
    (p) => `
  <item>
    <title>${escape(p.title)}</title>
    <link>${SITE_URL}/posts/${p.slug}</link>
    <guid>${SITE_URL}/posts/${p.slug}</guid>
    <pubDate>${p.date.toUTCString()}</pubDate>
    <description><![CDATA[${toHtml(p.content)}]]></description>
    <content:encoded><![CDATA[${toHtml(p.content)}]]></content:encoded>
  </item>`
  )
  .join("");

const lastBuildDate = sorted.length > 0 ? sorted[0].date.toUTCString() : new Date().toUTCString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>${escape(SITE_DESCRIPTION)}</description>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>${items}
  </channel>
</rss>`;

const outPath = path.join(__dirname, "..", "public", "rss.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`RSS feed written to ${outPath} (${sorted.length} posts)`);
