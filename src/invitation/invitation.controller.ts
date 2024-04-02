import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Invite } from './schema/Invite.schema';
import { CreateInviteDto } from './Dto/create-invite.dto';
import { UpdateInviteDto } from './Dto/update-invite.dto';
import { InviteService } from './invitation.service';

@Controller('invite')
export class InvitationController {
    constructor(private inviteService: InviteService) {}

    @Get()
    async getAllInvite(@Query() query: any): Promise<Invite[]> {
        return this.inviteService.findAll(query);
    }

    @Post()
    async createInvite(@Body() invite: CreateInviteDto): Promise<Invite> {
        return this.inviteService.create(invite);
    }

    @Get(':id')
    async getInvite(@Param("id") id: string): Promise<Invite> {
        return this.inviteService.findById(id);
    }

    @Put(':id')
    async updateInvite(@Param('id') id: string, @Body() invite: UpdateInviteDto): Promise<Invite> {
        return this.inviteService.updateById(id, invite);
    }

    @Delete(':id')
    async deleteInvite(@Param('id') id: string): Promise<Invite> {
        return this.inviteService.deleteById(id);
    }
}




/*
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Invite } from './schema/Invite.schema';
import { CreateInviteDto } from './Dto/create-invite.dto';
import { UpdateInviteDto } from './Dto/update-invite.dto';
import { InviteService } from './invitation.service';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('invite')
export class InvitationController {
    constructor(private inviteService:InviteService){}

    @Get()
    async  getAllInvite(@Query() query:ExpressQuery):Promise<Invite[]>{
        return this.inviteService.findAll(query);

}
    @Post() 
    async createInvite(
        @Body()
        invite:CreateInviteDto,
    ):Promise<Invite>{
        return  this.inviteService.create(invite);
    }
    @Get(':id')
    async getInvite(
        @Param("id")id:string
    ):Promise<Invite>{
        return this.inviteService.findById(id);
    }
    @Put( ':id' )
    async updateInvite(@Param('id')id:string,
    @Body()
    invite:UpdateInviteDto,
    ):Promise<Invite>{
        return this.inviteService.updateById(id,invite);
    }

    @Delete(':id')
    async deleteInvite(
      @Param('id') id: string,):Promise<Invite>{
        return this.inviteService.deleteById(id);
      }

}
*/