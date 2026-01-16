export class CreateUserDto {
  name: string;
  age: number;
  file: Express.Multer.File[];
}
