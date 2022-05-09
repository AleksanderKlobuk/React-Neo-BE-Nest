import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './item.model';
import { ItemController } from './item.controller';
import { ItemsRepository } from './item.repository';
import { ItemsService } from './item.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  controllers: [ItemController],
  providers: [ItemsService,ItemsRepository], /**To check if ItemRep needed */
  exports: [ItemsService],
})
export class ItemModule {}
