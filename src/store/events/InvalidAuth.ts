import { EventHandler } from './EventHandler';
import { VueRouter } from 'vue-router/types/router';
export class InvalidAuth extends EventHandler{
    constructor(router: VueRouter){
        super();
        this._router = router;
    }
    private _router: VueRouter;
    public static Event: string = "InvalidAuth";
    public Handler: ()=>void = ()=> 
    {
        this._router.push('login');
     };
}