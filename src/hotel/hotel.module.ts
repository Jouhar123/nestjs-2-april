import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './schema/hotel.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Hotel',schema:HotelSchema}])],
  providers: [HotelService],
  controllers: [HotelController]
})
export class HotelModule {}
