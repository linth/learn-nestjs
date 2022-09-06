/**
 * controller.
 * 
 * Reference:
 *  - https://docs.nestjs.com/controllers
 */

import { Controller, Get, Post, Put, Patch, Delete, Req, HttpCode, Ip, Header, Redirect, Query, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

    // Using this built-in method, when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON.

    @Get('')
    // When it returns a JavaScript primitive type (e.g., string, number, boolean), however, Nest will send just the value without attempting to serialize it.
    findAll(): string {
        return 'This action return all cats.';
    }

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

    // @param
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `the action returns a #${id} cat.`;
    }
}

