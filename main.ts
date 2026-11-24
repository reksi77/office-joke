// One-Line Office Joke — 24-Hour Sprint (make.fun)
// The program's whole job: write one original office joke, one line,
// 1-200 characters, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the plant outlasts every human upheaval in the office, then
// the payoff lands — it is the only employee here with a real career
// trajectory. "Growth plan" does double duty: a plant's growth, and the
// career plan no human in the office actually has.
const JOKE =
  "The office plant by the window has survived three managers, two rebrands and one merger, and it's the only one here with a clear career path and an actual growth plan.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The bounty requires exactly one line of 1-200 characters. Enforce it
// here so a bad edit can never silently produce an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(
    `Joke must be one line of 1-200 characters (got ${JOKE.length}).`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
