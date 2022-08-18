import { Controller, Get } from '@nestjs/common';
import { appendFile } from 'fs';
import { AppService } from './app.service';


// controller definition.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/name')
  getHelloName(): string {
    return this.appService.getHelloName('george');
  }

  // method: get, post, patch, delete, ..., etc.
}
