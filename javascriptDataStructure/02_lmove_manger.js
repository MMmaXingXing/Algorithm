//假设这里有一个电影file列表

var movies = read(films.txt).split('\n');

//创建一个将结果保存到数组的列表
function createArr(file){
	var arr = read(file).splice("\n");
	for(var i=0;i<arr.length;++i){
		arr[i] = arr[i].trim();
		//trim删除每个数组元素末尾的空格
	}
	return arr;
}

var movieList = new List();

//将数组movies的元素保存到一个列表中
for(var i = 0; i<movies.length; ++i) {
	movieList.append(movies[i])
}

//创建一个函数来显示现有影碟清单
function displayList (list){
	for(list.front(); list.currPos() < list.length(); list.next() ){
		print(list.getElement());
	}
}
