import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
	newUser: object = {
		name: "",
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	}
	user: object = {
		name: "",
	}

  constructor(private _logRegService: LoginRegService, private _router: Router, private _route: ActivatedRoute) 
  { }

  ngOnInit() {
  }


  login(){
  	this._logRegService.loginUser(this.user)
  	.then((data)=>{
  		if (data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("successfully got logged in ", data)
  			this._router.navigate(['']);
  		}
  	})
  }




}
