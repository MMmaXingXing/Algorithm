//队列基类
			function Queue (){
				var _this = this;
				
				this.dataStore = [];
				
				this.enqueue = function(element){
					this.dataStore.push(element);
				};
				this.dequeue = function(element){
					this.dataStore.shift();
				};
				this.front = function(){
					return this.dataStore[0];
				};
				this.toString = function(){
					var str = '';
					for(var i=0;i<this.dataStore.length;i++){
						str += this.dataStore[i];
					}
					return str;
				};
				this.empty = function(){
					if(this.dataStore.length == 0){
						return true;
					}else {
						return false;
					}
				}
			}