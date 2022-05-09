import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { GetItemsFilterDto } from './dto/get-item-filter.dto';
import { UpdateItemStatusDto } from './dto/update-item-status.dto';
import { Item } from './item.model';
import { ItemsService } from './item.service';

@Controller('items')
export class ItemController {
    /*Without mentioning private we can not use this. for taskService */ 
constructor(private itemService : ItemsService) {}

@Get()                                                                           /*Once we call get method we receive function getAllTasks which we described in service*/
getTasks(@Query() filterDto:GetItemsFilterDto):Item[] {
if (Object.keys(filterDto).length){
return this.itemService.getTaskWithFilters(filterDto);
}
else {
return this.itemService.getAllItems();                                              /*We are asking this.taskService  to use getAllTasks function */
}                                                                                     /*We assigned type of Task[] since we know that pur Get should receive data descibed in task.model*/
}


@Get('/:id')
getTaskById(@Param("id") id:string):Item{
return this.itemService.getItemById(id)
}

@Delete('/:id')  
deleteTask(@Param('id') id:string):void{
return this.itemService.deleteTask(id)
}

@Patch('/:id/status')
updateItemStatus(
@Param('id') id:string,
@Body()updateItemStatusDto:UpdateItemStatusDto): Item{
const {status} = updateItemStatusDto; 
return this.itemService.updateItemStatus(id,status)
}


@Post()
/*createTask is just a name for Post here, it is not createTask from tasks.service */
createTask(@Body() createItemDto:CreateItemDto)
/*Alternative to createTaskDto is manual insert of parameters
@Body('title')title:string, 
@Body('description')description:string*/
{
return this.itemService.createItem(createItemDto)/**Here we use createTask from tesk.service */
}
}

