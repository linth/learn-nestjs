import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';
import { Logger } from '@nestjs/common';

const startTime = new Date().getTime();

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule, {
    // 'log', 'fatal', 'error', 'warn', 'debug', and 'verbose'.
    // logger: ['error', 'warn'],

    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    // bufferLogs: true,
  });

  // app.useLogger(app.get(MyLogger));
  Logger.log(`執行到create, 耗時 ${ new Date().getTime() - startTime } ms, `);
  await app.listen(3001);
  Logger.log(`執行到listen, 耗時 ${ new Date().getTime() - startTime } ms, `);
}
bootstrap();
