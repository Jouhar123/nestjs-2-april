import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { GuestSchema } from './schema/guest.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Guest',schema:GuestSchema}])],
  controllers: [GuestController],
  providers: [GuestService]
})
export class GuestModule {}
