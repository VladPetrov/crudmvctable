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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0VkaXROb3RlU2VydmljZS9lZGl0Tm90ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2UvZWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRW5kQmFsYW5jZVNlcnZpY2UvRW5kQmFsYW5jZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvRmlsZXNQcmV2aWV3U2VydmljZS9maWxlc1ByZXZpZXdTZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0Zvcm1TY3JpcHRzL2Zvcm1TY3JpcHRzLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9jb21tb24vcGRmLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9wb3BvdmVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zaW5nbGVUb25lLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9zdHJpbmdDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvY29tbW9uL3hoci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9kcm9wZG93blNlcnZpY2UvZHJvcGRvd25TZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VDb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvbW9kYWxTZXJ2aWNlL21vZGFsU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvY2xlYXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvYm9vbEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvZGF0ZVJhbmdlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2VudW1GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvbnVtYmVyRmlsdGVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL3N0cmluZ0ZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy92YWx1ZU9iamVjdEZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2Uvcm93c1NlbGVjdC9yb3dzU2VsZWN0LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9zb3J0L3NvcnRDcmVhdG9yLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL3RhYmxlU2VydmljZUNvbW1vbi50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL3NjcmlwdHMvemxpYiAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vc2NyaXB0cy9mcyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vc2NyaXB0cy9odHRwIChpZ25vcmVkKSIsIndlYnBhY2s6Ly9zY3JpcHRzL2h0dHBzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDOVFBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHNjcmlwdHNcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBzY3JpcHRzXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vU2NyaXB0cy9pbmRleC50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9UYWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gXCIuLi9tb2RhbFNlcnZpY2UvbW9kYWxTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBvcG92ZXIsIFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Tm90ZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbElkID0gJ2VkaXQtbm90ZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5vdGVJbnB1dE5hbWUgPSAnbm90ZSc7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZGl0Tm90ZUxpbms6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFibGVTZXJ2aWNlOlRhYmxlU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIHBvcG92ZXI6IFBvcG92ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcclxuICAgIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVkaXROb3RlTGluazogc3RyaW5nLCB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVkaXROb3RlTGluayA9IGVkaXROb3RlTGluaztcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZSA9IHRhYmxlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9ybUxpc3RlbmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZSA9IG5ldyBNb2RhbFNlcnZpY2UodGhpcy5tb2RhbElkKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoYCMke3RoaXMudGFibGVTZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5jdXN0b20tcG9wb3Zlci5ub3RlYCk7XHJcbiAgICAgICAgdGhpcy5wb3BvdmVyID0gbmV3IFBvcG92ZXIoJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMucG9wb3Zlci5zdGFydExpc3RlbmluZygoJHRhcmdldDogSlF1ZXJ5PEV2ZW50VGFyZ2V0PikgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9IFBvcG92ZXIudGVtcGxhdGVFZGl0SWNvbigpO1xyXG5cclxuICAgICAgICAgICAgJHRlbXBsYXRlLm9uKCdjbGljaycsIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKDxhbnk+ZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gJHRhcmdldC5wYXJlbnQoKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmluZCA9ICR0YXJnZXQuY2xvc2VzdCgndHInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9ICRmaW5kLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1BhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbm90ZUlucHV0ID0gJChgIyR7dGhpcy5tb2RhbElkfSB0ZXh0YXJlYVtuYW1lPScke3RoaXMubm90ZUlucHV0TmFtZX0nXWApO1xyXG4gICAgICAgICAgICAgICAgJG5vdGVJbnB1dC52YWwodGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3BvdmVyLnNob3dUZW1wbGF0ZSgkdGFyZ2V0LCAkdGVtcGxhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybUxpc3RlbmluZygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgJChgIyR7dGhpcy5tb2RhbElkfSBmb3JtYCkub24oJ3N1Ym1pdCcsIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoPGFueT5ldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9ICR0YXJnZXQuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGZvcm1WYWx1ZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gdGhpcy5ub3RlSW5wdXROYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub3RlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IHRoaXMudHJhbnNhY3Rpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBub3RlOiBub3RlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIFhoci5yZXF1ZXN0SnNvbignUE9TVCcsIHRoaXMuZWRpdE5vdGVMaW5rLCByZXF1ZXN0LCByZXNwb25zZSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlUGFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL1RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGFsU2VydmljZS9tb2RhbFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWGhyIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuY2xhc3MgRWRpdFJlcXVlc3Rcclxue1xyXG4gICAgcHVibGljIHRyYW5zYWN0aW9uSWRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIHByb2plY3RJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNhdGVnb3J5SWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9qZWN0QW5kQ2F0ZWdvcnlTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFZGl0UHJvamVjdEFuZENhdGVnb3J5U2VydmljZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKHNlcnZpY2U6IFRhYmxlU2VydmljZSwgdXJsOiBzdHJpbmcpOiBFZGl0UHJvamVjdEFuZENhdGVnb3J5U2VydmljZVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2Uoc2VydmljZSwgdXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSAkZWRpdEJ1dHRvbjogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVkaXRWaWV3SWQ6IHN0cmluZyA9IFwicHJvamVjdEFuZENhdGVnb3J5RWRpdFZpZXdcIjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVkaXRCdXR0b25DbGFzczogc3RyaW5nID0gXCJlZGl0UHJvamVjdEFuZENhdGVnb3J5XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGlkczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLiRlZGl0QnV0dG9uID0gJChgIyR7dGhpcy50YWJsZVNlcnZpY2UuY29udGFpbmVyTmFtZX0gLiR7dGhpcy5lZGl0QnV0dG9uQ2xhc3N9YCk7XHJcbiAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBuZXcgTW9kYWxTZXJ2aWNlKHRoaXMuZWRpdFZpZXdJZCk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc2VydmljZS5yb3dzU2VsZWN0TWFuYWdlci5vblNlbGVjdGVkUm93cy5zdWJzY3JpYmUoaWRzID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlkcyA9IGlkcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkcyAmJiB0aGlzLmlkcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVkaXRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGVkaXRCdXR0b24uY2xpY2soZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kb0VkaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtTGlzdGVuaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb0VkaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghKHRoaXMuaWRzICYmIHRoaXMuaWRzLmxlbmd0aCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93UGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybUxpc3RlbmluZygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgJChgIyR7dGhpcy5lZGl0Vmlld0lkfSBmb3JtYCkub24oJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgkKDxhbnk+ZXZlbnQuY3VycmVudFRhcmdldCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFhoci5yZXF1ZXN0SnNvbignUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2VQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0KCRmb3JtOiBKUXVlcnkpOiBFZGl0UmVxdWVzdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbklkczogdGhpcy5pZHMsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogdGhpcy5nZXRGb3JtVmFsKGZvcm1WYWx1ZXMsIFwiUHJvamVjdElkXCIpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLmdldEZvcm1WYWwoZm9ybVZhbHVlcywgXCJDYXRlZ29yeUlkXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZvcm1WYWwoZm9ybVZhbHVlczogSlF1ZXJ5Lk5hbWVWYWx1ZVBhaXJbXSwgbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZm9ybVZhbHVlcy5maW5kKHggPT4geC5uYW1lID09PSBuYW1lKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFhociB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5kQmFsYW5jZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmVUb1RhYmxlKHNlcnZpY2U6IFRhYmxlU2VydmljZSwgdXJsOiBzdHJpbmcsIGNvbnRhaW5lcklkOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc2VydmljZS5vbkZpbHRlclRhYmxlLnN1YnNjcmliZShyZXF1ZXN0ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKGAjJHtjb250YWluZXJJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoeyAnb3BhY2l0eSc6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaHRtbChyZXNwb25zZSkuYW5pbWF0ZSh7ICdvcGFjaXR5JzogMSB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGRmLCBQb3BvdmVyIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZXNQcmV2aWV3U2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHBvcG92ZXI6IFBvcG92ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0YWJsZUNvbnRhaW5lcklkOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmaWxlTGluazogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnRMaW5rOiBzdHJpbmdcclxuICAgICkge31cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoYCMke3RoaXMudGFibGVDb250YWluZXJJZH0gLmN1c3RvbS1wb3BvdmVyLnByZXZpZXdgKTtcclxuICAgICAgICB0aGlzLnBvcG92ZXIgPSBuZXcgUG9wb3Zlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcG92ZXIuc3RhcnRMaXN0ZW5pbmcoKCR0YXJnZXQ6IEpRdWVyeTxFdmVudFRhcmdldD4pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlSWQgPSAkdGFyZ2V0LmRhdGEoJ2ZpbGUtaWQnKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZURvd25sb2FkTGluayA9IHRoaXMuZmlsZUxpbmsgKyBgLyR7ZmlsZUlkfWA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcG92ZXIuc2hvd1RlbXBsYXRlKCR0YXJnZXQsIFBvcG92ZXIudGVtcGxhdGVQcmV2aWV3KGZpbGVEb3dubG9hZExpbmspKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50TGluayA9IHRoaXMuZG9jdW1lbnRMaW5rICsgYC8ke2ZpbGVJZH1gO1xyXG5cclxuICAgICAgICAgICAgUGRmLmNvbnZlcnRQZGZUb0ltZ0Jhc2U2NChkb2N1bWVudExpbmspLnRoZW4oaW1nQmFzZTY0ID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWdCYXNlNjQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5maW5kKCcuaW1nJykuaHRtbChgPGltZy8+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCBpbWdCYXNlNjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kLm5vQ29uZmxpY3QoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2NyaXB0c1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbGVjdG9yOiBzdHJpbmcpe31cclxuXHJcbiAgICBwdWJsaWMgcnVuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoYCMke3RoaXMuc2VsZWN0b3J9YCkuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlcigkZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyKCRmb3JtOkpRdWVyeSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlckZvcklucHV0cygkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWRhdGV0aW1lXScpKTtcclxuICAgICAgICB0aGlzLnNldERhdGVQaWNrZXJGb3JJbnB1dHMoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyRm9ySW5wdXRzKCRpbnB1dHM6IEpRdWVyeSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkaW5wdXRzWzBdKTtcclxuXHJcbiAgICAgICAgJGlucHV0cy5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImJvdHRvbSBsZWZ0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgICAgbGVmdEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1sZWZ0XCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICByaWdodEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1yaWdodFwiPjwvaT4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL3hoclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmdDb25zdGFudHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2luZ2xlVG9uZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wZGZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wb3ZlclwiOyIsImltcG9ydCAqIGFzIHBkZmpzbGliIGZyb20gJ3BkZmpzLWRpc3QnO1xyXG5pbXBvcnQgeyBQREZKU1N0YXRpYyB9IGZyb20gJ3BkZmpzLWRpc3QnO1xyXG5jb25zdCBQREZKUyA9ICg8YW55PnBkZmpzbGliKSBhcyBQREZKU1N0YXRpYztcclxuXHJcblBERkpTLmRpc2FibGVXb3JrZXIgPSB0cnVlO1xyXG4vLyBUT0RPOiB1cmxcclxuUERGSlNbJ0dsb2JhbFdvcmtlck9wdGlvbnMnXS53b3JrZXJTcmMgPSAnL2xpYi9wZGYtanMvcGRmLndvcmtlci5taW4uanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBkZlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRQZGZUb0ltZ0Jhc2U2NChkb2N1bWVudExpbms6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUERGSlMuZ2V0RG9jdW1lbnQoZG9jdW1lbnRMaW5rKS50aGVuKHBkZiA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZGYuZ2V0UGFnZSgxKS50aGVuKChwYWdlKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gcGFnZS5nZXRWaWV3cG9ydChzY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlckNvbnRleHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQ6IGN0eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQ6IHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5yZW5kZXIocmVuZGVyQ29udGV4dCkudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ1NyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWdTcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgJ3N0YXR1cycgaW4gZXJyb3IgJiYgZXJyb3Iuc3RhdHVzID09PSA0MDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyXHJcbntcclxuICAgIHByaXZhdGUgJHRhcmdldHM6IEpRdWVyeTxFdmVudFRhcmdldD5bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGVtcGxhdGVQcmV2aWV3KGZpbGVEb3dubG9hZExpbms6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IHByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLXNtXCIgaHJlZj1cIiR7ZmlsZURvd25sb2FkTGlua31cIj5Eb3dubG9hZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGVtcGxhdGVFZGl0SWNvbigpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICQoYDxkaXYgY2xhc3M9XCJjb250ZW50IGVkaXQtbm90ZVwiPjxpIGNsYXNzPVwiZmxhdGljb24tZWRpdC0xXCI+PC9pPjwvZGl2PmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZyhjYWxsYmFjaz86ICgkdGFyZ2V0OiBKUXVlcnk8RXZlbnRUYXJnZXQ+KSA9PiB2b2lkKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9uKCdtb3VzZWVudGVyJywgKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKDxhbnk+ZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRzLnB1c2goJHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCR0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9uKCdtb3VzZWxlYXZlJywgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUZW1wbGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VGVtcGxhdGUoJHRhcmdldDogSlF1ZXJ5PEV2ZW50VGFyZ2V0PiwgdGVtcGxhdGU6IHN0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgJHRhcmdldFxyXG4gICAgICAgICAgICAuYXBwZW5kKHRlbXBsYXRlKVxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oJzpsYXN0JylcclxuICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAuZmFkZUluKDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVRlbXBsYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLiR0YXJnZXRzLmZvckVhY2goJHRhcmdldCA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbignOmxhc3QnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24odGhpczogYW55KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kdGFyZ2V0cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnN0YW5jZXNDb250YWluZXJcclxue1xyXG4gICAgcHJpdmF0ZSBpbnN0YW5jZXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGluc3RhbmNlKG5hbWU6IHN0cmluZyk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3QgPSB0aGlzLmluc3RhbmNlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEluc3RhbmNlIHdpdGggbmFtZSAnJHtuYW1lfScgd2FzIG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRTZXJ2aWNlKG5hbWU6c3RyaW5nLCBmdW5jOigpID0+IGFueSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0ID0gdGhpcy5pbnN0YW5jZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghaW5zdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW25hbWVdID0gZnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbmdsZVRvbmVCYXNlXHJcbntcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2VzQ29udGFpbmVyOiBJbnN0YW5jZXNDb250YWluZXIgPSBuZXcgSW5zdGFuY2VzQ29udGFpbmVyKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdFNlcnZpY2UobmFtZTogc3RyaW5nLCBmdW5jOiAoKSA9PiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250YWluZXIuaW5pdFNlcnZpY2UobmFtZSwgZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZShuYW1lOiBzdHJpbmcpOiBhbnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNDb250YWluZXIuaW5zdGFuY2UobmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0NvbnN0YW50XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGF0ZUZvcm1hdCA9IFwiREQvTU0vWVlZWVwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGF0ZVJhbmdlRmlsdGVyU3RhcnRHcm91cE5hbWUgPSBcInN0YXJ0RmlsdGVyXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRhdGVSYW5nZUZpbHRlckVuZEdyb3VwTmFtZSA9IFwiZW5kRmlsdGVyXCI7XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFhoclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RIdG1sKHR5cGU6IFwiUE9TVFwiIHwgXCJHRVRcIiB8IFwiUFVUXCIsIHVybDogc3RyaW5nLCByZXF1ZXN0OiBhbnksIHJlc3BvbnNlQWN0aW9uOiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3QodHlwZSwgdXJsLCAnSFRNTCcsIHJlcXVlc3QsIHJlc3BvbnNlQWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RKc29uKHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSwgcmVzcG9uc2VBY3Rpb246IChyZXNwb25zZTogYW55KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdCh0eXBlLCB1cmwsICdqc29uJywgcmVxdWVzdCwgcmVzcG9uc2VBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdCh0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhVHlwZTogJ0hUTUwnIHwgJ2pzb24nLCByZXF1ZXN0OiBhbnksIHJlc3BvbnNlQWN0aW9uOiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IGRhdGFUeXBlLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQWN0aW9uKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6ICh4aHIsIHN0YXR1cywgZXJyb3IpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL1RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWGhyIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcEZpbGVVcGxvYWRlclxyXG57XHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZTtcclxuICAgIHByaXZhdGUgcG9zdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc3RVcmw6IHN0cmluZywgc2VydmljZTogVGFibGVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wb3N0VXJsID0gcG9zdFVybDtcclxuXHJcbiAgICAgICAgJChcImh0bWxcIikub24oXCJkcmFnb3ZlclwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihldmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZHJhZ2dpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCJodG1sXCIpLm9uKFwiZHJhZ2xlYXZlXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcmFnZ2luZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcImh0bWxcIikub24oXCJkcm9wXCIsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7dGhpcy5zZXJ2aWNlLmNvbnRhaW5lck5hbWV9IHRyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIocm93OiBIVE1MRWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBjb25zdCByb3ckID0gJChyb3cpO1xyXG5cclxuICAgICAgICByb3ckLm9uKCdkcmFnb3ZlcicsIGZhbHNlKVxyXG4gICAgICAgICAgICAub24oJ2Ryb3AnLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZFZhbCA9IHJvdyQuZGF0YShcImlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRWYWwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gKGV2ZW50Lm9yaWdpbmFsRXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFuc2FjdGlvbklkJywgaWRWYWwpOyAvL3RvZG8gaGFyZGNvZGVkIHZhbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YShmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHJpdmF0ZSBzZW5kRGF0YShmb3JtRGF0YTogRm9ybURhdGEpOiB2b2lkXHJcbiAgICAvL3tcclxuICAgIC8vICAgIFhoci5yZXF1ZXN0KFwiUE9TVFwiLCB0aGlzLnBvc3RVcmwsIFwianNvblwiLCBmb3JtRGF0YSwgKCkgPT4gdGhpcy5zZXJ2aWNlLnJlZnJlc2goKSk7XHJcbiAgICAvL31cclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhKGZvcm1EYXRhOiBGb3JtRGF0YSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucG9zdFVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhIGFzIGFueSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgWGhyIH0gZnJvbSAnLi4vY29tbW9uL3hocic7XHJcblxyXG5cclxuY2xhc3MgRHJvcGRvd25MaXN0SXRlbVxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpc3RlbihtYWluRHJvcGRvd25TZWxlY3Rvcjogc3RyaW5nLCBjaGlsZERyb3Bkb3duU2VsZWN0b3I6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtYWluRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKGAjJHttYWluRHJvcGRvd25TZWxlY3Rvcn1gKTtcclxuICAgICAgICBjb25zdCBjaGlsZERyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChgIyR7Y2hpbGREcm9wZG93blNlbGVjdG9yfWApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKG1haW5Ecm9wZG93bikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihtYWluRHJvcGRvd24sIGNoaWxkRHJvcGRvd24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbkRyb3Bkb3duLm9uKFwiY2hhbmdlXCIsIChldmVudDogYW55KSA9PiB0aGlzLnJlbmRlcihtYWluRHJvcGRvd24sIGNoaWxkRHJvcGRvd24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlcihtYWluRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4sIGNoaWxkRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWFpblNlbGVjdGVkSWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShtYWluRHJvcGRvd24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFhoci5yZXF1ZXN0SnNvbihcIlBPU1RcIiwgYCR7dGhpcy51cmx9LyR7bWFpblNlbGVjdGVkSWR9YCwge30sIChpdGVtczogRHJvcGRvd25MaXN0SXRlbVtdKSA9PiB0aGlzLnBvcHVsYXRlRHJvcGRvd24oY2hpbGREcm9wZG93biwgaXRlbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvcHVsYXRlRHJvcGRvd24oZHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4sIGl0ZW1zOiBEcm9wZG93bkxpc3RJdGVtW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShkcm9wZG93bik7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZCh0aGlzLmNyZWF0ZUVtcHR5T3B0aW9uKCkpO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCh4OiBEcm9wZG93bkxpc3RJdGVtKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkOiBib29sZWFuID0geC5pZCA9PSBpZDsgLy8geWVzIEkgbmVlZCA9PSEhXHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQodGhpcy5jcmVhdGVPcHRpb24oeC5uYW1lLCB4LmlkLCBzZWxlY3RlZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShkcm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkcm9wZG93bi52YWwoKSBhcyBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFbXB0eU9wdGlvbigpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIpLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKS50ZXh0KFwiLS1TZWxlY3QgVmFsdWUtLVwiKTsgLy90b2RvIHVzZSB2YWx1ZSBmcm9tIHN0cmluZyBjb25zdGFudHNcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU9wdGlvbih0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2UpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIpLmF0dHIoXCJ2YWx1ZVwiLCB2YWx1ZSkudGV4dCh0ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL2NvbW1vblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcm9wZG93blNlcnZpY2UvZHJvcGRvd25TZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0VuZEJhbGFuY2VTZXJ2aWNlL0VuZEJhbGFuY2VTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RhbFNlcnZpY2UvbW9kYWxTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZXNQcmV2aWV3U2VydmljZS9maWxlc1ByZXZpZXdTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXROb3RlU2VydmljZS9lZGl0Tm90ZVNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2UvZWRpdFByb2plY3RBbmRDYXRlZ29yeVNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRm9ybVNjcmlwdHMvZm9ybVNjcmlwdHNcIjsiLCJpbXBvcnQge1xyXG4gICAgTWFueVRvTWFueVJlbGF0aW9uUmVxdWVzdCxcclxuICAgIE1hbnlUb01hbnlTYXZlVmlld01vZGVsLFxyXG4gICAgTWFueVRvTWFueVNhdmVBY3Rpb25cclxufSBmcm9tICcuL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBYaHIgfSBmcm9tICcuLi9jb21tb24veGhyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgY29udGFpbmVyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgbGVmdEVudGl0eUlkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnRFbnRpdHlJZDogbnVtYmVyLCBjb250YWluZXJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGVmdEVudGl0eUlkID0gbGVmdEVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsbHlDaGVja2VkOiBzdHJpbmcgW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zVG9BZGQ6IE1hbnlUb01hbnlTYXZlVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zVG9EZWxldGU6IE1hbnlUb01hbnlTYXZlVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGVja2JveChzZWxlY3Rvcjogc3RyaW5nLCBpZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSAkKGAjJHtzZWxlY3Rvcn1gKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrQm94LmlzKFwiOmNoZWNrZWRcIikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxseUNoZWNrZWQucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja0JveC5jaGFuZ2UoKGUpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tCb3guaXMoXCI6Y2hlY2tlZFwiKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxseUNoZWNrZWQuZmluZCh4ID0+IHggPT09IHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRJdGVtID0gdGhpcy5pdGVtc1RvRGVsZXRlLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZWRJdGVtKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtc1RvRGVsZXRlLmluZGV4T2YoZGVsZXRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNUb0RlbGV0ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGx5Q2hlY2tlZC5maW5kKHggPT4geCA9PT0gc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsSXRlbShpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkZWRJdGVtID0gdGhpcy5pdGVtc1RvQWRkLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkSXRlbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXNUb0FkZC5pbmRleE9mKGFkZGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1RvQWRkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJQT1NUXCIsIHRoaXMudXJsLCByZXF1ZXN0LCByZXNwb25zZSA9PiAkKGAjJHt0aGlzLmNvbnRhaW5lck5hbWV9YCkuaHRtbChyZXNwb25zZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkSXRlbShpZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTWFueVRvTWFueVNhdmVWaWV3TW9kZWwoaWQsIE1hbnlUb01hbnlTYXZlQWN0aW9uLkFkZCk7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvQWRkLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxJdGVtKGlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbChpZCwgTWFueVRvTWFueVNhdmVBY3Rpb24uRGVsZXRlKTtcclxuICAgICAgICB0aGlzLml0ZW1zVG9EZWxldGUucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3QoKSA6IE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3RcclxuICAgIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3QodGhpcy5sZWZ0RW50aXR5SWQpO1xyXG4gICAgICAgIHJlcXVlc3QuaXRlbXMgPSByZXF1ZXN0Lml0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zVG9BZGQpO1xyXG4gICAgICAgIHJlcXVlc3QuaXRlbXMgPSByZXF1ZXN0Lml0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zVG9EZWxldGUpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVJlbGF0aW9uUmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgbGVmdEVudGl0eUlkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVmdEVudGl0eUlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sZWZ0RW50aXR5SWQgPSBsZWZ0RW50aXR5SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFxyXG57XHJcbiAgICBwdWJsaWMgYWN0aW9uOiBNYW55VG9NYW55U2F2ZUFjdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBhY3Rpb246IE1hbnlUb01hbnlTYXZlQWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFueVRvTWFueVNhdmVBY3Rpb25cclxue1xyXG4gICAgQWRkID0gMSxcclxuICAgIERlbGV0ZSA9IDJcclxufSIsImltcG9ydCB7IFhociB9IGZyb20gJy4uL2NvbW1vbi94aHInO1xyXG5cclxuXHJcbmludGVyZmFjZSBJTW9kYWxPcHRpb25zXHJcbntcclxuICAgIGJhY2tkcm9wOiBib29sZWFuO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW47XHJcbiAgICBmb2N1czogYm9vbGVhbjtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBtb2RhbDogSlF1ZXJ5O1xyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBKUXVlcnk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBJTW9kYWxPcHRpb25zID0ge1xyXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlLFxyXG4gICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZGFsSWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gJChgIyR7bW9kYWxJZH1gKTtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dQYWdlKHVybDogc3RyaW5nID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNob3dQYWdlSW50ZXJuYWwodXJsLCBcIlRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlUGFnZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlckJ1dHRvbihidXR0b25JZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBidXR0b24gPSAkKGAjJHtidXR0b25JZH1gKTtcclxuICAgICAgICB2YXIgdXJsID0gYnV0dG9uLmF0dHIoJ3VybCcpO1xyXG4gICAgICAgIHZhciBpc0FjdGlvbmxpbmsgPSBidXR0b24uYXR0cignaXNBY3Rpb25saW5rJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5vbignY2xpY2snLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2VJbnRlcm5hbCh1cmwsIGlzQWN0aW9ubGluayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1BhZ2VJbnRlcm5hbCh1cmw6IHN0cmluZywgaXNBY3Rpb25saW5rOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzQWN0aW9ubGluayA9PT0gJ1RydWUnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHVybClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudCh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3coKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICh0aGlzLm1vZGFsIGFzIGFueSkubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRDb250ZW50KHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyQ2xhc3M6IHN0cmluZyA9ICdjbGVhcl9pbnB1dCc7XHJcbiAgICAgICAgY29uc3QgZm9jdXNBZnRlckNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBsaW5rVGV4dDogc3RyaW5nID0gJyZ0aW1lczsnO1xyXG5cclxuICAgICAgICBjb25zdCBkaXZDbGFzcyA9IGNsZWFyQ2xhc3MgKyAnX2Rpdic7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmICghJHRoaXMucGFyZW50KCkuaGFzQ2xhc3MoZGl2Q2xhc3MpKSB7XHJcbiAgICAgICAgICAgICR0aGlzLndyYXAoYDxkaXYgc3R5bGU9J3Bvc2l0aW9uOiByZWxhdGl2ZTsnIGNsYXNzPScke2RpdkNsYXNzfSc+JHskdGhpcy5odG1sKCl9PC9kaXY+YCk7XHJcblxyXG4gICAgICAgICAgICAkdGhpcy5hZnRlcihcclxuICAgICAgICAgICAgICAgIGA8YSBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyBjdXJzb3I6IHBvaW50ZXI7JyBjbGFzcz0nJHtjbGVhckNsYXNzfSc+JHtsaW5rVGV4dH08L2E+YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuID0gJHRoaXMubmV4dCgpOyBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICAgICAgJHRoaXMudmFsKCcnKS5jaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXJCdG4oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb2N1c0FmdGVyQ2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyQnRuKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRIYXNUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcGx5QnV0dG9uQ3NzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbnB1dEhhc1RleHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkdGhpcy52YWwoKS50b1N0cmluZygpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlCdXR0b25Dc3MoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJHRoaXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkdGhpcy5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgYnRuLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIgLSBidG4uaGVpZ2h0KCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogd2lkdGggLSBidG4ud2lkdGgoKSAtIDEwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLm9uKCdjbGljaycsIGNsZWFyRmllbGQpO1xyXG4gICAgICAgICR0aGlzLm9uKCdrZXl1cCBrZXlkb3duIGNoYW5nZSBmb2N1cycsIHRyaWdnZXJCdG4pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50IGFzIGFueSkucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQnRuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaCgpXHJcbntcclxuICAgIFxyXG59IiwiaW1wb3J0IHsgSVRhYmxlRmlsdGVyQ3JlYXRvciwgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbEZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5ib29sZWFuRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLmJvb2xGaWx0ZXIoZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICBpbnB1dCQudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0JC5jaGFuZ2UoZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gaW5wdXQkLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5ib29sRmlsdGVyKGZpZWxkSWQsIHZhbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJWYWx1ZUF0dHJpYnV0ZSA9ICdmaWx0ZXItdmFsdWUnO1xyXG5leHBvcnQgY29uc3QgZmlsdGVyRmllbGRJZEF0dHJpYnV0ZSA9ICdmaWVsZC1pZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTphbnlcclxue1xyXG4gICAgcmV0dXJuIGlucHV0JC5kYXRhKGZpbHRlclZhbHVlQXR0cmlidXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlckZpZWxkSWQoaW5wdXQkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTphbnlcclxue1xyXG4gICAgcmV0dXJuIGlucHV0JC5kYXRhKGZpbHRlckZpZWxkSWRBdHRyaWJ1dGUpO1xyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBJUmFuZ2VGaWx0ZXJDcmVhdG9yIH0gZnJvbSAnLi9maWx0ZXJzQ29tbW9uJztcclxuaW1wb3J0IHsgU3RyaW5nQ29uc3RhbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdkYXRlcmFuZ2VwaWNrZXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQ3JlYXRvciAvL2ltcGxlbWVudHMgSVJhbmdlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLmRhdGVSYW5nZUZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlOiBzdHJpbmcgPSBpbnB1dCQuZGF0YSgnZmlsdGVyLXN0YXJ0LXZhbHVlJyk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlOiBzdHJpbmcgPSBpbnB1dCQuZGF0YSgnZmlsdGVyLWVuZC12YWx1ZScpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnQ6IG1vbWVudC5Nb21lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBsZXQgZW5kOiBtb21lbnQuTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChzdGFydERhdGVWYWx1ZSAmJiBlbmREYXRlVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGFydCA9IG1vbWVudChzdGFydERhdGVWYWx1ZSwgU3RyaW5nQ29uc3RhbnQuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgIGVuZCA9IG1vbWVudChlbmREYXRlVmFsdWUsIFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQkLnZhbChzdGFydERhdGVWYWx1ZSArICcgLSAnICsgZW5kRGF0ZVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVycyhzZXJ2aWNlLCBmaWVsZElkLCBzdGFydERhdGVWYWx1ZSwgZW5kRGF0ZVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKTtcclxuICAgICAgICAgICAgZW5kID0gbW9tZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9ucyhzdGFydCwgZW5kKTtcclxuXHJcbiAgICAgICAgaW5wdXQkLnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSk7XHJcbiAgICAgICAgaW5wdXQkLmNzcyh7IFwibWluLXdpZHRoXCI6IFwiMTc1cHhcIiB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLmRhdGVyYW5nZXBpY2tlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZXYsIHBpY2tlcikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gcGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoU3RyaW5nQ29uc3RhbnQuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGlja2VyLmVuZERhdGUuZm9ybWF0KFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0JC52YWwoc3RhcnREYXRlICsgJyAtICcgKyBlbmREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoc2VydmljZSwgZmllbGRJZCwgc3RhcnREYXRlLCBlbmREYXRlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdjYW5jZWwuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGV2LCBwaWNrZXIpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlucHV0JC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIGZpZWxkSWQ6IHN0cmluZywgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoVGFibGVGaWx0ZXIuc3RhcnREYXRlRmlsdGVyKGZpZWxkSWQsIHN0YXJ0KSk7XHJcbiAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoVGFibGVGaWx0ZXIuZW5kRGF0ZUZpbHRlcihmaWVsZElkLCBlbmQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVPcHRpb25zKHN0YXJ0PzogbW9tZW50Lk1vbWVudCwgZW5kPzogbW9tZW50Lk1vbWVudCk6IE9wdGlvbnNcclxuICAgIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmREYXRlOiBlbmQsXHJcbiAgICAgICAgICAgIGF1dG9VcGRhdGVJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJhbmdlczoge1xyXG4gICAgICAgICAgICAgICAgJ1RvZGF5JzogW21vbWVudCgpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxyXG4gICAgICAgICAgICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBidXR0b25DbGFzc2VzOiBbJ20tYnRuIGJ0biddLFxyXG4gICAgICAgICAgICBhcHBseUJ1dHRvbkNsYXNzZXM6ICdidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzZXM6ICdidG4tc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogJ0NsZWFyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVGFibGVGaWx0ZXJDcmVhdG9yLCBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudW1GaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuZW51bUZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5lbnVtRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCQuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0JC5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZW51bUZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nRmlsdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VudW1GaWx0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSAnLi92YWx1ZU9iamVjdEZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vbnVtYmVyRmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ib29sRmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYXRlUmFuZ2UnOyIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlckZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5udW1iZXJGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIubnVtYmVyRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoaW5wdXQkIGFzIGFueSkuY2xlYXJTZWFyY2goKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCBpbnB1dCQudmFsKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDbGVhclNlYXJjaCB9IGZyb20gXCIuLi9jbGVhclNlYXJjaFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0ZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5zdHJpbmdGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuc3RyaW5nRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDbGVhclNlYXJjaC5yZWdpc3RlcihpbnB1dCwgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLnN0cmluZ0ZpbHRlcihmaWVsZElkLCBpbnB1dCQudmFsKCkudG9TdHJpbmcoKS5yZXBsYWNlKCdcXFxcJywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElUYWJsZUZpbHRlckNyZWF0b3IsIFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlT2JqZWN0RmlsdGVyQ3JlYXRvciAvL2ltcGxlbWVudHMgSVRhYmxlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLnZhbHVlT2JqZWN0RmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIGlucHV0JC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQkLmNoYW5nZShlID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpbnB1dCQuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbnRhaW5lclxyXG57XHJcbiAgICBwcml2YXRlIGNoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQWN0aW9uOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNoZWNrQm94OiBIVE1MSW5wdXRFbGVtZW50LCBjaGFuZ2VBY3Rpb246ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbiA9IGNoYW5nZUFjdGlvbjtcclxuXHJcbiAgICAgICAgJChjaGVja0JveCkuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NlbGVjdGVkKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0JveC5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb3dJZCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzLmNoZWNrQm94KS5jbG9zZXN0KCd0cicpLmRhdGEoJ2lkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3dzU2VsZWN0TWFuYWdlclxyXG57XHJcbiAgICBwdWJsaWMgb25TZWxlY3RlZFJvd3M6IFN1YmplY3Q8bnVtYmVyW10+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcnM6IENoZWNrQm94Q29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGRvRW1pdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyU2VsZWN0b3I6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgY2hlY2tCb3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJChgIyR7Y29udGFpbmVyU2VsZWN0b3J9IC5yb3ctc2VsZWN0YCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tCb3hlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKG5ldyBDaGVja0JveENvbnRhaW5lcihjaGVja0JveGVzW2ldLCAoKSA9PiB0aGlzLmNoYW5nZUFjdGlvbigpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGAjJHtjb250YWluZXJTZWxlY3Rvcn0gLnRhYmxlU2VsZWN0QWxsYCkub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgKGV2ZW50OiBFdmVudCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGAjJHtjb250YWluZXJTZWxlY3Rvcn0gLnRhYmxlRGVzZWxlY3RBbGxgKS5vbignY2xpY2snLFxyXG4gICAgICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdEFsbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0VtaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuZm9yRWFjaCh4ID0+IHguc2V0KCkpO1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRBbGwoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzLmZvckVhY2goeCA9PiB4LnJlc2V0KCkpO1xyXG4gICAgICAgIHRoaXMuZG9FbWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQWN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kb0VtaXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpZHM6IG51bWJlcltdID0gdGhpcy5jb250YWluZXJzLmZpbHRlcih4ID0+IHguaXNTZWxlY3RlZCgpKS5tYXAoeCA9PiB4LmdldFJvd0lkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRSb3dzLm5leHQoaWRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gJy4uL3RhYmxlU2VydmljZUNvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gJy4vc29ydENvbW1vbic7XHJcbmltcG9ydCB7IFRhYmxlT3JkZXIgfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBTb3J0SW5mbyB9IGZyb20gJy4uL3RhYmxlU2VydmljZUNvbW1vbic7XHJcbmltcG9ydCB7IGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi4vZmlsdGVycy9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0Q3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzY0NsYXNzOiBzdHJpbmcgPSAnYXNjU29ydCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2NDbGFzczogc3RyaW5nID0gJ2Rlc2NTb3J0JztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyU29ydHMoc2VydmljZTogVGFibGVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGxhYmVscyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC50YWJsZVNvcnRgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYWJlbHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclNvcnQobGFiZWxzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyU29ydChsYWJlbDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBsYWJsZSQgPSAkKGxhYmVsKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChsYWJsZSQpO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKGxhYmxlJCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvcnQgPSBuZXcgVGFibGVPcmRlcihmaWVsZElkKTtcclxuICAgICAgICBcclxuICAgICAgICBsYWJsZSQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgIGxhYmxlJC53cmFwKGA8ZGl2IGNsYXNzPSdub3NlbGVjdCcgc3R5bGU9J2N1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleCc+PC9kaXY+YCk7XHJcbiAgICAgICAgbGFibGUkLmFmdGVyKGA8ZGl2IGFycm93UGFsY2Vob2xkZXIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4XCI+PC9kaXY+YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciQgPSBsYWJsZSQucGFyZW50KCk7XHJcbiAgICAgICAgY29uc3QgYXJyb3dDb250YWluZXIkID0gY29udGFpbmVyJC5jaGlsZHJlbignW2Fycm93UGFsY2Vob2xkZXJdJyk7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzczogc3RyaW5nID0gZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5Bc2MgPyBTb3J0Q3JlYXRvci5hc2NDbGFzcyA6IFNvcnRDcmVhdG9yLmRlc2NDbGFzcztcclxuICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKGNzc0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0U29ydCh7IGZpZWxkSWQ6IGZpZWxkSWQsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihmaWVsZElkLCBhcnJvd0NvbnRhaW5lciQsIHNlcnZpY2UpO1xyXG5cclxuICAgICAgICBjb250YWluZXIkLm9uKCdjbGljaycsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycm93Q29udGFpbmVyJC5oYXNDbGFzcyhTb3J0Q3JlYXRvci5hc2NDbGFzcykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLnJlbW92ZUNsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJyb3dDb250YWluZXIkLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLnJlbW92ZUNsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIkLmFkZENsYXNzKFNvcnRDcmVhdG9yLmRlc2NDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQuZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uRGVzYztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydFNvcnQoc29ydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGZpZWxkSWQ6IHN0cmluZywgYXJyb3dDb250YWluZXI6IEpRdWVyeSwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFycm93Q29udGFpbmVyLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIuaGFzQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dDb250YWluZXIucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IFNvcnRJbmZvID0ge1xyXG4gICAgICAgICAgICBmaWVsZElkOiBmaWVsZElkLFxyXG4gICAgICAgICAgICBjYWxsQmFjazogcmVzZXRDYWxsYmFja1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJTb3J0KGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldERpcmVjdGlvbihsYWJlbCQ6SlF1ZXJ5KTogT3JkZXJEaXJlY3Rpb24gfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsJC5kYXRhKFwic29ydC1kaXJlY3Rpb25cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgICBUYWJsZUZpbHRlcixcclxuICAgIFRhYmxlT3JkZXIsXHJcbiAgICBUYWJsZVJlcXVlc3QsXHJcbiAgICBTb3J0SW5mb1xyXG59IGZyb20gJy4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHtcclxuICAgIFN0cmluZ0ZpbHRlckNyZWF0b3IsXHJcbiAgICBFbnVtRmlsdGVyQ3JlYXRvcixcclxuICAgIFZhbHVlT2JqZWN0RmlsdGVyQ3JlYXRvcixcclxuICAgIE51bWJlckZpbHRlckNyZWF0b3IsXHJcbiAgICBCb29sRmlsdGVyQ3JlYXRvcixcclxuICAgIERhdGVSYW5nZUNyZWF0b3JcclxufSBmcm9tICcuL2ZpbHRlcnMnO1xyXG5pbXBvcnQgeyBYaHIsIFNpbmdsZVRvbmVCYXNlIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHsgU29ydENyZWF0b3IgfSBmcm9tICcuL3NvcnQvc29ydENyZWF0b3InO1xyXG5pbXBvcnQgeyBSb3dzU2VsZWN0TWFuYWdlciB9IGZyb20gJy4vcm93c1NlbGVjdC9yb3dzU2VsZWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTaW5nbGVUb25lQmFzZVxyXG57XHJcbiAgICBwdWJsaWMgb25GaWx0ZXJUYWJsZTogU3ViamVjdDxUYWJsZVJlcXVlc3Q+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBwdWJsaWMgY29udGFpbmVyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGZpbHRlcnM6IFRhYmxlRmlsdGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHNvcnRzOiBUYWJsZU9yZGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHNvcnRzSW5mbzogU29ydEluZm9bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyByb3dzU2VsZWN0TWFuYWdlcjogUm93c1NlbGVjdE1hbmFnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcmVmcmVzaFVybDogc3RyaW5nLCBpdGVtc1BlclBhZ2U6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXJsID0gcmVmcmVzaFVybDtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdUb0V2ZW50cygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgU3RyaW5nRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgTnVtYmVyRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgRGF0ZVJhbmdlQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgVmFsdWVPYmplY3RGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBCb29sRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcbiAgICAgICAgRW51bUZpbHRlckNyZWF0b3IucmVnaXN0ZXJGaWx0ZXJzKHRoaXMpO1xyXG5cclxuICAgICAgICBTb3J0Q3JlYXRvci5yZWdpc3RlclNvcnRzKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJvd3NTZWxlY3RNYW5hZ2VyID0gbmV3IFJvd3NTZWxlY3RNYW5hZ2VyKHRoaXMuY29udGFpbmVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2goKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIkdFVFwiLCB0aGlzLnJlZnJlc2hVcmwsIHt9LCByZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgbnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cHNlcnRGaWx0ZXIoZmlsdGVyOiBUYWJsZUZpbHRlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbHRlckluZGV4KGZpbHRlci5maWVsZElkLCBmaWx0ZXIuZ3JvdXApO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCAwICYmIGZpbHRlci52YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci52YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpbmRleCwgMSwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZmllbGQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnMuZmlsdGVyKHggPT4geC5maWVsZElkICE9IGZpZWxkICYmIHguZ3JvdXAgPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyU29ydChpbmZvOiBTb3J0SW5mbylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvcnRzSW5mby5wdXNoKGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cHNlcnRTb3J0KHNvcnQ6IFRhYmxlT3JkZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zb3J0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBpZiAoc29ydC5kaXJlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRzLnB1c2goc29ydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvcnRzSW5mby5maWx0ZXIoeCA9PiB4LmZpZWxkSWQgIT09IHNvcnQuZmllbGRJZCkuZm9yRWFjaCh4ID0+IHguY2FsbEJhY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbHRlckRhdGEoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmdldFRhYmxlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJQT1NUXCIsIHRoaXMuZmlsdGVyVXJsLCByZXF1ZXN0LCByZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgcmVxdWVzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGVSZXF1ZXN0KCk6IFRhYmxlUmVxdWVzdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMuZmlsdGVyKHggPT4geC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzID0gdGhpcy5zb3J0cy5maWx0ZXIoeCA9PiB4LmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXHJcbiAgICAgICAgICAgIG9yZGVyczogb3JkZXJzLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55LCByZXF1ZXN0OiBUYWJsZVJlcXVlc3QgPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5vbkZpbHRlclRhYmxlLm5leHQocmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlc2V0U2VydmljZSgpO1xyXG5cclxuICAgICAgICAkKGAjJHt0aGlzLmNvbnRhaW5lck5hbWV9YCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFNlcnZpY2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc29ydHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvcnRzSW5mbyA9IFtdO1xyXG4gICAgICAgIC8vdGhpcy5vbkZpbHRlclRhYmxlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJJbmRleChmaWVsZDogc3RyaW5nLCBncm91cE5hbWU6IHN0cmluZyA9IG51bGwpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0ZpbHRlciA9XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5maW5kKHggPT4geC5maWVsZElkID09PSBmaWVsZCAmJiAoZ3JvdXBOYW1lID09IG51bGwgfHwgeC5ncm91cCA9PT0gZ3JvdXBOYW1lKSk7XHJcblxyXG4gICAgICAgIGlmICghZXhpc3RpbmdGaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmluZGV4T2YoZXhpc3RpbmdGaWx0ZXIpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgdHlwZSBUYWJsZUNvbHVtblR5cGUgPSAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2VudW0nIHwgJ2N1cnJlbmN5JztcclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlRmlsdGVyT3BlcmF0b3Jcclxue1xyXG4gICAgRXF1YWwgPSAwLFxyXG4gICAgTm90RXF1YWwgPSAxLFxyXG4gICAgU3RhcnRzV2l0aCA9IDIsXHJcbiAgICBDb250YWlucyA9IDMsXHJcbiAgICBEb2VzTm90Q29udGFpbiA9IDQsXHJcbiAgICBFbmRzV2l0aCA9IDUsXHJcbiAgICBHcmVhdGVyVGhhbk9yRXF1YWwgPSA2LFxyXG4gICAgR3JlYXRlclRoYW4gPSA3LFxyXG4gICAgTGVzc1RoYW5PckVxdWFsID0gOCxcclxuICAgIExlc3NUaGFuID0gOVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJcclxue1xyXG4gICAgcHVibGljIGdyb3VwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZW5jcnlwdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmllbGRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IFRhYmxlQ29sdW1uVHlwZTtcclxuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xyXG4gICAgcHVibGljIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogVGFibGVDb2x1bW5UeXBlLFxyXG4gICAgICAgIHZhbHVlPzogYW55LFxyXG4gICAgICAgIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRoaXMuZW5jcnlwdGVkLFxyXG4gICAgICAgICAgICBmaWVsZElkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLm9wZXJhdG9yXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0cmluZ0ZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdzdHJpbmcnLCB2YWwudHJpbSgpLCBUYWJsZUZpbHRlck9wZXJhdG9yLkNvbnRhaW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvb2xGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUZpbHRlcihmaWxlZElkLCAnYm9vbGVhbicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbnVtRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ2VudW0nLCB2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ251bWJlcicsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcsIG9wZXJhdG9yOiBUYWJsZUZpbHRlck9wZXJhdG9yID0gVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbCk6XHJcbiAgICAgICAgVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdkYXRlJywgdmFsLCBvcGVyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydERhdGVGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZGF0ZUZpbHRlcihmaWxlZElkLCB2YWwsIFRhYmxlRmlsdGVyT3BlcmF0b3IuR3JlYXRlclRoYW5PckVxdWFsKTtcclxuICAgICAgICBmaWx0ZXIuZ3JvdXAgPSBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZW5kRGF0ZUZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5kYXRlRmlsdGVyKGZpbGVkSWQsIHZhbCwgVGFibGVGaWx0ZXJPcGVyYXRvci5MZXNzVGhhbk9yRXF1YWwpO1xyXG4gICAgICAgIGZpbHRlci5ncm91cCA9IGNyZWF0ZUVuZERhdGVGaWx0ZXJHcm91cChmaWxlZElkKTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvblxyXG57XHJcbiAgICBBc2MgPSAxLFxyXG4gICAgRGVzYyA9IDJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlT3JkZXJcclxue1xyXG4gICAgcHVibGljIGZpZWxkSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXJlY3Rpb24/OiBPcmRlckRpcmVjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZElkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maWVsZElkID0gZmllbGRJZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgZmlsdGVyczogVGFibGVGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvcmRlcnM6IFRhYmxlT3JkZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRJbmZvXHJcbntcclxuICAgIHB1YmxpYyBmaWVsZElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2FsbEJhY2s6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWU6IHN0cmluZyA9IFwic3RhcnRGaWx0ZXJcIjtcclxuY29uc3QgZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWU6IHN0cmluZyA9IFwiZW5kRmlsdGVyXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGFydERhdGVGaWx0ZXJHcm91cChmaWVsZElkOiBzdHJpbmcpXHJcbntcclxuICAgIHJldHVybiBgJHtmaWVsZElkfV8ke2RhdGVSYW5nZUZpbHRlclN0YXJ0RGF0ZU5hbWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW5kRGF0ZUZpbHRlckdyb3VwKGZpZWxkSWQ6IHN0cmluZylcclxue1xyXG4gICAgcmV0dXJuIGAke2ZpZWxkSWR9XyR7ZGF0ZVJhbmdlRmlsdGVyRW5kRGF0ZU5hbWV9YDtcclxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=