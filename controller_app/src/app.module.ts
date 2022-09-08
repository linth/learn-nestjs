import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
