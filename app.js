const argv = require("./yargs-config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");


console.clear();


 crearArchivo( argv.b, argv.l, argv.h )
    .then( result => console.log( (result).green ))
    .catch( error => console.log( error )) 
    
