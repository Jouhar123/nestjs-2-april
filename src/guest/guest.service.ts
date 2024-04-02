import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Guest } from './schema/guest.schema';

@Injectable()
export class GuestService {
    constructor(
        @InjectModel(Guest.name)
        private guestModel: Model<Guest>
    ) {}

    async findAll(query: { Page?: number, keyword?: string }): Promise<Guest[]> {
        const resPerPage = 2;
        const currentPage = query.Page || 1;
        const skip = resPerPage * (currentPage - 1);

        const keyword = query.keyword ? {
            name: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {};

        const guests = await this.guestModel.find({ ...keyword }).limit(resPerPage).skip(skip);
        return guests;
    }

    async create(guest: Guest): Promise<Guest> {
        const res = await this.guestModel.create(guest);
        return res;
    }

    async findById(id: string): Promise<Guest> {
        if (!mongoose.isValidObjectId(id)) {
            throw new BadRequestException('Invalid guest ID');
        }

        const guest = await this.guestModel.findById(id);
        if (!guest) {
            throw new NotFoundException('Guest not found');
        }

        return guest;
    }

    async updateById(id: string, guest: Guest): Promise<Guest> {
        return await this.guestModel.findByIdAndUpdate(id, guest, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<void> {
        await this.guestModel.findByIdAndDelete(id);
    }
}
