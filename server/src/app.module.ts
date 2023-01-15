import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/environment';
import { LocalStorageService } from './storage.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl, {
      dbName: 'HelloChat',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocalStorageService],
  exports: [LocalStorageService],
})
export class AppModule {}
