"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.User = void 0;
var mysql_1 = __importDefault(require("../modules/mysql"));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var userModel = new mysql_1.default();
exports.userModel = userModel;
