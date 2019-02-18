const file = require('fs');
let listadoHacer = [];

const crear_tarea = (descripcion) => {
    listadoHacer.push({
        descripcion: descripcion,
        completado: false
    })
    return listadoHacer;
}

module.exports = {
    crear_tarea: crear_tarea
}