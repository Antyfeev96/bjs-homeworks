// Задание № 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function memorize(a) {
  let arr = [
    {
      args: [3, 4],
      result: 7
    },
    {
      args: [1, 3],
      result: 4
    }
  ]
  const myFunc = () => {
    return a = a ** 2;
  };
  return myFunc();
}

let newFunc;
newFunc = memorize;
newFunc(1, 2, 3, 4);

//Дальше задание не сделать, потому что у меня не работает compareArrays