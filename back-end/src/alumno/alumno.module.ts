import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { Alumno, AlumnoSchema } from './schemas/alumno.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alumno.name, schema: AlumnoSchema }])
  ],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}
