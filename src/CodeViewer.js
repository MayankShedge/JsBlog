import { useEffect, useMemo, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

export default function CodeViewer({ file }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [activeMatch, setActiveMatch] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setSearch("");
    setActiveMatch(0);

    fetch(process.env.PUBLIC_URL + "/code/" + file)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setCode)
      .catch((err) => {
        setError(err.message);
        setCode("");
      })
      .finally(() => setLoading(false));
  }, [file]);

  const highlightedHtml = useMemo(() => {
    if (!code) return "";

    let html = Prism.highlight(
      code,
      Prism.languages.javascript,
      "javascript"
    );

    if (!search) return html;

    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");

    let index = -1;

    return html.replace(regex, (match) => {
      index++;
      return index === activeMatch
        ? `<mark class="active-match">${match}</mark>`
        : `<mark>${match}</mark>`;
    });
  }, [code, search, activeMatch]);

  const matchCount = useMemo(() => {
    if (!search) return 0;
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return (code.match(new RegExp(escaped, "gi")) || []).length;
  }, [code, search]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current.querySelector(".active-match");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeMatch, highlightedHtml]);

  return (
    <div className="code-viewer">
      {/* SEARCH BAR */}
      <div className="code-toolbar">
        <input
          type="text"
          placeholder="Search in file (e.g. async, closure)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setActiveMatch(0);
          }}
        />

        {matchCount > 0 && (
          <div className="search-nav">
            <button
              onClick={() =>
                setActiveMatch((prev) =>
                  prev === 0 ? matchCount - 1 : prev - 1
                )
              }
            >
              ⬆
            </button>

            <span>
              {activeMatch + 1} / {matchCount}
            </span>

            <button
              onClick={() =>
                setActiveMatch((prev) =>
                  prev === matchCount - 1 ? 0 : prev + 1
                )
              }
            >
              ⬇
            </button>
          </div>
        )}
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading && !error && (
        <pre className="code-pre">
          <code
            ref={containerRef}
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      )}
    </div>
  );
}
