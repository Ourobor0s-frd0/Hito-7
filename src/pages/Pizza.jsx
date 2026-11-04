// src/pages/Pizza.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setPizza(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Error desconocido");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>Pizza no encontrada</p>;

 // ...existing code...
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-3">{pizza.name}</h2>
          {pizza.img && (
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid mb-3 rounded"
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
          )}
          <p className="card-text">{pizza.description}</p>
          <h5 className="mt-4">Ingredientes:</h5>
          <ul className="list-group mb-3">
            {pizza.ingredients && pizza.ingredients.map((ing, idx) => (
              <li key={idx} className="list-group-item">
                {ing}
              </li>
            ))}
          </ul>
          <h4 className="text-success mb-3">Precio: ${pizza.price}</h4>
        </div>
      </div>
    </div>
  );
// ...existing code...
}
