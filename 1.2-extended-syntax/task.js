"use strict";
function getResult(a,b,c){
    let d = b * b - 4 * a * c;
    let x;
    if (d < 0) {
      x = [];
    } else if (d == 0) {
        x = [-b / (2 * a)];
    } else if (d > 0) {
        x = [-b + Math.sqrt(d) / (2 * a),-b - Math.sqrt(d) / (2 * a)];
    }
    return(x);
}

function getAverageMark(marks){
    let averageMark;
    if (marks.length == 0) {
        averageMark = 0;
        console.log(averageMark);
    } else if (marks.length >= 5) {
        console.log('Количество оценок больше пяти');
        marks.splice(5);
        let sumMarks = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
        averageMark = sumMarks/marks.length;
    }
    return(averageMark);
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь;
    // return result;
}