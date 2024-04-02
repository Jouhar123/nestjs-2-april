import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Hotel{

    @Prop()
    name:string;
    
    @Prop()
    is_active:Boolean;

}
export const HotelSchema =  SchemaFactory.createForClass(Hotel);