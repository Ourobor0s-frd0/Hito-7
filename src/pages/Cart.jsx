// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>Debes iniciar sesión para ver tu carrito 🛒</h3>
        <Link to="/login" className="btn btn-primary mt-3">
          Ir a Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito</p>
      ) : (
        <div className="card shadow p-4">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button className="btn btn-success">Proceder al pago</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
