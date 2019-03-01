const argv = require('yargs')
    .command('crear', 'crear por hacer', {
        descripcion: {
            desc: 'descripcion',
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'Listando tareas', {
        listar: {
            alias: 'l'
        },
    })
    .command('actualizar', 'actualizar por hacer', {
        descripcion: {
            desc: 'descripcion',
            demand: true,
            alias: 'a'
        },
        completado: {
            default: true,
            desc: 'indica que ya se termino la tarea',
            alias: 'c',
        },
    })
    .command('borrar', 'borrando las tareas pendientes', {
        descripcion: {
            desc: 'descripcion',
            demand: true,
            alias: 'd'
        }
    })
    .argv;

module.exports = {
    argv: argv
}