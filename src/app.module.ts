
import {  Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRootAsync({
      /*We specify imports for root module here*/
      imports:[ConfigModule],
      /*useFactory Allow us to inject services*/
      useFactory: async(configService:ConfigService)=>({
        /*We Specify the URI  */
        uri: configService.get<string>('MONGODB_URI')/*from .env*/
      }),
      inject: [ConfigService]
     }),
    UsersModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers:[AppService] 

})
export class AppModule {}


