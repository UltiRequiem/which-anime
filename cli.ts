import { getFlags, spinner } from "./src/utils.ts";
import { byFile, byURL } from "./src/mod.ts";

const [link, file] = getFlags();

const kia = spinner(link);

kia.start();

await (file ? byFile(file) : byURL(link));

kia.succeed("Done!");
