
/*

//es5里的类

function Person(name){
    this.name = name;
     this.run = function(){
         alert(this.name)
     }
}

var p = new Person('张三');
p.run();

*/


//TS里的类

    // class Person{
    //     name: string;  //属性 

    //     constructor(n: string){  //构造函数    实例化类的时候触发的方法
    //         this.name = n;
    //     }

    //     run():void{
    //         alert(this.name + 'TS的类')
    //     }
    // }

    // var p = new Person('张三');
    // p.run();

    // TS里的类2

    // class Person{
    //     name: string;

    //     constructor(name: string){
    //         this.name = name
    //     }

    //     getName(): string{
    //         return this.name;
    //     }
    //     setName(name: string):void{
    //         this.name = name;
    //     }
    // }

    // var p = new Person('张三');
    // // alert(p.getName());

    // p.setName('李四');
    // alert(p.getName());

    /*继承 extends  super*/

    // class Person{
    //     name: string;

    //     constructor(name: string){
    //         this.name = name;
    //     }

    //     run(): string{
    //         return `${this.name}在运动！`
    //     }
    // }
    
    // class Web extends Person{
    //     constructor(name:string){

    //         super(name);
    //     }
    //     run(): string{
    //         return `${this.name}在子类`
    //     }
    // }

    // var w = new Web('李四');
    // alert(w.run());  //子类有就执行子类，没有再去继承的父类找


    /**修饰符
     * 
     * public: 公有的，在类，子类，类外部都可访问使用
     * protected： 保护类，在类，子类里边可以访问，在类外部不可访问使用
     * private： 私有的，在类里面可以访问，在子类，类外部不可访问
     * 
     * 属性没加修饰符，默认为公有的
     */
    //  class Person{
    //     public name: string; //公有的
 
    //     constructor(name: string){
    //         this.name = name;
    //     }

    //     run(): string{
    //         return `${this.name}在运动！`
    //     }
    // }
    // var p = new Person("hahah");
    // alert(p.name)  //可行

    /**保护类型 */
    //  class Person{
    //     protected name: string;   //保护类型

    //     constructor(name: string){
    //         this.name = name;
    //     }

    //     run(){
    //         alert(`${this.name}在运动！`)
    //     }
    // }

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name)
    //     }

    //     work(){
    //         alert(`${this.name}在工作`)
    //     }
    // }

    // var w = new Web('李四');

    //  w.run();
    //  w.work()

    //  var p = new Person('hahahhah');
    //  alert(p.name)   //外部无法访问保护类型的属性


    /**私有类型 */

    // class Person{
    //     private name: string;   //私有类型

    //     constructor(name: string){
    //         this.name = name;
    //     }

    //     run(){
    //         alert(`${this.name}在运动！`)  //可访问name
    //     }
    // }

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name)
    //     }

    //     work(){
    //         alert(`${this.name}在工作`)  //子类无法访问私有类型
    //     }
    // }

    // var p = new Person("hahah");
    // p.run();    //name属性为私有，只能在Person类访问





    /**ES5静态属性   静态方法*/

    // function Person(){  //构造方法

    //     this.run1 = function(){   //实例方法 

    //     }
    // } 



    // Person.run2 = function(){   //静态方法

    // }

    // /**调用实例方法run1   需实例化方法 */
    // var p = new Person();
    // p.run1();

    // /**调用静态方法run2  直接调用 */
    // Person.run2();


    /**TS静态属性   静态方法*/

    // class Person {
    //     public name:string;

    //     static age:number = 20;

    //     constructor(name: string) {
    //         this.name = name;
    //     }
    //     run():void{   //实例方法
    //         alert(`${this.name}在运动`);
    //     }
    //     work(name:string):void{
    //         alert(`${this.name}${name}在工作`);
    //     }

    //     static print(){   //静态方法，加关键字  static,不可直接调用属性，要声明静态属性
    //         alert('这是print静态方法')
    //     }
    // }

    // var p = new Person("lisi");
    // p.run();
    // p.work('wangwu');
    // Person.print();
    // alert(Person.age)  //调用静态属性



    /**多态：父类定义一个方法不去实现，让继承他的子类去实现每一个子类有不同的实现
     * 属于继承的一种表现
     */

    //  class  Animal {
    //      name: string;
    //      constructor(name: string) {
    //          this.name = name;
    //      }

    //      eat(){
    //          console.log('动物类有个吃的方法，吃什么看继承他的是什么')  //相当于重新eat方法
    //      }
    //  }

    //  class dog extends Animal{

    //      constructor(name: string) {
    //          super(name)
    //      }
    //      eat(){
    //          alert(`${this.name}吃骨头`)
    //      }
    //  }

    //  class cat extends Animal{

    //     constructor(name: string) {
    //         super(name)
    //     }
    //     eat(){
    //         alert(`${this.name}吃鱼`)
    //     }
    // }


    /**抽象类 定义标准，让继承他的子类都必须实现抽象方法 */

    // abstract class Animal {
    //     name: string;
    //     constructor(name: string) {
    //         this.name = name;
    //     }
    //     abstract eat(): any  //标注为抽象方法，不能在父类具体实现{}；
    //     run(){     //其他方法在子类可以不实现

    //     }
    // }

    // class Dog extends Animal{
    //     constructor(name: any) {
    //         super(name);
    //     }
    //     eat(){
    //         console.log(`${this.name}吃饭`)
    //     }
    // }

    // var d = new Dog('小黑狗')
    // d.eat(); 