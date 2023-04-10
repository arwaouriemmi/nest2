import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { SkillEntity } from "../../skill/entities/skill.entity";

export class UpdateCvDto {
    @IsString()
    @IsOptional()

    name:string;
   
    @IsString()
    @IsOptional()
    fisrtname:string;
   
    @IsNumber()
    @IsOptional()
    age:number;

    @IsString()
   @IsOptional()
    path:string;
  
    @IsString()
   @IsOptional()
    job:string;
    
    @IsString()
    @IsOptional()
    cin:string;
    

    @IsOptional()
    skills:SkillEntity[]


    
   

}