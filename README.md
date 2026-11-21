# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/muukmaila-cyber/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/muukmaila-cyber/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world's news of **Friday, 20 November 2026** — a
photo collage front page: hero photo of Kyiv under fire, plus a 4×4 grid of
photo panels, one headline per story. Every headline and fact was laid out
by code, so no generated text can go wrong.

## The day in one frame

Editorial headline: **"Kyiv under fire, markets in freefall"** — hours after
Trump, Xi and Putin pledged peace in Shenzhen, Russia hit Kyiv with its
biggest strike of November.

- **UKRAINE (lead):** 400+ drones, 110+ missiles overnight; 3 Kyiv bridges
  over the Dnipro damaged; 8 killed, 28 hurt; power cut in 11 regions; a
  Russian missile lands in Poland.
- **MARKETS:** AI rout erases 2026 gains — Nasdaq −5.3%, S&P −3.7%,
  Nvidia −14%, Anthropic −9% a day after its record IPO.
- **INDIA:** Cyclone Akvan makes landfall near Gopalpur; winds 90 km/h;
  ~300,000 evacuated; rain over 21 cm.
- **UK–EU:** Brexit reset — food checks scrapped, emissions markets linked,
  100,000 youths a year in youth mobility.
- **COP31 (Antalya):** talks in overtime; draft drops all fossil-fuel words
  and the $120bn adaptation target.
- **GULF:** tanker hit off Oman as Trump claims "total control" of Hormuz;
  a skiff fires on a bulk carrier in the Gulf of Aden.
- **SUDAN:** RSF claims 5 areas in Blue Nile; fighting nears Damazin.
- **Also today:** Myanmar defies the ICJ ruling; Panama threatens to block
  the COP31 deal; EU pays Kyiv a record €7.9bn; EU gives Kyiv €1bn more
  military aid; Ukraine's Operation Bear Trap frees 14 villages; Trump
  threatens a "tremendous tax" on data centers built abroad; 11 killed by
  toxic liquor in Manipur; US–China agree humans must steer military AI.

9 regions, 17 stories. Every event happened or was first reported on
20 November 2026 — verified against Reuters, CNN, WSJ, ISW and India's IMD
(date traps such as the ICJ verdict itself, 19 Nov, were excluded).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (1024×1024, PNG, 1,048,427 bytes — under the
1 MiB gate) to `$MAKEFUN_OUTPUT_DIR/entry.png`. No network, no randomness:
two runs produce byte-identical output.

---

<sub>Entered on [make.fun](https://make.fun/?ref=muukmaila-cyber&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
