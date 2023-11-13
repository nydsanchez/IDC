const Menu = ({ onClick }) => {
  return (
    <nav>
      <button id="inicio" onClick={(e) => onClick(e.target.id)}>
        🏠 Inicio
      </button>
      <button id="iglesia" onClick={(e) => onClick(e.target.id)}>
        💒 Iglesia
      </button>
      <button id="miembros" onClick={(e) => onClick(e.target.id)}>
        👨‍👨‍👧‍👧 Miembros
      </button>
      <button id="grupos" onClick={(e) => onClick(e.target.id)}>
        👨‍👨‍👧 Grupos
      </button>
      <button id="eventos" onClick={(e) => onClick(e.target.id)}>
        🎭 Eventos
      </button>
      <button id="visitas" onClick={(e) => onClick(e.target.id)}>
        🚌 Visitación
      </button>
      <button id="ingreso" onClick={(e) => onClick(e.target.id)}>
        ➕ Ingreso de Miembros
      </button>
      <button id="egreso" onClick={(e) => onClick(e.target.id)}>
        ➖ Egreso de Miembros
      </button>
    </nav>
  );
};
export default Menu;
