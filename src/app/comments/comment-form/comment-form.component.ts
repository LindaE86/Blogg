import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/interfaces/comments';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() postId: any;
  constructor(private CommentService: CommentService,) { }

  ngOnInit(): void {

  }
  addComment(comment: Comments) {
    if (comment.comment.trim() !== '') {
      if (this.CommentService) {
        this.CommentService.addComment(comment, this.postId);
      }
    }
  }






}
