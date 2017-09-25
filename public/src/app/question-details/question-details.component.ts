import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http } from '@angular/http';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
	question = {};
	
  constructor(private _router: Router, private _questionService: QuestionService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.loadQuestion();

  }

  addLike(answer_id){
    console.log("adding likes to answer: ", answer_id);
    this._questionService.addLike({"_id": answer_id})
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("successfully added a like", data)
         //this.question = data;
         //console.log(this.question);
         console.log('test');
         this.loadQuestion();
         this._router.navigate(['/question/'+this.question["_id"]]);


      }
    })

  }

  loadQuestion(){
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

}
