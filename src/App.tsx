import React, {useState} from 'react';
import './App.css';
import {ProductList} from "./components/Product";
import {PRODUCTS, ProductType} from "./data/products";
import {CartList} from "./components/Cart";
import {SuspendedCartList} from "./components/SuspendedCart";

type CartType = {
    id: number;
    products: any[];
    total: number;
    count: number
}

const initialCart: CartType = {
    id: 1,
    products: [
        {name: '', quantity: 0, price: 0}
    ],
    total: 0,
    count: 0
};

function nextCart(prevCart: any, item: any, action: string): CartType {
    let {products, total, count} = prevCart;
    const productIndex = products.findIndex((p: any) => p.name === item.name);
    console.log({products, productIndex, item, action});
    if (action === 'add') {
        if (productIndex === -1) {
            const {quantity = 1, price, name} = item;
            products.push({quantity, price, name});
            total += item.price;
            count += 1;
            return {...prevCart, products, total, count};
        } else {
            return nextCart(prevCart, item, 'increase');
        }
    } else if (action === 'increase') {
        const product = products[productIndex];
        const {quantity, price, name} = product;
        products[productIndex] = {quantity: quantity + 1, price, name};
        count += 1;
        total += item.price;
        return {...prevCart, products, total, count};
    } else if (action === 'remove') {
        if (productIndex > -1) {
            const product = products[productIndex];
            products = [...products.slice(0, productIndex), ...products.slice(productIndex + 1)];
            console.log(products);
            count -= product.quantity;
            total -= (product.price * product.quantity);
            return {...prevCart, products, count, total};
        }
    } else if (action === 'decrease') {
        if (productIndex > -1) {
            const product = products[productIndex];
            if (product.quantity === 1) {
                return nextCart(prevCart, item, 'remove');
            }
            count -= 1;
            total -= product.price;
            products[productIndex] = {quantity: product.quantity - 1, ...item};
            return {...prevCart, products, count, total};
        }
    }
    return {...prevCart, products, count, total};
}

function App() {
    const [activeCart, setActiveCart] = useState(initialCart);
    const [showingCart, setShowingCart] = useState(false);
    const [suspendedCarts, setSuspendedCarts] = useState([]);

    function onProductAdd(p: ProductType) {
        console.log('onProductAdd');
        if (!showingCart) {
            setShowingCart(true);
        }
        const cart = nextCart(activeCart, p, 'add');
        setActiveCart(cart);
    }

    function onIncreaseQuantity(cartItem: any) {
        console.log('onIncreaseQuantity');
        console.log(cartItem);
        const cart = nextCart(activeCart, cartItem, 'increase');
        setActiveCart(cart);
        setShowingCart(true);
    }

    function onDecreaseQuantity(cartItem: any) {
        console.log('onDecreaseQuantity');
        const cart = nextCart(activeCart, cartItem, 'decrease');
        if (cart.count === 0) {
            setShowingCart(false);
        }
        setActiveCart(cart);
    }

    function onRemoveFromCart(cartItem: any) {
        console.log('onRemoveFromCart');
        const cart = nextCart(activeCart, cartItem, 'remove');
        if (cart.count === 0) {
            setShowingCart(false);
        }
        setActiveCart(cart);
    }

    function onClearActiveCart() {
        console.log('onClearActiveCart');
        setShowingCart(false);
        setActiveCart(initialCart);
    }

    function onSuspendCart(cart: any) {
        console.log('onSuspendCart');
        // @ts-ignore
        setSuspendedCarts([...suspendedCarts, cart]);
        setActiveCart(initialCart);
        setShowingCart(false);
    }

    function onMakeActive(cart: any) {
        console.log('onMakeActive');
        console.log(cart);
        // @ts-ignore
        const findIndex = suspendedCarts.findIndex(sc => sc.id === cart.id);
        setSuspendedCarts([...suspendedCarts.slice(0, findIndex), ...suspendedCarts.slice(findIndex + 1)]);
        setActiveCart(cart);
        setShowingCart(true);
    }

    return (
        <div className="App">
            <h2 className="brand">ChaiKart</h2>
            <div className={"grid"}>

                {PRODUCTS && <ProductList products={PRODUCTS} actions={{onProductAdd}}/>}
                {showingCart &&
                <CartList activeCart={activeCart}
                          productActions={{onRemoveFromCart, onDecreaseQuantity, onIncreaseQuantity}}
                          cartActions={{onSuspendCart, onClearActiveCart}}
                />
                }
                {
                    suspendedCarts.length > 0 && <SuspendedCartList actions={{onMakeActive}} carts={suspendedCarts}/>
                }
            </div>
        </div>
    );
}

export default App;
