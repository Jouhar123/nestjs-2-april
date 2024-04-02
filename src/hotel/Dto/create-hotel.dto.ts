import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class CreateHotelDto{
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @IsBoolean()
    is_active:string;
}