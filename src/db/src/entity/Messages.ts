import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Users } from "./Users"
import { Groups } from "./Groups"

@Entity()
export class Messages {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, user => user.id)
    userId: string

    @ManyToOne(() => Groups, group => group.id)
    groupId: string

    @Column("simple-json")
    content: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date



}
