let contactos = ['andres duarte', 'carlos ospino', 'cristiano ronaldo'];


function agregar_contacto(contacto) {
    contactos.push(contacto);
}

function borrar_contacto(contacto) {
    let index = 
    contactos.indexOf(contacto);
    if(index !== - 1) {
        contactos.splice(index, 1);
    }else{
        console.log('${contacto} no esta en la lista de contactos');
    }
}

function imprimir_contactos() {
    for(let contacto of contactos){
        console.log(contacto);
    }
}