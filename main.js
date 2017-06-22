function isBigger (a, b) {
    return a > b;
}

console.log ( isBigger (-6, -2) );

/* ==================================== */

function isSmaller (a, b) {
    return a < b;
}

console.log ( isSmaller (15, 100) );

/* ==================================== */

/*function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function getMin (a, b, c) {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
    }
    args.sort (compareNumeric); 
    console.log ( args );
}

getMin (16, 344, 75);*/

/* ==================================== */

function pow (x, n) {
    var j = x;
        for (var i = 1; i < n; i++) {
            j *= x;
        }
    return j;
}

console.log ( pow (3, 5) );

/* ==================================== */

