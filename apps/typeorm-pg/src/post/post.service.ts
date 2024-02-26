import { Body, Delete, Get, Injectable, Param, Patch, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>
  ) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    const p = new PostEntity();
    p.title = createPostDto.title;
    p.content = createPostDto.content;
    return this.postsRepository.save(p);
  }

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PostEntity> {
    return this.postsRepository.findOneBy({id});
  }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  async updatePartical(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto): Promise<PostEntity> {
    await this.postsRepository.update(id, updatePostDto);
    return this.postsRepository.findOne({where: {id}});
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
