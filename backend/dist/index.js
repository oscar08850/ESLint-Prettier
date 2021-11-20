"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
async function main() {
    (0, database_1.startConnection)();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
} //await porque es async y no quiero usar un callback
main();
//COMENTARIOS SOBRE package.json
//tenemos 3 dependencias types/express y typescript en desarrollo y express en produccion porque lo necesita para funcionar
//en scripts hemos creado el comando "build": "tsc" que cuando lo ejecute (con npm run build) ejecutara el comando tsc que lo que hace es leer el tsconfig.js y convierte el codigo a partir de esa configuracion
//al hacer el npm run build ha convertido el codigo de typescript a javascript y entonces podemos ejecutar lo que dice index con el comando "node dist/index.js"
//con el rimraf podemos borrar archivos independientemente del sistema operativo
//hemos creado el comando "clean": "rimraf dist", que usa el rimraf para borrar la carpeta div con los dicheros .js
//tambien hemos creado  "start": "npm run build && node dist/index.js" que ejecuta el comando build y despues dist/index.js
//tambien creamos "dev" un comando para desarrollo usando "nodemon" para que no se convierta todo el rato el codigo a js, para que se compile solo el codigo ts cuando hagamos un cambio a los ficheros de src con extension .ts
//para configurar nodemon con typescript (por defecto va con js) necesitamos crear el archivo nodemon.json (debe ser el primer archivo) y debemos instalar ts-node
//importamos tambien mongoose que se encarga de permitirme conectarme a la base de datos mongodb y establecer los modelos o datos que guardo en la base de datos (es de produccion)
//instalamos multer --> le dice al servidor que es capaaz de subir imagenes
//instalamos fs-extra (file system) porque me permite trabajar con los archivos y eliminarlos , utilizaa callbacks por lo que no puede usar async await, por lo que usaremos la extension que permite trabajaar con promesas --> fs-extra
