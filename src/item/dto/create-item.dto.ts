
import { IsNotEmpty } from "class-validator";

export class CreateItemDto{
    @IsNotEmpty()
    itemName:string;

    @IsNotEmpty()
    itemCount:number;

}