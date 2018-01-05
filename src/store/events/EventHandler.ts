export abstract class EventHandler{
    Event:string;
    Handler: (params:any)=>void;
}