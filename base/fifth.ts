const numbers = [1, 2, 3, 4];

interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown;
}

const strs: string[] = [];
const strs2: Array<string> = [];
strs.push('asv')

const cars: Car[] = [];
cars.push({brand: 'Audi', wheels: 3, type: ''});

const arrOfArr: string[][] = [];
arrOfArr.push(['', ''])

function printArr(arr: unknown[]): void {
    arr.forEach((el, index) => {
        console.log(el, index);
    })
}