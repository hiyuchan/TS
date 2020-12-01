"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artModel = exports.Articel = void 0;
var mysql_1 = __importDefault(require("../modules/mysql"));
var Articel = /** @class */ (function () {
    function Articel(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return Articel;
}());
exports.Articel = Articel;
var artModel = new mysql_1.default();
exports.artModel = artModel;
