import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import console from 'console';
import { Model } from 'mongoose';
import{UserInterface} from './user.model'

const users = [{name:"me", email:"al@al.com",password:"123" }];

@Injectable()
export class UsersService{

    constructor(@InjectModel("Users")private readonly userModel: Model<UserInterface>) {}



    getUser(){
    return users ;}

    async add(name:string, email:string, password:string){
        const newUser = new this.userModel ({name:name,email:email,password:password});
        const result = await newUser.save();
        /*console.log(result)*/
        return "userID";
    }

}
