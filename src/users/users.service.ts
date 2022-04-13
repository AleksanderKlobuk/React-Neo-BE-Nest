import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './models/Users';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor (private readonly usersRepository: UsersRepository){}

    async createUser(
        createUserRequest:CreateUserRequest):Promise<UserResponse>{
        await this.validateCreateUserRequest(createUserRequest);/*We insert validateCreateUserRequest before user is creared*/
        const user = await this.usersRepository.insertOne({
        ...createUserRequest,
        password: await hash(createUserRequest.password,10)/*here we are hashing passowrd using bcrypt */
        });
        return this.buildResponse(user);    
    }

    /*Before we create the user we want to validate user request
    If email exists we throw an error */

    private async validateCreateUserRequest(createUserRequest:CreateUserRequest):Promise<void>{
        const user = await this.usersRepository.findOneByMail(
            createUserRequest.email,);
            if (user){
                throw new BadRequestException ('This User Already Exists')
            }
    }
    /*Check if user exists by mail */
    async validateUser(email: string, passowrd:string): Promise<UserResponse>{
        const user = await this.usersRepository.findOneByMail(email);
        if (!user){
            throw new NotFoundException(`User Does Not Exist by email: '${email}'.`);

        }
        /*We check if password is valid */
        const passwordIsValid = await compare (passowrd, user.password);
        if (!passwordIsValid){
            throw new UnauthorizedException ('Credentials are not valid');
        }
        return this.buildResponse(user);
    }

    async getUserById(userId: string): Promise<UserResponse>{
        const user = await this.usersRepository.findOneById(userId)
        if (!user){ /*In case user does not exists */
            throw new NotFoundException(`User Not Found By ID '${userId}'.`)
        }
        return this.buildResponse(user);
    }





    private buildResponse(user: User): UserResponse{
        return{
            _id: user._id.toHexString(),
            email: user.email,
        }
    }
}
