import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Form.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setMessage("⚠️ Todos los campos son obligatorios.");
    } else if (password.length < 6) {
      setMessage("⚠️ La contraseña debe tener al menos 6 caracteres.");
    } else if (password !== confirmPassword) {
      setMessage("⚠️ Las contraseñas no coinciden.");
    } else {
      setMessage("✅ Registro exitoso");
      // Add register logic here
      navigate('/login');
    }
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Register;
