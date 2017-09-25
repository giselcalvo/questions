webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    // {
    // 	path: '',
    // 	component: LoginRegComponent,
    // },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__["a" /* LoginRegComponent */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__success_success_component__["a" /* SuccessComponent */],
    },
    {
        path: 'new_question',
        component: __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__["a" /* NewQuestionComponent */],
    },
    {
        path: 'question/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__question_details_question_details_component__["a" /* QuestionDetailsComponent */],
    },
    {
        path: 'question/:id/new_answer',
        component: __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__["a" /* NewAnswerComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['login']\" >Login or Register</a> |  <a [routerLink]=\"['success']\">Go to the Success Page</a> -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__success_success_component__["a" /* SuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_reg_login_reg_component__["a" /* LoginRegComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__question_details_question_details_component__["a" /* QuestionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__new_answer_new_answer_component__["a" /* NewAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__login_reg_service__["a" /* LoginRegService */], __WEBPACK_IMPORTED_MODULE_5__question_service__["a" /* QuestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegService = (function () {
    function LoginRegService(_http) {
        this._http = _http;
    }
    LoginRegService.prototype.loginUser = function (user) {
        return this._http.post('/api/login', user).map(function (Response) { return Response.json(); }).toPromise();
    };
    LoginRegService.prototype.getCurrentUser = function () {
        return this._http.get('/api/users/current').map(function (Response) { return Response.json(); }).toPromise();
    };
    LoginRegService.prototype.logout = function () {
        return this._http.get('/api/users/logout').map(function (Response) { return Response.json(); }).toPromise();
    };
    return LoginRegService;
}());
LoginRegService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginRegService);

var _a;
//# sourceMappingURL=login-reg.service.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n\n\n\n<form (submit)=\"login()\">\n\t\n\t<p>Name: <input type=\"text\" name=\"name\"\n\t\trequired [(ngModel)]=\"user.name\" #name=\"ngModel\" >\n\t</p>\n\t\t\n\t<input type=\"submit\" name=\"\" value=\"enter\">\n</form>\n\n<p *ngIf=\"name.errors\">Name is required</p>\n\n<!-- {{name.errors | json}} -->"

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRegComponent = (function () {
    function LoginRegComponent(_logRegService, _router, _route) {
        this._logRegService = _logRegService;
        this._router = _router;
        this._route = _route;
        this.newUser = {
            name: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        };
        this.user = {
            name: "",
        };
    }
    LoginRegComponent.prototype.ngOnInit = function () {
    };
    LoginRegComponent.prototype.login = function () {
        var _this = this;
        this._logRegService.loginUser(this.user)
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("successfully got logged in ", data);
                _this._router.navigate(['']);
            }
        });
    };
    return LoginRegComponent;
}());
LoginRegComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-reg',
        template: __webpack_require__("../../../../../src/app/login-reg/login-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-reg/login-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginRegComponent);

var _a, _b, _c;
//# sourceMappingURL=login-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/']\"> Home </a> |\n<a [routerLink]=\"['/question', question._id]\">Go Back to Question</a>\n\n<!-- <h1>{{question._id}}</h1> -->\n<!-- <input type=\"text\" name=\"\" value=question_id [(ngModel)]=\"question_id\"> -->\n\n<form (submit)=\"addAnswer()\">\n\t<p>Answer <input type=\"text\" name=\"title\"\n\t\t[(ngModel)]=\"newAnswer.title\">\n\t</p>\n\t<p>Description <input type=\"text\" name=\"Description\"\n\t\t[(ngModel)]=\"newAnswer.description\">\n\t</p>\n\t\n\t<a [routerLink]=\"['/']\"> <button>Cancel</button> </a>\n\n\t<input type=\"submit\" name=\"\">\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAnswerComponent = (function () {
    function NewAnswerComponent(_logRegService, _questionService, _router, _route) {
        this._logRegService = _logRegService;
        this._questionService = _questionService;
        this._router = _router;
        this._route = _route;
        this.newAnswer = {
            //user: this.currentUser["name"],
            user: "",
            title: "",
            description: "",
            likes: 0,
        };
        this.currentUser = {};
        this.question = {};
    }
    NewAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //checking if user is logged in
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
        //------------
        this._route.paramMap.subscribe(function (params) {
            console.log("got the param", params.get('id'));
            var id = params.get('id');
            _this._questionService.getQuestion({ "_id": id })
                .then(function (data) {
                if (data.errors) {
                    console.log(data.errors);
                }
                else {
                    console.log("successfully got the question ", data);
                    _this.question = data;
                    console.log(_this.question);
                }
            });
        });
    };
    NewAnswerComponent.prototype.addAnswer = function () {
        var _this = this;
        console.log("8-8-8--8-8-8-8-8--8-");
        this.newAnswer["user"] = this.currentUser["name"];
        console.log("in new-answer.components.ts addQuestion: ", this.newAnswer);
        console.log("This is the question id:", this.question["_id"]);
        this._questionService.addAnswer(this.newAnswer, this.question["_id"])
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("added the answer ", data);
                _this._router.navigate(['question/' + _this.question["_id"]]);
            }
        });
    };
    return NewAnswerComponent;
}());
NewAnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-answer',
        template: __webpack_require__("../../../../../src/app/new-answer/new-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-answer/new-answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], NewAnswerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n<a href=\"\">Logout</a>\n\n<form (submit)=\"addQuestion()\">\n\t<p>Question <input type=\"text\" name=\"title\"\n\t\t[(ngModel)]=\"newQuestion.title\">\n\t</p>\n\t<p>Description <input type=\"text\" name=\"Description\"\n\t\t[(ngModel)]=\"newQuestion.description\">\n\t</p>\n\t\n\t<a [routerLink]=\"['/']\"> <button>Cancel</button> </a>\n\n\t<input type=\"submit\" name=\"\">\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewQuestionComponent = (function () {
    function NewQuestionComponent(_logRegService, _questionService, _router) {
        this._logRegService = _logRegService;
        this._questionService = _questionService;
        this._router = _router;
        this.currentUser = { name: '', username: '', email: '' };
        this.newQuestion = {
            //user: this.currentUser["name"],
            title: "",
            description: "",
            likes: 0,
        };
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
                console.log(_this.currentUser);
            }
        });
    };
    NewQuestionComponent.prototype.addQuestion = function () {
        var _this = this;
        console.log("in new-question.components.ts addQuestion: ", this.newQuestion);
        this._questionService.addQuestion(this.newQuestion)
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("added the question ", data);
                _this._router.navigate(['/']);
            }
        });
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_reg_service__["a" /* LoginRegService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a> | <a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer this Question</a>\n\n<h2>{{question.title}}</h2>\n<p>{{question.description}}</p>\n\n\n\n<div *ngFor=\"let answer of question.answers\"> \n\t<p>{{answer.user}}</p>\n\t<p>{{answer.title}}</p>\n\t{{answer.description}}\n\t<p>{{answer.likes}} <button (click)=\"addLike(answer._id)\">Like!</button></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionDetailsComponent = (function () {
    function QuestionDetailsComponent(_router, _questionService, _route) {
        this._router = _router;
        this._questionService = _questionService;
        this._route = _route;
        this.question = {};
    }
    QuestionDetailsComponent.prototype.ngOnInit = function () {
        this.loadQuestion();
    };
    QuestionDetailsComponent.prototype.addLike = function (answer_id) {
        var _this = this;
        console.log("adding likes to answer: ", answer_id);
        this._questionService.addLike({ "_id": answer_id })
            .then(function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                console.log("successfully added a like", data);
                //this.question = data;
                //console.log(this.question);
                console.log('test');
                _this.loadQuestion();
                _this._router.navigate(['/question/' + _this.question["_id"]]);
            }
        });
    };
    QuestionDetailsComponent.prototype.loadQuestion = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            console.log("got the param", params.get('id'));
            var id = params.get('id');
            _this._questionService.getQuestion({ "_id": id })
                .then(function (data) {
                if (data.errors) {
                    console.log(data.errors);
                }
                else {
                    console.log("successfully got the question ", data);
                    _this.question = data;
                    console.log(_this.question);
                }
            });
        });
    };
    return QuestionDetailsComponent;
}());
QuestionDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-details',
        template: __webpack_require__("../../../../../src/app/question-details/question-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-details/question-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], QuestionDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=question-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.addQuestion = function (question) {
        console.log("in question.service.ts: addQuestion()");
        return this._http.post('/api/questions', question).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestions = function () {
        console.log("in question.service.ts: getQuestions()");
        return this._http.get('/api/questions').map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.getQuestion = function (question_id) {
        console.log("in question.service.ts: getQuestion()", question_id);
        return this._http.post('/api/question', question_id).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.addAnswer = function (answer, question_id) {
        console.log("in question.service.ts: addQuestion()");
        return this._http.post('/api/question/' + question_id + '/new_answer', answer).map(function (Response) { return Response.json(); }).toPromise();
    };
    QuestionService.prototype.addLike = function (answer_id) {
        console.log("in question.service.ts: addLike()");
        return this._http.post('/api/answer/addlike', answer_id).map(function (Response) { return Response.json(); }).toPromise();
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Hi {{currentUser.name}} !</h2> <a (click)=\"logout()\">Logout</a>\n<hr>\n<a [routerLink]=\"['/new_question']\">Add a Question</a>\n\n<p>Search <input type=\"text\" name=\"search\"></p>\n\n<table>\n\t<tr>\n\t\t<th>Question</th>\n\t\t<th>Answers</th>\n\t\t<th>Action</th>\n\t</tr>\n\t<tr *ngFor=\"let question of questions\">\n\t\t<td>{{question.title}}</td>\n\t\t<td>{{question[\"answers\"].length}}</td>\n\t\t<td><a [routerLink]=\"['/question', question._id]\" >Show</a> \n\n\t\t\t<a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer</a></td>\n\n\t</tr>\n</table>\n\n<!-- <p>Name: {{currentUser.name}}</p>\n<p>Email: {{currentUser.email}}</p>\n<p>Username: {{currentUser.username}}</p> -->"

/***/ }),

/***/ "../../../../../src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_reg_service__ = __webpack_require__("../../../../../src/app/login-reg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuccessComponent = (function () {
    function SuccessComponent(_questionService, _logRegService, _router) {
        this._questionService = _questionService;
        this._logRegService = _logRegService;
        this._router = _router;
        this.currentUser = { name: '', username: '', email: '' };
        this.questions = [];
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logRegService.getCurrentUser()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['login']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
        this.getQuestions();
    };
    SuccessComponent.prototype.getQuestions = function () {
        var _this = this;
        console.log("loading questions");
        this._questionService.getQuestions()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to get questions");
                _this._router.navigate(['/']);
            }
            else {
                console.log("found cquestions/");
                _this.questions = data;
            }
        });
    };
    SuccessComponent.prototype.logout = function () {
        var _this = this;
        console.log("in logout function");
        this._logRegService.logout()
            .then(function (data) {
            if (data.errors) {
                console.log("failed to logout");
                _this._router.navigate(['login']);
            }
            else {
                console.log("User has been logged out");
                _this._router.navigate(['login']);
            }
        });
    };
    return SuccessComponent;
}());
SuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-success',
        template: __webpack_require__("../../../../../src/app/success/success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/success/success.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_reg_service__["a" /* LoginRegService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SuccessComponent);

var _a, _b, _c;
//# sourceMappingURL=success.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map