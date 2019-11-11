webpackJsonp(
    ["main"],
    {
        /***/ "./src/$$_lazy_route_resource lazy recursive": /***/ function(
            module,
            exports
        ) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncatched exception popping up in devtools
                return Promise.resolve().then(function() {
                    throw new Error("Cannot find module '" + req + "'.");
                });
            }
            webpackEmptyAsyncContext.keys = function() {
                return [];
            };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id =
                "./src/$$_lazy_route_resource lazy recursive";

            /***/
        },

        /***/ "./src/app/app-routing.module.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return AppRoutingModule;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(
                "./src/app/home/home.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_employees_component__ = __webpack_require__(
                "./src/app/employees/employees.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positions_positions_component__ = __webpack_require__(
                "./src/app/positions/positions.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__(
                "./src/app/page-not-found/page-not-found.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_employee_component__ = __webpack_require__(
                "./src/app/employee/employee.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_position_component__ = __webpack_require__(
                "./src/app/position/position.component.ts"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };

            var routes = [
                {
                    path: "home",
                    component:
                        __WEBPACK_IMPORTED_MODULE_2__home_home_component__[
                            "a" /* HomeComponent */
                        ]
                },
                {
                    path: "employees",
                    component:
                        __WEBPACK_IMPORTED_MODULE_3__employees_employees_component__[
                            "a" /* EmployeesComponent */
                        ]
                },
                {
                    path: "positions",
                    component:
                        __WEBPACK_IMPORTED_MODULE_4__positions_positions_component__[
                            "a" /* PositionsComponent */
                        ]
                },
                {
                    path: "employee/:_id",
                    component:
                        __WEBPACK_IMPORTED_MODULE_6__employee_employee_component__[
                            "a" /* EmployeeComponent */
                        ]
                },
                {
                    path: "position/:_id",
                    component:
                        __WEBPACK_IMPORTED_MODULE_7__position_position_component__[
                            "a" /* PositionComponent */
                        ]
                },
                { path: "", redirectTo: "/home", pathMatch: "full" },
                {
                    path: "**",
                    component:
                        __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__[
                            "a" /* PageNotFoundComponent */
                        ]
                }
            ];
            var AppRoutingModule = /** @class */ (function() {
                function AppRoutingModule() {}
                AppRoutingModule = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "I" /* NgModule */
                            ]
                        )({
                            imports: [
                                __WEBPACK_IMPORTED_MODULE_1__angular_router__[
                                    "c" /* RouterModule */
                                ].forRoot(routes)
                            ],
                            exports: [
                                __WEBPACK_IMPORTED_MODULE_1__angular_router__[
                                    "c" /* RouterModule */
                                ]
                            ]
                        })
                    ],
                    AppRoutingModule
                );
                return AppRoutingModule;
            })();

            /***/
        },

        /***/ "./src/app/app.component.css": /***/ function(module, exports) {
            module.exports = "";

            /***/
        },

        /***/ "./src/app/app.component.html": /***/ function(module, exports) {
            module.exports =
                "\n\n<!-- \n<router-outlet></router-outlet> -->\n\n<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>";

            /***/
        },

        /***/ "./src/app/app.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return AppComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /*********************************************************************************
             * WEB422 – Assignment 06
             * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
             * assignment has been copied manually or electronically from any other source (including web sites) or
             * distributed to other students.
             *
             * Name: Dinh Tran Student ID: 070-068-135 Date: July 03/ 2018
             *
             * https://dashboard.heroku.com/apps/fast-journey-75975
             *
             ********************************************************************************/
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };

            var AppComponent = /** @class */ (function() {
                function AppComponent() {
                    this.title = "app";
                }
                AppComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-root",
                            template: __webpack_require__(
                                "./src/app/app.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/app.component.css"
                                )
                            ]
                        })
                    ],
                    AppComponent
                );
                return AppComponent;
            })();

            /***/
        },

        /***/ "./src/app/app.module.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return AppModule;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(
                "./node_modules/@angular/platform-browser/esm5/platform-browser.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(
                "./node_modules/@angular/common/esm5/http.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(
                "./src/app/app-routing.module.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(
                "./src/app/app.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_component__ = __webpack_require__(
                "./src/app/nav.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_component__ = __webpack_require__(
                "./src/app/content.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_component__ = __webpack_require__(
                "./src/app/footer.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(
                "./src/app/home/home.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_employees_component__ = __webpack_require__(
                "./src/app/employees/employees.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__positions_positions_component__ = __webpack_require__(
                "./src/app/positions/positions.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__(
                "./src/app/page-not-found/page-not-found.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_position_service__ = __webpack_require__(
                "./src/app/data/position.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_employee_service__ = __webpack_require__(
                "./src/app/data/employee.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__employee_employee_component__ = __webpack_require__(
                "./src/app/employee/employee.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__position_position_component__ = __webpack_require__(
                "./src/app/position/position.component.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(
                "./node_modules/@angular/forms/esm5/forms.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };

            var AppModule = /** @class */ (function() {
                function AppModule() {}
                AppModule = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_1__angular_core__[
                                "I" /* NgModule */
                            ]
                        )({
                            declarations: [
                                __WEBPACK_IMPORTED_MODULE_5__app_component__[
                                    "a" /* AppComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_6__nav_component__[
                                    "a" /* NavComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_7__content_component__[
                                    "a" /* ContentComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_8__footer_component__[
                                    "a" /* FooterComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_9__home_home_component__[
                                    "a" /* HomeComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_10__employees_employees_component__[
                                    "a" /* EmployeesComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_11__positions_positions_component__[
                                    "a" /* PositionsComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__[
                                    "a" /* PageNotFoundComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_15__employee_employee_component__[
                                    "a" /* EmployeeComponent */
                                ],
                                __WEBPACK_IMPORTED_MODULE_16__position_position_component__[
                                    "a" /* PositionComponent */
                                ]
                            ],
                            imports: [
                                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__[
                                    "a" /* BrowserModule */
                                ],
                                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__[
                                    "a" /* AppRoutingModule */
                                ],
                                __WEBPACK_IMPORTED_MODULE_4__angular_router__[
                                    "c" /* RouterModule */
                                ],
                                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__[
                                    "b" /* HttpClientModule */
                                ],
                                __WEBPACK_IMPORTED_MODULE_17__angular_forms__[
                                    "a" /* FormsModule */
                                ]
                            ],
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_13__data_position_service__[
                                    "a" /* PositionService */
                                ],
                                __WEBPACK_IMPORTED_MODULE_14__data_employee_service__[
                                    "a" /* EmployeeService */
                                ]
                            ],
                            bootstrap: [
                                __WEBPACK_IMPORTED_MODULE_5__app_component__[
                                    "a" /* AppComponent */
                                ]
                            ]
                        })
                    ],
                    AppModule
                );
                return AppModule;
            })();

            /***/
        },

        /***/ "./src/app/content.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports = "";

            /***/
        },

        /***/ "./src/app/content.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<!-- <app-home></app-home> -->\n<div class="container">\n<router-outlet></router-outlet>\n</div>';

            /***/
        },

        /***/ "./src/app/content.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return ContentComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var ContentComponent = /** @class */ (function() {
                function ContentComponent() {}
                ContentComponent.prototype.ngOnInit = function() {};
                ContentComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-content",
                            template: __webpack_require__(
                                "./src/app/content.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/content.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [])
                    ],
                    ContentComponent
                );
                return ContentComponent;
            })();

            /***/
        },

        /***/ "./src/app/data/employee.service.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return EmployeeService;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(
                "./node_modules/@angular/common/esm5/http.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var EmployeeService = /** @class */ (function() {
                function EmployeeService(http) {
                    this.http = http;
                    this.url = "https://warm-ocean-35680.herokuapp.com";
                    this.employees = [];
                }
                EmployeeService.prototype.getEmployees = function() {
                    return this.http.get(this.url + "/employees");
                };
                EmployeeService.prototype.saveEmployee = function(employee) {
                    return this.http.put(
                        "https://warm-ocean-35680.herokuapp.com/employee/" +
                            employee._id,
                        employee
                    );
                };
                EmployeeService.prototype.getEmployee = function(id) {
                    return this.http.get(
                        "https://warm-ocean-35680.herokuapp.com/employee-raw/" +
                            id
                    );
                };
                EmployeeService = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "A" /* Injectable */
                            ]
                        )(),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__[
                                "a" /* HttpClient */
                            ]
                        ])
                    ],
                    EmployeeService
                );
                return EmployeeService;
            })();

            /***/
        },

        /***/ "./src/app/data/employeeRaw.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return EmployeeRaw;
                }
            );
            var EmployeeRaw = /** @class */ (function() {
                function EmployeeRaw() {}
                return EmployeeRaw;
            })();

            /***/
        },

        /***/ "./src/app/data/position.service.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return PositionService;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(
                "./node_modules/@angular/common/esm5/http.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var PositionService = /** @class */ (function() {
                function PositionService(http) {
                    this.http = http;
                    this.url = "https://warm-ocean-35680.herokuapp.com";
                    this.positions = [];
                }
                PositionService.prototype.getPositions = function() {
                    return this.http.get(this.url + "/positions");
                };
                PositionService.prototype.savePosition = function(position) {
                    return this.http.put(
                        "https://warm-ocean-35680.herokuapp.com/position/" +
                            position._id,
                        position
                    );
                };
                PositionService.prototype.getPosition = function(id) {
                    return this.http.get(
                        "https://warm-ocean-35680.herokuapp.com/position/" + id
                    );
                };
                PositionService = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "A" /* Injectable */
                            ]
                        )(),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__[
                                "a" /* HttpClient */
                            ]
                        ])
                    ],
                    PositionService
                );
                return PositionService;
            })();

            /***/
        },

        /***/ "./src/app/data/vm-typicode.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return Position;
                }
            );
            /* unused harmony export Employee */
            var Position = /** @class */ (function() {
                function Position() {}
                return Position;
            })();

            var Employee = /** @class */ (function() {
                function Employee() {}
                return Employee;
            })();

            /***/
        },

        /***/ "./src/app/employee/employee.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports = ".center{ margin-top:40px; }";

            /***/
        },

        /***/ "./src/app/employee/employee.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<div class="center">\n  <h2>Employee: {{employee.FirstName + \' \' + employee.LastName }}</h2>\n  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class="container">\n<div class="row">\n<div class="col-md-12">\n  <form #f=\'ngForm\' (ngSubmit)="onSubmit()">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group" [ngClass]="{\'has-error\':FirstName.errors}">\n          <label class="control-label" for="FirstName">First Name:</label>\n          <input #FirstName=\'ngModel\' [(ngModel)]="employee.FirstName" class="form-control" id="FirstName" type="text"  name="FirstName" required/>\n          <span *ngIf="FirstName.errors && FirstName.errors.required" class="help-block">\n            First Name is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group" [ngClass]="{\'has-error\':LastName.errors}">\n          <label class="control-label" for="LastName">Last Name:</label>\n          <input #LastName=\'ngModel\' [(ngModel)]="employee.LastName" class="form-control" id="LastName" type="text" name="LastName" required/>\n          <span *ngIf="LastName.errors && LastName.errors.required" class="help-block">\n            Last Name is Required.\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group">\n          <label class="control-panel" for="Position">Position:</label>\n          <select  class="form-control" id="Position"  name="Position" [(ngModel)]="employee.Position">\n            <option *ngFor="let pos of positions" [value]="pos._id">{{pos.PositionName}}</option>\n          </select>\n        </div>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group" [ngClass]="{\'has-error\':SalaryBonus.errors}">\n          <label class="control-label" for="SalaryBonus">Salary Bonus</label>\n          <div class="input-group">\n            <span class="input-group-addon">$</span>\n            <input #SalaryBonus="ngModel" [(ngModel)]="employee.SalaryBonus" class="form-control" id="SalaryBonus" type="number" name="SalaryBonus" required/>\n          </div>\n          <span *ngIf="SalaryBonus.errors && SalaryBonus.errors.required" class="help-block">\n            Salary Bonus is Required.\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':AddressStreet.errors}">\n          <label class="control-label" for="AddressStreet">Address (Street):</label>\n          <input #AddressStreet="ngModel" [(ngModel)]="employee.AddressStreet" class="form-control" id="AddressStreet" type="text" name="AddressStreet" required/>\n          <span *ngIf="AddressStreet.errors && AddressStreet.errors.required" class="help-block">\n            Address Street is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':AddressCity.errors}">\n          <label class="control-label" for="AddressCity">Address (City):</label>\n          <input #AddressCity="ngModel" [(ngModel)]="employee.AddressCity" class="form-control" id="AddressCity" type="text" name="AddressCity" required/>\n          <span *ngIf="AddressCity.errors && AddressCity.errors.required" class="help-block">\n            Address City is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':AddressState.errors}">\n          <label class="control-label" for="AddressState">Address (State):</label>\n          <input #AddressState="ngModel" [(ngModel)]="employee.AddressState" class="form-control" id="AddressState" type="text" name="AddressState" required/>\n          <span *ngIf="AddressState.errors && AddressState.errors.required" class="help-block">\n            Address State is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':AddressZip.errors}">\n          <label class="control-label" for="AddressZip">Address (Zip Code):</label>\n          <input #AddressZip="ngModel" [(ngModel)]="employee.AddressZip" class="form-control" id="AddressZip" type="text" name="AddressZip" required/>\n          <span *ngIf="AddressZip.errors && AddressZip.errors.required" class="help-block">\n            Address Zip is Required.\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':PhoneNum.errors}">\n          <label class="control-label" for="PhoneNum">Phone Number:</label>\n          <input #PhoneNum="ngModel" [(ngModel)]="employee.PhoneNum" class="form-control" id="PhoneNum" type="text" name="PhoneNum" pattern="\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[\n          ]*){4}" required/>\n          <span *ngIf="PhoneNum.errors && PhoneNum.errors.required" class="help-block">\n            Phone Number is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="form-group" [ngClass]="{\'has-error\':Extension.errors}">\n          <label class="control-label" for="Extension">Extension:</label>\n          <input #Extension="ngModel" [(ngModel)]="employee.Extension" class="form-control" id="Extension" type="text" name="Extension" required/>\n          <span *ngIf="Extension.errors && Extension.errors.required" class="help-block">\n            Extension is Required.\n          </span>\n        </div>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group">\n          <label class="control-label" for="HireDate">Hire Date:</label>\n          <input class="form-control" id="HireDate" name="HireDate" type="text" [value]="employee.HireDate | date:\'longDate\'" readonly />\n        </div>\n      </div>\n    </div>\n    <hr />\n    <a routerLink="/employees" class="btn btn-warning pull-left">Return to Employee List</a>\n    <input [disabled]="!f.valid" type="submit" class="btn btn-primary pull-right" value="Update Employee" />\n    <br />\n    <br />\n  </form>\n</div>\n</div>\n<br />\n<div *ngIf="successMessage" class="alert alert-success">\n  <strong>Success!</strong> {{employee.FirstName + \' \' + employee.LastName}}\'s information was successfully saved.\n</div>\n<div *ngIf="failMessage" class="alert alert-danger">\n  <strong>Error!</strong> {{employee.FirstName + \' \' + employee.LastName}} \'s information could not be saved.\n</div>\n</div>\n<br /><br />';

            /***/
        },

        /***/ "./src/app/employee/employee.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return EmployeeComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_employeeRaw__ = __webpack_require__(
                "./src/app/data/employeeRaw.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_employee_service__ = __webpack_require__(
                "./src/app/data/employee.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_position_service__ = __webpack_require__(
                "./src/app/data/position.service.ts"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var EmployeeComponent = /** @class */ (function() {
                function EmployeeComponent(
                    employeeService,
                    route,
                    positionService
                ) {
                    this.employeeService = employeeService;
                    this.route = route;
                    this.positionService = positionService;
                    this.employee = new __WEBPACK_IMPORTED_MODULE_1__data_employeeRaw__[
                        "a" /* EmployeeRaw */
                    ]();
                    this.successMessage = false;
                    this.failMessage = false;
                }
                EmployeeComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.paramSubscription = this.route.params.subscribe(
                        function(params) {
                            console.log(params);
                            _this.employeeSubscription = _this.employeeService
                                .getEmployee(params["_id"])
                                .subscribe(function(emp) {
                                    console.log(emp[0]);
                                    _this.employee = emp[0];
                                    _this.getPositionSubscription = _this.positionService
                                        .getPositions()
                                        .subscribe(function(data) {
                                            _this.positions = data;
                                        });
                                });
                        }
                    );
                };
                EmployeeComponent.prototype.onSubmit = function() {
                    var _this = this;
                    this.saveEmployeeSubscription = this.employeeService
                        .saveEmployee(this.employee)
                        .subscribe(
                            function(emp) {
                                _this.successMessage = true;
                                setTimeout(function() {
                                    _this.successMessage = false;
                                }, 2500);
                            },
                            function(error) {
                                _this.failMessage = true;
                                setTimeout(function() {
                                    _this.failMessage = false;
                                }, 2500);
                            }
                        );
                };
                EmployeeComponent.prototype.ngOnDestry = function() {
                    if (this.saveEmployeeSubscription != null) {
                        this.saveEmployeeSubscription.unsubcribe();
                    }
                    if (this.getPositionSubscription != null) {
                        this.getPositionSubscription.unsubscribe();
                    }
                    if (this.paramSubscription != null) {
                        this.paramSubscription.unsubscribe();
                    }
                    if (this.employeeSubscription != null) {
                        this.employeeSubscription.unsubscribe();
                    }
                };
                EmployeeComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-employee",
                            template: __webpack_require__(
                                "./src/app/employee/employee.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/employee/employee.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_2__data_employee_service__[
                                "a" /* EmployeeService */
                            ],
                            __WEBPACK_IMPORTED_MODULE_3__angular_router__[
                                "a" /* ActivatedRoute */
                            ],
                            __WEBPACK_IMPORTED_MODULE_4__data_position_service__[
                                "a" /* PositionService */
                            ]
                        ])
                    ],
                    EmployeeComponent
                );
                return EmployeeComponent;
            })();

            /***/
        },

        /***/ "./src/app/employees/employees.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports =
                ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}";

            /***/
        },

        /***/ "./src/app/employees/employees.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<div class="center">\n  <h2>Employees</h2>\n  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div *ngIf="loadingError">Employees not found</div>\n\n<div *ngIf="!loadingError" class="container">\n    <div class="row">\n    <div class="col-md-12">\n        <input class="form-control" id="EmployeeSearch" name="EmployeeSearch" type="text" placeholder="Search\n        Employees by Full Name or Position" (keyup)="onEmployeeSearchKeyUP($event)" /><br />\n      <div class="table-responsive">\n        <table class="table table-condensed table-hover">\n        <thead>\n          <tr>\n            <td>Full Name</td>\n            <td>Address</td>\n            <td>Phone Number</td>\n            <td>Hire Date</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let employee of filteredEmployees" (click)="routeEmployee(employee._id)">\n            <td>{{employee.FirstName + " " + employee.LastName}}</td>\n            <td>{{employee.AddressStreet + ". " + employee.AddressState + ", " + employee.AddressCity + ". " + employee.AddressZip}}</td>\n            <td>{{employee.PhoneNum + " ext: " + employee.Extension}}</td>\n            <td>{{employee.HireDate | date:\'longDate\'}}</td>\n          </tr>\n        </tbody>\n        </table>\n       </div>       \n    </div>\n    </div>\n</div>\n\n';

            /***/
        },

        /***/ "./src/app/employees/employees.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return EmployeesComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_employee_service__ = __webpack_require__(
                "./src/app/data/employee.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var EmployeesComponent = /** @class */ (function() {
                function EmployeesComponent(m, router) {
                    this.m = m;
                    this.router = router;
                    this.loadingError = false;
                }
                EmployeesComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    try {
                        this.getEmployeesSub = this.m
                            .getEmployees()
                            .subscribe(function(employees) {
                                _this.employees = employees;
                                _this.filteredEmployees = employees;
                            });
                    } catch (err) {
                        this.loadingError = true;
                    }
                };
                EmployeesComponent.prototype.ngOnDestroy = function() {
                    if (this.getEmployeesSub) {
                        this.getEmployeesSub.unsubscribe();
                    }
                };
                EmployeesComponent.prototype.routeEmployee = function(id) {
                    this.router.navigate(["/employee", id]);
                };
                EmployeesComponent.prototype.onEmployeeSearchKeyUP = function(
                    event
                ) {
                    var val = event.target.value.toLowerCase();
                    this.filteredEmployees = this.employees.filter(function(
                        employee
                    ) {
                        if (
                            employee.FirstName.toLowerCase().includes(val) ||
                            employee.LastName.toLowerCase().includes(
                                event.target.value
                            ) ||
                            employee.Position.PositionName.toLowerCase().includes(
                                event.target.value
                            )
                        )
                            return true;
                    });
                };
                EmployeesComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-employees",
                            template: __webpack_require__(
                                "./src/app/employees/employees.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/employees/employees.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_1__data_employee_service__[
                                "a" /* EmployeeService */
                            ],
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__[
                                "b" /* Router */
                            ]
                        ])
                    ],
                    EmployeesComponent
                );
                return EmployeesComponent;
            })();

            /***/
        },

        /***/ "./src/app/footer.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports = "";

            /***/
        },

        /***/ "./src/app/footer.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '\n<div class="color-border">\n    \n    </div>\n    \n    <footer id="footer">\n      <div class="container">\n        <div class="row">\n          <div class="col-sm-6">Copyright &copy; 2018 Dinh Tran (WEB422) Design by <a href="http://www.templategarden.com" rel="nofollow">TemplateGarden</a></div>\n          <div class="col-sm-6">\n            <div class="follow-us"> <a class="fa fa-facebook social-icon" href="#"></a> <a class="fa fa-twitter social-icon" href="#"></a> <a class="fa fa-linkedin social-icon" href="#"></a> <a class="fa fa-google-plus social-icon" href="#"></a> </div>\n          </div>\n        </div>\n      </div>\n    </footer>';

            /***/
        },

        /***/ "./src/app/footer.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return FooterComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var FooterComponent = /** @class */ (function() {
                function FooterComponent() {}
                FooterComponent.prototype.ngOnInit = function() {};
                FooterComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-footer",
                            template: __webpack_require__(
                                "./src/app/footer.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/footer.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [])
                    ],
                    FooterComponent
                );
                return FooterComponent;
            })();

            /***/
        },

        /***/ "./src/app/home/home.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports =
                ".section {\n    padding: 70px 0;\n   }\n   .no-margin {\n    margin: 0;\n    padding: 0;\n   }";

            /***/
        },

        /***/ "./src/app/home/home.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<section id="main-slider" class="no-margin">\n    <div class="carousel slide">\n      <ol class="carousel-indicators">\n        <li data-target="#main-slider" data-slide-to="0" class="active"></li>\n        <li data-target="#main-slider" data-slide-to="1"></li>\n        <li data-target="#main-slider" data-slide-to="2"></li>\n      </ol>\n      <div class="carousel-inner">\n        <div class="item active" style="background-image: url(assets/images/slider/bg1.jpg)">\n          <div class="container">\n            <div class="row slide-margin">\n              <div class="col-sm-12">\n                <div class="carousel-content">\n                  <h1>Welcome to <span class="logo"><i class="fa fa-bolt"></i> Dinh Employees API</span></h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  <a class="btn-slide" href="about-us.html">Read More</a> </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class="item" style="background-image: url(assets/images/slider/bg2.jpg)">\n          <div class="container">\n            <div class="row slide-margin">\n              <div class="col-sm-12">\n                <div class="carousel-content">\n                  <h1>Typi non habent claritatem insitam</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  <a class="btn-slide" href="about-us.html">Read More</a> </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class="item" style="background-image: url(assets/images/slider/bg3.jpg)">\n          <div class="container">\n            <div class="row slide-margin">\n              <div class="col-sm-12">\n                <div class="carousel-content">\n                  <h1>Mirum est notare quam littera gothica</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  <a class="btn-slide" href="about-us.html">Read More</a> </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item--> \n      </div>\n      <!--/.carousel-inner--> \n    </div>\n    <!--/.carousel--> \n    <a class="prev hidden-xs" href="#main-slider" data-slide="prev"> <i class="fa fa-chevron-left"></i> </a> <a class="next hidden-xs" href="#main-slider" data-slide="next"> <i class="fa fa-chevron-right"></i> </a> </section>\n  <!--/#main-slider-->\n  <div class="color-border"> </div>\n  <section id="feature" >\n    <div class="container">\n      <div class="center">\n        <h2>Featured Services</h2>\n        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n          Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n      </div>\n      <div class="row">\n        <div class="features">\n          <div class="col-md-6 col-sm-6">\n            <div class="feature-wrap"> <i class="fa fa-desktop"></i>\n              <h2>Employees</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-4-->\n          \n          <div class="col-md-6 col-sm-6">\n            <div class="feature-wrap"> <i class="fa fa-cogs"></i>\n              <h2>Positions</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-4-->\n          \n\n        </div>\n        <!--/.services--> \n      </div>\n      <!--/.row--> \n    </div>\n    <!--/.container--> \n  </section>\n  <!--/#feature-->\n\n';

            /***/
        },

        /***/ "./src/app/home/home.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return HomeComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var HomeComponent = /** @class */ (function() {
                function HomeComponent() {}
                HomeComponent.prototype.ngOnInit = function() {};
                HomeComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-home",
                            template: __webpack_require__(
                                "./src/app/home/home.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/home/home.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [])
                    ],
                    HomeComponent
                );
                return HomeComponent;
            })();

            /***/
        },

        /***/ "./src/app/nav.component.css": /***/ function(module, exports) {
            module.exports = "";

            /***/
        },

        /***/ "./src/app/nav.component.html": /***/ function(module, exports) {
            module.exports =
                '\n<header id="header">\n  <nav class="navbar navbar-inverse" role="banner">\n    <div class="container">\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>\n        <a class="navbar-brand" routerLink="/home"><i class="fa fa-play-circle"></i> Dinh (Employees API)</a></div>\n      <div class="collapse navbar-collapse navbar-right">\n        <ul class="nav navbar-nav">\n\n          <li class="active" routerLinkActive="active"><a routerLink="/home">Home</a></li>\n          <li routerLinkActive="active"><a routerLink="/employees">Employees</a></li>\n          <li routerLinkActive="active"><a routerLink="/positions">Positions</a></li>\n\n        </ul>\n      </div>\n    </div>\n\n  </nav>\n\n  \n</header>\n<div class="color-border"></div>  ';

            /***/
        },

        /***/ "./src/app/nav.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return NavComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var NavComponent = /** @class */ (function() {
                function NavComponent() {}
                NavComponent.prototype.ngOnInit = function() {};
                NavComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-nav",
                            template: __webpack_require__(
                                "./src/app/nav.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/nav.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [])
                    ],
                    NavComponent
                );
                return NavComponent;
            })();

            /***/
        },

        /***/ "./src/app/page-not-found/page-not-found.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports = "";

            /***/
        },

        /***/ "./src/app/page-not-found/page-not-found.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<div class="row">\n  <div class="col-md-12">\n    Not Found\n  </div>\n</div> \n';

            /***/
        },

        /***/ "./src/app/page-not-found/page-not-found.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return PageNotFoundComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var PageNotFoundComponent = /** @class */ (function() {
                function PageNotFoundComponent() {}
                PageNotFoundComponent.prototype.ngOnInit = function() {};
                PageNotFoundComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-page-not-found",
                            template: __webpack_require__(
                                "./src/app/page-not-found/page-not-found.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/page-not-found/page-not-found.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [])
                    ],
                    PageNotFoundComponent
                );
                return PageNotFoundComponent;
            })();

            /***/
        },

        /***/ "./src/app/position/position.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports = ".center{ margin-top:40px; }";

            /***/
        },

        /***/ "./src/app/position/position.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<div class="center">\n  <h2>Position: Position Name</h2>\n  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class="container" *ngIf="this.position">\n  <div class="row">\n    <div class="col-md-12">\n      <form (ngSubmit)="onSubmit()">\n        <div class="row">\n          <div class="col-md-12">\n            <div class="form-group">\n              <label class="control-label" for="PositionName">Position Name:</label>\n              <input [(ngModel)]="position.PositionName" class="form-control" id="PositionName" type="text" name="PositionName" />\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-md-12">\n            <div class="form-group">\n              <label class="control-label" for="PositionDescription">Description:</label>\n              <textarea [(ngModel)]="position.PositionDescription" class="form-control" id="PositionDescription" rows="5" name="PositionDescription"></textarea>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink="/positions" class="btn btn-warning pull-left">Return to Position List</a>\n        <input type="submit" class="btn btn-primary pull-right" value="Update Position" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div *ngIf="successMessage" class="alert alert-success">\n  <strong>Success!</strong> Position: "Position Name" was successfully saved.\n</div>\n<div *ngIf="failMessage" class="alert alert-danger">\n  <strong>Error!</strong> Position: "Position Name" could not be saved.\n</div>\n</div>\n<br /><br />';

            /***/
        },

        /***/ "./src/app/position/position.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return PositionComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_position_service__ = __webpack_require__(
                "./src/app/data/position.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_vm_typicode__ = __webpack_require__(
                "./src/app/data/vm-typicode.ts"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var PositionComponent = /** @class */ (function() {
                function PositionComponent(route, router, positionService) {
                    this.route = route;
                    this.router = router;
                    this.positionService = positionService;
                    this.position = new __WEBPACK_IMPORTED_MODULE_3__data_vm_typicode__[
                        "a" /* Position */
                    ]();
                    this.successMessage = false;
                    this.failMessage = false;
                }
                PositionComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.paramSubscription = this.route.params.subscribe(
                        function(params) {
                            _this.positionSubscription = _this.positionService
                                .getPosition(params["_id"])
                                .subscribe(function(positions) {
                                    console.log("positions");
                                    _this.position = positions[0];
                                });
                        }
                    );
                };
                PositionComponent.prototype.onSubmit = function(f) {
                    var _this = this;
                    this.savePositionSubscription = this.positionService
                        .savePosition(this.position)
                        .subscribe(
                            function(pos) {
                                _this.successMessage = true;
                                setTimeout(function() {
                                    _this.successMessage = false;
                                }, 2500);
                            },
                            function(error) {
                                _this.failMessage = true;
                                setTimeout(function() {
                                    _this.failMessage = false;
                                }, 2500);
                            }
                        );
                };
                PositionComponent.prototype.routePosition = function(id) {
                    this.router.navigate(["/position", id]);
                };
                PositionComponent.prototype.ngOnDestry = function() {
                    if (this.savePositionSubscription != null) {
                        this.savePositionSubscription.unsubcribe();
                    }
                    if (this.positionSubscription != null) {
                        this.positionSubscription.unsubscribe();
                    }
                    if (this.paramSubscription != null) {
                        this.paramSubscription.unsubscribe();
                    }
                };
                PositionComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-position",
                            template: __webpack_require__(
                                "./src/app/position/position.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/position/position.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__[
                                "a" /* ActivatedRoute */
                            ],
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__[
                                "b" /* Router */
                            ],
                            __WEBPACK_IMPORTED_MODULE_1__data_position_service__[
                                "a" /* PositionService */
                            ]
                        ])
                    ],
                    PositionComponent
                );
                return PositionComponent;
            })();

            /***/
        },

        /***/ "./src/app/positions/positions.component.css": /***/ function(
            module,
            exports
        ) {
            module.exports =
                ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}";

            /***/
        },

        /***/ "./src/app/positions/positions.component.html": /***/ function(
            module,
            exports
        ) {
            module.exports =
                '<div class="center">\n  <h2>Positions</h2>\n  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n </div>\n\n<div *ngIf="loadingError">Positions not found</div>\n\n<div *ngIf="!loadingError" class="container">\n    <div class="row">\n    <div class="col-md-12">\n      <div class="table-responsive">\n        <table class="table table-condensed table-hover">\n        <thead>\n          <tr>\n            <td>Position Title</td>\n            <td>Position Description</td>\n            <td>Salary</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let position of positions" (click)="routePosition(position._id)">\n            <td>{{position.PositionName}}</td>\n            <td>{{position.PositionDescription}}</td>\n            <td>${{position.PositionBaseSalary | number:\'.2\'}}</td>\n          </tr>\n        </tbody>\n        </table>\n       </div>       \n    </div>\n    </div>\n</div>\n\n\n\n';

            /***/
        },

        /***/ "./src/app/positions/positions.component.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return PositionsComponent;
                }
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_position_service__ = __webpack_require__(
                "./src/app/data/position.service.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(
                "./node_modules/@angular/router/esm5/router.js"
            );
            var __decorate =
                (this && this.__decorate) ||
                function(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                };
            var __metadata =
                (this && this.__metadata) ||
                function(k, v) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(k, v);
                };

            var PositionsComponent = /** @class */ (function() {
                function PositionsComponent(m, router) {
                    this.m = m;
                    this.router = router;
                    this.loadingError = false; // set to false by default
                }
                PositionsComponent.prototype.ngOnInit = function() {
                    this.getPositions();
                };
                PositionsComponent.prototype.ngOnDestroy = function() {
                    if (this.getPositionsSub) {
                        this.getPositionsSub.unsubscribe();
                    }
                };
                PositionsComponent.prototype.getPositions = function() {
                    var _this = this;
                    try {
                        this.getPositionsSub = this.m
                            .getPositions()
                            .subscribe(function(positions) {
                                return (_this.positions = positions);
                            });
                    } catch (err) {
                        this.loadingError = true;
                    }
                };
                PositionsComponent.prototype.routePosition = function(id) {
                    this.router.navigate(["/position", id]);
                };
                PositionsComponent = __decorate(
                    [
                        Object(
                            __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                                "n" /* Component */
                            ]
                        )({
                            selector: "app-positions",
                            template: __webpack_require__(
                                "./src/app/positions/positions.component.html"
                            ),
                            styles: [
                                __webpack_require__(
                                    "./src/app/positions/positions.component.css"
                                )
                            ]
                        }),
                        __metadata("design:paramtypes", [
                            __WEBPACK_IMPORTED_MODULE_1__data_position_service__[
                                "a" /* PositionService */
                            ],
                            __WEBPACK_IMPORTED_MODULE_2__angular_router__[
                                "b" /* Router */
                            ]
                        ])
                    ],
                    PositionsComponent
                );
                return PositionsComponent;
            })();

            /***/
        },

        /***/ "./src/environments/environment.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "a",
                function() {
                    return environment;
                }
            );
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            var environment = {
                production: false
            };

            /***/
        },

        /***/ "./src/main.ts": /***/ function(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
                "./node_modules/@angular/core/esm5/core.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(
                "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(
                "./src/app/app.module.ts"
            );
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(
                "./src/environments/environment.ts"
            );

            if (
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__[
                    "a" /* environment */
                ].production
            ) {
                Object(
                    __WEBPACK_IMPORTED_MODULE_0__angular_core__[
                        "_13" /* enableProdMode */
                    ]
                )();
            }
            Object(
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__[
                    "a" /* platformBrowserDynamic */
                ]
            )()
                .bootstrapModule(
                    __WEBPACK_IMPORTED_MODULE_2__app_app_module__[
                        "a" /* AppModule */
                    ]
                )
                .catch(function(err) {
                    return console.log(err);
                });

            /***/
        },

        /***/ 0: /***/ function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__("./src/main.ts");

            /***/
        }
    },
    [0]
);
//# sourceMappingURL=main.bundle.js.map
