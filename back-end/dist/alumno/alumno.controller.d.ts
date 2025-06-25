import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
export declare class AlumnoController {
    private readonly alumnoService;
    constructor(alumnoService: AlumnoService);
    create(dto: CreateAlumnoDto): Promise<import("./schemas/alumno.schema").Alumno>;
    findByGrado(grado: string): Promise<import("./schemas/alumno.schema").Alumno[]>;
    findOne(id: string): Promise<import("./schemas/alumno.schema").Alumno>;
    update(id: string, updateAlumnoDto: CreateAlumnoDto): Promise<import("./schemas/alumno.schema").Alumno>;
    delete(id: string): Promise<import("./schemas/alumno.schema").Alumno>;
}
