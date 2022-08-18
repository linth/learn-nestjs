import { Injectable } from '@nestjs/common';

// service definition.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloName(name: string): string {
    return `Hello world! ${name}`;
  }
}
