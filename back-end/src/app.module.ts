import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoModule } from './alumno/alumno.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Para que ConfigService esté disponible en todo el proyecto
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AlumnoModule,
  ],
})
export class AppModule {}
