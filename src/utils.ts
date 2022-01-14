import { parse } from "https://deno.land/std@0.110.0/flags/mod.ts";
import { blue, red } from "https://deno.land/std@0.110.0/fmt/colors.ts";
import Kia from "https://denopkg.com/HarryPeach/kia/mod.ts";

import type { Result } from "./types.ts";

export const API_URL = "https://api.trace.moe/search?anilistInfo&url=";
export const VERSION = "v1.0.0";

export function spinner(link: string) {
  return new Kia(link ? "  Searching for the anime..." : "  Uploading File...");
}

export function printInfo(data: Result) {
  console.log(`  
🌸 Title Native: ${data.anilist.title.native}
🗻 Title Romaji: ${data.anilist.title.romaji}
🗽 Title English: ${data.anilist.title.english}

💠 Anilist ID: ${data.anilist.id}

🍓 Is Adult: ${data.anilist.isAdult}`);
}

function printHelp(help: boolean) {
  const HELP_MESSAGE = `  which-anime ${VERSION}

  FLAGS:

    --file: An Image path

    --link: An Image link

  If you need more help, found a bug or want to suggest a new feature:
  github.com/UltiRequiem/which-anime
  `;

  console.log(help ? blue(HELP_MESSAGE) : red(HELP_MESSAGE));

  Deno.exit(help ? 0 : 1);
}

function printVersion() {
  console.log(blue(`  which-anime ${VERSION}`));
}

export function getFlags() {
  const { help, version, link, file } = parse(Deno.args, {
    alias: { help: "h", version: "v", link: "l", file: "f" },
  });

  if ((!link && !file) || help) printHelp(help);
  if (version) printVersion();

  if (link && file) {
    console.log(red("You cannot pass the link and file flags together!"));
    Deno.exit(1);
  }

  return [link as string, file as string];
}
