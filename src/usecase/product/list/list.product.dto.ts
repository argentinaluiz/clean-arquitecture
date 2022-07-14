export interface InputListProductDto {}

type Product = {
    id: string;
    name: string;
    description: string;
    amount: number;
    price: number;
};

export interface OutputListProductDto {
    products: Product[];
}