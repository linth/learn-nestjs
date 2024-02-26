import { NestFactory } from '@nestjs/core';
import { TypeormPgModule } from './typeorm-pg.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const startTime = new Date().getTime();

async function bootstrap() {
  const app = await NestFactory.create(TypeormPgModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    cors: true,
  });

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

  Logger.log(`執行到create, 耗時 ${ new Date().getTime() - startTime } ms, `);
  await app.listen(3002);
  Logger.log(`執行到listen, 耗時 ${ new Date().getTime() - startTime } ms, `);
}
bootstrap();
