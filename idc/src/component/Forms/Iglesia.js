import "../../assets/style/iglesia.css";
const Iglesia = () => {
  return (
    <main className="iglesia-form">
      <nav>
        <a id="m1" href="#">
          Información General
        </a>
        <a id="m3" href="#">
          Ministerios
        </a>
        <a id="m3" href="#">
          Organización biblica
        </a>
      </nav>
      <section id="formChurchInfo">
        <h4>Información General de la congregación</h4>
        <form id="infoIg">
          <label>Nombre</label>
          <input type="text" name="churchName" />

          <label>Fecha de inicio</label>
          <input type="date" name="churchOpenning" />

          <label>Departamento </label>
          <select name="departamento">
            <option value="1">Atlantico Norte</option>
            <option value="2">Atlantico Sur</option>
            <option value="3">Boaco</option>
            <option value="4">Carazo</option>
            <option value="5">Chinandega</option>
            <option value="6">Chontales</option>
            <option value="7">Estelí</option>
            <option value="8">Granada</option>
            <option value="9">Jinotega</option>
            <option value="10">León</option>
            <option value="11">Madriz</option>
            <option value="12">Managua</option>
            <option value="13">Masaya</option>
            <option value="14">Matagalpa</option>
            <option value="15">Nueva Segovia</option>
            <option value="16">Río San Juan</option>
            <option value="17">Rivas</option>
          </select>

          <label>Dirección</label>
          <input
            type="text"
            name="churchAddress"
            placeholder="dirección completa"
          />

          <label>Telefóno</label>
          <input type="text" name="churchPhone" placeholder="Telefóno" />

          <label>Sitio Web</label>
          <input type="password" name="churchWeb" placeholder="sitio web" />
        </form>
      </section>
    </main>
  );
};
export default Iglesia;
