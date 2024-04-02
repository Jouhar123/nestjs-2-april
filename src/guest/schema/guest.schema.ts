import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Guest{ 

@Prop({})
firstName:string;
@Prop({})
lastName:string;
@Prop({})
email:string;
@Prop({})
phone:string;
@Prop({})
checkInDate:string;
@Prop({})
checkOutDate:string;
@Prop({})
Aadhar:number;
@Prop({})
Aadress:string;
@Prop({})
Adult:number;
@Prop({})
Child:number;



@Prop({})
numOfGuests:number;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);