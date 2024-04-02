import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Invite } from './schema/Invite.schema';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';

@Injectable()
export class InviteService {
    constructor(
        @InjectModel(Invite.name)
        private readonly inviteModel: Model<Invite>
    ) {}

    async findAll(queryParams: any): Promise<Invite[]> {
        const { page = 1, keyword } = queryParams;
        const resPerPage = 2;
        const skip = resPerPage * (page - 1);
        const keywordFilter = keyword ? {
            invitee: {
                $regex: new RegExp(keyword, 'i')
            }
        } : {};

        return this.inviteModel.find({ ...keywordFilter }).limit(resPerPage).skip(skip).exec();
    }

    async create(createInviteDto: CreateInviteDto): Promise<Invite> {
        const createdInvite = new this.inviteModel(createInviteDto);
        return createdInvite.save();
    }

    async findById(id: string): Promise<Invite> {

        if(!mongoose.isValidObjectId(id)) throw new BadRequestException('Id not found');

        const invite = await this.inviteModel.findById(id).exec();
        if (!invite) {
            throw new NotFoundException('Invite not found');
        }
        return invite;
    }

    async updateById(id: string, updateInviteDto: UpdateInviteDto): Promise<Invite> {
        return this.inviteModel.findByIdAndUpdate(id, updateInviteDto, { new: true }).exec();
    }

    async deleteById(id: string): Promise<Invite> {
        return this.inviteModel.findByIdAndDelete(id).exec();
    }
}




/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Invite } from './schema/Invite.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class InviteService {
    constructor(
        @InjectModel(Invite.name)
        private inviteModel:mongoose.Model<Invite>
    ){}
    async findAll(query:Query):Promise<Invite[]>{

        const resPerPage=2
        const currentPage=Number(query.page) || 1
        const skip=resPerPage*(currentPage -1)

        const keyword=query.keyword?{
            invitee:{
                $regex: query.keyword,
                $options:'i'
            }
        }:{}

        const invites=await this.inviteModel.find({...keyword}).limit(resPerPage).skip(skip);
        return invites;
    }
    async create(invite:Invite):Promise<Invite>{
        const res=await this.inviteModel.create(invite);
        return res;
    }
    async findById(id:string):Promise<Invite>{
        const invites=await this.inviteModel.findById(id);

        if( !invites ){
            throw new NotFoundException('No invite with id found');
    }
    return invites;

}
async updateById(id:string,invite:Invite):Promise<Invite>{
    return await this.inviteModel.findByIdAndUpdate(id,invite,{
        new:true,
        runValidators:true,
    });
    }
    async deleteById(id: string): Promise<Invite> {
        return await this.inviteModel.findByIdAndDelete(id);
    }
    
}
*/