import { Body, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  @Get()
  findAll() {
    return `This action returns all post`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} post`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} post`;
  }
}
