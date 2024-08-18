import "module-alias/register"
/** import all configs effectively validates there are no errors */
import "@/app/config"
import { db, Paginated } from "@/core/database"
import { Password as Pwd } from "@/core/helpers"
import { Server } from "@/core/server"
import { logger } from "./core/server/logger"
import { WebSocketServer } from "ws"

async function main(): Promise<void> {
  console.log("Hello World")

  const server = Server.new()
  await Server.start(server)

  // const wss = new WebSocketServer({ server })

  // // Handle WebSocket connections
  // wss.on("connection", (ws) => {
  //   console.log("New WebSocket connection")

  //   ws.on("message", (message) => {
  //     console.log(`Received message: ${message}`)
  //     ws.send(`Echo: ${message}`)
  //   })

  //   ws.on("close", () => {
  //     console.log("WebSocket connection closed")
  //   })
  // })
}

// main().catch(logger.error)
main().catch((err) => logger.error(err))
