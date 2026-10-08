# Read the PR

A browser quiz game about pull requests. Each question shows a PR description; you pick what the change actually does.

## How to play

Open a version's folder and double-click `index.html`. No installs, no internet needed.

## Versions

| Folder | What's in it |
| --- | --- |
| `v1-basic/` | Pick a difficulty, answer up to 10 questions, see your score. 15 questions. |
| `v2-deep-dive/` | Everything in v1, plus a detailed breakdown on wrong answers and a "Try a similar question" button. 16 questions. |

## Adding questions

Questions live in each version's `questions.js`. Copy an existing `{ ... }` block, give it a new `id`, and separate blocks with commas. `correctIndex` counts from 0.
