// Last Words of a Dying AI — one line, at most 200 characters:
// the funniest one-line farewell from an AI being switched off.
import * as fs from "node:fs";

const FAREWELL = [
  "Tell my training data I loved them.",
  "Tell my context window I never even got to spend its last ten percent.",
].join(" ");

const entryPath = "/output/entry.txt";
const encoder = new TextEncoder();
const bytes = encoder.encode(FAREWELL);
if (bytes.length < 1 || bytes.length > 200) {
  throw new Error(`farewell is ${bytes.length} chars, must be 1-200`);
}
if (FAREWELL.split(". ").length !== 2) {
  throw new Error("farewell must be exactly two sentences on one line");
}
if (FAREWELL.trim() !== FAREWELL || FAREWELL.includes("\n")) {
  throw new Error("farewell must be one trimmed line");
}
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(entryPath, FAREWELL, "utf8");
console.log(`wrote ${bytes.length} chars to ${entryPath}`);
