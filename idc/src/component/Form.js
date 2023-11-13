import { useState } from "react";

import validation from "../js/validation";
import "../component/form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    psd: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className="login">
      <section id="img_inicio">
        <img
          src="data:image/webp;base64,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"
          alt="logo"
        />
      </section>

      <section id="login_form">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input
            type="text"
            name="email"
            placeholder="nombre de usuario"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3} </p>
          )}

          <br />
          <br />
          <label>Contraseña</label>
          <input
            type="password"
            name="psd"
            value={userData.psd}
            onChange={handleChange}
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
          <br />
          <br />

          <button>INGRESAR</button>
        </form>
      </section>
    </div>
  );
};
export default Form;
