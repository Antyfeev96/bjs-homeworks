"use strict";
function getResult(a,b,c){
    let d = b * b - 4 * a * c;
    let x = [];
    if (d == 0) {
        x = [-b / (2 * a)];
    } else if (d > 0) {
        x = [(-b + Math.sqrt(d)) / (2 * a),(-b - Math.sqrt(d)) / (2 * a)];
    }
    return(x);
}

function getAverageMark(marks){
    let averageMark;
    if (marks.length == 0) {
        return(marks.length);
    } else {
        marks.splice(5);
        let numberSumMarks = 0;
        let sumMarks = 0;
        for (let i = 0; i <= marks.length; i++) {
            numberSumMarks = Number(sumMarks);
            sumMarks += marks[i];
        }
        averageMark = numberSumMarks/marks.length;
    }
    return(averageMark);
}

function askDrink(name,dateOfBirthday){
    let numberDateOfbirthday = 0;
    let userAge = 0;
    numberDateOfbirthday = new Date(dateOfBirthday).getFullYear();
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    console.log(numberDateOfbirthday);
    userAge = currentYear - numberDateOfbirthday;
    console.log(userAge);
    if (userAge < 18){
        return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    } else {
        return(`Не желаете ли олд-фэшн, ${name}?`)
    }
}