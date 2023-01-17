import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email.service';
import { environment } from './environment/environment';
import { LocalStorageService } from './storage.service';
import { UserModule } from './user/user.module';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
@Global()
@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl, {
      dbName: 'HelloChat',
    }),
    MailerModule.forRootAsync({
      useFactory: () => {
        return {
          transport: {
            service: 'gmail',
            auth: {
              user: 'md.mizan3079@gmail.com',
              pass: 'qxcznrullqdmgber',
            },
          },
          defaults: {
            from: `"Socialbook " <${environment.email.defaultSender}>`,
          },
          template: {
            dir: __dirname + '../views',
            adapter: new HandlebarsAdapter(),
          },
        };
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocalStorageService, EmailService],
  exports: [LocalStorageService, EmailService],
})
export class AppModule {}
