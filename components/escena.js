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
                <img src="images/info.png" style={{}}></img>
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
      <ul id="listaInfo">
        <li>{escenaActual.nombre}</li>
        <li>{escenaActual.desc}</li>
      </ul>
      {/* <div id="tabla">
        <table id="tabla2" border="2">
          <tr border="2">
            <td id="espacioTabla">
              <b>{escenaActual.nombre}</b>
            </td>
          </tr>
          <tr border="2">
            <td id="espacioTabla" style={{ fontSize: "20px" }}>
              {escenaActual.desc}
            </td>
          </tr>
        </table>
      </div> */}
    </>
  );
};
export default Escena;
