"use strict";
// // 典型TS写法
// // 传入参数为string 类型，返回string，缺点是只能返回string
// function getData1(value: string):string{
//     return value;
// }
// // 想返回number类型只能再写一个方法，但造成代码冗余，
// function getData2(value: number):number{
//     return value;
// }
// // 使用any，可返回任何类型，但是放弃了类型检查，等于不用TS
// function getData3(value: any):any{
//     return value;
// }
// /**所以有了泛型，要求：传入参数和返参数必须一致 ，T/A表示泛型，一般用 T*/
// function getData<T>(value:T):T{
//     return value;
// }
// // 若想返回特定类型
// function getData4<T>(value:T):any{
//     return '这是一定会返回的'
// }
// getData<string>('123');
// getData<number>(123)
/**普通的类 */
// class MinClass{
//     public list:number[] = [];
//     add(num:number){
//         this.list.push(num)
//     }
//     min():number{
//         var minNum = this.list[0];
//         for(var i = 0; i < this.list.length; i++){
//             if(minNum > this.list[i]){
//                 minNum = this.list[i]
//             }
//         }
//         return minNum;
//     }
// }
// var  m = new MinClass();
// m.add(3);
// m.add(4);
// m.add(55);
// m.add(63);
// m.add(1);
// alert(m.min())
/**泛型中的类 */
// class Min<T>{
//     public list:T[] = [];
//     add(value:T):void{
//         this.list.push(value);
//     }
//     minNum():T{
//         var minNum = this.list[0];
//         for(var i = 0; i < this.list.length; i++){
//             if(minNum > this.list[i]){
//                 minNum = this.list[i]
//             }
//         }
//         return minNum;
//     }
// }
// var m1 = new Min<number>();
// m1.add(2);
// m1.add(5);
// m1.add(7);
// alert(m1.minNum())
// var m2 = new Min<string>();
// m2.add('a')
// m2.add('b')
// m2.add('f')
// alert(m2.minNum())
// 函数类型接口
// interface Config{
//     (value1: string, value2:string): string
// }
// var setData: Config = function(value1: string,value2: string):string{
//     return value1 + value2
// }
// alert(setData('2','4'));
// 泛型接口
// 写法1
// interface ConfigFn{
//     <T>(value1: T):T
// }
// var setData1:ConfigFn = function<T>(value1: T):T{
//     return value1 
// }
// alert(setData1<string>("nihao"))
// // 写法2
// interface ConfigFn2<T>{
//     (value:T):T;
// }
// function setData2<T>(value: T): T{
//     return value;
// }
// var mySetData:ConfigFn2<string> = setData2;
// alert(mySetData('3'));
// var mySetData1:ConfigFn2<number> = setData2;
// alert(mySetData1(8));
// 把类作为参数来约束传入的数据
// class User{
//     name: string | undefined;
//     password: string | undefined
// }
// class mySql{
//     add(value: User):boolean{
//         console.log(value)
//          return true;
//     }
// }
// var u = new User();
// u.name = '张三';
// u.password = '123456'
// var m = new mySql();
// m.add(u);
/**用泛型类进行数据传入约束 */
// class mySqlDb<T>{
//     add(info: T):boolean{
//         console.log(info)
//         return true
//     }
// }
// class userInfo{
//     user:string | undefined;
//     password: string | undefined;
// }
// var m = new mySqlDb<userInfo>();
// var u = new userInfo();
// u.user = '张三';
// u.password = '123456';
// m.add(u)
// class artTitle{
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
//     constructor(params:{
//         title: string | undefined,
//         desc: string | undefined,
//         status?: number | undefined
//     }){
//         this.title = params.title,
//         this.desc = params.desc;
//         this.status = params.status
//     }
// }
// var m1 = new mySqlDb<artTitle>();
// var u1 = new artTitle(
//     {title:'水浒', desc: '打劫', status: 2}
// );
// m1.add(u1)
