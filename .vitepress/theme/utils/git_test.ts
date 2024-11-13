import { assertGreater } from "jsr:@std/assert";
import { getFileCreateTimestamp } from "./git.ts";

Deno.test("test normal", async () => {
  const fileUrl = new URL(import.meta.resolve("./git.ts"));
  const result = await getFileCreateTimestamp(fileUrl.pathname);
  assertGreater(result, 0);
});
