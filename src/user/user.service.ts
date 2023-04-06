import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    await this.isEmailUnique(user.email);
    await user.save();

    return user;
  }

  private async isEmailUnique(email: string) {
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new BadRequestException('Email most be unique.');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({});
  }
}
