

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  totalroom: number;

  @Prop({ required: true })
  password: string;

  @Prop([
    {
      roomNumber: { type: String, required: true },
      roomType: { type: String, required: true },
      amenities: { type: [String], default: [] },
    },
  ])
  rooms: {
    roomNumber: string;
    roomType: string;
    amenities: string[];
  }[];
}

export const UserSchema = SchemaFactory.createForClass(User);

