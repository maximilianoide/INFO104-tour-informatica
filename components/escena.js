import { useState, useEffect } from "react";
import Image from "next/image";

const Escena = ({ escenas }) => {
  const [escenaActual, setEscenaActual] = useState(escenas[0]);
  var imagenUrl = 'url("' + escenaActual.imagen + '")';
  useEffect(() => {
    console.log(escenaActual.nombre);
    var imagenUrl = 'url("' + escenaActual.imagen + '")';
  }, [escenaActual]);

  return (
    <div style={{ backgroundColor: "#000", width: "100%", height: "100%" }}>
      <h2 id="titulo">{escenaActual.nombre}</h2>
      <div id="marcoImagen">
        <div
          id="imagen"
          style={{
            backgroundImage: "url('" + escenaActual.imagen + "')",
            backgroundSize: "cover",
            border: "1px solid #999999",
            backgroundRepeat: "no-repeat",
            width: "1000px",
            height: "700px",
          }}
          alt={escenaActual.nombre}
        >
          {escenaActual.botones.map((boton, index) => (
            <button
              className="botonMovedor"
              onClick={(e) => {
                setEscenaActual(escenas[boton.escenaDestino]);
              }}
              style={{ top: boton.porx, left: boton.pory }}
            >
              {boton.nom}
            </button>
          ))}
        </div>
      </div>
      <div id="tabla">
        <table border="2">
          <tr>
            <td style={{ fontSize: "35px", color: "#fff" }}>
              {escenaActual.nombre}
            </td>
          </tr>
          <tr>
            <td style={{ color: "#fff" }}>{escenaActual.desc}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Escena;
