webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<ng-flash-message></ng-flash-message>\r\n<router-outlet></router-outlet>\r\n<!--<div class=\"container\">\r\n    <h2>Example body text</h2>\r\n    <p>Nullam quis risus eget <a href=\"#\">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\r\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n    <p>The following is <strong>rendered as bold text</strong>.</p>\r\n    <p>The following is <em>rendered as italicized text</em>.</p>\r\n    <p>An abbreviation of the word attribute is <abbr title=\"attribute\">attr</abbr>.</p>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authservice) {
        var _this = this;
        this.authservice = authservice;
        this.title = 'app';
        this.authservice.isadmin().subscribe(function (res) {
            if (res.state) {
                _this.authservice.adminorsuperadmin = true;
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__ = __webpack_require__("./src/app/service/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_job_jobpost_jobpost_component__ = __webpack_require__("./src/app/components/job/jobpost/jobpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_job_viewjobs_viewjobs_component__ = __webpack_require__("./src/app/components/job/viewjobs/viewjobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__ = __webpack_require__("./src/app/components/job/jobdetails/jobdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_adminpenal_adminpenal_component__ = __webpack_require__("./src/app/components/admin/adminpenal/adminpenal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_adminhome_adminhome_component__ = __webpack_require__("./src/app/components/admin/adminhome/adminhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_regadmin_regadmin_component__ = __webpack_require__("./src/app/components/admin/regadmin/regadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cleaner_cleanerhome_cleanerhome_component__ = __webpack_require__("./src/app/components/cleaner/cleanerhome/cleanerhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_advertiser_advertiserhome_advertiserhome_component__ = __webpack_require__("./src/app/components/advertiser/advertiserhome/advertiserhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_addadvertiser_addadvertiser_component__ = __webpack_require__("./src/app/components/admin/addadvertiser/addadvertiser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_sidemenu_sidemenu_component__ = __webpack_require__("./src/app/components/admin/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_sample_sample_component__ = __webpack_require__("./src/app/components/admin/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_addadmin_addadmin_component__ = __webpack_require__("./src/app/components/admin/addadmin/addadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_addsuperadmin_addsuperadmin_component__ = __webpack_require__("./src/app/components/admin/addsuperadmin/addsuperadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_advertiser_charts_charts_component__ = __webpack_require__("./src/app/components/advertiser/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_advertiser_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/advertiser/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admin_pendingjobposts_pendingjobposts_component__ = __webpack_require__("./src/app/components/admin/pendingjobposts/pendingjobposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_admin_acceptjobpost_acceptjobpost_component__ = __webpack_require__("./src/app/components/admin/acceptjobpost/acceptjobpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_admin_rejectedjobpost_rejectedjobpost_component__ = __webpack_require__("./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_searchusers_searchusers_component__ = __webpack_require__("./src/app/components/admin/searchusers/searchusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_reviewcomplain_reviewcomplain_component__ = __webpack_require__("./src/app/components/admin/reviewcomplain/reviewcomplain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_admin_checkedcomplains_checkedcomplains_component__ = __webpack_require__("./src/app/components/admin/checkedcomplains/checkedcomplains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_admin_addadvertiesment_addadvertiesment_component__ = __webpack_require__("./src/app/components/admin/addadvertiesment/addadvertiesment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var applicationRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobpost', component: __WEBPACK_IMPORTED_MODULE_13__components_job_jobpost_jobpost_component__["a" /* JobpostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewjobs', component: __WEBPACK_IMPORTED_MODULE_14__components_job_viewjobs_viewjobs_component__["a" /* ViewjobsComponent */] },
    { path: 'viewjobs/:postid', component: __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */] },
    { path: 'alljobpost', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_adminpenal_adminpenal_component__["a" /* AdminpenalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'alljobpost/:postid', component: __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'pendingjobpost', component: __WEBPACK_IMPORTED_MODULE_29__components_admin_pendingjobposts_pendingjobposts_component__["a" /* PendingjobpostsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'pendingjobpost/:postid', component: __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'acceptedjobpost', component: __WEBPACK_IMPORTED_MODULE_30__components_admin_acceptjobpost_acceptjobpost_component__["a" /* AcceptjobpostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'acceptedjobpost/:postid', component: __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rejectedjobpost', component: __WEBPACK_IMPORTED_MODULE_31__components_admin_rejectedjobpost_rejectedjobpost_component__["a" /* RejectedjobpostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rejectedjobpost/:postid', component: __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'adminhome', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_adminhome_adminhome_component__["a" /* AdminhomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'advertiserhome', component: __WEBPACK_IMPORTED_MODULE_21__components_advertiser_advertiserhome_advertiserhome_component__["a" /* AdvertiserhomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'regadmin', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_regadmin_regadmin_component__["a" /* RegadminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cleanerhome', component: __WEBPACK_IMPORTED_MODULE_20__components_cleaner_cleanerhome_cleanerhome_component__["a" /* CleanerhomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addadvertiser', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_addadvertiser_addadvertiser_component__["a" /* AddadvertiserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addadmin', component: __WEBPACK_IMPORTED_MODULE_25__components_admin_addadmin_addadmin_component__["a" /* AddadminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addsuperadmin', component: __WEBPACK_IMPORTED_MODULE_26__components_admin_addsuperadmin_addsuperadmin_component__["a" /* AddsuperadminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sample', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_sample_sample_component__["a" /* SampleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'searchusers', component: __WEBPACK_IMPORTED_MODULE_32__components_admin_searchusers_searchusers_component__["a" /* SearchusersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reviewcomplain', component: __WEBPACK_IMPORTED_MODULE_33__components_admin_reviewcomplain_reviewcomplain_component__["a" /* ReviewcomplainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'checkedcomplains', component: __WEBPACK_IMPORTED_MODULE_34__components_admin_checkedcomplains_checkedcomplains_component__["a" /* CheckedcomplainsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addadvertiesment', component: __WEBPACK_IMPORTED_MODULE_35__components_admin_addadvertiesment_addadvertiesment_component__["a" /* AddadvertiesmentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_job_jobpost_jobpost_component__["a" /* JobpostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_job_viewjobs_viewjobs_component__["a" /* ViewjobsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_job_jobdetails_jobdetails_component__["a" /* JobdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_adminpenal_adminpenal_component__["a" /* AdminpenalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_advertiser_advertiserhome_advertiserhome_component__["a" /* AdvertiserhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_addadvertiser_addadvertiser_component__["a" /* AddadvertiserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_adminhome_adminhome_component__["a" /* AdminhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_regadmin_regadmin_component__["a" /* RegadminComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_cleaner_cleanerhome_cleanerhome_component__["a" /* CleanerhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_sample_sample_component__["a" /* SampleComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_admin_addadmin_addadmin_component__["a" /* AddadminComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_admin_addsuperadmin_addsuperadmin_component__["a" /* AddsuperadminComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_advertiser_charts_charts_component__["b" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_advertiser_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_admin_pendingjobposts_pendingjobposts_component__["a" /* PendingjobpostsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_admin_acceptjobpost_acceptjobpost_component__["a" /* AcceptjobpostComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_admin_rejectedjobpost_rejectedjobpost_component__["a" /* RejectedjobpostComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_admin_searchusers_searchusers_component__["a" /* SearchusersComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_admin_reviewcomplain_reviewcomplain_component__["a" /* ReviewcomplainComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_admin_checkedcomplains_checkedcomplains_component__["a" /* CheckedcomplainsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_admin_addadvertiesment_addadvertiesment_component__["a" /* AddadvertiesmentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(applicationRoutes),
                __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/acceptjobpost/acceptjobpost.component.css":
/***/ (function(module, exports) {

module.exports = "#menuitem{\r\n    margin-left: 15%;\r\n    float: center;\r\n    width: 70%;\r\n    padding: 10px;\r\n}\r\n.add{\r\n    width: 100%;\r\n    height: 200px;\r\n    box-align:center;\r\n    border-style: solid;\r\n    border-color: rgb(79,191,219); \r\n    text-align: center;\r\n    \r\n}\r\n.accepted{\r\n    background-color: lawngreen;\r\n    opacity: 0.8;\r\n}\r\n.rejected{\r\n    background-color: lightcoral;\r\n    opacity: 0.8;\r\n}\r\n.pending{\r\n    background-color: lightyellow;\r\n    opacity: 0.8;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.outerbox{\r\n    margin-left: 10%;\r\n    width: 80%;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    background-color: aqua;\r\n}\r\n.statusbtn{\r\n    text-align: right;\r\n}\r\n#reason{\r\n    width: 60%;\r\n}\r\n/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */"

/***/ }),

/***/ "./src/app/components/admin/acceptjobpost/acceptjobpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n          <div class=\"outerbox\" style=\"background-color:rgba(255, 255, 255, 0.8)\">\n              <h2>Accepted JOB POSTS</h2>\n          <div id=\"menuitem\">\n              <ul *ngFor=\"let jobs of job\">\n              <li *ngIf=\"jobs.status=='accepted'\">\n                  <div   class=\"add accepted\">\n                  <div id=\"menu\">\n                  \n                  <h1> {{ jobs.title }}</h1>\n                  <h1> {{ jobs.joblocation }}</h1>\n                  <button [routerLink]=\"['/acceptedjobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                  </div>\n                  <div class=\"statusbtn\">\n                      <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                      <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                      <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                  </div>\n              </div>\n              </li>\n              </ul>\n          </div>\n          </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/acceptjobpost/acceptjobpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptjobpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptjobpostComponent = /** @class */ (function () {
    function AcceptjobpostComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.getpost();
    }
    AcceptjobpostComponent.prototype.ngOnInit = function () {
    };
    AcceptjobpostComponent.prototype.getpost = function () {
        var _this = this;
        this.authservice.adminalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
                // console.log(this.job);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AcceptjobpostComponent.prototype.reject = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "reject");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.rejectpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AcceptjobpostComponent.prototype.pending = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "pending ");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.pendingpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AcceptjobpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acceptjobpost',
            template: __webpack_require__("./src/app/components/admin/acceptjobpost/acceptjobpost.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/acceptjobpost/acceptjobpost.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AcceptjobpostComponent);
    return AcceptjobpostComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/addadmin/addadmin.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\nform{\r\n    border-radius: 10px;\r\n    margin: 4.2%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}\r\n.container{\r\n    width: 80%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/admin/addadmin/addadmin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n            <div class=\"container\">\n              <form class=\"form\" #form=ngForm (submit)=\"registerData()\">\n                  <fieldset>\n                    <legend>Register admin</legend>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">First Name :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Your first name\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\n                        </div>\n                      \n                        <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">Last Name :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Your last name\" name=\"lastname\" [(ngModel)]=\"lastname\" required>\n                        </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">User name :</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your username\" name=\"username\" [(ngModel)]=\"username\" required>\n                          </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Email :</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\" required>\n                          </div>\n                        \n                          <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Gender :</label>\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Male' name=\"gender\" [(ngModel)]=\"gender\" required style=\"width:20%;\">Male\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Female' name=\"gender\" [(ngModel)]=\"gender\" required uired style=\"width:20%;\">Female\n                          </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Phone No :</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your Phone number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required>\n                          </div>\n              \n                      <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">NIC :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"nic\" placeholder=\"Your NIC\" name=\"nic\" [(ngModel)]=\"nic\" required>\n                        </div>\n              \n                        <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">Address :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Your address\" name=\"address\" [(ngModel)]=\"address\" required>\n                        </div>\n\n              \n                    <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary center-block\">Submit</button>\n              \n                  </fieldset>\n                </form>\n              </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/addadmin/addadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddadminComponent = /** @class */ (function () {
    function AddadminComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.role = "admin";
        this.company = "NO";
        this.authservice.isadmin().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
    }
    AddadminComponent.prototype.ngOnInit = function () {
    };
    AddadminComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            gender: this.gender,
            phoneno: this.phoneno,
            nic: this.nic,
            role: this.role,
            address: this.address,
            company: this.company
        };
        //console.log(user);
        this.authservice.registerAdmin(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                alert(res.msg);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                //this.router.navigate(['/register']);
                alert(res.msg);
            }
        });
    };
    AddadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addadmin',
            template: __webpack_require__("./src/app/components/admin/addadmin/addadmin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/addadmin/addadmin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddadminComponent);
    return AddadminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/addadvertiesment/addadvertiesment.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\n.register{\r\n\r\n    color: aliceblue;\r\n    margin-top: 2%;\r\n    \r\n    text-align: center;\r\n    padding: 3% 5% 3% 5%;\r\n    background-color: #4c5941;\r\n    border-radius: 10px;\r\n    border-color: #a0a39e;\r\n    border-style: solid;\r\n    border-width: 5px;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/components/admin/addadvertiesment/addadvertiesment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;\">\n    <div class=\"container register\">\n      <form class=\"form\" #form=ngForm (submit)=\"registerData()\">\n        <fieldset>\n          <legend>\n            <h2>Register</h2>\n          </legend>\n          <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\n            <label for=\"exampleInputPassword1\">Title:</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputfullname\" placeholder=\"Your title\" name=\"title\"\n              [(ngModel)]=\"title\" required>\n          </div>\n\n          <div class=\"form-group\" style=\"width:50%;margin-left:25%;\">\n            <label for=\"exampleInputPassword1\">Vender url:</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your vender url\" name=\"venderurl\"\n              [(ngModel)]=\"venderurl\" required>\n          </div>\n\n          <div>\n            <img [src]=\"imageUrl\" style=\"width: 250px; height: 200px;\">\n            <input type=\"file\" #image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" required>\n          </div>\n\n          <br><br>\n\n          <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Register</button>\n          <button type=\"reset\" class=\"btn btn-secondary btn-lg\">Reset</button>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/addadvertiesment/addadvertiesment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadvertiesmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddadvertiesmentComponent = /** @class */ (function () {
    function AddadvertiesmentComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.imageUrl = "../../../assets/defualt.jpg";
        this.fileToUpload = null;
        this.fileToUpload = new File([""], "defualt.jpg");
        //this.fileToUpload = new File([''], "../../../assets/images/defualt.jpg");
        //console.log(this.fileToUpload);
    }
    AddadvertiesmentComponent.prototype.ngOnInit = function () {
    };
    AddadvertiesmentComponent.prototype.registerData = function () {
        var _this = this;
        var advertiesment = {
            title: this.title,
            venderurl: this.venderurl,
        };
        this.authservice.addadvertiesment(advertiesment).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                //this.router.navigate(['/login'])
                ;
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                //this.router.navigate(['/register']);
            }
        });
    };
    AddadvertiesmentComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //preview image
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    AddadvertiesmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addadvertiesment',
            template: __webpack_require__("./src/app/components/admin/addadvertiesment/addadvertiesment.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/addadvertiesment/addadvertiesment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddadvertiesmentComponent);
    return AddadvertiesmentComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/addadvertiser/addadvertiser.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\nform{\r\n    border-radius: 10px;\r\n    margin: 4.2%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}\r\n.container{\r\n    width: 80%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/admin/addadvertiser/addadvertiser.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"column\" style=\"background-color:#aaa;\">\r\n    <app-sidemenu></app-sidemenu>\r\n  </div>\r\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\r\n            <div class=\"container\">\r\n              <form class=\"form\" #form=ngForm (submit)=\"registerData()\">\r\n                  <fieldset>\r\n                    <legend>Register advertiser</legend>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">First Name :</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Your first name\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\r\n                        </div>\r\n                      \r\n                        <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">Last Name :</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Your last name\" name=\"lastname\" [(ngModel)]=\"lastname\" required>\r\n                        </div>\r\n              \r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputPassword1\">User name :</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your username\" name=\"username\" [(ngModel)]=\"username\" required>\r\n                          </div>\r\n              \r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputPassword1\">Email :</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\" required>\r\n                          </div>\r\n                        \r\n                          <div class=\"form-group\">\r\n                            <label for=\"exampleInputPassword1\">Gender :</label>\r\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Male' name=\"gender\" [(ngModel)]=\"gender\" required style=\"width:20%;\">Male\r\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Female' name=\"gender\" [(ngModel)]=\"gender\" required uired style=\"width:20%;\">Female\r\n                          </div>\r\n              \r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputPassword1\">Phone No :</label>\r\n                            <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your Phone number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required>\r\n                          </div>\r\n              \r\n                      <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">NIC :</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"nic\" placeholder=\"Your NIC\" name=\"nic\" [(ngModel)]=\"nic\" required>\r\n                        </div>\r\n              \r\n                        <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">Address :</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Your address\" name=\"address\" [(ngModel)]=\"address\" required>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">Company :</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Company\" name=\"company\" [(ngModel)]=\"company\" required>\r\n                        </div>\r\n              \r\n                    <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary center-block\">Submit</button>\r\n              \r\n                  </fieldset>\r\n                </form>\r\n              </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/addadvertiser/addadvertiser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadvertiserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddadvertiserComponent = /** @class */ (function () {
    function AddadvertiserComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.role = "advertiser";
        this.authservice.isadmin().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
    }
    AddadvertiserComponent.prototype.ngOnInit = function () {
    };
    AddadvertiserComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            gender: this.gender,
            phoneno: this.phoneno,
            nic: this.nic,
            role: this.role,
            address: this.address,
            company: this.company
        };
        //console.log(user);
        this.authservice.registerAdvertiser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                alert(res.msg);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                //this.router.navigate(['/register']);
                alert(res.msg);
            }
        });
    };
    AddadvertiserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addadvertiser',
            template: __webpack_require__("./src/app/components/admin/addadvertiser/addadvertiser.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/addadvertiser/addadvertiser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddadvertiserComponent);
    return AddadvertiserComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/addsuperadmin/addsuperadmin.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\nform{\r\n    border-radius: 10px;\r\n    margin: 4.2%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}\r\n.container{\r\n    width: 80%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/admin/addsuperadmin/addsuperadmin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n            <div class=\"container\">\n              <form class=\"form\" #form=ngForm (submit)=\"registerData()\">\n                  <fieldset>\n                    <legend>Register Superadmin</legend>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">First Name :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Your first name\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\n                        </div>\n                      \n                        <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">Last Name :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Your last name\" name=\"lastname\" [(ngModel)]=\"lastname\" required>\n                        </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">User name :</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your username\" name=\"username\" [(ngModel)]=\"username\" required>\n                          </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Email :</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\" required>\n                          </div>\n                        \n                          <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Gender :</label>\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Male' name=\"gender\" [(ngModel)]=\"gender\" required style=\"width:20%;\">Male\n                            <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Female' name=\"gender\" [(ngModel)]=\"gender\" required uired style=\"width:20%;\">Female\n                          </div>\n              \n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Phone No :</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your Phone number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required>\n                          </div>\n              \n                      <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">NIC :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"nic\" placeholder=\"Your NIC\" name=\"nic\" [(ngModel)]=\"nic\" required>\n                        </div>\n              \n                        <div class=\"form-group\">\n                          <label for=\"exampleInputPassword1\">Address :</label>\n                          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Your address\" name=\"address\" [(ngModel)]=\"address\" required>\n                        </div>\n\n              \n                    <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary center-block\">Submit</button>\n              \n                  </fieldset>\n                </form>\n              </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/addsuperadmin/addsuperadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsuperadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddsuperadminComponent = /** @class */ (function () {
    function AddsuperadminComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.role = "superadmin";
        this.company = "NO";
        this.authservice.isadmin().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
    }
    AddsuperadminComponent.prototype.ngOnInit = function () {
    };
    AddsuperadminComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            gender: this.gender,
            phoneno: this.phoneno,
            nic: this.nic,
            role: this.role,
            address: this.address,
            company: this.company
        };
        //console.log(user);
        this.authservice.registerSuperAdmin(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                alert(res.msg);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                //this.router.navigate(['/register']);
                alert(res.msg);
            }
        });
    };
    AddsuperadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addsuperadmin',
            template: __webpack_require__("./src/app/components/admin/addsuperadmin/addsuperadmin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/addsuperadmin/addsuperadmin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddsuperadminComponent);
    return AddsuperadminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/adminhome/adminhome.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/adminhome/adminhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"column\" style=\"background-color:#aaa;\">\r\n    <app-sidemenu></app-sidemenu>\r\n  </div>\r\n  <div class=\"column2\" style=\"background-color:#bbb;\">\r\n    <P>Admin home</P>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/adminhome/adminhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminhomeComponent = /** @class */ (function () {
    function AdminhomeComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    AdminhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.isadmin().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
    };
    AdminhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminhome',
            template: __webpack_require__("./src/app/components/admin/adminhome/adminhome.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/adminhome/adminhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminhomeComponent);
    return AdminhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/adminpenal/adminpenal.component.css":
/***/ (function(module, exports) {

module.exports = "#menuitem{\r\n    margin-left: 15%;\r\n    float: center;\r\n    width: 70%;\r\n    padding: 10px;\r\n}\r\n.add{\r\n    width: 100%;\r\n    height: 200px;\r\n    box-align:center;\r\n    border-style: solid;\r\n    border-color: rgb(79,191,219); \r\n    text-align: center;\r\n    \r\n}\r\n.accepted{\r\n    background-color: lawngreen;\r\n    opacity: 0.8;\r\n}\r\n.rejected{\r\n    background-color: lightcoral;\r\n    opacity: 0.8;\r\n}\r\n.pending{\r\n    background-color: lightyellow;\r\n    opacity: 0.8;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.outerbox{\r\n    margin-left: 10%;\r\n    width: 80%;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    background-color: aqua;\r\n}\r\n.statusbtn{\r\n    text-align: right;\r\n}\r\n#reason{\r\n    width: 60%;\r\n}\r\n/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */"

/***/ }),

/***/ "./src/app/components/admin/adminpenal/adminpenal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"column\" style=\"background-color:#aaa;\">\n      <app-sidemenu></app-sidemenu>\n    </div>\n    <div class=\"column2\" style=\"background-color:#bbb;\">\n            <div class=\"outerbox\" style=\"background-color:rgba(255, 255, 255, 0.8)\">\n                <h2>All JOB POSTS</h2>\n            <div id=\"menuitem\">\n                <ul *ngFor=\"let jobs of job\">\n                <li *ngIf=\"jobs.status=='accepted'\">\n                    <div   class=\"add accepted\">\n                    <div id=\"menu\">\n                    \n                    <h1> {{ jobs.title }}</h1>\n                    <h1> {{ jobs.joblocation }}</h1>\n                    <button [routerLink]=\"['/alljobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                    </div>\n                    <div class=\"statusbtn\">\n                        <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                        <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                        <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                    </div>\n                </div>\n                </li>\n\n                <li *ngIf=\"jobs.status=='rejected'\">\n                    <div   class=\"add rejected\">\n                    <div id=\"menu\">\n                    \n                    <h1> {{ jobs.title }}</h1>\n                    <h1> {{ jobs.joblocation }}</h1>\n                    <button [routerLink]=\"['/alljobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                    </div>\n                    <div class=\"statusbtn\">\n                        <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                        <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                        <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                    </div>\n                </div>\n                    </li>\n\n                    <li *ngIf=\"jobs.status=='pending'\">\n                        <div   class=\"add pending\">\n                        <div id=\"menu\">\n                        \n                        <h1> {{ jobs.title }}</h1>\n                        <button [routerLink]=\"['/alljobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                    </div>\n                    <div class=\"statusbtn\">\n                        <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                        <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                        <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                    </div>\n                    </div>\n                    </li>\n                </ul>\n            </div>\n            </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/adminpenal/adminpenal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpenalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminpenalComponent = /** @class */ (function () {
    function AdminpenalComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.getpost();
    }
    AdminpenalComponent.prototype.ngOnInit = function () {
    };
    AdminpenalComponent.prototype.getpost = function () {
        var _this = this;
        this.authservice.adminalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
                // console.log(this.job);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AdminpenalComponent.prototype.accept = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "correct");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.acceptpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AdminpenalComponent.prototype.reject = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "reject");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.rejectpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AdminpenalComponent.prototype.pending = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "pending ");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.pendingpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    AdminpenalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminpenal',
            template: __webpack_require__("./src/app/components/admin/adminpenal/adminpenal.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/adminpenal/adminpenal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminpenalComponent);
    return AdminpenalComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/checkedcomplains/checkedcomplains.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\n/*search*/\r\n.searchform{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin-left: 25%;\r\n}\r\n.outerbox{\r\n    text-align: center;\r\n    margin-top: 4%;\r\n}\r\n#menuitem{\r\n    float: center;\r\n    width: 100%;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    height: 20%;\r\n    }\r\n.container{\r\n    background-color:floralwhite;\r\n    width: 70%;\r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: #545952;\r\n    text-align: center;\r\n    font-size: 3mm;\r\n    margin-top: 5%;\r\n}\r\n.norecipe{\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\nimg {\r\n    float: left;\r\n    margin-top: 20px\r\n}\r\n.add{\r\n    width: 70%;\r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n.searchtab{\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/checkedcomplains/checkedcomplains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n    <div class=\"container\">\n      <div id=\"menuitem\" >\n        <ul *ngFor=\"let complainlist of complains\">\n          <li>\n            <button [routerLink]=\"['/allrecipe',complainlist.complainid]\" class=\"add\">\n              <div id=\"container\" style=\"height:15%\">\n                <div class=\"row\" style=\"height:15%\">\n                  <div class=\"col-dm-8 col-md-push-3\" style=\"width:40%; padding-left:2% \">\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFIJE9WkxOxtpyTCG2rzWKzbnAcM_wwKeVffy_LJ8AAS2vskeYw\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:50%;\">\n                  </div>\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\n                    <h1 style=\"font-size:210%; margin-top: 20px;margin-left: -20%;\"> {{ complainlist.complain }}</h1><br>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.complainid }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.dateandtime }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.status }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.uid }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.action }}</h2>\n                  </div>\n                  <div style=\"margin-left:70%\">\n                  \n                  </div>\n                </div>\n              </div>\n            </button>\n        </ul>\n      </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/components/admin/checkedcomplains/checkedcomplains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckedcomplainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckedcomplainsComponent = /** @class */ (function () {
    function CheckedcomplainsComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    CheckedcomplainsComponent.prototype.ngOnInit = function () {
        this.searchAlluser();
    };
    CheckedcomplainsComponent.prototype.searchAlluser = function () {
        var _this = this;
        this.searchstatus = true;
        this.authservice.checkedcomplains().subscribe(function (res) {
            if (res.state) {
                _this.complains = res.complains;
                console.log(_this.complains);
                //console.log(res);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                console.log(res);
            }
        });
    };
    CheckedcomplainsComponent.prototype.remove = function (uid) {
        var _this = this;
        var user = {
            uid: uid
        };
        //alert(user.uid)
        this.authservice.removeuser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["user removed!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.searchAlluser();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    CheckedcomplainsComponent.prototype.warn = function (uid) {
        var _this = this;
        var reason = prompt("Please enter reason:", "warn");
        if (reason == null || reason == "") {
        }
        else {
            var user = {
                uid: uid,
                reason: reason
            };
            this.authservice.warnuser(user).subscribe(function (res) {
                if (res.state) {
                    _this.ngFlashMessageService.showFlashMessage({ messages: ["user Warned!"], dismissible: true, timeout: 4000, type: 'success' });
                    _this.searchAlluser();
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    CheckedcomplainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkedcomplains',
            template: __webpack_require__("./src/app/components/admin/checkedcomplains/checkedcomplains.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/checkedcomplains/checkedcomplains.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CheckedcomplainsComponent);
    return CheckedcomplainsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/pendingjobposts/pendingjobposts.component.css":
/***/ (function(module, exports) {

module.exports = "#menuitem{\r\n    margin-left: 15%;\r\n    float: center;\r\n    width: 70%;\r\n    padding: 10px;\r\n}\r\n.add{\r\n    width: 100%;\r\n    height: 200px;\r\n    box-align:center;\r\n    border-style: solid;\r\n    border-color: rgb(79,191,219); \r\n    text-align: center;\r\n    \r\n}\r\n.accepted{\r\n    background-color: lawngreen;\r\n    opacity: 0.8;\r\n}\r\n.rejected{\r\n    background-color: lightcoral;\r\n    opacity: 0.8;\r\n}\r\n.pending{\r\n    background-color: lightyellow;\r\n    opacity: 0.8;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.outerbox{\r\n    margin-left: 10%;\r\n    width: 80%;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    background-color: aqua;\r\n}\r\n.statusbtn{\r\n    text-align: right;\r\n}\r\n#reason{\r\n    width: 60%;\r\n}\r\n/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */"

/***/ }),

/***/ "./src/app/components/admin/pendingjobposts/pendingjobposts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n          <div class=\"outerbox\" style=\"background-color:rgba(255, 255, 255, 0.8)\">\n              <h2>Pending Job Posts</h2>\n          <div id=\"menuitem\">\n              <ul *ngFor=\"let jobs of job\">\n               <li *ngIf=\"jobs.status=='pending'\">\n                      <div   class=\"add pending\">\n                      <div id=\"menu\">\n                      \n                      <h1> {{ jobs.title }}</h1>\n                      <button [routerLink]=\"['/pendingjobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                  </div>\n                  <div class=\"statusbtn\">\n                      <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                      <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                      <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                  </div>\n                  </div>\n                  </li>\n              </ul>\n          </div>\n          </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/pendingjobposts/pendingjobposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingjobpostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingjobpostsComponent = /** @class */ (function () {
    function PendingjobpostsComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.getpost();
    }
    PendingjobpostsComponent.prototype.ngOnInit = function () {
    };
    PendingjobpostsComponent.prototype.getpost = function () {
        var _this = this;
        this.authservice.adminalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
                // console.log(this.job);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    PendingjobpostsComponent.prototype.accept = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "correct");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.acceptpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    PendingjobpostsComponent.prototype.reject = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "reject");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.rejectpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    PendingjobpostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pendingjobposts',
            template: __webpack_require__("./src/app/components/admin/pendingjobposts/pendingjobposts.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/pendingjobposts/pendingjobposts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PendingjobpostsComponent);
    return PendingjobpostsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/regadmin/regadmin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/regadmin/regadmin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  regadmin works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/regadmin/regadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegadminComponent = /** @class */ (function () {
    function RegadminComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.authservice.issuperadmin().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
    }
    RegadminComponent.prototype.ngOnInit = function () {
    };
    RegadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regadmin',
            template: __webpack_require__("./src/app/components/admin/regadmin/regadmin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/regadmin/regadmin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegadminComponent);
    return RegadminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.css":
/***/ (function(module, exports) {

module.exports = "#menuitem{\r\n    margin-left: 15%;\r\n    float: center;\r\n    width: 70%;\r\n    padding: 10px;\r\n}\r\n.add{\r\n    width: 100%;\r\n    height: 200px;\r\n    box-align:center;\r\n    border-style: solid;\r\n    border-color: rgb(79,191,219); \r\n    text-align: center;\r\n    \r\n}\r\n.accepted{\r\n    background-color: lawngreen;\r\n    opacity: 0.8;\r\n}\r\n.rejected{\r\n    background-color: lightcoral;\r\n    opacity: 0.8;\r\n}\r\n.pending{\r\n    background-color: lightyellow;\r\n    opacity: 0.8;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.outerbox{\r\n    margin-left: 10%;\r\n    width: 80%;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    background-color: aqua;\r\n}\r\n.statusbtn{\r\n    text-align: right;\r\n}\r\n#reason{\r\n    width: 60%;\r\n}\r\n/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */"

/***/ }),

/***/ "./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n          <div class=\"outerbox\" style=\"background-color:rgba(255, 255, 255, 0.8)\">\n              <h2>Rejected JOB POSTS</h2>\n          <div id=\"menuitem\">\n              <ul *ngFor=\"let jobs of job\">\n             <li *ngIf=\"jobs.status=='rejected'\">\n                  <div   class=\"add rejected\">\n                  <div id=\"menu\">\n                  \n                  <h1> {{ jobs.title }}</h1>\n                  <h1> {{ jobs.joblocation }}</h1>\n                  <button [routerLink]=\"['/alljobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\n                  </div>\n                  <div class=\"statusbtn\">\n                      <button (click)=\"accept(jobs.postid)\" class=\"btn btn-success\" *ngIf=\"jobs.status!='accepted'\">Accept</button>\n                      <button (click)=\"reject(jobs.postid)\" class=\"btn btn-danger\" *ngIf=\"jobs.status!='rejected'\">Reject</button>\n                      <button (click)=\"pending(jobs.postid)\" class=\"btn btn-warning\" *ngIf=\"jobs.status!='pending'\">Pending</button>\n                  </div>\n              </div>\n                  </li>\n              </ul>\n          </div>\n          </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectedjobpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RejectedjobpostComponent = /** @class */ (function () {
    function RejectedjobpostComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.getpost();
    }
    RejectedjobpostComponent.prototype.ngOnInit = function () {
    };
    RejectedjobpostComponent.prototype.getpost = function () {
        var _this = this;
        this.authservice.adminalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
                // console.log(this.job);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RejectedjobpostComponent.prototype.accept = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "correct");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.acceptpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RejectedjobpostComponent.prototype.pending = function (postid) {
        var _this = this;
        this.reason = prompt("Please enter reason", "pending ");
        var review = {
            "postid": postid,
            "reason": this.reason
        };
        this.authservice.pendingpost(review).subscribe(function (res) {
            if (res.state) {
                _this.getpost();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    RejectedjobpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rejectedjobpost',
            template: __webpack_require__("./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/rejectedjobpost/rejectedjobpost.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RejectedjobpostComponent);
    return RejectedjobpostComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/reviewcomplain/reviewcomplain.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\n/*search*/\r\n.searchform{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin-left: 25%;\r\n}\r\n.outerbox{\r\n    text-align: center;\r\n    margin-top: 4%;\r\n}\r\n#menuitem{\r\n    float: center;\r\n    width: 100%;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    height: 20%;\r\n    }\r\n.container{\r\n    background-color:floralwhite;\r\n    width: 70%;\r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: #545952;\r\n    text-align: center;\r\n    font-size: 3mm;\r\n    margin-top: 5%;\r\n}\r\n.norecipe{\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\nimg {\r\n    float: left;\r\n    margin-top: 20px\r\n}\r\n.add{\r\n    width: 70%;\r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n.searchtab{\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/reviewcomplain/reviewcomplain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n    <div class=\"container\">\n      <div id=\"menuitem\" >\n        <ul *ngFor=\"let complainlist of complains\">\n          <li>\n            <button [routerLink]=\"['/allrecipe',complainlist.complainid]\" class=\"add\">\n              <div id=\"container\" style=\"height:15%\">\n                <div class=\"row\" style=\"height:15%\">\n                  <div class=\"col-dm-8 col-md-push-3\" style=\"width:40%; padding-left:2% \">\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFIJE9WkxOxtpyTCG2rzWKzbnAcM_wwKeVffy_LJ8AAS2vskeYw\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:50%;\">\n                  </div>\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\n                    <h1 style=\"font-size:210%; margin-top: 20px;margin-left: -20%;\"> {{ complainlist.complain }}</h1><br>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.complainid }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.dateandtime }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.status }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ complainlist.uid }}</h2>\n                  </div>\n                  <div style=\"margin-left:60%\">\n                  <button type=\"submit\" class=\"btn btn-warning btn-md\" (click)=\"this.complaineduserwarn(complainlist.uid,complainlist.complainid)\">Warn User</button>\n                  <button type=\"submit\" class=\"btn btn-danger btn-md\" (click)=\"this.complaineduserremove(complainlist.uid,complainlist.complainid)\">Remove User</button>\n                  </div>\n                </div>\n              </div>\n            </button>\n        </ul>\n      </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/components/admin/reviewcomplain/reviewcomplain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewcomplainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewcomplainComponent = /** @class */ (function () {
    function ReviewcomplainComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    ReviewcomplainComponent.prototype.ngOnInit = function () {
        this.searchAlluser();
    };
    ReviewcomplainComponent.prototype.searchAlluser = function () {
        var _this = this;
        this.searchstatus = true;
        this.authservice.uncheckedcomplains().subscribe(function (res) {
            if (res.state) {
                _this.complains = res.complains;
                console.log(_this.complains);
                //console.log(res);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                console.log(res);
            }
        });
    };
    ReviewcomplainComponent.prototype.complaineduserremove = function (uid, complainid) {
        var _this = this;
        var user = {
            uid: uid,
            complainid: complainid
        };
        //alert(user.uid)
        this.authservice.complaineduserremove(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["user removed!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.searchAlluser();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    ReviewcomplainComponent.prototype.complaineduserwarn = function (uid, complainid) {
        var _this = this;
        var reason = prompt("Please enter reason:", "warn");
        if (reason == null || reason == "") {
        }
        else {
            var user = {
                uid: uid,
                reason: reason,
                complainid: complainid
            };
            this.authservice.complaineduserwarn(user).subscribe(function (res) {
                if (res.state) {
                    _this.ngFlashMessageService.showFlashMessage({ messages: ["user Warned!"], dismissible: true, timeout: 4000, type: 'success' });
                    _this.searchAlluser();
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    ReviewcomplainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviewcomplain',
            template: __webpack_require__("./src/app/components/admin/reviewcomplain/reviewcomplain.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/reviewcomplain/reviewcomplain.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ReviewcomplainComponent);
    return ReviewcomplainComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/sample/sample.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */"

/***/ }),

/***/ "./src/app/components/admin/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;\">\n    <p>\n      sample works!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    SampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__("./src/app/components/admin/sample/sample.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/searchusers/searchusers.component.css":
/***/ (function(module, exports) {

module.exports = "/* coloum view start */\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    \r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    padding: 10px;\r\n    height: 100%; /* Should be removed. Only for demonstration */\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* coloum view end */\r\n/*search*/\r\n.searchform{\r\n    width: 50%;\r\n    text-align: center;\r\n    margin-left: 25%;\r\n}\r\n.outerbox{\r\n    text-align: center;\r\n    margin-top: 4%;\r\n}\r\n#menuitem{\r\n    float: center;\r\n    width: 100%;\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    height: 20%;\r\n    }\r\n.container{\r\n    background-color:floralwhite;\r\n    width: 70%;\r\n    border-style: double;\r\n    border-width: 5px;\r\n    border-color: #545952;\r\n    text-align: center;\r\n    font-size: 3mm;\r\n}\r\n.norecipe{\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\nimg {\r\n    float: left;\r\n    margin-top: 20px\r\n}\r\n.add{\r\n    width: 70%;\r\n    box-align:\"left\";\r\n    border-style: solid;\r\n    border-color: #605f5c; \r\n    text-align: center;\r\n    background-color: #bcbbb7;\r\n    border-radius: 10px;\r\n    padding-left: 3%;\r\n}\r\n.add:hover{\r\n   color: aqua;\r\n    -webkit-transition:all 0.40s ease-in;\r\n    transition:all 0.40s ease-in;\r\n    background-color: #605b4b;\r\n    border-radius: 10px;\r\n    border-color: #c9a428;\r\n    border-style: solid;\r\n    border-width: thick;\r\n    \r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\nimg {\r\n    float: center;\r\n}\r\n.searchtab{\r\n    width: 40%;\r\n    margin-left: 30%;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/searchusers/searchusers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\" style=\"background-color:#aaa;\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"column2\" style=\"background-color:#bbb;min-height: 800px;\">\n    <div class=\"outerbox\">\n      <div class=\"searchform\">\n        <form class=\"form\" #form=ngForm (submit)=\"searchuser()\">\n          <div class=\"form-group searchtab\">\n            <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"User name\" name=\"search\" [(ngModel)]=\"search\"\n              required><br>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!form.valid\">Search</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"container\" *ngIf=\"this.searchstatus==true\">\n      <div id=\"menuitem\" >\n        <ul *ngFor=\"let userlist of users\">\n          <li>\n            <button [routerLink]=\"['/allrecipe',userlist.username]\" class=\"add\">\n              <div id=\"container\" style=\"height:15%\">\n                <div class=\"row\" style=\"height:15%\">\n                  <div class=\"col-dm-8 col-md-push-3\" style=\"width:40%; padding-left:2% \">\n                    <img src=\"{{ userlist.photourl }}\" id=\"pic\" class=\"img-rounded\" alt=\"\" style=\"width:50%;\">\n                  </div>\n                  <div class=\"col-dm-8 col-md-pull-8\" style=\"width:50%;height:10%;padding-left: 5%;\">\n                    <h1 style=\"font-size:210%; margin-top: 20px;margin-left: -20%;\"> {{ userlist.username }}</h1><br>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">{{ userlist.firstName }} {{ userlist.lastName }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">Email:{{ userlist.email }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">Role:{{ userlist.rolename }}</h2>\n                    <h2 style=\"font-size:110%;margin-left:-150%;\">Gender:{{ userlist.gender }}</h2>\n                  </div>\n                  <div style=\"margin-left:70%\">\n                  <button type=\"submit\" class=\"btn btn-warning btn-md\" (click)=\"this.warn(userlist.uid)\">Warn</button>\n                  <button type=\"submit\" class=\"btn btn-danger btn-md\" (click)=\"this.remove(userlist.uid)\">Remove</button>\n                  </div>\n                </div>\n              </div>\n            </button>\n        </ul>\n      </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/components/admin/searchusers/searchusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchusersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchusersComponent = /** @class */ (function () {
    function SearchusersComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.searchstatus = false;
    }
    SearchusersComponent.prototype.ngOnInit = function () {
        this.searchAlluser();
    };
    SearchusersComponent.prototype.searchuser = function () {
        var _this = this;
        this.searchstatus = true;
        var username = {
            username: this.search
        };
        this.authservice.searchUser(username).subscribe(function (res) {
            if (res.state) {
                _this.usercount = res.usercount;
                if (res.usercount) {
                    _this.users = res.users;
                    _this.imgurl = res.users.photourl;
                    //console.log(this.recipe)
                }
                else {
                    alert("no user found!");
                }
                //console.log(res);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                console.log(res);
            }
        });
    };
    SearchusersComponent.prototype.searchAlluser = function () {
        var _this = this;
        this.searchstatus = true;
        this.authservice.searchAllUser().subscribe(function (res) {
            if (res.state) {
                _this.usercount = res.usercount;
                if (res.usercount) {
                    _this.users = res.users;
                    _this.imgurl = res.users.photourl;
                    console.log(_this.users);
                }
                else {
                    document.getElementById("norecipe").innerHTML = "Hello World";
                }
                //console.log(res);
            }
            else {
                //console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                console.log(res);
            }
        });
    };
    SearchusersComponent.prototype.remove = function (uid) {
        var _this = this;
        var user = {
            uid: uid
        };
        //alert(user.uid)
        this.authservice.removeuser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["user removed!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.searchAlluser();
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    SearchusersComponent.prototype.warn = function (uid) {
        var _this = this;
        var reason = prompt("Please enter reason:", "warn");
        if (reason == null || reason == "") {
        }
        else {
            var user = {
                uid: uid,
                reason: reason
            };
            this.authservice.warnuser(user).subscribe(function (res) {
                if (res.state) {
                    _this.ngFlashMessageService.showFlashMessage({ messages: ["user Warned!"], dismissible: true, timeout: 4000, type: 'success' });
                    _this.searchAlluser();
                }
                else {
                    _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
                }
            });
        }
    };
    SearchusersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-searchusers',
            template: __webpack_require__("./src/app/components/admin/searchusers/searchusers.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/searchusers/searchusers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchusersComponent);
    return SearchusersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/sidemenu/sidemenu.component.css":
/***/ (function(module, exports) {

module.exports = "i{\r\n    margin-right: 2%;\r\n}\r\na:hover{\r\n  text-decoration: none;\r\n}\r\n.nav-side-menu {\r\n    overflow: auto;\r\n    font-family: verdana;\r\n    font-size: 150%;\r\n    /*font-weight: 200;*/\r\n    background-color: #2e353d;\r\n    position: relative;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 800px;\r\n    color: #e1ffff;\r\n    padding-left: 8%;\r\n  }\r\n.nav-side-menu .brand {\r\n    background-color: #23282e;\r\n    line-height: 50px;\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n.nav-side-menu .toggle-btn {\r\n    display: none;\r\n  }\r\n.nav-side-menu ul,\r\n  .nav-side-menu li {\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    cursor: pointer;\r\n    /*    \r\n      .collapsed{\r\n         .arrow:before{\r\n                   font-family: FontAwesome;\r\n                   content: \"\\f053\";\r\n                   display: inline-block;\r\n                   padding-left:10px;\r\n                   padding-right: 10px;\r\n                   vertical-align: middle;\r\n                   float:right;\r\n              }\r\n       }\r\n  */\r\n  }\r\n.nav-side-menu ul :not(collapsed) .arrow:before,\r\n  .nav-side-menu li :not(collapsed) .arrow:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f078\";\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n    float: right;\r\n  }\r\n.nav-side-menu ul .active,\r\n  .nav-side-menu li .active {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n  }\r\n.nav-side-menu ul .sub-menu li.active,\r\n  .nav-side-menu li .sub-menu li.active {\r\n    color: #d19b3d;\r\n  }\r\n.nav-side-menu ul .sub-menu li.active a,\r\n  .nav-side-menu li .sub-menu li.active a {\r\n    color: #d19b3d;\r\n  }\r\n.nav-side-menu ul .sub-menu li,\r\n  .nav-side-menu li .sub-menu li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu li:hover,\r\n  .nav-side-menu li .sub-menu li:hover {\r\n    background-color: #020203;\r\n  }\r\n.nav-side-menu ul .sub-menu li:before,\r\n  .nav-side-menu li .sub-menu li:before {\r\n    font-family: Fontawesome;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 20px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n.nav-side-menu li {\r\n    padding-left: 0px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n.nav-side-menu li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n.nav-side-menu li a i {\r\n    padding-left: 10px;\r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n.nav-side-menu li:hover {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n@media (max-width: 767px) {\r\n    .nav-side-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    .nav-side-menu .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n    .brand {\r\n      text-align: left !important;\r\n      font-size: 22px;\r\n      padding-left: 20px;\r\n      line-height: 50px !important;\r\n    }\r\n  }\r\n@media (min-width: 767px) {\r\n    .nav-side-menu .menu-list .menu-content {\r\n      display: block;\r\n    }\r\n  }\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu ul .sub-line li.active,\r\n  .nav-side-menu li .sub-menu li .sub-line li.active {\r\n    color: #d19b3d;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li.active a,\r\n  .nav-side-menu li .sub-menu li .sub-line li.active a {\r\n    color: #d19b3d;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li,\r\n  .nav-side-menu li .sub-menu li .sub-line li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li:hover,\r\n  .nav-side-menu li .sub-menu li .sub-line li:hover {\r\n    background-color: #020203;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li:before,\r\n  .nav-side-menu li .sub-menu li .sub-line li:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 100px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n.nav-side-menu .sub-menu li {\r\n    padding-left: 20px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n.nav-side-menu .sub-menu li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n.sub-menu li a i {\r\n    padding-left: 10px;\r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n.nav-side-menu li .sub-menu li:hover {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n@media (max-width: 767px) {\r\n   .nav-side-menu .sub-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n  .nav-side-menu  .sub-menu .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n    \r\n    .sub-line ul .sub-press li.active,\r\n  .sub-line li .sub-press li.active {\r\n    color: #d19b3d;\r\n  }\r\n  \r\n  .sub-line ul .sub-press li.active a,\r\n  .sub-line li .sub-press li.active a {\r\n    color: #d19b3d;\r\n  }\r\n  .sub-line ul .sub-press li,\r\n  .sub-line li .sub-press li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n  .sub-line ul .sub-press li:hover,\r\n  .sub-line li .sub-press li:hover {\r\n    background-color: #020203;\r\n  }\r\n  .sub-line ul .sub-press li:before,\r\n  .sub-line li .sub-press li:before {\r\n    font-family: Arial;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 50px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .sub-line li {\r\n    padding-left: 20px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n  .sub-line li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n  .sub-line li a i {\r\n    padding-left: 50px;\r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  .sub-line li:hover {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n  @media (max-width: 767px) {\r\n    .sub-line {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    .sub-line .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n}\r\n}\r\n#profpic{\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  margin-left: 25%;\r\n  width: 50%;\r\n  \r\n}\r\nimg {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  width: 150px;\r\n}\r\nimg:hover {\r\n  -webkit-box-shadow: 0 0 2px 5px rgba(0, 140, 186, 0.6);\r\n          box-shadow: 0 0 2px 5px rgba(0, 140, 186, 0.6);\r\n}"

/***/ }),

/***/ "./src/app/components/admin/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\r\n\r\n  <img src=\"{{this.profurl}}\" alt=\"profile Photo\" id=\"profpic\">\r\n  <div class=\"brand\">{{this.username}}</div>\r\n  <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n  <div class=\"menu-list\">\r\n\r\n    <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n\r\n      <a [routerLink]=\"['/adminhome']\">\r\n        <li>\r\n          <i class=\"fa fa-tachometer-alt fa-lg\"></i> Dashboard</li>\r\n      </a>\r\n\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\">\r\n        <i class=\"fa fa-users fa-lg\"></i> Creat New User <span class=\"arrow\"></span>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"products\">\r\n        <a [routerLink]=\"['/addadvertiser']\">\r\n          <li>create new advertiser</li>\r\n        </a>\r\n        <a [routerLink]=\"['/addadmin']\">\r\n          <li>create new admin</li>\r\n        </a>\r\n        <a [routerLink]=\"['/addsuperadmin']\">\r\n          <li>create new superadmin</li>\r\n        </a>\r\n\r\n      </ul>\r\n\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n        <i class=\"fa fa-th-list fa-lg\"></i> Review Job Post <span class=\"arrow\"></span>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"service\">\r\n        <a [routerLink]=\"['/alljobpost']\">\r\n          <li>All Job Post</li>\r\n        </a>\r\n        <a [routerLink]=\"['/pendingjobpost']\">\r\n          <li>Pending Job Post</li>\r\n        </a>\r\n        <a [routerLink]=\"['/acceptedjobpost']\">\r\n          <li>Accepted Job Post</li>\r\n        </a>\r\n        <a [routerLink]=\"['/rejectedjobpost']\">\r\n          <li>Rejected Job Post</li>\r\n        </a>\r\n      </ul>\r\n\r\n\r\n      <li>\r\n        <a [routerLink]=\"['/searchusers']\">\r\n          <i class=\"fa fa-address-book fa-lg\" aria-hidden=\"true\"></i> Search User\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <li>\r\n        <a [routerLink]=\"['/adminhome']\">\r\n          <i class=\"fa fa-user fa-lg\"></i> Profile\r\n        </a>\r\n      </li>\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#new2\" class=\"collapsed\">\r\n        <i class=\"fa fa-car fa-lg\"></i> Complains <span class=\"arrow\"></span>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"new2\">\r\n        <a [routerLink]=\"['/reviewcomplain']\">\r\n          <li>Unchecked</li>\r\n        </a>\r\n        <a [routerLink]=\"['/checkedcomplains']\">\r\n          <li>Checked</li>\r\n        </a>\r\n      </ul>\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#advertiesment\" class=\"collapsed\">\r\n        <i class=\"fa fa-car fa-lg\"></i> Advertiesment <span class=\"arrow\"></span>\r\n      </li>\r\n      <ul class=\"sub-menu collapse\" id=\"advertiesment\">\r\n        <a [routerLink]=\"['/addadvertiesment']\">\r\n          <li>add advertiesment</li>\r\n        </a>\r\n        <a [routerLink]=\"['/checkedcomplains']\">\r\n          <li>view addvertiesment</li>\r\n        </a>\r\n      </ul>\r\n\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.loadprofpic().subscribe(function (res) {
            if (res.state) {
                console.log(res.data.url);
                _this.profurl = res.data.url;
                _this.username = res.data.username;
            }
            else {
                console.log("error image url load");
            }
        });
    };
    SidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__("./src/app/components/admin/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/advertiser/advertiserhome/advertiserhome.component.css":
/***/ (function(module, exports) {

module.exports = ".chart{\r\n    padding-left: 20px;\r\n    width: 100%;\r\n    padding-right: 10px;\r\n    padding-top: 50px;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin-top: -10px;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n    padding-left: 0%;\r\n    float: left;\r\n    width: 25%;\r\n\r\n}\r\n.column2 {\r\n    float: left;\r\n    width: 75%;\r\n    \r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}"

/***/ }),

/***/ "./src/app/components/advertiser/advertiserhome/advertiserhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    \r\n    <div class=\"container-fluid\">\r\n            <div class=\"column\" style=\"background-color:#aaa;\">\r\n                    <app-sidebar></app-sidebar>\r\n                </div>\r\n        <div class=\"column2\">\r\n\r\n            <div class=\"col-md-8, chart\">\r\n                <app-charts [title]=\"'Past Activities'\" [subtitle]=\"'5 Months Performance'\" [chartType]=\"hoursChartType\" [chartData]=\"hoursChartData\"\r\n                    [chartOptions]=\"hoursChartOptions\" [chartResponsive]=\"hoursChartResponsive\" [legendItems]=\"hoursChartLegendItems\"\r\n                    [withHr]=\"true\" [footerIconClass]=\"'fa fa-history'\" [footerText]=\"'Updated 3 minutes ago'\">\r\n                </app-charts>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/advertiser/advertiserhome/advertiserhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertiserhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_charts_component__ = __webpack_require__("./src/app/components/advertiser/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvertiserhomeComponent = /** @class */ (function () {
    function AdvertiserhomeComponent() {
    }
    AdvertiserhomeComponent.prototype.ngOnInit = function () {
        this.hoursChartType = __WEBPACK_IMPORTED_MODULE_1__charts_charts_component__["a" /* ChartType */].Line;
        this.hoursChartData = {
            labels: ['July', 'August', 'September', 'October', 'November'],
            series: [
                [0, 4, 5, 1, 2],
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: true,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_2_chartist__["Interpolation"].simple({
                divisor: 4
            }),
            showLine: false,
            showPoint: true,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Activity', imageClass: 'fa fa-circle text-info' },
        ];
    };
    AdvertiserhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-advertiserhome',
            template: __webpack_require__("./src/app/components/advertiser/advertiserhome/advertiserhome.component.html"),
            styles: [__webpack_require__("./src/app/components/advertiser/advertiserhome/advertiserhome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvertiserhomeComponent);
    return AdvertiserhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/advertiser/charts/charts.component.css":
/***/ (function(module, exports) {

module.exports = ".ct-chart{\r\nfill: skyblue;\r\nstroke: darkgrey;\r\npadding-left: 100px;\r\nstroke-dasharray: 0.1%\r\n}\r\n.legend{\r\n    padding-left: 150px;\r\n}\r\n.header{\r\n    padding-left: 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/advertiser/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"header\">\r\n    <h4 class=\"title\">{{ title }}</h4>\r\n    <p class=\"category\">{{ subtitle }}</p>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"legend\">\r\n        <span *ngFor=\"let item of legendItems\">\r\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\r\n        </span>\r\n      </div>\r\n      <hr *ngIf=\"withHr\">\r\n      <div class=\"stats\">\r\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/advertiser/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent_1 = ChartsComponent;
    ChartsComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + ChartsComponent_1.currentId++;
    };
    ChartsComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    ChartsComponent.currentId = 1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ChartsComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "chartData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "footerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChartsComponent.prototype, "withHr", void 0);
    ChartsComponent = ChartsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("./src/app/components/advertiser/charts/charts.component.html"),
            styles: [__webpack_require__("./src/app/components/advertiser/charts/charts.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
    var ChartsComponent_1;
}());



/***/ }),

/***/ "./src/app/components/advertiser/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\ni{\r\n    margin-right: 2%;\r\n}\r\na:hover{\r\n  text-decoration: none;\r\n}\r\n.nav-side-menu {\r\n    overflow: auto;\r\n    font-family: verdana;\r\n    font-size: 100%;\r\n    /*font-weight: 200;*/\r\n    background-color: #2e353d;\r\n    position: relative;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 550px;\r\n    \r\n    color: #e1ffff;\r\n   \r\n  }\r\n.nav-side-menu .brand {\r\n    background-color: #23282e;\r\n    line-height: 50px;\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-family: 'Montserrat', sans-serif;\r\n  }\r\n.nav-side-menu .toggle-btn {\r\n    display: none;\r\n  }\r\n.nav-side-menu ul,\r\n  .nav-side-menu li {\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    cursor: pointer;\r\n    /*    \r\n      .collapsed{\r\n         .arrow:before{\r\n                   font-family: FontAwesome;\r\n                   content: \"\\f053\";\r\n                   display: inline-block;\r\n                   padding-left:10px;\r\n                   padding-right: 10px;\r\n                   vertical-align: middle;\r\n                   float:right;\r\n              }\r\n       }\r\n  */\r\n  }\r\n.nav-side-menu ul :not(collapsed) .arrow:before,\r\n  .nav-side-menu li :not(collapsed) .arrow:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f078\";\r\n    display: inline-block;\r\n    \r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n    float: right;\r\n  }\r\n.nav-side-menu ul .active,\r\n  .nav-side-menu li .active {\r\n    border-left: 3px solid #1818f3;\r\n    background-color: #4f5b69;\r\n  }\r\n.nav-side-menu ul .sub-menu li.active,\r\n  .nav-side-menu li .sub-menu li.active {\r\n    color: #1818f3;\r\n  }\r\n.nav-side-menu ul .sub-menu li.active a,\r\n  .nav-side-menu li .sub-menu li.active a {\r\n    color: #1818f3;\r\n  }\r\n.nav-side-menu ul .sub-menu li,\r\n  .nav-side-menu li .sub-menu li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu li:hover,\r\n  .nav-side-menu li .sub-menu li:hover {\r\n    background-color: #020203;\r\n  }\r\n.nav-side-menu ul .sub-menu li:before,\r\n  .nav-side-menu li .sub-menu li:before {\r\n    font-family: Fontawesome;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 20px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n.nav-side-menu li {\r\n    padding-left: 0px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n.nav-side-menu li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n.nav-side-menu li a i {\r\n    \r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n.nav-side-menu li:hover {\r\n    border-left: 3px solid #1818f3;;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n@media (max-width: 767px) {\r\n    .nav-side-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    .nav-side-menu .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n    .brand {\r\n      text-align: left !important;\r\n      font-size: 22px;\r\n      padding-left: 20px;\r\n      line-height: 50px !important;\r\n    }\r\n  }\r\n@media (min-width: 767px) {\r\n    .nav-side-menu .menu-list .menu-content {\r\n      display: block;\r\n    }\r\n  }\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu ul .sub-line li.active,\r\n  .nav-side-menu li .sub-menu li .sub-line li.active {\r\n    color: #1818f3;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li.active a,\r\n  .nav-side-menu li .sub-menu li .sub-line li.active a {\r\n    color: #1818f3;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li,\r\n  .nav-side-menu li .sub-menu li .sub-line li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li:hover,\r\n  .nav-side-menu li .sub-menu li .sub-line li:hover {\r\n    background-color: #020203;\r\n  }\r\n.nav-side-menu ul .sub-menu li .sub-line li:before,\r\n  .nav-side-menu li .sub-menu li .sub-line li:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 100px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n.nav-side-menu .sub-menu li {\r\n    padding-left: 20px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n.nav-side-menu .sub-menu li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n.sub-menu li a i {\r\n   \r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n.nav-side-menu li .sub-menu li:hover {\r\n    border-left: 3px solid #1818f3;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n@media (max-width: 767px) {\r\n   .nav-side-menu .sub-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n  .nav-side-menu  .sub-menu .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n    \r\n    .sub-line ul .sub-press li.active,\r\n  .sub-line li .sub-press li.active {\r\n    color: #1818f3;\r\n  }\r\n  \r\n  .sub-line ul .sub-press li.active a,\r\n  .sub-line li .sub-press li.active a {\r\n    color: #1818f3;\r\n  }\r\n  .sub-line ul .sub-press li,\r\n  .sub-line li .sub-press li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n  .sub-line ul .sub-press li:hover,\r\n  .sub-line li .sub-press li:hover {\r\n    background-color: #020203;\r\n  }\r\n  .sub-line ul .sub-press li:before,\r\n  .sub-line li .sub-press li:before {\r\n    font-family: Arial;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 50px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .sub-line li {\r\n    padding-left: 20px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n  .sub-line li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n  .sub-line li a i {\r\n    padding-left: 50px;\r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  .sub-line li:hover {\r\n    border-left: 3px solid #1818f3;\r\n    background-color: #4f5b69;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n  }\r\n  @media (max-width: 767px) {\r\n    .sub-line {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    .sub-line .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n}\r\n}\r\n#profpic{\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  margin-left: 25%;\r\n  width: 50%;\r\n  \r\n}\r\nimg {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  width: 150px;\r\n}\r\nimg:hover {\r\n  -webkit-box-shadow: 0 0 2px 5px rgba(0, 140, 186, 0.6);\r\n          box-shadow: 0 0 2px 5px rgba(0, 140, 186, 0.6);\r\n}"

/***/ }),

/***/ "./src/app/components/advertiser/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\r\n\r\n  <img src=\"{{this.profurl}}\" alt=\"profile Photo\" id=\"profpic\">\r\n  <div class=\"brand\">{{this.username}}l</div>\r\n  <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n  <div class=\"menu-list\">\r\n\r\n    <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n\r\n      <a [routerLink]=\"['/advertiserhome']\">\r\n        <li data-toggle=\"collapse\" data-target=\"advertiserhome\" class=\" active\">\r\n          <i class=\"fa fa-dashboard fa-lg\"></i> Dashboard</li>\r\n      </a>\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"/home\" class=\"collapsed\">\r\n        <i class=\"fa fa-bar-chart\"></i> Statistics</li>\r\n\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#\" class=\"collapsed\">\r\n        <i class=\"fa fa-user\"></i> Profile</li>\r\n\r\n\r\n      <li data-toggle=\"collapse\" data-target=\"#\" class=\"collapsed\">\r\n        <i class=\"fa fa-pencil\"></i> Publish </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/advertiser/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.loadprofpic().subscribe(function (res) {
            if (res.state) {
                console.log(res.data.url);
                _this.profurl = res.data.url;
                _this.username = res.data.username;
            }
            else {
                console.log("error image url load");
            }
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/advertiser/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/advertiser/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/cleaner/cleanerhome/cleanerhome.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n/* Create three equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 33.33%;\r\n    padding: 10px;\r\n    height: 300px; /* Should be removed. Only for demonstration */\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\ndiv.ex3 {\r\n    background-color: lightblue;\r\n    width: 430px;\r\n    height: 420px;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/cleaner/cleanerhome/cleanerhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"column\" style=\"background-color:#aaa;\">\r\n      <div class=\"card\" style=\"width:400px\">\r\n          <img class=\"card-img-bottom\" src=\"/assets/DP.png\" alt=\"Display Picture\" style=\"margin:auto;;width:80%\">\r\n          <div class=\"card-header\">\r\n              <h2 class=\"card-title\">{{user.username}}</h2>\r\n              <h4 class=\"card-title\"><i>{{user.email}}</i></h4>\r\n              <p class=\"card-text\"><br>This person can be Owner,Admin,Customer,Cleaner or Advertiser.</p>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\" style=\"background-color:#bbb;\">\r\n    <h1>Confirmed Jobs</h1>\r\n    <div class=\"ex3\">\r\n      <ul>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      <li><h3>this is an example</h3></li>\r\n      <br>\r\n      </ul>\r\n      this is an example\r\n      <br>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\" style=\"background-color:#ccc;\">\r\n    <h1>All Job Posts</h1>\r\n    <div class=\"ex3\">\r\n    <ul *ngFor=\"let jobs of job\">\r\n      <li *ngIf=\"jobs.status=='accepted'\">\r\n      <div>\r\n          <h5> {{ jobs.title }}</h5>\r\n          <h6> {{ jobs.joblocation }}</h6>\r\n         <button [routerLink]=\"['/acceptedjobpost',jobs.postid]\" class=\"btn btn-info btn-lg\">View job</button><br>\r\n      </div>\r\n      </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cleaner/cleanerhome/cleanerhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleanerhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CleanerhomeComponent = /** @class */ (function () {
    function CleanerhomeComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.getalljobs();
    }
    CleanerhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.iscleaner().subscribe(function (res) {
            if (res.state) {
            }
            else {
                _this.router.navigate(['/..']);
            }
        });
        this.authservice.getprofile().subscribe(function (res) {
            _this.user = res.userdata;
        });
    };
    CleanerhomeComponent.prototype.getalljobs = function () {
        var _this = this;
        this.authservice.getalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    };
    CleanerhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cleanerhome',
            template: __webpack_require__("./src/app/components/cleaner/cleanerhome/cleanerhome.component.html"),
            styles: [__webpack_require__("./src/app/components/cleaner/cleanerhome/cleanerhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CleanerhomeComponent);
    return CleanerhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n    border: 3px solid white;\r\n    width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top:10%;\r\n}\r\np{\r\n    font-size: 10vw;\r\n    color: white\r\n}\r\ni{\r\n    font-size: 3vw;\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <p>Tidy Master</p>\n  <i>keep clean, Be relaxed.</i>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/job/jobdetails/jobdetails.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    padding: 5%;\r\n    border-radius: 10px;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n    width: 50%;\r\n    margin-left: 25%;\r\n}\r\n.card-header{\r\n    margin-left: 5%;\r\n    text-align: left;\r\n}\r\nbutton{\r\n    margin-top: 10px;\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}"

/***/ }),

/***/ "./src/app/components/job/jobdetails/jobdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <img class=\"card-img-bottom\" src=\"/assets/location.png\" alt=\"Display Picture\" style=\"margin:auto;;width:80%\">\n      <div class=\"card-header\">\n        <h2 class=\"card-title\">Job : {{this.title}}</h2>\n        <h2 class=\"card-title\">Job Date : {{this.date}}</h2>\n        <h2 class=\"card-title\">Job Type : {{this.levelofjob}}</h2>\n        <div *ngIf=\"this.employeegender=='M'\">\n            <h2 class=\"card-title\">Gender preference : Male</h2>\n        </div>\n        <div *ngIf=\"this.employeegender=='F'\">\n            <h2 class=\"card-title\">Gender preference : Female</h2>\n        </div>\n        <h2 class=\"card-title\">Price per Hour : Rs.{{this.priceperhour}}</h2>\n        <h2 class=\"card-title\">Estimated Time : {{this.estimatedtime}} Hours</h2>\n        <h2 class=\"card-title\">No of Cleaners : {{this.numberofcleaners}}</h2>\n        <h2 class=\"card-title\">Location : {{this.joblocation}}</h2>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary center-block\">Apply</button>\n  </div>"

/***/ }),

/***/ "./src/app/components/job/jobdetails/jobdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobdetailsComponent = /** @class */ (function () {
    function JobdetailsComponent(activatedRoute, authservice, ngFlashMessageService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.postid = {
            postid: this.activatedRoute.snapshot.paramMap.get('postid')
        };
        this.authservice.getjobpost(this.postid).subscribe(function (res) {
            if (res.state) {
                _this.title = res.job.title;
                _this.jobdate = res.job.jobdate;
                _this.levelofjob = res.job.levelofjob;
                _this.employeegender = res.job.employeegender;
                _this.priceperhour = res.job.priceperhour;
                _this.estimatedtime = res.job.estimatedtime;
                _this.numberofcleaners = res.job.numberofcleaners;
                _this.joblocation = res.job.joblocation;
                _this.splitted = _this.jobdate.split("T", 2);
                _this.date = _this.splitted[0];
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    }
    JobdetailsComponent.prototype.ngOnInit = function () {
    };
    JobdetailsComponent.prototype.getpost = function () {
    };
    JobdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobdetails',
            template: __webpack_require__("./src/app/components/job/jobdetails/jobdetails.component.html"),
            styles: [__webpack_require__("./src/app/components/job/jobdetails/jobdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], JobdetailsComponent);
    return JobdetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/job/jobpost/jobpost.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n    border-radius: 10px;\r\n    margin: 5%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}"

/***/ }),

/***/ "./src/app/components/job/jobpost/jobpost.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form\" #form=ngForm (submit)=\"jobpost()\" style=\"background-color:rgba(255, 255, 255, 0.8)\">\n      <fieldset>\n        <legend style=\"text-align:center\">Post Job</legend>\n          <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Job Title :</label>\n              <input type=\"text\" class=\"form-control\" id=\"jobtitle\" placeholder=\"Enter job title\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\" required>\n            </div>\n  \n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Gender Preference :</label><br>\n                <input type=\"radio\" class=\"\" id=\"gender\" name=\"gender\" [(ngModel)]=\"gender\" value=\"Male\" required>Male<br>\n                <input type=\"radio\" class=\"\" id=\"gender\" name=\"gender\" [(ngModel)]=\"gender\" value=\"Female\" required>Female<br>\n              </div>\n  \n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">price per hour :</label>\n                <input type=\"Number\" class=\"form-control\" id=\"priceperhour\" placeholder=\"Price per hour\" name=\"priceperhour\" [(ngModel)]=\"priceperhour\" required>\n              </div>\n  \n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Estimated time :</label><br>\n                <input type=\"radio\" class=\"\" id=\"estimatedtime\" name=\"estimatedtime\" [(ngModel)]=\"estimatedtime\" value=\"2\" required>2 Hour<br>\n                <input type=\"radio\" class=\"\" id=\"estimatedtime\" name=\"estimatedtime\" [(ngModel)]=\"estimatedtime\" value=\"5\" required>5 Hour<br>\n                <input type=\"radio\" class=\"\" id=\"estimatedtime\" name=\"estimatedtime\" [(ngModel)]=\"estimatedtime\" value=\"8\" required>8 Hour<br>\n                <input type=\"radio\" class=\"\" id=\"estimatedtime\" name=\"estimatedtime\" [(ngModel)]=\"estimatedtime\" value=\"other\" required>Other<br>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">level of job :</label><br>\n                  <input type=\"radio\" class=\"\" id=\"levelofjob\" name=\"levelofjob\" [(ngModel)]=\"levelofjob\" value=\"easy\" required>Easy<br>\n                  <input type=\"radio\" class=\"\" id=\"levelofjob\" name=\"levelofjob\" [(ngModel)]=\"levelofjob\" value=\"medium\" required>Medium<br>\n                  <input type=\"radio\" class=\"\" id=\"levelofjob\" name=\"levelofjob\" [(ngModel)]=\"levelofjob\" value=\"hard\" required>Hard<br>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Number of cleaners :</label>\n                    <input type=\"Number\" class=\"form-control\" id=\"numberofcleaners\" placeholder=\"Number of cleaners\" name=\"numberofcleaners\" [(ngModel)]=\"numberofcleaners\" required>\n                  </div>\n          <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Start time :</label>\n                <input type=\"time\" class=\"form-control\" id=\"timeforstart\" placeholder=\"00:00\" name=\"timeforstart\" [(ngModel)]=\"timeforstart\" required>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Job location :</label>\n              <input type=\"text\" class=\"form-control\" id=\"joblocation\" placeholder=\"Job location\" name=\"joblocation\" [(ngModel)]=\"joblocation\" required>\n            </div>\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Job Date :</label>\n              <input type=\"date\" class=\"form-control\" id=\"jobdate\" placeholder=\"Job date\" name=\"jobdate\" [(ngModel)]=\"jobdate\" required>\n            </div>\n  \n        <button type=\"submit\" class=\"btn btn-primary center-block\" [disabled]=\"!form.valid\">Submit</button>\n      </fieldset>\n    </form>\n  </div> "

/***/ }),

/***/ "./src/app/components/job/jobpost/jobpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobpostComponent = /** @class */ (function () {
    function JobpostComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    JobpostComponent.prototype.ngOnInit = function () {
    };
    JobpostComponent.prototype.jobpost = function () {
        var _this = this;
        var job = {
            jobtitle: this.jobtitle,
            gender: this.gender,
            priceperhour: this.priceperhour,
            estimatedtime: this.estimatedtime,
            joblocation: this.joblocation,
            jobdate: this.jobdate,
            levelofjob: this.levelofjob,
            numberofcleaners: this.numberofcleaners,
            timeforstart: this.timeforstart,
            catogaryname: "gardning"
        };
        this.authservice.postjob(job).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Your job send to admin!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/..']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Something went wrong!"], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/jobpost']);
            }
        });
    };
    JobpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobpost',
            template: __webpack_require__("./src/app/components/job/jobpost/jobpost.component.html"),
            styles: [__webpack_require__("./src/app/components/job/jobpost/jobpost.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], JobpostComponent);
    return JobpostComponent;
}());



/***/ }),

/***/ "./src/app/components/job/viewjobs/viewjobs.component.css":
/***/ (function(module, exports) {

module.exports = "#menuitem{\r\n    margin-left: 15%;\r\n    float: center;\r\n    width: 70%;\r\n    padding: 10px;\r\n}\r\n.add{\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n    width: 100%;\r\n    height: 200px;\r\n    box-align:center;\r\n    border-style: solid;\r\n    border: 0.5px solid rgba(0,0,0,0.9);\r\n    border-radius: 10px;\r\n}\r\nbutton:hover{\r\n    color: rgb(79,191,219);\r\n}\r\nul{\r\n    list-style-type:none;\r\n    margin-top: 20px;\r\n    }\r\n.outerbox{\r\n    border-radius: 10px;\r\n    margin: 5%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n    text-align: center;\r\n    margin-left: 25%;\r\n    margin-right: 25%\r\n}\r\n.name{\r\n    font-size: 6mm;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/job/viewjobs/viewjobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outerbox\">\n  <h2 class=\"name\">All Job Post</h2>\n<div id=\"menuitem\">\n  <ul *ngFor=\"let jobs of job\">\n     <li>\n       <button class=\"add\" [routerLink]=\"['/viewjobs',jobs.postid]\">\n       <div id=\"menu\">\n       \n       <h1 style=\"font-size:8mm\"> {{ jobs.title }}</h1>\n       <h1 style=\"font-size:4mm\"> {{ jobs.joblocation }}</h1>\n      </div>\n       </button>\n     </li>\n  </ul>\n</div>\n</div> "

/***/ }),

/***/ "./src/app/components/job/viewjobs/viewjobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewjobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewjobsComponent = /** @class */ (function () {
    function ViewjobsComponent(authservice, ngFlashMessageService, router) {
        var _this = this;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.authservice.getalljobposts().subscribe(function (res) {
            if (res.state) {
                _this.job = res.jobs;
                // console.log(this.job);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
            }
        });
    }
    ViewjobsComponent.prototype.ngOnInit = function () {
    };
    ViewjobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewjobs',
            template: __webpack_require__("./src/app/components/job/viewjobs/viewjobs.component.html"),
            styles: [__webpack_require__("./src/app/components/job/viewjobs/viewjobs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ViewjobsComponent);
    return ViewjobsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color:rgba(0, 0, 0, 0.7);list-style-type: none;overflow: hidden;padding:10px;\r\n}\r\nnav a:hover{\r\n    color:rgb(79,191,219);\r\n    padding: 9px 9px;\r\n}\r\nnav div ul li a:hover{\r\n    color:rgb(79,191,219);\r\n    border: 1.5px solid rgb(255, 255, 255);\r\n    -webkit-transition:all 0.25s ease-in;\r\n    transition:all 0.25s ease-in;\r\n    padding: 9px 9px;\r\n    border-radius: 10px;\r\n}\r\ndiv ul li a{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    font-size: 5mm;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none; /*remove undeline of link*/\r\n}\r\nnav a{\r\n    margin-left: 20px;\r\n    font-size: 5mm;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none; /*remove undeline of link*/\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <img src=\"/../assets/TidyLogo.png\" width=\"65\" height=\"65\" alt=\"TidyLogo\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"nav-link\" [routerLink]=\"['/home']\" style=\"font-weight:bold\">Home</a>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 navbar-right\">\r\n         <!--<li class=\"nav-link\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/jobpost']\" *ngIf='authservice.loggedIn()'>Post job</a>\r\n        </li>\r\n        <li class=\"nav-link\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/adminpanel']\" *ngIf='authservice.loggedIn()'>Admin panel</a>\r\n            </li>-->\r\n\r\n        <li class=\"nav-link\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/adminhome']\" *ngIf='authservice.adminorsuperadmin'>Dashboard</a>\r\n        </li>\r\n\r\n        <li class=\"nav-link\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/viewjobs']\">View jobs</a>\r\n        </li>\r\n        <li class=\"nav-link\" *ngIf='authservice.loggedIn()'>\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-link\" *ngIf='!authservice.loggedIn()'>\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">LogIn <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-link\" *ngIf='!authservice.loggedIn()'>\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-link\">\r\n            <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\" *ngIf='authservice.loggedIn()'>LogOut <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authservice, ngFlashMessageService) {
        this.router = router;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        var _this = this;
        this.authservice.logOut().subscribe(function (res) {
            if (res.state) {
                _this.authservice.adminorsuperadmin = false;
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are successfully logged out!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/home']);
                return false;
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n    border-radius: 10px;\r\n    margin: 14%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form class=\"form\" #form=ngForm (submit)=\"loginUser()\">\r\n    <fieldset>\r\n      <legend>LogIn</legend>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Username :</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"userename\" placeholder=\"username\" name=\"username\" [(ngModel)]=\"username\" required>\r\n          </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password :</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"userpassword\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" required>\r\n          </div>\r\n      <button type=\"submit\" class=\"btn btn-primary center-block\" [disabled]=\"!form.valid\">Submit</button>\r\n    </fieldset>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authservice.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authservice.storeData(res.token, res.user);
                console.log(res.user.role);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are loggedin!"], dismissible: true, timeout: 4000, type: 'success' });
                if (res.user.role == "admin" || res.user.role == "superadmin") {
                    _this.authservice.adminorsuperadmin = true;
                    _this.router.navigate(['/adminhome']);
                }
                else if (res.user.role == "cleaner") {
                    _this.router.navigate(['/cleanerhome']);
                }
                else {
                    _this.router.navigate(['/profile']);
                }
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    ;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    border-radius: 10px;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n    margin: auto;\r\n}\r\n.card-header{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container\">\r\n    <div class=\"card\" style=\"width:400px\">\r\n        <img class=\"card-img-bottom\" src=\"/assets/DP.png\" alt=\"Display Picture\" style=\"margin:auto;;width:80%\">\r\n          <div class=\"card-header\">\r\n            <h2 class=\"card-title\">{{user.username}}</h2>\r\n            <h4 class=\"card-title\"><i>{{user.email}}</i></h4>\r\n            <h2 class=\"card-title\">{{user.nic}}</h2>\r\n            <h2 class=\"card-title\">{{user.gender}}</h2>\r\n\r\n            <p class=\"card-text\"><br>This person can be Owner,Admin,Customer,Cleaner or Advertiser.</p>\r\n          </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, ngFlashMessageService) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getprofile().subscribe(function (res) {
            _this.user = res.userdata;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n    border-radius: 10px;\r\n    margin: 4.2%;\r\n    background-color:rgba(255, 255, 255, 0.8);\r\n}\r\nlegend{\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\nlabel{\r\n    margin-left: 15px;\r\n}\r\nbutton{\r\n    color: rgba(0,0,0,0.8);\r\n    border-color: rgba(0,0,0,0.8);\r\n    background-color:rgba(255,255,255,0.85);\r\n    font-weight: bold;\r\n}\r\nbutton:hover{\r\n    border-color: rgba(0,0,0,0.9);\r\n    background-color:rgba(255,255,255,0.85);\r\n    color: rgb(79,191,219);\r\n}"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form class=\"form\" #form=ngForm (submit)=\"registerData()\">\r\n    <fieldset>\r\n      <legend>Register</legend>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">First Name :</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Your first name\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\r\n          </div>\r\n        \r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Last Name :</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Your last name\" name=\"lastname\" [(ngModel)]=\"lastname\" required>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">User name :</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your username\" name=\"username\" [(ngModel)]=\"username\" required>\r\n            </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Email :</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\" required>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Gender :</label>\r\n              <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Male' name=\"gender\" [(ngModel)]=\"gender\" required style=\"width:20%;\">Male\r\n              <input type=\"radio\" class=\"form-control\" id=\"gender\" value='Female' name=\"gender\" [(ngModel)]=\"gender\" required uired style=\"width:20%;\">Female\r\n            </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Phone No :</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your Phone number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required>\r\n            </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">NIC :</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nic\" placeholder=\"Your NIC\" name=\"nic\" [(ngModel)]=\"nic\" required>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Address :</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Your address\" name=\"address\" [(ngModel)]=\"address\" required>\r\n          </div>\r\n        \r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Role :</label>\r\n            <input type=\"radio\" class=\"form-control\" id=\"role\" value='customer' name=\"role\" [(ngModel)]=\"role\" required style=\"width:20%;\">customer\r\n            <input type=\"radio\" class=\"form-control\" id=\"role\" value='cleaner' name=\"role\" [(ngModel)]=\"role\" required uired style=\"width:20%;\">cleaner\r\n          </div>\r\n\r\n      <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary center-block\">Submit</button>\r\n\r\n    </fieldset>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            gender: this.gender,
            phoneno: this.phoneno,
            nic: this.nic,
            role: this.role,
            address: this.address
        };
        console.log(user);
        this.authservice.registerUser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/login']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['unauthorized']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.adminorsuperadmin = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/login", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.authtoken = token;
        this.user = userdata;
    };
    ;
    AuthService.prototype.getprofile = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.get("http://localhost:3000/user/profile", { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.fetchtoken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    ;
    AuthService.prototype.logOut = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get("http://localhost:3000/user/logout", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('tokenid');
    };
    AuthService.prototype.postjob = function (job) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/customer/jobpost", job, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getalljobposts = function () {
        //this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //headers.append('Authorization',this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/cleaner/getalljobs", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getjobpost = function (postid) {
        //this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //headers.append('Authorization',this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/cleaner/viewjob", postid, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.adminalljobposts = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/admin/adminalljobs", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.acceptpost = function (review) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'jobpostreview');
        return this.http.post("http://localhost:3000/admin/acceptpost", review, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.rejectpost = function (review) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'jobpostreview');
        return this.http.post("http://localhost:3000/admin/rejectpost", review, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.pendingpost = function (review) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'jobpostreview');
        return this.http.post("http://localhost:3000/admin/pendingpost", review, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.isadmin = function () {
        var user = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/admin/isadmin", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.iscleaner = function () {
        var user = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/cleaner/iscleaner", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.issuperadmin = function () {
        var user = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/admin/issuperadmin", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerAdvertiser = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'registeradvertiser');
        return this.http.post("http://localhost:3000/admin/specialuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.registerAdmin = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'registeramin');
        return this.http.post("http://localhost:3000/admin/specialuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.registerSuperAdmin = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'registersuperadmin');
        return this.http.post("http://localhost:3000/admin/specialuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.loadprofpic = function () {
        var user = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-Type', 'application/json');
        headers.append('Authorization', this.authtoken);
        return this.http.post("http://localhost:3000/admin/profpic", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.searchUser = function (username) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'searchuser');
        return this.http.post("http://localhost:3000/admin/searchusers", username, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.searchAllUser = function () {
        var username = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'searchuser');
        return this.http.post("http://localhost:3000/admin/searchusersmob", username, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeuser = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/removeuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.warnuser = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/warnuser", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.uncheckedcomplains = function () {
        var user = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/viewuncheckedcomplains", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkedcomplains = function () {
        var user = {};
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/viewcheckedcomplains", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.complaineduserremove = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/complaineduserremove", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.complaineduserwarn = function (user) {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        headers.append('accessresource', 'complainview');
        return this.http.post("http://localhost:3000/admin/complaineduserwarn", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.addadvertiesment = function (addvertiesment) {
        alert('Ddd');
        var formData = new FormData();
        formData.append('addvertiesment', addvertiesment.fileToUpload, addvertiesment.fileToUpload.name);
        formData.append('title', addvertiesment.title);
        formData.append('venderurl', addvertiesment.venderurl);
        return this.http.post("http://localhost:3000/admin/addadvertiesment", formData).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map