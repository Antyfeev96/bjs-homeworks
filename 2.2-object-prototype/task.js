//String.prototype.isPalindrome - для задачи №1

String.prototype = isPalindrome;

 function isPalindrome(checkedString) {
    let stringLen = checkedString.length;
    let finalStr = checkedString.toLowerCase();
    for (let i = 0; i < stringLen / 2; i++) {
        if (finalStr.charAt(i) === finalStr.charAt(stringLen - i - 1)) {
            return true;
        } else {
            return false;
        }

    }
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}