import sharp from "sharp";
import { writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const SRC = resolve(ROOT, "..", "favicon.png");
const APP = resolve(ROOT, "app");
const PUB = resolve(ROOT, "public");

async function pngBuf(size) {
  return sharp(SRC).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
}

async function buildIco(sizes, out) {
  const pngs = await Promise.all(sizes.map(pngBuf));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);

  const entries = [];
  let offset = 6 + sizes.length * 16;
  for (let i = 0; i < sizes.length; i++) {
    const e = Buffer.alloc(16);
    const s = sizes[i] >= 256 ? 0 : sizes[i];
    e.writeUInt8(s, 0);
    e.writeUInt8(s, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(pngs[i].length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += pngs[i].length;
  }
  const ico = Buffer.concat([header, ...entries, ...pngs]);
  await writeFile(out, ico);
  console.log("ICO written:", out, ico.length, "bytes");
}

await rm(resolve(APP, "favicon.ico"), { force: true });
await buildIco([16, 32, 48], resolve(APP, "favicon.ico"));

await writeFile(resolve(APP, "icon.png"), await pngBuf(512));
console.log("icon.png written");

await writeFile(resolve(APP, "apple-icon.png"), await pngBuf(180));
console.log("apple-icon.png written");

await rm(resolve(PUB, "apple-icon.png"), { force: true });
await rm(resolve(PUB, "icon-512.png"), { force: true });
console.log("public/ duplicates removed");
