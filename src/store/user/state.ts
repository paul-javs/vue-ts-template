import { AuthLevel } from '../../models/lookups/AuthLevel';
import { UserAccount } from '../../models/UserAccount';
export class State {
   currentUser: UserAccount;
   currentUserId: string;
   currentAuthLevel:AuthLevel;
   routeLink:string;
   requiredAuthLevel:AuthLevel;
}