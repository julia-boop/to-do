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

    },
    filtrarPorEstado: function (estadoParaFiltrar){
        let listaParseada = this.leerJSON();
        let arrayDeTareasFiltradas = [];
        for(let i = 0; i < listaParseada.length; i++){
            let estadoDeLaTareaQueRecorro = listaParseada[i].estado;
            if (estadoDeLaTareaQueRecorro == estadoParaFiltrar){
                arrayDeTareasFiltradas.push(listaParseada[i])
            }
        }
    return arrayDeTareasFiltradas
    }

}

module.exports = archivoTareas;

