import { FastifyInstance } from "fastify"
import { SocketStream } from "@fastify/websocket"
import { handleMessage } from "./helpers"
import { Socket } from "./socket"
import { SubscriptionManagerSingleton } from "./subscriptionManager/index"
import { logger } from "@/core/server/logger"

/**
 *  this function defines a fastify plugin which is responsible for handling
 *  socket connections
 */
export async function socketRoutesPlugin(app: FastifyInstance) {
  app.get(
    "/ws",
    { websocket: true },
    (conn: SocketStream /*, req: Request */) => {
      const socket = new Socket(conn.socket)
      logger.info({ message: "new socket connected", id: socket.id })

      /** error handling and routing of messages */
      socket.socket.on("message", handleMessage(socket))

      /** cleanup: remove all socket subscriptions on close */
      socket.socket.on("close", () => {
        SubscriptionManagerSingleton.instance.unsubscribeAll(socket)
        logger.info({ message: "socket disconnected", id: socket.id })
      })
    },
  )
}
