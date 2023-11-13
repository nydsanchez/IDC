const DataDashboard = ({ elemento }) => {
  return (
    <li>
      <h3>{elemento.desc}</h3>
      <span>{elemento.cantidad}</span>
    </li>
  );
};
export default DataDashboard;
