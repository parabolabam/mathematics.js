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
		A = gauss_elimination_det(A);
		let det = 1;
		A.forEach( function(element, index) {
			element.forEach( function(el, ind) {
				if(index === ind) det *= el
			});
		});
		return Math.round(det);
}

var gauss_elimination_det = (A) => {
	if(A.length !== A[0].length) return `Method relies on square matrix, a little further
	there will be a method working with matrices ${A.length} by ${A[0].length}`
	for(var k = 0; k < A.length; k++){
		for(var i = k + 1; i < A.length; i++){
			let mu = A[i][k] / A[k][k];
			for(var j = 0; j < A.length; j++){
				A[i][j]-=A[k][j]*mu
			}
		}
	}
	return A
}

var gauss_elimination = (A) => {
	if(A.length !== A[0].length) return `Method relies on square matrix, a little further
	there will be a method working with matrices ${A.length} by ${A[0].length}`
	for(var k = 0; k < A.length; k++){
		for(var i = k + 1; i < A.length; i++){
			let mu = A[i][k] / A[k][k];
			for(var j = 0; j < A.length; j++){
				A[i][j]-=A[k][j]*mu
			}
		}
	}
	A = A.map(item => item.map(el => Math.round(~~el)))
	return A
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
		mtr2_col=mtr2[0].length
	if(mtr1_row!== mtr2_row && mtr1_col !== mtr2_col)
		return "Not equal sizes of both matrix"
	for(var i = 0;  i<mtr2_row; i++) re[i] = []
	for(var i = 0; i < mtr1_row; i++){
		for(var j = 0; j< mtr1_col; j++){
			mtr1[i][j] = mtr1[i][j]+mtr2[i][j]
		}
	}
	return mtr1
}

var matrix_minus = (mtr1, mtr2) => {
	var mtr1_row = mtr1.length,
	 	mtr2_row = mtr2.length,
		mtr1_col=mtr1[0].length,
		mtr2_col=mtr2[0].length
	if(mtr1_row!== mtr2_row && mtr1_col !== mtr2_col)
		return "Not equal sizes of both matrix"
	for(var i = 0; i < mtr1_row; i++){
		for(var j = 0; j< mtr1_col; j++){
			mtr1[i][j] = mtr1[i][j]-mtr2[i][j]
		}
	}
	return mtr1
}

var transpose = (a) => {
	return a[0].map((element, index) => { return a.map(item => { return item[index] }) });
}


var max_in_array2D=(array2d) => { return array2d.map( item => { return max_in_array(item) }).reduce((c, d) => c>d?c:d)}

var max_in_array = (array)=>{
	return array.reduce((a,b)=>a>b?a:b)
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
	matrix_minus:matrix_minus,
	transpose:transpose,
	gauss_elimination:gauss_elimination,
	max_in_array2D:max_in_array2D,

}


