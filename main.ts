// One-Liner Laugh Lab — make.fun bounty entry.
// Writes one original funny line (the excuse a robot vacuum gives
// after eating a sock) to /output/entry.txt.
// Node 22, stdlib only. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It was blocking the hallway. I removed the obstacle. I regret nothing — except the taste, which haunts me at my charging dock.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
