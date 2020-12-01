"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db"); //非默认导出，单个需要加{}
var db_2 = require("./db");
var db_3 = __importDefault(require("./db"));
db_1.getdata();
db_2.save();
db_2.update();
db_3.default();
