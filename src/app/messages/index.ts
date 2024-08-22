import { MessageHandlers } from "@/core/server/plugins/SocketRoutesPlugin/index.types"
import { EchoMessage } from "./Echo"


/**
 * register all message types and handlers here
 *
 */
export const messageHandlers: MessageHandlers = new Map([
  ["echo", EchoMessage],
])
