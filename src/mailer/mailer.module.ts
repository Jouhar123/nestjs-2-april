import { Module } from '@nestjs/common';
import { EmailService } from './mailer.service';
import { ConfigModule } from '@nestjs/config';
import { EmailController } from './mailer.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    })
  ],
  providers: [EmailService],
  controllers: [EmailController], 
})
export class MailModule {}
