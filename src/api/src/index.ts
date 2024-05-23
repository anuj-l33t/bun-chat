import { Elysia } from "elysia";
import { AppDataSource } from "../../db/src/data-source";

AppDataSource.initialize().then(async () => {

  console.log("db initialized")

}).catch(error => console.log(error))

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
