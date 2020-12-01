"use strict";
/**  1、 属性接口，  对json的约束 */
/**ts中定义方法 */
// function printLable(): void{
//     console.log('printLable')
// }
// printLable();
/**ts中定义方法，传入参数 */
// function printLable(lable: string): void{
//     alert(lable)
// }
// printLable('jhhaha')
/**
 * ts传入参数，对json进行约束
 */
// function printLable(labelInfo: {label:string}):void{
//     alert(`传进了参数：${labelInfo.label}`)
// }
// /** 
//  * printLable('hahah') //参数格式不对
//    printLable({name:'niahi'}) //参数格式不对,必须有label
//  */
// printLable({label:'我是参数label的值'})
/**
 * 接口：行为和动作的规范；   对批量方法，批量传入的参数进行约束
 */
//  eg:方法Person必须传入firstName 和 lastName，且都是string类型
// interface fullName{
//     firstName: string;
//     lastName: string;
//     age?:number  //可选参数，可传可不传
// }
// function person(name:fullName):void{
//     alert(name.firstName+name.lastName+'---'+name.age);
// }
// person({firstName:'hiyu',lastName:'chen'}); //直接赋值只能按接口规则，不可多或少
// var obj = {
//     firstName: 'zhang',
//     lastName: 'san',
//     age: 23
// }
// person(obj);  //变量赋值，可多不可少，多的不可调用
/**
 * ajax接口
 */
// interface Config{
//     type: string;
//     url: string;
//     data?: string;
//     dataType: string;
// }
// function ajax(config: Config){
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type, config.url, true);
//     xhr.send(config.data);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//             console.log("成功");
//             if(config.dataType == 'json'){
//                 console.log(JSON.parse(xhr.responseText))
//             }else{
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }
// ajax({
//     type:'get',
//     url: 'http://a.itying.com/api/productlist',
//     data: 'nihao',
//     dataType: 'json'
// })
/**
 * 函数类型接口
 * 对传入的参数以及返回值进行约束
 */
//  interface encrypt{
//      (key:string , value: string): string
//  }
//  var md5:encrypt = function(key: string ,value: string):string{
//      return key + '-----' + value
//  }
//  alert(md5('name','value'))
/**类 类型接口 */
// interface Animal{
//     name: string;
//     eat(str: string):void ;
// }
// class Cat implements Animal{
//     name: string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         alert(`${this.name}啃骨头`)
//     }
// }
// var c = new Cat('小黑')
// c.eat();
// /**接口扩展，接口继承接口 */
// interface Animal{
//     eat():void;
// }
// interface Person extends Animal{
//     work():void;
// }
// class Program{
//     public name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     coding(code:string){
//         alert(this.name+code);
//     }
// }
// class Web extends Program implements Person{
//     constructor(name:string){
//         super(name)
//     }
//     eat():void{
//         alert(this.name +'就知道吃')
//     }
//     work():void{
//         alert(this.name + '要工作')
//     }
// }
// var w = new Web('李四');
// w.coding("ts代码")
// w.eat();
// w.work();
