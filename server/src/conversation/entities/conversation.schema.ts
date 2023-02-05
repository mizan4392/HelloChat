import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Conversation {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @ApiProperty({
    description: 'members',
  })
  @Prop({ type: mongoose.Schema.Types.Array })
  members: string[];

  @ApiProperty({
    required: false,
    description: 'createdAt',
  })
  @Prop({ type: mongoose.Schema.Types.Date, required: false })
  createdAt?: Date;
}

export type ConversationDocument = Conversation & Document;

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
