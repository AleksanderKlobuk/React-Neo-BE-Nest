import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum ItemStatus{
    OPEN = "Open",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}


@Schema()
export class Item{
    @Prop()
    id: string;
    @Prop()
    itemName:string;
    @Prop()
    itemCount:number;
    @Prop()
    status?:ItemStatus;
}

export const ItemSchema = SchemaFactory.createForClass(Item);



/*
export interface Item{
    id: string;
    itemName:string;
    itemCount:number;
    status?:ItemStatus;
}
*/