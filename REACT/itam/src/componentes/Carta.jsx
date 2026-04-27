export function Card({ nombre, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
    </div>
  );
}
