function MaximalSquare(strArr) {
    var sizeY = strArr.length;
    if (sizeY === 0) {
        return 0;
    }
    var sizeX = strArr[0].length;
    if (sizeX === 0) {
        return 0;
    }

    var size = Math.min(sizeX, sizeY);
    var x, y, i, j;
    var allOnes;

    while (size > 0) {
        for (y = 0; y <= sizeY - size; y++) {
            for (x = 0; x <= sizeX - size; x++) {
                allOnes = true;
                for (j = 0; j < size; j++) {
                    for (i = 0; i < size; i++) {
                        if (strArr[y + j][x + i] === '0') {
                            allOnes = false;
                            break;
                        }
                    }
                    if (!allOnes) {
                        break;
                    }
                }
                if (allOnes) {
                    return size * size;
                }
            }
        }
        size--;
    }
    
    return 0;
}

console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));
