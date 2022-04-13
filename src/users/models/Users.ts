import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({versionKey: false /*We do not want to deal with varsioning in database  */})
export class User extends Document{
    @Prop()
    email:string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);