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
 return () => func();
}

const newFunc = memorize(function (a) {
  a = a ** 2;
});
newFunc();


//Дальше задание не сделать, потому что у меня не работает compareArrays