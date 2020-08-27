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

function memorize(func, limit) {
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

  return function (...args) {
    const detectedItem = arr.find(item => compareArrays(args, item.args));

    if (detectedItem) {
      return detectedItem.result;
    }

      let obj = {
        args,
        result: func(...args)
      };

      arr.push(obj);

      if (arr.length > limit) {
        arr.shift();
      }

      return obj.result;
  }

}

const newFunc = memorize;
newFunc((a,b) => a + b, 5);

