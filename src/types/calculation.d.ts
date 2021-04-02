interface Calculation implements Base {
    worth: number;
    calculationDate: string;
    calculationNumber: string;
}

interface CalculationItem implements Base {
    id: string;
    accountId: string;

    amount: number;

    fxRate: number; // from account currency to default currency
    calculationNumber: number; // sequential 1 -> n
    calculationDate: number; // YYYY-MM-DD
}