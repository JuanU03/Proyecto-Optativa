import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  console.log('NestJS corriendo en http://localhost:3000');
  const config = new DocumentBuilder()
   .setTitle('App example')
   .setDescription('The app API description')
   .setVersion('1.0')
   .addTag('model')
   .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();




