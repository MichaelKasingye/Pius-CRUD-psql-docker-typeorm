import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany, JoinTable } from "typeorm"
import { User } from "./User.entity"
import { Video } from "./Video.entity";

@Entity()
export class Channel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({nullable:true,default:null})
    country: string

    @OneToOne(()=>User,user=>user.channel)
    @JoinColumn()
    user:User;

    @OneToMany(()=>Video,video=>video.channel)
    @JoinTable()
    video:Video[];

  
}
