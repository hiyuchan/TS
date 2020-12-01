"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var articel_1 = require("./articel");
var u = new User_1.User();
u.username = '张三';
u.password = '123456';
User_1.userModel.add(u);
var datas = {
    title: '水浒',
    desc: '起义',
    status: 1
};
var a = new articel_1.Articel(datas);
articel_1.artModel.add(a);
