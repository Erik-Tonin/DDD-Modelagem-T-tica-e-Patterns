import EventHandlerInterface from "../../event-handler.interface";
import CustumerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCustomerCreatedHandler
  implements EventHandlerInterface<CustumerCreatedEvent>
{
  handle(event: CustumerCreatedEvent): void {
        console.log(`Esse é o primeiro console.log do evento: CustomerCreated`); 
  }

  handle1(event: CustumerCreatedEvent): void {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated`); 
  }

  handle2(event: CustumerCreatedEvent): void {
    console.log(`SEsse é o segundo console.log do evento: CustomerCreated`); 
  }
}