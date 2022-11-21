import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from "typeorm"
import { Channel } from "./Channel.entity"

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name:"firstName",nullable:false})
    firstName: string

    @Column({name:"lastName",nullable:false})
    lastName: string

    @Column({name:"age"})
    age: number

    @OneToOne(()=>Channel)
    channel:Channel;

}
