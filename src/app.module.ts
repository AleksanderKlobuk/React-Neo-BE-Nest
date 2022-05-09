import {  Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './item/item.module';
import { TodosModule } from './todos/todos.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),

    MongooseModule.forRoot("mongodb+srv://Aleksander80:1990al@cluster0.uys1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),

    UsersModule,
    AuthModule,
    ItemModule,
    TodosModule,
    ProductsModule,    
  ],
  controllers: [AppController],
  providers:[AppService] 

})
export class AppModule {}


