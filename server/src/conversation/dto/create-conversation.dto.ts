import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'senderId',
  })
  @IsString()
  senderId: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'receiverId',
  })
  @IsString()
  receiverId: string;
}
