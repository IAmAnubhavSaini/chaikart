function Cart(props: any) {
    const {item} = props;
    return (<>
        {
            item.name !== '' &&
            <div className={'cart-item'}>

                <div className="product grid">
                    <div className="product-name">{props.item.name}</div>
                    <div>{props.item.price}</div>
                </div>
                <div>{props.item.quantity}</div>
                <div>
                    <button onClick={() => props.onIncreaseQuantity(props.item)}>+1</button>
                    <button onClick={() => props.onDecreaseQuantity(props.item)}>-1</button>
                    <button onClick={() => props.onRemoveFromCart(props.item)}>delete</button>
                </div>

            </div>
        }
    </>);
}

function CartList(props: any) {
    return <div className={'active-cart'}>
        <h2>cart</h2>
        <div>
            {props.activeCart.products.map((product: any, index: number) => {
                return <Cart key={`cart-item-${index}`} item={product} {...props.productActions}/>;
            })}
        </div>
        <div>
            <span>Total: {props.activeCart.total}</span>
            <span>Count: {props.activeCart.count}</span>
        </div>
        <div>
            <button onClick={() => props.cartActions.onSuspendCart(props.activeCart)}>suspend</button>
            <button onClick={props.cartActions.onClearActiveCart}>clear</button>
        </div>
    </div>;
}

export {CartList};
