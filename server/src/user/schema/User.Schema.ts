import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  id: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true, unique: true })
  userName: string;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  fullName: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  profilePic?: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, required: false })
  isAdmin?: boolean;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  bio?: string;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  city?: string;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  address?: string;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  website?: string;

  @Prop({ type: mongoose.Schema.Types.Date, required: false })
  createdAt?: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
