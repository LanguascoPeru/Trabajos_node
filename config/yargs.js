const argv = require('yargs')
    .command('crear', 'crear por hacer', {
        descripcion: {
            desc: 'descripcion',
            demand: true,
            alias: 'd'
        }

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
    .argv;

module.exports = {
    argv: argv
}