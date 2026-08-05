🎯 Quiz Game

A modern, responsive quiz game built with vanilla HTML, CSS, and JavaScript. Answer multiple-choice questions, get instant feedback on each pick, and see your final score with a personalized message at the end.


🔗 **[Live Demo](https://jalilgs.github.io/quiz/)**

Show Image Show Image

✨ Features
🎲 Pulls 5 random questions from a larger question bank each playthrough
🔀 Shuffles answer order so the correct choice isn't always in the same spot
✨ Staggered entrance animations — answer buttons slide in one by one
✅ Instant visual feedback — correct answer highlighted green, wrong pick highlighted red
📊 Animated progress bar that tracks quiz completion
🏆 Live score counter
🔁 Restart button for a fresh, differently-shuffled round
📱 Fully responsive, works on mobile and desktop
🛠️ Built With
HTML5 — structure
CSS3 — styling, gradients, responsive layout (Flexbox), keyframe animations
JavaScript (ES6) — quiz logic, DOM manipulation, no frameworks or dependencies
📂 Project Structure
quiz-game/
├── index.html
├── style.css
├── script.js
└── README.md
📖 How It Works
Click Start Quiz.
Five questions are randomly selected from the question bank, with answers shuffled.
Pick an answer — it's immediately marked correct or incorrect.
Progress bar and score update as you go.
After the last question, see your final score and a summary message.
Hit Restart to play again with a new set of questions.
🚀 Getting Started

No build step or dependencies — just clone and open.

bash
git clone https://github.com/jalilgs/quiz.git
cd quiz

Then open index.html in your browser, or serve it locally:

bash
npx serve .
💡 Roadmap
 Countdown timer per question
 Sound effects on correct/incorrect answers
 Dark mode toggle
 Difficulty levels (easy / medium / hard)
 Question categories (HTML, CSS, JavaScript, General Knowledge)
 Pull questions from an external API
 Save high scores with Local Storage
 Post-quiz stats breakdown
📚 What I Practiced

Building this project was hands-on practice with:

DOM manipulation & dynamic element creation
Event handling
Array/object data structures and array methods (sort, slice, forEach)
State management across quiz screens
CSS Flexbox & responsive design
CSS @keyframes animations (staggered entrances with animation-delay)
Writing clean, readable vanilla JS without frameworks
👨‍💻 Author

Abdeldjalil (Jalil) GitHub: @jalilgs

⭐ Support

If you found this project useful or interesting, consider giving it a star on GitHub — it helps a lot!
