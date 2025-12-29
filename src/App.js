import { useState , useEffect} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import CodeViewer from "./CodeViewer";
import { files } from "./files.js";


function App() {
  const [currentFile, setCurrentFile] = useState(
    localStorage.getItem("lastFile")
  );

  useEffect(() => {
    if (currentFile) {
      localStorage.setItem("lastFile", currentFile);
    }
  }, [currentFile]);


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-color-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };


  return (
    <div className="app">
      <Sidebar currentFile={currentFile} onFileSelect={setCurrentFile} />
      <main className="main-content">
        <div className="header">
          <h1>{currentFile || "Select a file"}</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <div className="meta">
            {currentFile && (
              <>
                <span className="file-index">
                  {files.indexOf(currentFile) + 1} of {files.length}
                </span>
              </>
            )}
          </div>
        </div>
        {currentFile ? (
          <CodeViewer file={currentFile} />
        ) : (
          <div className="empty-state">
            <p>👈 Select a file from the sidebar to view</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
