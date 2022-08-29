/**
 * controller.
 * 
 * Reference:
 *  - https://docs.nestjs.com/controllers
 */

import { Controller, Get, Post, Put, Patch, Delete, Req, HttpCode, Ip } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

    // Using this built-in method, when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON.

    @Get('')
    // When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it.
    findAll(): string {
        return 'This action return all cats.';
    }

    @Get('several')
    findSeveralCat(@Req() request: Request, @Ip() ip: string): string {
        console.log(request);
        console.log('ip', ip);        
        return `we find several cats.`
    }
}
