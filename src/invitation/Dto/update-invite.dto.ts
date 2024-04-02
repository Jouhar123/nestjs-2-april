import { IsEnum, IsOptional, IsString } from "class-validator"
import { Status } from "../schema/Invite.schema"



export class UpdateInviteDto{
    @IsOptional()
    @IsString()
    invitee:string
    @IsOptional()
    @IsString()
    inviter:string
    @IsOptional()
    @IsEnum(Status,{message:'Status must be Completed or Pending'})
    status:Status
}