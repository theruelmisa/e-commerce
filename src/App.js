import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import { Navbar, Products, Cart } from './components';

const App = () => {
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const addToCartHandler = async ( productId, quantity ) => {
        const { cart } = await commerce.cart.add( productId, quantity );
        setCart( cart );
    }

    const updateCartQuantityHandler = async ( productId, quantity ) => {
        const { cart } = await commerce.cart.update( productId, { quantity });

        setCart( cart );
    }

    const removeFromCartHandler = async ( productId ) => {
        const { cart } = await commerce.cart.remove( productId );

        setCart( cart )
    }

    const emptyCartHandler = async () => {
        const { cart } = await commerce.cart.empty();

        setCart( cart );
    }

    return ( 
        <Router>
            <div>
                <Navbar totalItems={ cart.total_items } />
                <Switch>
                    <Route exact path="/">
                        <Products products={ products } onAddToCart={addToCartHandler} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={ cart } 
                            onUpdateCartQuantity={ updateCartQuantityHandler }
                            onRemoveFromCart={ removeFromCartHandler } 
                            onEmptyCart= { emptyCartHandler }
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    );
}

export default App;