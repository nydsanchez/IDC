import Miembro from "./Miembro";
const Miembros = ({ membrecia }) => {
  return (
    <div className="container">
      <ul>
        {membrecia.map((miembro, index) => (
          <Miembro key={index} miembro={miembro} />
        ))}
      </ul>
    </div>
  );
};
export default Miembros;
