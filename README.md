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

## Installation

- [deno.land/x](https://deno.land/x/anime/cli.ts):

```bash
deno install --allow-read --allow-net https://deno.land/x/anime/cli.ts
```

- [denopkg.com](https://denopkg.com/UltiRequiem/anime/cli.ts):

```bash
deno install --allow-read --allow-net https://denopkg.com/UltiRequiem/anime/cli.ts
```

- [nest.land](https://x.nest.land/anime/cli.ts):

```bash
deno install --allow-read --allow-net https://x.nest.land/anime@1.0.0/mod.ts
```

If you dont have installed Deno but
[Node](https://www.npmjs.com/package/@ultirequiem/anime):

```bash
yarn global add @ultirequiem/anime # npm i -g @ultirequiem/anime
```

### Built in help

If yoy don't pass any flag or you pass the `--help` flag:

```
y2j 1.0.0

    Convert JSON to YAML and vice versa

    FLAGS:

      --file: The file to change the format, if you pass a JSON,
      its YAML version will be printed on the screen and vice versa.

      --write: If you pass this flag instead of printing on the screen,
      the output will be written to a file.

      --version: Prints just the version

    If you need more help, found a bug or want to suggest a new feature:
    github.com/UltiRequiem/y2j
```

### License

[This project](https://deno.land/x/anime) is licensed under the
[MIT License](./LICENSE.md).
