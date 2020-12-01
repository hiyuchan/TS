// /**定义一个操作数据库，
//  * 实现add(),update(),delete(),getData()方法
//  * 统一约束规范：interface ， 实现代码复用：泛型
//  */

// interface DBI<T>{
//     add(info:T):boolean;
//     update(info:T, id:number):boolean;
//     delete(id: number):boolean;
//     getData(id:number):any;
// }

// class mySql<T> implements DBI<T>{
//     add(info:T):boolean{
//         console.log(info)
//         return true
//     }
//     update(info:T,id:number):boolean{
//         return true
//     }
//     delete(id:number):boolean{
//         return true
//     }
//     getData(id:number): any[]{

//         var list = [
//             {title: 'hahha', desc: 'aajfsjdfk'},
//             {title: 'hahha', desc: 'aajfsjdfk'},
//         ]
//         console.log(list)
//         return list
//     }
// }

// //操作用户表

// class User{
//     username: string | undefined;
//     password: string | undefined;
// }

// var u = new User();
// u.username = '张三';
// u.password = '123456';

// var m = new mySql<User>();
// m.add(u);

// m.getData(3)