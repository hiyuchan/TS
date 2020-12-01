"use strict";
//直接使用export 导出方法
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.save = exports.getdata = exports.baseUrl = void 0;
exports.baseUrl = 'xxxxx';
function getdata() {
    console.log('直接用export导出');
    var list = [
        { title: 'aaaa', desc: 'wqreqw' },
        { title: 'aaaa', desc: 'wqreqw' },
    ];
    return list;
}
exports.getdata = getdata;
function save() {
    console.log('统一导出多个模块');
}
exports.save = save;
function update() {
    console.log('统一导出多个模块');
}
exports.update = update;
// 只暴露一个方法，可用默认导出
function setData() {
    console.log('这是默认导出方法');
}
exports.default = setData;
