import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Hotel } from './schema/hotel.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
    constructor(
        @InjectModel(Hotel.name)
        private readonly hotelModel: Model<Hotel>
    ) {}

    async findAll(queryParams: any): Promise<Hotel[]> {
        const { page = 1, keyword } = queryParams;
        const resPerPage = 2;
        const skip = resPerPage * (page - 1);
        const keywordFilter = keyword ? { name: { $regex: new RegExp(keyword, 'i') } } : {};

        return this.hotelModel.find({ ...keywordFilter }).limit(resPerPage).skip(skip);
    }

    async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
        const createdHotel = new this.hotelModel(createHotelDto);
        return createdHotel.save();
    }

    async findById(id: string): Promise<Hotel> {
        if (!mongoose.isValidObjectId(id)) {
            throw new BadRequestException('Invalid id format');
        }

        const hotel = await this.hotelModel.findById(id);
        if (!hotel) {
            throw new NotFoundException('Hotel not found');
        }
        return hotel;
    }

    async updateById(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
        const hotel = await this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true });
        if (!hotel) {
            throw new NotFoundException('Hotel not found');
        }
        return hotel;
    }

    async deleteById(id: string): Promise<Hotel> {
        const hotel = await this.hotelModel.findByIdAndDelete(id);
        if (!hotel) {
            throw new NotFoundException('Hotel not found');
        }
        return hotel;
    }
}


/*
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, mongo } from 'mongoose';
import { Hotel } from './schema/hotel.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
    constructor(
        @InjectModel(Hotel.name)
        private readonly hotelModel: Model<Hotel>
    ) {}

    async findAll(queryParams: any): Promise<Hotel[]> {
        const { page = 1, keyword } = queryParams;
        const resPerPage = 2;
        const skip = resPerPage * (page - 1);
        const keywordFilter = keyword ? {
            name: {
                $regex: new RegExp(keyword, 'i')
            }
        } : {};

        return this.hotelModel.find({ ...keywordFilter }).limit(resPerPage).skip(skip).exec();
    }

    async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
        const createdHotel = new this.hotelModel(createHotelDto);
        return createdHotel.save();
    }

    async findById(id: string): Promise<Hotel> {

        const isValidId=mongoose.isValidObjectId(id);
        if(!isValidId){
            throw new BadRequestException('id Not found plese check id');
        }
        
        const hotel = await this.hotelModel.findById(id).exec();
        if (!hotel) {
            throw new NotFoundException('Hotel not found');
        }
        return hotel;
    }

    async updateById(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
        return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true }).exec();
    }

    async deleteById(id: string): Promise<Hotel> {
        return this.hotelModel.findByIdAndDelete(id).exec();
    }
}

*/