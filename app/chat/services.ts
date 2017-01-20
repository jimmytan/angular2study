import {Subject, BehaviorSubject} from "rxjs";
import {User} from "./models";
/**
 * Created by wenjuntan on 2017-01-08.
 */
export class UserService {
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void{
        this.currentUser.next(newUser);
    }

}