cargarPregunta(2)

function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index]
    opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)
    opciones.sort(()=>Math.random()-0.5);

    for(let i = 0; i < 4; i++){
        opciones.sort(() => Math.random() -0.5);
    }

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
}

async function seleccionarOpcion(index){
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta
    if(validezRespuesta){
        await Swal.fire({
            title: "Respuesta correcta",
            text: "La respuesta ha sido correcta",
            icon: "success",
        });
    }else{
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text: `La repuesta ha sido "${objetoPregunta.respuesta}"`,
            icon: "error", 
        });  
    }
}


function ayuda(){
    Swal.fire({
        title: '¡Pista!',
        text: objetoPregunta.ayuda,
        imageUrl: objetoPregunta.ayudaImg,
        imageHeight: 300,
        imageAlt: 'Custom image',
      }); 
      
}