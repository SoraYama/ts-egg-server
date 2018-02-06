"use strict";
exports.__esModule = true;
var express = require("express");
var map_data_1 = require("./map-data");
var app = express();
var isInRange = function (num, a, b) { return num <= Math.max(a, b) && num >= Math.min(a, b); };
app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (!req.query.ACCESS_KEY || req.query.ACCESS_KEY !== '114514') {
        res.send('YOU ARE NOT 810 SENBAI!');
    }
    else {
        next();
    }
});
app.use('/getbardata', function (req, res, next) {
    var dataArr = new Array(7).fill('').map(function () { return new Array(4).fill('').map(function () { return (Math.random() * 20 + 1).toFixed(0); }); });
    res.send(JSON.stringify(dataArr));
});
app.use('/getmapdata', function (req, res, next) {
    map_data_1["default"].forEach(function (item) {
        item.risk = Math.round(Math.random() * 100);
        Reflect.deleteProperty(item, 'geo');
    });
    res.send(JSON.stringify(map_data_1["default"]));
});
var department = ['供电', '车辆', '机务', '车务', '工务', '电务', '综合'];
app.use('/getlinedata', function (req, res, next) {
    var data = department.map(function (item) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(function (i) {
            return {
                department: item,
                value: (new Date().getSeconds() % 24 + i) % 24 + (Math.random() - 0.5) * 8,
                time: (new Date().getSeconds() % 24 + i) % 24
            };
        });
    });
    res.send(JSON.stringify(data));
});
app.use('/getpiedata', function (req, res, next) {
    var data = department.slice(0, -1).map(function (dep) {
        return new Array(3).fill('').map(function (i, index) {
            return {
                rank: index + 1,
                name: dep,
                data: new Array(4).fill('').map(function () { return Math.ceil(Math.random() * 10); })
            };
        });
    });
    res.send(JSON.stringify(data));
});
app.use('/getnews', function (req, res) {
    var data = new Array(10).fill('').map(function (item, index) {
        return {
            _id: new Date().getTime().toString() + index,
            time: new Date().getTime(),
            risk: Math.round(Math.random() * 100),
            department: '车间',
            description: 'test alabalabalala'
        };
    });
    res.send(JSON.stringify(data));
});
console.log('server is listening on 8021');
app.listen(8021);
