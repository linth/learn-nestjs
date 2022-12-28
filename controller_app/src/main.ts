import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { 
  DocumentBuilder, 
  SwaggerModule 
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add swagger.
  const config = new DocumentBuilder()
    .setTitle('Deployment Service')
    .setDescription('Construction platform API')
    .setVersion('1.0')
    // .addTag('construction platform')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
