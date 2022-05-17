import { EventEmitter } from "events" 

export default class EventBus extends EventEmitter {
  private sent_events: Array<string>
  private incoming_events: Array<string>

  constructor(sent_event: Array<string>, incoming_events: Array<string>) {
    super()
    this.sent_events = sent_event
    this.incoming_events = incoming_events
  }

  public send<T>(event_name: string, data: T): void {
    if (!this.sent_events.includes(event_name)) {
      console.error(`Unrecognized Sent Event: ${event_name}`)
      return
    }

    this.emit(event_name, data)
  }

  public recieve<T>(event_name: string, callback: (data: T) => Promise<void>): void {
    if (!this.incoming_events.includes(event_name)) {
      console.error(`Unrecognized Incoming Event: ${event_name}`)
      return
    }

    this.on(event_name, callback)
  }
}