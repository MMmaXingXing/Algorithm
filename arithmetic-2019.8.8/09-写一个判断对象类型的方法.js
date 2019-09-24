// 判断对象类型
// 测试用例
var arr = [];
var obj = {};
var date = new Date();
var fun = function() {};
var num = 0;
var str = "";
var n = null;
var nan = NaN;
var bool = true;
var un = undefined;

// 类型集合
var _type = [arr, obj, date, num, str, n, fun, nan, bool, un];

function getType(value) {
    if (typeof value == 'number' && isNaN(value)) {
        return "[object NaN]";
    }
    return Object.prototype.toString.call(value);
}

function getObjType(obj) {
    var typeList = [];
    for(var i = 0; i < obj.length; i++) {
        var itemType = getType(obj[i]);
        typeList.push({ item: obj[i], type: itemType });
    }
    return typeList;
}

console.log(getObjType(_type));

