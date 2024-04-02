import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './schema/hotel.schema';
import { UpdateHotelDto } from './Dto/update-hotel.dto';
import { CreateHotelDto } from './Dto/create-hotel.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('hotel')
export class HotelController {

    constructor(private hotelService:HotelService){}
        
        @Get()
        async getAllhotel(@Query() query:ExpressQuery):Promise<Hotel[]>{
            return this.hotelService.findAll(query);
        }

        @Post()
        async createhotel(
            @Body()
            hotel:CreateHotelDto,
        ):Promise<Hotel>{
            
            return this.hotelService.create(hotel);
        }

        @Get(':id')
        async gethotel(
            @Param("id") id:string
        ):Promise<Hotel>{
            return this.hotelService.findById(id);
        }

        @Put(':id')
        async updatehotel(@Param("id") id: string ,
            @Body()
            hotel:UpdateHotelDto,
        ):Promise<Hotel>{
            
            return this.hotelService.updateById(id,hotel);
        }

        @Delete(':id')
        async Deletehotel(@Param("id") id: string ,):Promise<Hotel>{
            
            return this.hotelService.deleteById(id);
        }

    }

