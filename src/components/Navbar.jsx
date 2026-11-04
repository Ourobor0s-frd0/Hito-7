// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#000000",
        color: "white"
      }}>

         {/* Logo / Nombre */}
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
          🍕 Pizzería Mamma Mía
        </Link>
      </div>
       {/* Menú de navegación */}
      <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/cart" style={{
            backgroundColor: "white",
            color: "#ff6347",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>🛒 Total: $0</Link>

      {token ? (
        <>
          <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
          <button onClick={logout} style={{ color: "white", textDecoration: "none" }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
          <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
        </>
      )}
       </div>

      {/* Botón carrito */}
    </nav>
  );
}
