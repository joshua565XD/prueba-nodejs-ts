import 'dotenv/config';  // Debe ir al inicio
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  console.log('Mongo URI:', process.env.MONGODB_URI); // Imprime la URI para verificar que cargó bien

  const app = await NestFactory.create(AppModule);

  app.enableCors();  // Habilita CORS para permitir peticiones desde otros orígenes (como tu frontend)

  const config = new DocumentBuilder()
    .setTitle('API Alumnos')
    .setDescription('API REST para gestión de alumnos')
    .setVersion('1.0')
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
