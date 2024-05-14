import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Groups } from "./Groups"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @ManyToOne(() => Groups, group => group.id)
    groupId: string

}
