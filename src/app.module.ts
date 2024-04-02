import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelModule } from './hotel/hotel.module';
import { InvitationModule } from './invitation/invitation.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mailer/mailer.module';
import { GuestModule } from './guest/guest.module';






@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    HotelModule,
    InvitationModule,
    AuthModule,
    MailModule,
    GuestModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
