
function GetElemValue(id){
    let input = document.getElementById(id);
    if(input.value == ""){
        return ".";
    }
    else{
        return input.value;
    }
}

// replace a value with another value
function replace(assignedValue, elemId){
    document.getElementById(elemId).value = assignedValue;
}

function board(){
    //create board with element values
    board = [
        [GetElemValue('0-0'), GetElemValue('0-1'), GetElemValue('0-2'), GetElemValue('0-3'),
        GetElemValue('0-4'), GetElemValue('0-5'), GetElemValue('0-6'), GetElemValue('0-7'), GetElemValue('0-8')],
        [GetElemValue('1-0'), GetElemValue('1-1'), GetElemValue('1-2'), GetElemValue('1-3'), 
        GetElemValue('1-4'), GetElemValue('1-5'), GetElemValue('1-6'), GetElemValue('1-7'), GetElemValue('1-8')],
        [GetElemValue('2-0'), GetElemValue('2-1'), GetElemValue('2-2'), GetElemValue('2-3'), 
        GetElemValue('2-4'), GetElemValue('2-5'), GetElemValue('2-6'), GetElemValue('2-7'), GetElemValue('2-8')],
        [GetElemValue('3-0'), GetElemValue('3-1'), GetElemValue('3-2'), GetElemValue('3-3'), 
        GetElemValue('3-4'), GetElemValue('3-5'), GetElemValue('3-6'), GetElemValue('3-7'), GetElemValue('3-8')],
        [GetElemValue('4-0'), GetElemValue('4-1'), GetElemValue('4-2'), GetElemValue('4-3'), 
        GetElemValue('4-4'), GetElemValue('4-5'), GetElemValue('4-6'), GetElemValue('4-7'), GetElemValue('4-8')],
        [GetElemValue('5-0'), GetElemValue('5-1'), GetElemValue('5-2'), GetElemValue('5-3'), 
        GetElemValue('5-4'), GetElemValue('5-5'), GetElemValue('5-6'), GetElemValue('5-7'), GetElemValue('5-8')],
        [GetElemValue('6-0'), GetElemValue('6-1'), GetElemValue('6-2'), GetElemValue('6-3'), 
        GetElemValue('6-4'), GetElemValue('6-5'), GetElemValue('6-6'), GetElemValue('6-7'), GetElemValue('6-8')],
        [GetElemValue('7-0'), GetElemValue('7-1'), GetElemValue('7-2'), GetElemValue('7-3'), 
        GetElemValue('7-4'), GetElemValue('7-5'), GetElemValue('7-6'), GetElemValue('7-7'), GetElemValue('7-8')],
        [GetElemValue('8-0'), GetElemValue('8-1'), GetElemValue('8-2'), GetElemValue('8-3'), 
        GetElemValue('8-4'), GetElemValue('8-5'), GetElemValue('8-6'), GetElemValue('8-7'), GetElemValue('8-8')],
    ];
}


function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

function impossible(){
    alert("This sudoku is impossible!")
}

function resetCnt(){
    count = 1;
}

resetCnt()
function sudokuSolver(){
    count += 1;

    //After 50000 tries the sudoku is impossible
    if(count > 50000){
        impossible();
        return true;
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(board, i, j, k)) {
                        board[i][j] = `${k}`;
                        if (sudokuSolver(board)) {
                            return true;
                        } 
                        else {
                            board[i][j] = '.';
                        }
                    }
                }
            return false;
            }
        }
    }
    //enter the solution 
    for(let i =0; i <9; i++)
        for(let j =0; j <9; j++)
            replace(board[i][j], i+'-'+j);
    return true;
}

function resetBoard(){
    board = 
        [
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""]
        ];
    
    for(let i =0; i <9; i++)
        for(let j =0; j <9; j++)
            replace("", i+'-'+j);
}

//bind board and solve function to the button
solveBtn = document.getElementById("solve_btn");
solveBtn.addEventListener("click", board);
solveBtn.addEventListener("click", resetCnt);
solveBtn.addEventListener("click", sudokuSolver);

//bind reset function to the reset button
reset_btn = document.getElementById("reset_btn");
reset_btn.addEventListener("click", resetBoard);
