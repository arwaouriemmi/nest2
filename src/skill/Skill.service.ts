import {Injectable,Inject, NotFoundException} from '@nestjs/common';
import { AddSkillDto } from './dto/add-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Like, Repository } from 'typeorm';
import { SkillEntity } from './entities/skill.entity';
import { UpdateSkillDto } from './dto/Update-skill.dto';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository: Repository<SkillEntity>
        
      ) {}
      async addSkill(newskill: AddSkillDto) : Promise<SkillEntity>{ 
        
        return await this.skillRepository.save(newskill);
      }
      async getAllSkills(take:number,skip:number): Promise<SkillEntity[]>{
        return await this.skillRepository.find({
          take :take ,
          skip :skip
        });

  }
  async findByDesignation(designation:string): Promise<SkillEntity>{
    return await this.skillRepository.findOneBy({designation:designation});

}
  async updateSkill(newskill :UpdateSkillDto,id:number){
    const element= await this.skillRepository.findOneBy({id:id});
    const newElement = await this.skillRepository.preload({
      id,
      ...newskill
    })
    if (!newElement){
      throw new  NotFoundException(`le todo d'id ${id} n'existe pas `);
    }
    return await this.skillRepository.save(newElement);
    }
    async DeleteSkill(id: number){
 
        return await this.skillRepository.delete(id) ;
      
   
    }
   
}



