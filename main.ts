import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes (u-markk-st-one-line-office-jokes-a51f2bcc):
// a single line about office life. The printer jams at the worst moment;
// the joke turns on that real detail and lands its laugh in the last words.
const joke =
  "The printer jammed on page 1 of 1 — a 100% failure rate, and still the most reliable thing in this office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
