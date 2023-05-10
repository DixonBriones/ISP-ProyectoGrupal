import { Schema } from "mongoose";

export const GastoSchema = new Schema({
    usuario_id: String,
    categoria_id: String,
    descripcion: String,
    monto: Number,
    fecha: Date
});

