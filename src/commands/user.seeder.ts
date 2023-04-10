import { randEmail, randFullName,randPassword } from '@ngneat/falso';
import { UserService } from '../user/User.service';
import { UserModule } from '../user/User.module';
import { NestFactory } from '@nestjs/core';
import { CvEntity } from '../cv/entities/cv.entity';
import { AppModule } from '../app.module';



async function UserSeeder() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService = app.get(UserService);
    for (let i = 0; i <= 10; i++) {
        const user = {username: randFullName() , email: randEmail(),pwd:randPassword ()};
        await userService.addUser(user);
        
}

  }
  UserSeeder();





  

