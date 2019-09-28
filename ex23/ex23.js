[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

/**
 * A: 1 2 , 3 3 , 6 4
 * B: 1 2 , 2 3 , 3 4
 * C: 1 undefined , 2 undefined , 3 undefined , 4 undefined
 * D: 1 2 , undefined 3 , undefined 4
 */
