import { AuthLevel } from '../../models/lookups/AuthLevel';
import { EventHandler } from './EventHandler';
import { StaticLinks } from '../links';
import { VueRouter } from 'vue-router/types/router';
export class ValidLogin extends EventHandler{
    constructor(router: VueRouter){
        super();
        this._router = router;
        this.links = new StaticLinks();
    }
    private _router: VueRouter;
    private links: StaticLinks;
    public static Event: string = "ValidLogin";
    public Handler: ({auth:AuthLevel, route:string})=>void = (args)=> 
    {
        console.log(args.auth);
        console.log(args.route);
        switch(args.auth){
            case AuthLevel.User:
            case AuthLevel.Owner:
            case AuthLevel.Admin:
                if(!args.route) args.route = this.links.HomeRoute;
                this._router.push(args.route);
                break;
            default:
                this._router.push(this.links.LoginRoute);
                break;
        }
     };
}