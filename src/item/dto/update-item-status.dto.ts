import { IsEnum } from "class-validator";
import { ItemStatus } from "../item.model";

export class UpdateItemStatusDto{
    @IsEnum(ItemStatus)//If status is at least one of values in Task Status
    status:ItemStatus
}