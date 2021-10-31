function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];//初始化一个空数组来保存列表元素
	this.find = find;  //查找元素
	this.toString = toString; //显示列表中的元素
	this.append = append; //添加元素
	this.remove = remove;//删除后元素
	this.length = length;//返回列表中有多少元素
	this.insert = insert;//向列表中插入一个元素
	this.clear = clear;//清楚列表中所有元素
	this.contains = contains;//判断给定值是否在列表中
	//遍历列表
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.hasNext;
	this.hasPrev;
}

//append : 给列表添加元素

function append (element) {
	this.dataStore[this.listSize++] = element;
}


//find ： 从列表中查找元素

function find (element) {
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

//remove : 从列表删除元素

function remove (element) {
	var foundAt = this.find(element);
	if( foundAt > -1 ){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

//length : 列表中有多个元素

function length () {
	return this.listSize;
}

//toString : 显示列表中的元素

function toString () {
	return this.dataStore;
}


//测试代码
//var names = new List();
//names.append('1')
//names.append('2')
//names.append('3')
//print(names.toString());
//names.remove('2')
//print(names.toString());


//insert : 向列表中插入一个元素

function insert (element, after) {
	var insertPos = this.find(after);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

//clear ： 清空列表中的所有元素

function clear () {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

//contains ：判定给定值是否在列表中

function contains (element) {
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}

//遍历列表   (迭代器)

//定位到第一个元素
function front () {
	this.pos = 0;
}

//定位到最后一个元素
function end () {
	this.pos = this.listSize-1;
}

//向前一位
function prev () {
	--this.pos;
}

//向后一位
function next () {
	if(this.pos < this.listSize){
		++this.pos;
	}
}

//获取当前位置
function currPos () {
	return this.pos;
}

//移动到某个位置
function moveTo (position) {
	this.pos = position;
}

//获取当前位置元素
function getElement () {
	return this.dataStore[this.pos];
}

//获取当前位置之后的元素
function hasNext () {
	return this.pos < this.listSize;
}

//获取当前元素之前的元素
function hasPrev () {
	return this.pos >= 0;
}

//测试代码

var name = new List();
name.append("1");
name.append("2");
name.append("3");
name.append("4");
name.append("5");
name.append("6");
name.append("7");

names.front();
print(name.getElement());//显示1
print(name.currPos());//获取当前位置


//使用遍历器遍历列表例子
//从前向后遍历列表
for(name.front(); name.hasNext(); name.next()){
	print(name.getElement());
}

//从后向前遍历列表
for(name.end();name.hasPrev;name.prev){
	print(name.getElement());
}


