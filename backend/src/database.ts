import {connect} from 'mongoose';

export async function startConnection(){
    await connect('mongodb+srv://laura:1234@cluster0.csyfo.mongodb.net/examenMinimo1?retryWrites=true&w=majority', {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log("Conexión establecida ^^ !");
}