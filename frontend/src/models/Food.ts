export interface Food {

    id?: number;

    name: string;

    description: string;

    price: number;

    status: string;

    category?: {
        id: number;
        name: string;
    };
}