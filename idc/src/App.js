import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Menu from "./component/MenuLateral/Menu";
import Form from "./component/Forms/Form";
import Dashboard from "./component/Dashboard/Dashboard";

import Title from "./component/Title";
import Iglesia from "./component/Forms/Iglesia";
import General from "./component/PageBlank/General";
import Miembros from "./component/Cards/Miembros";
import "../src/assets/style/form.css";
import FormMiembros from "./component/Forms/FormMiembros";

const membrecia = [
  {
    id: 118836,
    nombre: "Clark",
    fNac: "01-01-1998",
    estado: "activo",
    cedula: "999-999999-9999X",
    eCivil: "soltero/a",
    familiaCristiana: false,
    telf: "22892927",
    email: "xyz@gmail.com",
    barrio: "La Nicarao",
    distrito: "5",
    direccion: "mango solo",
  },
  {
    id: 118836,
    nombre: "Jane",
    fNac: "01-01-1998",
    estado: "fallecido",
    cedula: "999-999999-9999X",
    eCivil: "soltero/a",
    familiaCristiana: false,
    telf: "22892927",
    email: "xyz@gmail.com",
    barrio: "La Nicarao",
    distrito: "5",
    direccion: "mango solo",
  },
  {
    id: 118836,
    nombre: "Jonas",
    fNac: "12-01-1978",
    estado: "descarriado",
    cedula: "999-999999-9999X",
    eCivil: "casado/a",
    familiaCristiana: false,
    telf: "22497920",
    email: "abc@gmail.com",
    barrio: "Las Brisas",
    distrito: "1",
    direccion: "mango solo",
  },
];

const EMAIL = "h@gmail.com";
const PASSWORD = "asd123";

const App = () => {
  const [access, setAccess] = useState(false);
  const [menu, setMenu] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const login = (userData) => {
    if (userData.psd === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert(
        "El usuario o contraseña que introdujo no es correcta, por favor introduzca su usuario y contrasena"
      );
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function handleMenu(e) {
    setMenu(e);
    switch (e) {
      case "iglesia":
        navigate("/iglesia");
        break;
      case "miembros":
        navigate("/miembros");
        break;
      case "grupos":
        navigate("/grupos");
        break;
      case "eventos":
        navigate("/eventos");
        break;
      case "visitas":
        navigate("/visitas");
        break;
      case "ingreso":
        navigate("/ingresos");
        break;
      case "egreso":
        navigate("/egresos");
        break;

      default:
        navigate("/home");
        break;
    }
  }

  return (
    <div className={pathname === "/" ? "" : "app"}>
      {pathname !== "/" && (
        <>
          <Menu menu={menu} onClick={handleMenu} />
          <Title>Sistema de Administración de Membresía</Title>
        </>
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Dashboard membrecia={membrecia} />} />
        <Route path="/iglesia" element={<Iglesia />} />
        <Route path="/miembros" element={<Miembros membrecia={membrecia} />} />
        <Route path="/grupos" element={<General>Grupos</General>} />
        <Route path="/visitas" element={<General>Visitación </General>} />
        <Route path="/eventos" element={<General>Eventos</General>} />
        <Route path="/ingresos" element={<FormMiembros />} />
        <Route path="/egresos" element={<General>Egreso </General>} />
      </Routes>
    </div>
  );
};
export default App;
