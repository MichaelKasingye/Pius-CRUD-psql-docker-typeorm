import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

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

}
