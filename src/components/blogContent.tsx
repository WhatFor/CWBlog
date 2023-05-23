import type { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Prism from "prismjs";
import { useEffect } from "react";

import ContentfulTypes from "@contentful/rich-text-types";
const { MARKS } = ContentfulTypes;

// Manually load any required non-default languages
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-tsx.min";
import "prismjs/components/prism-csharp.min";
import "prismjs/components/prism-bash.min";

// Manually load line-numbers plugin
import "prismjs/plugins/line-numbers/prism-line-numbers.min";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Manually load copy-to-clipboard plugin
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

import "../styles/blogPost.scss";
import "../../node_modules/prism-themes/themes/prism-dracula.css";

interface Props {
  body: Document;
}

const languageIdentifierRegex = /^lang:(\w+)/;
const options = {
  renderMark: {
    [MARKS.CODE]: (text: any) => {
      if (!languageIdentifierRegex.test(text)) {
        return <code>{text}</code>;
      }
      const language = languageIdentifierRegex.exec(text)![1];
      return (
        <pre className="line-numbers">
          <code className={`language-${language}`}>
            {text.split("\n").slice(1).join("\n")}
          </code>
        </pre>
      );
    },
  },
};

const BlogContent = ({ body }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article className="px-1 py-0 lg:px-8 lg:py-5" id="blog-post-content">
      {documentToReactComponents(body, options)}
    </article>
  );
};

export default BlogContent;
