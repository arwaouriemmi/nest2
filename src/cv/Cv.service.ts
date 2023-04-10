import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { Repository } from 'typeorm';
import { AddCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/Update-cv.dto';
import { CvEntity } from './entities/cv.entity';
import { SkillService } from '../skill/Skill.service';

@Injectable()
export class CvService {
  
    constructor(
      @InjectRepository(CvEntity)
      private cvRepository: Repository<CvEntity>,
      private SkillService: SkillService 

      
    ) {}
    async addCv(newcv : AddCvDto) : Promise<CvEntity>{
      if(newcv.skills) {
        for (let i=0 ;i<newcv.skills.length;i++){
          const element= await this.SkillService.findByDesignation(newcv.skills[i].designation);
          if (element){
           newcv.skills[i]=element ;
          }
        }
      }
      return await this.cvRepository.save(newcv);
    }
    async updateCv(newskill :UpdateCvDto,id:number){
      const element= await this.cvRepository.findOneBy({id:id});
      const newElement = await this.cvRepository.preload({
        id,
        ...newskill
      })
      if (!newElement){
        throw new  NotFoundException(`le todo d'id ${id} n'existe pas `);
      }
      return await this.cvRepository.save(newElement);
      }
      async DeleteCv(id: number){
   
          return await this.cvRepository.delete(id) ;
        
     
      }


  }


  


