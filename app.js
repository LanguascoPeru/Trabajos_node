const argv = require('./config/yargs').argv;
const logica = require('./por_hacer/por_hacer.js');
var colors = require('colors');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        logica.crear_tarea(argv.descripcion)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            })
        break;
    case 'listar':
        let listado = logica.getListado();
        for (const obj of listado) {
            console.log('======= Por hacer ======='.green);
            console.log(obj.descripcion);
            console.log('Estado: ' + obj.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        logica.actualizar_tareas(argv.descripcion, argv.completado)
            .then((ok) => {
                console.log(ok);
            })
            .catch((e) => {
                console.log(e);
            })
        break;
    case 'borrar':
        let res = logica.borrando_tareas(argv.descripcion);
        console.log(res);
        break;
    default:
        console.log('comando no reconocido');
        break;
}