import { IsNotEmpty, IsString, MaxLength, MinLength, isNotEmpty } from "class-validator";

export class CreatePostDto {

  //TODO: 似乎測試無法validate輸入值
  @IsNotEmpty()
  @IsString()
  @MaxLength(200, {message: 'The content must be fewer than 200 characters.'})
  content: string;

  @IsNotEmpty()
  @MinLength(1, {message: 'The title must have at least 1 characters.'})
  title: string;
}
