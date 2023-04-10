import { randEmail, randFullName,randPassword,randFirstName,randJobArea,randJobTitle , rand} from '@ngneat/falso';
import { CvService } from '../cv/Cv.service';
import { CvModule } from '../cv/Cv.module';
import { NestFactory } from '@nestjs/core';
import { CvEntity } from '../cv/entities/cv.entity';
import { UserModule } from '../user/User.module';
import { UserService } from '../user/User.service';
import { SkillModule } from '../skill/Skill.module';
import { SkillService } from '../skill/Skill.service';
import { AppModule } from '../app.module';

async function CvSeeder() {
    const app = await NestFactory.createApplicationContext(AppModule);
   

    const cvService = app.get(CvService);
    const userService = app.get(UserService);
    const skillService = app.get(SkillService);
    for (let i = 0; i <= 10; i++) {
       const id= 1 ;
        const user=await userService.getUser(id);
        const skills=await skillService.getAllSkills(4,1);
        const cv = {name: randFullName() , fisrtname: randFirstName(),  age: rand([20,21,22,23]),path:randJobTitle(),job:randJobArea(),cin:randPassword (),user:user,skills:skills};
        await cvService.addCv(cv);
        
}

  }
  CvSeeder();