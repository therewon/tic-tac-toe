# Tic Tac Toe Game

A simple and interactive **Tic Tac Toe** game built with **React** and **Vite**.  
This project allows two players to play turn by turn, detects the winner automatically, and shows the game result in a clean user interface.

## Features

- Classic 2-player Tic Tac Toe gameplay
- Turn-based player switching (X and O)
- Automatic winner detection
- Draw detection
- Restart game functionality
- Clean and responsive UI
- Toast notification when the game ends

## Technologies Used

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **React Toastify**

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tic-tac-toe.git
2. Navigate to the project folder
cd tic-tac-toe
3. Install dependencies
npm install
4. Start the development server
npm run dev
Project Structure
tic-tac-toe/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── package.json
│── vite.config.js
│── README.md
How It Works

The game board contains 9 cells.

Two players take turns placing X and O.

The app checks for winning combinations after every move.

If one player matches a winning pattern, the game ends and the winner is displayed.

If all cells are filled and there is no winner, the game ends in a draw.

The Restart Game button resets the board and starts a new match.

Future Improvements

Highlight winning cells

Add score tracking

Add player vs computer mode

Add sound effects

Improve UI with animations

Add dark/light mode
