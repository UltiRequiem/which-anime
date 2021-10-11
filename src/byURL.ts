import type { Response } from "./types.ts";
import { API_URL, printInfo } from "./utils.ts";

export default async function byURL(link: string) {
  try {
    new URL(link);
  } catch (_) {
    console.log("That is not a valid link!");
    Deno.exit(1);
  }

  const request = await fetch(API_URL + encodeURIComponent(link));

  const data: Response = await request.json();

  printInfo(data.result[0]);
}
