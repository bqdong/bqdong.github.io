import { exists } from "@std/fs/exists";

const cache = new Map<string, number>();

export async function getFileCreateTimestamp(filePath: string) {
  const cached = cache.get(filePath);
  if (cached) return cached;

  const exist = await exists(filePath);
  if (!exist) {
    throw new Deno.errors.NotFound();
  }

  const command = new Deno.Command("git", {
    args: [
      "log",
      "--diff-filter=A",
      "--follow",
      "--format=%at",
      "-1",
      "--",
      filePath,
    ],
  });
  const { code, stdout } = await command.output();
  if (code !== 0) {
    throw new Error(`git log failed with code ${code}`);
  }

  const decoder = new TextDecoder();
  const d = decoder.decode(stdout);
  return Number(d) * 1000;
}
