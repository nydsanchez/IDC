import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Menu from "./component/Menu";
import Form from "./component/Form";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import Title from "./component/Title";

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const login = (userData) => {
    if (userData.psd === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="app">
      {pathname !== "/" && (
        <>
          <Menu />
          <Title>Sistema de Administración de Membresía</Title>
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Dashboard membrecia={membrecia} />} />
      </Routes>
    </div>
  );
};
export default App;
