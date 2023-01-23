export interface Iform{
    amount: number;
    installments: number;
    mdr: number
    days?: number | number[]
}

export interface Iprops {
    finalValue: number[];
    newKey:  string[];
    newDay: number[];
}