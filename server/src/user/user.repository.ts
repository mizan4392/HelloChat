import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schema/User.Schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async finOne(userFactoryQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFactoryQuery);
  }

  async find(userFactoryQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(userFactoryQuery);
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFactoryQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFactoryQuery, user);
  }
}
