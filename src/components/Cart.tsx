function Cart(props: any) {
    const {item} = props;
    return (<>
        {
            item.name !== '' &&
            <div className={'cart-item'}>
                <div className="product grid">

                    <div className="product-name">

                        {props.item.name}
                    </div>
                    <div>{props.item.price} <span className={'cart-item-quantity'}>x{props.item.quantity}</span></div>
                </div>

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
        <h2>Cart #{props.activeCart.id}</h2>
        <div className="cart-info-container drag-down drag-right">
            <div className={'cart-total'}>Total: <span className={'value'}>{props.activeCart.total}</span></div>
            <div className={'cart-quantity'}>Count: <span className={'value'}>{props.activeCart.count}</span></div>
        </div>
        <div>
            {props.activeCart.products.map((product: any, index: number) => {
                return <Cart key={`cart-item-${index}`} item={product} {...props.productActions}/>;
            })}
        </div>

        <div className="cart-action-container drag-down">
            <button onClick={() => props.cartActions.onSuspendCart(props.activeCart)}>suspend</button>
            <button onClick={props.cartActions.onClearActiveCart}>clear</button>
        </div>
    </div>;
}

export {CartList};
