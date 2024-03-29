import { Module, Logger } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';


@Module({
  imports: [],
  controllers: [LoggingController],
  providers: [
    LoggingService, 
    {
      provide: 'UsersLogger',
      useFactory: () => {
        return new Logger('Users');
      },
    }
  ],
})
export class LoggingModule {}
