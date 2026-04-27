import {Card} from "./Carta";

function Galeria() {
  const carreras = [
    {
      id: 1,
      nombre: "Actuaría",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-actuaria.webp"
    },
    {
      id: 2,
      nombre: "Administración de Negocios ",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-admin.webp"
    },
    {
      id: 3,
      nombre: "Ciencia de Datos",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-datos.webp"
    },
    {
      id: 4,
      nombre: "Ciencia Política",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-cpol.webp"
    },
    {
      id: 5,
      nombre: "Contaduría Analítica y Finanzas Corporativas",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-conta.webp"
    },
    {
      id: 6,
      nombre: "Derecho",
      imagen: "https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-derecho.webp"
    },
  ];

  return (
    <div className="galeria">
      {carreras.map((carrera) => (
        <Card
          key={carrera.id}
          nombre={carrera.nombre}
          imagen={carrera.imagen}
        />
      ))}
    </div>
  );
}

export default Galeria;