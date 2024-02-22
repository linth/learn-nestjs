import { Controller, Get } from '@nestjs/common';
import { TypeormPgService } from './typeorm-pg.service';

@Controller()
export class TypeormPgController {
  constructor(private readonly typeormPgService: TypeormPgService) {}

  @Get()
  getHello(): string {
    return this.typeormPgService.getHello();
  }
}
