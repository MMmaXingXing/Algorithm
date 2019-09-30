//基础列表类
var List = function (){
				var _this = this;
				_this.dataStore = [],
				_this.listSize = this.dataStore.length;
				_this.pos = 0;
				//更新长度
				_this.updateLength = function(){
					_this.listSize = _this.dataStore.length;
				};
				//清空元素
				_this.clear = function(){
					delete _this.dataStore;
				};
				//字符串形式返回列表元素
				_this.toString = function(){
					return this.dataStore;
				};
				//返回当前位置元素 
				_this.getElement = function(){
					return _this.dataStore[_this.pos]||'超出索引';
				};
				//当前元素后插入新元素
				_this.insert = function(element,after){
					var foundAfterAt = _this.find(after);
					if(foundAfterAt > -1){
						_this.dataStore.splice(foundAfterAt+1,0,element);
						return true;
					}
					return false;
				};
				//列表末尾添加新元素
				this.append = function(element){
					_this.dataStore[_this.listSize] = element;
					_this.updateLength();
				};
				//列表中删除元素
				_this.remove = function(element){
					var foundAt = _this.find(element);
					if(foundAt != -1){
						_this.dataStore.splice(foundAt,1);
						_this.updateLength();
						return true;
					}else{
						console.log('不存在此元素');
						return false;
					}
				};
				//当前位置移动到第一个
				_this.front = function(){
					this.pos = 0;
				};
				//当前位置移动到最后一个
				_this.end = function(){
					_this.pos = _this.listSize - 1;
				};
				//当前位置后移一位
				_this.next = function(){
					if(_this.pos < _this.listSize){
						++_this.pos;
					}
				};
				//返回列表当前位置
				_this.curPos = function(){
					return _this.pos;
				};
				//当前位置移动到指定位置
				_this.moveTo = function(position){
					_this.pos = position;
				};
				//列表中包含当前元素
				_this.contains = function(element){
					for(var i=0;i<_this.listSize;i++){
						if(element == _this.dataStore[i]){
							return true;
						}
					}
					return false;
				};
				//查找元素
				_this.find = function(element){
					var len = _this.listSize;
					for(var i=0;i<len;i++){
						if(element == _this.dataStore[i]){
							return i;
						}
					}
					return -1;
				};
				//获取列表长度
				_this.length = function(){
					return _this.listSize;
				}
			}