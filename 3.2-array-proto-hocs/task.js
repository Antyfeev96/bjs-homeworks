// Задание № 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum() {
    sleep(100);
    const args = Array.from(arguments);
    let sum = 0;
    for (item in args) {
        sum += item;
    }
    return sum;
  }

function compareArrays(arr1, arr2) {
    for (element in arr1, arr2) {
        if (arr1[element] === arr2[element] || (arr1.length === 0 && arr2.length === 0)) {
            return true;
        } else {
            return false;
        }
    }
}