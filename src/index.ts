import "module-alias/register"
/** import all configs effectively validates there are no errors */
import "@/app/config"
import { db, Paginated } from "@/core/database"
import { Password as Pwd } from "@/core/helpers"


import { Server } from "@/core/server"
import { logger } from "./core/server/logger"

async function main(): Promise<void> {
  console.log("Hello World")

  const server = Server.new()
  await Server.start(server)
}

// main().catch(logger.error)
main().catch((err) => logger.error(err))
