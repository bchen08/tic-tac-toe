import { useState, useEffect } from 'react';

function Square({value, onSquareClick}) {
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [vsComputer, setVsComputer] = useState(false);
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !==null);
  const gameOver = winner || isDraw;
  const computersTurn = vsComputer && !xIsNext;

  useEffect(() => { {/* runs AFTER player */}
    if (!computersTurn || gameOver) { {/* do nothing condition for computer */}
      return;
    }

    const emptySquares = [];
    for (let i = 0; i < squares.length; i++) { 
      if (squares[i] === null) {
        emptySquares.push(i); {/*if a square is empty, add its position to list*/}
      }
    }

    const move = emptySquares[Math.floor(Math.random() * emptySquares.length)]; {/* produces an integer 0-<list length>*/}
    const timer = setTimeout(() => {
      const nextSquares = squares.slice();
      nextSquares[move] = "O";
      setSquares(nextSquares);
      setXIsNext(true); {/*turn goes BACK to X */}
    }, 500); {/*ms*/} 
    }, [computersTurn, gameOver, squares]); 


  function handleClick(i) {
  
    if (squares[i] || gameOver || computersTurn) { {/*do nothing condition for player */}
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "It's a draw!"; 
  } else if (computersTurn) {
    status = "Computer is thinking...";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
   }

  function toggleMode() {
    setVsComputer(!vsComputer);
    setSquares(Array(9).fill(null)); {/*resets board to X first move*/}
    setXIsNext(true);
  }
    
  return ( 
  <> 
    <div className="status">{status} {/*status of game*/}
    </div> 
    <button className="mode" onClick={toggleMode}> {/*toggle button*/}
      {vsComputer ? "Switch to 2-player mode" : "Switch to vs. computer"}
    </button>
    <div className="board-row"> {/*board*/}
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </> 
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares [a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
  }
}
return null;
}

