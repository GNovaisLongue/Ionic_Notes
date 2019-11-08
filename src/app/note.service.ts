import {AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService{

    constructor(private db: AngularFireDatabase){

    }
    notes = [
        {
          id: 1,
          date: '2016-09-15',
          title: 'Firebase',
          content: 'Firebase permite o desenvolvimento serverless'   
        },
        {
          id: 2,
          date: '2019-07-12',
          title: "Ionic",
          content: "Ionic para desenvolvimento híbrido"  
        },
        {
          id: 3,
          title: "Angular",
          content: "Já está na versão 8",
          date: "2019-10-25"
        }
      ]
    removeNote (note){
        /*let i = this.notes.indexOf(note)
        if (i >= 0)
            this.notes.splice(i, 1);*/
        this.db.object ("/notes/" + note.$key).remove().
        then( () => {
            console.log ("Objeto deletado")
        }).
        catch( (erro) => {
            console.log (erro)
        });
    }

    addNote (note){
        //this.notes.push(note);
        this.db.list ("/notes/").push({
            title: note.title,
            date: note.date,
            content: note.content
        });
    }

    fetchNotes (){
        return this.db.list("/notes/");
    }

    editNote (note){
        this.db.object("/notes/" + note.$key).update({
            title: note.title,
            content: note.content,
            date: note.date
        });
    }

    
}