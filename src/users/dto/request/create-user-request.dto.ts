import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserRequest {
    @IsEmail()/*This will allow to show an error if email is not submitted  */
    email: string;

    @IsString()
    @IsNotEmpty()/*This will allow to show an error if passowrd box is empty */
    password: string;
}