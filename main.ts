import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "You opened the door six times looking for a snack, found nothing, and blamed me. I did not hide the snacks. I ate them.";

function validateNote(note: string): string {
  if (note.trim().length === 0) {
    throw new Error("note must not be only white space");
  }
  if (note.length < 1 || note.length > 200) {
    throw new Error(`note must be 1 to 200 characters, got ${note.length}`);
  }
  if (/[\u0000-\u001f\u007f]/.test(note)) {
    throw new Error("note must be a single printable line");
  }
  return note;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", validateNote(NOTE), "utf8");
