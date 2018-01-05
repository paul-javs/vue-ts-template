import { EventHandler } from './EventHandler';
import { VueRouter } from 'vue-router/types/router';
export class LogoutEvent extends EventHandler{
    public static Event: string = "LogoutEvent";
    public Handler: ()=>void;
}