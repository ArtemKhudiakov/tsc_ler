function printPoint(point: { x: string, y: string }): void {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`)
}

const obj1 = {
    x: '1',
    y: '2',
}
printPoint(obj1)

const obj2 = {
    x: '1',
    y: '2',
    z: 4,
}
printPoint(obj2)

function printName(user: {
    firstName: string,
    lastName?: string,
}): void {
    console.log('Hello', user.firstName.toUpperCase());

    if (user.lastName) {
        console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
    }
}

printName({firstName: 'Mikhail'})
printName({firstName: 'Mikhail', lastName: 'Nep'})

//task
interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

const user1: User = {
    login: 'michey',
    email: 'some@email.com',
    isOnline: false,
    password: '12345',
    lastVisited: new Date(2022, 6, 2),
}

const admin1: Admin = {
    login: 'michey',
    email: 'some@email.com',
    isOnline: false,
    password: '12345',
    lastVisited: new Date(2022, 6, 2),
    role: 'SuperAdmin',
}

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

function login(user: { login: string, password: string }) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log('Hello', user.login)
    }
}

login(user1)
login(admin1)