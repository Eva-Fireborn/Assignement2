import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: Comment [] = [
    {
      destination: 'Landet ingenstans',
      comment: 'Jag fick möta en Kapten Krok. Han visade mig de bästa stället att dricka rom och spana på sjöjungfruarna.',
      user: 'Eva'
    },
    {
      destination: 'Underlandet',
      comment: 'Avskydde det, rekommenderas inte. Blev helt jordig på resan dit och storväxt när jag åt en kaka.',
      user: 'Britt-Marie'
    },
    {
      destination: 'Narnia',
      comment: 'Resan dit var snabb och effektiv, fin miljö. Rekommenderas till den som gillar safari.',
      user: 'Leif'
    },
  ]
  constructor() { }

  getData(): Comment [] {
    return this.comments;
  }
  setData(object) {
    this.comments.push(object);
  }
  removeData(object){
    this.comments = this.comments.filter(comment => comment !== object);
    return this.comments
  }
}
