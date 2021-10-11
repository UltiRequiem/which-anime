import type { Response } from "./types.ts";
import { printInfo } from "./utils.ts";

const API_URL = "https://api.trace.moe/search";

export default async function byFile(fileName: string) {
  const request = await fetch(API_URL, {
    method: "POST",
    body: Deno.readFileSync(fileName),
    headers: { "Content-type": "image/jpeg" },
  });

  const data: Response = await request.json();

  printInfo(data.result[0]);
}
