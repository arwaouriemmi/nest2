import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { IsString, MaxLength, MinLength } from "class-validator";
export class AddSkillDto {


    @IsString()
    @IsNotEmpty()

    designation:string;

   

}