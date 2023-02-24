function solution(arr1, arr2) {
    return arr1.map(row => {
        return arr2[0].map((_, i) => {
            return row.reduce((sum, cell, j) => {
                return sum + cell * arr2[j][i];
            }, 0);
        });
    });
}