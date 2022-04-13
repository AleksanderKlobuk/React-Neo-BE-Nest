import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from './current-user.decorators';
import { CreateUserRequest} from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor (private readonly userService: UsersService){}

    @Post() 
    async createUser(
        /* Body with CreteUserRequest from dto */
        @Body() createUserRequest:CreateUserRequest):Promise<UserResponse>{
            return this.userService.createUser(createUserRequest);
    }
    @Get()
    @UseGuards(JwtAuthGuard)
    async getUser(@CurrentUser() user:UserResponse): Promise<UserResponse>{
        return user;
        
    }
}
