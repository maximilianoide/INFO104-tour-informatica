function ImagenPagina(ruta){
    const json = JSON.parse(ruta)
    const imagen = document.getElementById("imagen")
    imagen.src=json.imagen
    imagen.height=400
    imagen.width=400
    const titulo = document.getElementById("titulo")
    titulo.innerHTML=json.nombre
    const desc = document.getElementById("desc")
    desc.innerHTML=json.desc
}
