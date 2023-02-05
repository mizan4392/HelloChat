import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Message {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  id?: string;

  @ApiProperty({
    required: true,
    description: 'conversationId',
  })
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  conversationId: string;

  @ApiProperty({
    required: true,
    description: 'senderId',
  })
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  senderId: string;

  @ApiProperty({
    required: true,
    description: 'text',
  })
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  text: string;

  @ApiProperty({
    required: false,
    description: 'createdAt',
  })
  @Prop({ type: mongoose.Schema.Types.Date, required: false })
  createdAt?: Date;
}

export type MessageDocument = Message & Document;

export const MessageSchema = SchemaFactory.createForClass(Message);
