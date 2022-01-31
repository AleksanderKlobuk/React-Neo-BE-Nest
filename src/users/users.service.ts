import { Injectable } from '@nestjs/common';

const users = [{name:"me", email:"al@al.com",password:"123" }];

@Injectable()
export class UsersService{
    getUser(){
    return users ;}

    add(name:string, email:string, password:string){
        const newUser = {name,email,password};
        users.push(newUser);
        
        return newUser;
    }

}
