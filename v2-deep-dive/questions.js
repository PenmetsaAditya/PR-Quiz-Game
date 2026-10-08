// Edit the questions below. Keep this first line and the final "];" exactly as they are.
// whyWrong lists one reason per wrong option, in the same order those options appear in "options".
const QUESTIONS = [
  {
    "id": 1, "difficulty": "easy", "topic": "bugfix",
    "prDescription": "Adds a null check before dereferencing `user.profile` in `getAvatar()`.",
    "options": ["Prevents a crash when profile is missing", "Adds a new avatar upload feature", "Refactors the function for performance", "Updates the avatar image asset"],
    "correctIndex": 0,
    "explanation": "The change guards against a null value, preventing a runtime error.",
    "deepExplanation": {
      "correct": "Some users have no profile. Before this fix, the code tried to read the profile anyway and crashed. Now it checks first.",
      "whyWrong": ["Nothing new can be uploaded; the change only adds a safety check.", "A null check adds a guard; it doesn't make anything faster.", "No image files change, only code logic."],
      "keyTerms": [{"term": "null", "meaning": "Empty: the value doesn't exist."}, {"term": "dereferencing", "meaning": "Reaching inside a value to read part of it, like reading profile from user."}]
    }
  },
  {
    "id": 2, "difficulty": "easy", "topic": "bugfix",
    "prDescription": "Fixes the Submit button staying disabled after a failed form submission; it now re-enables on error.",
    "options": ["Adds a second submit button", "Prevents the form from being submitted twice", "Lets users try again after a submission fails", "Makes the form submit faster"],
    "correctIndex": 2,
    "explanation": "The button got stuck after errors; now it unlocks so users can retry.",
    "deepExplanation": {
      "correct": "When a submission failed, users were stuck with a greyed-out button. Now the button turns back on so they can retry.",
      "whyWrong": ["No new button is added; the existing one is fixed.", "That would mean keeping the button disabled. This PR turns it back on.", "Speed isn't touched, only the button's state after an error."],
      "keyTerms": [{"term": "disabled", "meaning": "Greyed out so it can't be clicked."}, {"term": "re-enables", "meaning": "Turns it back on so it can be clicked again."}]
    }
  },
  {
    "id": 3, "difficulty": "easy", "topic": "docs",
    "prDescription": "Corrects `npm instal` to `npm install` in the README setup section.",
    "options": ["Adds a new install script", "Fixes a typo in the documentation", "Upgrades the version of npm", "Changes how the app installs in production"],
    "correctIndex": 1,
    "explanation": "Only README text changes, so nothing about how the app runs is affected.",
    "deepExplanation": {
      "correct": "The setup instructions had a misspelled command that would fail if copied. Now the instructions are correct.",
      "whyWrong": ["No script is added; only instruction text changes.", "npm's version is set elsewhere. The README is just instructions.", "Production setup doesn't read the README."],
      "keyTerms": [{"term": "README", "meaning": "The main instructions file shown at the top of a code project."}, {"term": "npm", "meaning": "A tool that downloads and installs JavaScript libraries."}]
    }
  },
  {
    "id": 4, "difficulty": "easy", "topic": "docs",
    "prDescription": "Adds a CONTRIBUTING.md explaining branch naming, how to run tests, and the PR review checklist.",
    "options": ["Automatically renames branches", "Documents how to contribute to the project", "Adds new automated tests", "Requires reviews before merging"],
    "correctIndex": 1,
    "explanation": "It's a guide for contributors; nothing in the code or settings changes.",
    "deepExplanation": {
      "correct": "New contributors now have one place that explains the team's conventions.",
      "whyWrong": ["It explains naming conventions; nothing enforces them automatically.", "It describes how to run tests but doesn't add any.", "It documents the review checklist; it doesn't switch on any rule."],
      "keyTerms": [{"term": "branch", "meaning": "A separate copy of the code where you make changes before merging."}, {"term": "CONTRIBUTING.md", "meaning": "A standard file telling newcomers how to contribute."}]
    }
  },
  {
    "id": 5, "difficulty": "easy", "topic": "tests",
    "prDescription": "Adds unit tests for `formatPrice()` covering zero, negative, and very large amounts.",
    "options": ["Adds tests without changing how the app behaves", "Changes how prices are displayed", "Fixes a bug with negative prices", "Removes prices over a certain size"],
    "correctIndex": 0,
    "explanation": "Tests check existing behavior; they don't change what users see.",
    "deepExplanation": {
      "correct": "The team now has automatic checks that price formatting works for unusual amounts. If someone breaks it later, a test fails.",
      "whyWrong": ["Tests only check the display; they don't change it.", "No fix is included. The tests check current behavior.", "Nothing is removed. Tests only run checks."],
      "keyTerms": [{"term": "unit test", "meaning": "A small automated check that one piece of code gives the expected result."}]
    }
  },
  {
    "id": 6, "difficulty": "easy", "topic": "tests",
    "prDescription": "Marks the flaky `uploadFile` test as skipped and opens a ticket to fix it.",
    "options": ["Fixes the file upload feature", "Deletes the upload feature", "Temporarily turns off an unreliable test", "Makes uploads faster"],
    "correctIndex": 2,
    "explanation": "The test fails at random, so it's paused until someone fixes it.",
    "deepExplanation": {
      "correct": "A test that randomly fails was blocking other work. It's paused, and a ticket tracks the real fix.",
      "whyWrong": ["The feature isn't touched; only its test is paused.", "Skipping a test leaves the feature in place.", "Performance isn't involved, only which tests run."],
      "keyTerms": [{"term": "flaky test", "meaning": "A test that passes or fails randomly without any code changes."}, {"term": "skipped", "meaning": "Still in the code, but not run."}]
    }
  },
  {
    "id": 7, "difficulty": "medium", "topic": "refactor",
    "prDescription": "Extracts duplicated date-formatting logic from 4 components into a shared `formatDate()` helper. No behavior change.",
    "options": ["Changes the date format shown to users", "Removes duplicate code so dates are formatted in one place", "Fixes a timezone bug", "Adds a new date picker"],
    "correctIndex": 1,
    "explanation": "This is a refactor: same output, but the logic now lives in one spot.",
    "deepExplanation": {
      "correct": "Four copies of the same code became one. Future changes happen in one place instead of four.",
      "whyWrong": ["The PR says no behavior change, so users see the same dates.", "No timezone logic changes.", "No new screen element is added."],
      "keyTerms": [{"term": "refactor", "meaning": "Restructuring code without changing what it does."}, {"term": "helper", "meaning": "A small reusable function other code can call."}, {"term": "components", "meaning": "Self-contained pieces of a user interface."}]
    }
  },
  {
    "id": 8, "difficulty": "medium", "topic": "refactor",
    "prDescription": "Renames `getData()` to `fetchCustomerOrders()` across the codebase.",
    "options": ["Fetches more customer orders", "Gives the function a clearer name without changing behavior", "Adds a new function for orders", "Fixes a bug in loading orders"],
    "correctIndex": 1,
    "explanation": "A rename makes code easier to read; it works exactly the same.",
    "deepExplanation": {
      "correct": "The vague name getData() now says what the function actually does. Nothing about its behavior changes.",
      "whyWrong": ["The name changes, not the amount of data.", "It's the same function renamed, not a new one.", "The logic is untouched, so no bug is fixed."],
      "keyTerms": [{"term": "codebase", "meaning": "All of a project's code together."}, {"term": "function", "meaning": "A named, reusable block of code that does one job."}]
    }
  },
  {
    "id": 9, "difficulty": "medium", "topic": "config",
    "prDescription": "Changes `API_TIMEOUT_MS` in `config.js` from 5000 to 15000.",
    "options": ["Makes the API three times faster", "Adds automatic retries on failure", "Lets requests wait longer before giving up", "Shortens how long requests can take"],
    "correctIndex": 2,
    "explanation": "The timeout goes from 5 to 15 seconds, so slow responses are less likely to fail.",
    "deepExplanation": {
      "correct": "The app now waits up to 15 seconds for a server reply instead of 5, so slow requests have time to finish.",
      "whyWrong": ["A timeout doesn't change speed, only how long the app waits.", "Retrying means trying again; this just waits longer once.", "The limit goes up from 5 to 15 seconds, not down."],
      "keyTerms": [{"term": "timeout", "meaning": "The longest the app waits for a reply before giving up."}, {"term": "ms", "meaning": "Milliseconds; 1000 ms is 1 second."}, {"term": "config", "meaning": "Settings kept apart from the main code so they're easy to change."}]
    }
  },
  {
    "id": 10, "difficulty": "medium", "topic": "config",
    "prDescription": "Moves the database URL from hard-coded in `db.js` to an environment variable `DATABASE_URL`.",
    "options": ["Lets each environment use its own database without code changes", "Moves the database to a new server", "Encrypts the database", "Speeds up database queries"],
    "correctIndex": 0,
    "explanation": "The address now comes from settings, so dev, test, and production can differ.",
    "deepExplanation": {
      "correct": "The database address used to be written into the code. Now each environment supplies its own, so testing never touches the real database by accident.",
      "whyWrong": ["The database stays where it is; only where its address is stored changes.", "Nothing is encrypted. The address is just read from a setting.", "Queries run the same; only how the app finds the database changes."],
      "keyTerms": [{"term": "hard-coded", "meaning": "Written directly into the code, so changing it means editing code."}, {"term": "environment variable", "meaning": "A setting supplied by the computer running the app."}]
    }
  },
  {
    "id": 11, "difficulty": "medium", "topic": "feature",
    "prDescription": "Adds a feature flag `newDashboard` (default off) and renders the new dashboard only when it is enabled.",
    "options": ["Deletes the old dashboard", "Ships the new dashboard hidden so it can be switched on later", "Turns on the new dashboard for every user", "Adds analytics to the dashboard"],
    "correctIndex": 1,
    "explanation": "Feature flags let teams merge unfinished work safely and release it gradually.",
    "deepExplanation": {
      "correct": "The new dashboard is in the code but switched off. The team can turn it on for some users, then everyone, without another release.",
      "whyWrong": ["The old dashboard stays; the new one sits behind a switch.", "The flag defaults to off, so no one sees it yet.", "No tracking is added."],
      "keyTerms": [{"term": "feature flag", "meaning": "An on/off switch for a feature that can be flipped without new code."}, {"term": "render", "meaning": "Draw on screen."}]
    }
  },
  {
    "id": 12, "difficulty": "hard", "topic": "security",
    "prDescription": "Replaces string-concatenated SQL in `findUser()` with parameterized queries.",
    "options": ["Speeds up user lookups", "Moves users to a new database", "Prevents SQL injection attacks", "Adds caching for user records"],
    "correctIndex": 2,
    "explanation": "Parameterized queries stop user input from being run as database commands.",
    "deepExplanation": {
      "correct": "Before, whatever a user typed was glued straight into a database command, so an attacker could type commands. Now input is always treated as plain data.",
      "whyWrong": ["Speed isn't the goal; safety is.", "The same database is used.", "Nothing is stored for reuse."],
      "keyTerms": [{"term": "SQL", "meaning": "The language used to read and write database data."}, {"term": "string-concatenated", "meaning": "Built by gluing pieces of text together, including user input."}, {"term": "parameterized query", "meaning": "A query where user input is passed separately, so it's never run as a command."}, {"term": "SQL injection", "meaning": "An attack where typed input tricks the database into running harmful commands."}]
    }
  },
  {
    "id": 13, "difficulty": "hard", "topic": "security",
    "prDescription": "Sets the `HttpOnly` and `Secure` flags on the session cookie.",
    "options": ["Blocks scripts from reading the session cookie and sends it only over HTTPS", "Makes login sessions last longer", "Encrypts users' passwords", "Adds two-factor authentication"],
    "correctIndex": 0,
    "explanation": "Both flags make it harder for attackers to steal a logged-in session.",
    "deepExplanation": {
      "correct": "The cookie that proves you're logged in is now hidden from page scripts and never sent over unencrypted connections, which closes two common theft routes.",
      "whyWrong": ["Session length is controlled by a different setting.", "Passwords aren't stored in the session cookie.", "No extra login step is added."],
      "keyTerms": [{"term": "session cookie", "meaning": "A small value your browser keeps to prove you're logged in."}, {"term": "HttpOnly", "meaning": "Hides the cookie from scripts running on the page."}, {"term": "Secure", "meaning": "Only sends the cookie over encrypted HTTPS."}]
    }
  },
  {
    "id": 14, "difficulty": "hard", "topic": "security",
    "prDescription": "Adds rate limiting to `POST /login`: max 5 attempts per IP per 15 minutes.",
    "options": ["Makes login faster", "Locks users out permanently after 5 tries", "Slows down password-guessing attacks", "Requires stronger passwords"],
    "correctIndex": 2,
    "explanation": "Capping attempts makes guessing passwords by trial and error impractical.",
    "deepExplanation": {
      "correct": "An attacker can no longer try thousands of passwords quickly. After 5 tries, they wait 15 minutes.",
      "whyWrong": ["Adding a limit can only slow logins, never speed them up.", "The limit resets after 15 minutes; it isn't permanent.", "Password rules don't change, only how often you can try."],
      "keyTerms": [{"term": "rate limiting", "meaning": "Capping how many requests can be made in a time window."}, {"term": "IP", "meaning": "The internet address of the device making the request."}, {"term": "POST /login", "meaning": "The request your browser sends when you submit the login form."}]
    }
  },
  {
    "id": 15, "difficulty": "hard", "topic": "deps",
    "prDescription": "Pins `axios` to exactly 1.6.8 (removes the `^`) after a minor release broke response parsing.",
    "options": ["Removes axios from the project", "Patches the bug inside axios itself", "Stops axios from auto-updating to newer releases", "Downgrades axios to an old major version"],
    "correctIndex": 2,
    "explanation": "The `^` allowed automatic minor upgrades; pinning locks the known-good version.",
    "deepExplanation": {
      "correct": "A newer axios release broke the app. Pinning keeps the last working version until the team is ready to upgrade on purpose.",
      "whyWrong": ["axios stays; it's just locked to one version.", "The bug in axios isn't fixed. The team avoids the broken version instead.", "1.6.8 is the same major version (1), not an old one."],
      "keyTerms": [{"term": "pin", "meaning": "Lock a library to one exact version."}, {"term": "^ (caret)", "meaning": "Allows automatic upgrades to newer minor versions."}, {"term": "minor release", "meaning": "An update like 1.6 to 1.7, meant to add features without breaking anything."}]
    }
  },
  {
    "id": 16, "difficulty": "hard", "topic": "deps",
    "prDescription": "Upgrades `react` from 17 to 18 and replaces `ReactDOM.render` with `createRoot` as the new version requires.",
    "options": ["Moves to a new major version of a library and updates the code it broke", "Adds React to the project for the first time", "Downgrades React to fix a bug", "Only changes the version number with no code changes"],
    "correctIndex": 0,
    "explanation": "Major upgrades can include breaking changes, so code has to change too.",
    "deepExplanation": {
      "correct": "React 18 removed the old way of starting an app, so the PR updates both the version and the code that used the old way.",
      "whyWrong": ["React was already there at version 17.", "18 is newer than 17, so this is an upgrade.", "The code changes from ReactDOM.render to createRoot."],
      "keyTerms": [{"term": "major version", "meaning": "The first number in a version; changing it signals breaking changes."}, {"term": "breaking change", "meaning": "An update that makes old code stop working."}, {"term": "React", "meaning": "A popular library for building web interfaces."}]
    }
  }
];
