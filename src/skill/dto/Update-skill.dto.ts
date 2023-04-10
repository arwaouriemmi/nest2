
import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateSkillDto {
    
  


    @IsString()
    @IsNotEmpty()
    designation:string;


    
   

}