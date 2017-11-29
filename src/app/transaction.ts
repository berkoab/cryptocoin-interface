enum Direction {
}

export class Transaction {
    address: string;
    fromAddresses: Array<String>;
    toAddresses: Array<String>;
    transactionAmount: number;
    historicalTransactAmount: number;
    time: number;
    date: string;
    direction: Direction;
}