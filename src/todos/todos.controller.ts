import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll() {
    return this.todosService.findAll();
  }

  @Get(':todo')
  findOne(@Param('todo') todo: string) {
    return this.todosService.findOne(todo);
  }

  @Patch(':todo')
  update(@Param('todo') todo: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(todo, updateTodoDto);
  }

  @Delete(':todo')
  remove(@Param('todo') todo: string) {
    return this.todosService.remove(todo);
  }
}
