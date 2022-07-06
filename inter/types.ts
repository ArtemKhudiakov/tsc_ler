type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // all variants
type Union4 = Union1 & Union2; // a | c

type Union5 = { a: string, b: string, c: number } & { a: string, t: boolean, z: null }

type User = {
    readonly email: string,
    readonly login: string,
    password: string,
}
type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

type Employee = {
    contractStart: Date,
} & User & Person

// const user1: Employee = {}

type Developer = {
    skills: string[],
    phone: string,
    level?: 'junior' | 'middle' | 'senior',
    say(): void,
    code?: (arg: string) => void,
} & Employee

export {};


//tasks

interface Order {
    address: string;
}

interface TelephoneOrder extends Order {
    callerNumber: string;
}

interface InternetOrder extends Order {
    email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
    return !!order && "email" in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
    return !!order && "callerNumber" in order;
}

function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    } else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}

export {}
