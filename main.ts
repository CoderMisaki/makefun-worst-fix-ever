import { mkdirSync, writeFileSync } from "node:fs";

// The entry writes exactly one line: the commit message itself.
// Nothing is computed at runtime, so both graded runs print the same bytes.
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// One commit message for the fix that made everything worse.
// The bug was off by one; the repair moved it exactly one step further.
const message = "fix: off-by-one error \u2014 everything is now off by two";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, message + "\n", "utf8");
