import { useState, useEffect } from "react";
import "./adapter.css";
import { Link, useNavigate } from "react-router-dom";

function Adapter({ name, link, linkName, data, id }) {
  const key = `resource-adapter-${id}`;
  const [mode, setMode] = useState(1);
  const navigate = useNavigate()

  const toggleMode = () => {
    setMode((prev) => (prev === 1 ? 2 : 1));
  };

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setMode(parseInt(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, mode);
  }, [mode]);

  return (
    <div className="adapter">
      <div className="adapter-header">
        {name && <h2 className="adapter-heading">{name}</h2>}

        <button className="adapter-mode" onClick={toggleMode}>
          {mode === 1 ? "Card" : "List"}
        </button>

        {link && (
          <Link to={`/resources/${link}`}>
            <button className="adapter-link">{linkName || "View All"}</button>
          </Link>
        )}
      </div>

      <div className={mode === 1 ? "adapter-body-card" : "adapter-body-list"}>
        {data.map(([topic, content, background]) => (
          <div
            className={mode === 1 ? "adapter-slide-card" : "adapter-slide-list"}
            style={{ background: background }}
            onClick={() => navigate(`/resources/${link}/lesson`)}
          >
            {/* ----------------------------------- */}

            <div className="adapter-slide-topic">
              <div>{topic}</div>
            </div>

            <div className="adapter-slide-content">
              <div>{content}</div>
            </div>

            {/* ----------------------------------- */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adapter;
