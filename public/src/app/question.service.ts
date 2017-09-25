import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  addQuestion(question){
  	console.log("in question.service.ts: addQuestion()");
  	return this._http.post('/api/questions', question).map(Response=>Response.json()).toPromise();
  }

  getQuestions(){
  	console.log("in question.service.ts: getQuestions()");
  	return this._http.get('/api/questions').map(Response=>Response.json()).toPromise();
  }

  getQuestion(question_id){
  	console.log("in question.service.ts: getQuestion()", question_id);
  	return this._http.post('/api/question', question_id).map(Response=>Response.json()).toPromise();
  }

  addAnswer(answer, question_id){
  	console.log("in question.service.ts: addQuestion()");
  	return this._http.post('/api/question/'+question_id+'/new_answer', answer).map(Response=>Response.json()).toPromise();
  }

  addLike(answer_id){
    console.log("in question.service.ts: addLike()");
    return this._http.post('/api/answer/addlike', answer_id).map(Response=>Response.json()).toPromise();
  }


}


