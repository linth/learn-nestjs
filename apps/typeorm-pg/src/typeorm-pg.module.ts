import { Module } from '@nestjs/common';
import { TypeormPgController } from './typeorm-pg.controller';
import { TypeormPgService } from './typeorm-pg.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [TypeormPgController],
  providers: [TypeormPgService],
})
export class TypeormPgModule {}
