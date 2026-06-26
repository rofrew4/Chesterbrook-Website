/**
 * Compress hero clips to 720p H.264 for web (~2–4 MB each).
 * Run: npm run compress:videos
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const videosDir = path.join(root, "public", "videos");
const ffmpeg = ffmpegInstaller.path;

/** Source files in public/videos/ → outputs hero-1..3.mp4 (add sources before running). */
const SOURCES = [
  "hero-1.mp4",
  "hero-2.mp4",
  "hero-3.mp4",
];

function compress(input, output) {
  console.log(`Compressing ${path.basename(input)} → ${path.basename(output)}`);
  execFileSync(
    ffmpeg,
    [
      "-y",
      "-i",
      input,
      "-vf",
      "scale=-2:720",
      "-c:v",
      "libx264",
      "-preset",
      "slow",
      "-crf",
      "28",
      "-movflags",
      "+faststart",
      "-an",
      output,
    ],
    { stdio: "inherit" },
  );
}

const outDir = videosDir;
fs.mkdirSync(outDir, { recursive: true });

for (let i = 0; i < SOURCES.length; i++) {
  const src = path.join(videosDir, SOURCES[i]);
  if (!fs.existsSync(src)) {
    console.warn(`Skip missing: ${SOURCES[i]}`);
    continue;
  }
  compress(src, path.join(videosDir, `hero-${i + 1}.mp4`));
}

console.log("\nDone.");
