import { Optional } from "@nestjs/common";
import { IsString, MaxLength, MinLength,IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class AddUserDto {


    @IsString()
    @IsNotEmpty()

    username:string;
    
    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsString()
    @IsNotEmpty()
    pwd:string;

   
    


   

}