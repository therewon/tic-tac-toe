import { useState, useEffect } from 'react'
import {toast, Toaster} from 'react-hot-toast'
import './App.css'


const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [isXTurn, setIsXTurn] = useState(true)

  const checkWinner = (currentBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]
      }
    }
    return null;
  }

  const winner = checkWinner(board)
  const isDraw = !winner && board.every((cell)=> cell != "")

  const handleClick = (index) => {
    if(board[index] || winner) return 

    const newBoard = [...board]
    newBoard[index] = isXTurn ? "X" : "O"

    setBoard(newBoard)
    setIsXTurn(!isXTurn)

  }

  const restartGame = () => {
    setBoard(Array(9).fill(""))
    setIsXTurn(true)
  }

  useEffect(() => {
  if (winner) {
    toast.success(`Game over! Winner: ${winner}`);
  } else if (isDraw) {
    toast.info("Game over! It's a draw.");
  }
}, [winner, isDraw]);

  return (
    <div className="container">
      <Toaster position='top center'/>
      <div className="game-card">
        <h1>Tic Tac Toe</h1>
        <p className="status">
          {winner
            ? `Winner: ${winner}`
            : isDraw
            ? "It's a Draw!"
            : `Turn: ${isXTurn ? "X" : "O"}`}
        </p>

        <div className="board">
          {board.map((cell, index) => (
            <button
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {cell}
            </button>
          ))}
        </div>

        <button className="restart-btn" onClick={restartGame}>
          Restart Game
        </button>
      </div>
    </div>
  )
}


export default App
