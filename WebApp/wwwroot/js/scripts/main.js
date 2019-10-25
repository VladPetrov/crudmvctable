var scripts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpscripts"] = window["webpackJsonpscripts"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Scripts/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scripts/EditNoteService/editNoteService.ts":
/*!****************************************************!*\
  !*** ./Scripts/EditNoteService/editNoteService.ts ***!
  \****************************************************/
/*! exports provided: EditNoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteService", function() { return EditNoteService; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modalService_modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalService/modalService */ "./Scripts/modalService/modalService.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./Scripts/common/index.ts");



class EditNoteService {
    constructor(editNoteLink, tableService) {
        this.modalId = 'edit-note';
        this.noteInputName = 'note';
        this.editNoteLink = editNoteLink;
        this.tableService = tableService;
    }
    startListening() {
        this.formListening();
        this.modalService = new _modalService_modalService__WEBPACK_IMPORTED_MODULE_1__["ModalService"](this.modalId);
        const $container = jquery__WEBPACK_IMPORTED_MODULE_0__(`#${this.tableService.containerName} .custom-popover.note`);
        this.popover = new _common__WEBPACK_IMPORTED_MODULE_2__["Popover"]($container);
        this.popover.startListening(($target) => {
            const $template = _common__WEBPACK_IMPORTED_MODULE_2__["Popover"].templateEditIcon();
            $template.on('click', (event) => {
                const $target = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget);
                const text = $target.parent().text();
                const $find = $target.closest('tr');
                this.transactionId = $find.data('id');
                this.modalService.showPage();
                const $noteInput = jquery__WEBPACK_IMPORTED_MODULE_0__(`#${this.modalId} textarea[name='${this.noteInputName}']`);
                $noteInput.val(text);
            });
            this.popover.showTemplate($target, $template);
        });
    }
    formListening() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(`#${this.modalId} form`).on('submit', (event) => {
            event.preventDefault();
            const $target = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget);
            const formValues = $target.serializeArray();
            const note = formValues.find(x => x.name === this.noteInputName);
            if (note) {
                const request = {
                    transactionId: this.transactionId,
                    note: note.value
                };
                _common__WEBPACK_IMPORTED_MODULE_2__["Xhr"].requestJson('POST', this.editNoteLink, request, response => {
                    this.modalService.closePage();
                    this.tableService.refresh();
                });
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/EndBalanceService/EndBalanceService.ts":
/*!********************************************************!*\
  !*** ./Scripts/EndBalanceService/EndBalanceService.ts ***!
  \********************************************************/
/*! exports provided: EndBalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndBalanceService", function() { return EndBalanceService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./Scripts/common/index.ts");

class EndBalanceService {
    static subscribeToTable(service, url, containerId) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = service.onFilterTable.subscribe(request => {
            _common__WEBPACK_IMPORTED_MODULE_0__["Xhr"].requestHtml("GET", url, {}, response => {
                const container = $(`#${containerId}`);
                container.animate({ 'opacity': 0 }, 400, () => {
                    container.html(response).animate({ 'opacity': 1 }, 400);
                });
            });
        });
    }
}


/***/ }),

/***/ "./Scripts/FormScripts/formScripts.ts":
/*!********************************************!*\
  !*** ./Scripts/FormScripts/formScripts.ts ***!
  \********************************************/
/*! exports provided: FormScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormScripts", function() { return FormScripts; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0__["noConflict"]();
class FormScripts {
    constructor(selector) {
        this.selector = selector;
    }
    run() {
        const $form = jquery__WEBPACK_IMPORTED_MODULE_0__(`#${this.selector}`).closest("form");
        this.setDatePicker($form);
    }
    setDatePicker($form) {
        this.setDatePickerForInputs($form.find('input[type=datetime]'));
        this.setDatePickerForInputs($form.find('input[type=datetime-local]'));
    }
    setDatePickerForInputs($inputs) {
        console.log($inputs[0]);
        $inputs.datepicker({
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/PostExportService/PostExportService.ts":
/*!********************************************************!*\
  !*** ./Scripts/PostExportService/PostExportService.ts ***!
  \********************************************************/
/*! exports provided: PostExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostExportService", function() { return PostExportService; });
class ExportRequest {
    constructor() {
        this.ids = [];
    }
}
class PostExportService {
    constructor(service, url) {
        this.editButtonClass = "exportPost";
        this.ids = [];
        this.tableService = service;
        this.$editButton = $(`#${this.tableService.containerName} .${this.editButtonClass}`);
        this.$editButton.prop("disabled", true);
        this.url = url;
        this.subscription = service.rowsSelectManager.onSelectedRows.subscribe(ids => {
            this.ids = ids;
            if (this.ids && this.ids.length) {
                this.$editButton.prop("disabled", false);
            }
            else {
                this.$editButton.prop("disabled", true);
            }
        });
        this.$editButton.click(e => {
            this.doExport();
        });
    }
    static instance(service, url) {
        if (this._instance) {
            this._instance.subscription.unsubscribe();
        }
        this._instance = new PostExportService(service, url);
        return this._instance;
    }
    doExport() {
        if (!(this.ids && this.ids.length)) {
            return;
        }
        this.sendRequest();
    }
    sendRequest() {
        const request = this.createRequest();
        // Xhr.requestJson('POST',
        //     this.url,
        //     request,
        //     response =>
        //     {
        //     });   
        $.ajax({
            type: "POST",
            url: this.url,
            data: JSON.stringify(request),
            contentType: "application/json; charset=utf-8",
            error: function (request, status, error) { console.log(error); },
            success: function (response, status, xhr) {
                // check for a filename
                var filename = "";
                var disposition = xhr.getResponseHeader('Content-Disposition');
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1])
                        filename = matches[1].replace(/['"]/g, '');
                }
                var type = xhr.getResponseHeader('Content-Type');
                var blob = new Blob([response], { type: type });
                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                    window.navigator.msSaveBlob(blob, filename);
                }
                else {
                    var URL = window.URL || window.webkitURL;
                    var downloadUrl = URL.createObjectURL(blob);
                    if (filename) {
                        // use HTML5 a[download] attribute to specify filename
                        var a = document.createElement("a");
                        // safari doesn't support this yet
                        if (typeof a.download === 'undefined') {
                            window.location = downloadUrl;
                        }
                        else {
                            a.href = downloadUrl;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                        }
                    }
                    else {
                        window.location = downloadUrl;
                    }
                    setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                }
            }
        });
    }
    createRequest() {
        return {
            ids: this.ids
        };
    }
}


/***/ }),

/***/ "./Scripts/common/index.ts":
/*!*********************************!*\
  !*** ./Scripts/common/index.ts ***!
  \*********************************/
/*! exports provided: Xhr, StringConstant, InstancesContainer, SingleToneBase, Popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhr */ "./Scripts/common/xhr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhr", function() { return _xhr__WEBPACK_IMPORTED_MODULE_0__["Xhr"]; });

/* harmony import */ var _stringConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringConstants */ "./Scripts/common/stringConstants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringConstant", function() { return _stringConstants__WEBPACK_IMPORTED_MODULE_1__["StringConstant"]; });

/* harmony import */ var _singleTone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleTone */ "./Scripts/common/singleTone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstancesContainer", function() { return _singleTone__WEBPACK_IMPORTED_MODULE_2__["InstancesContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleToneBase", function() { return _singleTone__WEBPACK_IMPORTED_MODULE_2__["SingleToneBase"]; });

/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover */ "./Scripts/common/popover.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover__WEBPACK_IMPORTED_MODULE_3__["Popover"]; });




//export * from "./pdf";



/***/ }),

/***/ "./Scripts/common/popover.ts":
/*!***********************************!*\
  !*** ./Scripts/common/popover.ts ***!
  \***********************************/
/*! exports provided: Popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Popover {
    constructor(container) {
        this.container = container;
        this.$targets = [];
    }
    static templatePreview(fileDownloadLink) {
        return `
            <div class="content preview">
                <div class="img"></div>
                <div class="buttons">
                    <a role="button" class="btn btn-outline-primary btn-sm" href="${fileDownloadLink}">Download</a>
                </div>
            </div>
        `;
    }
    static templateEditIcon() {
        return jquery__WEBPACK_IMPORTED_MODULE_0__(`<div class="content edit-note"><i class="flaticon-edit-1"></i></div>`);
    }
    startListening(callback) {
        this.container.on('mouseenter', (event) => {
            const $target = jquery__WEBPACK_IMPORTED_MODULE_0__(event.currentTarget);
            this.$targets.push($target);
            if (callback) {
                callback($target);
            }
        });
        this.container.on('mouseleave', () => {
            this.closeTemplate();
        });
    }
    showTemplate($target, template) {
        $target
            .append(template)
            .children(':last')
            .hide()
            .fadeIn(200);
    }
    closeTemplate() {
        this.$targets.forEach($target => {
            $target.children(':last').fadeOut(200, function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(this).remove();
            });
        });
        this.$targets = [];
    }
}


/***/ }),

/***/ "./Scripts/common/singleTone.ts":
/*!**************************************!*\
  !*** ./Scripts/common/singleTone.ts ***!
  \**************************************/
/*! exports provided: InstancesContainer, SingleToneBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancesContainer", function() { return InstancesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleToneBase", function() { return SingleToneBase; });
class InstancesContainer {
    constructor() {
        this.instances = {};
    }
    instance(name) {
        const inst = this.instances[name];
        if (!inst) {
            console.log(`Instance with name '${name}' was not found`);
        }
        return inst;
    }
    initService(name, func) {
        const inst = this.instances[name];
        if (!inst) {
            this.instances[name] = func();
        }
    }
}
class SingleToneBase {
    static initService(name, func) {
        this.instancesContainer.initService(name, func);
    }
    static instance(name) {
        return this.instancesContainer.instance(name);
    }
}
SingleToneBase.instancesContainer = new InstancesContainer();


/***/ }),

/***/ "./Scripts/common/stringConstants.ts":
/*!*******************************************!*\
  !*** ./Scripts/common/stringConstants.ts ***!
  \*******************************************/
/*! exports provided: StringConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringConstant", function() { return StringConstant; });
class StringConstant {
}
StringConstant.dateFormat = "DD/MM/YYYY";
StringConstant.dateRangeFilterStartGroupName = "startFilter";
StringConstant.dateRangeFilterEndGroupName = "endFilter";


/***/ }),

/***/ "./Scripts/common/xhr.ts":
/*!*******************************!*\
  !*** ./Scripts/common/xhr.ts ***!
  \*******************************/
/*! exports provided: Xhr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xhr", function() { return Xhr; });
class Xhr {
    static requestHtml(type, url, request, responseAction) {
        this.request(type, url, 'HTML', request, responseAction);
    }
    static requestJson(type, url, request, responseAction) {
        this.request(type, url, 'json', request, responseAction);
    }
    static request(type, url, dataType, request, responseAction) {
        $.ajax({
            type: type,
            url: url,
            data: JSON.stringify(request),
            contentType: "application/json; charset=utf-8",
            dataType: dataType,
            cache: false,
            success: response => {
                responseAction(response);
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/dragAndDropFileUploader/dragAndDropFileUploader.ts":
/*!********************************************************************!*\
  !*** ./Scripts/dragAndDropFileUploader/dragAndDropFileUploader.ts ***!
  \********************************************************************/
/*! exports provided: DragAndDropFileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropFileUploader", function() { return DragAndDropFileUploader; });
class DragAndDropFileUploader {
    constructor(postUrl, service) {
        this.service = service;
        this.postUrl = postUrl;
        $("html").on("dragover", function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).addClass('dragging');
        });
        $("html").on("dragleave", function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).removeClass('dragging');
        });
        $("html").on("drop", event => {
            event.preventDefault();
            event.stopPropagation();
        });
    }
    startListening() {
        const inputs$ = $(`#${this.service.containerName} tr`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i]);
        }
    }
    register(row) {
        const row$ = $(row);
        row$.on('dragover', false)
            .on('drop', event => {
            const idVal = row$.data("id");
            if (idVal) {
                event.preventDefault();
                var files = event.originalEvent.dataTransfer.files;
                var formData = new FormData();
                formData.append('files', files[0]);
                formData.append('transactionId', idVal); //todo hardcoded val
                this.sendData(formData);
            }
        });
    }
    //private sendData(formData: FormData): void
    //{
    //    Xhr.request("POST", this.postUrl, "json", formData, () => this.service.refresh());
    //}
    sendData(formData) {
        $.ajax({
            url: this.postUrl,
            type: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: e => {
                this.service.refresh();
            },
            error: e => {
                console.log(e);
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/dropdownService/dropdownService.ts":
/*!****************************************************!*\
  !*** ./Scripts/dropdownService/dropdownService.ts ***!
  \****************************************************/
/*! exports provided: DropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return DropdownService; });
/* harmony import */ var _common_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/xhr */ "./Scripts/common/xhr.ts");

class DropdownListItem {
}
class DropdownService {
    constructor(url) {
        this.url = url;
    }
    listen(mainDropdownSelector, childDropdownSelector) {
        const mainDropdown = $(`#${mainDropdownSelector}`);
        const childDropdown = $(`#${childDropdownSelector}`);
        if (this.getSelectedOptionValue(mainDropdown)) {
            this.render(mainDropdown, childDropdown);
        }
        mainDropdown.on("change", (event) => this.render(mainDropdown, childDropdown));
    }
    render(mainDropdown, childDropdown) {
        const mainSelectedId = this.getSelectedOptionValue(mainDropdown);
        _common_xhr__WEBPACK_IMPORTED_MODULE_0__["Xhr"].requestJson("POST", `${this.url}/${mainSelectedId}`, {}, (items) => this.populateDropdown(childDropdown, items));
    }
    populateDropdown(dropdown, items) {
        const id = this.getSelectedOptionValue(dropdown);
        dropdown.empty();
        dropdown.append(this.createEmptyOption());
        items.forEach((x) => {
            var selected = x.id == id; // yes I need ==!!
            dropdown.append(this.createOption(x.name, x.id, selected));
        });
    }
    getSelectedOptionValue(dropdown) {
        return dropdown.val();
    }
    createEmptyOption() {
        const option = $("<option></option>").attr("value", "").text("--Select Value--"); //todo use value from string constants
        return option;
    }
    createOption(text, value, selected = false) {
        const option = $("<option></option>").attr("value", value).text(text);
        if (selected) {
            option.attr("selected", "selected");
        }
        return option;
    }
}


/***/ }),

/***/ "./Scripts/index.ts":
/*!**************************!*\
  !*** ./Scripts/index.ts ***!
  \**************************/
/*! exports provided: DragAndDropFileUploader, DropdownService, EndBalanceService, ManyToManyRelationService, ModalService, TableService, EditNoteService, PostExportService, FormScripts, Xhr, StringConstant, InstancesContainer, SingleToneBase, Popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./Scripts/common/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhr", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Xhr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringConstant", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstancesContainer", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["InstancesContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleToneBase", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SingleToneBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Popover"]; });

/* harmony import */ var _dragAndDropFileUploader_dragAndDropFileUploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDropFileUploader/dragAndDropFileUploader */ "./Scripts/dragAndDropFileUploader/dragAndDropFileUploader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragAndDropFileUploader", function() { return _dragAndDropFileUploader_dragAndDropFileUploader__WEBPACK_IMPORTED_MODULE_1__["DragAndDropFileUploader"]; });

/* harmony import */ var _dropdownService_dropdownService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdownService/dropdownService */ "./Scripts/dropdownService/dropdownService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return _dropdownService_dropdownService__WEBPACK_IMPORTED_MODULE_2__["DropdownService"]; });

/* harmony import */ var _EndBalanceService_EndBalanceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EndBalanceService/EndBalanceService */ "./Scripts/EndBalanceService/EndBalanceService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EndBalanceService", function() { return _EndBalanceService_EndBalanceService__WEBPACK_IMPORTED_MODULE_3__["EndBalanceService"]; });

/* harmony import */ var _manyToManyRelationService_manyToManyRelationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manyToManyRelationService/manyToManyRelationService */ "./Scripts/manyToManyRelationService/manyToManyRelationService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManyToManyRelationService", function() { return _manyToManyRelationService_manyToManyRelationService__WEBPACK_IMPORTED_MODULE_4__["ManyToManyRelationService"]; });

/* harmony import */ var _modalService_modalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalService/modalService */ "./Scripts/modalService/modalService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modalService_modalService__WEBPACK_IMPORTED_MODULE_5__["ModalService"]; });

/* harmony import */ var _tableService_tableService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableService/tableService */ "./Scripts/tableService/tableService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _tableService_tableService__WEBPACK_IMPORTED_MODULE_6__["TableService"]; });

/* harmony import */ var _EditNoteService_editNoteService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditNoteService/editNoteService */ "./Scripts/EditNoteService/editNoteService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNoteService", function() { return _EditNoteService_editNoteService__WEBPACK_IMPORTED_MODULE_7__["EditNoteService"]; });

/* harmony import */ var _PostExportService_PostExportService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostExportService/PostExportService */ "./Scripts/PostExportService/PostExportService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExportService", function() { return _PostExportService_PostExportService__WEBPACK_IMPORTED_MODULE_8__["PostExportService"]; });

/* harmony import */ var _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormScripts/formScripts */ "./Scripts/FormScripts/formScripts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormScripts", function() { return _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_9__["FormScripts"]; });













/***/ }),

/***/ "./Scripts/manyToManyRelationService/manyToManyRelationService.ts":
/*!************************************************************************!*\
  !*** ./Scripts/manyToManyRelationService/manyToManyRelationService.ts ***!
  \************************************************************************/
/*! exports provided: ManyToManyRelationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyToManyRelationService", function() { return ManyToManyRelationService; });
/* harmony import */ var _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manyToManyRelationServiceCommon */ "./Scripts/manyToManyRelationService/manyToManyRelationServiceCommon.ts");
/* harmony import */ var _common_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/xhr */ "./Scripts/common/xhr.ts");


class ManyToManyRelationService {
    constructor(leftEntityId, containerName, url) {
        this.initiallyChecked = [];
        this.itemsToAdd = [];
        this.itemsToDelete = [];
        this.leftEntityId = leftEntityId;
        this.url = url;
        this.containerName = containerName;
    }
    registerCheckbox(selector, id) {
        const checkBox = $(`#${selector}`);
        if (checkBox.is(":checked")) {
            this.initiallyChecked.push(selector);
        }
        checkBox.change((e) => {
            if (checkBox.is(":checked")) {
                if (!this.initiallyChecked.find(x => x === selector)) {
                    this.addItem(id);
                }
                const deletedItem = this.itemsToDelete.find(x => x.id === id);
                if (deletedItem) {
                    const index = this.itemsToDelete.indexOf(deletedItem);
                    this.itemsToDelete.splice(index, 1);
                }
            }
            else {
                if (this.initiallyChecked.find(x => x === selector)) {
                    this.delItem(id);
                }
                const addedItem = this.itemsToAdd.find(x => x.id === id);
                if (addedItem) {
                    const index = this.itemsToAdd.indexOf(addedItem);
                    this.itemsToAdd.splice(index, 1);
                }
            }
        });
    }
    save() {
        const request = this.createRequest();
        _common_xhr__WEBPACK_IMPORTED_MODULE_1__["Xhr"].requestHtml("POST", this.url, request, response => $(`#${this.containerName}`).html(response));
    }
    addItem(id) {
        const item = new _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__["ManyToManySaveViewModel"](id, _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__["ManyToManySaveAction"].Add);
        this.itemsToAdd.push(item);
    }
    delItem(id) {
        const item = new _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__["ManyToManySaveViewModel"](id, _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__["ManyToManySaveAction"].Delete);
        this.itemsToDelete.push(item);
    }
    createRequest() {
        const request = new _manyToManyRelationServiceCommon__WEBPACK_IMPORTED_MODULE_0__["ManyToManyRelationRequest"](this.leftEntityId);
        request.items = request.items.concat(this.itemsToAdd);
        request.items = request.items.concat(this.itemsToDelete);
        return request;
    }
}


/***/ }),

/***/ "./Scripts/manyToManyRelationService/manyToManyRelationServiceCommon.ts":
/*!******************************************************************************!*\
  !*** ./Scripts/manyToManyRelationService/manyToManyRelationServiceCommon.ts ***!
  \******************************************************************************/
/*! exports provided: ManyToManyRelationRequest, ManyToManySaveViewModel, ManyToManySaveAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyToManyRelationRequest", function() { return ManyToManyRelationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyToManySaveViewModel", function() { return ManyToManySaveViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyToManySaveAction", function() { return ManyToManySaveAction; });
class ManyToManyRelationRequest {
    constructor(leftEntityId) {
        this.items = [];
        this.leftEntityId = leftEntityId;
    }
}
class ManyToManySaveViewModel {
    constructor(id, action) {
        this.id = id;
        this.action = action;
    }
}
var ManyToManySaveAction;
(function (ManyToManySaveAction) {
    ManyToManySaveAction[ManyToManySaveAction["Add"] = 1] = "Add";
    ManyToManySaveAction[ManyToManySaveAction["Delete"] = 2] = "Delete";
})(ManyToManySaveAction || (ManyToManySaveAction = {}));


/***/ }),

/***/ "./Scripts/modalService/modalService.ts":
/*!**********************************************!*\
  !*** ./Scripts/modalService/modalService.ts ***!
  \**********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _common_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/xhr */ "./Scripts/common/xhr.ts");

class ModalService {
    constructor(modalId) {
        this.options = {
            backdrop: true,
            keyboard: false,
            focus: true,
            show: false
        };
        this.modal = $(`#${modalId}`);
        this.modal.modal(this.options);
        this.container = this.modal.find('.modal-body');
    }
    showPage(url = null) {
        this.showPageInternal(url, "True");
    }
    closePage() {
        this.modal.modal('hide');
    }
    registerButton(buttonId) {
        var button = $(`#${buttonId}`);
        var url = button.attr('url');
        var isActionlink = button.attr('isActionlink');
        button.on('click', e => {
            this.showPageInternal(url, isActionlink);
        });
    }
    showPageInternal(url, isActionlink) {
        if (isActionlink === 'True') {
            if (url) {
                this.loadContent(url);
            }
            this.show();
        }
        else {
            this.closePage();
        }
    }
    show() {
        this.modal.modal('show');
        this.modal.modal('handleUpdate');
    }
    loadContent(url) {
        _common_xhr__WEBPACK_IMPORTED_MODULE_0__["Xhr"].requestHtml("GET", url, {}, response => {
            this.container.empty();
            this.container.html(response);
        });
    }
}


/***/ }),

/***/ "./Scripts/tableService/clearSearch.ts":
/*!*********************************************!*\
  !*** ./Scripts/tableService/clearSearch.ts ***!
  \*********************************************/
/*! exports provided: ClearSearch, clearSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearSearch", function() { return ClearSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearch", function() { return clearSearch; });
class ClearSearch {
    static register(input, callback) {
        const clearClass = 'clear_input';
        const focusAfterClear = true;
        const linkText = '&times;';
        const divClass = clearClass + '_div';
        var $this = $(input);
        if (!$this.parent().hasClass(divClass)) {
            $this.wrap(`<div style='position: relative;' class='${divClass}'>${$this.html()}</div>`);
            $this.after(`<a style='position: absolute; cursor: pointer;' class='${clearClass}'>${linkText}</a>`);
        }
        var btn = $this.next();
        function clearField() {
            $this.val('').change();
            triggerBtn();
            if (focusAfterClear) {
                $this.focus();
            }
            if (typeof (callback) === "function") {
                callback();
            }
        }
        function triggerBtn() {
            if (inputHasText()) {
                btn.show();
            }
            else {
                btn.hide();
            }
            applyButtonCss();
        }
        function inputHasText() {
            return $this.val().toString().replace(/^\s+|\s+$/g, '').length > 0;
        }
        function applyButtonCss() {
            const width = $this.outerWidth();
            const height = $this.outerHeight();
            btn.css({
                top: height / 2 - btn.height() / 2,
                left: width - btn.width() - 10
            });
        }
        btn.on('click', clearField);
        $this.on('keyup keydown change focus', triggerBtn);
        $(document).ready(() => {
            triggerBtn();
        });
    }
}
function clearSearch() {
}


/***/ }),

/***/ "./Scripts/tableService/filters/boolFilter.ts":
/*!****************************************************!*\
  !*** ./Scripts/tableService/filters/boolFilter.ts ***!
  \****************************************************/
/*! exports provided: BoolFilterCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolFilterCreator", function() { return BoolFilterCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");


class BoolFilterCreator //implements ITableFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .booleanFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const value = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterValue"])(input$);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(input$);
        if (value != null) {
            const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].boolFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }
        input$.change(e => {
            const val = input$.find(":selected").val();
            if (val) {
                const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].boolFilter(fieldId, val.toString());
                service.upsertFilter(filter);
            }
            else {
                service.removeFilter(fieldId);
            }
            service.filterData();
        });
    }
}


/***/ }),

/***/ "./Scripts/tableService/filters/common.ts":
/*!************************************************!*\
  !*** ./Scripts/tableService/filters/common.ts ***!
  \************************************************/
/*! exports provided: filterValueAttribute, filterFieldIdAttribute, getFilterValue, getFilterFieldId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterValueAttribute", function() { return filterValueAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFieldIdAttribute", function() { return filterFieldIdAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterValue", function() { return getFilterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterFieldId", function() { return getFilterFieldId; });
const filterValueAttribute = 'filter-value';
const filterFieldIdAttribute = 'field-id';
function getFilterValue(input$) {
    return input$.data(filterValueAttribute);
}
function getFilterFieldId(input$) {
    return input$.data(filterFieldIdAttribute);
}


/***/ }),

/***/ "./Scripts/tableService/filters/dateRange.ts":
/*!***************************************************!*\
  !*** ./Scripts/tableService/filters/dateRange.ts ***!
  \***************************************************/
/*! exports provided: DateRangeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeCreator", function() { return DateRangeCreator; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./Scripts/common/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");




class DateRangeCreator //implements IRangeFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .dateRangeFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getFilterFieldId"])(input$);
        const startDateValue = input$.data('filter-start-value');
        const endDateValue = input$.data('filter-end-value');
        let start = null;
        let end = null;
        if (startDateValue && endDateValue) {
            start = moment__WEBPACK_IMPORTED_MODULE_1__(startDateValue, _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"].dateFormat);
            end = moment__WEBPACK_IMPORTED_MODULE_1__(endDateValue, _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"].dateFormat);
            input$.val(startDateValue + ' - ' + endDateValue);
            this.updateFilters(service, fieldId, startDateValue, endDateValue);
        }
        else {
            start = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(29, 'days');
            end = moment__WEBPACK_IMPORTED_MODULE_1__();
        }
        let options = this.createOptions(start, end);
        input$.prop('readonly', true);
        input$.css({ "min-width": "175px" });
        input$.daterangepicker(options);
        input$.on('apply.daterangepicker', (ev, picker) => {
            const startDate = picker.startDate.format(_common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"].dateFormat);
            const endDate = picker.endDate.format(_common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"].dateFormat);
            input$.val(startDate + ' - ' + endDate);
            this.updateFilters(service, fieldId, startDate, endDate);
            service.filterData();
        });
        input$.on('cancel.daterangepicker', (ev, picker) => {
            input$.val('');
            service.removeFilter(fieldId);
            service.filterData();
        });
    }
    static updateFilters(service, fieldId, start, end) {
        service.upsertFilter(_tableServiceCommon__WEBPACK_IMPORTED_MODULE_2__["TableFilter"].startDateFilter(fieldId, start));
        service.upsertFilter(_tableServiceCommon__WEBPACK_IMPORTED_MODULE_2__["TableFilter"].endDateFilter(fieldId, end));
    }
    static createOptions(start, end) {
        const options = {
            startDate: start,
            endDate: end,
            autoUpdateInput: false,
            ranges: {
                'Today': [moment__WEBPACK_IMPORTED_MODULE_1__(), moment__WEBPACK_IMPORTED_MODULE_1__()],
                'Yesterday': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days')],
                'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
                'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_1__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_1__()],
                'This Month': [moment__WEBPACK_IMPORTED_MODULE_1__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_1__().endOf('month')],
                'Last Month': [
                    moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'month').endOf('month')
                ]
            },
            buttonClasses: ['m-btn btn'],
            applyButtonClasses: 'btn-primary',
            cancelButtonClasses: 'btn-secondary',
            locale: {
                format: _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"].dateFormat,
                cancelLabel: 'Clear'
            }
        };
        return options;
    }
}


/***/ }),

/***/ "./Scripts/tableService/filters/enumFilter.ts":
/*!****************************************************!*\
  !*** ./Scripts/tableService/filters/enumFilter.ts ***!
  \****************************************************/
/*! exports provided: EnumFilterCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumFilterCreator", function() { return EnumFilterCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");


class EnumFilterCreator //implements ITableFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .enumFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const value = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterValue"])(input$);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(input$);
        if (value != null) {
            const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].enumFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }
        input$.change(e => {
            const val = input$.find(":selected").val();
            if (val) {
                const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].enumFilter(fieldId, val.toString());
                service.upsertFilter(filter);
            }
            else {
                service.removeFilter(fieldId);
            }
            service.filterData();
        });
    }
}


/***/ }),

/***/ "./Scripts/tableService/filters/index.ts":
/*!***********************************************!*\
  !*** ./Scripts/tableService/filters/index.ts ***!
  \***********************************************/
/*! exports provided: StringFilterCreator, EnumFilterCreator, ValueObjectFilterCreator, NumberFilterCreator, BoolFilterCreator, DateRangeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stringFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringFilter */ "./Scripts/tableService/filters/stringFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFilterCreator", function() { return _stringFilter__WEBPACK_IMPORTED_MODULE_0__["StringFilterCreator"]; });

/* harmony import */ var _enumFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enumFilter */ "./Scripts/tableService/filters/enumFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumFilterCreator", function() { return _enumFilter__WEBPACK_IMPORTED_MODULE_1__["EnumFilterCreator"]; });

/* harmony import */ var _valueObjectFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueObjectFilter */ "./Scripts/tableService/filters/valueObjectFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueObjectFilterCreator", function() { return _valueObjectFilter__WEBPACK_IMPORTED_MODULE_2__["ValueObjectFilterCreator"]; });

/* harmony import */ var _numberFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberFilter */ "./Scripts/tableService/filters/numberFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberFilterCreator", function() { return _numberFilter__WEBPACK_IMPORTED_MODULE_3__["NumberFilterCreator"]; });

/* harmony import */ var _boolFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boolFilter */ "./Scripts/tableService/filters/boolFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolFilterCreator", function() { return _boolFilter__WEBPACK_IMPORTED_MODULE_4__["BoolFilterCreator"]; });

/* harmony import */ var _dateRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateRange */ "./Scripts/tableService/filters/dateRange.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeCreator", function() { return _dateRange__WEBPACK_IMPORTED_MODULE_5__["DateRangeCreator"]; });









/***/ }),

/***/ "./Scripts/tableService/filters/numberFilter.ts":
/*!******************************************************!*\
  !*** ./Scripts/tableService/filters/numberFilter.ts ***!
  \******************************************************/
/*! exports provided: NumberFilterCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFilterCreator", function() { return NumberFilterCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");
/* harmony import */ var _clearSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clearSearch */ "./Scripts/tableService/clearSearch.ts");



class NumberFilterCreator //implements ITableFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .numberFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const value = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterValue"])(input$);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(input$);
        if (value != null) {
            const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].numberFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }
        _clearSearch__WEBPACK_IMPORTED_MODULE_2__["ClearSearch"].register(input, () => {
            service.removeFilter(fieldId);
            service.filterData();
        });
        input$.on('keyup', e => {
            if (e.which === 13) {
                const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].numberFilter(fieldId, input$.val().toString());
                service.upsertFilter(filter);
                service.filterData();
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/tableService/filters/stringFilter.ts":
/*!******************************************************!*\
  !*** ./Scripts/tableService/filters/stringFilter.ts ***!
  \******************************************************/
/*! exports provided: StringFilterCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFilterCreator", function() { return StringFilterCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");
/* harmony import */ var _clearSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clearSearch */ "./Scripts/tableService/clearSearch.ts");



class StringFilterCreator //implements ITableFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .stringFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const value = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterValue"])(input$);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(input$);
        if (value != null) {
            const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].stringFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }
        _clearSearch__WEBPACK_IMPORTED_MODULE_2__["ClearSearch"].register(input, () => {
            service.removeFilter(fieldId);
            service.filterData();
        });
        input$.on('keyup', e => {
            if (e.which === 13) {
                const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].stringFilter(fieldId, input$.val().toString().replace('\\', ''));
                service.upsertFilter(filter);
                service.filterData();
            }
        });
    }
}


/***/ }),

/***/ "./Scripts/tableService/filters/valueObjectFilter.ts":
/*!***********************************************************!*\
  !*** ./Scripts/tableService/filters/valueObjectFilter.ts ***!
  \***********************************************************/
/*! exports provided: ValueObjectFilterCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueObjectFilterCreator", function() { return ValueObjectFilterCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./Scripts/tableService/filters/common.ts");


class ValueObjectFilterCreator //implements ITableFilterCreator
 {
    static registerFilters(service) {
        const inputs$ = $(`#${service.containerName} .valueObjectFilter`);
        for (var i = 0; i < inputs$.length; i++) {
            this.register(inputs$[i], service);
        }
    }
    static register(input, service) {
        const input$ = $(input);
        const value = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterValue"])(input$);
        const fieldId = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(input$);
        if (value != null) {
            const filter = this.getFilter(fieldId, value.toString());
            service.upsertFilter(filter);
            input$.val(value);
        }
        input$.change(e => {
            const val = input$.find(":selected").val();
            if (val) {
                const filter = this.getFilter(fieldId, val.toString());
                service.upsertFilter(filter);
            }
            else {
                service.removeFilter(fieldId);
            }
            service.filterData();
        });
    }
    static getFilter(fieldId, val) {
        if (val.match(/[a-zA-Z]/)) //if id is guid or str
         {
            return new _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"](fieldId, 'string', val.trim(), _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilterOperator"].Equal);
        }
        else {
            return _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].numberFilter(fieldId, val);
        }
    }
}


/***/ }),

/***/ "./Scripts/tableService/rowsSelect/rowsSelect.ts":
/*!*******************************************************!*\
  !*** ./Scripts/tableService/rowsSelect/rowsSelect.ts ***!
  \*******************************************************/
/*! exports provided: CheckBoxContainer, RowsSelectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxContainer", function() { return CheckBoxContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowsSelectManager", function() { return RowsSelectManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


class CheckBoxContainer {
    constructor(checkBox, changeAction) {
        this.checkBox = checkBox;
        this.changeAction = changeAction;
        jquery__WEBPACK_IMPORTED_MODULE_1__(checkBox).change(e => {
            this.changeAction();
        });
    }
    set() {
        this.checkBox.checked = true;
    }
    reset() {
        this.checkBox.checked = false;
    }
    isSelected() {
        return this.checkBox.checked;
    }
    getRowId() {
        return jquery__WEBPACK_IMPORTED_MODULE_1__(this.checkBox).closest('tr').data('id');
    }
}
class RowsSelectManager {
    constructor(containerSelector) {
        this.onSelectedRows = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.containers = [];
        this.doEmit = true;
        let checkBoxes = jquery__WEBPACK_IMPORTED_MODULE_1__(`#${containerSelector} .row-select`);
        for (var i = 0; i < checkBoxes.length; i++) {
            this.containers.push(new CheckBoxContainer(checkBoxes[i], () => this.changeAction()));
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(`#${containerSelector} .tableSelectAll`).on('click', (event) => {
            event.preventDefault();
            this.selectAll();
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(`#${containerSelector} .tableDeselectAll`).on('click', (event) => {
            event.preventDefault();
            this.resetAll();
        });
    }
    selectAll() {
        this.doEmit = false;
        this.containers.forEach(x => x.set());
        this.doEmit = true;
        this.changeAction();
    }
    resetAll() {
        this.doEmit = false;
        this.containers.forEach(x => x.reset());
        this.doEmit = true;
        this.changeAction();
    }
    changeAction() {
        if (this.doEmit) {
            const ids = this.containers.filter(x => x.isSelected()).map(x => x.getRowId());
            this.onSelectedRows.next(ids);
        }
    }
}


/***/ }),

/***/ "./Scripts/tableService/sort/sortCreator.ts":
/*!**************************************************!*\
  !*** ./Scripts/tableService/sort/sortCreator.ts ***!
  \**************************************************/
/*! exports provided: SortCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCreator", function() { return SortCreator; });
/* harmony import */ var _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tableServiceCommon */ "./Scripts/tableService/tableServiceCommon.ts");
/* harmony import */ var _filters_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filters/common */ "./Scripts/tableService/filters/common.ts");



class SortCreator {
    static registerSorts(service) {
        const labels$ = $(`#${service.containerName} .tableSort`);
        for (var i = 0; i < labels$.length; i++) {
            this.registerSort(labels$[i], service);
        }
    }
    static registerSort(label, service) {
        const lable$ = $(label);
        const fieldId = Object(_filters_common__WEBPACK_IMPORTED_MODULE_1__["getFilterFieldId"])(lable$);
        const direction = this.getDirection(lable$);
        const sort = new _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableOrder"](fieldId);
        lable$.css('cursor', 'pointer');
        lable$.wrap(`<div class='noselect' style='cursor: pointer; display: flex'></div>`);
        lable$.after(`<div arrowPalceholder style="margin-left: 5px"></div>`);
        const container$ = lable$.parent();
        const arrowContainer$ = container$.children('[arrowPalceholder]');
        if (direction) {
            const cssClass = direction === _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["OrderDirection"].Asc ? SortCreator.ascClass : SortCreator.descClass;
            arrowContainer$.addClass(cssClass);
            service.upsertSort({ fieldId: fieldId, direction: direction });
        }
        this.register(fieldId, arrowContainer$, service);
        container$.on('click', e => {
            if (arrowContainer$.hasClass(SortCreator.ascClass)) {
                arrowContainer$.removeClass(SortCreator.ascClass);
                arrowContainer$.addClass(SortCreator.descClass);
                sort.direction = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["OrderDirection"].Desc;
            }
            else if (arrowContainer$.hasClass(SortCreator.descClass)) {
                arrowContainer$.removeClass(SortCreator.descClass);
                arrowContainer$.addClass(SortCreator.ascClass);
                sort.direction = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["OrderDirection"].Asc;
            }
            else {
                arrowContainer$.addClass(SortCreator.descClass);
                sort.direction = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["OrderDirection"].Desc;
            }
            service.upsertSort(sort);
            service.filterData();
        });
    }
    static register(fieldId, arrowContainer, service) {
        const resetCallback = () => {
            if (arrowContainer.hasClass(SortCreator.ascClass)) {
                arrowContainer.removeClass(SortCreator.ascClass);
            }
            if (arrowContainer.hasClass(SortCreator.descClass)) {
                arrowContainer.removeClass(SortCreator.descClass);
            }
        };
        const info = {
            fieldId: fieldId,
            callBack: resetCallback
        };
        service.registerSort(info);
    }
    static getDirection(label$) {
        return label$.data("sort-direction");
    }
}
SortCreator.ascClass = 'ascSort';
SortCreator.descClass = 'descSort';


/***/ }),

/***/ "./Scripts/tableService/tableService.ts":
/*!**********************************************!*\
  !*** ./Scripts/tableService/tableService.ts ***!
  \**********************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./Scripts/tableService/filters/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./Scripts/common/index.ts");
/* harmony import */ var _sort_sortCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort/sortCreator */ "./Scripts/tableService/sort/sortCreator.ts");
/* harmony import */ var _rowsSelect_rowsSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rowsSelect/rowsSelect */ "./Scripts/tableService/rowsSelect/rowsSelect.ts");





class TableService extends _common__WEBPACK_IMPORTED_MODULE_2__["SingleToneBase"] {
    constructor(containerName, url, refreshUrl, itemsPerPage) {
        super();
        this.onFilterTable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.filters = [];
        this.sorts = [];
        this.sortsInfo = [];
        this.containerName = containerName;
        this.filterUrl = url;
        this.refreshUrl = refreshUrl;
        this.itemsPerPage = itemsPerPage;
    }
    startListeningToEvents() {
        _filters__WEBPACK_IMPORTED_MODULE_1__["StringFilterCreator"].registerFilters(this);
        _filters__WEBPACK_IMPORTED_MODULE_1__["NumberFilterCreator"].registerFilters(this);
        _filters__WEBPACK_IMPORTED_MODULE_1__["DateRangeCreator"].registerFilters(this);
        _filters__WEBPACK_IMPORTED_MODULE_1__["ValueObjectFilterCreator"].registerFilters(this);
        _filters__WEBPACK_IMPORTED_MODULE_1__["BoolFilterCreator"].registerFilters(this);
        _filters__WEBPACK_IMPORTED_MODULE_1__["EnumFilterCreator"].registerFilters(this);
        _sort_sortCreator__WEBPACK_IMPORTED_MODULE_3__["SortCreator"].registerSorts(this);
        this.rowsSelectManager = new _rowsSelect_rowsSelect__WEBPACK_IMPORTED_MODULE_4__["RowsSelectManager"](this.containerName);
    }
    refresh() {
        _common__WEBPACK_IMPORTED_MODULE_2__["Xhr"].requestHtml("GET", this.refreshUrl, {}, response => this.processResponse(response, null));
    }
    upsertFilter(filter) {
        var index = this.filterIndex(filter.fieldId, filter.group);
        if (index < 0 && filter.value) {
            this.filters.push(filter);
        }
        else if (index >= 0) {
            if (filter.value) {
                this.filters.splice(index, 1, filter);
            }
            else {
                this.filters.splice(index);
            }
        }
    }
    removeFilter(field) {
        this.filters = this.filters.filter(x => x.fieldId != field && x.group == null);
    }
    registerSort(info) {
        this.sortsInfo.push(info);
    }
    upsertSort(sort) {
        this.sorts.length = 0;
        if (sort.direction) {
            this.sorts.push(sort);
        }
        this.sortsInfo.filter(x => x.fieldId !== sort.fieldId).forEach(x => x.callBack());
    }
    filterData() {
        const request = this.getTableRequest();
        _common__WEBPACK_IMPORTED_MODULE_2__["Xhr"].requestHtml("POST", this.filterUrl, request, response => this.processResponse(response, request));
    }
    getTableRequest() {
        const filters = this.filters.filter(x => x.value);
        const orders = this.sorts.filter(x => x.direction);
        return {
            filters: filters,
            orders: orders,
            itemsPerPage: this.itemsPerPage
        };
    }
    processResponse(response, request = null) {
        if (request) {
            this.onFilterTable.next(request);
        }
        this.resetService();
        $(`#${this.containerName}`).html(response);
    }
    resetService() {
        this.filters = [];
        this.sorts = [];
        this.sortsInfo = [];
        //this.onFilterTable.complete();
    }
    filterIndex(field, groupName = null) {
        const existingFilter = this.filters.find(x => x.fieldId === field && (groupName == null || x.group === groupName));
        if (!existingFilter) {
            return -1;
        }
        return this.filters.indexOf(existingFilter);
    }
}


/***/ }),

/***/ "./Scripts/tableService/tableServiceCommon.ts":
/*!****************************************************!*\
  !*** ./Scripts/tableService/tableServiceCommon.ts ***!
  \****************************************************/
/*! exports provided: TableFilterOperator, TableFilter, OrderDirection, TableOrder, TableRequest, SortInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterOperator", function() { return TableFilterOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter", function() { return TableFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDirection", function() { return OrderDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOrder", function() { return TableOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRequest", function() { return TableRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortInfo", function() { return SortInfo; });
var TableFilterOperator;
(function (TableFilterOperator) {
    TableFilterOperator[TableFilterOperator["Equal"] = 0] = "Equal";
    TableFilterOperator[TableFilterOperator["NotEqual"] = 1] = "NotEqual";
    TableFilterOperator[TableFilterOperator["StartsWith"] = 2] = "StartsWith";
    TableFilterOperator[TableFilterOperator["Contains"] = 3] = "Contains";
    TableFilterOperator[TableFilterOperator["DoesNotContain"] = 4] = "DoesNotContain";
    TableFilterOperator[TableFilterOperator["EndsWith"] = 5] = "EndsWith";
    TableFilterOperator[TableFilterOperator["GreaterThanOrEqual"] = 6] = "GreaterThanOrEqual";
    TableFilterOperator[TableFilterOperator["GreaterThan"] = 7] = "GreaterThan";
    TableFilterOperator[TableFilterOperator["LessThanOrEqual"] = 8] = "LessThanOrEqual";
    TableFilterOperator[TableFilterOperator["LessThan"] = 9] = "LessThan";
})(TableFilterOperator || (TableFilterOperator = {}));
class TableFilter {
    constructor(fieldId, type, value, operator = TableFilterOperator.Equal) {
        this.encrypted = false;
        this.operator = TableFilterOperator.Equal;
        this.fieldId = fieldId;
        this.type = type;
        this.value = value;
        this.operator = operator;
    }
    toJSON() {
        return {
            group: this.group,
            encrypted: this.encrypted,
            fieldId: this.fieldId,
            type: this.type,
            value: this.value,
            operator: this.operator
        };
    }
    static stringFilter(filedId, val) {
        return new TableFilter(filedId, 'string', val.trim(), TableFilterOperator.Contains);
    }
    static boolFilter(filedId, val) {
        return new TableFilter(filedId, 'boolean', val);
    }
    static enumFilter(filedId, val) {
        return new TableFilter(filedId, 'enum', val);
    }
    static numberFilter(filedId, val) {
        return new TableFilter(filedId, 'number', val);
    }
    static dateFilter(filedId, val, operator = TableFilterOperator.Equal) {
        return new TableFilter(filedId, 'date', val, operator);
    }
    static startDateFilter(filedId, val) {
        const filter = TableFilter.dateFilter(filedId, val, TableFilterOperator.GreaterThanOrEqual);
        filter.group = createStartDateFilterGroup(filedId);
        return filter;
    }
    static endDateFilter(filedId, val) {
        const filter = TableFilter.dateFilter(filedId, val, TableFilterOperator.LessThanOrEqual);
        filter.group = createEndDateFilterGroup(filedId);
        return filter;
    }
}
var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["Asc"] = 1] = "Asc";
    OrderDirection[OrderDirection["Desc"] = 2] = "Desc";
})(OrderDirection || (OrderDirection = {}));
class TableOrder {
    constructor(fieldId) {
        this.fieldId = fieldId;
    }
}
class TableRequest {
    constructor() {
        this.filters = [];
        this.orders = [];
    }
}
class SortInfo {
}
const dateRangeFilterStartDateName = "startFilter";
const dateRangeFilterEndDateName = "endFilter";
function createStartDateFilterGroup(fieldId) {
    return `${fieldId}_${dateRangeFilterStartDateName}`;
}
function createEndDateFilterGroup(fieldId) {
    return `${fieldId}_${dateRangeFilterEndDateName}`;
}


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0VkaXROb3RlU2VydmljZS9lZGl0Tm90ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRW5kQmFsYW5jZVNlcnZpY2UvRW5kQmFsYW5jZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRm9ybVNjcmlwdHMvZm9ybVNjcmlwdHMudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvUG9zdEV4cG9ydFNlcnZpY2UvUG9zdEV4cG9ydFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvY29tbW9uL2luZGV4LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9wb3BvdmVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zaW5nbGVUb25lLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zdHJpbmdDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvY29tbW9uL3hoci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcm9wZG93blNlcnZpY2UvZHJvcGRvd25TZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VDb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvY2xlYXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvYm9vbEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvZGF0ZVJhbmdlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2VudW1GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvbnVtYmVyRmlsdGVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL3N0cmluZ0ZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy92YWx1ZU9iamVjdEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2Uvcm93c1NlbGVjdC9yb3dzU2VsZWN0LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9zb3J0L3NvcnRDcmVhdG9yLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZUNvbW1vbi50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBzY3JpcHRzXCJdID0gd2luZG93W1wid2VicGFja0pzb25wc2NyaXB0c1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL1NjcmlwdHMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vVGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBYaHIgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdE5vdGVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxJZCA9ICdlZGl0LW5vdGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBub3RlSW5wdXROYW1lID0gJ25vdGUnO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWRpdE5vdGVMaW5rOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlU2VydmljZTpUYWJsZVNlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3BvdmVyOiBQb3BvdmVyO1xyXG5cclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlZGl0Tm90ZUxpbms6IHN0cmluZywgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lZGl0Tm90ZUxpbmsgPSBlZGl0Tm90ZUxpbms7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UgPSB0YWJsZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcm1MaXN0ZW5pbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBuZXcgTW9kYWxTZXJ2aWNlKHRoaXMubW9kYWxJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGAjJHt0aGlzLnRhYmxlU2VydmljZS5jb250YWluZXJOYW1lfSAuY3VzdG9tLXBvcG92ZXIubm90ZWApO1xyXG4gICAgICAgIHRoaXMucG9wb3ZlciA9IG5ldyBQb3BvdmVyKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcG92ZXIuc3RhcnRMaXN0ZW5pbmcoKCR0YXJnZXQ6IEpRdWVyeTxFdmVudFRhcmdldD4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSBQb3BvdmVyLnRlbXBsYXRlRWRpdEljb24oKTtcclxuXHJcbiAgICAgICAgICAgICR0ZW1wbGF0ZS5vbignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCg8YW55PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9ICR0YXJnZXQucGFyZW50KCkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpbmQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSAkZmluZC5kYXRhKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJG5vdGVJbnB1dCA9ICQoYCMke3RoaXMubW9kYWxJZH0gdGV4dGFyZWFbbmFtZT0nJHt0aGlzLm5vdGVJbnB1dE5hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICRub3RlSW5wdXQudmFsKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9wb3Zlci5zaG93VGVtcGxhdGUoJHRhcmdldCwgJHRlbXBsYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1MaXN0ZW5pbmcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICQoYCMke3RoaXMubW9kYWxJZH0gZm9ybWApLm9uKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKDxhbnk+ZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSAkdGFyZ2V0LnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBmb3JtVmFsdWVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHRoaXMubm90ZUlucHV0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm90ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkOiB0aGlzLnRyYW5zYWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZTogbm90ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBYaHIucmVxdWVzdEpzb24oJ1BPU1QnLCB0aGlzLmVkaXROb3RlTGluaywgcmVxdWVzdCwgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZVBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5kQmFsYW5jZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmVUb1RhYmxlKHNlcnZpY2U6IFRhYmxlU2VydmljZSwgdXJsOiBzdHJpbmcsIGNvbnRhaW5lcklkOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc2VydmljZS5vbkZpbHRlclRhYmxlLnN1YnNjcmliZShyZXF1ZXN0ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKGAjJHtjb250YWluZXJJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoeyAnb3BhY2l0eSc6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaHRtbChyZXNwb25zZSkuYW5pbWF0ZSh7ICdvcGFjaXR5JzogMSB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kLm5vQ29uZmxpY3QoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2NyaXB0c1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbGVjdG9yOiBzdHJpbmcpe31cclxuXHJcbiAgICBwdWJsaWMgcnVuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoYCMke3RoaXMuc2VsZWN0b3J9YCkuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlcigkZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyKCRmb3JtOkpRdWVyeSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlckZvcklucHV0cygkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWRhdGV0aW1lXScpKTtcclxuICAgICAgICB0aGlzLnNldERhdGVQaWNrZXJGb3JJbnB1dHMoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyRm9ySW5wdXRzKCRpbnB1dHM6IEpRdWVyeSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkaW5wdXRzWzBdKTtcclxuXHJcbiAgICAgICAgJGlucHV0cy5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImJvdHRvbSBsZWZ0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgICAgbGVmdEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1sZWZ0XCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICByaWdodEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1yaWdodFwiPjwvaT4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9UYWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcbmNsYXNzIEV4cG9ydFJlcXVlc3Rcclxue1xyXG4gICAgcHVibGljIGlkczogKG51bWJlcnxzdHJpbmcpW10gPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3RFeHBvcnRTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUG9zdEV4cG9ydFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZShzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHVybDogc3RyaW5nKTogUG9zdEV4cG9ydFNlcnZpY2VcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBvc3RFeHBvcnRTZXJ2aWNlKHNlcnZpY2UsIHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5ICRlZGl0QnV0dG9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmw6IHN0cmluZztcclxuICAgIFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZGl0QnV0dG9uQ2xhc3M6IHN0cmluZyA9IFwiZXhwb3J0UG9zdFwiO1xyXG5cclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBpZHM6IChudW1iZXJ8c3RyaW5nKVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogVGFibGVTZXJ2aWNlLCB1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbiA9ICQoYCMke3RoaXMudGFibGVTZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC4ke3RoaXMuZWRpdEJ1dHRvbkNsYXNzfWApO1xyXG4gICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc2VydmljZS5yb3dzU2VsZWN0TWFuYWdlci5vblNlbGVjdGVkUm93cy5zdWJzY3JpYmUoaWRzID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlkcyA9IGlkcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkcyAmJiB0aGlzLmlkcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGVkaXRCdXR0b24uY2xpY2soZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kb0V4cG9ydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9FeHBvcnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghKHRoaXMuaWRzICYmIHRoaXMuaWRzLmxlbmd0aCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kUmVxdWVzdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAvLyBYaHIucmVxdWVzdEpzb24oJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICB0aGlzLnVybCxcclxuICAgICAgICAvLyAgICAgcmVxdWVzdCxcclxuICAgICAgICAvLyAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pOyAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVxdWVzdCwgc3RhdHVzLCBlcnJvcil7Y29uc29sZS5sb2coZXJyb3IpfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYSBmaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciBkaXNwb3NpdGlvbiA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1EaXNwb3NpdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2l0aW9uICYmIGRpc3Bvc2l0aW9uLmluZGV4T2YoJ2F0dGFjaG1lbnQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWVSZWdleCA9IC9maWxlbmFtZVteOz1cXG5dKj0oKFsnXCJdKS4qP1xcMnxbXjtcXG5dKikvO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gZmlsZW5hbWVSZWdleC5leGVjKGRpc3Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPSBudWxsICYmIG1hdGNoZXNbMV0pIGZpbGVuYW1lID0gbWF0Y2hlc1sxXS5yZXBsYWNlKC9bJ1wiXS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHsgdHlwZTogdHlwZSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElFIHdvcmthcm91bmQgZm9yIFwiSFRNTDcwMDc6IE9uZSBvciBtb3JlIGJsb2IgVVJMcyB3ZXJlIHJldm9rZWQgYnkgY2xvc2luZyB0aGUgYmxvYiBmb3Igd2hpY2ggdGhleSB3ZXJlIGNyZWF0ZWQuIFRoZXNlIFVSTHMgd2lsbCBubyBsb25nZXIgcmVzb2x2ZSBhcyB0aGUgZGF0YSBiYWNraW5nIHRoZSBVUkwgaGFzIGJlZW4gZnJlZWQuXCJcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVVJMID0gd2luZG93LlVSTCB8fCAod2luZG93IGFzIGFueSkud2Via2l0VVJMO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb3dubG9hZFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBIVE1MNSBhW2Rvd25sb2FkXSBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBmaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYWZhcmkgZG9lc24ndCBzdXBwb3J0IHRoaXMgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYS5kb3dubG9hZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRvd25sb2FkVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gZG93bmxvYWRVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZG93bmxvYWRVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBVUkwucmV2b2tlT2JqZWN0VVJMKGRvd25sb2FkVXJsKTsgfSwgMTAwKTsgLy8gY2xlYW51cFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdCgpOiBFeHBvcnRSZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWRzOiB0aGlzLmlkc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi94aHJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nQ29uc3RhbnRzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZVRvbmVcIjtcclxuLy9leHBvcnQgKiBmcm9tIFwiLi9wZGZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wb3ZlclwiOyIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJcclxue1xyXG4gICAgcHJpdmF0ZSAkdGFyZ2V0czogSlF1ZXJ5PEV2ZW50VGFyZ2V0PltdID0gW107XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZVByZXZpZXcoZmlsZURvd25sb2FkTGluazogc3RyaW5nKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgcHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tc21cIiBocmVmPVwiJHtmaWxlRG93bmxvYWRMaW5rfVwiPkRvd25sb2FkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0ZW1wbGF0ZUVkaXRJY29uKCk6IEpRdWVyeTxIVE1MRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJChgPGRpdiBjbGFzcz1cImNvbnRlbnQgZWRpdC1ub3RlXCI+PGkgY2xhc3M9XCJmbGF0aWNvbi1lZGl0LTFcIj48L2k+PC9kaXY+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKGNhbGxiYWNrPzogKCR0YXJnZXQ6IEpRdWVyeTxFdmVudFRhcmdldD4pID0+IHZvaWQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub24oJ21vdXNlZW50ZXInLCAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoPGFueT5ldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJHRhcmdldHMucHVzaCgkdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub24oJ21vdXNlbGVhdmUnLCAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRlbXBsYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUZW1wbGF0ZSgkdGFyZ2V0OiBKUXVlcnk8RXZlbnRUYXJnZXQ+LCB0ZW1wbGF0ZTogc3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgIC5hcHBlbmQodGVtcGxhdGUpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignOmxhc3QnKVxyXG4gICAgICAgICAgICAuaGlkZSgpXHJcbiAgICAgICAgICAgIC5mYWRlSW4oMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVGVtcGxhdGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuJHRhcmdldHMuZm9yRWFjaCgkdGFyZ2V0ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCc6bGFzdCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbih0aGlzOiBhbnkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiR0YXJnZXRzID0gW107XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlc0NvbnRhaW5lclxyXG57XHJcbiAgICBwcml2YXRlIGluc3RhbmNlczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgaW5zdGFuY2UobmFtZTogc3RyaW5nKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdCA9IHRoaXMuaW5zdGFuY2VzW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWluc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW5zdGFuY2Ugd2l0aCBuYW1lICcke25hbWV9JyB3YXMgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdFNlcnZpY2UobmFtZTpzdHJpbmcsIGZ1bmM6KCkgPT4gYW55KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3QgPSB0aGlzLmluc3RhbmNlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbbmFtZV0gPSBmdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlVG9uZUJhc2Vcclxue1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZXNDb250YWluZXI6IEluc3RhbmNlc0NvbnRhaW5lciA9IG5ldyBJbnN0YW5jZXNDb250YWluZXIoKTtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0U2VydmljZShuYW1lOiBzdHJpbmcsIGZ1bmM6ICgpID0+IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0NvbnRhaW5lci5pbml0U2VydmljZShuYW1lLCBmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKG5hbWU6IHN0cmluZyk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc0NvbnRhaW5lci5pbnN0YW5jZShuYW1lKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3RyaW5nQ29uc3RhbnRcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBkYXRlRm9ybWF0ID0gXCJERC9NTS9ZWVlZXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBkYXRlUmFuZ2VGaWx0ZXJTdGFydEdyb3VwTmFtZSA9IFwic3RhcnRGaWx0ZXJcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGF0ZVJhbmdlRmlsdGVyRW5kR3JvdXBOYW1lID0gXCJlbmRGaWx0ZXJcIjtcclxufSIsIlxyXG5leHBvcnQgY2xhc3MgWGhyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdEh0bWwodHlwZTogXCJQT1NUXCIgfCBcIkdFVFwiIHwgXCJQVVRcIiwgdXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSwgcmVzcG9uc2VBY3Rpb246IChyZXNwb25zZTogYW55KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdCh0eXBlLCB1cmwsICdIVE1MJywgcmVxdWVzdCwgcmVzcG9uc2VBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdEpzb24odHlwZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcmVxdWVzdDogYW55LCByZXNwb25zZUFjdGlvbjogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KHR5cGUsIHVybCwgJ2pzb24nLCByZXF1ZXN0LCByZXNwb25zZUFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0KHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGFUeXBlOiAnSFRNTCcgfCAnanNvbicsIHJlcXVlc3Q6IGFueSwgcmVzcG9uc2VBY3Rpb246IChyZXNwb25zZTogYW55KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VBY3Rpb24ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogKHhociwgc3RhdHVzLCBlcnJvcikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vVGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBYaHIgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wRmlsZVVwbG9hZGVyXHJcbntcclxuICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwb3N0VXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zdFVybDogc3RyaW5nLCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnBvc3RVcmwgPSBwb3N0VXJsO1xyXG5cclxuICAgICAgICAkKFwiaHRtbFwiKS5vbihcImRyYWdvdmVyXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkcmFnZ2luZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcImh0bWxcIikub24oXCJkcmFnbGVhdmVcIixcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2RyYWdnaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiaHRtbFwiKS5vbihcImRyb3BcIixcclxuICAgICAgICAgICAgZXZlbnQgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHt0aGlzLnNlcnZpY2UuY29udGFpbmVyTmFtZX0gdHJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3Rlcihyb3c6IEhUTUxFbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJvdyQgPSAkKHJvdyk7XHJcblxyXG4gICAgICAgIHJvdyQub24oJ2RyYWdvdmVyJywgZmFsc2UpXHJcbiAgICAgICAgICAgIC5vbignZHJvcCcsXHJcbiAgICAgICAgICAgICAgICBldmVudCA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkVmFsID0gcm93JC5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZFZhbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSAoZXZlbnQub3JpZ2luYWxFdmVudCBhcyBhbnkpLmRhdGFUcmFuc2Zlci5maWxlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYW5zYWN0aW9uSWQnLCBpZFZhbCk7IC8vdG9kbyBoYXJkY29kZWQgdmFsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhKGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9wcml2YXRlIHNlbmREYXRhKGZvcm1EYXRhOiBGb3JtRGF0YSk6IHZvaWRcclxuICAgIC8ve1xyXG4gICAgLy8gICAgWGhyLnJlcXVlc3QoXCJQT1NUXCIsIHRoaXMucG9zdFVybCwgXCJqc29uXCIsIGZvcm1EYXRhLCAoKSA9PiB0aGlzLnNlcnZpY2UucmVmcmVzaCgpKTtcclxuICAgIC8vfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZERhdGEoZm9ybURhdGE6IEZvcm1EYXRhKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wb3N0VXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEgYXMgYW55LFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBYaHIgfSBmcm9tICcuLi9jb21tb24veGhyJztcclxuXHJcblxyXG5jbGFzcyBEcm9wZG93bkxpc3RJdGVtXHJcbntcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlzdGVuKG1haW5Ecm9wZG93blNlbGVjdG9yOiBzdHJpbmcsIGNoaWxkRHJvcGRvd25TZWxlY3Rvcjogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1haW5Ecm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoYCMke21haW5Ecm9wZG93blNlbGVjdG9yfWApO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKGAjJHtjaGlsZERyb3Bkb3duU2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUobWFpbkRyb3Bkb3duKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKG1haW5Ecm9wZG93biwgY2hpbGREcm9wZG93bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluRHJvcGRvd24ub24oXCJjaGFuZ2VcIiwgKGV2ZW50OiBhbnkpID0+IHRoaXMucmVuZGVyKG1haW5Ecm9wZG93biwgY2hpbGREcm9wZG93bikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKG1haW5Ecm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgY2hpbGREcm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtYWluU2VsZWN0ZWRJZDogbnVtYmVyID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKG1haW5Ecm9wZG93bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgWGhyLnJlcXVlc3RKc29uKFwiUE9TVFwiLCBgJHt0aGlzLnVybH0vJHttYWluU2VsZWN0ZWRJZH1gLCB7fSwgKGl0ZW1zOiBEcm9wZG93bkxpc3RJdGVtW10pID0+IHRoaXMucG9wdWxhdGVEcm9wZG93bihjaGlsZERyb3Bkb3duLCBpdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9wdWxhdGVEcm9wZG93bihkcm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgaXRlbXM6IERyb3Bkb3duTGlzdEl0ZW1bXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpZDogbnVtYmVyID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKGRyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uZW1wdHkoKTtcclxuXHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kKHRoaXMuY3JlYXRlRW1wdHlPcHRpb24oKSk7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKHg6IERyb3Bkb3duTGlzdEl0ZW0pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB4LmlkID09IGlkOyAvLyB5ZXMgSSBuZWVkID09ISFcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmFwcGVuZCh0aGlzLmNyZWF0ZU9wdGlvbih4Lm5hbWUsIHguaWQsIHNlbGVjdGVkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKGRyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duLnZhbCgpIGFzIG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUVtcHR5T3B0aW9uKCk6IEpRdWVyeTxIVE1MRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBvcHRpb246IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIikuYXR0cihcInZhbHVlXCIsIFwiXCIpLnRleHQoXCItLVNlbGVjdCBWYWx1ZS0tXCIpOyAvL3RvZG8gdXNlIHZhbHVlIGZyb20gc3RyaW5nIGNvbnN0YW50c1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlT3B0aW9uKHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEpRdWVyeTxIVE1MRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBvcHRpb246IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIikuYXR0cihcInZhbHVlXCIsIHZhbHVlKS50ZXh0KHRleHQpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb24uYXR0cihcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vY29tbW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2RyYWdBbmREcm9wRmlsZVVwbG9hZGVyL2RyYWdBbmREcm9wRmlsZVVwbG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Ryb3Bkb3duU2VydmljZS9kcm9wZG93blNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRW5kQmFsYW5jZVNlcnZpY2UvRW5kQmFsYW5jZVNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWFueVRvTWFueVJlbGF0aW9uU2VydmljZS9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGFsU2VydmljZS9tb2RhbFNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0Tm90ZVNlcnZpY2UvZWRpdE5vdGVTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RFeHBvcnRTZXJ2aWNlL1Bvc3RFeHBvcnRTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm1TY3JpcHRzL2Zvcm1TY3JpcHRzXCI7IiwiaW1wb3J0IHtcclxuICAgIE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3QsXHJcbiAgICBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbCxcclxuICAgIE1hbnlUb01hbnlTYXZlQWN0aW9uXHJcbn0gZnJvbSAnLi9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgWGhyIH0gZnJvbSAnLi4vY29tbW9uL3hocic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVJlbGF0aW9uU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGxlZnRFbnRpdHlJZDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdXJsOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0RW50aXR5SWQ6IG51bWJlciwgY29udGFpbmVyTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxlZnRFbnRpdHlJZCA9IGxlZnRFbnRpdHlJZDtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck5hbWUgPSBjb250YWluZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGx5Q2hlY2tlZDogc3RyaW5nIFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1RvQWRkOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1RvRGVsZXRlOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hlY2tib3goc2VsZWN0b3I6IHN0cmluZywgaWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gJChgIyR7c2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja0JveC5pcyhcIjpjaGVja2VkXCIpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsbHlDaGVja2VkLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tCb3guY2hhbmdlKChlKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQm94LmlzKFwiOmNoZWNrZWRcIikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsbHlDaGVja2VkLmZpbmQoeCA9PiB4ID09PSBzZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVkSXRlbSA9IHRoaXMuaXRlbXNUb0RlbGV0ZS5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZWxldGVkSXRlbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXNUb0RlbGV0ZS5pbmRleE9mKGRlbGV0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zVG9EZWxldGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxseUNoZWNrZWQuZmluZCh4ID0+IHggPT09IHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbEl0ZW0oaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkSXRlbSA9IHRoaXMuaXRlbXNUb0FkZC5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZGRlZEl0ZW0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zVG9BZGQuaW5kZXhPZihhZGRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNUb0FkZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgWGhyLnJlcXVlc3RIdG1sKFwiUE9TVFwiLCB0aGlzLnVybCwgcmVxdWVzdCwgcmVzcG9uc2UgPT4gJChgIyR7dGhpcy5jb250YWluZXJOYW1lfWApLmh0bWwocmVzcG9uc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IE1hbnlUb01hbnlTYXZlVmlld01vZGVsKGlkLCBNYW55VG9NYW55U2F2ZUFjdGlvbi5BZGQpO1xyXG4gICAgICAgIHRoaXMuaXRlbXNUb0FkZC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsSXRlbShpZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTWFueVRvTWFueVNhdmVWaWV3TW9kZWwoaWQsIE1hbnlUb01hbnlTYXZlQWN0aW9uLkRlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvRGVsZXRlLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0KCkgOiBNYW55VG9NYW55UmVsYXRpb25SZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBNYW55VG9NYW55UmVsYXRpb25SZXF1ZXN0KHRoaXMubGVmdEVudGl0eUlkKTtcclxuICAgICAgICByZXF1ZXN0Lml0ZW1zID0gcmVxdWVzdC5pdGVtcy5jb25jYXQodGhpcy5pdGVtc1RvQWRkKTtcclxuICAgICAgICByZXF1ZXN0Lml0ZW1zID0gcmVxdWVzdC5pdGVtcy5jb25jYXQodGhpcy5pdGVtc1RvRGVsZXRlKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3Rcclxue1xyXG4gICAgcHVibGljIGxlZnRFbnRpdHlJZDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczogTWFueVRvTWFueVNhdmVWaWV3TW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnRFbnRpdHlJZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGVmdEVudGl0eUlkID0gbGVmdEVudGl0eUlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVNhdmVWaWV3TW9kZWxcclxue1xyXG4gICAgcHVibGljIGFjdGlvbjogTWFueVRvTWFueVNhdmVBY3Rpb247XHJcblxyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYWN0aW9uOiBNYW55VG9NYW55U2F2ZUFjdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hbnlUb01hbnlTYXZlQWN0aW9uXHJcbntcclxuICAgIEFkZCA9IDEsXHJcbiAgICBEZWxldGUgPSAyXHJcbn0iLCJpbXBvcnQgeyBYaHIgfSBmcm9tICcuLi9jb21tb24veGhyJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSU1vZGFsT3B0aW9uc1xyXG57XHJcbiAgICBiYWNrZHJvcDogYm9vbGVhbjtcclxuICAgIGtleWJvYXJkOiBib29sZWFuO1xyXG4gICAgZm9jdXM6IGJvb2xlYW47XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgbW9kYWw6IEpRdWVyeTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSlF1ZXJ5O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogSU1vZGFsT3B0aW9ucyA9IHtcclxuICAgICAgICBiYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbElkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9ICQoYCMke21vZGFsSWR9YCk7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5tb2RhbC5maW5kKCcubW9kYWwtYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93UGFnZSh1cmw6IHN0cmluZyA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG93UGFnZUludGVybmFsKHVybCwgXCJUcnVlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVBhZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICh0aGlzLm1vZGFsIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJCdXR0b24oYnV0dG9uSWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gJChgIyR7YnV0dG9uSWR9YCk7XHJcbiAgICAgICAgdmFyIHVybCA9IGJ1dHRvbi5hdHRyKCd1cmwnKTtcclxuICAgICAgICB2YXIgaXNBY3Rpb25saW5rID0gYnV0dG9uLmF0dHIoJ2lzQWN0aW9ubGluaycpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlSW50ZXJuYWwodXJsLCBpc0FjdGlvbmxpbmspO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dQYWdlSW50ZXJuYWwodXJsOiBzdHJpbmcsIGlzQWN0aW9ubGluazogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc0FjdGlvbmxpbmsgPT09ICdUcnVlJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQodXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQ29udGVudCh1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDbGVhclNlYXJjaFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGVhckNsYXNzOiBzdHJpbmcgPSAnY2xlYXJfaW5wdXQnO1xyXG4gICAgICAgIGNvbnN0IGZvY3VzQWZ0ZXJDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbGlua1RleHQ6IHN0cmluZyA9ICcmdGltZXM7JztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2Q2xhc3MgPSBjbGVhckNsYXNzICsgJ19kaXYnO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoISR0aGlzLnBhcmVudCgpLmhhc0NsYXNzKGRpdkNsYXNzKSkge1xyXG4gICAgICAgICAgICAkdGhpcy53cmFwKGA8ZGl2IHN0eWxlPSdwb3NpdGlvbjogcmVsYXRpdmU7JyBjbGFzcz0nJHtkaXZDbGFzc30nPiR7JHRoaXMuaHRtbCgpfTwvZGl2PmApO1xyXG5cclxuICAgICAgICAgICAgJHRoaXMuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICBgPGEgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgY3Vyc29yOiBwb2ludGVyOycgY2xhc3M9JyR7Y2xlYXJDbGFzc30nPiR7bGlua1RleHR9PC9hPmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ0biA9ICR0aGlzLm5leHQoKTsgXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgICAgICR0aGlzLnZhbCgnJykuY2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyQnRuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9jdXNBZnRlckNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChjYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdHJpZ2dlckJ0bigpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0SGFzVGV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHBseUJ1dHRvbkNzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5wdXRIYXNUZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHRoaXMudmFsKCkudG9TdHJpbmcoKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykubGVuZ3RoID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5QnV0dG9uQ3NzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9ICR0aGlzLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gJHRoaXMub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGJ0bi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBoZWlnaHQgLyAyIC0gYnRuLmhlaWdodCgpIC8gMixcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHdpZHRoIC0gYnRuLndpZHRoKCkgLSAxMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5vbignY2xpY2snLCBjbGVhckZpZWxkKTtcclxuICAgICAgICAkdGhpcy5vbigna2V5dXAga2V5ZG93biBjaGFuZ2UgZm9jdXMnLCB0cmlnZ2VyQnRuKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCBhcyBhbnkpLnJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgdHJpZ2dlckJ0bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2goKVxyXG57XHJcbiAgICBcclxufSIsImltcG9ydCB7IElUYWJsZUZpbHRlckNyZWF0b3IsIFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuYm9vbGVhbkZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5ib29sRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCQuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0JC5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuYm9vbEZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyVmFsdWVBdHRyaWJ1dGUgPSAnZmlsdGVyLXZhbHVlJztcclxuZXhwb3J0IGNvbnN0IGZpbHRlckZpZWxkSWRBdHRyaWJ1dGUgPSAnZmllbGQtaWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlclZhbHVlKGlucHV0JDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6YW55XHJcbntcclxuICAgIHJldHVybiBpbnB1dCQuZGF0YShmaWx0ZXJWYWx1ZUF0dHJpYnV0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6YW55XHJcbntcclxuICAgIHJldHVybiBpbnB1dCQuZGF0YShmaWx0ZXJGaWVsZElkQXR0cmlidXRlKTtcclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgSVJhbmdlRmlsdGVyQ3JlYXRvciB9IGZyb20gJy4vZmlsdGVyc0NvbW1vbic7XHJcbmltcG9ydCB7IFN0cmluZ0NvbnN0YW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnZGF0ZXJhbmdlcGlja2VyJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSAnLi4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUNyZWF0b3IgLy9pbXBsZW1lbnRzIElSYW5nZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5kYXRlUmFuZ2VGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBzdGFydERhdGVWYWx1ZTogc3RyaW5nID0gaW5wdXQkLmRhdGEoJ2ZpbHRlci1zdGFydC12YWx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZTogc3RyaW5nID0gaW5wdXQkLmRhdGEoJ2ZpbHRlci1lbmQtdmFsdWUnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0OiBtb21lbnQuTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVuZDogbW9tZW50Lk1vbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnREYXRlVmFsdWUgJiYgZW5kRGF0ZVZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoc3RhcnREYXRlVmFsdWUsIFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICBlbmQgPSBtb21lbnQoZW5kRGF0ZVZhbHVlLCBTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0JC52YWwoc3RhcnREYXRlVmFsdWUgKyAnIC0gJyArIGVuZERhdGVWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoc2VydmljZSwgZmllbGRJZCwgc3RhcnREYXRlVmFsdWUsIGVuZERhdGVWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyk7XHJcbiAgICAgICAgICAgIGVuZCA9IG1vbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZU9wdGlvbnMoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgIGlucHV0JC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xyXG4gICAgICAgIGlucHV0JC5jc3MoeyBcIm1pbi13aWR0aFwiOiBcIjE3NXB4XCIgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5kYXRlcmFuZ2VwaWNrZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGV2LCBwaWNrZXIpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHBpY2tlci5zdGFydERhdGUuZm9ybWF0KFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBpY2tlci5lbmREYXRlLmZvcm1hdChTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCQudmFsKHN0YXJ0RGF0ZSArICcgLSAnICsgZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHNlcnZpY2UsIGZpZWxkSWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgIChldiwgcGlja2VyKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlLCBmaWVsZElkOiBzdHJpbmcsIHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKFRhYmxlRmlsdGVyLnN0YXJ0RGF0ZUZpbHRlcihmaWVsZElkLCBzdGFydCkpO1xyXG4gICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKFRhYmxlRmlsdGVyLmVuZERhdGVGaWx0ZXIoZmllbGRJZCwgZW5kKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlT3B0aW9ucyhzdGFydD86IG1vbWVudC5Nb21lbnQsIGVuZD86IG1vbWVudC5Nb21lbnQpOiBPcHRpb25zXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydCxcclxuICAgICAgICAgICAgZW5kRGF0ZTogZW5kLFxyXG4gICAgICAgICAgICBhdXRvVXBkYXRlSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByYW5nZXM6IHtcclxuICAgICAgICAgICAgICAgICdUb2RheSc6IFttb21lbnQoKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgJ1llc3RlcmRheSc6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFtcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ2xhc3NlczogWydtLWJ0biBidG4nXSxcclxuICAgICAgICAgICAgYXBwbHlCdXR0b25DbGFzc2VzOiAnYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzc2VzOiAnYnRuLXNlY29uZGFyeScsXHJcbiAgICAgICAgICAgIGxvY2FsZToge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6ICdDbGVhcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVRhYmxlRmlsdGVyQ3JlYXRvciwgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnVtRmlsdGVyQ3JlYXRvciAvL2ltcGxlbWVudHMgSVRhYmxlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLmVudW1GaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZW51bUZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQkLmNoYW5nZShlID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpbnB1dCQuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLmVudW1GaWx0ZXIoZmllbGRJZCwgdmFsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL3N0cmluZ0ZpbHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtRmlsdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmFsdWVPYmplY3RGaWx0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL251bWJlckZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYm9vbEZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZVJhbmdlJzsiLCJpbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDbGVhclNlYXJjaCB9IGZyb20gXCIuLi9jbGVhclNlYXJjaFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAubnVtYmVyRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2xlYXJTZWFyY2gucmVnaXN0ZXIoaW5wdXQsICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbigna2V5dXAnLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5udW1iZXJGaWx0ZXIoZmllbGRJZCwgaW5wdXQkLnZhbCgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2xlYXJTZWFyY2ggfSBmcm9tIFwiLi4vY2xlYXJTZWFyY2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuc3RyaW5nRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLnN0cmluZ0ZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2xlYXJTZWFyY2gucmVnaXN0ZXIoaW5wdXQsICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbigna2V5dXAnLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5zdHJpbmdGaWx0ZXIoZmllbGRJZCwgaW5wdXQkLnZhbCgpLnRvU3RyaW5nKCkucmVwbGFjZSgnXFxcXCcsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVGFibGVGaWx0ZXJDcmVhdG9yLCBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyLCBUYWJsZUZpbHRlck9wZXJhdG9yIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZU9iamVjdEZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC52YWx1ZU9iamVjdEZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcihmaWVsZElkLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCQuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0JC5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRGaWx0ZXIoZmllbGRJZCwgdmFsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRGaWx0ZXIoZmllbGRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbC5tYXRjaCgvW2EtekEtWl0vKSkgLy9pZiBpZCBpcyBndWlkIG9yIHN0clxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICBuZXcgVGFibGVGaWx0ZXIoZmllbGRJZCwgJ3N0cmluZycsIHZhbC50cmltKCksIFRhYmxlRmlsdGVyT3BlcmF0b3IuRXF1YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVGFibGVGaWx0ZXIubnVtYmVyRmlsdGVyKGZpZWxkSWQsIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbnRhaW5lclxyXG57XHJcbiAgICBwcml2YXRlIGNoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQWN0aW9uOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50LCBjaGFuZ2VBY3Rpb246ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbiA9IGNoYW5nZUFjdGlvbjtcclxuXHJcbiAgICAgICAgJChjaGVja0JveCkuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NlbGVjdGVkKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0JveC5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb3dJZCgpOiBudW1iZXIgfCBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzLmNoZWNrQm94KS5jbG9zZXN0KCd0cicpLmRhdGEoJ2lkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3dzU2VsZWN0TWFuYWdlclxyXG57XHJcbiAgICBwdWJsaWMgb25TZWxlY3RlZFJvd3M6IFN1YmplY3Q8KG51bWJlcnxzdHJpbmcpW10+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcnM6IENoZWNrQm94Q29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGRvRW1pdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyU2VsZWN0b3I6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgY2hlY2tCb3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJChgIyR7Y29udGFpbmVyU2VsZWN0b3J9IC5yb3ctc2VsZWN0YCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tCb3hlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKG5ldyBDaGVja0JveENvbnRhaW5lcihjaGVja0JveGVzW2ldLCAoKSA9PiB0aGlzLmNoYW5nZUFjdGlvbigpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGAjJHtjb250YWluZXJTZWxlY3Rvcn0gLnRhYmxlU2VsZWN0QWxsYCkub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGAjJHtjb250YWluZXJTZWxlY3Rvcn0gLnRhYmxlRGVzZWxlY3RBbGxgKS5vbignY2xpY2snLFxyXG4gICAgICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdEFsbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0VtaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuZm9yRWFjaCh4ID0+IHguc2V0KCkpO1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRBbGwoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzLmZvckVhY2goeCA9PiB4LnJlc2V0KCkpO1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQWN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kb0VtaXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpZHM6IChudW1iZXJ8c3RyaW5nKVtdID0gdGhpcy5jb250YWluZXJzLmZpbHRlcih4ID0+IHguaXNTZWxlY3RlZCgpKS5tYXAoeCA9PiB4LmdldFJvd0lkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRSb3dzLm5leHQoaWRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gJy4uL3RhYmxlU2VydmljZUNvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gJy4vc29ydENvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlT3JkZXIgfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBTb3J0SW5mbyB9IGZyb20gJy4uL3RhYmxlU2VydmljZUNvbW1vbic7XHJcbmltcG9ydCB7IGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi4vZmlsdGVycy9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0Q3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzY0NsYXNzOiBzdHJpbmcgPSAnYXNjU29ydCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2NDbGFzczogc3RyaW5nID0gJ2Rlc2NTb3J0JztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyU29ydHMoc2VydmljZTogVGFibGVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGxhYmVscyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC50YWJsZVNvcnRgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYWJlbHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclNvcnQobGFiZWxzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyU29ydChsYWJlbDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBsYWJsZSQgPSAkKGxhYmVsKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChsYWJsZSQpO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKGxhYmxlJCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvcnQgPSBuZXcgVGFibGVPcmRlcihmaWVsZElkKTtcclxuICAgICAgICBcclxuICAgICAgICBsYWJsZSQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgIGxhYmxlJC53cmFwKGA8ZGl2IGNsYXNzPSdub3NlbGVjdCcgc3R5bGU9J2N1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleCc+PC9kaXY+YCk7XHJcbiAgICAgICAgbGFibGUkLmFmdGVyKGA8ZGl2IGFycm93UGFsY2Vob2xkZXIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4XCI+PC9kaXY+YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciQgPSBsYWJsZSQucGFyZW50KCk7XHJcbiAgICAgICAgY29uc3QgYXJyb3dDb250YWluZXIkID0gY29udGFpbmVyJC5jaGlsZHJlbignW2Fycm93UGFsY2Vob2xkZXJdJyk7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzczogc3RyaW5nID0gZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2MgPyBTb3J0Q3JlYXRvci5hc2NDbGFzcyA6IFNvcnRDcmVhdG9yLmRlc2NDbGFzcztcclxuICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKGNzc0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0U29ydCh7IGZpZWxkSWQ6IGZpZWxkSWQsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihmaWVsZElkLCBhcnJvd0NvbnRhaW5lciQsIHNlcnZpY2UpO1xyXG5cclxuICAgICAgICBjb250YWluZXIkLm9uKCdjbGljaycsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycm93Q29udGFpbmVyJC5oYXNDbGFzcyhTb3J0Q3JlYXRvci5hc2NDbGFzcykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLnJlbW92ZUNsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyb3dDb250YWluZXIkLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLnJlbW92ZUNsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQuZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uRGVzYztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydFNvcnQoc29ydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGZpZWxkSWQ6IHN0cmluZywgYXJyb3dDb250YWluZXI6IEpRdWVyeSwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFycm93Q29udGFpbmVyLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIuaGFzQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IFNvcnRJbmZvID0ge1xyXG4gICAgICAgICAgICBmaWVsZElkOiBmaWVsZElkLFxyXG4gICAgICAgICAgICBjYWxsQmFjazogcmVzZXRDYWxsYmFja1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJTb3J0KGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldERpcmVjdGlvbihsYWJlbCQ6SlF1ZXJ5KTogT3JkZXJEaXJlY3Rpb24gfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsJC5kYXRhKFwic29ydC1kaXJlY3Rpb25cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgICBUYWJsZUZpbHRlcixcclxuICAgIFRhYmxlT3JkZXIsXHJcbiAgICBUYWJsZVJlcXVlc3QsXHJcbiAgICBTb3J0SW5mb1xyXG59IGZyb20gJy4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHtcclxuICAgIFN0cmluZ0ZpbHRlckNyZWF0b3IsXHJcbiAgICBFbnVtRmlsdGVyQ3JlYXRvcixcclxuICAgIFZhbHVlT2JqZWN0RmlsdGVyQ3JlYXRvcixcclxuICAgIE51bWJlckZpbHRlckNyZWF0b3IsXHJcbiAgICBCb29sRmlsdGVyQ3JlYXRvcixcclxuICAgIERhdGVSYW5nZUNyZWF0b3JcclxufSBmcm9tICcuL2ZpbHRlcnMnO1xyXG5pbXBvcnQgeyBYaHIsIFNpbmdsZVRvbmVCYXNlIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHsgU29ydENyZWF0b3IgfSBmcm9tICcuL3NvcnQvc29ydENyZWF0b3InO1xyXG5pbXBvcnQgeyBSb3dzU2VsZWN0TWFuYWdlciB9IGZyb20gJy4vcm93c1NlbGVjdC9yb3dzU2VsZWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTaW5nbGVUb25lQmFzZVxyXG57XHJcbiAgICBwdWJsaWMgb25GaWx0ZXJUYWJsZTogU3ViamVjdDxUYWJsZVJlcXVlc3Q+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBwdWJsaWMgY29udGFpbmVyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGZpbHRlcnM6IFRhYmxlRmlsdGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHNvcnRzOiBUYWJsZU9yZGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHNvcnRzSW5mbzogU29ydEluZm9bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyByb3dzU2VsZWN0TWFuYWdlcjogUm93c1NlbGVjdE1hbmFnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcmVmcmVzaFVybDogc3RyaW5nLCBpdGVtc1BlclBhZ2U6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXJsID0gcmVmcmVzaFVybDtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdUb0V2ZW50cygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgU3RyaW5nRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgTnVtYmVyRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgRGF0ZVJhbmdlQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgVmFsdWVPYmplY3RGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBCb29sRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgRW51bUZpbHRlckNyZWF0b3IucmVnaXN0ZXJGaWx0ZXJzKHRoaXMpO1xyXG5cclxuICAgICAgICBTb3J0Q3JlYXRvci5yZWdpc3RlclNvcnRzKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJvd3NTZWxlY3RNYW5hZ2VyID0gbmV3IFJvd3NTZWxlY3RNYW5hZ2VyKHRoaXMuY29udGFpbmVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2goKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIkdFVFwiLCB0aGlzLnJlZnJlc2hVcmwsIHt9LCByZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgbnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cHNlcnRGaWx0ZXIoZmlsdGVyOiBUYWJsZUZpbHRlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbHRlckluZGV4KGZpbHRlci5maWVsZElkLCBmaWx0ZXIuZ3JvdXApO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCAwICYmIGZpbHRlci52YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci52YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpbmRleCwgMSwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZmllbGQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnMuZmlsdGVyKHggPT4geC5maWVsZElkICE9IGZpZWxkICYmIHguZ3JvdXAgPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyU29ydChpbmZvOiBTb3J0SW5mbylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvcnRzSW5mby5wdXNoKGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cHNlcnRTb3J0KHNvcnQ6IFRhYmxlT3JkZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zb3J0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBpZiAoc29ydC5kaXJlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRzLnB1c2goc29ydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvcnRzSW5mby5maWx0ZXIoeCA9PiB4LmZpZWxkSWQgIT09IHNvcnQuZmllbGRJZCkuZm9yRWFjaCh4ID0+IHguY2FsbEJhY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbHRlckRhdGEoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmdldFRhYmxlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJQT1NUXCIsIHRoaXMuZmlsdGVyVXJsLCByZXF1ZXN0LCByZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgcmVxdWVzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGVSZXF1ZXN0KCk6IFRhYmxlUmVxdWVzdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMuZmlsdGVyKHggPT4geC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzID0gdGhpcy5zb3J0cy5maWx0ZXIoeCA9PiB4LmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXHJcbiAgICAgICAgICAgIG9yZGVyczogb3JkZXJzLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55LCByZXF1ZXN0OiBUYWJsZVJlcXVlc3QgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5vbkZpbHRlclRhYmxlLm5leHQocmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0U2VydmljZSgpO1xyXG5cclxuICAgICAgICAkKGAjJHt0aGlzLmNvbnRhaW5lck5hbWV9YCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFNlcnZpY2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc29ydHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvcnRzSW5mbyA9IFtdO1xyXG4gICAgICAgIC8vdGhpcy5vbkZpbHRlclRhYmxlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJJbmRleChmaWVsZDogc3RyaW5nLCBncm91cE5hbWU6IHN0cmluZyA9IG51bGwpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0ZpbHRlciA9XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5maW5kKHggPT4geC5maWVsZElkID09PSBmaWVsZCAmJiAoZ3JvdXBOYW1lID09IG51bGwgfHwgeC5ncm91cCA9PT0gZ3JvdXBOYW1lKSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RpbmdGaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmluZGV4T2YoZXhpc3RpbmdGaWx0ZXIpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgdHlwZSBUYWJsZUNvbHVtblR5cGUgPSAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2VudW0nIHwgJ2N1cnJlbmN5JztcclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlRmlsdGVyT3BlcmF0b3Jcclxue1xyXG4gICAgRXF1YWwgPSAwLFxyXG4gICAgTm90RXF1YWwgPSAxLFxyXG4gICAgU3RhcnRzV2l0aCA9IDIsXHJcbiAgICBDb250YWlucyA9IDMsXHJcbiAgICBEb2VzTm90Q29udGFpbiA9IDQsXHJcbiAgICBFbmRzV2l0aCA9IDUsXHJcbiAgICBHcmVhdGVyVGhhbk9yRXF1YWwgPSA2LFxyXG4gICAgR3JlYXRlclRoYW4gPSA3LFxyXG4gICAgTGVzc1RoYW5PckVxdWFsID0gOCxcclxuICAgIExlc3NUaGFuID0gOVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJcclxue1xyXG4gICAgcHVibGljIGdyb3VwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZW5jcnlwdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmllbGRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IFRhYmxlQ29sdW1uVHlwZTtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLFxyXG4gICAgICAgIHZhbHVlPzogYW55LFxyXG4gICAgICAgIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxyXG4gICAgICAgICAgICBmaWVsZElkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLm9wZXJhdG9yXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ0ZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdzdHJpbmcnLCB2YWwudHJpbSgpLCBUYWJsZUZpbHRlck9wZXJhdG9yLkNvbnRhaW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvb2xGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUZpbHRlcihmaWxlZElkLCAnYm9vbGVhbicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbnVtRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ2VudW0nLCB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ251bWJlcicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcsIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbCk6XHJcbiAgICAgICAgVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdkYXRlJywgdmFsLCBvcGVyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydERhdGVGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZGF0ZUZpbHRlcihmaWxlZElkLCB2YWwsIFRhYmxlRmlsdGVyT3BlcmF0b3IuR3JlYXRlclRoYW5PckVxdWFsKTtcclxuICAgICAgICBmaWx0ZXIuZ3JvdXAgPSBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5kRGF0ZUZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5kYXRlRmlsdGVyKGZpbGVkSWQsIHZhbCwgVGFibGVGaWx0ZXJPcGVyYXRvci5MZXNzVGhhbk9yRXF1YWwpO1xyXG4gICAgICAgIGZpbHRlci5ncm91cCA9IGNyZWF0ZUVuZERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvblxyXG57XHJcbiAgICBBc2MgPSAxLFxyXG4gICAgRGVzYyA9IDJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlT3JkZXJcclxue1xyXG4gICAgcHVibGljIGZpZWxkSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXJlY3Rpb24/OiBPcmRlckRpcmVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maWVsZElkID0gZmllbGRJZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgZmlsdGVyczogVGFibGVGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvcmRlcnM6IFRhYmxlT3JkZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRJbmZvXHJcbntcclxuICAgIHB1YmxpYyBmaWVsZElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2FsbEJhY2s6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWU6IHN0cmluZyA9IFwic3RhcnRGaWx0ZXJcIjtcclxuY29uc3QgZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWU6IHN0cmluZyA9IFwiZW5kRmlsdGVyXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWVsZElkOiBzdHJpbmcpXHJcbntcclxuICAgIHJldHVybiBgJHtmaWVsZElkfV8ke2RhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW5kRGF0ZUZpbHRlckdyb3VwKGZpZWxkSWQ6IHN0cmluZylcclxue1xyXG4gICAgcmV0dXJuIGAke2ZpZWxkSWR9XyR7ZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWV9YDtcclxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=