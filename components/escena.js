import { useState, useEffect } from "react";
import Image from "next/image";
import Profesor from "../components/profesor";
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
  useEffect(() => {
    console.log(escenaActual.nombre);
  }, [escenaActual]);

  return (
    <>
      <div
        className="imagenEscena"
        style={{
          backgroundImage: "url('" + escenaActual.imagen + "')",
        }}
        alt={escenaActual.nombre}
      >
        <div className="poroto">
          <h1 className="nom">{escenaActual.nombre}</h1>
          <div className="desc">{escenaActual.desc}</div>
        </div>
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
                <img src="images/info.svg"></img>
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody
                display="flex"
                flexDirection="column"
                justify="center"
                textColor="black"
                alignItems="center"
              >
                <Profesor imagen={informacion.img}></Profesor>
                <div>{informacion.desc}</div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </>
  );
};
export default Escena;
