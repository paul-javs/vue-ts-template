import { UserAccount } from '../../models/UserAccount';
import { Mutation, MutationTree } from 'vuex';
import { State } from './state';
import { EventBus } from '../EventBus';
import { InvalidAuth } from '../events/InvalidAuth';
import { ValidLogin } from '../events/ValidLogin';
import { AuthLevel } from '../../models/lookups/AuthLevel';
import * as Cookies from 'es-cookie';


export function setRequiredAuth(state:State, args: {auth: AuthLevel, route:string}){
    state.requiredAuthLevel = args.auth;
    if(state.currentAuthLevel < state.requiredAuthLevel){
        if(args.route) state.routeLink = args.route;
        EventBus.$emit(InvalidAuth.Event);
    }
}


export function setCurrentAuth(state:State, auth: AuthLevel){
    state.currentAuthLevel = auth;
    Cookies.set("cal", auth.toString());
}

export function setCurrentUser(state:State, user: UserAccount){
    state.currentUser = user;
    Cookies.set("currentUserId", user.UserAccountID);

    let authLevel: AuthLevel;
    if(user.EmailAddress == 'roberth@javs.com')
        authLevel = AuthLevel.Owner;
    else
        authLevel = AuthLevel.User;
        
    setCurrentAuth(state, authLevel);
    
    EventBus.$emit(ValidLogin.Event, {auth: authLevel, route: state.routeLink});
}

export function setCurrentUserId(state:State, userId: string){
    state.currentUserId = userId;
}

export default <MutationTree<State>> {
    setRequiredAuth,setCurrentAuth,setCurrentUser,setCurrentUserId
}