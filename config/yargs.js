const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check(( argv, options ) => {
                if( isNaN( argv.b )) {
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: "boolean",
                default: false,
                describe: 'Lista la tabla por consola'
            })
            .check(( argv, options ) => {
                if( !(typeof argv.l === "boolean") ) {
                    throw 'El parámetro listar debe ser un boleano'
                }
                return true;
            })
            .argv;

module.exports = argv;
