import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import { buildProfilePageSchema, injectDocumentMetadata } from "./seo";

injectDocumentMetadata();
injectProfileSchema();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function injectProfileSchema() {
  if (document.getElementById("profile-schema")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "profile-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(buildProfilePageSchema());
  document.head.append(script);
}
