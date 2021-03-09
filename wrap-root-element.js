import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./src/components/CodeBlock";
import { preToCodeBlock } from "mdx-utils";

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <CodeBlock {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
