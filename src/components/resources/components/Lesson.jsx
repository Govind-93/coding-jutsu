import "./lesson.css";
import info_logo from "../assets/info.svg";
import clipboard_logo from "../assets/clipboard.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import Markdown from "markdown-to-jsx";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocation } from "react-router-dom";

const Text = ({ text }) => {
  return (
    <div className="text">
      <p>
        <Markdown>{text}</Markdown>
      </p>
    </div>
  );
};

const Note = ({ note }) => {
  return (
    <div className="note">
      <img src={info_logo} alt="Note" />
      <p>
        <Markdown>{note}</Markdown>
      </p>
    </div>
  );
};

const Snippet = ({ lang, code }) => {
  const { theme } = useContext(ThemeContext);

  const style = {
    fontSize: "var(--normal-font-size)",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
  };

  if (theme === "Light") {
    style.background = "#EEF";
  }

  var handle = null;

  return (
    <div className="snippet">
      <span className="lang">{lang}</span>
      <SyntaxHighlighter
        language={lang}
        style={theme === "Dark" ? atomOneDark : atomOneLight}
        customStyle={style}
      >
        {code}
      </SyntaxHighlighter>
      <span className="copied">Copied!</span>
      <img
        src={clipboard_logo}
        className="clipboard"
        onClick={() => {
          navigator.clipboard.writeText(code);
          if (!handle) {
            const e = document.querySelector(".copied");
            e.classList.add("copied-anim");
            handle = setTimeout(() => {
              e.classList.remove("copied-anim");
              handle = null;
            }, 2000);
          }
        }}
      />
    </div>
  );
};

const prune = (s) => {
  const arr = [];

  let i = -1;

  while (true) {
    i = s.indexOf("```");
    if (i === -1) {
      break;
    }
    const text = s.slice(0, i - 1).trim();
    if (text) {
      arr.push({ type: "text", content: text });
    }
    s = s.slice(i + 3, -1);
    i = s.indexOf("\n");
    const lang = s.slice(0, i);
    const code = s.slice(i + 1, (i = s.indexOf("```")));
    s = s.slice(i + 3, -1);
    arr.push({ type: lang, content: code });
  }

  return arr;
};

function Lesson() {
  const { state } = useLocation();

  const arr = prune(state?.text);

  return (
    <div className="lesson">
      <h1 className="heading">{state?.name}</h1>
      {arr.map(({ type, content }) => {
        switch (type) {
          case "text":
            return <Text text={content} />;
          case "note":
            return <Note note={content} />;
          default:
            return <Snippet lang={type} code={content} />;
        }
      })}
    </div>
  );
}

export default Lesson;
