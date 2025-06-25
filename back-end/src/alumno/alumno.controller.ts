import { Controller, Post, Get, Param, Body, UseGuards, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiBasicAuth } from '@nestjs/swagger';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { BasicAuthGuard } from '../auth/basic-auth.guard';
import { ValidationPipe } from '@nestjs/common';

@ApiTags('alumnos')
@ApiBasicAuth()
@Controller()
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @UseGuards(BasicAuthGuard)
  @Post('crear-alumno')
  create(@Body(new ValidationPipe()) dto: CreateAlumnoDto) {
    return this.alumnoService.create(dto);
  }

  @UseGuards(BasicAuthGuard)
  @Get('consultar-alumno/:grado')
  async findByGrado(@Param('grado') grado: string) {
    // Si quieres permitir listar todos, puedes aceptar "all" como grado especial
    if (grado.toLowerCase() === 'all') {
      return this.alumnoService.findAll();
    }
    return this.alumnoService.findByGrado(grado);
  }

  @UseGuards(BasicAuthGuard)
  @Get('alumno/:id')
  async findOne(@Param('id') id: string) {
    return this.alumnoService.findOneById(id);
  }

  @UseGuards(BasicAuthGuard)
  @Put('alumno/:id')
  async update(@Param('id') id: string, @Body() updateAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.update(id, updateAlumnoDto);
  }

  @UseGuards(BasicAuthGuard)
  @Delete('alumno/:id')
  async delete(@Param('id') id: string) {
    return this.alumnoService.delete(id);
  }
}
