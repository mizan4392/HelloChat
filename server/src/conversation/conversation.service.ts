import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConversationRepository } from './conversation.repository';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { CreateMessageDto } from '../message/dto/create-message.dto';
import { UpdateMessageDto } from '../message/dto/update-message.dto';

@Injectable()
export class ConversationService {
  constructor(
    private readonly conversationRepository: ConversationRepository,
  ) {}
  createConversation(data: CreateConversationDto) {
    const convData = {
      members: [data.senderId, data.receiverId],
    };

    try {
      return this.conversationRepository.create(convData);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  findUserConversation(userId: string) {
    return this.conversationRepository.find({
      members: {
        $in: [userId],
      },
    });
  }

  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
