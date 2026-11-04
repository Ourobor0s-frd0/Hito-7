import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"; // <-- Agrega esta línea

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleAddToCart = (pizza) => {
    if (addToCart) {
      addToCart(pizza);
    }
  };

  return (
    <div className="container mt-4">
      <h2>🍕 Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-3" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(pizza)}
                >
                  Añadir al carrito
                </button>

                <Link to={`/pizza/${pizza.id}`}>
  <Button variant="info" className="ms-2">Ver Detalle</Button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
