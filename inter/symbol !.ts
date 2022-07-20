let word: string | null = null;
const num = 10

if (num > 5) {
    word = 'abc'
}

console.log(word!.toLowerCase())

export function printName(name?: string) {
    const fullName: string = name!;
}