import * as React from "react";
import { render } from "react-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Button from "./CopyButton";
import styled from "styled-components";

const CodeBlock = ({ codeString, language, isLandingPage, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Terminal>
            <TerminalHeader>
              <Title>Terminal</Title>
              <Button
                onClick={() => {
                  copyToClipboard(codeString);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
              >
                {isCopied ? "🎉 Copied!" : "Copy"}
              </Button>
            </TerminalHeader>
            {tokens.map((line, i) => (
              <Lines {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => {
                  return (
                  <Line {...getTokenProps({ token, key })} />
                )})}
              </Lines>
            ))}
          </Terminal>
        )}
      </Highlight>
    );
  }
};

const Terminal = styled.pre`
  width: 100%;
  min-height: 30vh;
  margin: 1rem 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #202947;
  position: relative;

  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
`;

const TerminalHeader = styled.div`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 300;
`;

const Lines = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  user-select: none;
  opacity: 0.5;
  color: rgba(229, 229, 229, 0.4);
`;

const Line = styled.span`
  font-size: 0.9rem;
  // ${({isLandingPage, color}) => isLandingPage ? `
  // color: ${color};`: "color: white !important;"}
`;

export default CodeBlock;
