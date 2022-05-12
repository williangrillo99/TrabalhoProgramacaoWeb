import { connect } from "mongoose";

export default async (): Promise<void> => {
    const uri = process.env.MONGODB_URI;
    if(!uri){
        console.error("o link do mongo não está configurado");
        process.exit(1);
    }
    try {
        const { connection } = await connect(uri);
        connection.once("open", () => console.log("Conexão com o banco de dados aberta!!"));
        connection.on("connected", () => console.log("Banco de dados conectado com sucesso!"));
        connection.on("error", error => console.error(error));
    } catch (e) {

        console.error(e)
        process.exit(1);
    }
}