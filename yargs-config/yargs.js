
require('colors');


const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla'
            })
            .check( (argv, options) =>{
                if ( isNaN( argv.base )) {
                    throw 'La base tiene que ser un número'.red
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Mostrar la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Hasta donde será la tabla'
            })
            
            .argv;

module.exports = argv; 