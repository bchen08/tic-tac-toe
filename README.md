Overview: A tic-tac-toe game with two game modes, draw detection, and some custom CSS. Two players can alternate turns on the same device, or one player can play against a computer. Players can toggle freely between the two game modes.

How to run: Node.js must be installed locally. In terminal, run:

git clone https://github.com/bchen08/tic-tac-toe.git
cd tic-tac-toe
npm install
npm start

The game will open in: http://localhost:3000

My contribution: After completing the offical React Tic-Tac-Toe tutorial locally, I added draw detection that triggers when every square is filled and no winner is declared. Then, I added another game mode where you can play against a computer opponent that picks a random empty square to place an "O" on one second after your move. To toggle between these two modes, I added a mode toggle button that switches between 2-player and vs. computer functionality, resetting the board each time. I also made the board bigger, made the mode toggle button look nicer, added hover effects on the board and button, and centered the elements.

What I learned: Getting the computer to move on its own was by far the hardest challenge. I tried many ways to get the computer to make a move because the player clicks something, but none succeeded until I found out about useEffect, which runs code after React updates the page. The syntax was quite confusing to meander through, going through a lot of debugging to implement what initially seemed like a fairly simple piece of functionality.

References:

https://react.dev/learn/tutorial-tic-tac-toe
https://react.dev/reference/react/useEffect
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
