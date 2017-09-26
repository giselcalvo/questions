import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
import { QuestionService } from './../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
	currentUser: object = {name: '', username: '', email: ''}

  constructor(private _questionService: QuestionService, private _logRegService: LoginRegService, private _router: Router) { }

  questions = [];
  searchTerm = "";

  ngOnInit() {
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

    this.getQuestions();
  }

  getQuestions(){
    console.log("loading questions");
    this._questionService.getQuestions()
    .then((data)=>{
      if (data.errors){
        console.log("failed to get questions");
        this._router.navigate(['/']);
        return false;
      }else{
        console.log("found cquestions/");
          this.questions = data;
          return this.questions;
      }
    })
  }
  logout(){
    console.log("in logout function")
      this._logRegService.logout()
    .then((data)=>{
      if (data.errors){
        console.log("failed to logout");
        this._router.navigate(['login']);
      }else{
        console.log("User has been logged out"); 
        this._router.navigate(['login']); 
      }
    
    })


  }

  searchQuestions(){
    if(this.searchTerm == ""){
       this.getQuestions();
    }
   
    this.questions = this.questions.filter((question)=>{
      return question.title.includes(this.searchTerm);
    })
  }

}
