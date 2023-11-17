import Button from "../Button/Button";
import "../../assets/style/grlForm.css";

const FormMiembros = () => {
  return (
    <main className="div-miembros">
      <form className="form-miembros">
        <h2>Registro de un nuevo miembro</h2>
        <div>
          <fieldset className="miembros-info-personal">
            <legend>Información personal</legend>
            <label>Nombre y apellidos:</label>
            <input type="text" placeholder="nombre y apellido..." />

            <label>Fecha de nacimiento:</label>
            <input type="date" placeholder="dd/mm/aaaa" />

            <label>Estado Civil:</label>
            <select>
              <option value="casado/a">Casado/a</option>
              <option value="viudo/a">Viudo/a</option>
              <option value="soltero/a">Soltero/a</option>
              <option value="union libre">Unión libre</option>
            </select>

            <label>Género:</label>
            <select>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </select>

            <label>Dirección:</label>
            <input type="text" placeholder="dirección..." />

            <label>Teléfono:</label>
            <input type="text" placeholder="celular..." />
          </fieldset>
          <fieldset className="miembros-info-eclesial">
            <legend>Información Eclesial</legend>
            <label>Fecha de bautismo:</label>
            <input type="date" />
            <label>Lugar de bautismo:</label>
            <input type="text" placeholder="nombre de la congregación..." />

            <label>Fecha de ingreso:</label>
            <input type="date" />

            <label>Estado espiritual:</label>
            <select>
              <option value="activo">Activo/a</option>
              <option value="apartado">Apartado/a</option>
            </select>
          </fieldset>
        </div>
        <Button>Registrar</Button>
      </form>
    </main>
  );
};
export default FormMiembros;
