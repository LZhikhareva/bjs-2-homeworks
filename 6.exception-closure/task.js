function parseCount(value) {
    value = Number.parseInt(value);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    } else
        return Number.parseFloat(value);
}


function validateCount(value) {
    try {
        (parseCount(value));
    } catch (error) {
        return error;

    } return Number.parseFloat(value);
}
console.log(validateCount('55frd'));




// Задание 2
class Triangle {
    constructor(a, b, c) {
        this.validate(a, b, c);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    validate(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        return "Треугольник с такими сторонами не существует";
    }

    set perimeter(_perimeter) {
        this._perimeter = this.a + this.b + this.c;
    }
    get perimeter() {
        return this._perimeter;

    }

    set area(value) {
        this._area = +Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - this.a) * ((this.perimeter / 2) - this.b) * ((this.perimeter / 2) - this.c)).toFixed(3);
    }

    get area() {
        return this._area;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return console.log("Ошибка");
    }
}
