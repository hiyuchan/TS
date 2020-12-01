// function greeter(person) {
//     return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.innerHTML = greeter(user);

// 加类型注解，希望传入的参数是string类型

// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";


// document.body.innerHTML = greeter(user);

// 加类型注解，希望传入的参数是string类型，但是传入数组类型，会报错
/*greeter.ts:28:35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
28 document.body.innerHTML = greeter(user);*/

// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = [0, 1, 2];

// document.body.innerHTML = greeter(user);


// 接口：只要参数格式与接口要求一致就行
/*
interface Person {
    firstName: string;
    lastName: string;
}

function greeter2 (person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
} 

let user2 = {firstName: 'chen', lastName: 'hiyu'};

document.body.innerHTML = greeter2(user2);
*/

//class  类

// class Student {
//     fullNmae: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullNmae = firstName + " " + " " + lastName;
//     }
// }

// function run(): string{
//     return "123"
// }

// ...累加参数
    function sum(...result:number[]): number{
        var item = 0;
        for(var i = 0; i < result.length; i++){
            item += result[i]
        }
        return item;
    }
    alert(sum(1,2,3,4,4,5,6,10))