function parseCount(value) {
    let newValue = Number.parseFloat(value);
    if (Number.isNaN(newValue)) {
        throw new Error("Невалидное значение");
    }
    return newValue;
}


function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

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
    }

    get perimeter() {
        return this.a + this.b + this.c;

    }


    get area() {
        return +Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - this.a) * ((this.perimeter / 2) - this.b) * ((this.perimeter / 2) - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return Object.create({}, {
            perimeter: {
                get() {
                    return "Ошибка! Треугольник не существует";
                }
            },
            area: {
                get() {
                    return "Ошибка! Треугольник не существует";
                }
            }
        });

    }
}
