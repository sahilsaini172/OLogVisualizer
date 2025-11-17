import { Code2, X } from "lucide-react";
import IconButton from "./Buttons/IconButton";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TonalButton from "./Buttons/TonalButton";

export default function CodeSnippet({ data }) {
  const [showCode, setShowCode] = useState(false);
  const [language, setLanguage] = useState("javascript");
  return (
    <div
      className="flex flex-1 flex-col items-end ease-in duration-150  relative focus:outline-0"
      tabIndex={0}
    >
      <IconButton onClick={() => setShowCode(!showCode)}>
        {showCode ? <X /> : <Code2 />}
      </IconButton>
      {showCode && (
        <div
          className={`flex flex-col justify-start rounded-xl absolute w-[90vw] max-w-[500px] h-[50vh] max-h-[500px] select-text right-0 top-11 z-9 text-sm bg-[#282C34] p-2 shadow-2xl ${
            showCode ? "opacity" : "opacity-0"
          }`}
        >
          <div className="flex items-start justify-end gap-1">
            <TonalButton
              text="Javascript"
              onClick={() => setLanguage("javascript")}
            />
            <TonalButton text="C" onClick={() => setLanguage("c")} />
            <TonalButton text="C++" onClick={() => setLanguage("cpp")} />
          </div>
          <SyntaxHighlighter
            wrapLongLines={true}
            language={language}
            style={atomOneDarkReasonable}
          >
            {data[language] || "//No code available for this language."}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
