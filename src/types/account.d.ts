interface FinanceAccount {
  id: string;
  name: string;
  link: string;
  linkText: string;
  currency: string;
  country: string;

  archived: boolean;

  createdAt: number;
  updatedAt: number;
}
