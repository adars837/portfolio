import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "../helper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

const Answer = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, [ans]);

  const components = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          language={match[1]}
          style={oneDark}
          PreTag="div"
          customStyle={{
            borderRadius: "8px",
            marginTop: "8px",
            marginBottom: "8px",
            fontSize: "0.9rem",
            overflowX: "auto",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-zinc-200 dark:bg-zinc-700 px-1 py-0.5 rounded">
          {children}
        </code>
      );
    },
  };

  let content = null;
  if (index === 0 && totalResult > 1) {
    content = (
      <span className="pt-2 text-xl block text-zinc-800 dark:text-white font-bold">
        {answer}
      </span>
    );
  } else if (heading) {
    content = (
      <span className="pt-2 text-lg block text-zinc-800 dark:text-white font-semibold">
        {answer}
      </span>
    );
  } else {
    content = (
      <div className={`${type === 'q' ? 'pl-1' : 'pl-3'} w-full`}>
        <div className="prose prose-zinc max-w-none dark:prose-invert text-base leading-relaxed transition-colors duration-300">
          <ReactMarkdown components={components}>{answer}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Answer;



