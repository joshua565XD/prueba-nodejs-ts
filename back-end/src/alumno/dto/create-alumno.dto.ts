import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsDateString } from 'class-validator';

export class CreateAlumnoDto {

  @ApiProperty({ example: 'Ana López' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'ana.lopez@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '2011-09-22' })
  @IsDateString()
  fechaNacimiento: string;

  @ApiProperty({ example: 'Pedro López' })
  @IsString()
  nombrePadre: string;

  @ApiProperty({ example: 'Laura Gómez' })
  @IsString()
  nombreMadre: string;

  @ApiProperty({ example: '3' })
  @IsString()
  grado: string;

  @ApiProperty({ example: 'B' })
  @IsString()
  seccion: string;

  @ApiProperty({ example: '2019-02-15' })
  @IsDateString()
  fechaIngreso: string;
}
