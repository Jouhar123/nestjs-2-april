import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InviteSchema } from './schema/Invite.schema';
import { InviteService } from './invitation.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Invite',schema:InviteSchema}])],

  providers: [InviteService],
  controllers: [InvitationController]
})
export class InvitationModule {}
