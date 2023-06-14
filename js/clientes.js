let clientes = [];
let editando = false;
let LS = window.localStorage;



if (LS.getItem('clientes')){
    clientes=JSON.parse(LS.getItem('clientes'));
} 


const form = document.querySelector('#form-anadir');




form.addEventListener('submit', e => {
    e.preventDefault(); // Prevenir que se recargue la página enviando el form
    
    anadirCliente();
});



function anadirCliente(){
    const identificacion= document.querySelector('#identificacion').value;
    
    const nombre= document.querySelector('#nombre').value;
    const apellidos= document.querySelector('#apellidos').value;
    const telefono= document.querySelector('#telefono').value;
    const email= document.querySelector('#email').value;
    const fecha= document.querySelector('#fecha').value;
    const nacion= document.querySelector('#nacion').value;

    




    /* ARRAY DE LISTA */
    const nuevoCliente={
        id: editando === false ? Date.now(): editando,
        identificacion,
        nombre,
        apellidos,
        telefono,
        email,
        fecha,
        nacion,
        puntos: 0,
    }

    if(editando){
        nuevoCliente.id= editando
        clientes=clientes.map(cliente => cliente.id === editando ?  nuevoCliente:cliente)
        document.getElementById("agregar").textContent="Agregar"
   
    

    } else{
        clientes.push(nuevoCliente);

    }

    editando = false;




    

    LS.setItem('clientes', JSON.stringify(clientes)); 

    form.reset();

    imprimirTabla(clientes);

}



function imprimirTabla(dic){
    let tabla= document.querySelector('#tabla-clientes');
    tabla.innerHTML="";

    dic.forEach(cliente => {
        tabla.innerHTML += `
        <tr>
        <td>${cliente.identificacion}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.apellidos}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.email}</td>
        <td>${cliente.fecha}</td>
        <td>${cliente.nacion}</td>
        <td class="">
        <div class="d-flex justify-contect-center alig-items-center">
        <button class="btn btn-primary me-1 "onclick="cargarDatos(${cliente.id})">editar</button>
        <button class="btn btn-danger "onclick="eliminar(${cliente.id})">eliminar</button>
        
        </div>
        </td>
        </tr>
        
        `
    });

}




function eliminar(id){
    clientes = clientes.filter(cliente => cliente.id !== id);
    LS.setItem('clientes', JSON.stringify(clientes));
    imprimirTabla(clientes)
    
}




function cargarDatos(id){

    document.getElementById("agregar").textContent="GUARDAR CAMBIOS"
    clientes.forEach(cliente => {
        if (cliente.id == id){
            document.querySelector('#identificacion').value= cliente.identificacion;
            nombre.value= cliente.nombre;
            apellidos.value= cliente.apellidos;
            telefono.value= cliente.telefono;
            email.value= cliente.email;
            fecha.value= cliente.fecha;
            nacion.value= cliente.nacion;

        }
    })

    editando=id;

}

