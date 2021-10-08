import { parse } from "https://deno.land/std@0.110.0/flags/mod.ts";
import { blue, red } from "https://deno.land/std@0.110.0/fmt/colors.ts";

function printHelp(color: (text: string) => string) {
  console.log(color("TODO"));
}

function getFlags() {
  const { help, link, file } = parse(Deno.args);

  if (help) {
    printHelp(blue);
    Deno.exit(0);
  }

  if (link && file) {
    console.log(red("You cannot pass the link and file flags together!"));
  }

  return [link, file];
}

function main() {}

main();
