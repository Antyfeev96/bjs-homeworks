// Задание № 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += arg;
  }, 0);
}

const compareArrays = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);

function memorize(func) {
  let arr = [
    {
      args: [3, 4],
      result: 7
    },
    {
      args: [1, 3],
      result: 4
    }
  ];

  function myFunc (array) {
    const aResult = arr.find(item => {
      if (compareArrays(array, item.args)) {
        aResult = item.result;
      }
      return aResult;
    })
  }
  return myFunc;
  // let myResult = arr.find(item => {
    // if ((item.args[0] === a) && (item.args[1] === b)) {
      // return item.result;
    // }
  // })
  // return myResult.result;
}

const newFunc = memorize;
newFunc((a,b) => a + b);


