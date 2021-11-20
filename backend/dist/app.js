"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //es un middleware, capa de programari que es troba entre el sistema operatiu i les aplicacions del sistema
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//todo lo que la funcion expres retorne se guaradara en la constante app
//express creara un objeto app con el cual se definirán rutas, middlewares y demás características con las que cuenta express.
const index_1 = __importDefault(require("./routes/index"));
//settings
app.set('port', process.env.PORT || 4000); //si tiene puerto ya el servidor con process.env.port usara ese sino el 4000
//middlewares
app.use((0, morgan_1.default)('dev')); //usa el morgan en la opcion de desarrollo lo que hara es mostrarme mensajes por consola a medida que los usuarios pidan cosas la servidor
app.use((0, cors_1.default)());
app.use(express_1.default.json()); //como hablo con una api necesito que express entienda json (porque los ficheros de la api son json)
//routes
app.use('/api', index_1.default); //cada vez que llegue una ruta a http://localhost:4000/api se manejara con el archivo indexRoutes
exports.default = app;
//exportamos app para poder importarlo en index
