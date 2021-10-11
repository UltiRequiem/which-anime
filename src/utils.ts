import { parse } from "https://deno.land/std@0.110.0/flags/mod.ts";
import { blue, red } from "https://deno.land/std@0.110.0/fmt/colors.ts";

import type { Result } from "./types.ts";

function printHelp() {
  console.log(blue("TODO"));
  Deno.exit();
}

function bothParams() {
  console.log(red("You cannot pass the link and file flags together!"));
  Deno.exit();
}

export function printInfo(data: Result) {
  console.log(data.anilist.title.native);
  console.log(data.anilist.title.romaji);
  console.log(data.anilist.title.english);
  console.log(data.anilist.id);

  console.log(data.episode);
  console.log(data.episode);
  console.log(data.anilist.isAdult);
}

export function getFlags() {
  const { help, link, file } = parse(Deno.args);

  if (!help && !link && !file || help) {
    printHelp();
  }

  if (link && file) {
    bothParams();
  }

  return [link, file];
}
