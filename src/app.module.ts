import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/Cv.module';
import { CvEntity } from './cv/entities/cv.entity';
import { SkillEntity } from './skill/entities/skill.entity';
import { SkillModule } from './skill/Skill.module';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/User.module';

@Module({
  
  imports  :  [SkillModule,UserModule,CvModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tp3',
    autoLoadEntities:true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
