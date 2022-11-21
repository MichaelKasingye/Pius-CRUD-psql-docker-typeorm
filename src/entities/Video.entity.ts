import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, JoinTable } from "typeorm"
import {Tag} from "./Tag.entity"
import {Channel} from "./Channel.entity"

@Entity()
export class Video extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({nullable:true,default:null})
    genre: string

    @ManyToOne(()=>Channel,channel=>channel.video)
    channel:Channel;

    @ManyToMany(()=>Tag)
    @JoinTable()
    tags:Tag[];

}
