function parseCount(parsedNumber)  {
  if (isNaN(parsedNumber) === true) {
      throw new Error("Невалидное значение");
  } else {
    parsed = Number.parseInt(parsedNumber, 10);
    return parsed;
  }
}

function validateCount(parsedCount) {
    try {
      return parseCount(parsedCount);
    } catch {
      return new Error("Невалидное значение");
    }
}

// Задание № 2


class Triangle {
  constructor(a, b ,c) {
    if (a + b < c || a + c < b || b + c < a) {
       throw new Error("Треугольник с такими сторонами не существует");
    } else {
    this.a = a;
    this.b = b;
    this.c = c;
    this.sum = this.a + this.b + this.c;
    this.p = this.sum / 2;
    }
  }

  getPerimeter() {
    return this.sum;
  }

  getArea () {
    let area = Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c));
    return Number(area.toFixed(3));
  }

}

  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch {
        const myError = {};
        myError.getPerimeter = Triangle.getPerimeter();
        myError.getArea = Triangle.getArea();
        return myError;
    }
  }