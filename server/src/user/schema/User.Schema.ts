import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @ApiProperty({
    required: true,
    description: 'User Name',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: true, unique: true })
  userName: string;

  @ApiProperty({
    required: true,
    description: 'Full Name',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  fullName: string;

  @ApiProperty({
    required: true,
    description: 'Email',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  password: string;

  @ApiProperty({
    required: false,
    description: 'Profile Pic',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  profilePic?: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, required: false })
  isAdmin?: boolean;

  @ApiProperty({
    required: false,
    description: 'bio',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  bio?: string;

  @ApiProperty({
    required: false,
    description: 'city',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  city?: string;

  @ApiProperty({
    required: false,
    description: 'address',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  address?: string;

  @ApiProperty({
    required: false,
    description: 'website',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: false })
  website?: string;

  @ApiProperty({
    required: false,
    description: 'createdAt',
  })
  @Prop({ type: mongoose.Schema.Types.Date, required: false })
  createdAt?: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
