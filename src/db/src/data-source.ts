import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Groups } from "./entity/Groups"
import { Messages } from "./entity/Messages"

const postgresPassword = await Bun.file(process.env.POSTGRES_PASSWORD_FILE ?? "").text();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "psqldb",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: postgresPassword,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [
        Users,
        Groups,
        Messages
     ],
    migrations: [],
    subscribers: [],
})
