/**To check */


import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "./item.model";
import { Model } from "mongoose";

@Injectable()
export class ItemsRepository{
    constructor(
        @InjectModel(Item.name)
        private readonly item: Model<Item>
    ){}

    async insertOne(data: Partial<Item>): Promise<Item>{
        const item = new this.item(data);
        return item.save();
    }
    
    /*We need unique email so we need to check if submitted mail already exists*/ 
    async findOneByName(itemName: string): Promise<Item>{
        return this.item.findOne({itemName})
    }

    async findOneById(itemID: string): Promise<Item>{
        return this.item.findById(itemID);
    }

}