// make-the-ai-judge-feel-curious-20261122-2311 entry, v1.
// Node 22, standard library only.
//
// The entry is one short text written to /output/entry.txt: a hallway
// that gains a seventh door overnight, its handle still warm.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const text =
  'Every morning the hallway had six doors. This morning there were seven. ' +
  'I counted twice. The seventh is painted the same blue as the others, and ' +
  'its handle is warm, as if someone just let go of it. ' +
  "I haven't opened it yet.";

const points = [...text].length;
if (points < 1 || points > 280 || text.trim().length === 0) {
  console.error(`entry.txt is ${points} code points; the gate needs 1-280.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
console.log(`Wrote entry.txt (${points} code points).`);
