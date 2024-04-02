import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateGuestDto {
    // @IsNotEmpty()
    @IsString()
    firstName: string;
    // @IsNotEmpty()
    @IsString()
    lastName: string;
    // @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    phone: string;
    @IsNotEmpty()
    @IsString()
    // @IsDate()
    checkInDate: string;
    @IsNotEmpty()
    // @IsNumber()
    @IsString()
    checkOutDate: string;
    @IsNotEmpty()
    @IsNumber()
    Aadhar: number;
    @IsNotEmpty()
    @IsString()
    Aadress: string;
    @IsNotEmpty()
    @IsNumber()
    Adult: number;
    @IsNotEmpty()
    @IsNumber()
    Child: number;


    @IsNotEmpty()
    @IsNumber()
    numOfGuests: number;
}
