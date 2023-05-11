import { Schema } from "mongoose";

export const GastoSchema = new Schema({
    usuario_id: {
        type: Schema.Types.ObjectId,
        ref:'usuarios'},
    categoria_id: String,
    descripcion: String,
    monto: Number,
    fecha: Date
});

