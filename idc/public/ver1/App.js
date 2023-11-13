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

export default function App() {
  return (
    <div>
      <h1>Iglesia de Cristo en Villa Alemania</h1>
      <div className="app">
        <div className="sidebar">
          <ListaInteligente />
          <Miembros membrecia={membrecia} />
          <Button>👨‍👨‍👧‍👧 Agregar Miembro</Button>
        </div>

        <FormMiembros />
      </div>
    </div>
  );
}

const ListaInteligente = () => {
  return (
    <div className="container">
      <h2>Listas inteligentes</h2>
      <br />
      <Search />
      <br />
      <Button>🔍 Buscar nombre</Button>
    </div>
  );
};

const Search = () => {
  return <input placeholder="ingrese un nombre..." />;
};
const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};
/* const Acciones = () => {
  return (
    <select>
      <option value={1}>Agregar</option>
      <option value={2}>Modificar</option>
      <option value={3}>Eliminar</option>
    </select>
  );
}; */

const FormMiembros = () => {
  return (
    <form>
      <h2>Registro de un nuevo miembro</h2>
      <fieldset className="infoPer">
        <legend>Información Personal </legend>
        <label>Nombre y apellidos:</label>
        <input type="text" placeholder="nombre y apellido..." />

        <label>Género:</label>
        <select>
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>

        <label>Dirección:</label>
        <input type="text" placeholder="dirección..." />

        <label>Teléfono:</label>
        <input type="text" placeholder="celular..." />

        <label>Fecha de nacimiento:</label>
        <input type="date" placeholder="fecha de nacimiento..." />

        <label>Estado Civil:</label>
        <select>
          <option value="casado/a">Casado/a</option>
          <option value="viudo/a">Viudo/a</option>
          <option value="soltero/a">Soltero/a</option>
          <option value="union libre">Unión libre</option>
        </select>
      </fieldset>

      <fieldset className="infoIglesia">
        <legend>Información Eclesial </legend>
        <label>Fecha de bautismo:</label>
        <input type="date" />
        <label>Lugar de bautismo:</label>
        <input type="text" placeholder="donde se bautizó..." />

        <label>Fecha de ingreso:</label>
        <input type="date" />

        <label>Estado espiritual:</label>
        <select>
          <option value="activo">Activo/a</option>
          <option value="apartado">Apartado/a</option>
        </select>
      </fieldset>
      <Button>Registrar</Button>
    </form>
  );
};
const Miembros = ({ membrecia }) => {
  return (
    <div className="container">
      <ul>
        {membrecia.map((miembro) => (
          <Miembro key={miembro.cedula} miembro={miembro} />
        ))}
      </ul>
    </div>
  );
};

const Miembro = ({ miembro }) => {
  return (
    <li>
      <h3>{miembro.nombre}</h3>
      <span>{miembro.estado}</span>
      <Button>Ver detalle</Button>
    </li>
  );
};
