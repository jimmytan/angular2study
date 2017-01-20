import {Message} from "@angular/compiler/src/i18n/i18n_ast";
/**
 * Created by wenjuntan on 2017-01-08.
 */
export class User {
    id: string;

    constructor(public name: string, public avatarSrc: string){
        //this.id = uuid();
    }

}

export class Thread {

    id: string;
    lastMessage: Message;
    name: string;
    avatarSrc: string;

    constructor(id?: string, name?: string, avatarSrc?: string){
        this.id = id;
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
}