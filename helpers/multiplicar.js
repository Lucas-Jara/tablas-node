const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try {
        let salida = '';

        if (listar) {
            console.log('==========================');
            console.log(`       Tabla del  ${ base }`);
            console.log('==========================\n');
        }
    
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            if (listar) {
                console.log(`\t${base} x ${i} = ${base * i}`);
            }
        }
    
        console.log('\n');
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return `Archivo tabla-${base}.txt creada correctamente\n`;
        
    } catch (error) {
        console.log(error);
    }
    
}


module.exports = {
    crearArchivo
}