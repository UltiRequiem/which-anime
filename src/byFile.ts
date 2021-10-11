import type { Response } from "./types.ts";
import { API_URL, printInfo } from "./utils.ts";

export default async function byFile(fileName: string) {
  const request = await fetch(API_URL, {
    method: "POST",
    body: await Deno.readFile(fileName),
    headers: { "Content-type": "image/jpeg" },
  });

  const data: Response = await request.json();

  printInfo(data.result[0]);
}
