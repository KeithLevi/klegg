// Modify these definitions...
"use strict"; 
/* global egg */


/**
 * construct an array containing the argument values
 */
egg.topScope.array = "...";

/**
 * length(array) to get an array’s length
 */
egg.topScope.length = "...";

/**
 * element(array, n) to fetch the nth element from an array.
 */
egg.topScope.element = "...";

/*
run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`); 
*/
// → 6