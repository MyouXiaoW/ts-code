"use strict";
//1.自动构建ts
/**
 * 1.tsc --init 修改tsconfig中的 outdir
 * 2.终端 运行命令行 监视tsconfig
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var string = '你好ts';
//2.ts中的数据类型
/**
 * 布尔类型（boolean）
 * 数字类型（number）
 * 字符串类型（string）
 * 数组类型（array）
 * 元祖类型（tuple）
 * 枚举类型（enum）
 * 任意类型（any）
 * null和undefined
 * void
 * never类型
 */
//定义数组类型有两种方式
var number = [1, 2, 3, 4];
var number2 = [1, 2, 3, 4];
//元祖类型，数组的一种
//给数字中每一个位置指定一个类型
var arr = [122, 'ssss'];
//枚举类型
//如果标识符没有复制，那它的值就是下标
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
var e = Flag.error;
console.log(s, e);
var Er;
(function (Er) {
    Er[Er["undefind"] = -1] = "undefind";
    Er[Er["null"] = -2] = "null";
    Er[Er["success"] = 1] = "success";
})(Er || (Er = {}));
//任意类型
var oBox = document.getElementById('box');
oBox.style.color = 'red';
//undefind 和null 
//void 没有任何类型
function run() {
}
//never 包括 undefind 和null的自类型，代表从来不会出现的值
var a;
// a=(function(){
// throw new Error();
// })()
//3.1函数的定义
function run1() {
    return 'run';
}
var run2 = function () {
    return 1223;
};
//定义方法传参
function getInfo(name, age) {
    return name + "-" + age;
}
//3.2方法可选参数
function getInfo2(name, age) {
    if (age) {
        return name + "-" + age;
    }
    else {
        return name + " \u5E74\u9F84\u4FDD\u5BC6";
    }
}
//3.3默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "-" + age;
    }
    else {
        return name + " \u5E74\u9F84\u4FDD\u5BC6";
    }
}
//3.4剩余参数
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    return result[0];
}
function getInfo4(name) { return name; }
;
//3.6箭头函数 指向上下文
//4 ts中的类
//es5 中类的继承 对象冒充继承，原型链继承 ，对象冒充继承+原型链的组合继承
//4.1 ts 中定义类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
//4.2 ts中实现继承 extends 和super两个关键字
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person1;
}());
//  var p = new Person1('王5')
//  p.run()
//  alert(p.run())
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person1));
var w = new Web('李四');
alert(w.run());
//4.3 类里面的修饰符 ts里面定义属性的时候给我们提供了 三种修饰符
/**
 * public ： 公有，   在类里面，子类，类外面都可以访问
 * project ：保护类型，在类里面子类里面可以访问，在类外面不可以访问
 * private ：私有，   在类里面可以访问 ，在子类，类外面不可以访问
 *
 * 默认不加修饰符 就是public
 */
//4.4 静态属性和静态方法
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.print = function () { };
    return Person3;
}());
//4.5 抽象类和多态
//多态:父类定一个方法不去实现，让继承的子类去实现，没有一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return 'dog eat';
    };
    return Dog;
}(Animal));
//ts中的抽象类，它是提供其他类继承的基础，不能直接被实例化
//主要是定义标准，是一个基类
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog1.prototype.eat = function () {
    };
    return Dog1;
}(Animal1));
function printName(name) {
    console.log(name.firstName + '--' + name.secondName);
}
//小技巧，外部定义对象
var obj = {
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);
function getName(name) {
    console.log(name);
}
getName({ firstName: 'zhang' });
var md5 = function (key, value) {
    return key + value;
};
var obj2 = { 1: "1", 3: "2" };
var Dog6 = /** @class */ (function () {
    function Dog6(name) {
        this.name = name;
    }
    //不写参数也行
    Dog6.prototype.eat = function () {
        console.log(this.name + 'chi');
        return name;
    };
    Dog6.prototype.a = function (str) {
        return str;
    };
    return Dog6;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function () {
    };
    return Programmer;
}());
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this;
    }
    Web1.prototype.work = function () {
    };
    Web1.prototype.eat = function (str) {
        return str;
    };
    return Web1;
}(Programmer));
//6 泛型 解决类和接口的复用性
//范型，可以支持不特定的数据类型，要求：传入的参数和返回的参数一致
//6.1泛型函数
//只能返回string类型
function getData(value) {
    return value;
}
//T表示范型具体是什么类型是调用这个方法的时候决定的
function getData1(value) {
    return value;
}
//6.2 泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var setData = function (value1, value2) {
    return value1 + value2;
};
setData('11', '222');
var myGetData = function (value) {
    return value;
};
