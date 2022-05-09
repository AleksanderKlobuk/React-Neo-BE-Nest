import { IsEnum, IsOptional, IsString } from "class-validator";
import { ItemStatus } from "../item.model";

export class GetItemsFilterDto{
    @IsOptional()//Decorator applied to make sure that they are optional from validation point of view
    @IsEnum(ItemStatus)
    status?: ItemStatus;
    @IsOptional()
    @IsString()//Decorator applied to  make sure that they are optional from validation point of view
    search?: string;
}