// news-summary-01 entry (Node 22, standard library only): the summary lives in
// summary.txt beside this file, and the program copies it verbatim to
// /output/entry.txt. No network, no randomness, no model call: both runs of
// the grader write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-for-byte: no trailing newline is added or removed, so
// the graded bytes are exactly the bytes of summary.txt.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./summary.txt', import.meta.url), join(outDir, 'entry.txt'));
