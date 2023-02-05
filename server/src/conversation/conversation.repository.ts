import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository } from 'src/utils/mongo.repository';
import {
  Conversation,
  ConversationDocument,
} from './entities/conversation.schema';

@Injectable()
export class ConversationRepository extends MongoRepository<ConversationDocument> {
  constructor(
    @InjectModel(Conversation.name)
    conversationModel: Model<ConversationDocument>,
  ) {
    super(conversationModel);
  }
}
