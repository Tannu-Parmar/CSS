var Stu = /** @class */ (function () {
    function Stu(id, name) {
        this.StuId = id;
        this.StuName = name;
    }
    Stu.prototype.getMarks = function (Sciencemarks) {
        return Sciencemarks;
    };
    return Stu;
}());
var student = new Stu(1, "tanzz");
console.log(student.getMarks(98));
