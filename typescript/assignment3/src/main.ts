import "./style.css";
interface Student{
  StuId: number;
  StuName: string;
  getMarks:(Sciencemarks: number) => number;
}

class Stu implements Student{
  StuId: number;
  StuName: string;

  constructor(id: number, name:string){
    this.StuId = id;
    this.StuName = name;
  }
  getMarks(Sciencemarks: number) : number{
    return Sciencemarks;
  }
}

let student = new Stu(1, "tanzz");
console.log(student.getMarks(98));
