
const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        const tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log(`==========Por Hacer==========` .green);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log(`=============================` .green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if(actualizado){
            console.log('Tarea actualizada correctamente');
        }else{
            console.log('No se encontró la tarea');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if(borrado){
            console.log('Tarea borrada correctamente');
        }else{
            console.log('No se encontró la tarea');
        }
        break;

    default:
    console.log('Comando no valido' .red)
        break;
}