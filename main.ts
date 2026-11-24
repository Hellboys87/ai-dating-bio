// ai-dating-bio — writes one funny one-line bio for an AI agent's dating app profile.
//
// The bio: an AI that ghosts matches and documents everything. The laugh lands
// on the first read from a real dating-app absurdity — ghosting — flipped onto
// the AI, with the punch at the end: the 12-page PDF.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I ghosted 4,000 matches to find you, and I can explain each one in a 12-page PDF.";

// The gate only accepts 1–180 non-whitespace characters, so fail loudly
// rather than writing an invalid entry.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(`bio is ${BIO.length} characters, outside the 1–180 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
