1. HTML/CSS
   - board
     - three approaches DONE
       - 7 column elements with 6 slot elements
       - 6 row elements containing 7 slot elements
       - one container with 42 slots
   - slots
     - circle inside a square
     - add classes for player1 and player2 when a slot is selected

1. Javascript
   - column selection
     - click is easiest
     - determine the slot in the selected column into which to put the current player's piece
   - check for victory
     - check for vertical victory
       - loop through slots in column to determine if there are four contiguous slots with the current player's  class
     - check or horizontal victory
       - loop through slots in row to determine if there are four contiguous slots with the current player's  class
     - check for diagnonal victory
   - if no victory, switch players
   - if victory, show victory message

   - if no more moves, show also a pop up!
   - effect wypuklych zetonow?
   - body background doesnt work;
   - keyframes animation?? from the to to bottom

   - 4 some action when you win.

   first all the class winner goes big;
   2nd the board goes around

  pop up who is the winner

  why this winner class doesnt work?
  setTimeout for play again button doesnt work
  zablokowac gre, jesli jedna osoba wygra!!!
