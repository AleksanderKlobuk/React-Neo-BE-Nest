
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodosDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  todo: string;

}

export const TodosSchema = SchemaFactory.createForClass(Todo);