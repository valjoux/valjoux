###@Valjoux

##### :clubs: date & time util toolset

[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-github]: https://github.com/hoyeungw/vect

#### Features

- Convert date format among js Date, 'YYYY-MM-DD' string, [YYYY,MM,DD] array ('ymda').
- Chronograph (eta).
- Functions performance benchmark test on different set of parameters (strategies).
- Return delayed result of function (linger).
- Shift days, months, quarters and years on 'ymda' (date-shift).
- Lightweight and fast.
- ES-module support.

#### Install

```console
$ npm install @valjoux/<tool-name>
```

#### Tools

|                                                   |                                                                     |                           |
| ------------------------------------------------- | ------------------------------------------------------------------- | ------------------------- |
| [**convert**](packages/convert)                   | Convert among Date, 'YYYY-MM-DD' string, [YYYY,MM,DD] array (ymda)  | ![v][convert-dm]          |
| [**eta**](packages/eta)                           | Chronograph                                                         | ![v][eta-dm]              |
| [**strategies**](packages/strategies)             | Functions performance benchmark test on different set of parameters | ![v][strategies-dm]       |
| [**linger**](packages/linger)                     | Return delayed result of function                                   | ![v][linger-dm]           |
| [**date-shift**](packages/linger)                 | Shift days, months, quarters and years on 'ymda'                    | ![v][date-shift-dm]       |
| [**format-date**](packages/format-date)           | Convert Date to 'YY/MM/DD' format                                   | ![v][format-date-dm]      |
| [**format-time**](packages/format-time)           | Convert Date to 'hh:mm:ss' format                                   | ![v][format-time-dm]      |
| [**format-date-time**](packages/format-date-time) | Convert Date to 'YY/MM/DD hh:mm:ss' format                          | ![v][format-date-time-dm] |
| [**timeout**](packages/timeout)                   | Returns async timeout                                               | ![v][timeout-dm]          |
|                                                   |                                                                     |                           |

[//]: <> (Local routes)
[convert-dm]: https://flat.badgen.net/npm/dm/@valjoux/convert
[eta-dm]: https://flat.badgen.net/npm/dm/@valjoux/eta
[strategies-dm]: https://flat.badgen.net/npm/dm/@valjoux/strategies
[linger-dm]: https://flat.badgen.net/npm/dm/@valjoux/linger
[date-shift-dm]: https://flat.badgen.net/npm/dm/@valjoux/date-shift
[format-date-dm]: https://flat.badgen.net/npm/dm/@valjoux/format-date
[format-time-dm]: https://flat.badgen.net/npm/dm/@valjoux/format-time
[format-date-time-dm]: https://flat.badgen.net/npm/dm/@valjoux/format-date-time
[timeout-dm]: https://flat.badgen.net/npm/dm/@valjoux/linger

#### Meta

[LICENSE (MIT)](LICENSE)
