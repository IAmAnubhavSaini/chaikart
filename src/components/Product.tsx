import {ProductType} from "../data/products";

type ProductListProps = {
    products: ProductType[];
    actions: any;
}

function ProductList(props: ProductListProps) {
    return (
        <div className="product-list">
            {
                props.products.map((product: ProductType, index: number) =>
                    <Product {...product}
                             key={`product-${index}`}
                             {...props.actions}
                    />)
            }
        </div>
    );
}

function Product(props: any) {
    return (
        <div className="product">
            <div className={"grid"}>
                <div className={"product-name"}>{props.name}</div>
                <div className={"product-price"}>{props.price}</div>
            </div>
            <div className={"product-buttons"}>
                <button onClick={() => props.onProductAdd({name: props.name, price: props.price})}>Add</button>
            </div>
        </div>
    );
}

export {
    ProductList
};
