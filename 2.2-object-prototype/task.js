//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
    const checkedString = this;
    let stringLen = checkedString.length;
    let finalStr = checkedString.toLowerCase();
    let result;
    for (let i = 0; i < stringLen / 2; i++) {
        if (finalStr.charAt(i) === finalStr.charAt(stringLen - i - 1)) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
    
}


function getAverageMark(marks) {
    let average = 0;
    if (marks.length === 0) {
        return 0;
    } else {
    for (i in marks) {
      average += marks[i];
    }
    let roundedAverage = average/marks.length;
    return Math.round(roundedAverage);
}
}

function checkBirthday(birthday) {
    let now = new Date();
    let nowSeconds = now.getTime()
    let user = new Date(birthday);
    let userSeconds = user.getTime();
    const diff = nowSeconds - userSeconds;
    let averageFourYearSeconds = (31536000000 * 3 + 31622400000) / 4;
    const age = diff / averageFourYearSeconds;
    let result;
    if (age >= 18) {
        result = true; 
    } else {
        result = false;
    }
    return result;
}