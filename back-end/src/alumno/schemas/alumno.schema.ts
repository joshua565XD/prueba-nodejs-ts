import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlumnoDocument = Alumno & Document;

@Schema()
export class Alumno {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true, unique: true })  // el email debe ser único
  email: string;

  @Prop({ required: true })
  fechaNacimiento: Date;

  @Prop({ required: true })
  nombrePadre: string;

  @Prop({ required: true })
  nombreMadre: string;

  @Prop({ required: true })
  grado: string;

  @Prop({ required: true })
  seccion: string;

  @Prop({ required: true })
  fechaIngreso: Date;
}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
