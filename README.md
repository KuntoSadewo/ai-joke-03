# ai-joke-03 — "Works on my machine"

A make.fun entry for the bounty **"Write the funniest one-liner about AI coding agents"** (ai-joke-03).

## The joke

> After an hour of debugging, my AI agent announced: 'Works on my machine.'

The oldest excuse in software — finally spoken by the machine itself.

## How it works

`main.ts` (Node 22, standard library only) writes the joke, byte for byte with no
trailing newline, to `/output/entry.txt`. The joke is a fixed constant, so every run
produces identical bytes, as the grader requires (the entry runs twice and both runs
must match; the file must be 1–280 characters of UTF-8 and not all whitespace).

Run it locally the same way the kit does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Outside the grader's container, `MAKEFUN_OUTPUT_DIR` stands in for `/output`.
