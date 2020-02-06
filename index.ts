//1.自动构建ts
/**
 * 1.tsc --init 修改tsconfig中的 outdir
 * 2.终端 运行命令行 监视tsconfig
 */

 var string:string = '你好ts';

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
 var number:number[]=[1,2,3,4]

 var number2 :Array<number> = [1,2,3,4]

 //元祖类型，数组的一种
 //给数字中每一个位置指定一个类型
 let arr:[number,string]=[122,'ssss']

 //枚举类型
 //如果标识符没有复制，那它的值就是下标
 enum Flag {success=1,error=0};
 var s:Flag = Flag.success
 var e:Flag = Flag.error
 console.log(s,e)

 enum Er{'undefind'=-1,'null'=-2,'success'=1}

 //任意类型
 var oBox:any = document.getElementById('box')
 oBox.style.color = 'red'

//undefind 和null 

//void 没有任何类型

function run():void{

}

//never 包括 undefind 和null的自类型，代表从来不会出现的值
var a:never 

// a=(function(){
    // throw new Error();
// })()



//3.1函数的定义

function run1():string{
    return 'run'
}

var run2 = function():number{
    return 1223;
}

//定义方法传参
function getInfo(name:string,age:number):string{
    return `${name}-${age}`
}

//3.2方法可选参数
function getInfo2(name:string,age?:number):string{
    if(age){
        return `${name}-${age}`
    }else{
        return `${name} 年龄保密`
    }
}

//3.3默认参数
function getInfo3(name:string,age:number=20):string{
    if(age){
        return `${name}-${age}`
    }else{
        return `${name} 年龄保密`
    }
}

//3.4剩余参数
function sum(...result:number[]):number{
    return result[0]
}

//3.5函数重载
//在java中方法的重载，重载是指两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
//ts中的重载，通过为同一个函数提供多个函数类型定义来实现多种功能的目的

function getInfo4(age:number):number;

function getInfo4(name:string,age:number):string;

function getInfo4(name:any):any{return name};

//3.6箭头函数 指向上下文


//4 ts中的类
//es5 中类的继承 对象冒充继承，原型链继承 ，对象冒充继承+原型链的组合继承

//4.1 ts 中定义类
 class Person {
     name:string;//属性
     constructor(name:string) { //构造函数
         this.name = name;
     }

     run():void{
         console.log(this.name)
     }
 }

 //4.2 ts中实现继承 extends 和super两个关键字

 class  Person1 {

     name:string;
     constructor(name:string) {
        this.name = name
     }

     run():string{
         return `${this.name}在运动`
     }
 }

//  var p = new Person1('王5')
//  p.run()
//  alert(p.run())

class Web extends Person1{
    constructor(name:string){
        super(name)
    }
}

var w = new Web('李四')

alert(w.run())

//4.3 类里面的修饰符 ts里面定义属性的时候给我们提供了 三种修饰符
/**
 * public ： 公有，   在类里面，子类，类外面都可以访问
 * project ：保护类型，在类里面子类里面可以访问，在类外面不可以访问
 * private ：私有，   在类里面可以访问 ，在子类，类外面不可以访问
 * 
 * 默认不加修饰符 就是public
 */

 //4.4 静态属性和静态方法
 class Person3{
     static print():void{}

 }

 //4.5 抽象类和多态
 //多态:父类定一个方法不去实现，让继承的子类去实现，没有一个子类有不同的表现

 class  Animal{
     name:string
     constructor(name:string){
        this.name = name
     }

     eat():void{

     }
 }

 class Dog extends Animal{
     constructor(name:string) {
        super(name)
     }

     eat(){
         return 'dog eat'
     }
 }

 //ts中的抽象类，它是提供其他类继承的基础，不能直接被实例化
 //主要是定义标准，是一个基类

 abstract class Animal1 {
     abstract eat():any;
 }

 class Dog1 extends Animal1{
     name:any
     constructor(name:any){
         super()
         this.name = name
     }
     eat(){

     }
 }

 //5 接口 行为和动作的规范，对批量方法进行约束
 //5.1属性接口 对json的约束

 interface FullName{
     firstName:string;//以分号结束
     secondName:string
 }
 
 function printName(name:FullName){
     console.log(name.firstName+'--'+name.secondName)
 }

 //小技巧，外部定义对象
 let obj = {
     age:20,
     firstName:'张',
     secondName:'三'
 }
 printName(obj)

//  printName({age:20,firstName:'zhao',secondName:'si'}) 这样写就会报错
//建议严格按照接口来操作

//5.2 可选属性接口
interface FullName1{
    firstName:string;
    secondName?:string;

}

function getName(name:FullName1){
    console.log(name)
}

getName({firstName:'zhang'})


//5.3函数类型接口:对方法传入的参数以及返回值进行约束

//加密的函数类型接口
interface Encrypet{
    (key:string,value:string):string
}

var md5:Encrypet = function(key:string,value:string):string{
    
    return key+value
}

//5.4 可索引接口 ，数组，对象的约束
//可索引接口，对数组的约束
interface UserArr{
    [index:number]:string;
}

var obj2:UserArr = {1:"1",3:"2"}
//可索引接口，对对象的约束
interface UserObj{
    [index:string]:string
}

//5.5 类类型接口 对类的约束 和抽象类有点相似

interface Animal3{
    name:string;
    eat(str:string):string;
}

class Dog6 implements Animal3{
    name:string
    constructor(name:string){
        this.name = name
    }
    //不写参数也行
    eat(){
        console.log(this.name +'chi')
        return name
    }

    a(str:string):string{
        return str;
    }

}

//5.6接口扩展
//继承接口
interface Animal2 {
    eat(str:string):string;
    name:string;
}

interface Person2 extends Animal2{
    work():void
}

class Programmer {
    name:string;
    constructor(name:string){
        this.name= name
    }

    coding(){

    }
}

class Web1 extends Programmer implements Person2{
    constructor(name:string){
        super(name)
    }

    work(){

    }

    eat(str:string){
        return str
    }
}

//6 泛型 解决类和接口的复用性
//范型，可以支持不特定的数据类型，要求：传入的参数和返回的参数一致

//6.1泛型函数
//只能返回string类型
function getData(value:string):string{
    return value
}

//T表示范型具体是什么类型是调用这个方法的时候决定的

function getData1<T>(value:T):T{
    return value
}


//6.2 泛型类

class MinClass<T> {
    public list:T[] =[]
    
    add(num:T):void{
        this.list.push(num)
    }

    min():T{
        var minNum = this.list[0]

        for(var i =0;i<this.list.length;i++){
            if(minNum > this.list[i]){
                minNum = this.list[i]
            }
        }

        return minNum
    }
}

//6.3 范型接口
//第一种定义范型接口方法
interface ConfigFn{
    <T>(value1:T,value2:string):string
}

var setData:ConfigFn = function<T>(value1:T,value2:string){
    return value1 +value2
}

setData<string>('11','222')

//第二种定义泛型接口方法
interface ConfigFn2<T>{
    (value:T):T
}

var myGetData:ConfigFn2<string> = function<T>(value:T):T{
    return value
}

//github 搜索方法 in:name xxxx stars>1000 in:readme xxxx in:description xxxx language:java pushed>2019-09-3

//6.4 把类当作参数的泛型类
/**
 * 定一个user类这个类的作用就是映射数据库字段
 * 然后定义一个 MysqlDb的类这个类用于操作数据库
 * 然后把user类作为参数传入到MysqlDb中
 */

 class User{
     username:string |undefined
     password:string | undefined
 }

 class MysqlDb<T>{

     add(info:T):boolean{
         console.log(info)
        return true
     }
 }

 var u = new User();
 u.username = '张三'
 u.password = '1233213'

 var Db = new MysqlDb<User>()

 Db.add(u)

/**
 * 功能：定义一个操作数据的库 支持Mysql Mssql MongoDb
 * 要求它们的功能都一样，都有add update delete get方法
 * 注意约束规范，以及代码重用 
 *
 */

 interface DBI<T>{
     add(info:T):boolean;
     update(info:T,id:number):boolean;
     delete(id:number):boolean;
     get(id:number):any[];
 }

 class  MysqlDbI<T> implements DBI<T>{
     add(info: T): boolean {
         throw new Error("Method not implemented.");
     }     
     update(info: T, id: number): boolean {
         throw new Error("Method not implemented.");
     }
     delete(id: number): boolean {
         throw new Error("Method not implemented.");
     }
     get(id: number): any[] {
         throw new Error("Method not implemented.");
     }
 }

 class User1{
     username:string|undefined
     password:string|undefined
 }


 //ts的模块
 /**
  * 内部模块叫命名空间
  * 外部模块叫模块
  */

  //命名空间
  namespace ab{
    export function aa(){
        console.log('111')
    }
  }

  const aa = ab.aa


  //装饰器
  

  //普通装饰器
  function logClass(params:any){
    //params 就是当前类
    console.log(params)
  }

  //装饰器工厂
  function factory(){
      return logClass
  }

  @factory()
  class HttpClient{



  }

  //类装饰器
  namespace HttpClient{
      function logClass(target:any){

        return class extends target{

        }
      }

      @logClass
      class HttpClient{

      }

  }
 