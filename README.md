# 🎉 Bingo Game player vs player 🎉

A fun two-player Bingo game built with React.js. This game allows two players to play alternately, marking numbers on their own boards while ensuring that each player can only see their own board.

**🏆 Features**

✅ Two-Player Mode – Players take turns marking numbers.

✅ Hidden Boards – Each player can only see their own board.

✅ Randomized Boards – Every game starts with a unique 5×5 board.

✅ Automatic Line Checking – The game detects when a player gets 5 complete lines and declares the winner.

✅ Restart Button – Start a new game anytime without refreshing.

**🎮 How to Play**

Each player gets a random 5×5 Bingo board with numbers 1 to 25 shuffled randomly.

Player 1 starts by selecting a number from their board.

The same number is automatically struck off from Player 2's board as well.

The turn then switches to Player 2, who picks a number from their own board.

The process repeats until one player completes 5 lines (rows, columns, or diagonals).

The first player to achieve this wins the game! 🏆

**🛠️ Tech Stack**

Frontend: React.js (useState, useEffect)

Styling: Custom CSS

State Management: React Hooks

**🚀 Installation & Setup**

Clone the repository:

git clone https://github.com/Mazid2003/Bingo-game-using-react-player-vs-player.git

cd bingo-game

Install dependencies:

npm install

Start the development server:

npm start

Open the game in your browser at http://localhost:3000/ 🎮

**🎯 Future Improvements**

🔹 Add a single-player mode against an AI opponent.

🔹 Implement multiplayer support using WebSockets.

🔹 Improve UI with animations and sound effects.

**📜 License**

This project is open-source under the MIT License. Feel free to use and
modify it! 🚀

