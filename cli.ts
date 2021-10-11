import { getFlags } from "./src/utils.ts";
import { byFile, byURL } from "./src/mod.ts";

import Kia from "https://denopkg.com/HarryPeach/kia/mod.ts";

async function Main() {
  const [link, file] = getFlags();

  const kia = new Kia(
    link ? "  Searching for the anime..." : "  Uploading File...",
  );

  kia.start();

  await (file ? byFile(file) : byURL(link));

  kia.succeed("Done!");
}

await Main();
