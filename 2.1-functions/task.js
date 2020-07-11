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
    algebra: [],
     average: [],
     chemistry: [],
     english: [],
     french: [],
     geometry: [],
     music: [],
     physics: [],
     poetry: [],
     russian: [],
 }


  function getAverageScore(data) {
    for (let i in data) {
        let item = getAverageMark(data[i]);
    }
}

function getAverageMark(marks) { 
    for (let i = 0; i < marks[i].length; i++) {
        data[i] += data[i]/data[i].length;
        marks += data[i];
        console.log(data[i]);
    }
    return data;
}