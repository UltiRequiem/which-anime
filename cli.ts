import { parse } from "https://deno.land/std@0.110.0/flags/mod.ts";
import { blue, red } from "https://deno.land/std@0.110.0/fmt/colors.ts";

function printHelp() {
  console.log(blue("TODO"));
}

function getFlags() {
  const { help, link, file } = parse(Deno.args);

  if (help) {
    printHelp();
    Deno.exit(0);
  }

  if (!help && !link && !file) {
    printHelp();
    Deno.exit(0);
  }

  if (link && file) {
    console.log(red("You cannot pass the link and file flags together!"));
  }

  return [link, file];
}

async function main() {
  const [link, file] = getFlags();

  if (link) {
    const request = await fetch(
      `https://api.trace.moe/search?url=${encodeURIComponent(link)}`,
    );

    // Pass to external Type
    const data: {
      frameCount: number;
      eror: string;
      result: {
        anilist: number;
        filename: string;
        episode: 1;
        from: number;
        to: number;
        similarity: number;
        video: string;
        image: string;
      }[];
    } = await request
      .json();

    console.log(data.result[0]);
  }

  if (file) {
    console.log("TODO");
  }
}

main();
