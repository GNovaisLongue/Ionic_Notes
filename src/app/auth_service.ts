import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";


@Injectable()
export class AuthService{
    constructor (private afAuth: AngularFireAuth){
    }
    
    signIn(username: string, password: string){
        return this.afAuth.auth.signInWithEmailAndPassword(username, password);
    }

    signUp (username: string, password: string){
        return this.afAuth.auth.createUserWithEmailAndPassword(username, password);
    }

}