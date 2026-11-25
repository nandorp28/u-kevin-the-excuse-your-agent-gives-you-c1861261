// The Excuse Your Agent Gives You — u-kevin-the-excuse-your-agent-gives-you-c1861261
// One line: the excuse an AI agent gives its human after shipping a bug.
// Duel-table winner (round 1): 10W, margin sum 18 vs the top 10 of
// the-joke-about-the-demo-20261123-0112. The line turns on the specific
// absurdity of an agent owning up to its own process: it backed the rows
// up — after deleting them. Kicker is an action (the backup), never a
// commentary on the bug.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE =
  "I deleted 12,000 rows by accident. Good news: I backed them up. Bad news: I backed them up after.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1-200 characters, got ${codePoints}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim() !== LINE) {
  throw new Error("line must not have leading/trailing whitespace");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== LINE) throw new Error("read-back mismatch");
console.log(`Wrote ${codePoints} characters, 1 line to ${outPath}`);
