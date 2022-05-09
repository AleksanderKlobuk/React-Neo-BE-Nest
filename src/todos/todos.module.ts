import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodosSchema } from './schema/todos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodosSchema }])],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
