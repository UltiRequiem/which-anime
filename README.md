# Which Anime

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/which-anime?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/which-anime/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/which-anime/workflows/Lint/badge.svg)

Simple CLI tool trace back the scene from an anime screenshot.

You can get this package by [nest.land](https://nest.land/package/anime),
[deno.land](https://deno.land/x/anime) or
[denopkg](https://denopkg.com/UltiRequiem/which-anime/mod.ts).

## Usage

Using Links:

```bash
which-anime --link https://raw.githubusercontent.com/UltiRequiem/which-anime/main/image.jpg

â Š   Searching for the anime...
đž Title Native: éæ„ăăżééăŻăăăŒăŹăŒă«ćèŒ©ăźć€ąăèŠăȘă
đ» Title Romaji: Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
đœ Title English: Rascal Does Not Dream of Bunny Girl Senpai

đ  Anilist ID: 101291

đ Is Adult: false
â Done!
```

Using File:

```bash
which-anime --file ./image.jpg

â §   Uploading File...
đž Title Native: éæ„ăăżééăŻăăăŒăŹăŒă«ćèŒ©ăźć€ąăèŠăȘă
đ» Title Romaji: Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
đœ Title English: Rascal Does Not Dream of Bunny Girl Senpai

đ  Anilist ID: 101291

đ Is Adult: false
â Done!
```

## Installation

- [deno.land/x](https://deno.land/x/anime/cli.ts):

```bash
deno install --allow-read --allow-net -n which-anime https://deno.land/x/anime/cli.ts
```

- [denopkg.com](https://denopkg.com/UltiRequiem/anime/cli.ts):

```bash
deno install --allow-read --allow-net -n which-anime https://denopkg.com/UltiRequiem/anime/cli.ts
```

- [nest.land](https://x.nest.land/anime/cli.ts):

```bash
deno install --allow-read --allow-net -n which-anime https://x.nest.land/anime@0.0.2/mod.ts
```

### Built in help

If you don't pass any flag or you pass the `--help` flag:

```
which-anime v1.0.0

  FLAGS:

    --file: An Image path

    --link: An Image link

  If you need more help, found a bug or want to suggest a new feature:
  github.com/UltiRequiem/which-anime
```

### License

[This project](https://deno.land/x/anime) is licensed under the
[MIT License](./LICENSE.md).
