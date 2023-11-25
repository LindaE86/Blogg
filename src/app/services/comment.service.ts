import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private afs: AngularFirestore) { }

  addComment(comData: any, postId: string) {
    const post = this.afs.doc(`posts/${postId}`)
    post.collection('comment').add(comData);

  }

  loadComments(postId: any): Observable<any> {
    const commentsCollection = this.afs.collection(`posts/${postId}/comment`);

    return commentsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );




  }
}