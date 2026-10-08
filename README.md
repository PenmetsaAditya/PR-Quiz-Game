# Read the PR

A small browser game that teaches you what pull requests do, one multiple-choice question at a time.

**Why I built this
**

I'm not a developer. I wanted to understand pull requests (PRs), the way developers propose and review changes to code, but reading docs and tutorials just didn't stick for me.

What does stick is playing. I've always been a fan of games, and I learn best when I'm actually doing something instead of reading about it. So I decided to build a game that teaches PR concepts by asking you to read a real-looking PR description and guess what it does.

The idea was simple: combine two things I like, games and learning, so learning feels easy and even a little fun.

This project was also my first real step into the technical side of things. I built it with help from AI (Claude), asking questions and learning as I went. I was playing a game of Database Detective when I got this idea.

**What the game does
**

You choose a difficulty: Easy, Medium, or Hard.
Each round gives you up to 10 random questions, with no repeats.
Each question shows a PR description and four possible answers.
You see right away whether you were right, with a one-line explanation.
If you get one wrong, you get a deeper breakdown: what the right answer means, why each wrong answer is wrong, and plain-English definitions of the jargon.
A "Try a similar question" button gives you another question on the same topic, like security or tests.
See your score at the end and play again.

This repo has two versions. v1-basic is the first game. v2-deep-dive adds the wrong-answer breakdowns and the similar-question button.

**How to play
**

Pick a difficulty.
Read the PR description.
Choose the answer that best explains what the PR does.
Read the feedback, and try a similar question if you want more practice.
Check your score and play again.

**How to run it
**

Download the repo, open a version's folder, and double-click index.html. It opens in your browser, with no installs and no internet needed.

**How to add your own questions
**

Questions live in questions.js, inside each version's folder. It's a list of questions in JSON format, saved as a .js file so the game still works when you double-click it. Copy an existing question, give it a new id, and edit the rest:

id:                 a unique number 

difficulty:         "easy", "medium", or "hard" 

topic:              bugfix, refactor, tests, deps, security, docs, config, or feature (v2) 

prDescription:      the PR text the player reads

options:            four possible answers 

correctIndex:       which option is right, counting from 0 

explanation:        the one-line feedback 

deepExplanation:    the wrong-answer breakdown (v2): correct, whyWrong, keyTerms 

**What I learned
**

JSON is just a structured way to write down data, and it lets me keep the questions separate from the code.
How a webpage loads data: Browsers block a double-clicked page from reading other files on your computer, which is why my questions are saved as .js instead of .json.
The game logic is a short loop: filter the questions by difficulty, shuffle them, show one, check the answer, then add to the score.
A webpage has three layers. HTML is the structure, CSS is the look, and JavaScript is the behavior.


**What's next
**

1. Grow the question bank toward about 400 questions.

2. Add another mode that moves from multiple choice to text only after you hit a streak of 20 questions right.

**A note to other non-technical builders
**

If you've been curious about the technical side but felt it wasn't for you, start with something you already enjoy and build a tiny version of it. You don't need to know everything first. I didn't. Ask questions, break things, and learn as you go.
