import { Document } from 'mongoose';
export type AlumnoDocument = Alumno & Document;
export declare class Alumno {
    nombre: string;
    email: string;
    fechaNacimiento: Date;
    nombrePadre: string;
    nombreMadre: string;
    grado: string;
    seccion: string;
    fechaIngreso: Date;
}
export declare const AlumnoSchema: import("mongoose").Schema<Alumno, import("mongoose").Model<Alumno, any, any, any, Document<unknown, any, Alumno, any> & Alumno & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Alumno, Document<unknown, {}, import("mongoose").FlatRecord<Alumno>, {}> & import("mongoose").FlatRecord<Alumno> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
