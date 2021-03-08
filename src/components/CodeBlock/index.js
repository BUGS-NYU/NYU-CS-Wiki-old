import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Confetti from "react-dom-confetti";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { colors, isGitCommand, isComment } from "../CodeBlock/util";
import Button from "./Button";
import styled from "styled-components";

const CodeBlock = ({ codeString, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = str => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

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
      <Wrapper>
        <Highlight {...defaultProps} code={codeString} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
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
                      // handle our own custom coloring;
                      if (isComment(token.content)) {
                        return (
                          <Line
                            {...getTokenProps({ token, key })}
                            type={"comment"}
                          />
                        );
                      } else if (isGitCommand(token.content)) {
                        const parsedTokens = token.content.split(" ");
                        return parsedTokens.map((token, key) => {
                          return (
                            <Line
                              children={`${token} `}
                              type={token}
                              key={key}
                            />
                          );
                        });
                      } else {
                        return <Line {...getTokenProps({ token, key })} />;
                      }
                    })}
                  </Lines>
                ))}
              </Terminal>
            );
          }}
        </Highlight>
        <ConfettiWrapper>
          <Confetti active={isCopied} config={config} />
        </ConfettiWrapper>
      </Wrapper>
    );
  }
};

const config = {
  angle: 90,
  spread: 30,
  startVelocity: 40,
  elementCount: 50,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "5px",
  height: "5px",
  perspective: "600px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Wrapper = styled.div`
  position: relative;
`;

const ConfettiWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

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
  padding-top: 0.25rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 400;
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
  color: ${({ type }) => {
    if (type === "comment") {
      return "#6c6783";
    } else if (type in colors) {
      return colors[type];
    } else {
      return "white!important";
    }
  }};
`;

export default CodeBlock;
