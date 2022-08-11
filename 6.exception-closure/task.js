function parseCount(string) {
  if (isNaN(string) === true) {
    throw new Error("Невалидное значение");
  } else {
    const numberOfPurchases = Number.parseInt(string);

    return numberOfPurchases;
  }
}

function validateCount(string) {
  try {
    const numberOfPurchases2 = parseCount(string);
    if (isNaN(numberOfPurchases2) !== true) {
      return numberOfPurchases2;
    } else {
      throw new Error("Невалидное значение");
    }
  } catch (err) {
    return err;
  }
}

class Triangle {
  constructor(AB, BC, CA) {
    this.AB = AB;
    this.BC = BC;
    this.CA = CA;
  }

  examination() {
    if (
      this.AB + this.BC < this.CA ||
      this.BC + this.CA < this.AB ||
      this.AB + this.CA < this.BC
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    const perimeter = this.AB + this.BC + this.CA;
    return perimeter;
  }

  getArea() {
    const semiPerimeter = perimeter / 2;
    const square = Math.sqrt.toFixed(3)(
      semiPerimeter *
        (semiPerimeter - this.AB) *
        (semiPerimeter - this.BC) *
        (semiPerimeter - this.CA)
    );
    return square;
  }
}

function getTriangle(AB, BC, CA) {
  try {
    return new Triangle(AB, BC, CA);
  } catch (err) {
    return;
    getArea: () => "Ошибка! Треугольник не существует";
    getPerimeter: () => "Ошибка! Треугольник не существует";
  }
}
