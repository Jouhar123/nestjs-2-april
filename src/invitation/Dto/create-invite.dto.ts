import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Status } from "../schema/Invite.schema";


export class CreateInviteDto{
    @IsNotEmpty()
    @IsString()
    invitee:string
    @IsNotEmpty()
    @IsString()
    inviter:string
    @IsNotEmpty()
    @IsEnum(Status,{message:'Status must be Completed or Pending'})
    status:Status
}