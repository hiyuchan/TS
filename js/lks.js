"use strict";
function lacesarSignal() {
    var Pizza = /** @class */ (function () {
        function Pizza(yours) {
            this.yours = yours;
            this.sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(callbackfn, function (n) {
                return Math.pow(x, 2, n);
            })
                .sort(compareFn, function (a, b) { return a > b ? -1 : (a < b) ? 1 : 0; });
            this.ciper = [];
        }
        Pizza.prototype.getCipher = function () {
            var _this = this;
            this.sequence.reduce(function (total, piece) {
                if (total + peice > _this.yours)
                    return total;
                _this.cipher.push(peice);
                return total += piece;
            }, 0);
            this.cipher.sort(function (a, b) { return a > b ? 1 : (a < b) ? -1 : 0; });
            return this;
        };
        Pizza.prototype.decrypt = function (dictionary) {
            var _this = this;
            return this.getCipher.map(function (atom, idx) { return dictionary[atom + _this.keys[idx]]; }).join("");
        };
        Pizza.prototype.getKeys = function () {
            this.keys = [5, 1, 1, -92, -490];
            return this;
        };
        return Pizza;
    }());
    var dictionary = ["自", "由", "自", "在", "功", "不", "可", "没", "卓", "有",
        "成", "效", "大", "吉", "大", "利", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return new Pizza(yours, 666).getKeys().getCipher(dictionary);
}
console.log(lacesarSignal())
