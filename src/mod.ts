import { getFlags } from "./utils.ts";
import byFile from "./byFile.ts";
import byURL from "./byURL.ts";

import Kia from "https://raw.githubusercontent.com/HarryPeach/kia/master/mod.ts";

export default async function main() {
  const [link, file] = getFlags();

  const kia = new Kia(
    link ? "  Searching for the anime..." : "  Uploading File...",
  );

  if (link) {
    kia.start();
    await byURL(link);
    kia.succeed("Done!");
    return;
  }

  kia.start();
  await byFile(file);
  kia.succeed("  Done!");
}
