import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Groups } from "./entity/Groups"
import { Messages } from "./entity/Messages"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "chat-app-db",
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
