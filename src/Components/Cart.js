import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Button } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useState([]);

    // Function to retrieve cart data from local storage
    const getCartFromLocalStorage = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    };

    // This effect will run when the component mounts to get cart data
    useEffect(() => {
        getCartFromLocalStorage();
    }, []);

    // Example function to remove a product from the cart
    const removeProductFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <Container>
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                cart.map((product) => (
                    <Card key={product.id} className="my-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <Col xs={6}>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Card.Text>Quantity: {product.quantity}</Card.Text>
                            </Col>
                            <Col xs={6} className="text-right">
                                <Button variant="danger" onClick={() => removeProductFromCart(product.id)}>Remove</Button>
                            </Col>
                        </div>
                    </Card>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </Container>
    );
};

export default Cart;
