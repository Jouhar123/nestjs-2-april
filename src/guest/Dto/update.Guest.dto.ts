import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateGuestDto {
    @IsOptional()
    @IsString()
    firstName: string;
    @IsOptional()
    @IsString()
    lastName: string;
    @IsOptional()
    @IsEmail()
    email: string;
    @IsOptional()
    @IsString()
    phone: string;
    @IsOptional()
    @IsString()
    // @IsNumber()
    checkInDate: string;
    @IsOptional()
    @IsString()
    // @IsNumber()
    checkOutDate: string;
    @IsOptional()
    @IsNumber()
    Aadhar: number;
    @IsOptional()
    @IsString()
    Aadress: string;
    @IsOptional()
    @IsNumber()
    Adult: number;
    @IsOptional()
    @IsNumber()
    Child: number;



    @IsOptional()
    @IsNumber()
    numOfGuests: number;
}
