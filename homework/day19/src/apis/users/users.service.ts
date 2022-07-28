import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}
  ////////////////////////////////QUERY////////////////////////////////////
  findAll() {
    return this.usersRepository.find();
  }

  findOne({ userId }) {
    return this.usersRepository.findOne({
      where: { id: userId }, //
    });
  }
  ////////////////////////////////MUTATION////////////////////////////////////

  // 생성
  async create({ createUserInput }) {
    // 이미 존재하는 이메일, 번호를 사용하는 경우 예외를 던진다.
    const existUser = await this.usersRepository.findOne({
      where: {
        email: createUserInput.email,
        userPhone: createUserInput.userPhone,
      },
    });

    if (existUser) {
      throw new ConflictException('이미 존재하는 이메일, 번호입니다.');
    }

    const result = await this.usersRepository.save({
      ...createUserInput,
    });
    return result;
  }

  // 수정
  async update({ userId, updateUserInput }) {
    const myUser = await this.usersRepository.findOne({
      where: { id: userId },
    });

    const result = await this.usersRepository.save({
      ...myUser,
      id: userId,
      ...updateUserInput,
    });
    return result;
  }

  // 삭제
  async delete({ userId }) {
    const result = await this.usersRepository.softDelete({ id: userId });
    return result.affected ? true : false;
  }
}
