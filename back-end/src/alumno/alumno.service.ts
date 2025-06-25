import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alumno } from './schemas/alumno.schema';
import { CreateAlumnoDto } from './dto/create-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(@InjectModel(Alumno.name) private alumnoModel: Model<Alumno>) {}

  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const alumno = new this.alumnoModel(createAlumnoDto);
    return alumno.save();
  }

  async findByGrado(grado: string): Promise<Alumno[]> {
    return this.alumnoModel.find({ grado }).exec();
  }

  async findAll(): Promise<Alumno[]> {
    return this.alumnoModel.find().exec();
  }

  async findOneById(id: string): Promise<Alumno> {
    const alumno = await this.alumnoModel.findById(id).exec();
    if (!alumno) throw new NotFoundException('Alumno no encontrado');
    return alumno;
  }

  async update(id: string, updateAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const alumno = await this.alumnoModel.findByIdAndUpdate(id, updateAlumnoDto, { new: true }).exec();
    if (!alumno) throw new NotFoundException('Alumno no encontrado');
    return alumno;
  }

  async delete(id: string): Promise<Alumno> {
    const alumno = await this.alumnoModel.findByIdAndDelete(id).exec();
    if (!alumno) throw new NotFoundException('Alumno no encontrado');
    return alumno;
  }
}
