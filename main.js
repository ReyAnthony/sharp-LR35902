(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">sharp-z80 Emu</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li (click)=\"goToProcessorPanel()\" [ngClass]=\"{'active' : processorPanel}\"><a href=\"#\"> Processor </a></li>\n                <li (click)=\"goToProgramLoaderPanel()\" [ngClass]=\"{'active' : programLoaderPanel}\"><a href=\"#\"> Program Loader </a></li>\n                <!-- <li (click)=\"goToAsmPanel()\" [ngClass]=\"{'active' : assemblerPanel}\" ><a href=\"#\"> Assembler </a></li> -->\n                <li (click)=\"goToDocPanel()\" [ngClass]=\"{'active' : docPanel}\" ><a href=\"#\"> Documentation </a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div *ngIf=\"processorPanel === true\" class=\"container\">\n    <div class=\"row\"> \n        <div class=\"col-md-6\">\n            <app-cpu-infos ></app-cpu-infos>\n            <app-controls></app-controls>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"container\">\n                <!-- \n                    <app-screen class=\"row\"></app-screen>\n                -->\n            </div>\n        </div>\n        <app-memory-viewer class=\"col-md-6\"></app-memory-viewer>\n    </div>\n</div>\n<div *ngIf=\"docPanel === true\" class=\"container\"> \n<app-documentation></app-documentation>\n</div>\n<div *ngIf=\"asmPanel === true\" class=\"container\"> \n<app-assembler></app-assembler>\n</div>\n<div *ngIf=\"programLoaderPanel === true\" class=\"container\"> \n<app-program-loader></app-program-loader>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.processorPanel = true;
        this.docPanel = false;
        this.asmPanel = false;
        this.programLoaderPanel = false;
    }
    AppComponent.prototype.reset = function () {
        this.processorPanel = false;
        this.docPanel = false;
        this.asmPanel = false;
        this.programLoaderPanel = false;
    };
    AppComponent.prototype.goToProcessorPanel = function () {
        this.reset();
        this.processorPanel = true;
    };
    AppComponent.prototype.goToDocPanel = function () {
        this.reset();
        this.docPanel = true;
    };
    AppComponent.prototype.goToAsmPanel = function () {
        this.reset();
        this.asmPanel = true;
    };
    AppComponent.prototype.goToProgramLoaderPanel = function () {
        this.reset();
        this.programLoaderPanel = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen/screen.component */ "./src/app/screen/screen.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/controls/controls.component.ts");
/* harmony import */ var _cpu_infos_cpu_infos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cpu-infos/cpu-infos.component */ "./src/app/cpu-infos/cpu-infos.component.ts");
/* harmony import */ var _misc_pipes_binaryPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./misc/pipes/binaryPipe */ "./src/app/misc/pipes/binaryPipe.ts");
/* harmony import */ var _memory_viewer_memory_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./memory-viewer/memory-viewer.component */ "./src/app/memory-viewer/memory-viewer.component.ts");
/* harmony import */ var _misc_pipes_hexPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./misc/pipes/hexPipe */ "./src/app/misc/pipes/hexPipe.ts");
/* harmony import */ var _program_loader_program_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./program-loader/program-loader.component */ "./src/app/program-loader/program-loader.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");
/* harmony import */ var _assembler_assembler_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assembler/assembler.component */ "./src/app/assembler/assembler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _screen_screen_component__WEBPACK_IMPORTED_MODULE_4__["ScreenComponent"],
                _controls_controls_component__WEBPACK_IMPORTED_MODULE_5__["ControlsComponent"],
                _cpu_infos_cpu_infos_component__WEBPACK_IMPORTED_MODULE_6__["CpuInfosComponent"],
                _misc_pipes_binaryPipe__WEBPACK_IMPORTED_MODULE_7__["BinaryPipe"],
                _misc_pipes_hexPipe__WEBPACK_IMPORTED_MODULE_9__["HexPipe"],
                _memory_viewer_memory_viewer_component__WEBPACK_IMPORTED_MODULE_8__["MemoryViewerComponent"],
                _program_loader_program_loader_component__WEBPACK_IMPORTED_MODULE_10__["ProgramLoaderComponent"],
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["DocumentationComponent"],
                _assembler_assembler_component__WEBPACK_IMPORTED_MODULE_12__["AssemblerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assembler/assembler.component.css":
/*!***************************************************!*\
  !*** ./src/app/assembler/assembler.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n    width: 100%; /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\n    box-sizing: border-box;         /* Opera/IE 8+ */\n    resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZW1ibGVyL2Fzc2VtYmxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWSxDQUNvQixpQ0FBaUMsSUFDakMsMEJBQTBCO0lBQzFELHVCQUF1QixTQUFTLGlCQUFpQjtJQUNqRCxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXNzZW1ibGVyL2Fzc2VtYmxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICAgICAgLyogT3BlcmEvSUUgOCsgKi9cbiAgICByZXNpemU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/assembler/assembler.component.html":
/*!****************************************************!*\
  !*** ./src/app/assembler/assembler.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Assembler </h1>\n<div>\n    <textarea rows=\"10\" [(ngModel)]=\"assemblerService.assemblyBeingWritten\" placeholder=\"Please insert newline separated assembly instructions\"></textarea>\n    <button (click)=\"loadProgram()\"> Assemble ! </button>\n</div>\n\n<h1> Assembly result </h1>\n<div>\n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/assembler/assembler.component.ts":
/*!**************************************************!*\
  !*** ./src/app/assembler/assembler.component.ts ***!
  \**************************************************/
/*! exports provided: AssemblerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerComponent", function() { return AssemblerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_assembler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/assembler.service */ "./src/app/services/assembler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssemblerComponent = /** @class */ (function () {
    function AssemblerComponent(assemblerService) {
        this.assemblerService = assemblerService;
    }
    AssemblerComponent.prototype.ngOnInit = function () {
    };
    AssemblerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assembler',
            template: __webpack_require__(/*! ./assembler.component.html */ "./src/app/assembler/assembler.component.html"),
            styles: [__webpack_require__(/*! ./assembler.component.css */ "./src/app/assembler/assembler.component.css")]
        }),
        __metadata("design:paramtypes", [_services_assembler_service__WEBPACK_IMPORTED_MODULE_1__["AssemblerService"]])
    ], AssemblerComponent);
    return AssemblerComponent;
}());



/***/ }),

/***/ "./src/app/controls/controls.component.css":
/*!*************************************************!*\
  !*** ./src/app/controls/controls.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/controls/controls.component.html":
/*!**************************************************!*\
  !*** ./src/app/controls/controls.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input type=\"number\" [(ngModel)]=\"ms\"/> \n<button (click)=\"setCpuMs()\"> Set CPU cycle time in MS </button>\n<button *ngIf=\"!isRunning()\" (click)=\"turnOn()\"> Run </button>\n<button *ngIf=\"isRunning() && !isPaused()\" (click)=\"pause()\" >Pause</button>\n<button *ngIf=\"isRunning() && isPaused()\" (click)=\"pause()\" >Unpause</button>\n<button *ngIf=\"isRunning()\" (click)=\"stop()\" >Stop</button>\n<button (click)=\"reset()\" >Reset</button>"

/***/ }),

/***/ "./src/app/controls/controls.component.ts":
/*!************************************************!*\
  !*** ./src/app/controls/controls.component.ts ***!
  \************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cpu/hardware.service */ "./src/app/services/cpu/hardware.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsComponent = /** @class */ (function () {
    function ControlsComponent(hardwareService) {
        this.hardwareService = hardwareService;
        this.ms = 20;
    }
    ControlsComponent.prototype.ngOnInit = function () {
        this.setCpuMs();
    };
    ControlsComponent.prototype.turnOn = function () {
        this.hardwareService.turnOn();
    };
    ControlsComponent.prototype.pause = function () {
        this.hardwareService.pause();
    };
    ControlsComponent.prototype.stop = function () {
        this.hardwareService.stop();
    };
    ControlsComponent.prototype.reset = function () {
        this.hardwareService.reset();
    };
    ControlsComponent.prototype.isPaused = function () {
        return this.hardwareService.isPaused();
    };
    ControlsComponent.prototype.isRunning = function () {
        return this.hardwareService.isRunning();
    };
    ControlsComponent.prototype.setCpuMs = function () {
        this.hardwareService.setCPuStepMs(this.ms);
    };
    ControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! ./controls.component.html */ "./src/app/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.css */ "./src/app/controls/controls.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__["HardwareService"]])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/cpu-infos/cpu-infos.component.css":
/*!***************************************************!*\
  !*** ./src/app/cpu-infos/cpu-infos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NwdS1pbmZvcy9jcHUtaW5mb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cpu-infos/cpu-infos.component.html":
/*!****************************************************!*\
  !*** ./src/app/cpu-infos/cpu-infos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Registers status </h1>\n<table class=\"table table-bordered\">\n  <tr>\n    <th>Register</th>\n    <th>Bin</th>\n    <th>Hex</th>\n    <th>Dec</th>\n  </tr>\n    <tr *ngFor=\"let register of hardwareService.getCpuRegisters()\">\n      <td> {{register.name  | uppercase }}  </td>\n      <td> {{register.value | binaryPipe }} </td>\n      <td> {{register.value | hexPipe }} </td>\n      <td> {{register.value  }} </td>\n    </tr>\n</table> \n "

/***/ }),

/***/ "./src/app/cpu-infos/cpu-infos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cpu-infos/cpu-infos.component.ts ***!
  \**************************************************/
/*! exports provided: CpuInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpuInfosComponent", function() { return CpuInfosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cpu/hardware.service */ "./src/app/services/cpu/hardware.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpuInfosComponent = /** @class */ (function () {
    function CpuInfosComponent(hardwareService) {
        this.hardwareService = hardwareService;
    }
    CpuInfosComponent.prototype.ngOnInit = function () {
    };
    CpuInfosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cpu-infos',
            template: __webpack_require__(/*! ./cpu-infos.component.html */ "./src/app/cpu-infos/cpu-infos.component.html"),
            styles: [__webpack_require__(/*! ./cpu-infos.component.css */ "./src/app/cpu-infos/cpu-infos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__["HardwareService"]])
    ], CpuInfosComponent);
    return CpuInfosComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/documentation/documentation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/documentation/documentation.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentation/documentation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Opcodes documentation </h1>\n\n<p> The processor has {{ getOpcodes().length }} opcodes implemented. (Out of 255)</p> <br/>\n\n<label> \n    Filter : \n    <input [(ngModel)]=\"documentationService.filter\" type=\"text\"/> \n</label>\n\n<div *ngFor=\"let opcode of getFilteredOpcodes()\">\n  <h2 id=\"{{opcode.code}}\"> {{opcode.name}} </h2>\n  <table class=\"table table-bordered\">\n      <tr>\n        <th>Opcode</th>\n        <th>Opcode size</th>\n        <th>Template</th>\n        <th>Parameters</th>\n        <th>Cycles</th>\n        <th>PC incrementation</th>\n      </tr>\n      <tr>\n        <td> {{opcode.code | hexPipe }} </td>\n        <td> {{opcode.opcodeBytes}} </td>\n        <td>{{opcode.template}}</td>\n        <td>{{opcode.params}}</td>\n        <td>{{opcode.cycles}}</td>\n        <td>{{opcode.pcInc}}</td>\n      </tr>\n    </table> \n  <p> {{opcode.doc}} </p>\n  <br/>\n</div>\n\n<p *ngIf=\"getFilteredOpcodes().length === 0\">\n    <br/>\n\n  Nothing to show ! Try using broader criterias. \n</p>\n"

/***/ }),

/***/ "./src/app/documentation/documentation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cpu/hardware.service */ "./src/app/services/cpu/hardware.service.ts");
/* harmony import */ var _services_documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/documentation.service */ "./src/app/services/documentation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(hardwareService, documentationService) {
        this.hardwareService = hardwareService;
        this.documentationService = documentationService;
    }
    DocumentationComponent.prototype.ngOnInit = function () {
        this.opcodes = this.hardwareService.getOpcodes();
    };
    DocumentationComponent.prototype.getOpcodes = function () {
        return this.opcodes;
    };
    DocumentationComponent.prototype.getFilteredOpcodes = function () {
        var _this = this;
        if (this.documentationService.filter !== '') {
            return this.opcodes.filter(function (o) { return o.name.toLowerCase().includes(_this.documentationService.filter.toLowerCase()); });
        }
        return this.opcodes;
    };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.css */ "./src/app/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__["HardwareService"], _services_documentation_service__WEBPACK_IMPORTED_MODULE_2__["DocumentationService"]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/memory-viewer/memory-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/memory-viewer/memory-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS12aWV3ZXIvbWVtb3J5LXZpZXdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/memory-viewer/memory-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/memory-viewer/memory-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Memory viewer </h1>\n<div>\n  <div *ngIf=\"!memEdit\">\n    <label> \n      <input type=\"checkbox\" [(ngModel)]=\"followPC\"/>  Follow PC ?  \n    </label>\n  </div>\n  <div>\n    <label>  \n      <input type=\"checkbox\" (click)=\"updateMem()\" [(ngModel)]=\"memEdit\"/>  Mem edit ? \n    </label>\n    <button *ngIf=\"memEdit\" class=\"pull-right\" (click)=\"saveMemEdits()\"> Save edits </button>\n  </div>\n</div>\n\n<div *ngIf=\"!followPC && !memEdit\">\n    <label> \n        Start address : \n        <input type=\"number\" [(ngModel)]=\"startAddress\">\n      </label>\n      <label> \n          End address : \n          <input type=\"number\" [(ngModel)]=\"endAddress\">\n      </label>\n</div>\n\n\n<table *ngIf=\"!memEdit\" class=\"table table-bordered\">\n   <tr>\n     <th> Addr </th>\n     <th> Hex </th>\n     <th> Bin </th>\n     <th> Dec </th>\n     <th> Instruction </th>\n   </tr>\n   <tr [ngClass]=\"{'success' : isPC(data.address) && !pcOnUnknownOpcode(data.address), 'danger': pcOnUnknownOpcode(data.address)}\" *ngFor=\"let data of getMemory()\">\n     <td> {{ data.address | hexPipe }} </td>\n     <td> {{ data.value | hexPipe }} </td>\n     <td> {{ data.value | binaryPipe }} </td>\n     <td> {{ data.value  }} </td>\n     <td> {{ data.opcodeHumanReadable }} </td>\n   </tr>\n </table> \n\n <table *ngIf=\"memEdit\" class=\"table table-bordered\">\n  <tr>\n    <th> Addr </th>\n    <th> Hex </th>\n    <th> Bin </th>\n    <th> Instruction </th>\n    <th> Value </th>\n  </tr>\n  <tr [ngClass]=\"{'success' : isPC(data.address) && !pcOnUnknownOpcode(data.address), 'danger': pcOnUnknownOpcode(data.address)}\" *ngFor=\"let data of memoryCopy\">\n    <td> {{ data.address | hexPipe }} </td>\n    <td> {{ data.value | hexPipe }} </td>\n    <td> {{ data.value | binaryPipe }} </td>\n    <td> {{ data.opcodeHumanReadable }} </td>\n    <td> <input type=\"number\" [(ngModel)]=\"data.value\"> </td>\n  </tr>\n</table> \n\n"

/***/ }),

/***/ "./src/app/memory-viewer/memory-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/memory-viewer/memory-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: MemoryViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryViewerComponent", function() { return MemoryViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cpu/hardware.service */ "./src/app/services/cpu/hardware.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemoryViewerComponent = /** @class */ (function () {
    function MemoryViewerComponent(hardwareService) {
        this.hardwareService = hardwareService;
        this.startAddress = 0x100;
        this.endAddress = 0x100 + 15;
        this.followPC = false;
        this.memEdit = false;
    }
    MemoryViewerComponent.prototype.ngOnInit = function () {
    };
    MemoryViewerComponent.prototype.isPC = function (address) {
        return this.hardwareService.getCpuRegisters()
            .find(function (o) { return o.name === 'pc'; })
            .value === address;
    };
    MemoryViewerComponent.prototype.pcOnUnknownOpcode = function (address) {
        return this.isPC(address) && this.getMemory().find(function (m) { return m.address === address; }).opcodeHumanReadable === 'UNKNOWN';
    };
    MemoryViewerComponent.prototype.getMemory = function () {
        if (!this.followPC) {
            return this.hardwareService.getMemory(this.startAddress, this.endAddress);
        }
        else {
            return this.hardwareService.getMemory(this.getPC(), this.getPC() + 16);
        }
    };
    MemoryViewerComponent.prototype.updateMem = function () {
        this.memoryCopy = this.getMemory();
    };
    MemoryViewerComponent.prototype.saveMemEdits = function () {
        var _this = this;
        this.memoryCopy.forEach(function (e) {
            _this.hardwareService.updateMemory(e.address, e.value);
        });
        this.memoryCopy = this.getMemory();
    };
    MemoryViewerComponent.prototype.getPC = function () {
        return this.hardwareService.getCpuRegisters()
            .find(function (o) { return o.name === 'pc'; }).value;
    };
    MemoryViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memory-viewer',
            template: __webpack_require__(/*! ./memory-viewer.component.html */ "./src/app/memory-viewer/memory-viewer.component.html"),
            styles: [__webpack_require__(/*! ./memory-viewer.component.css */ "./src/app/memory-viewer/memory-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__["HardwareService"]])
    ], MemoryViewerComponent);
    return MemoryViewerComponent;
}());



/***/ }),

/***/ "./src/app/misc/pipes/binaryPipe.ts":
/*!******************************************!*\
  !*** ./src/app/misc/pipes/binaryPipe.ts ***!
  \******************************************/
/*! exports provided: BinaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryPipe", function() { return BinaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BinaryPipe = /** @class */ (function () {
    function BinaryPipe() {
    }
    BinaryPipe.prototype.transform = function (value) {
        if (!value) {
            return '0000000000000000';
        }
        var bin = value.toString(2);
        return bin.padStart(16, '0');
    };
    BinaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'binaryPipe' })
    ], BinaryPipe);
    return BinaryPipe;
}());



/***/ }),

/***/ "./src/app/misc/pipes/hexPipe.ts":
/*!***************************************!*\
  !*** ./src/app/misc/pipes/hexPipe.ts ***!
  \***************************************/
/*! exports provided: HexPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexPipe", function() { return HexPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HexPipe = /** @class */ (function () {
    function HexPipe() {
    }
    HexPipe.prototype.transform = function (value) {
        if (!value) {
            return '0000';
        }
        var hex = value.toString(16);
        return hex.padStart(4, '0').toUpperCase();
    };
    HexPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'hexPipe' })
    ], HexPipe);
    return HexPipe;
}());



/***/ }),

/***/ "./src/app/program-loader/program-loader.component.css":
/*!*************************************************************!*\
  !*** ./src/app/program-loader/program-loader.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n    width: 50%; /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\n    box-sizing: border-box;         /* Opera/IE 8+ */\n    resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS1sb2FkZXIvcHJvZ3JhbS1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVcsQ0FDcUIsaUNBQWlDLElBQ2pDLDBCQUEwQjtJQUMxRCx1QkFBdUIsU0FBUyxpQkFBaUI7SUFDakQsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0tbG9hZGVyL3Byb2dyYW0tbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAgICAgIC8qIE9wZXJhL0lFIDgrICovXG4gICAgcmVzaXplOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/program-loader/program-loader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/program-loader/program-loader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1> Program loader </h1>\n    <textarea rows=\"30\" [(ngModel)]=\"programLoaderService.program\" placeholder=\"Please insert space separated hex opcodes\"></textarea>\n    <textarea rows=\"30\" [ngModel]=\"getAsAsm()\" disabled placeholder=\"Please load the program into memory\"></textarea>\n    <button (click)=\"loadProgram()\"> Load program </button>\n    <button (click)=\"clear()\"> Clear </button>\n    <button (click)=\"fetchTestProgram()\">Fetch test program</button>\n</div>\n"

/***/ }),

/***/ "./src/app/program-loader/program-loader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/program-loader/program-loader.component.ts ***!
  \************************************************************/
/*! exports provided: ProgramLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramLoaderComponent", function() { return ProgramLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cpu/hardware.service */ "./src/app/services/cpu/hardware.service.ts");
/* harmony import */ var _services_program_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/program-loader.service */ "./src/app/services/program-loader.service.ts");
/* harmony import */ var _services_cpu_custom_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cpu/custom-types */ "./src/app/services/cpu/custom-types.ts");
/* harmony import */ var _services_cpu_cpu_memory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cpu/cpu/memory */ "./src/app/services/cpu/cpu/memory.ts");
/* harmony import */ var _services_cpu_cpu_opcode_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cpu/cpu/opcode-fetcher */ "./src/app/services/cpu/cpu/opcode-fetcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProgramLoaderComponent = /** @class */ (function () {
    function ProgramLoaderComponent(hardwareService, programLoaderService) {
        this.hardwareService = hardwareService;
        this.programLoaderService = programLoaderService;
    }
    ProgramLoaderComponent.prototype.ngOnInit = function () {
    };
    ProgramLoaderComponent.prototype.fetchTestProgram = function () {
        this.programLoaderService.program = _services_cpu_custom_types__WEBPACK_IMPORTED_MODULE_3__["DEMO_PROGRAM"];
    };
    ProgramLoaderComponent.prototype.loadProgram = function () {
        this.hardwareService.loadProgram(this.programLoaderService.program.replace(/\s/g, '\n'));
    };
    ProgramLoaderComponent.prototype.clear = function () {
        this.programLoaderService.program = '';
    };
    ProgramLoaderComponent.prototype.getAsAsm = function () {
        var prog = this.programLoaderService.program.replace(/\s/g, '\n');
        var maxRam = prog.split('\n').length;
        var memory = new _services_cpu_cpu_memory__WEBPACK_IMPORTED_MODULE_4__["Memory"](maxRam);
        var opcodeFetcher = new _services_cpu_cpu_opcode_fetcher__WEBPACK_IMPORTED_MODULE_5__["OpCodeFetcher"](memory);
        memory.loadProgram(prog, 0);
        var str = '';
        var currentAddress = 0;
        while (currentAddress < maxRam) {
            var opcode = opcodeFetcher.fetchOpcode(currentAddress);
            var opcodeHumanReadable = opcode.getOpcodeHumanReadable();
            opcodeHumanReadable !== 'UNKNOWN' ? str += opcodeHumanReadable + '\n' : str += '--\n';
            currentAddress = currentAddress + opcode.getOpcodeTotalLength();
        }
        return str;
    };
    ProgramLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-program-loader',
            template: __webpack_require__(/*! ./program-loader.component.html */ "./src/app/program-loader/program-loader.component.html"),
            styles: [__webpack_require__(/*! ./program-loader.component.css */ "./src/app/program-loader/program-loader.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cpu_hardware_service__WEBPACK_IMPORTED_MODULE_1__["HardwareService"],
            _services_program_loader_service__WEBPACK_IMPORTED_MODULE_2__["ProgramLoaderService"]])
    ], ProgramLoaderComponent);
    return ProgramLoaderComponent;
}());



/***/ }),

/***/ "./src/app/screen/screen.component.css":
/*!*********************************************!*\
  !*** ./src/app/screen/screen.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    outline: black 3px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgICBvdXRsaW5lOiBibGFjayAzcHggc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/screen/screen.component.html":
/*!**********************************************!*\
  !*** ./src/app/screen/screen.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas width=\"160\" height=\"144\"></canvas>"

/***/ }),

/***/ "./src/app/screen/screen.component.ts":
/*!********************************************!*\
  !*** ./src/app/screen/screen.component.ts ***!
  \********************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenComponent = /** @class */ (function () {
    function ScreenComponent() {
    }
    ScreenComponent.prototype.ngOnInit = function () {
    };
    ScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screen',
            template: __webpack_require__(/*! ./screen.component.html */ "./src/app/screen/screen.component.html"),
            styles: [__webpack_require__(/*! ./screen.component.css */ "./src/app/screen/screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenComponent);
    return ScreenComponent;
}());



/***/ }),

/***/ "./src/app/services/assembler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/assembler.service.ts ***!
  \***********************************************/
/*! exports provided: AssemblerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblerService", function() { return AssemblerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssemblerService = /** @class */ (function () {
    function AssemblerService() {
    }
    AssemblerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AssemblerService);
    return AssemblerService;
}());



/***/ }),

/***/ "./src/app/services/cpu/cpu/cpu.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cpu/cpu/cpu.ts ***!
  \*****************************************/
/*! exports provided: CPU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU", function() { return CPU; });
/* harmony import */ var _register_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-helper */ "./src/app/services/cpu/cpu/register-helper.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_1__);


var CPU = /** @class */ (function () {
    function CPU(opcodeFetcher) {
        this.opcodeFetcher = opcodeFetcher;
        this.EMPTY = 0;
        /* TODO those might be set in the constructor as we are
           emulating the CPU here and not explicitely the GB */
        /*
        On power up, the GameBoy Program Counter is
        initialized to $100 (100 hex) and the instruction found
        at this location in ROM is executed.
        The Program Counter from this point on is controlled,
        indirectly, by the program instructions themselves that
        were generated by the programmer of the ROM cart.
        */
        this.PC_INIT = 0x100;
        /*
          The GameBoy stack pointer is initialized to $FFFE on
          power up but a programmer should not rely on this
          setting and rather should explicitly set its value
        */
        this.SP_INIT = 0xFFFE;
        this.cpuStepMS = 5;
        this.reset();
        this.registerHelper = new _register_helper__WEBPACK_IMPORTED_MODULE_0__["RegisterHelper"](this);
    }
    CPU.prototype.getA = function () {
        return this.registerHelper.getA();
    };
    CPU.prototype.getF = function () {
        return this.registerHelper.getF();
    };
    CPU.prototype.getB = function () {
        return this.registerHelper.getB();
    };
    CPU.prototype.getC = function () {
        return this.registerHelper.getC();
    };
    CPU.prototype.getD = function () {
        return this.registerHelper.getD();
    };
    CPU.prototype.getE = function () {
        return this.registerHelper.getE();
    };
    CPU.prototype.reset = function () {
        this.pc = this.PC_INIT;
        this.sp = this.SP_INIT;
        this.af = this.EMPTY;
        this.bc = this.EMPTY;
        this.de = this.EMPTY;
        this.hl = this.EMPTY;
    };
    CPU.prototype.step = function () {
        var opcode = this.opcodeFetcher.fetchOpcode(this.pc);
        var cpuCyclesTaken = this.opcodeFetcher.executeOpCode(opcode, this.registerHelper);
        var _delay = cpuCyclesTaken * this.cpuStepMS;
        return Object(q__WEBPACK_IMPORTED_MODULE_1__["delay"])(_delay);
    };
    CPU.prototype.setCpuStep = function (ms) {
        this.cpuStepMS = ms;
    };
    return CPU;
}());



/***/ }),

/***/ "./src/app/services/cpu/cpu/memory.ts":
/*!********************************************!*\
  !*** ./src/app/services/cpu/cpu/memory.ts ***!
  \********************************************/
/*! exports provided: Memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memory", function() { return Memory; });
var _64KB_RAM = 0xFFFF;
var Memory = /** @class */ (function () {
    function Memory(size) {
        if (size === void 0) { size = _64KB_RAM; }
        this.size = size;
        this.reset();
    }
    Memory.prototype.getValueAtAdress = function (address) {
        // TODO should never return more than 0xFF
        var val = this.memory[address];
        return val === undefined ? 0x0 : val;
    };
    Memory.prototype.setValueAtAdress = function (address, value) {
        this.memory[address] = value;
    };
    Memory.prototype.reset = function () {
        this.memory = new Array(this.size);
    };
    Memory.prototype.loadProgram = function (program, loadAddress) {
        for (var _i = 0, _a = program.split('\n'); _i < _a.length; _i++) {
            var c = _a[_i];
            this.memory[loadAddress++] = Number.parseInt(c, 16);
        }
    };
    // TODO should be using virtual address space
    Memory.prototype.getMemory = function () {
        return this.memory;
    };
    return Memory;
}());



/***/ }),

/***/ "./src/app/services/cpu/cpu/opcode-fetcher.ts":
/*!****************************************************!*\
  !*** ./src/app/services/cpu/cpu/opcode-fetcher.ts ***!
  \****************************************************/
/*! exports provided: OpCodeFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpCodeFetcher", function() { return OpCodeFetcher; });
/* harmony import */ var _custom_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-types */ "./src/app/services/cpu/custom-types.ts");

// tslint:disable:no-bitwise
// tslint:disable:max-line-length
var OpCodeFetcher = /** @class */ (function () {
    // FETCHER
    function OpCodeFetcher(memory) {
        var _this_1 = this;
        this.memory = memory;
        this.opcodeMetas = [];
        var o = this.makeOpcodeMeta;
        var op = _custom_types__WEBPACK_IMPORTED_MODULE_0__["OpCodes"];
        var _this = this;
        function LD_N_with_NNREG(p, registerValue, reg) {
            var destinationAddress = p.parameters[0];
            memory.setValueAtAdress(destinationAddress, registerValue);
            reg.incrementPC(p.pcInc);
            return p.cycles;
        }
        function LD_NNREG_with_NN(p, store, reg) {
            var lsb = p.parameters[0];
            var msb = p.parameters[1];
            var val = _this.toLittleEndianByte(lsb, msb);
            store(val);
            reg.incrementPC(p.pcInc);
            return p.cycles;
        }
        this.opcodeMetas = [
            o(op.NOP, 0, 4, 'NOP', 'Does nothing', function (p, registerHelper) {
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // INC
            o(op.INCA, 0, 4, 'INC A', 'Increments A, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected', function (p, registerHelper) {
                registerHelper.incrementA();
                var A = registerHelper.getA();
                if (A === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setN(0);
                if (registerHelper.CY === 1) {
                    registerHelper.setH(1);
                }
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCC, 0, 4, 'INC C', 'Increments C, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected', function (p, registerHelper) {
                registerHelper.incrementC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECA, 0, 4, 'DEC A', 'Decrements A', function (p, registerHelper) {
                registerHelper.decrementA();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCBC, 0, 8, 'INC BC', 'Increments BC', function (p, registerHelper) {
                registerHelper.incrementBC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCDE, 0, 8, 'INC DE', 'Increments DE', function (p, registerHelper) {
                registerHelper.incrementDE();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCHL, 0, 8, 'INC HL', 'Increments HL', function (p, registerHelper) {
                registerHelper.incrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCSP, 0, 8, 'INC SP', 'Increment the Stack Pointer', function (p, registerHelper) {
                registerHelper.incrementSP();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // DEC
            o(op.DECBC, 0, 8, 'DEC BC', 'Decrements BC', function (p, registerHelper) {
                registerHelper.decrementBC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECDE, 0, 8, 'DEC DE', 'Decrements DE', function (p, registerHelper) {
                registerHelper.decrementDE();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECHL, 0, 8, 'DEC HL', 'Decrements HL', function (p, registerHelper) {
                registerHelper.decrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECSP, 0, 8, 'DEC SP', 'Decrements the Stack Pointer', function (p, registerHelper) {
                registerHelper.decrementSP();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // JP
            o(op.JPNN, 2, 12, 'JP 0x${1}${0}', 'Jumps to a NN', function (p, registerHelper) {
                var lsb = p.parameters[0];
                var msb = p.parameters[1];
                registerHelper.setPC(_this_1.toLittleEndianByte(lsb, msb));
                return p.cycles;
            }),
            o(op.JPNZNN, 2, 12, 'JP NZ, 0x${1}${0}', 'Jumps to NN if Z is not set', function (p, registerHelper) {
                var lsb = p.parameters[0];
                var msb = p.parameters[1];
                if (registerHelper.readZF() === 0) {
                    registerHelper.setPC(_this_1.toLittleEndianByte(lsb, msb));
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPZNN, 2, 12, 'JP Z, 0x${1}${0}', 'Jumps to NN if Z is set', function (p, registerHelper) {
                var lsb = p.parameters[0];
                var msb = p.parameters[1];
                if (registerHelper.readZF() === 1) {
                    registerHelper.setPC(_this_1.toLittleEndianByte(lsb, msb));
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPNCNN, 2, 12, 'JP NC, 0x${1}${0}', 'Jumps to NN if C is not set', function (p, registerHelper) {
                var lsb = p.parameters[0];
                var msb = p.parameters[1];
                if (registerHelper.readCY() === 0) {
                    registerHelper.setPC(_this_1.toLittleEndianByte(lsb, msb));
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPCNN, 2, 12, 'JP C, 0x${1}${0}', 'Jumps to NN if C is set', function (p, registerHelper) {
                var lsb = p.parameters[0];
                var msb = p.parameters[1];
                if (registerHelper.readCY() === 1) {
                    registerHelper.setPC(_this_1.toLittleEndianByte(lsb, msb));
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            // JR
            o(op.JRZN, 1, 8, 'JR Z, 0x${0}', 'Jumps to N if Z is set', function (p, registerHelper) {
                var destinationAddress = p.parameters[0];
                if (registerHelper.readZF() === 1) {
                    registerHelper.setPC(destinationAddress);
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JRNZN, 1, 8, 'JR NZ, 0x${0}', 'Jumps to N if Z is not set', function (p, registerHelper) {
                var destinationAddress = p.parameters[0];
                if (registerHelper.readZF() === 0) {
                    registerHelper.setPC(destinationAddress);
                }
                else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            // LD
            o(op.LDAN, 1, 8, 'LD A, 0x${0}', 'Put immediate 8 bit n into A', function (p, registerHelper) {
                var valueAddress = p.parameters[0];
                registerHelper.setA(valueAddress);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.LDBN, 1, 8, 'LD B, 0x${0}', 'Put value of register B into immediate 8 bit n', function (p, registerHelper) {
                return LD_N_with_NNREG(p, registerHelper.getB(), registerHelper);
            }),
            o(op.LDCN, 1, 8, 'LD C, 0x${0}', 'Put value of register C into immediate 8 bit n', function (p, registerHelper) {
                return LD_N_with_NNREG(p, registerHelper.getC(), registerHelper);
            }),
            o(op.LD_OFFSET_FF_CA, 0, 8, 'LD [0xFF + C], A', 'Put A into address $FF00 + register C', function (p, registerHelper) {
                var A = registerHelper.getA();
                var C = registerHelper.getC();
                memory.setValueAtAdress(0xFF + C, A);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.LDSPNN, 2, 12, 'LD SP, 0x${1}${0}', 'Loads a 16 bit immediate value into SP', function (p, registerHelper) {
                return LD_NNREG_with_NN(p, function (val) { return registerHelper.setSP(val); }, registerHelper);
            }),
            o(op.LDHLNN, 2, 12, 'LD HL, 0x${1}${0}', 'Loads a 16 bit immediate value into HL', function (p, registerHelper) {
                return LD_NNREG_with_NN(p, function (val) { return registerHelper.setHL(val); }, registerHelper);
            }),
            o(op.LDDHLA, 0, 8, 'LDD [HL], A', 'Put A into memory address HL. Decrement HL. Same as: LD (HL),A - DEC HL', function (p, registerHelper) {
                var A = registerHelper.getA();
                var HLAddr = registerHelper.getHL();
                memory.setValueAtAdress(HLAddr, A);
                registerHelper.decrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // CP
            o(op.CPA, 1, 8, 'CP A, 0x${0}', 'Compares an immediate 8 bit value with register A. TODO talk about C Z N etc..', function (p, registerHelper) {
                var comparaisonValue = p.parameters[0];
                var A = registerHelper.getA();
                var result = A - comparaisonValue;
                registerHelper.setN(1);
                if (result === 0) {
                    registerHelper.setZF(1);
                }
                else {
                    registerHelper.setZF(0);
                }
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // BITOPS
            o(op.XORA, 0, 4, 'XOR A', 'Logical exclusive OR n with register A, result in A. Z is set if result is 0. N, H & C are reset.', function (p, registerHelper) {
                var A = registerHelper.getA();
                A = A ^ A;
                registerHelper.setA(A);
                if (A === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setCY(0);
                registerHelper.setN(0);
                registerHelper.setH(0);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            // PREFIX opcodes
            o(op.BITBH, 0, 8, 'BIT 7,H', 'Test bit b in register H. Z is set if bit b of register H is 0. N is reset. H is set. C is not affected.', function (p, registerHelper) {
                var H = registerHelper.readBit(registerHelper.getH(), 7);
                if (H === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setN(0);
                registerHelper.setH(1);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            })
        ];
    }
    OpCodeFetcher.prototype.fetchOpcode = function (address) {
        try {
            var opcode_1 = this.fetchOpcodeValue(address);
            var opcodeMeta = this.opcodeMetas.find(function (meta) { return meta.code === opcode_1; });
            return new _custom_types__WEBPACK_IMPORTED_MODULE_0__["Opcode"](opcode_1, this.buildParameters(address, opcodeMeta), opcodeMeta.pcInc, opcodeMeta.cycles, opcodeMeta.opcodeBytes, opcodeMeta.template);
        }
        catch (any) {
            return new _custom_types__WEBPACK_IMPORTED_MODULE_0__["Opcode"](0, [], 0, 0, 0, 'UNKNOWN');
        }
    };
    OpCodeFetcher.prototype.executeOpCode = function (opcode, registerHelper) {
        return this.opcodeMetas
            .find(function (om) { return om.code === opcode.opcode; })
            .execute({ parameters: opcode.parameters, pcInc: opcode.pcInc, cycles: opcode.cycles }, registerHelper);
    };
    OpCodeFetcher.prototype.getOpcodes = function () {
        return this.opcodeMetas;
    };
    OpCodeFetcher.prototype.makeOpcodeMeta = function (code, params, cycles, template, doc, execute) {
        var isPrefix = code.toString(16).includes(_custom_types__WEBPACK_IMPORTED_MODULE_0__["OpCodes"].PREFIX.toString(16));
        var bytes = isPrefix ? 2 : 1;
        var pcInc = params + bytes;
        return { code: code, name: template, params: params, pcInc: pcInc, cycles: cycles, template: template, doc: doc, opcodeBytes: bytes, execute: execute };
    };
    OpCodeFetcher.prototype.buildParameters = function (initialPC, opcodeMeta) {
        var parameters = new Array();
        for (var i = 0; i < opcodeMeta.params; i++) {
            parameters.push(this.memory.getValueAtAdress(initialPC + (i + opcodeMeta.opcodeBytes)));
        }
        return parameters;
    };
    OpCodeFetcher.prototype.fetchOpcodeValue = function (address) {
        var prefixOpcode = _custom_types__WEBPACK_IMPORTED_MODULE_0__["OpCodes"].PREFIX;
        var opcode = this.memory.getValueAtAdress(address);
        if (opcode === prefixOpcode) {
            address++;
            opcode = Number.parseInt(opcode.toString(16) + this.memory.getValueAtAdress(address).toString(16), 16);
        }
        return opcode;
    };
    OpCodeFetcher.prototype.toLittleEndianByte = function (lsb, msb) {
        var addr = Number.parseInt(msb.toString(16).padStart(2, '0') + lsb.toString(16).padStart(2, '0'), 16);
        return addr;
    };
    return OpCodeFetcher;
}());



/***/ }),

/***/ "./src/app/services/cpu/cpu/register-helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cpu/cpu/register-helper.ts ***!
  \*****************************************************/
/*! exports provided: RegisterHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHelper", function() { return RegisterHelper; });
// tslint:disable:no-bitwise
var RegisterHelper = /** @class */ (function () {
    function RegisterHelper(cpu) {
        this.cpu = cpu;
        this.ZF = 0;
        this.N = 1;
        this.H = 2;
        this.CY = 3;
    }
    // Flags
    RegisterHelper.prototype.setZF = function (value) {
        this.cpu.af = this.setBit(this.cpu.af, this.ZF, value);
    };
    RegisterHelper.prototype.readZF = function () {
        return this.readBit(this.cpu.af, this.ZF);
    };
    RegisterHelper.prototype.setN = function (value) {
        this.cpu.af = this.setBit(this.cpu.af, this.N, value);
    };
    RegisterHelper.prototype.readN = function () {
        return this.readBit(this.cpu.af, this.N);
    };
    RegisterHelper.prototype.setH = function (value) {
        this.cpu.af = this.setBit(this.cpu.af, this.H, value);
    };
    RegisterHelper.prototype.readH = function () {
        return this.readBit(this.cpu.af, this.H);
    };
    RegisterHelper.prototype.setCY = function (value) {
        this.cpu.af = this.setBit(this.cpu.af, this.CY, value);
    };
    RegisterHelper.prototype.readCY = function () {
        return this.readBit(this.cpu.af, this.CY);
    };
    // registers
    RegisterHelper.prototype.setA = function (value) {
        this.cpu.af = this.setHigherByte(this.cpu.af, value);
    };
    // registers
    RegisterHelper.prototype.setC = function (value) {
        this.cpu.bc = this.setHigherByte(this.cpu.bc, value);
    };
    RegisterHelper.prototype.getA = function () {
        return this.getHigherByte(this.cpu.af);
    };
    RegisterHelper.prototype.getB = function () {
        return this.getHigherByte(this.cpu.bc);
    };
    RegisterHelper.prototype.getC = function () {
        return this.getLowerByte(this.cpu.bc);
    };
    RegisterHelper.prototype.getD = function () {
        return this.getHigherByte(this.cpu.de);
    };
    RegisterHelper.prototype.getE = function () {
        return this.getLowerByte(this.cpu.de);
    };
    RegisterHelper.prototype.getF = function () {
        return this.getLowerByte(this.cpu.af);
    };
    RegisterHelper.prototype.getHL = function () {
        return this.cpu.hl;
    };
    RegisterHelper.prototype.getH = function () {
        return this.getHigherByte(this.cpu.hl);
    };
    // INC
    RegisterHelper.prototype.incrementPC = function (bytes) {
        if (bytes === void 0) { bytes = 1; }
        this.cpu.pc += bytes;
        if (this.cpu.pc > 0xFFFF) {
            this.cpu.pc = 0;
        }
    };
    RegisterHelper.prototype.incrementBC = function () {
        this.cpu.bc++;
        if (this.cpu.bc > 0xFFFF) {
            this.cpu.bc = 0;
        }
    };
    RegisterHelper.prototype.incrementSP = function () {
        this.cpu.sp++;
        if (this.cpu.sp > 0xFFFF) {
            this.cpu.sp = 0;
        }
    };
    RegisterHelper.prototype.incrementHL = function () {
        this.cpu.hl++;
        if (this.cpu.hl > 0xFFFF) {
            this.cpu.hl = 0;
        }
    };
    RegisterHelper.prototype.incrementDE = function () {
        this.cpu.de++;
        if (this.cpu.de > 0xFFFF) {
            this.cpu.de = 0;
        }
    };
    RegisterHelper.prototype.incrementA = function () {
        var A = this.getA() + 1;
        if (A > 0xFF) {
            this.setA(0);
        }
        else {
            this.setA(A);
        }
    };
    RegisterHelper.prototype.incrementC = function () {
        var C = this.getC() + 1;
        if (C > 0xFF) {
            this.setC(0);
        }
        else {
            this.setC(C);
        }
    };
    // DEC
    RegisterHelper.prototype.decrementBC = function () {
        this.cpu.bc--;
        if (this.cpu.bc < 0) {
            this.cpu.bc = 0xFFFF;
        }
    };
    RegisterHelper.prototype.decrementSP = function () {
        this.cpu.sp--;
        if (this.cpu.sp < 0) {
            this.cpu.sp = 0xFFFF;
        }
    };
    RegisterHelper.prototype.decrementHL = function () {
        this.cpu.hl--;
        if (this.cpu.hl < 0) {
            this.cpu.hl = 0xFFFF;
        }
    };
    RegisterHelper.prototype.decrementDE = function () {
        this.cpu.de--;
        if (this.cpu.de < 0) {
            this.cpu.de = 0xFFFF;
        }
    };
    RegisterHelper.prototype.decrementA = function () {
        var A = this.getA() - 1;
        if (A < 0x00) {
            this.setA(0xFF);
        }
        else {
            this.setA(A);
        }
    };
    RegisterHelper.prototype.setPC = function (address) {
        this.cpu.pc = address;
    };
    RegisterHelper.prototype.setSP = function (address) {
        this.cpu.sp = address;
    };
    RegisterHelper.prototype.setHL = function (address) {
        this.cpu.hl = address;
    };
    // Helper functions
    RegisterHelper.prototype.setLowerByte = function (register, value) {
        var mask = 255;
        return (register & ~mask) | (value & mask);
    };
    RegisterHelper.prototype.setHigherByte = function (register, value) {
        value = value << 8;
        var mask = 65280;
        return (register & ~mask) | (value & mask);
    };
    RegisterHelper.prototype.getLowerByte = function (register) {
        var mask = 255;
        return register & mask;
    };
    RegisterHelper.prototype.getHigherByte = function (register) {
        return register >> 8;
    };
    RegisterHelper.prototype.readBit = function (register, position) {
        return ((register >> position) & 1);
    };
    RegisterHelper.prototype.setBit = function (register, position, b) {
        var mask = ~(1 << position);
        return (b << position) | (mask & register);
    };
    return RegisterHelper;
}());



/***/ }),

/***/ "./src/app/services/cpu/custom-types.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cpu/custom-types.ts ***!
  \**********************************************/
/*! exports provided: Opcode, DEMO_PROGRAM, OpCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opcode", function() { return Opcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_PROGRAM", function() { return DEMO_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpCodes", function() { return OpCodes; });
var Opcode = /** @class */ (function () {
    function Opcode(opcode, parameters, pcInc, cycles, opcodeBytes, template) {
        this.opcode = opcode;
        this.parameters = parameters;
        this.pcInc = pcInc;
        this.cycles = cycles;
        this.opcodeBytes = opcodeBytes;
        this.template = template;
    }
    Opcode.prototype.getOpcodeHumanReadable = function () {
        var humanReadable = this.template;
        for (var i = 0; i < this.parameters.length; i++) {
            humanReadable = humanReadable.replace("${" + i + "}", this.parameters[i].toString(16).toUpperCase().padStart(2, '0'));
        }
        return humanReadable;
    };
    Opcode.prototype.getOpcodeTotalLength = function () {
        var length = this.parameters.length + this.opcodeBytes;
        return length > 0 ? length : 1;
    };
    return Opcode;
}());

var DEMO_PROGRAM = '0x0\n' +
    '0x3E ' + '0x01\n' // LD A, #01
    + '0xFE ' + '0xFF\n' // :103  CP A, #FF
    + '0xCA ' + '0x0F ' + '0x01\n' // JP Z, #010F (Little Endian)
    + '0x3C\n' // INC A
    + '0x13\n' // INC DE
    + '0x23\n' // INC HL
    + '0x33\n' // INC SP
    + '0xC3 ' + '0x03 ' + '0x01\n' // JP #0103 (Little Endian)
    + '0x3D\n' // :x010F DEC A
    + '0xFE ' + '0x0\n' // CP A, #00
    + '0xCA ' + '0x03 ' + '0x01\n' // JP Z, #0103 (Little Endian)
    + '0xC3 ' + '0x0F ' + '0x01'; // JP #010F (Little Endian)
var OpCodes;
(function (OpCodes) {
    OpCodes[OpCodes["NOP"] = 0] = "NOP";
    // Interrupts
    OpCodes[OpCodes["EI"] = 251] = "EI";
    OpCodes[OpCodes["DI"] = 243] = "DI";
    // CP
    OpCodes[OpCodes["CPA"] = 254] = "CPA";
    // LD
    OpCodes[OpCodes["LDAN"] = 62] = "LDAN";
    OpCodes[OpCodes["LDBN"] = 6] = "LDBN";
    OpCodes[OpCodes["LDCN"] = 14] = "LDCN";
    OpCodes[OpCodes["LD_OFFSET_FF_CA"] = 226] = "LD_OFFSET_FF_CA";
    OpCodes[OpCodes["LDSPNN"] = 49] = "LDSPNN";
    OpCodes[OpCodes["LDHLNN"] = 33] = "LDHLNN";
    OpCodes[OpCodes["LDDHLA"] = 50] = "LDDHLA";
    // INC
    OpCodes[OpCodes["INCA"] = 60] = "INCA";
    OpCodes[OpCodes["INCC"] = 12] = "INCC";
    OpCodes[OpCodes["INCBC"] = 3] = "INCBC";
    OpCodes[OpCodes["INCDE"] = 19] = "INCDE";
    OpCodes[OpCodes["INCHL"] = 35] = "INCHL";
    OpCodes[OpCodes["INCSP"] = 51] = "INCSP";
    // DEC
    OpCodes[OpCodes["DECA"] = 61] = "DECA";
    OpCodes[OpCodes["DECBC"] = 11] = "DECBC";
    OpCodes[OpCodes["DECDE"] = 27] = "DECDE";
    OpCodes[OpCodes["DECHL"] = 43] = "DECHL";
    OpCodes[OpCodes["DECSP"] = 59] = "DECSP";
    OpCodes[OpCodes["JPNN"] = 195] = "JPNN";
    OpCodes[OpCodes["JPZNN"] = 202] = "JPZNN";
    OpCodes[OpCodes["JPNZNN"] = 194] = "JPNZNN";
    OpCodes[OpCodes["JPNCNN"] = 210] = "JPNCNN";
    OpCodes[OpCodes["JPCNN"] = 218] = "JPCNN";
    OpCodes[OpCodes["JRZN"] = 40] = "JRZN";
    OpCodes[OpCodes["JRNZN"] = 32] = "JRNZN";
    // BITOPS
    OpCodes[OpCodes["XORA"] = 175] = "XORA";
    // PREFIX
    OpCodes[OpCodes["PREFIX"] = 203] = "PREFIX";
    OpCodes[OpCodes["BITBH"] = 52092] = "BITBH";
})(OpCodes || (OpCodes = {}));


/***/ }),

/***/ "./src/app/services/cpu/hardware.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/cpu/hardware.service.ts ***!
  \**************************************************/
/*! exports provided: HardwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardwareService", function() { return HardwareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cpu_cpu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpu/cpu */ "./src/app/services/cpu/cpu/cpu.ts");
/* harmony import */ var _cpu_memory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpu/memory */ "./src/app/services/cpu/cpu/memory.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cpu_opcode_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpu/opcode-fetcher */ "./src/app/services/cpu/cpu/opcode-fetcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HardwareService = /** @class */ (function () {
    function HardwareService() {
        this.memory = new _cpu_memory__WEBPACK_IMPORTED_MODULE_2__["Memory"]();
        this.opcodeFetcher = new _cpu_opcode_fetcher__WEBPACK_IMPORTED_MODULE_4__["OpCodeFetcher"](this.memory);
        this.cpu = new _cpu_cpu__WEBPACK_IMPORTED_MODULE_1__["CPU"](this.opcodeFetcher);
    }
    HardwareService.prototype.isRunning = function () {
        return this.running;
    };
    HardwareService.prototype.isPaused = function () {
        return this.paused;
    };
    HardwareService.prototype.turnOn = function () {
        var _this = this;
        if (this.runP) {
            this.running = false;
            this.runP.finally(function () { return _this.run(); });
        }
        else {
            this.runP = this.run();
        }
    };
    HardwareService.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.running = true;
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 6];
                        if (!!this.paused) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cpu.step()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Object(q__WEBPACK_IMPORTED_MODULE_3__["delay"])(1)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HardwareService.prototype.pause = function () {
        this.paused = !this.paused;
    };
    HardwareService.prototype.stop = function () {
        this.running = false;
        this.paused = false;
    };
    HardwareService.prototype.reset = function () {
        this.stop();
        this.memory.reset();
        this.cpu.reset();
    };
    HardwareService.prototype.loadProgram = function (program) {
        this.reset();
        this.memory.loadProgram(program, this.cpu.pc);
    };
    HardwareService.prototype.setCPuStepMs = function (ms) {
        this.cpu.setCpuStep(ms);
    };
    HardwareService.prototype.getMemory = function (startAddress, endAddress) {
        var a = new Array();
        var currentAddress = startAddress;
        var nextHumanReadable = startAddress;
        for (var _i = 0, _a = this.memory.getMemory().slice(startAddress, endAddress); _i < _a.length; _i++) {
            var value = _a[_i];
            if (currentAddress === nextHumanReadable) {
                var opcode = this.opcodeFetcher.fetchOpcode(currentAddress);
                var opcodeHumanReadable = opcode.getOpcodeHumanReadable();
                a.push({
                    address: currentAddress,
                    value: value,
                    opcodeHumanReadable: opcodeHumanReadable
                });
                nextHumanReadable = currentAddress + opcode.getOpcodeTotalLength();
            }
            else {
                a.push({
                    address: currentAddress,
                    value: value,
                    opcodeHumanReadable: ''
                });
            }
            currentAddress++;
        }
        return a;
    };
    HardwareService.prototype.updateMemory = function (address, value) {
        this.memory.setValueAtAdress(address, value);
    };
    HardwareService.prototype.getCpuRegisters = function () {
        return [
            { name: 'a', value: this.cpu.getA() },
            { name: 'f', value: this.cpu.getF() },
            { name: 'b', value: this.cpu.getB() },
            { name: 'c', value: this.cpu.getC() },
            { name: 'd', value: this.cpu.getD() },
            { name: 'e', value: this.cpu.getE() },
            { name: 'af', value: this.cpu.af },
            { name: 'bc', value: this.cpu.bc },
            { name: 'de', value: this.cpu.de },
            { name: 'hl', value: this.cpu.hl },
            { name: 'sp', value: this.cpu.sp },
            { name: 'pc', value: this.cpu.pc }
        ];
    };
    HardwareService.prototype.getOpcodes = function () {
        return this.opcodeFetcher.getOpcodes();
    };
    HardwareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HardwareService);
    return HardwareService;
}());



/***/ }),

/***/ "./src/app/services/documentation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/documentation.service.ts ***!
  \***************************************************/
/*! exports provided: DocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationService", function() { return DocumentationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentationService = /** @class */ (function () {
    function DocumentationService() {
        this.filter = '';
    }
    DocumentationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DocumentationService);
    return DocumentationService;
}());



/***/ }),

/***/ "./src/app/services/program-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/program-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ProgramLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramLoaderService", function() { return ProgramLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramLoaderService = /** @class */ (function () {
    function ProgramLoaderService() {
        this.program = '';
    }
    ProgramLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProgramLoaderService);
    return ProgramLoaderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ReyAnthony/sharp-LR35902/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map