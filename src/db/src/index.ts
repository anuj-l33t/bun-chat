import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {

    console.log("db initialized")

}).catch(error => console.log(error))
