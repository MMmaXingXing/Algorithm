
/**
 * 
 * 自动创建一个二维数组
 * 参数为 行，列 和初始值
 * @param {Object} initial
 */
Array.matrix = function(nomrows,numcols,initial){
	var arr = [];
	for(var i=0; i<numrows; ++i){
		var columns = [];
		for(var j=0; j<numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

//test
var nums = Array.matrix(5,5,0)
console.log(nums[1][1])
