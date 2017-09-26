import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRegService } from './../login-reg.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  newAnswer: object = {
  	//user: this.currentUser["name"],
    user: "",
    title: "",
    description: "",
  	likes: 0,
  }
  currentUser = {}

  question = {}
  constructor(private _logRegService: LoginRegService, private _questionService: QuestionService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {

    //checking if user is logged in
        this._logRegService.getCurrentUser()
    .then((data)=>{
      if (data.errors){
        console.log("failed to find current user");
        this._router.navigate(['login']);
      }else{
        console.log("found current user");
          this.currentUser = data;
      }
    
    })

    //------------
  	this._route.paramMap.subscribe( params => {
      console.log("got the param", params.get('id'));
      let id = params.get('id');
      this._questionService.getQuestion({"_id": id})
      .then((data)=>{
	  		if (data.errors){
	  			console.log(data.errors);
	  		}else{
	  			console.log("successfully got the question ", data)
	 				this.question = data;
	 				console.log(this.question);
	  		}
  		})
   	})

  }

  addAnswer(){
  	
    this.newAnswer["user"] = this.currentUser["name"]
  	console.log("in new-answer.components.ts addQuestion: ", this.newAnswer)
  	console.log("This is the question id:", this.question["_id"]);
  	this._questionService.addAnswer(this.newAnswer, this.question["_id"])
  	.then((data)=>{
  		if (data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("added the answer ", data)
  			this._router.navigate(['question/'+this.question["_id"]]);
  		}
  	})
  }

}
