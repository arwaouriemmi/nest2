import { NestFactory } from "@nestjs/core";
import { SkillModule } from '../skill/Skill.module';
import { SkillService } from "../skill/Skill.service";
import {  randSkill } from '@ngneat/falso';
import { AppModule } from "../app.module";
async function SkillSeeder() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const skillService = app.get(SkillService);
    for (let i = 0; i <= 10; i++) {
       const skill={designation: randSkill()}
      await  skillService.addSkill(skill);
        
}

  }
SkillSeeder();