import type { Response } from "./types.ts";
import { API_URL, printInfo } from "./utils.ts";

export async function byURL(link: string) {
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

export async function byFile(fileName: string) {
  const request = await fetch(API_URL, {
    method: "POST",
    body: await Deno.readFile(fileName),
    headers: { "Content-type": "image/jpeg" },
  });

  const data: Response = await request.json();

  printInfo(data.result[0]);
}
