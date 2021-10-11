import type { Response } from "./types.ts";
import { printInfo } from "./utils.ts";

const API_URL = "https://api.trace.moe/search?anilistInfo&url=";

export default async function byURL(link: string) {
  try {
    new URL(link);
  } catch (_) {
    console.log("That is not a valid link!");
    Deno.exit(0)
  }

  const request = await fetch(API_URL + encodeURIComponent(link));

  const data: Response = await request.json();

  printInfo(data.result[0]);
}
