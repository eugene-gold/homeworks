//1
function parseCount (item) {
    let result = Number.parseInt(item)
    if (isNaN(result)) {
        throw new Error("Невалидное значение")
    }
    return result
}

function validateCount (data) {
   try {
       if (parseCount(data)) {
           return parseCount(data)
       }
   } catch (error) {
       return error
   }
}

//2
class Triangle {
    constructor(a, b, c) {
        if ((a+b) < c || (b+c) < a || (a+c) < b){
            throw new Error("Треугольник с такими сторонами не существует")
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter () {
            return this.a + this.b + this.c
    }
    getArea() {
            const p = this.getPerimeter() / 2
            const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
            return Math.round(S * 1000)/1000
    }
}

function getTriangle (a,b,c) {
    try {
       return new Triangle(a,b,c)
    } catch (error) {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует'
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}

// const triangle = new Triangle(1,300,100)
// console.log(triangle)
// console.log(triangle.getPerimeter())
// console.log(triangle.getArea())
// console.log(getTriangle(1,3, 100))