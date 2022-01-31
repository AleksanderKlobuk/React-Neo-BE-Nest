import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}
  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Post()
  addUser(@Body()body:{name:string, email:string, password:string,}){
    return this.appService.add(body.name, body.email, body.password,);
  }
}
