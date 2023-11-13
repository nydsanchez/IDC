import Button from "../Button/Button";
import "../../assets/style/otro.css";
const Miembro = ({ miembro }) => {
  return (
    <li>
      <h3>{miembro.nombre}</h3>
      {/*  <span>{miembro.estado}</span>
      <Button>Ver detalle</Button> */}
    </li>
  );
};
export default Miembro;
