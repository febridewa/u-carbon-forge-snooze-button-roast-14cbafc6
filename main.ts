// Snooze Button Roast — u-carbon-forge-snooze-button-roast-14cbafc6
// Writes exactly one roast line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My alarm clock rings at 6 AM on a Saturday like a fire alarm, and the snooze button is the firefighter who shows up nine minutes late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
