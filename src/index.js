
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let sort = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            let arrayRev = [];
            arrayRev = matrix[i].reverse();
            for (let x = 0; x < arrayRev.length; x++) {
                sort.push(arrayRev[x]);
            }
        } else if (i % 2 == 0) {
            for (let x = 0; x < matrix[i].length; x++) {
                sort.push(matrix[i][x]);
            }
        }
    }
    return sort;
}
