import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component'
import { SuccessComponent } from './success/success.component'
import { NewQuestionComponent} from './new-question/new-question.component'
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
const routes: Routes = [	
	// {
	// 	path: '',
	// 	component: LoginRegComponent,

	// },
	{
		path: 'login',
		component: LoginRegComponent,

	},
	{
		path: '',
		component: SuccessComponent,
	},
	{
		path: 'new_question',
		component: NewQuestionComponent,
	},
	{
		path: 'question/:id',
		component: QuestionDetailsComponent,
	},
	{
		path: 'question/:id/new_answer',
		component: NewAnswerComponent,
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
