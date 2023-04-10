import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './entities/user.entity';


@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
        
      ) {}
      async addUser(newuser : AddUserDto) : Promise<UserEntity>{ 
        
        return await this.userRepository.save(newuser);
      }
     
      async getUser(id: number):Promise<UserEntity>{
        const element= await this.userRepository.findOneBy({id:id});
      if (element){
        return element;
      }
      throw new  NotFoundException();
    }

  }