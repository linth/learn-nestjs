import { Injectable } from "@nestjs/common";
import { DataSource, EntityManager, Repository } from "typeorm";
import { Post } from "./entities/post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { InjectDataSource, InjectEntityManager } from "@nestjs/typeorm/dist";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepoitory: Repository<Post>,

    @InjectEntityManager()
    private postManager: EntityManager,

    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  create(createPostDto: CreatePostDto) {
    const newPost = this.postRepoitory.create(createPostDto);
    return this.postRepoitory.save(newPost);
  }

  async findAll() {
    await this.dataSource.createQueryBuilder(Post, "post")
    .getMany();

    const posts = this.postRepoitory.find();
    return posts;
  }

  async findOne(id: number) {
    const postWithRepository = await this.postRepoitory.findOneBy({ id });

    const postWithQueryBuilder = await this.postRepoitory
      .createQueryBuilder("post")
      .where("post.id= :postId", { postId: id })
      .getOne()


    const postFromEntityManager = await this.postManager
      .createQueryBuilder(Post, "post")
      .where("post.id= :postId", { postId: id })
      .getOne()

    const postFromDataSource = await this.dataSource
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .where("post.id= :postId", { postId: id })
      .getOne()

    return {
      postWithRepository,
      postWithQueryBuilder,
      postFromEntityManager,
      postFromDataSource
    };
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepoitory.findOneBy({ id });
    post.title = updatePostDto.title;
    const updatedPost = this.postRepoitory.save(post);
    return updatedPost
  }

  async remove(id: number) {
    const post = await this.postRepoitory.findOneBy({ id })
    const removedPost = this.postRepoitory.remove(post);
    return removedPost;

  }
}