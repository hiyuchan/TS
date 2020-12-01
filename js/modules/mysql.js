"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySql.prototype.delete = function (id) {
        return true;
    };
    MySql.prototype.getData = function (id) {
        var list = [
            { title: 'q', desc: 'w' },
            { title: 'qq', desc: 'ww' },
        ];
        return list;
    };
    MySql.prototype.update = function (info, id) {
        return true;
    };
    return MySql;
}());
exports.default = MySql;
