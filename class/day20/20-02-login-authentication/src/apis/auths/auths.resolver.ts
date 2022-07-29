import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { AuthsService } from './auths.service';
import * as bcrypt from 'bcrypt';
import { UnprocessableEntityException } from '@nestjs/common';

@Resolver()
export class AuthsResolver {
  constructor(
    private readonly authsService: AuthsService, //
    private readonly usersService: UsersService, //
  ) {}
  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
  ) {
    // 1. 로그인(이메일이 일치하는 사용자를 찾는다)
    const user = await this.usersService.findOne({ email });

    // 2. 일치하는 유저가 업으면!? 에러 발생
    if (!user) {
      throw new UnprocessableEntityException('존재하지 않는 이메일입니다.');
    }

    // 3. 일치하는 유저가 있지만, 비밀번호가 일치하지 않으면!? 에러 발생
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');
    }
    // 4. 일치하는 유저가 있고, 비밀번호가 일치하면?!
    // => accessToken(= JWT)를 만들어서 브라우저에 전달한다.
    return this.authsService.getAccessToken({ user });
  }
}
