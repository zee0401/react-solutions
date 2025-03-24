import { useState } from "react";
import "./style.css";

const Grid = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (updatedBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                updatedBoard[a] &&
                updatedBoard[a] === updatedBoard[b] &&
                updatedBoard[a] === updatedBoard[c]
            ) {
                return updatedBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const updatedBoard = [...board];
        updatedBoard[index] = currentPlayer;
        setBoard(updatedBoard);

        const gameWinner = checkWinner(updatedBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
    };

    return (
        <div className="container">
            <div className="grid-container">
                {board.map((value, i) => (
                    <div className="box" key={i} onClick={() => handleClick(i)}>
                        {value}
                    </div>
                ))}
            </div>
            {winner ? (
                <p>{winner} is the Winner! 🎉</p>
            ) : (
                <span>Player {currentPlayer}'s turn</span>
            )}
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Grid;
