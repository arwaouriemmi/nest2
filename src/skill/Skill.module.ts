import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SkillEntity } from '../skill/entities/skill.entity';
import { SkillController } from './Skill.controller';
import { SkillService } from './Skill.service';

@Module({
    imports  :  [TypeOrmModule.forFeature([SkillEntity])],
  controllers: [SkillController],
  providers: [SkillService] ,
  exports : [SkillService]
  
})
export class SkillModule {
 
}