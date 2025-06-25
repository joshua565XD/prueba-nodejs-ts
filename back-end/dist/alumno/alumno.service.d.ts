import { Model } from 'mongoose';
import { Alumno } from './schemas/alumno.schema';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
export declare class AlumnoService {
    private alumnoModel;
    constructor(alumnoModel: Model<Alumno>);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findByGrado(grado: string): Promise<Alumno[]>;
    findAll(): Promise<Alumno[]>;
    findOneById(id: string): Promise<Alumno>;
    update(id: string, updateAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    delete(id: string): Promise<Alumno>;
}
