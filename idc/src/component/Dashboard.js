import DataDashboard from "./DataDashboard";
import SubTitle2 from "./SubTitle2";

const Dashboard = ({ membrecia }) => {
  const allMember = membrecia.length;

  const sumaActivos = membrecia.filter(
    (miembro) => miembro.estado === "activo"
  ).length;

  const sumaDecesos = membrecia.filter(
    (miembro) => miembro.estado === "fallecido"
  ).length;

  const sumaDescarriados = membrecia.filter(
    (miembro) => miembro.estado === "descarriado"
  ).length;

  const summary = [
    { desc: "Total de Miembros", cantidad: allMember },
    { desc: "Miembros activos", cantidad: sumaActivos },
    { desc: "Miembros fallecidos", cantidad: sumaDecesos },
    { desc: "Miembros descarriados", cantidad: sumaDescarriados },
  ];
  return (
    <>
      <section>
        <SubTitle2>DASHBOARD</SubTitle2>
      </section>
      <main>
        <ul className=".dashboard">
          {summary.map((elemento, index) => (
            <DataDashboard key={index} elemento={elemento} />
          ))}
        </ul>
      </main>
    </>
  );
};
export default Dashboard;
