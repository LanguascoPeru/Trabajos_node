const file = require('fs');
let listadoHacer = [];

const guardarDB = (listaTareas) => {
    let data = JSON.stringify(listaTareas);

    return new Promise((resolve, reject) => {
        file.writeFile('../Por_hacer/BaseDatos/data.json', data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('El registro a sigo almacenado correctamente..');
            }
        });
    })
}

let cargarBD = () => {
    try {
        listadoHacer = require('../baseDatos/data.json');
    } catch (error) {
        listadoHacer = [];
    }
}

const crear_tarea = async(descripcion) => {
    //---obteniendo de bse de datos----
    cargarBD();
    listadoHacer.push({
        descripcion: descripcion,
        completado: false
    })
    let save = await (guardarDB(listadoHacer))
    return save;
}

let mostrar_tareas = () => {
    //---obteniendo de bse de datos----
    cargarBD();
    return listadoHacer;
}

let actualizar_tareas = (desc, comp = true) => {
    //---obteniendo de bse de datos----
    cargarBD();
    let obj_tarea = listadoHacer.find((obj) => {
        if (obj.descripcion == desc) {
            obj.completado = comp
        }
    })

    if (obj_tarea.length == 0) {
        console.log('No se encontro resultados..')
    } else {
        console.log('Actualizado correctamente..')
    }
    return obj_tarea;
}

module.exports = {
    crear_tarea: crear_tarea,
    getListado: mostrar_tareas,
    actualizar_tareas: actualizar_tareas
}