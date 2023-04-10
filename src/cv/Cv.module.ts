import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillModule } from '../skill/Skill.module';
import { CvController } from './Cv.controller';
import { CvService } from './Cv.service';
import { CvEntity } from './entities/cv.entity';


@Module({
    imports  :  [SkillModule,TypeOrmModule.forFeature([CvEntity])],
  controllers: [CvController],
  providers: [CvService],
  exports:[CvService]
  
})
export class CvModule {}