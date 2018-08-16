var math = require("./MathLib.js");
var mtr_start = [   [1,7,5,3],
 					[3,2,3,4],
  					[6,2,4,6],
   					[8,3,4,5] ]

var mtr_end = [   [1,7,5,3],
 					[3,2,3,4],
  					[6,2,4,6],
   					[8,3,4,5] ]

var det = math.matrix_minus_2(mtr_start,mtr_end);
console.log(det)
