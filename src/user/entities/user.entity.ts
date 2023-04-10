import { Optional } from "@nestjs/common";
import { CvEntity } from "../../cv/entities/cv.entity";


import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username:string;
    @Column()
    email:string;
    @Column()
    pwd:string;
    
 
   @OneToMany((type) => CvEntity, (cv) => cv.user)
    cvs: CvEntity[];

}