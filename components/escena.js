import { useState, useEffect} from "react";
import Image from 'next/image';

const Escena = ({ escenas }) => {
    const [escenaActual, setEscenaActual] = useState(escenas[0]);
    var imagenUrl = 'url("'+escenaActual.imagen+'")'
    useEffect(() => {
        console.log(escenaActual.nombre)
        var imagenUrl = 'url("'+escenaActual.imagen+'")'
    }, [escenaActual]);

  
    return (
      <>
        <h2 id="titulo">{escenaActual.nombre}</h2>
        <div id="imagen" 
        
        style={{backgroundImage: "url('"+escenaActual.imagen+"')",backgroundSize: "cover",cbackgroundRepeat: 'no-repeat',width: '1000px',height: '700px'}}
        
        alt={escenaActual.nombre}
        >
        El perro panson ha sido invadido<br></br>
        {escenaActual.botones.map((boton, index) => (
                  <button
                  class="btn" 
                  onClick={(e) => {
                        setEscenaActual(escenas[boton.escenaDestino]);
                        }}
                  style={{position: "relative",top: boton.porx,left: boton.pory,
                        backgroundColor: "#555", color: "white", fontSize: "16px",padding: "12px 24px", border: "none",cursor: "pointer",
                        borderRadius: "3px",textAlign: "center"}}  
                  >
                        {boton.nom}
                  </button>
                ))}




        </div>
        <div id="desc">{escenaActual.desc}</div>
        
      


      </>
    );
  };
  export default Escena;
  