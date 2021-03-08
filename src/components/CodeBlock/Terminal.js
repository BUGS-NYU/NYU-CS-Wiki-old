import * as React from "react";
import styled from "styled-components";
import copyIcon from "../images/svg/note.svg";

const Terminal = () => {
  return (
    <Container>
      <TerminalHeader>
        <Title> Terminal </Title>
        {/* No functionality as of right now. Just a placeholder */}
        <CopyIcon />
      </TerminalHeader>
      <InstructionContainer>
        <Instruction isHighlighted={false}>
          /* In general, you'll need to first fork the repository to your own
          account, then clone it to your own computer with */
        </Instruction>
        <Instruction isHighlighted={true}>
          <ColorText isGit={true}>git</ColorText> <ColorText>clone</ColorText>{" "}
          https://github.com/YOUR-USER-NAME/nyu-wiki.github.io.git
        </Instruction>
        <Instruction isHighlighted={false}>
          /* Next you'll want to set up your local master branch to track your
          forked repository. You can do this with: */
        </Instruction>
        <Instruction isHighlighted={true}>
          <ColorText isGit={true}>git</ColorText> <ColorText>branch</ColorText>{" "}
          set-url --push origin
          https://github.com/YOUR-USER-NAME/nyu.wiki.github.io.git
        </Instruction>
        <Instruction isHighlighted={true}>
          <ColorText isGit={true}>git</ColorText> <ColorText>branch</ColorText>{" "}
          -u origin/master
        </Instruction>
      </InstructionContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  margin: 1rem 0;
  background-color: #202947;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const TerminalHeader = styled.div`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 300;
`;

const InstructionContainer = styled.ul`
  padding: 1rem 0;
  margin: 0 1rem;
`;

const Instruction = styled.li`
  font-size: 1rem;
  padding-left: 0.75rem;
  margin: 0.25rem 0;
  counter-increment: li;
  color: ${({ isHighlighted }) =>
    isHighlighted ? "rgba(229,229,229)" : "rgba(229,229,229, 0.2)"};

  ::marker {
    content: counter(li);
    color: rgba(229, 229, 229, 0.4);
  }
`;

const ColorText = styled.span`
  color: ${({ isGit }) => (isGit ? "#C17DFD" : "#00FFFF")};
`;

const ForkIcon = styled(forkIcon)`
  cursor: pointer;
`;

export default Terminal;
