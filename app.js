let process = require("process")
let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach(function(elemento, indice, array ) {
            console.log(`${indice+1}. ${elemento.titulo} - ${elemento.estado}`)
        }, );    
        break;

    case 'tarea':
        let nuevaTarea = {
            titulo : process.argv[3],
            estado : "pendiente"
            }
            archivoTareas.guardarTarea(nuevaTarea)
        break;

    case 'filtrar':
        let estadoParaFiltrar = process.argv[3]
        let listaParseada2 = archivoTareas.leerJSON()
        // let arrayDeTareasFiltradas = []
        for(let i = 0; i<listaParseada2.length; i++){
        let estadoTareaQueRecorro = listaParseada2[i].estado
        if(estadoParaFiltrar == estadoTareaQueRecorro){
        console.log(listaParseada2[i])
        }
        }
        break;


    case undefined:
        console.log('Tenés que pasarme una acción');
        break;


    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}


// hay que crear un caso en el switch que responda cuando en la terminal se la comanda tarea, que responda a lo indicado en escribirJSON
// para obtener el titulo de la tarea tengo que buscar la posicion 3 del process.argv
// las tareas tienen que tener un estado por defecto 
// para buscar el estado que seria el tercer dato ingresado en la terminal, trabajar con la posicion 4 de process.argv
// para guardar la tarea hay que 
//     -leer el json 
//    - convertirlo en array
//     - pushear dentro del array orignal de tareas todo el array nuevo de json
//      -transoformar el array en json de vuelta (escribirJSON)
