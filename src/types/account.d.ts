interface Account {
    id: string;
    name: string;
    link: string;
    linkText: string;
    currency: string;

    archived: boolean;

    createdAt: number;
    updatedAt: number;    
}