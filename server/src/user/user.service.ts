import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findByUserNameOrEmail(userName?: string, email?: string) {
    return 'findByUserNameOrEmail';
    // const userQuery = this.userRepo.createQueryBuilder('u');
    // if (userName && email) {
    //   userQuery
    //     .where('u.userName = :userName', { userName: userName })
    //     .orWhere('u.email = :email', { email: email });
    // } else {
    //   if (userName) {
    //     userQuery.where('u.userName = :userName', { userName: userName });
    //   }
    //   if (email) {
    //     userQuery.where('u.email = :email', { email: email });
    //   }
    // }
    // return userQuery.getOne();
  }

  findByUserId(userId) {
    // return this.userRepo.findOne({
    //   where: {
    //     id: userId,
    //   },
    // });
    return 'findByUserId';
  }

  createUser(userInfo: Partial<CreateUserDto>) {
    // return this.userRepo.save(userInfo);
    return this.userRepository.create(userInfo);
  }

  async update(userId, payload, files: any) {
    // if (files?.length) {
    //   for (const file of files) {
    //     if (file.originalname?.includes('cover_pic_')) {
    //       const fileUrl = `/user/cover/${userId}/${uuidv4()}_${file.originalname
    //         .split(' ')
    //         .join('_')}`;
    //       await this.storageService.putFile(file, fileUrl);
    //       payload.coverPic = fileUrl;
    //     }
    //     if (file.originalname?.includes('profile_pic_')) {
    //       const fileUrl = `/user/cover/${userId}/${uuidv4()}_${file.originalname
    //         .split(' ')
    //         .join('_')}`;
    //       await this.storageService.putFile(file, fileUrl);
    //       payload.profilePic = fileUrl;
    //     }
    //   }
    // }
    // return this.userRepo.update({ id: userId }, payload);
    return 'update';
  }
}
