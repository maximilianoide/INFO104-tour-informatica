import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Escena = ({ escenas }) => {
  const [escenaActual, setEscenaActual] = useState(escenas[0]);
  var imagenUrl = 'url("' + escenaActual.imagen + '")';
  useEffect(() => {
    console.log(escenaActual.nombre);
    var imagenUrl = 'url("' + escenaActual.imagen + '")';
  }, [escenaActual]);

  return (
    <>
      <div
        id="imagen"
        style={{
          backgroundImage: "url('" + escenaActual.imagen + "')",
          backgroundSize: "cover",
          border: "1px solid #990000",
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
            style={{
              left: boton.porx,
              top: boton.pory,
            }}
          >
            {boton.nom}
          </button>
        ))}
        {escenaActual.info.map((informacion, index) => (
          <Popover>
            <PopoverTrigger>
              <button
                className="botonInfo"
                style={{
                  left: informacion.porx,
                  top: informacion.pory,
                }}
                onClick={(e) => {}}
              >
                <img src="images/info-icon.png" style={{}}></img>
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <div>{informacion.desc}</div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
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
    </>
  );
};
export default Escena;
