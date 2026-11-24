import fs from "node:fs";

const JOKE =
  "The office plant by the window has survived three managers, two rebrands and one merger, and honestly it is the only one here with a clear career path and an actual growth plan.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
