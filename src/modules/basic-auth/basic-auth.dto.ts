import { IsNotEmpty } from 'class-validator';

export class BasicAuthLoginDTO {
  @IsNotEmpty({ message: '账号不能为空' })
  userName: string;

  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
