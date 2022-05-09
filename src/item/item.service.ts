import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from './item.model';
import {v4 as uuid} from 'uuid' /*We import v4 to change generate ID's (see below on createTask() We can import with our own name instead of ve using import as uuid) */
import { CreateItemDto } from './dto/create-item.dto';
import { GetItemsFilterDto } from './dto/get-item-filter.dto';



@Injectable() /*Injectible decorator makes it possible to share this class across the app */
export class ItemsService {
private items:Item[] = []; /*We define taks array so wa can call it later. We do set Type of Task[] which is described in task.module.ts*/

    getAllItems(): Item[]{
        return this.items;
        /*Gets all tasks */
        
    }
    getItemById(id:string):Item{
        const found =  this.items.find((item)=> item.id === id)

        if (!found){
            throw new NotFoundException(`Task with ID ${id} was not found`);   
        }
        return found;

    }


    //We use void since we delete taks and we do not want it to be returned
    deleteTask(id: string):void{
        const found = this.getItemById(id)
        this.items = this.items.filter((item)=> item.id !== found.id)
    }

    updateItemStatus(id:string, status:ItemStatus) {
        const item = this.getItemById(id);
        item.status = status;
        return item;
        
    }

    createItem(/*title:string, description: string replaced by followong DTO*/createItemDto: CreateItemDto): Item {
        const {itemName, itemCount} = createItemDto;
        const item: Item = {/*All below properties should be same as in task.module IN other case we will se an error */
            id: uuid(),
            itemName,
            itemCount,
            
        };
        /*We create new task here */
        this.items.push(item);
        return item

    }
    getTaskWithFilters(filterDto:GetItemsFilterDto):Item[]{
        const {status, search} =filterDto;

        let items = this.getAllItems();

        if(status){
            items = items.filter((item)=>item.status===status);
        }
        if (search){
            items = items.filter((item)=>{
                if(item.itemName.includes(search)) {
                    return true
                }
                return false
            });
        }
        return items
    }
}
