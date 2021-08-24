type ProductType = {
    name: string;
    price: number;
    quantity: number;
}
const PRODUCTS: ProductType[] = [
    {name: "simple product", price: 1299, quantity: 99},
    {name: "medium product", price: 1499, quantity: 77},
    {name: "fancy product", price: 1999, quantity: 88},
    {name: "you cannot afford product", price: 1299000000, quantity: 9},
];

export {PRODUCTS};
export type {ProductType};
