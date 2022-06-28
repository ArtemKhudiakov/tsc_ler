function sum(a: number, b: number) {
    return a + b;
}

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
    return a + b;
}

sum(2, 4)