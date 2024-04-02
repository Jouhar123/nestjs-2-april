import { IsString, IsEmail, IsNumber, ArrayMinSize, ArrayMaxSize, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

class RoomDto {
  @IsString()
  roomNumber: string;

  @IsString()
  roomType: string;

  @IsArray()
// //   @ArrayMinSize(0)
// //   @ArrayMaxSize(10)
  amenities: string[];
}
export class UpdateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(0)
  totalroom: number;

  @IsString()
  password: string;

  @IsArray()
//   @ArrayMinSize(0)
//   @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => RoomDto)
  rooms: RoomDto[];
}



