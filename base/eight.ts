type Status = 'ok' | 'loading' | 'error';

const staticX: Status = 'loading';

const arr: (number | string)[] = []

function printId(id: number | string): void {
    if (typeof id === 'string')
        console.log(id.toUpperCase())
    else
        console.log(id)
}