import Miembro from "./Miembro";
import "../../assets/style/otro.css";
const Miembros = ({ membrecia }) => {
  return (
    <main>
      <ul className="ulMiembros">
        {membrecia.map((miembro, index) => (
          <Miembro key={index} miembro={miembro} />
        ))}
      </ul>
    </main>
  );
};
export default Miembros;
