interface CalculationItem {
    accountId: string;
    amount: number;

    fxRate: number; // from account currency to default currency
    calculationDate: string; // YYYY-MM-DD

    createdAt: number;
    updatedAt: number;
}