function getSolutions(a, b, c) {
    const D = b * b - 4 * a * c;
    let showResult = {
        D,
        roots: []
    };
    if (D < 0) {
        return showResult;
    } else if (D == 0) {
        const x1 = -b/2 * a;
        showResult.roots.push(x1);
        return showResult;
    } else {
        const x1 = (-b + Math.sqrt(D))/2 * a;
        const x2 = (-b - Math.sqrt(D))/2 * a;
        showResult.roots.unshift(x1, x2);
        return showResult; 
    }
}


function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    let x = 'x';
    let numberX = Number(x);
    const numX1 = Number(result.roots[0]);
    const numX2 = Number(result.roots[1]);
    console.log('Вычисляем корни квадратного уравнения ' + a + 'x +' + ' ' + b + 'x^2 +' + ' ' + c);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
       return('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        return(`Уравнение имеет один корень X1 = ${numX1}`);
    } else {
        return(`Уравнение имеет два корня. X1 =  ${numX1}, X2 = ${numX2}`);
    }
}


let data = {
    algebra: [2,4,5,2,3,4],
    chemistry: [2],
    english: [4,4,3],
    french: [4,4],
    geometry: [2,4,5],
    music: [2,2,6],
    physics: [5,5],
    poetry: [5,3,4],
    russian: [3,3,4,5],
 }

  function getAverageScore(data) {
    function getAverageMark(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        return sum/marks.length;
    }
    
    let sumAverage = {
      average: []
    }
    for (let k = 0; k < data.length; k++) {
        sumAverage.average += data[k];
    }
    data.average = sumAverage.average;
    console.log(sumAverage.average);

    let result = {

    }
    if (data = 0) {
       data.average = 0; 
       return data.average; 
    } else {
    for (const subject in data) {
        result[subject] = getAverageMark(subject);
    }
    return result;
} 
}