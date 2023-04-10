import {
    Body,
    Controller,
    Delete,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { AddCvDto } from './dto/add-cv.dto';
import { CvEntity } from './entities/cv.entity';
import { CvService } from './Cv.service';
import { UpdateCvDto } from './dto/Update-cv.dto';

@Controller('cv')

export class CvController {
    constructor(
        private CvService: CvService,
      ) {}
      @Post('addCv')
      async addCv(@Body() newCv : AddCvDto) : Promise<CvEntity>{
         
          return  await this.CvService.addCv(newCv);
      }
      @Patch('updatecv/:id')
      async updateCv(@Body() newcv : UpdateCvDto ,@Param('id', ParseIntPipe) id: number): Promise<CvEntity>{
       
          return await  this.CvService.updateCv(newcv,id);
     
    }
    @Delete('deletecv/:id')
    async deleteCv(@Param('id', ParseIntPipe) id: number){
      
      return this.CvService.DeleteCv(id);
    
    }
}