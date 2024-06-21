import EventInterface from './event.interface';
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
    handle(event: T): void;
    handle1(event: T): void;
    handle2(event: T): void;
}