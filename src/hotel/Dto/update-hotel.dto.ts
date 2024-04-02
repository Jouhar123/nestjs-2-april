import { IsBoolean, IsOptional, IsString } from "class-validator";


export class UpdateHotelDto{

    @IsOptional()
    @IsString()
    name:string;
    @IsOptional()
    @IsBoolean()
    is_active:string;

}