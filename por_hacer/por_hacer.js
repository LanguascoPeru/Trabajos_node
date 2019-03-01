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

let actualizar_tareas = async(desc, comp = true) => {
    //---obteniendo de bse de datos----
    cargarBD();

    let index = listadoHacer.findIndex((tarea) => {
        return tarea.descripcion === desc;
    })
    if (index >= 0) {
        listadoHacer[index].completado = comp;
        let save = await (guardarDB(listadoHacer))
        return save;
    } else {
        return 'No se puedo actualizar..';
    }
}

let borrando_tareas = (desc) => {
    //---obteniendo de bse de datos----
    cargarBD();
    let index = listadoHacer.findIndex((tarea) => {
        return tarea.descripcion === desc;
    })
    if (index >= 0) {
        listadoHacer.splice(1, index);
        guardarDB(listadoHacer);
        return listadoHacer;
    } else {
        return 'No se encontro tarea para borrar';
    }
}

module.exports = {
    crear_tarea: crear_tarea,
    getListado: mostrar_tareas,
    actualizar_tareas: actualizar_tareas,
    borrando_tareas: borrando_tareas
}