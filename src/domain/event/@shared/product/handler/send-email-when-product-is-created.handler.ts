import CustumerCreatedEvent from "../../customer/customer-created.event";
import EventHandlerInterface from "../../event-handler.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log(`Endereço do cliente: {id}, {nome} alterado para: {endereco}`); 
  }

  handle1(event: CustumerCreatedEvent): void {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated + estou no Product`); 
  }

  handle2(event: CustumerCreatedEvent): void {
    console.log(`SEsse é o segundo console.log do evento: CustomerCreated +  estou no Product`); 
  }
}