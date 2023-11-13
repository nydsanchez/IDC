import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [psw, setPsw] = useState("");

  return (
    <main>
      <section className="img_inicio">
        <img src="./logo.jpg" alt="logo" />
      </section>

      <section className="login_form">
        <h2>Inicio de Sesión</h2>
        <form>
          <label>Usuario</label>
          <input
            type="text"
            placeholder="nombre de usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
          <button>INGRESAR</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
