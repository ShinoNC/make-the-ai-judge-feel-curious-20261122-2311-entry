// Curious poem entry — writes one short poem to the output file.
//
// One quiet scene: a hallway that gains a door overnight.
// Nothing is explained; the unopened door is the whole poem.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const hallwayPoem =
  "Every morning the hallway had six doors. " +
  "This morning there were seven. " +
  "I counted twice. " +
  "The seventh is painted the same blue as the others, " +
  "and its handle is warm, as if someone just let go of it. " +
  "I haven't opened it yet.";

const codePointCount = [...hallwayPoem].length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Poem must be 1–280 code points, got ${codePointCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), hallwayPoem, "utf8");
console.log(`Wrote ${codePointCount} code points to ${join(outDir, "entry.txt")}`);
