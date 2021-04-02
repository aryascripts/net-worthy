interface CalculationItem {
    id: string;
    accountId: string;
    amount: number;

    fxRate: number; // from account currency to default currency
    calculationNumber: number; // sequential 1 -> n
    calculationDate: string; // YYYY-MM-DD

    createdAt: number;
    updatedAt: number;
}