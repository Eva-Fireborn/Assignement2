import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsService: CommentsService;
  commentData: Comment [] = null;
  newUserReview: string = '';
  newDestinationReview: string = '';
  newReview: string = '';
  destinations: string [] = ['Narnia', 'Underlandet', 'Landet Ingenstans'];
  selectedComment: object [] = [];
  isItActive = function(comment) {
    let answer = this.selectedComment.includes(comment)
    if(answer){
      return comment
    } 
  }

  constructor( commentsService: CommentsService ) {
    this.commentsService = commentsService;
   }

  ngOnInit() {
    this.commentData = this.commentsService.getData();
  }

  addReview() {
    let addNewReview: Object = {
      destination: this.newDestinationReview,
      comment: this.newReview,
      user: this.newUserReview
    }
    this.commentsService.setData(addNewReview)
    this.newDestinationReview = '';
    this.newReview = '';
    this.newUserReview = '';
  }
  removeListComment(comment){
    this.commentData = this.commentsService.removeData(comment);
  }
  markedDiv(comment){
    let answer = this.selectedComment.includes(comment)
    if (answer){
      this.selectedComment = this.selectedComment.filter(object => object !== comment)
    } else {
      this.selectedComment.push(comment);
    }
  }
  setIndex(index){
    this.selectedComment = index;
  }
}
