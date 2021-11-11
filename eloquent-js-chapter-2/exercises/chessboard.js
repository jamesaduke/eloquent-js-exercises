/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height. */

// Elegant solution

// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);

// modification for any solution

        var board = "";
        // the outer loop is for rows
    for (var y = 0; y < 8; y++) {
        // inner loop is for columns
        for (var x = 0; x < 8; x++) {
            if (x%2 == y%2)
                board += " ";
            else
                board += "#";
        }
        board += "\n";
    }
    console.log(board);
