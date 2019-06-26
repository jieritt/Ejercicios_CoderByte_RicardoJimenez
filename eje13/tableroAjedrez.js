function pascalTriangle(row, column) {
    if (column === 0 || column === row) {
        return 1;
    }
    return pascalTriangle(row - 1, column - 1) + pascalTriangle(row - 1, column);
}

function ChessboardTraveling(str) { 
    var positions = str.match(/\(\d\s\d\)/g).map(function(position) {return position.match(/\d/g).map(Number);});
    var move = [positions[1][0] - positions[0][0], positions[1][1] - positions[0][1]];
    return pascalTriangle(move[0] + move[1], move[0]);
}

console.log(ChessboardTraveling("(2 2)(4 3)"));
