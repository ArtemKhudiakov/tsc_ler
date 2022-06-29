interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown;
}