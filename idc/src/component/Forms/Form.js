import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import validation from "../../js/validation";
import "../../assets/style/form.css";

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
    <main className="login">
      <section id="img_inicio">
        <img src={logo} alt="logo" />
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
          <label>Contraseña</label>
          <input
            type="password"
            name="psd"
            value={userData.psd}
            onChange={handleChange}
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}

          <button>INGRESAR</button>
        </form>
      </section>
    </main>
  );
};
export default Form;
