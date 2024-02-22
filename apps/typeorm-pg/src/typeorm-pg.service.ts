import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeormPgService {
  getHello(): string {
    return 'Hello World!';
  }
}
