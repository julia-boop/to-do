const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(arrayDeTarea){
        fs.writeFileSync(this.archivo, JSON.stringify(arrayDeTarea))
    },
    guardarTarea: function(tarea){
        let listadoTareas = this.leerJSON()
        listadoTareas.push(tarea)
        this.escribirJSON(listadoTareas)

    }

}

module.exports = archivoTareas;

