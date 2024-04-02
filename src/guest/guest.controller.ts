import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { GuestService } from "./guest.service";
import { Guest } from "./schema/guest.schema";
import { CreateGuestDto } from "./Dto/create.Guest.dto";
import { UpdateGuestDto } from "./Dto/update.Guest.dto";

@Controller('guest')
export class GuestController {
    constructor(private guestService: GuestService) {}
    @Get()
async getAllGuest(@Query() query: any): Promise<Guest[]> {
    return this.guestService.findAll(query);
}
@Post()
async createGuest(@Body() guest: CreateGuestDto): Promise<Guest> {
    return this.guestService.create(guest);
}
@Get(':id')
async getGuest(@Param("id") id: string): Promise<Guest> {
    return this.guestService.findById(id);
}
@Put(':id')
async updateGuest(@Param("id") id: string, @Body() guest: UpdateGuestDto): Promise<Guest> {
    return this.guestService.updateById(id, guest);
}
@Delete(':id')
async deleteGuest(@Param("id") id: string): Promise<void> {
    await this.guestService.deleteById(id);
}
}







    /*
        
    @Get()
    async getAllGuest(@Query() query: any): Promise<Guest[]> {
        return this.guestService.findAll(query);
    }

    @Post()
    async createGuest(@Body() guest: CreateGuestDto): Promise<Guest> {
        return this.guestService.create(guest);
    }

    @Get(':id')
    async getGuest(@Param("id") id: string): Promise<Guest> {
        return this.guestService.findById(id);
    }

    @Put(':id')
    async updateGuest(@Param("id") id: string, @Body() guest: UpdateGuestDto): Promise<Guest> {
        return this.guestService.updateById(id, guest);
    }

    @Delete(':id')
    async deleteGuest(@Param("id") id: string): Promise<void> {
        await this.guestService.deleteById(id);
    }
}
*/
