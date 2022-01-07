"use strict";
exports.__esModule = true;
exports.nowLocalDate = void 0;
var nowLocalDate = function () {
    var date = new Date();
    date.setHours(Number(date.getHours()) - 3);
    return date;
};
exports.nowLocalDate = nowLocalDate;
