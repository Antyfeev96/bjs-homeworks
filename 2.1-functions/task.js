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
    let numberX = Number('x');
    console.log('Вычисляем корни квадратного уравнения ' + a + numberX * numberX + ' ' + b + numberX + ' ' + c);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
       return('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        return(`Уравнение имеет один корень X1 = ${result.x1}`);
    } else {
        return(`Уравнение имеет два корня. X1 =  ${result.x1}, X2 = ${result.x2}`);
    }
}

  function getAverageScore(data) {
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
    
    for (let i = 0; i < data.length; i++) {

    }
}

function getAverageMark(marks) { 
    for (let i = 0; i < data[i].length; i++) {
        data[1][i] += data[1][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[3][i] += data[3][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[4][i] += data[4][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[5][i] += data[5][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[6][i] += data[6][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[7][i] += data[7][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[8][i] += data[8][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[9][i] += data[9][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[10][i] += data[10][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data[i].length; i++) {
        data[2] += data[i]/data[i].length;
        console.log(data[i]);
    }
    return data;
}