import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told the dishwasher to keep it down, " +
  "but it just ran its mouth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
