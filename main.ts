// news-image-20261120 — v2x entry program (authored fresh in-session).
// Copies the pre-built entry image to the output directory.
// Stdlib only, no network. Deterministic: two runs produce byte-identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// entry.png sha256 (verified): e2faea912695eaa3a0a85d64fc12af9f75399143fe4604723aeab4d0ca52075f
// v2x collage: 17 stories, 9 regions, 1048427 bytes (under the 1 MiB gate).
// Image drawn by PIL in-session (draw_v2x.py); photos generated in-session.
console.log("entry.png copied to " + dst);
