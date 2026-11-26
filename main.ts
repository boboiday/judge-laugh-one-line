import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You park in the same spot every morning. Today's note on your windshield says, 'Spot 12 is mine. — Gary.' Below it, in red pen: 'I have a tow truck.' Below that: 'I AM the tow truck.'";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
