import { Optional } from "@nestjs/common";
import { IsString, MaxLength, MinLength,IsNotEmpty, IsOptional, IsNumber } from "class-validator";

import { SkillEntity } from "../../skill/entities/skill.entity";
import { UserEntity } from "../../user/entities/user.entity";
export class AddCvDto {


    @IsString()
    @IsNotEmpty()

    name:string;
   
    @IsString()
    @IsNotEmpty()
    fisrtname:string;
   
    @IsNumber()
    @IsNotEmpty()
    age:number;

    @IsString()
   @IsNotEmpty()
    path:string;
  
    @IsString()
   @IsNotEmpty()
    job:string;
    
    @IsString()
    @IsNotEmpty()
    cin:string;
    
    
    @IsNotEmpty()
    user: UserEntity;

    @IsOptional()
    skills:SkillEntity[]

 
    
   
   

}