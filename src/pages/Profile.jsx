import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí por ahora es estático, en hitos posteriores se manejará la lógica real
    alert("Sesión cerrada");
    navigate("/login"); 
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Perfil de Usuario</h2>
      <p>Email: usuario@mammamia.com</p>
      <button 
        onClick={handleLogout} 
        style={{ padding: "0.5rem 1rem", marginTop: "1rem", cursor: "pointer" }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
