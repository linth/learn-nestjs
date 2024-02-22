import { Module } from '@nestjs/common';
import { TypeormPgController } from './typeorm-pg.controller';
import { TypeormPgService } from './typeorm-pg.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    // Validating environment variables
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule,
    PostModule,
  ],
  controllers: [TypeormPgController],
  providers: [TypeormPgService],
})
export class TypeormPgModule {}
