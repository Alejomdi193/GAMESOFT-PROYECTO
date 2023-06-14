let videos=[];
let editando = false;

const form = document.querySelector('#form-juegos');


form.addEventListener('submit', e => {
    e.preventDefault(); // Prevenir que se recargue la página enviando el form
    
    anadirVideos();
});

function anadirVideos(){
    const codigo= document.querySelector('#codigo').value;
    const nombre= document.querySelector('#nombre').value;
    const tematica= document.querySelector('#tematica').value;
    const precio= document.querySelector('#precio').value;
    const puntos= document.querySelector('#puntos').value;

   console.log(anadirVideos)
    /* ARRAY DE LISTA */
    let nuevoVideo={
        id:Date.now(),
        codigo,
        nombre,
        tematica,
        precio,
        puntos,
    }

    videos.push(nuevoVideo);

    form.reset();

    imprimirTabla(videos);
}


function imprimirTabla(dic){
    let tabla= document.querySelector('#tabla-juegos');
    tabla.innerHTML="";

    dic.forEach(video => {
        tabla.innerHTML += `
        <tr>
        <td>${video.codigo}</td>
        <td>${video.nombre}</td>
        <td>${video.tematica}</td>
        <td>${video.precio}</td>
        <td>${video.puntos}</td>
        <td class="">
        <div class="d-flex justify-contect-center alig-items-center">
        <button class="btn btn-danger "onclick="eliminar(${video.id})">eliminar</button>
        </div>
        </td>
        </tr>
        
        `
    });

}



function eliminar(id){
    videos = videos.filter(video => video.id !== id);
    imprimirTabla(videos);
}






    



   

