type Status = 'ok' | 'loading' | 'error';

const staticX: Status = 'loading';

const arr: (number | string)[] = []

function printId(id: number | string): void {
    if (typeof id === 'string')
        console.log(id.toUpperCase())
    else
        console.log(id)
}

function welcome(person: [string, string] | string): number | string {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '))
        return 1
    } else {
        console.log('Hello', person);
        return person;
    }
}

/// task

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skills: string[],
    level: Level,
}

function gradeDeveloper(user: { level: Level }, /* newLevel: Level */) {
    // user.level = newLevel;
    if (user.level === 'junior') {
        user.level = "middle"
    } else if (user.level === 'middle') {
        user.level = 'senior'
    }
}

const dev1: Developer = {
    level: 'junior',
    login: 'michey',
    skills: ['HTML', 'CSS', 'JS'],
}

gradeDeveloper(dev1)