import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  iso2: string;

  @Column({ nullable: true })
  iso3: string;

  @Column({ nullable: true })
  isoCode: string;

  @Column()
  numCode: string;

  @Column({ nullable: true })
  capital: string;

  @Column({ nullable: true })
  currency: string;

  @Column()
  region: string;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  flag: string;

}
