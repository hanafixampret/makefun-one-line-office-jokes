import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes: a single line about office life.
// The joke turns on a real detail (IT, passwords, the all-staff
// security lecture) and lands the laugh in the last few words.
const line =
  "IT reset my password to 'Password123', then sent a company-wide email about password security.";

// Gate: one line, 1-199 characters, not only whitespace.
const body = line.trim();
if (body.length < 1 || body.length > 199 || body.includes("\n")) {
  throw new Error(`entry rejected by gate: ${body.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", body + "\n");
