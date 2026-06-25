import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { buildProfilePageSchema } from "../src/seo";

const distPath = join(process.cwd(), "dist", "index.html");
const html = readFileSync(distPath, "utf8");
const appHtml = renderToString(<App />);
const schemaJson = JSON.stringify(buildProfilePageSchema()).replace(/</g, "\\u003c");

const prerendered = html
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replace(
    "</head>",
    `<script type="application/ld+json" id="profile-schema">${schemaJson}</script></head>`,
  );

writeFileSync(distPath, prerendered);
