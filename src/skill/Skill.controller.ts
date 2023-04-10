import {
    Body,
    Controller,
    Delete,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { AddSkillDto } from './dto/add-skill.dto';
import { UpdateSkillDto } from './dto/Update-skill.dto';
import { SkillEntity } from './entities/skill.entity';
import { SkillService } from './Skill.service';

@Controller('skill')
export class SkillController {
  constructor(
    private SkillService: SkillService,
  ) {}
  @Post('addskill')
  async addTodo(@Body() newSkill : AddSkillDto) : Promise<SkillEntity>{
     
      return  await this.SkillService.addSkill(newSkill);
  }
  @Patch('updateskill/:id')
  async updateTodo(@Body() newskill : UpdateSkillDto ,@Param('id', ParseIntPipe) id: number): Promise<SkillEntity>{
   
      return await  this.SkillService.updateSkill(newskill,id);
 
}
@Delete('deleteskill/:id')
async deleteTodo(@Param('id', ParseIntPipe) id: number){
  
  return this.SkillService.DeleteSkill(id);

}
}