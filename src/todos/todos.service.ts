import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodosDocument } from './schema/todos.schema';
import {Model} from "mongoose"

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodosDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  };

  async findAll() {
    return this.todoModel.find();
  }

  async findOne(todo: string) {
    return this.todoModel.findOne({todo});
  }

  async update(todo: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.updateOne({todo}, {$set:{...updateTodoDto}});
  }

  async remove(todo: string) {
    return this.todoModel.deleteOne({todo});
  }
}
