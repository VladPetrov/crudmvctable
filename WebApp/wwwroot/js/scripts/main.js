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
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".main.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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

/***/ "./Scripts/EditProjectAndCategoryService/editProjectAndCategoryService.ts":
/*!********************************************************************************!*\
  !*** ./Scripts/EditProjectAndCategoryService/editProjectAndCategoryService.ts ***!
  \********************************************************************************/
/*! exports provided: EditProjectAndCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectAndCategoryService", function() { return EditProjectAndCategoryService; });
/* harmony import */ var _modalService_modalService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalService/modalService */ "./Scripts/modalService/modalService.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./Scripts/common/index.ts");


class EditRequest {
    constructor() {
        this.transactionIds = [];
    }
}
class EditProjectAndCategoryService {
    constructor(service, url) {
        this.editViewId = "projectAndCategoryEditView";
        this.editButtonClass = "editProjectAndCategory";
        this.ids = [];
        this.tableService = service;
        this.$editButton = $(`#${this.tableService.containerName} .${this.editButtonClass}`);
        this.$editButton.prop("disabled", true);
        this.modalService = new _modalService_modalService__WEBPACK_IMPORTED_MODULE_0__["ModalService"](this.editViewId);
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
            this.doEdit();
        });
        this.formListening();
    }
    static getInstance(service, url) {
        if (this.instance) {
            this.instance.subscription.unsubscribe();
        }
        this.instance = new EditProjectAndCategoryService(service, url);
        return this.instance;
    }
    doEdit() {
        if (!(this.ids && this.ids.length)) {
            return;
        }
        this.modalService.showPage();
    }
    formListening() {
        $(`#${this.editViewId} form`).on('submit', (event) => {
            event.preventDefault();
            const request = this.createRequest($(event.currentTarget));
            _common__WEBPACK_IMPORTED_MODULE_1__["Xhr"].requestJson('POST', this.url, request, response => {
                this.modalService.closePage();
                this.tableService.refresh();
            });
        });
    }
    createRequest($form) {
        const formValues = $form.serializeArray();
        return {
            transactionIds: this.ids,
            projectId: this.getFormVal(formValues, "ProjectId"),
            categoryId: this.getFormVal(formValues, "CategoryId")
        };
    }
    getFormVal(formValues, name) {
        const val = formValues.find(x => x.name === name).value;
        if (!val) {
            return '0';
        }
        return val;
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

/***/ "./Scripts/FilesPreviewService/filesPreviewService.ts":
/*!************************************************************!*\
  !*** ./Scripts/FilesPreviewService/filesPreviewService.ts ***!
  \************************************************************/
/*! exports provided: FilesPreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPreviewService", function() { return FilesPreviewService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./Scripts/common/index.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


class FilesPreviewService {
    constructor(tableContainerId, fileLink, documentLink) {
        this.tableContainerId = tableContainerId;
        this.fileLink = fileLink;
        this.documentLink = documentLink;
    }
    startListening() {
        const container = jquery__WEBPACK_IMPORTED_MODULE_1__(`#${this.tableContainerId} .custom-popover.preview`);
        this.popover = new _common__WEBPACK_IMPORTED_MODULE_0__["Popover"](container);
        this.popover.startListening(($target) => {
            const fileId = $target.data('file-id');
            const fileDownloadLink = this.fileLink + `/${fileId}`;
            this.popover.showTemplate($target, _common__WEBPACK_IMPORTED_MODULE_0__["Popover"].templatePreview(fileDownloadLink));
            const documentLink = this.documentLink + `/${fileId}`;
            _common__WEBPACK_IMPORTED_MODULE_0__["Pdf"].convertPdfToImgBase64(documentLink).then(imgBase64 => {
                if (imgBase64 !== null) {
                    $target.find('.img').html(`<img/>`);
                    $target.find('img').attr('src', imgBase64);
                }
                else {
                    console.log('null');
                }
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

/***/ "./Scripts/common/index.ts":
/*!*********************************!*\
  !*** ./Scripts/common/index.ts ***!
  \*********************************/
/*! exports provided: Xhr, StringConstant, InstancesContainer, SingleToneBase, Pdf, Popover */
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

/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf */ "./Scripts/common/pdf.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return _pdf__WEBPACK_IMPORTED_MODULE_3__["Pdf"]; });

/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover */ "./Scripts/common/popover.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover__WEBPACK_IMPORTED_MODULE_4__["Popover"]; });








/***/ }),

/***/ "./Scripts/common/pdf.ts":
/*!*******************************!*\
  !*** ./Scripts/common/pdf.ts ***!
  \*******************************/
/*! exports provided: Pdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return Pdf; });
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);

const PDFJS = pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__;
PDFJS.disableWorker = true;
// TODO: url
PDFJS['GlobalWorkerOptions'].workerSrc = '/lib/pdf-js/pdf.worker.min.js';
class Pdf {
    static convertPdfToImgBase64(documentLink) {
        return new Promise(resolve => {
            PDFJS.getDocument(documentLink).then(pdf => {
                pdf.getPage(1).then((page) => {
                    const scale = 1.5;
                    const viewport = page.getViewport(scale);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    const renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext).then(() => {
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.fillStyle = '#fff';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        const imgSrc = canvas.toDataURL();
                        canvas.remove();
                        resolve(imgSrc);
                    });
                });
            }, (error) => {
                if (error && 'status' in error && error.status === 400) {
                    resolve(null);
                }
            });
        });
    }
}


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
/*! exports provided: DragAndDropFileUploader, DropdownService, EndBalanceService, ManyToManyRelationService, ModalService, TableService, FilesPreviewService, EditNoteService, EditProjectAndCategoryService, FormScripts, Xhr, StringConstant, InstancesContainer, SingleToneBase, Pdf, Popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./Scripts/common/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhr", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Xhr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringConstant", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstancesContainer", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["InstancesContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleToneBase", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SingleToneBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Pdf"]; });

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

/* harmony import */ var _FilesPreviewService_filesPreviewService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilesPreviewService/filesPreviewService */ "./Scripts/FilesPreviewService/filesPreviewService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesPreviewService", function() { return _FilesPreviewService_filesPreviewService__WEBPACK_IMPORTED_MODULE_7__["FilesPreviewService"]; });

/* harmony import */ var _EditNoteService_editNoteService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditNoteService/editNoteService */ "./Scripts/EditNoteService/editNoteService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditNoteService", function() { return _EditNoteService_editNoteService__WEBPACK_IMPORTED_MODULE_8__["EditNoteService"]; });

/* harmony import */ var _EditProjectAndCategoryService_editProjectAndCategoryService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditProjectAndCategoryService/editProjectAndCategoryService */ "./Scripts/EditProjectAndCategoryService/editProjectAndCategoryService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditProjectAndCategoryService", function() { return _EditProjectAndCategoryService_editProjectAndCategoryService__WEBPACK_IMPORTED_MODULE_9__["EditProjectAndCategoryService"]; });

/* harmony import */ var _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormScripts/formScripts */ "./Scripts/FormScripts/formScripts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormScripts", function() { return _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_10__["FormScripts"]; });














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
            console.log(input);
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
        input$.clearSearch(() => {
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
            const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].numberFilter(fieldId, value);
            service.upsertFilter(filter);
            input$.val(value);
        }
        input$.change(e => {
            const val = input$.find(":selected").val();
            if (val) {
                const filter = _tableServiceCommon__WEBPACK_IMPORTED_MODULE_0__["TableFilter"].numberFilter(fieldId, val.toString());
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
        //this.filters = [];
        //this.sorts = [];
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

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0VkaXROb3RlU2VydmljZS9lZGl0Tm90ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2UvZWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRW5kQmFsYW5jZVNlcnZpY2UvRW5kQmFsYW5jZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRmlsZXNQcmV2aWV3U2VydmljZS9maWxlc1ByZXZpZXdTZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0Zvcm1TY3JpcHRzL2Zvcm1TY3JpcHRzLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9jb21tb24vcGRmLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9wb3BvdmVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zaW5nbGVUb25lLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zdHJpbmdDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvY29tbW9uL3hoci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcm9wZG93blNlcnZpY2UvZHJvcGRvd25TZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VDb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvY2xlYXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvYm9vbEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvZGF0ZVJhbmdlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2VudW1GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvbnVtYmVyRmlsdGVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL3N0cmluZ0ZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy92YWx1ZU9iamVjdEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2Uvcm93c1NlbGVjdC9yb3dzU2VsZWN0LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9zb3J0L3NvcnRDcmVhdG9yLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZUNvbW1vbi50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL3NjcmlwdHMvemxpYiAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vc2NyaXB0cy9mcyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vc2NyaXB0cy9odHRwIChpZ25vcmVkKSIsIndlYnBhY2s6Ly9zY3JpcHRzL2h0dHBzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQzlRQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5tYWluLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBzY3JpcHRzXCJdID0gd2luZG93W1wid2VicGFja0pzb25wc2NyaXB0c1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL1NjcmlwdHMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vVGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBYaHIgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdE5vdGVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxJZCA9ICdlZGl0LW5vdGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBub3RlSW5wdXROYW1lID0gJ25vdGUnO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWRpdE5vdGVMaW5rOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlU2VydmljZTpUYWJsZVNlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3BvdmVyOiBQb3BvdmVyO1xyXG5cclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlZGl0Tm90ZUxpbms6IHN0cmluZywgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lZGl0Tm90ZUxpbmsgPSBlZGl0Tm90ZUxpbms7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UgPSB0YWJsZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcm1MaXN0ZW5pbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBuZXcgTW9kYWxTZXJ2aWNlKHRoaXMubW9kYWxJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGAjJHt0aGlzLnRhYmxlU2VydmljZS5jb250YWluZXJOYW1lfSAuY3VzdG9tLXBvcG92ZXIubm90ZWApO1xyXG4gICAgICAgIHRoaXMucG9wb3ZlciA9IG5ldyBQb3BvdmVyKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcG92ZXIuc3RhcnRMaXN0ZW5pbmcoKCR0YXJnZXQ6IEpRdWVyeTxFdmVudFRhcmdldD4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSBQb3BvdmVyLnRlbXBsYXRlRWRpdEljb24oKTtcclxuXHJcbiAgICAgICAgICAgICR0ZW1wbGF0ZS5vbignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCg8YW55PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9ICR0YXJnZXQucGFyZW50KCkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpbmQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSAkZmluZC5kYXRhKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJG5vdGVJbnB1dCA9ICQoYCMke3RoaXMubW9kYWxJZH0gdGV4dGFyZWFbbmFtZT0nJHt0aGlzLm5vdGVJbnB1dE5hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICRub3RlSW5wdXQudmFsKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9wb3Zlci5zaG93VGVtcGxhdGUoJHRhcmdldCwgJHRlbXBsYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1MaXN0ZW5pbmcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICQoYCMke3RoaXMubW9kYWxJZH0gZm9ybWApLm9uKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKDxhbnk+ZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSAkdGFyZ2V0LnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBmb3JtVmFsdWVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHRoaXMubm90ZUlucHV0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm90ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbklkOiB0aGlzLnRyYW5zYWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZTogbm90ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBYaHIucmVxdWVzdEpzb24oJ1BPU1QnLCB0aGlzLmVkaXROb3RlTGluaywgcmVxdWVzdCwgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZVBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9UYWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gXCIuLi9tb2RhbFNlcnZpY2UvbW9kYWxTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcbmNsYXNzIEVkaXRSZXF1ZXN0XHJcbntcclxuICAgIHB1YmxpYyB0cmFuc2FjdGlvbklkczogbnVtYmVyW10gPSBbXTtcclxuICAgIHB1YmxpYyBwcm9qZWN0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjYXRlZ29yeUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvamVjdEFuZENhdGVnb3J5U2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHVybDogc3RyaW5nKTogRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2VcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVkaXRQcm9qZWN0QW5kQ2F0ZWdvcnlTZXJ2aWNlKHNlcnZpY2UsIHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgJGVkaXRCdXR0b246IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlU2VydmljZTogVGFibGVTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZGl0Vmlld0lkOiBzdHJpbmcgPSBcInByb2plY3RBbmRDYXRlZ29yeUVkaXRWaWV3XCI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZGl0QnV0dG9uQ2xhc3M6IHN0cmluZyA9IFwiZWRpdFByb2plY3RBbmRDYXRlZ29yeVwiO1xyXG5cclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBpZHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogVGFibGVTZXJ2aWNlLCB1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbiA9ICQoYCMke3RoaXMudGFibGVTZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC4ke3RoaXMuZWRpdEJ1dHRvbkNsYXNzfWApO1xyXG4gICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gbmV3IE1vZGFsU2VydmljZSh0aGlzLmVkaXRWaWV3SWQpO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHNlcnZpY2Uucm93c1NlbGVjdE1hbmFnZXIub25TZWxlY3RlZFJvd3Muc3Vic2NyaWJlKGlkcyA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pZHMgPSBpZHM7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pZHMgJiYgdGhpcy5pZHMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlZGl0QnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlZGl0QnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRlZGl0QnV0dG9uLmNsaWNrKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9FZGl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUxpc3RlbmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9FZGl0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoISh0aGlzLmlkcyAmJiB0aGlzLmlkcy5sZW5ndGgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1BhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1MaXN0ZW5pbmcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICQoYCMke3RoaXMuZWRpdFZpZXdJZH0gZm9ybWApLm9uKCdzdWJtaXQnLFxyXG4gICAgICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmNyZWF0ZVJlcXVlc3QoJCg8YW55PmV2ZW50LmN1cnJlbnRUYXJnZXQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBYaHIucmVxdWVzdEpzb24oJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdCgkZm9ybTogSlF1ZXJ5KTogRWRpdFJlcXVlc3RcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZHM6IHRoaXMuaWRzLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHRoaXMuZ2V0Rm9ybVZhbChmb3JtVmFsdWVzLCBcIlByb2plY3RJZFwiKSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5nZXRGb3JtVmFsKGZvcm1WYWx1ZXMsIFwiQ2F0ZWdvcnlJZFwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb3JtVmFsKGZvcm1WYWx1ZXM6IEpRdWVyeS5OYW1lVmFsdWVQYWlyW10sIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGZvcm1WYWx1ZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gbmFtZSkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBYaHIgfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZEJhbGFuY2VTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlVG9UYWJsZShzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHVybDogc3RyaW5nLCBjb250YWluZXJJZDogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHNlcnZpY2Uub25GaWx0ZXJUYWJsZS5zdWJzY3JpYmUocmVxdWVzdCA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgWGhyLnJlcXVlc3RIdG1sKFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gJChgIyR7Y29udGFpbmVySWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHsgJ29wYWNpdHknOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmh0bWwocmVzcG9uc2UpLmFuaW1hdGUoeyAnb3BhY2l0eSc6IDEgfSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBkZiwgUG9wb3ZlciB9IGZyb20gJy4uL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVzUHJldmlld1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBwb3BvdmVyOiBQb3BvdmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGFibGVDb250YWluZXJJZDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZUxpbms6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50TGluazogc3RyaW5nXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKGAjJHt0aGlzLnRhYmxlQ29udGFpbmVySWR9IC5jdXN0b20tcG9wb3Zlci5wcmV2aWV3YCk7XHJcbiAgICAgICAgdGhpcy5wb3BvdmVyID0gbmV3IFBvcG92ZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3BvdmVyLnN0YXJ0TGlzdGVuaW5nKCgkdGFyZ2V0OiBKUXVlcnk8RXZlbnRUYXJnZXQ+KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZUlkID0gJHRhcmdldC5kYXRhKCdmaWxlLWlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVEb3dubG9hZExpbmsgPSB0aGlzLmZpbGVMaW5rICsgYC8ke2ZpbGVJZH1gO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3BvdmVyLnNob3dUZW1wbGF0ZSgkdGFyZ2V0LCBQb3BvdmVyLnRlbXBsYXRlUHJldmlldyhmaWxlRG93bmxvYWRMaW5rKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudExpbmsgPSB0aGlzLmRvY3VtZW50TGluayArIGAvJHtmaWxlSWR9YDtcclxuXHJcbiAgICAgICAgICAgIFBkZi5jb252ZXJ0UGRmVG9JbWdCYXNlNjQoZG9jdW1lbnRMaW5rKS50aGVuKGltZ0Jhc2U2NCA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nQmFzZTY0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuZmluZCgnLmltZycpLmh0bWwoYDxpbWcvPmApO1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuZmluZCgnaW1nJykuYXR0cignc3JjJywgaW1nQmFzZTY0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJC5ub0NvbmZsaWN0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVNjcmlwdHNcclxue1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWxlY3Rvcjogc3RyaW5nKXt9XHJcblxyXG4gICAgcHVibGljIHJ1bigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKGAjJHt0aGlzLnNlbGVjdG9yfWApLmNsb3Nlc3QoXCJmb3JtXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGVQaWNrZXIoJGZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGF0ZVBpY2tlcigkZm9ybTpKUXVlcnkpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldERhdGVQaWNrZXJGb3JJbnB1dHMoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1kYXRldGltZV0nKSk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRlUGlja2VyRm9ySW5wdXRzKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGF0ZVBpY2tlckZvcklucHV0cygkaW5wdXRzOiBKUXVlcnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGlucHV0c1swXSk7XHJcblxyXG4gICAgICAgICRpbnB1dHMuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIHRvZGF5SGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJib3R0b20gbGVmdFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIGxlZnRBcnJvdzogJzxpIGNsYXNzPVwibGEgbGEtYW5nbGUtbGVmdFwiPjwvaT4nLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRBcnJvdzogJzxpIGNsYXNzPVwibGEgbGEtYW5nbGUtcmlnaHRcIj48L2k+J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi94aHJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nQ29uc3RhbnRzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpbmdsZVRvbmVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGRmXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcG92ZXJcIjsiLCJpbXBvcnQgKiBhcyBwZGZqc2xpYiBmcm9tICdwZGZqcy1kaXN0JztcclxuaW1wb3J0IHsgUERGSlNTdGF0aWMgfSBmcm9tICdwZGZqcy1kaXN0JztcclxuY29uc3QgUERGSlMgPSAoPGFueT5wZGZqc2xpYikgYXMgUERGSlNTdGF0aWM7XHJcblxyXG5QREZKUy5kaXNhYmxlV29ya2VyID0gdHJ1ZTtcclxuLy8gVE9ETzogdXJsXHJcblBERkpTWydHbG9iYWxXb3JrZXJPcHRpb25zJ10ud29ya2VyU3JjID0gJy9saWIvcGRmLWpzL3BkZi53b3JrZXIubWluLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQZGZcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0UGRmVG9JbWdCYXNlNjQoZG9jdW1lbnRMaW5rOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBERkpTLmdldERvY3VtZW50KGRvY3VtZW50TGluaykudGhlbihwZGYgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGRmLmdldFBhZ2UoMSkudGhlbigocGFnZSkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNDb250ZXh0OiBjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0OiB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UucmVuZGVyKHJlbmRlckNvbnRleHQpLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdTcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmICdzdGF0dXMnIGluIGVycm9yICYmIGVycm9yLnN0YXR1cyA9PT0gNDAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlclxyXG57XHJcbiAgICBwcml2YXRlICR0YXJnZXRzOiBKUXVlcnk8RXZlbnRUYXJnZXQ+W10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRlbXBsYXRlUHJldmlldyhmaWxlRG93bmxvYWRMaW5rOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBwcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbVwiIGhyZWY9XCIke2ZpbGVEb3dubG9hZExpbmt9XCI+RG93bmxvYWQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRlbXBsYXRlRWRpdEljb24oKTogSlF1ZXJ5PEhUTUxFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAkKGA8ZGl2IGNsYXNzPVwiY29udGVudCBlZGl0LW5vdGVcIj48aSBjbGFzcz1cImZsYXRpY29uLWVkaXQtMVwiPjwvaT48L2Rpdj5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge31cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoY2FsbGJhY2s/OiAoJHRhcmdldDogSlF1ZXJ5PEV2ZW50VGFyZ2V0PikgPT4gdm9pZCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbignbW91c2VlbnRlcicsIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCg8YW55PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0cy5wdXNoKCR0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygkdGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbignbW91c2VsZWF2ZScsICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVGVtcGxhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RlbXBsYXRlKCR0YXJnZXQ6IEpRdWVyeTxFdmVudFRhcmdldD4sIHRlbXBsYXRlOiBzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgLmFwcGVuZCh0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgLmNoaWxkcmVuKCc6bGFzdCcpXHJcbiAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgLmZhZGVJbigyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VUZW1wbGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy4kdGFyZ2V0cy5mb3JFYWNoKCR0YXJnZXQgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oJzpsYXN0JykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKHRoaXM6IGFueSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHRhcmdldHMgPSBbXTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VzQ29udGFpbmVyXHJcbntcclxuICAgIHByaXZhdGUgaW5zdGFuY2VzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBpbnN0YW5jZShuYW1lOiBzdHJpbmcpOiBhbnlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0ID0gdGhpcy5pbnN0YW5jZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghaW5zdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnN0YW5jZSB3aXRoIG5hbWUgJyR7bmFtZX0nIHdhcyBub3QgZm91bmRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0U2VydmljZShuYW1lOnN0cmluZywgZnVuYzooKSA9PiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdCA9IHRoaXMuaW5zdGFuY2VzW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWluc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tuYW1lXSA9IGZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVUb25lQmFzZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlc0NvbnRhaW5lcjogSW5zdGFuY2VzQ29udGFpbmVyID0gbmV3IEluc3RhbmNlc0NvbnRhaW5lcigpO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXRTZXJ2aWNlKG5hbWU6IHN0cmluZywgZnVuYzogKCkgPT4gYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzQ29udGFpbmVyLmluaXRTZXJ2aWNlKG5hbWUsIGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UobmFtZTogc3RyaW5nKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzQ29udGFpbmVyLmluc3RhbmNlKG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdHJpbmdDb25zdGFudFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRhdGVGb3JtYXQgPSBcIkREL01NL1lZWVlcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRhdGVSYW5nZUZpbHRlclN0YXJ0R3JvdXBOYW1lID0gXCJzdGFydEZpbHRlclwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBkYXRlUmFuZ2VGaWx0ZXJFbmRHcm91cE5hbWUgPSBcImVuZEZpbHRlclwiO1xyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBYaHJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0SHRtbCh0eXBlOiBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIlBVVFwiLCB1cmw6IHN0cmluZywgcmVxdWVzdDogYW55LCByZXNwb25zZUFjdGlvbjogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KHR5cGUsIHVybCwgJ0hUTUwnLCByZXF1ZXN0LCByZXNwb25zZUFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0SnNvbih0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nLCByZXF1ZXN0OiBhbnksIHJlc3BvbnNlQWN0aW9uOiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3QodHlwZSwgdXJsLCAnanNvbicsIHJlcXVlc3QsIHJlc3BvbnNlQWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3QodHlwZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YVR5cGU6ICdIVE1MJyB8ICdqc29uJywgcmVxdWVzdDogYW55LCByZXNwb25zZUFjdGlvbjogKHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUFjdGlvbihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiAoeGhyLCBzdGF0dXMsIGVycm9yKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9UYWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BGaWxlVXBsb2FkZXJcclxue1xyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHBvc3RVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3N0VXJsOiBzdHJpbmcsIHNlcnZpY2U6IFRhYmxlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucG9zdFVybCA9IHBvc3RVcmw7XHJcblxyXG4gICAgICAgICQoXCJodG1sXCIpLm9uKFwiZHJhZ292ZXJcIixcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2RyYWdnaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiaHRtbFwiKS5vbihcImRyYWdsZWF2ZVwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihldmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCJodG1sXCIpLm9uKFwiZHJvcFwiLFxyXG4gICAgICAgICAgICBldmVudCA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZygpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3RoaXMuc2VydmljZS5jb250YWluZXJOYW1lfSB0cmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKHJvdzogSFRNTEVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgcm93JCA9ICQocm93KTtcclxuXHJcbiAgICAgICAgcm93JC5vbignZHJhZ292ZXInLCBmYWxzZSlcclxuICAgICAgICAgICAgLm9uKCdkcm9wJyxcclxuICAgICAgICAgICAgICAgIGV2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRWYWwgPSByb3ckLmRhdGEoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkVmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IChldmVudC5vcmlnaW5hbEV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBmaWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHJhbnNhY3Rpb25JZCcsIGlkVmFsKTsgLy90b2RvIGhhcmRjb2RlZCB2YWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZERhdGEoZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ByaXZhdGUgc2VuZERhdGEoZm9ybURhdGE6IEZvcm1EYXRhKTogdm9pZFxyXG4gICAgLy97XHJcbiAgICAvLyAgICBYaHIucmVxdWVzdChcIlBPU1RcIiwgdGhpcy5wb3N0VXJsLCBcImpzb25cIiwgZm9ybURhdGEsICgpID0+IHRoaXMuc2VydmljZS5yZWZyZXNoKCkpO1xyXG4gICAgLy99XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YShmb3JtRGF0YTogRm9ybURhdGEpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnBvc3RVcmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSBhcyBhbnksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFhociB9IGZyb20gJy4uL2NvbW1vbi94aHInO1xyXG5cclxuXHJcbmNsYXNzIERyb3Bkb3duTGlzdEl0ZW1cclxue1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsaXN0ZW4obWFpbkRyb3Bkb3duU2VsZWN0b3I6IHN0cmluZywgY2hpbGREcm9wZG93blNlbGVjdG9yOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWFpbkRyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChgIyR7bWFpbkRyb3Bkb3duU2VsZWN0b3J9YCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGREcm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoYCMke2NoaWxkRHJvcGRvd25TZWxlY3Rvcn1gKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShtYWluRHJvcGRvd24pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIobWFpbkRyb3Bkb3duLCBjaGlsZERyb3Bkb3duKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW5Ecm9wZG93bi5vbihcImNoYW5nZVwiLCAoZXZlbnQ6IGFueSkgPT4gdGhpcy5yZW5kZXIobWFpbkRyb3Bkb3duLCBjaGlsZERyb3Bkb3duKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXIobWFpbkRyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBjaGlsZERyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1haW5TZWxlY3RlZElkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUobWFpbkRyb3Bkb3duKTtcclxuICAgICAgICBcclxuICAgICAgICBYaHIucmVxdWVzdEpzb24oXCJQT1NUXCIsIGAke3RoaXMudXJsfS8ke21haW5TZWxlY3RlZElkfWAsIHt9LCAoaXRlbXM6IERyb3Bkb3duTGlzdEl0ZW1bXSkgPT4gdGhpcy5wb3B1bGF0ZURyb3Bkb3duKGNoaWxkRHJvcGRvd24sIGl0ZW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZURyb3Bkb3duKGRyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBpdGVtczogRHJvcGRvd25MaXN0SXRlbVtdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlkOiBudW1iZXIgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoZHJvcGRvd24pO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5lbXB0eSgpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5hcHBlbmQodGhpcy5jcmVhdGVFbXB0eU9wdGlvbigpKTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoeDogRHJvcGRvd25MaXN0SXRlbSkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZDogYm9vbGVhbiA9IHguaWQgPT0gaWQ7IC8vIHllcyBJIG5lZWQgPT0hIVxyXG5cclxuICAgICAgICAgICAgZHJvcGRvd24uYXBwZW5kKHRoaXMuY3JlYXRlT3B0aW9uKHgubmFtZSwgeC5pZCwgc2VsZWN0ZWQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoZHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4pOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZHJvcGRvd24udmFsKCkgYXMgbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRW1wdHlPcHRpb24oKTogSlF1ZXJ5PEhUTUxFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbjogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS5hdHRyKFwidmFsdWVcIiwgXCJcIikudGV4dChcIi0tU2VsZWN0IFZhbHVlLS1cIik7IC8vdG9kbyB1c2UgdmFsdWUgZnJvbSBzdHJpbmcgY29uc3RhbnRzXHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVPcHRpb24odGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlKTogSlF1ZXJ5PEhUTUxFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbjogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiKS5hdHRyKFwidmFsdWVcIiwgdmFsdWUpLnRleHQodGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hdHRyKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9jb21tb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZHJhZ0FuZERyb3BGaWxlVXBsb2FkZXIvZHJhZ0FuZERyb3BGaWxlVXBsb2FkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZHJvcGRvd25TZXJ2aWNlL2Ryb3Bkb3duU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FbmRCYWxhbmNlU2VydmljZS9FbmRCYWxhbmNlU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVzUHJldmlld1NlcnZpY2UvZmlsZXNQcmV2aWV3U2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0Tm90ZVNlcnZpY2UvZWRpdE5vdGVTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXRQcm9qZWN0QW5kQ2F0ZWdvcnlTZXJ2aWNlL2VkaXRQcm9qZWN0QW5kQ2F0ZWdvcnlTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm1TY3JpcHRzL2Zvcm1TY3JpcHRzXCI7IiwiaW1wb3J0IHtcclxuICAgIE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3QsXHJcbiAgICBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbCxcclxuICAgIE1hbnlUb01hbnlTYXZlQWN0aW9uXHJcbn0gZnJvbSAnLi9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgWGhyIH0gZnJvbSAnLi4vY29tbW9uL3hocic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVJlbGF0aW9uU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lck5hbWU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGxlZnRFbnRpdHlJZDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdXJsOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0RW50aXR5SWQ6IG51bWJlciwgY29udGFpbmVyTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxlZnRFbnRpdHlJZCA9IGxlZnRFbnRpdHlJZDtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck5hbWUgPSBjb250YWluZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGx5Q2hlY2tlZDogc3RyaW5nIFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1RvQWRkOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1RvRGVsZXRlOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyQ2hlY2tib3goc2VsZWN0b3I6IHN0cmluZywgaWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gJChgIyR7c2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja0JveC5pcyhcIjpjaGVja2VkXCIpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsbHlDaGVja2VkLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tCb3guY2hhbmdlKChlKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQm94LmlzKFwiOmNoZWNrZWRcIikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsbHlDaGVja2VkLmZpbmQoeCA9PiB4ID09PSBzZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVkSXRlbSA9IHRoaXMuaXRlbXNUb0RlbGV0ZS5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZWxldGVkSXRlbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXNUb0RlbGV0ZS5pbmRleE9mKGRlbGV0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zVG9EZWxldGUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxseUNoZWNrZWQuZmluZCh4ID0+IHggPT09IHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbEl0ZW0oaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkSXRlbSA9IHRoaXMuaXRlbXNUb0FkZC5maW5kKHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZGRlZEl0ZW0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zVG9BZGQuaW5kZXhPZihhZGRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNUb0FkZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmNyZWF0ZVJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgWGhyLnJlcXVlc3RIdG1sKFwiUE9TVFwiLCB0aGlzLnVybCwgcmVxdWVzdCwgcmVzcG9uc2UgPT4gJChgIyR7dGhpcy5jb250YWluZXJOYW1lfWApLmh0bWwocmVzcG9uc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IE1hbnlUb01hbnlTYXZlVmlld01vZGVsKGlkLCBNYW55VG9NYW55U2F2ZUFjdGlvbi5BZGQpO1xyXG4gICAgICAgIHRoaXMuaXRlbXNUb0FkZC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsSXRlbShpZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTWFueVRvTWFueVNhdmVWaWV3TW9kZWwoaWQsIE1hbnlUb01hbnlTYXZlQWN0aW9uLkRlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvRGVsZXRlLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0KCkgOiBNYW55VG9NYW55UmVsYXRpb25SZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBNYW55VG9NYW55UmVsYXRpb25SZXF1ZXN0KHRoaXMubGVmdEVudGl0eUlkKTtcclxuICAgICAgICByZXF1ZXN0Lml0ZW1zID0gcmVxdWVzdC5pdGVtcy5jb25jYXQodGhpcy5pdGVtc1RvQWRkKTtcclxuICAgICAgICByZXF1ZXN0Lml0ZW1zID0gcmVxdWVzdC5pdGVtcy5jb25jYXQodGhpcy5pdGVtc1RvRGVsZXRlKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3Rcclxue1xyXG4gICAgcHVibGljIGxlZnRFbnRpdHlJZDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczogTWFueVRvTWFueVNhdmVWaWV3TW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnRFbnRpdHlJZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGVmdEVudGl0eUlkID0gbGVmdEVudGl0eUlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVNhdmVWaWV3TW9kZWxcclxue1xyXG4gICAgcHVibGljIGFjdGlvbjogTWFueVRvTWFueVNhdmVBY3Rpb247XHJcblxyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYWN0aW9uOiBNYW55VG9NYW55U2F2ZUFjdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hbnlUb01hbnlTYXZlQWN0aW9uXHJcbntcclxuICAgIEFkZCA9IDEsXHJcbiAgICBEZWxldGUgPSAyXHJcbn0iLCJpbXBvcnQgeyBYaHIgfSBmcm9tICcuLi9jb21tb24veGhyJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSU1vZGFsT3B0aW9uc1xyXG57XHJcbiAgICBiYWNrZHJvcDogYm9vbGVhbjtcclxuICAgIGtleWJvYXJkOiBib29sZWFuO1xyXG4gICAgZm9jdXM6IGJvb2xlYW47XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgbW9kYWw6IEpRdWVyeTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSlF1ZXJ5O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogSU1vZGFsT3B0aW9ucyA9IHtcclxuICAgICAgICBiYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbElkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9ICQoYCMke21vZGFsSWR9YCk7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5tb2RhbC5maW5kKCcubW9kYWwtYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93UGFnZSh1cmw6IHN0cmluZyA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG93UGFnZUludGVybmFsKHVybCwgXCJUcnVlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVBhZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICh0aGlzLm1vZGFsIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJCdXR0b24oYnV0dG9uSWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gJChgIyR7YnV0dG9uSWR9YCk7XHJcbiAgICAgICAgdmFyIHVybCA9IGJ1dHRvbi5hdHRyKCd1cmwnKTtcclxuICAgICAgICB2YXIgaXNBY3Rpb25saW5rID0gYnV0dG9uLmF0dHIoJ2lzQWN0aW9ubGluaycpO1xyXG5cclxuICAgICAgICBidXR0b24ub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdlSW50ZXJuYWwodXJsLCBpc0FjdGlvbmxpbmspO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dQYWdlSW50ZXJuYWwodXJsOiBzdHJpbmcsIGlzQWN0aW9ubGluazogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc0FjdGlvbmxpbmsgPT09ICdUcnVlJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQodXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQ29udGVudCh1cmw6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDbGVhclNlYXJjaFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGVhckNsYXNzOiBzdHJpbmcgPSAnY2xlYXJfaW5wdXQnO1xyXG4gICAgICAgIGNvbnN0IGZvY3VzQWZ0ZXJDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbGlua1RleHQ6IHN0cmluZyA9ICcmdGltZXM7JztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2Q2xhc3MgPSBjbGVhckNsYXNzICsgJ19kaXYnO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoISR0aGlzLnBhcmVudCgpLmhhc0NsYXNzKGRpdkNsYXNzKSkge1xyXG4gICAgICAgICAgICAkdGhpcy53cmFwKGA8ZGl2IHN0eWxlPSdwb3NpdGlvbjogcmVsYXRpdmU7JyBjbGFzcz0nJHtkaXZDbGFzc30nPiR7JHRoaXMuaHRtbCgpfTwvZGl2PmApO1xyXG5cclxuICAgICAgICAgICAgJHRoaXMuYWZ0ZXIoXHJcbiAgICAgICAgICAgICAgICBgPGEgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgY3Vyc29yOiBwb2ludGVyOycgY2xhc3M9JyR7Y2xlYXJDbGFzc30nPiR7bGlua1RleHR9PC9hPmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ0biA9ICR0aGlzLm5leHQoKTsgXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgICAgICR0aGlzLnZhbCgnJykuY2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2VyQnRuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9jdXNBZnRlckNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChjYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdHJpZ2dlckJ0bigpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0SGFzVGV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHBseUJ1dHRvbkNzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5wdXRIYXNUZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHRoaXMudmFsKCkudG9TdHJpbmcoKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykubGVuZ3RoID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5QnV0dG9uQ3NzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9ICR0aGlzLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gJHRoaXMub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGJ0bi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBoZWlnaHQgLyAyIC0gYnRuLmhlaWdodCgpIC8gMixcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHdpZHRoIC0gYnRuLndpZHRoKCkgLSAxMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5vbignY2xpY2snLCBjbGVhckZpZWxkKTtcclxuICAgICAgICAkdGhpcy5vbigna2V5dXAga2V5ZG93biBjaGFuZ2UgZm9jdXMnLCB0cmlnZ2VyQnRuKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCBhcyBhbnkpLnJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgdHJpZ2dlckJ0bigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2goKVxyXG57XHJcbiAgICBcclxufSIsImltcG9ydCB7IElUYWJsZUZpbHRlckNyZWF0b3IsIFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuYm9vbGVhbkZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5ib29sRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCQuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0JC5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuYm9vbEZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyVmFsdWVBdHRyaWJ1dGUgPSAnZmlsdGVyLXZhbHVlJztcclxuZXhwb3J0IGNvbnN0IGZpbHRlckZpZWxkSWRBdHRyaWJ1dGUgPSAnZmllbGQtaWQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlclZhbHVlKGlucHV0JDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6YW55XHJcbntcclxuICAgIHJldHVybiBpbnB1dCQuZGF0YShmaWx0ZXJWYWx1ZUF0dHJpYnV0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6YW55XHJcbntcclxuICAgIHJldHVybiBpbnB1dCQuZGF0YShmaWx0ZXJGaWVsZElkQXR0cmlidXRlKTtcclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgSVJhbmdlRmlsdGVyQ3JlYXRvciB9IGZyb20gJy4vZmlsdGVyc0NvbW1vbic7XHJcbmltcG9ydCB7IFN0cmluZ0NvbnN0YW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnZGF0ZXJhbmdlcGlja2VyJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSAnLi4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZUNyZWF0b3IgLy9pbXBsZW1lbnRzIElSYW5nZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5kYXRlUmFuZ2VGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBzdGFydERhdGVWYWx1ZTogc3RyaW5nID0gaW5wdXQkLmRhdGEoJ2ZpbHRlci1zdGFydC12YWx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZTogc3RyaW5nID0gaW5wdXQkLmRhdGEoJ2ZpbHRlci1lbmQtdmFsdWUnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0OiBtb21lbnQuTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVuZDogbW9tZW50Lk1vbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnREYXRlVmFsdWUgJiYgZW5kRGF0ZVZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoc3RhcnREYXRlVmFsdWUsIFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICBlbmQgPSBtb21lbnQoZW5kRGF0ZVZhbHVlLCBTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0JC52YWwoc3RhcnREYXRlVmFsdWUgKyAnIC0gJyArIGVuZERhdGVWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoc2VydmljZSwgZmllbGRJZCwgc3RhcnREYXRlVmFsdWUsIGVuZERhdGVWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyk7XHJcbiAgICAgICAgICAgIGVuZCA9IG1vbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZU9wdGlvbnMoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgIGlucHV0JC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xyXG4gICAgICAgIGlucHV0JC5jc3MoeyBcIm1pbi13aWR0aFwiOiBcIjE3NXB4XCIgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5kYXRlcmFuZ2VwaWNrZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGV2LCBwaWNrZXIpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHBpY2tlci5zdGFydERhdGUuZm9ybWF0KFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBpY2tlci5lbmREYXRlLmZvcm1hdChTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCQudmFsKHN0YXJ0RGF0ZSArICcgLSAnICsgZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHNlcnZpY2UsIGZpZWxkSWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsXHJcbiAgICAgICAgICAgIChldiwgcGlja2VyKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlLCBmaWVsZElkOiBzdHJpbmcsIHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKFRhYmxlRmlsdGVyLnN0YXJ0RGF0ZUZpbHRlcihmaWVsZElkLCBzdGFydCkpO1xyXG4gICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKFRhYmxlRmlsdGVyLmVuZERhdGVGaWx0ZXIoZmllbGRJZCwgZW5kKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlT3B0aW9ucyhzdGFydD86IG1vbWVudC5Nb21lbnQsIGVuZD86IG1vbWVudC5Nb21lbnQpOiBPcHRpb25zXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydCxcclxuICAgICAgICAgICAgZW5kRGF0ZTogZW5kLFxyXG4gICAgICAgICAgICBhdXRvVXBkYXRlSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByYW5nZXM6IHtcclxuICAgICAgICAgICAgICAgICdUb2RheSc6IFttb21lbnQoKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgJ1llc3RlcmRheSc6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnVGhpcyBNb250aCc6IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV0sXHJcbiAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFtcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYnV0dG9uQ2xhc3NlczogWydtLWJ0biBidG4nXSxcclxuICAgICAgICAgICAgYXBwbHlCdXR0b25DbGFzc2VzOiAnYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25DbGFzc2VzOiAnYnRuLXNlY29uZGFyeScsXHJcbiAgICAgICAgICAgIGxvY2FsZToge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTdHJpbmdDb25zdGFudC5kYXRlRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6ICdDbGVhcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVRhYmxlRmlsdGVyQ3JlYXRvciwgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnVtRmlsdGVyQ3JlYXRvciAvL2ltcGxlbWVudHMgSVRhYmxlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLmVudW1GaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZW51bUZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQkLmNoYW5nZShlID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpbnB1dCQuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLmVudW1GaWx0ZXIoZmllbGRJZCwgdmFsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL3N0cmluZ0ZpbHRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lbnVtRmlsdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmFsdWVPYmplY3RGaWx0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL251bWJlckZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYm9vbEZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZVJhbmdlJzsiLCJpbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAubnVtYmVyRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGlucHV0JCBhcyBhbnkpLmNsZWFyU2VhcmNoKCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbigna2V5dXAnLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5udW1iZXJGaWx0ZXIoZmllbGRJZCwgaW5wdXQkLnZhbCgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2xlYXJTZWFyY2ggfSBmcm9tIFwiLi4vY2xlYXJTZWFyY2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdGaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuc3RyaW5nRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLnN0cmluZ0ZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2xlYXJTZWFyY2gucmVnaXN0ZXIoaW5wdXQsICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlucHV0JC5vbigna2V5dXAnLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5zdHJpbmdGaWx0ZXIoZmllbGRJZCwgaW5wdXQkLnZhbCgpLnRvU3RyaW5nKCkucmVwbGFjZSgnXFxcXCcsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVGFibGVGaWx0ZXJDcmVhdG9yLCBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZU9iamVjdEZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC52YWx1ZU9iamVjdEZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5udW1iZXJGaWx0ZXIoZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICBpbnB1dCQudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0JC5jaGFuZ2UoZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gaW5wdXQkLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5udW1iZXJGaWx0ZXIoZmllbGRJZCwgdmFsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tCb3hDb250YWluZXJcclxue1xyXG4gICAgcHJpdmF0ZSBjaGVja0JveDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUFjdGlvbjogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaGVja0JveDogSFRNTElucHV0RWxlbWVudCwgY2hhbmdlQWN0aW9uOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3ggPSBjaGVja0JveDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24gPSBjaGFuZ2VBY3Rpb247XHJcblxyXG4gICAgICAgICQoY2hlY2tCb3gpLmNoYW5nZShlID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTZWxlY3RlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tCb3guY2hlY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Um93SWQoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICQodGhpcy5jaGVja0JveCkuY2xvc2VzdCgndHInKS5kYXRhKCdpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm93c1NlbGVjdE1hbmFnZXJcclxue1xyXG4gICAgcHVibGljIG9uU2VsZWN0ZWRSb3dzOiBTdWJqZWN0PG51bWJlcltdPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJzOiBDaGVja0JveENvbnRhaW5lcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lclNlbGVjdG9yOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoZWNrQm94ZXM6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICQoYCMke2NvbnRhaW5lclNlbGVjdG9yfSAucm93LXNlbGVjdGApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoZWNrQm94ZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChuZXcgQ2hlY2tCb3hDb250YWluZXIoY2hlY2tCb3hlc1tpXSwgKCkgPT4gdGhpcy5jaGFuZ2VBY3Rpb24oKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChgIyR7Y29udGFpbmVyU2VsZWN0b3J9IC50YWJsZVNlbGVjdEFsbGApLm9uKCdjbGljaycsXHJcbiAgICAgICAgICAgIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChgIyR7Y29udGFpbmVyU2VsZWN0b3J9IC50YWJsZURlc2VsZWN0QWxsYCkub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RBbGwoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzLmZvckVhY2goeCA9PiB4LnNldCgpKTtcclxuICAgICAgICB0aGlzLmRvRW1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QWxsKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRvRW1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVycy5mb3JFYWNoKHggPT4geC5yZXNldCgpKTtcclxuICAgICAgICB0aGlzLmRvRW1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUFjdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9FbWl0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaWRzOiBudW1iZXJbXSA9IHRoaXMuY29udGFpbmVycy5maWx0ZXIoeCA9PiB4LmlzU2VsZWN0ZWQoKSkubWFwKHggPT4geC5nZXRSb3dJZCgpKTtcclxuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkUm93cy5uZXh0KGlkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT3JkZXJEaXJlY3Rpb24gfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NvcnRDb21tb24nO1xyXG5pbXBvcnQgeyBUYWJsZU9yZGVyIH0gZnJvbSAnLi4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgU29ydEluZm8gfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4uL2ZpbHRlcnMvY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydENyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBhc2NDbGFzczogc3RyaW5nID0gJ2FzY1NvcnQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBkZXNjQ2xhc3M6IHN0cmluZyA9ICdkZXNjU29ydCc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclNvcnRzKHNlcnZpY2U6IFRhYmxlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBsYWJlbHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAudGFibGVTb3J0YCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFiZWxzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTb3J0KGxhYmVscyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlclNvcnQobGFiZWw6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGFibGUkID0gJChsYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQobGFibGUkKTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbihsYWJsZSQpO1xyXG5cclxuICAgICAgICBjb25zdCBzb3J0ID0gbmV3IFRhYmxlT3JkZXIoZmllbGRJZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFibGUkLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuICAgICAgICBsYWJsZSQud3JhcChgPGRpdiBjbGFzcz0nbm9zZWxlY3QnIHN0eWxlPSdjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXgnPjwvZGl2PmApO1xyXG4gICAgICAgIGxhYmxlJC5hZnRlcihgPGRpdiBhcnJvd1BhbGNlaG9sZGVyIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDVweFwiPjwvZGl2PmApO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIkID0gbGFibGUkLnBhcmVudCgpO1xyXG4gICAgICAgIGNvbnN0IGFycm93Q29udGFpbmVyJCA9IGNvbnRhaW5lciQuY2hpbGRyZW4oJ1thcnJvd1BhbGNlaG9sZGVyXScpO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3M6IHN0cmluZyA9IGRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQXNjID8gU29ydENyZWF0b3IuYXNjQ2xhc3MgOiBTb3J0Q3JlYXRvci5kZXNjQ2xhc3M7XHJcbiAgICAgICAgICAgIGFycm93Q29udGFpbmVyJC5hZGRDbGFzcyhjc3NDbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGZpZWxkSWQsIGFycm93Q29udGFpbmVyJCwgc2VydmljZSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lciQub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIkLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycm93Q29udGFpbmVyJC5hZGRDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzb3J0LmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRlc2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJvd0NvbnRhaW5lciQuaGFzQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzb3J0LmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0U29ydChzb3J0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoZmllbGRJZDogc3RyaW5nLCBhcnJvd0NvbnRhaW5lcjogSlF1ZXJ5LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVzZXRDYWxsYmFjayA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIuaGFzQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lci5yZW1vdmVDbGFzcyhTb3J0Q3JlYXRvci5hc2NDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcnJvd0NvbnRhaW5lci5oYXNDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lci5yZW1vdmVDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbzogU29ydEluZm8gPSB7XHJcbiAgICAgICAgICAgIGZpZWxkSWQ6IGZpZWxkSWQsXHJcbiAgICAgICAgICAgIGNhbGxCYWNrOiByZXNldENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2VydmljZS5yZWdpc3RlclNvcnQoaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGlyZWN0aW9uKGxhYmVsJDpKUXVlcnkpOiBPcmRlckRpcmVjdGlvbiB8IG51bGxcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbGFiZWwkLmRhdGEoXCJzb3J0LWRpcmVjdGlvblwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICAgIFRhYmxlRmlsdGVyLFxyXG4gICAgVGFibGVPcmRlcixcclxuICAgIFRhYmxlUmVxdWVzdCxcclxuICAgIFNvcnRJbmZvXHJcbn0gZnJvbSAnLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQge1xyXG4gICAgU3RyaW5nRmlsdGVyQ3JlYXRvcixcclxuICAgIEVudW1GaWx0ZXJDcmVhdG9yLFxyXG4gICAgVmFsdWVPYmplY3RGaWx0ZXJDcmVhdG9yLFxyXG4gICAgTnVtYmVyRmlsdGVyQ3JlYXRvcixcclxuICAgIEJvb2xGaWx0ZXJDcmVhdG9yLFxyXG4gICAgRGF0ZVJhbmdlQ3JlYXRvclxyXG59IGZyb20gJy4vZmlsdGVycyc7XHJcbmltcG9ydCB7IFhociwgU2luZ2xlVG9uZUJhc2UgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBTb3J0Q3JlYXRvciB9IGZyb20gJy4vc29ydC9zb3J0Q3JlYXRvcic7XHJcbmltcG9ydCB7IFJvd3NTZWxlY3RNYW5hZ2VyIH0gZnJvbSAnLi9yb3dzU2VsZWN0L3Jvd3NTZWxlY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSBleHRlbmRzIFNpbmdsZVRvbmVCYXNlXHJcbntcclxuICAgIHB1YmxpYyBvbkZpbHRlclRhYmxlOiBTdWJqZWN0PFRhYmxlUmVxdWVzdD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAgIHB1YmxpYyBjb250YWluZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJVcmw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hVcmw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyczogVGFibGVGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgc29ydHM6IFRhYmxlT3JkZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgc29ydHNJbmZvOiBTb3J0SW5mb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIHJvd3NTZWxlY3RNYW5hZ2VyOiBSb3dzU2VsZWN0TWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCByZWZyZXNoVXJsOiBzdHJpbmcsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJOYW1lID0gY29udGFpbmVyTmFtZTtcclxuICAgICAgICB0aGlzLmZpbHRlclVybCA9IHVybDtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVcmwgPSByZWZyZXNoVXJsO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZ1RvRXZlbnRzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBTdHJpbmdGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBOdW1iZXJGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBEYXRlUmFuZ2VDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBWYWx1ZU9iamVjdEZpbHRlckNyZWF0b3IucmVnaXN0ZXJGaWx0ZXJzKHRoaXMpO1xyXG4gICAgICAgIEJvb2xGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBFbnVtRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcblxyXG4gICAgICAgIFNvcnRDcmVhdG9yLnJlZ2lzdGVyU29ydHModGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucm93c1NlbGVjdE1hbmFnZXIgPSBuZXcgUm93c1NlbGVjdE1hbmFnZXIodGhpcy5jb250YWluZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgWGhyLnJlcXVlc3RIdG1sKFwiR0VUXCIsIHRoaXMucmVmcmVzaFVybCwge30sIHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlLCBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwc2VydEZpbHRlcihmaWx0ZXI6IFRhYmxlRmlsdGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmlsdGVySW5kZXgoZmlsdGVyLmZpZWxkSWQsIGZpbHRlci5ncm91cCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDAgJiYgZmlsdGVyLnZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGluZGV4LCAxLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihmaWVsZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycy5maWx0ZXIoeCA9PiB4LmZpZWxkSWQgIT0gZmllbGQgJiYgeC5ncm91cCA9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJTb3J0KGluZm86IFNvcnRJbmZvKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc29ydHNJbmZvLnB1c2goaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwc2VydFNvcnQoc29ydDogVGFibGVPcmRlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvcnRzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChzb3J0LmRpcmVjdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydHMucHVzaChzb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ydHNJbmZvLmZpbHRlcih4ID0+IHguZmllbGRJZCAhPT0gc29ydC5maWVsZElkKS5mb3JFYWNoKHggPT4geC5jYWxsQmFjaygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyRGF0YSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuZ2V0VGFibGVSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIlBPU1RcIiwgdGhpcy5maWx0ZXJVcmwsIHJlcXVlc3QsIHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJsZVJlcXVlc3QoKTogVGFibGVSZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuZmlsdGVycy5maWx0ZXIoeCA9PiB4LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBvcmRlcnMgPSB0aGlzLnNvcnRzLmZpbHRlcih4ID0+IHguZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsdGVyczogZmlsdGVycyxcclxuICAgICAgICAgICAgb3JkZXJzOiBvcmRlcnMsXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBhbnksIHJlcXVlc3Q6IFRhYmxlUmVxdWVzdCA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyVGFibGUubmV4dChyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgICQoYCMke3RoaXMuY29udGFpbmVyTmFtZX1gKS5odG1sKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0U2VydmljZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmZpbHRlcnMgPSBbXTtcclxuICAgICAgICAvL3RoaXMuc29ydHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvcnRzSW5mbyA9IFtdO1xyXG4gICAgICAgIC8vdGhpcy5vbkZpbHRlclRhYmxlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJJbmRleChmaWVsZDogc3RyaW5nLCBncm91cE5hbWU6IHN0cmluZyA9IG51bGwpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0ZpbHRlciA9XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5maW5kKHggPT4geC5maWVsZElkID09PSBmaWVsZCAmJiAoZ3JvdXBOYW1lID09IG51bGwgfHwgeC5ncm91cCA9PT0gZ3JvdXBOYW1lKSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RpbmdGaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmluZGV4T2YoZXhpc3RpbmdGaWx0ZXIpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgdHlwZSBUYWJsZUNvbHVtblR5cGUgPSAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2VudW0nIHwgJ2N1cnJlbmN5JztcclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlRmlsdGVyT3BlcmF0b3Jcclxue1xyXG4gICAgRXF1YWwgPSAwLFxyXG4gICAgTm90RXF1YWwgPSAxLFxyXG4gICAgU3RhcnRzV2l0aCA9IDIsXHJcbiAgICBDb250YWlucyA9IDMsXHJcbiAgICBEb2VzTm90Q29udGFpbiA9IDQsXHJcbiAgICBFbmRzV2l0aCA9IDUsXHJcbiAgICBHcmVhdGVyVGhhbk9yRXF1YWwgPSA2LFxyXG4gICAgR3JlYXRlclRoYW4gPSA3LFxyXG4gICAgTGVzc1RoYW5PckVxdWFsID0gOCxcclxuICAgIExlc3NUaGFuID0gOVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJcclxue1xyXG4gICAgcHVibGljIGdyb3VwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZW5jcnlwdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmllbGRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IFRhYmxlQ29sdW1uVHlwZTtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLFxyXG4gICAgICAgIHZhbHVlPzogYW55LFxyXG4gICAgICAgIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxyXG4gICAgICAgICAgICBmaWVsZElkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLm9wZXJhdG9yXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ0ZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdzdHJpbmcnLCB2YWwudHJpbSgpLCBUYWJsZUZpbHRlck9wZXJhdG9yLkNvbnRhaW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvb2xGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUZpbHRlcihmaWxlZElkLCAnYm9vbGVhbicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbnVtRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ2VudW0nLCB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ251bWJlcicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcsIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbCk6XHJcbiAgICAgICAgVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdkYXRlJywgdmFsLCBvcGVyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydERhdGVGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZGF0ZUZpbHRlcihmaWxlZElkLCB2YWwsIFRhYmxlRmlsdGVyT3BlcmF0b3IuR3JlYXRlclRoYW5PckVxdWFsKTtcclxuICAgICAgICBmaWx0ZXIuZ3JvdXAgPSBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5kRGF0ZUZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5kYXRlRmlsdGVyKGZpbGVkSWQsIHZhbCwgVGFibGVGaWx0ZXJPcGVyYXRvci5MZXNzVGhhbk9yRXF1YWwpO1xyXG4gICAgICAgIGZpbHRlci5ncm91cCA9IGNyZWF0ZUVuZERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvblxyXG57XHJcbiAgICBBc2MgPSAxLFxyXG4gICAgRGVzYyA9IDJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlT3JkZXJcclxue1xyXG4gICAgcHVibGljIGZpZWxkSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXJlY3Rpb24/OiBPcmRlckRpcmVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maWVsZElkID0gZmllbGRJZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgZmlsdGVyczogVGFibGVGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvcmRlcnM6IFRhYmxlT3JkZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRJbmZvXHJcbntcclxuICAgIHB1YmxpYyBmaWVsZElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2FsbEJhY2s6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWU6IHN0cmluZyA9IFwic3RhcnRGaWx0ZXJcIjtcclxuY29uc3QgZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWU6IHN0cmluZyA9IFwiZW5kRmlsdGVyXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWVsZElkOiBzdHJpbmcpXHJcbntcclxuICAgIHJldHVybiBgJHtmaWVsZElkfV8ke2RhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW5kRGF0ZUZpbHRlckdyb3VwKGZpZWxkSWQ6IHN0cmluZylcclxue1xyXG4gICAgcmV0dXJuIGAke2ZpZWxkSWR9XyR7ZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWV9YDtcclxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=