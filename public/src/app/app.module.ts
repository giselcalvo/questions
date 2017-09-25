import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginRegService } from './login-reg.service';
import { QuestionService } from './question.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginRegComponent,
    NewQuestionComponent,
    QuestionDetailsComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [LoginRegService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
