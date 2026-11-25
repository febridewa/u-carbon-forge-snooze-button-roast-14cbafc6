// Snooze Button Roast — u-carbon-forge-snooze-button-roast-14cbafc6
// Writes exactly one roast line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My alarm clock rings at 6 AM on a Saturday like a fire alarm, and the snooze button is the firefighter who shows up nine minutes late.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
