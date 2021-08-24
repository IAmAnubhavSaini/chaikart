function SuspendedCartList(props: any) {
    return (
        <div className={'suspended-cart-list'}>
            <h2>suspended</h2>
            {
                props.carts.map((cart: any, i: number) => {
                    return <div key={`suspended-cart-${i}`}
                                className={'suspended-cart'}>
                        {cart.total}
                        <button onClick={() => props.actions.onMakeActive(cart)}>make active</button>
                    </div>;
                })
            }

        </div>
    );
}

export {SuspendedCartList};
