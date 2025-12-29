import { useEffect, useState } from "react";
import { filesByCategory } from "./files";

export default function Sidebar({ currentFile, onFileSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFolders, setOpenFolders] = useState({});

  useEffect(() => {
    if (!currentFile) return;

    Object.entries(filesByCategory).forEach(([_, category]) => {
      if (currentFile.startsWith(category.path)) {
        setOpenFolders((prev) => ({
          ...prev,
          [category.path]: true,
        }));
      }
    });
  }, [currentFile]);

  const filteredCategories = Object.entries(filesByCategory)
    .map(([categoryName, categoryData]) => {
      const filteredFiles = categoryData.files.filter((file) =>
        file.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        categoryName,
        path: categoryData.path,
        files: filteredFiles,
      };
    })
    .filter((category) => category.files.length > 0);

  const toggleFolder = (path) => {
    setOpenFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <h2>📝 JS Notes</h2>
        <input
          type="text"
          placeholder="Search files..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Folder + File List */}
      <div className="file-list">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(({ categoryName, path, files }) => {
            const isOpen = openFolders[path];

            return (
              <div key={path} className="folder">
                {/* Folder Header */}
                <button
                  className="folder-title"
                  onClick={() => toggleFolder(path)}
                >
                  <span>{isOpen ? "📂" : "📁"}</span>
                  <span>{categoryName}</span>
                </button>

                {/* Files */}
                {isOpen &&
                  files.map((file) => {
                    const fullPath = `${path}/${file}`;

                    return (
                      <button
                        key={fullPath}
                        className={`file-button ${
                          fullPath === currentFile ? "active" : ""
                        }`}
                        onClick={() => onFileSelect(fullPath)}
                        title={file}
                      >
                        <span className="file-icon">📄</span>
                        <span className="file-name">{file}</span>
                      </button>
                    );
                  })}
              </div>
            );
          })
        ) : (
          <div className="no-files">No files found</div>
        )}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <small>
          {Object.values(filesByCategory).reduce(
            (acc, cat) => acc + cat.files.length,
            0
          )}{" "}
          files total
        </small>
      </div>
    </aside>
  );
}
