// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { usePizzas } from '../context/PizzasContext';



export default function Home() {
  const { pizzas } = usePizzas();
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadPizzas() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) throw new Error("Error al cargar pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Fallo al cargar pizzas:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPizzas();
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;

  if (!pizzas) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="cards-grid">
      {pizzas.map((p) => (
        <article className="card" key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.price} €</p>
          <button onClick={() => addItem(p)}>Añadir</button>
        </article>
      ))}
    </div>
  );
}
