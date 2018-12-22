var a;
var b;
var c;
var d;
var e;
var f;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Yellow"] = 1] = "Yellow";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
a = 1;
b = '2';
c = false;
d = [1, 2, 3];
e = [3, 'fase', 3, false];
f = color.Red;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
var sd = function (message) { return console.log('this is from labda'); };
sd('asd');
var drawPoint = function (point) { console.log(point.z + ' is ' + point.x + point.y); };
drawPoint({ x: 2, y: 3, z: 'asd' });
var Test = /** @class */ (function () {
    function Test(x, y) {
        this.x = x;
        this.y = y;
    }
    Test.prototype.draw = function () {
        console.log('this is test' + this.x + this.y);
    };
    return Test;
}());
var t = new Test(5, 3);
t.draw();
//# sourceMappingURL=main.js.map