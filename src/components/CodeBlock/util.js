const colors = {
  git: "#C17DFD",
  branch: "#00FFFF",
  clone: "#00FFFF",
};

function isGitCommand(line) {
  return line.includes("git");
}
function isComment(line) {
  return line.includes("/*") && line.includes("*/");
}

export { colors, isGitCommand, isComment };
