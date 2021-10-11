import { parse } from "https://deno.land/std@0.110.0/flags/mod.ts";
import { blue, red } from "https://deno.land/std@0.110.0/fmt/colors.ts";

import type { Result } from "./types.ts";

export const API_URL = "https://api.trace.moe/search?anilistInfo&url=";

export function printInfo(data: Result) {
  const INFO = `  

  🌸 Title Native: ${data.anilist.title.native}
  🗻 Title Romaji: ${data.anilist.title.romaji}
  🗽 Title English: ${data.anilist.title.english}

  💠 Anilist ID: ${data.anilist.id}

  ⌚ Scene From: ${data.from}
  ⌚ Scene To: ${data.to}

  🍓 Is Adult: ${data.anilist.isAdult}`;

  console.log(INFO);
}

export function getFlags() {
  const { help, link, file } = parse(Deno.args);

  if (!help && !link && !file || help) {
    console.log(blue("TODO"));
    Deno.exit(help ? 0 : 1);
  }

  if (link && file) {
    console.log(red("You cannot pass the link and file flags together!"));
    Deno.exit(1);
  }

  return [link as string, file as string];
}
