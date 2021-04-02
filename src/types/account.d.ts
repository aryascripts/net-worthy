interface Account implements Base {
    id: string;
    name: string;
    link: string;
    linkText: string;
    currency: string;
    country: string;

    archived: boolean;
}