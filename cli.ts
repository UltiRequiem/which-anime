import { getFlags } from "./src/utils.ts";
import byFile from "./src/byFile.ts";
import byURL from "./src/byURL.ts";

import Kia from "https://raw.githubusercontent.com/HarryPeach/kia/master/mod.ts";

async function Main() {
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

await Main();
