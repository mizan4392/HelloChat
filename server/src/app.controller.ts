import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from './email.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('email')
  emailTest() {
    return this.emailService.sendEmail({
      body: 'sdsd',
      subject: 'aaaaaaa',
      to: 'md.mizan4392@gmail.com',
      from: 'test',
    });
  }
}
