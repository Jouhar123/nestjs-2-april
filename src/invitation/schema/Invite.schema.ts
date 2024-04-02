import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Status{
    COMPLETED='Completed',
    PENDING='Pending',
}


@Schema({
    timestamps:true
})

export class Invite{

    @Prop()
    invitee:string;
    @Prop()
    inviter:string;
    @Prop()
    status:Status;
}

export  const InviteSchema = SchemaFactory.createForClass(Invite); 