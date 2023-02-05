import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository } from 'src/utils/mongo.repository';
import { Message, MessageDocument } from './entities/message.entity';

@Injectable()
export class MessageRepository extends MongoRepository<MessageDocument> {
  constructor(
    @InjectModel(Message.name)
    messageModel: Model<MessageDocument>,
  ) {
    super(messageModel);
  }
}
