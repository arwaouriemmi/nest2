import { Optional } from "@nestjs/common";
import { SkillEntity } from "../../skill/entities/skill.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('cv')
export class CvEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    fisrtname:string;
    @Column()
    age:number;

    @Column()
    path:string;
  
    @Column()
    job:string;
    @Column()
    cin:string;

    
    @ManyToOne((type) => UserEntity ,(user) => user.cvs)
    user: UserEntity;

    @ManyToMany(type => SkillEntity, { cascade: true })
    @JoinTable({
      name: 'cv_skills',
      joinColumn: {
        name: 'cv_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'skill_id',
        referencedColumnName: 'id',
      },
    })
    skills: SkillEntity[];

}