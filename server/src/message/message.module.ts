import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { Message, MessageSchema } from './entities/message.entity';
import { JwtModule } from '@nestjs/jwt';
import { MessageRepository } from './message.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ajahasdhdk',
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([
      {
        name: Message.name,
        schema: MessageSchema,
      },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageRepository],
})
export class MessageModule {}
