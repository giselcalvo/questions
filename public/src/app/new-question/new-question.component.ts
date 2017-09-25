import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRegService } from './../login-reg.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  currentUser: object = {name: '', username: '', email: ''} 

  constructor(private _logRegService: LoginRegService, private _questionService: QuestionService, private _router: Router) { }

  ngOnInit() {
        this._logRegService.getCurrentUser()
    .then((data)=>{
      if (data.errors){
        console.log("failed to find current user");
        this._router.navigate(['login']);
      }else{
        console.log("found current user");
          this.currentUser = data;
          console.log(this.currentUser)
      }
    
    })
  }
  newQuestion: object = {
  	//user: this.currentUser["name"],
    title: "",
    description: "",
  	likes: 0,
  }

  addQuestion(){
  	console.log("in new-question.components.ts addQuestion: ", this.newQuestion)
  	this._questionService.addQuestion(this.newQuestion)
  	.then((data)=>{
  		if (data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("added the question ", data)
  			this._router.navigate(['/']);
  		}
  	})
  }

}
