const argv = require('./config/yargs').argv;
const logica = require('./por_hacer/por_hacer.js');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log(logica.crear_tarea(argv.descripcion));
        break;
    case 'listar':
        console.log('listar las tareas por hacer');
        break;
    case 'actualizar':
        console.log('actualizar por hacer');
        break;
    default:
        console.log('comando no reconocido');
        break;
}