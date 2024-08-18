import "module-alias/register"
/** import all configs effectively validates there are no errors */
import "@/app/config"
import { db, Paginated } from "@/core/database"
import { Password as Pwd } from "@/core/helpers"


import { Server } from "@/core/server"
import { logger } from "./core/server/logger"

async function main(): Promise<void> {
  console.log("Hello World")

  // const args = {
  //   email: "Hamzasajed.oso@gmail.com",
  //   name: "Hamza Sajed",
  //   phone: "0311-4052328",
  //   password: "Hamza__0301"
  // }

  // const user = await db.user.create({
  //   data: {
  //     email: args.email,
  //     name: args.name,
  //     phone: args.phone,
  //     password: {
  //       create: {
  //         hash: await Pwd.hash(args.password),
  //       },
  //     },
  //   },
  // })

  // console.log(user)

  const server = Server.new()
  await Server.start(server)
}

// main().catch(logger.error)
main().catch((err) => logger.error(err))
