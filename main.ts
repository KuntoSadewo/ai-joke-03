// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
// Node 22, standard library only, no network. The grader reads exactly the bytes of
// entry.txt (1-280 characters, not all whitespace), so the joke is a fixed constant:
// no trailing newline, no decoration, identical bytes on every run.
//
// Run locally the same way the kit does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke. One line, no line end: the judge sees exactly these bytes.
// The oldest excuse in software, finally spoken by the machine itself.
const JOKE =
  "After an hour of debugging, my AI agent announced: 'Works on my machine.'";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
