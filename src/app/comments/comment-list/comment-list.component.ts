import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() postId: any;
  commentData: any;

  constructor(private CommentService: CommentService) { }

  ngOnInit(): void {

    this.CommentService.loadComments(this.postId).subscribe((x: any[]) => {
      let comments = x.map(x => x.data)
      this.commentData = comments
    }
    )

  }


}

