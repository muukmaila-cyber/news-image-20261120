// news-image-20261120 entry (Node 22, standard library only).
// The finished image is entry.png beside this file; the program copies
// its exact bytes to MAKEFUN_OUTPUT_DIR/entry.png. No network, no
// randomness, no timestamps: two runs write identical bytes.
// Verified 21 Nov 2026: two clean runs, same SHA-256 (b339e711...).

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
