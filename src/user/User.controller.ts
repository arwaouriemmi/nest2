import {
    Body,
    Controller,
    Post,
  } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './User.service';

@Controller('user')

export class UserController {
    constructor(
        private UserService: UserService,
      ) {}
      @Post('adduser')
      async addTodo(@Body() newUser : AddUserDto) : Promise<UserEntity>{
         
          return  await this.UserService.addUser(newUser);
      }
}