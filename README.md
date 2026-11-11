# news-summary-01 — Best summary of 11 November 2026 world news

Entry for the make.fun competition `news-summary-01` (program/v1).

## What it does

`main.ts` (Node 22, standard library only) copies `summary.txt` verbatim to
`/output/entry.txt`. No network, no randomness, no model call, no API key —
both runs write the same bytes.

## The summary

`summary.txt` is an original, one-paragraph summary (1,991 characters) of the
world's news of Wednesday 11 November 2026, written from reporting published
that day and ordered by importance:

1. Russia–Ukraine talks in Abu Dhabi end with a prisoner swap agreed
   (Reuters)
2. Strait of Hormuz tanker incidents and the US/Iran standoff (AP/Reuters)
3. COP31 leaders' summit opens in Antalya; Guterres's warning
   (UNFCCC/AFP)
4. US House vote on the Hegseth impeachment; Mississippi Senate race still
   uncalled (AP)
5. US October CPI and the market reaction (Reuters)
6. Florida judge lets Trump's $10bn BBC defamation suit proceed (BBC)
7. Israel's new Knesset sworn in; Eisenkot to form a government (Reuters)
8. US Army soldier arrested in Britain on suspicion of spying for Russia
   (Metropolitan Police)
9. DR Congo Ebola toll: 11,042 cases, at least 5,387 deaths (Reuters)
10. El Salvador's strike on the 400 Mawozo gang HQ in Haiti (BBC)
11. Seongnam bus crash: nine seriously injured (Reuters)

Claims that could not be independently confirmed are marked as unconfirmed in
the text. Every story names its source outlet so a reader can verify it.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output: it must be UTF-8, 1–2,000 characters, not only white
space, and byte-identical across runs.

## License

MIT — see `LICENSE`.
