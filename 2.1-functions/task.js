function getSolutions(a, b, c) {
    const D = b * b - 4 * a * c;
    let showResult = {
        D,
        roots: []
    };
    if (D < 0) {
        return(showResult);
    } else if (D == 0) {
        const x1 = -b/2 * a;
        showResult.roots.push(x1);
        return(showResult);
    } else {
        const x1 = (-b + Math.sqrt(D))/2 * a;
        const x2 = (-b - Math.sqrt(D))/2 * a;
        showResult.roots.unshift(x1, x2);
        return(showResult); 
    }
}

function showSolutionsMessage(a, b, c) {
    let result = {
        D: showResult.D,
        roots: showResult.roots
    };
    console.log(`Вычисляем корни квадратного уравнения ${a * x** + b * x + c}`);
    console.log(`Значение дискриминанта: ${D}`);
    if (result.D < 0) {
       return('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        return(`Уравнение имеет один корень X1 = ${x1}`);
    } else {
        return(`Уравнение имеет два корня. X1 =  ${x1}, X2 = ${x2}`);
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
    
    for (let i = 0; i < data[i].length; i++) {
        data[i] += data[i][i]/data[i].length;
        console.log(data[i]);
    }
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i] 
    }
}

function getAverageMark(marks) {

}