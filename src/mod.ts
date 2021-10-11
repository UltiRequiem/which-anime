import { getFlags } from "./utils.ts";
import byFile from "./byFile.ts";
import byURL from "./byURL.ts";

export default function main() {
  const [link, file] = getFlags();

  if (link) {
    byURL(link);
    return;
  }

  byFile(file);
}
