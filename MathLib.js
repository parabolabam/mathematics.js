
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

var matrix_multi = function(A, B){
	if(A[0].length !== B.length) return "Matrix cannor be multiplyed due to different rows & cols number";
	res = [];
	for(var k = 0; k < B[0].length; k++) res[k] = [];

	for(var i = 0; i < A.length; i++){
		for(var j = 0; j < B[0].length; j++){
			let sum = 0;
			for(var k =0; k < A[0].length; k++){
				sum += A[i][k]*B[k][j]
			}
			res[i][j] = sum;
		}
	}
	return res;
}


var determinant = (A) => {
		if(A.length !== A[0].length) return "Matrix is not square"
		var N = A.length, B = [], denom = 1, exchanges = 0;
	    for (var i = 0; i < N; ++i)
	     { B[i] = [];
	       for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
	     }
	    for (var i = 0; i < N-1; ++i)
	     { var maxN = i, maxValue = Math.abs(B[i][i]);
	       for (var j = i+1; j < N; ++j)
	        { var value = Math.abs(B[j][i]);
	          if (value > maxValue){ maxN = j; maxValue = value; }
	        }
	       if (maxN > i)
	        { var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
	          ++exchanges;
	        }
	       else { if (maxValue == 0) return maxValue; }
	       var value1 = B[i][i];
	       for (var j = i+1; j < N; ++j)
	        { var value2 = B[j][i];
	          B[j][i] = 0;
	          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[i][k]*value2)/denom;
	        }
	       denom = value1;
	     }                                           //@ viewtopic.php?f=44&t=22390
	    if (exchanges%2) return -B[N-1][N-1];
	    else return B[N-1][N-1];

}


var getMinor = (mtr, row, col) => {
	var re = [];
	for(var i = 0; i < mtr.length; i++) re[i] = []
	for(var i =0; i< mtr.length; i++){
		if(i !== row){
			for(var j = 0; j < mtr[0].length; j++){
				if(j !== col) re[i][j] = mtr[i][j]
			}
		}
	}
	return cleanFromEmptyRowsAndElements(re)
}


var cleanFromEmptyRowsAndElements = (arr) => {
	arr = arr.filter(item => item.length!==0 && item.clean(undefined))
	return arr
}

var swap_rows = (mtr,row1_index, row2_index) => {
	var temp = mtr[row1_index];
	mtr[row1_index] = mtr[row2_index];
	mtr[row2_index] = temp;
	return mtr
}


var mtr_to_power = (mtr, power) => {
	var memory = mtr;
	if(power === 0) return get_1_Mtr(mtr)
	for(var p = 1; p < power; p++){
		memory = matrix_multi(memory, mtr);
	}
	return memory
}


var get_1_Mtr = (mtr) => {
	for(var i =0; i < mtr.length; i++){
		for(var j = 0; j < mtr[0].length; j++){
			if(i === j) mtr[i][j] = 1;
			else mtr[i][j] = 0;
		}
	}
	return mtr
}

var matrix_plus = (mtr1, mtr2) => {
	var mtr1_row = mtr1.length,
	 	mtr2_row = mtr2.length,
		mtr1_col=mtr1[0].length,
		mtr2_col=mtr2[0].length,
		re = []
	if(mtr1_row!== mtr2_row && mtr1_col !== mtr2_col)
		return "Not equal sizes of both matrix"
	for(var i = 0;  i<mtr2_row; i++) re[i] = []
	for(var i = 0; i < mtr1_row; i++){
		for(var j = 0; j< mtr1_col; j++){
			re[i][j] = mtr1[i][j]+mtr2[i][j]
		}
	}
	return re
}

var matrix_minus = (mtr1, mtr2) => {
	var mtr1_row = mtr1.length,
	 	mtr2_row = mtr2.length,
		mtr1_col=mtr1[0].length,
		mtr2_col=mtr2[0].length,
		re = []
	if(mtr1_row!== mtr2_row && mtr1_col !== mtr2_col)
		return "Not equal sizes of both matrix"
	for(var i = 0;  i<mtr2_row; i++) re[i] = []
	for(var i = 0; i < mtr1_row; i++){
		for(var j = 0; j< mtr1_col; j++){
			re[i][j] = mtr1[i][j]-mtr2[i][j]
		}
	}
	return re
}


var transpone = (mtr) => {

	


}


module.exports ={

	matrix_multi:matrix_multi,
	determinant:determinant,
	mtr_to_power:mtr_to_power,
	getMinor:getMinor,
	swap_rows:swap_rows,
	mtr_to_power:mtr_to_power,
	get_1_Mtr:get_1_Mtr,
	matrix_plus:matrix_plus,
	matrix_minus:matrix_minus

}