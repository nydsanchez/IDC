import { useState } from "react";
import validation from "../js/validation";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5rem 0",
      }}
    >
      <section id="img_inicio">
        <img src="../imgages/logo.jpg" alt="logo" />
      </section>
      <section
        style={{
          width: "350px",
          height: "400px",
          margin: "0 1rem",
          padding: "0 1rem",
          boxShadow: "0px 0px 20px black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <br />
          <h2>Inicio de Sesión</h2>
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
            name="psw_user"
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
