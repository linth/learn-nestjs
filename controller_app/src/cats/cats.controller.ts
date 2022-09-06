/**
 * controller.
 * 
 * Reference:
 *  - https://docs.nestjs.com/controllers
 */

import { Controller, Get, Post, Put, Patch, Delete, Req, HttpCode, Ip, Header, Redirect, Query, Param, Res, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
// import { Observable, of } from 'rxjs/dist/types';

@Controller('cats')
export class CatsController {

    // Using this built-in method, when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON.

    @Get()
    // please refer to https://docs.nestjs.com/controllers#asynchronicity
    // When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it.
    async findAll(): Promise<any[]> {
        // return 'This action return all cats.';
        // promise example.
        let res = [];
        res.push('dog');
        res.push('lion');

        return res;
    }

    // @Get('findAll2')
    // findAll2(): Observable<any[]> {
    //     return of([]);
    // }

    // url: https://docs.nestjs.com/controllers

    @Get('several')
    findSeveralCat(@Req() request: Request, @Ip() ip: string): string {
        console.log(request);
        console.log('ip', ip);        
        return `we find several cats.`
    }

    // http code & header.
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create() {
        // TODO: Res() has problems, @Res() res: Response
        return `this action adds a new cat.`;
    }

    // redirection
    @Get('findnestdoc')
    @Redirect('https://docs.nestjs.com', 302)
    changeToYahoo(@Query('version') version) {
        
        if (version && version === '5') {
            console.log('version', version);
            
            // 轉址 https://....
            // change to http://localhost:3000/cats/findnestdoc/v5
            return { url: 'v5' };
        } else {
            console.log('version', version);
            // 內部轉址
            // change to https://www.google.com/
            return { url: 'https://www.google.com/' };
        }
    }

    // @Param() example.
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `the action returns a #${id} cat.`;
    }
}

