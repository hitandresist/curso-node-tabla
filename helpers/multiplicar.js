const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar = false ) => {

    try {
    
        let salida = '';
        
        for(let i = 1; i <= 10; i++) {
        
            salida += `\n${ base } x ${ i } = ${ base * i }`;
        
        }

        if( listar ) {

            console.log('============================='.green);
            console.log(colors.bgBrightGreen(colors.strikethrough(`        Tabla del: ${base}         `).black))
            console.log('============================='.green)
            console.log(colors.green(salida));

        }


        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return `\ntabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}