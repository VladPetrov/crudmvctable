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
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            let filename = "export.pdf";
            let disposition = xhttp.getResponseHeader('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, '');
                }
            }
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const downloadUrl = window.URL.createObjectURL(xhttp.response);
                let a = document.createElement('a');
                a.href = downloadUrl;
                a.download = filename;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                setTimeout(function () {
                    URL.revokeObjectURL(downloadUrl);
                    document.body.removeChild(a);
                }, 100); // cleanup
            }
        };
        xhttp.open("POST", this.url);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.responseType = 'blob';
        xhttp.send(JSON.stringify(request));
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
/*! exports provided: Xhr, StringConstant, InstancesContainer, SingleToneBase */
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
/*! exports provided: DragAndDropFileUploader, DropdownService, ManyToManyRelationService, ModalService, TableService, PostExportService, FormScripts, Xhr, StringConstant, InstancesContainer, SingleToneBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./Scripts/common/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xhr", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Xhr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringConstant", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["StringConstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstancesContainer", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["InstancesContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleToneBase", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SingleToneBase"]; });

/* harmony import */ var _dragAndDropFileUploader_dragAndDropFileUploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDropFileUploader/dragAndDropFileUploader */ "./Scripts/dragAndDropFileUploader/dragAndDropFileUploader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragAndDropFileUploader", function() { return _dragAndDropFileUploader_dragAndDropFileUploader__WEBPACK_IMPORTED_MODULE_1__["DragAndDropFileUploader"]; });

/* harmony import */ var _dropdownService_dropdownService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdownService/dropdownService */ "./Scripts/dropdownService/dropdownService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return _dropdownService_dropdownService__WEBPACK_IMPORTED_MODULE_2__["DropdownService"]; });

/* harmony import */ var _manyToManyRelationService_manyToManyRelationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manyToManyRelationService/manyToManyRelationService */ "./Scripts/manyToManyRelationService/manyToManyRelationService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManyToManyRelationService", function() { return _manyToManyRelationService_manyToManyRelationService__WEBPACK_IMPORTED_MODULE_3__["ManyToManyRelationService"]; });

/* harmony import */ var _modalService_modalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalService/modalService */ "./Scripts/modalService/modalService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modalService_modalService__WEBPACK_IMPORTED_MODULE_4__["ModalService"]; });

/* harmony import */ var _tableService_tableService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableService/tableService */ "./Scripts/tableService/tableService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _tableService_tableService__WEBPACK_IMPORTED_MODULE_5__["TableService"]; });

/* harmony import */ var _PostExportService_PostExportService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostExportService/PostExportService */ "./Scripts/PostExportService/PostExportService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostExportService", function() { return _PostExportService_PostExportService__WEBPACK_IMPORTED_MODULE_6__["PostExportService"]; });

/* harmony import */ var _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormScripts/formScripts */ "./Scripts/FormScripts/formScripts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormScripts", function() { return _FormScripts_formScripts__WEBPACK_IMPORTED_MODULE_7__["FormScripts"]; });











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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL0Zvcm1TY3JpcHRzL2Zvcm1TY3JpcHRzLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL1Bvc3RFeHBvcnRTZXJ2aWNlL1Bvc3RFeHBvcnRTZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9jb21tb24vc2luZ2xlVG9uZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9jb21tb24vc3RyaW5nQ29uc3RhbnRzLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL2NvbW1vbi94aHIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvZHJhZ0FuZERyb3BGaWxlVXBsb2FkZXIvZHJhZ0FuZERyb3BGaWxlVXBsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvZHJvcGRvd25TZXJ2aWNlL2Ryb3Bkb3duU2VydmljZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZS9tYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlQ29tbW9uLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL21vZGFsU2VydmljZS9tb2RhbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2NsZWFyU2VhcmNoLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2Jvb2xGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvY29tbW9uLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2RhdGVSYW5nZS50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy9lbnVtRmlsdGVyLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL2luZGV4LnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS9maWx0ZXJzL251bWJlckZpbHRlci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvZmlsdGVycy9zdHJpbmdGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL2ZpbHRlcnMvdmFsdWVPYmplY3RGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL1NjcmlwdHMvdGFibGVTZXJ2aWNlL3Jvd3NTZWxlY3Qvcm93c1NlbGVjdC50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2Uvc29ydC9zb3J0Q3JlYXRvci50cyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vU2NyaXB0cy90YWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlLnRzIiwid2VicGFjazovL3NjcmlwdHMvLi9TY3JpcHRzL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VDb21tb24udHMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHNjcmlwdHNcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBzY3JpcHRzXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vU2NyaXB0cy9pbmRleC50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kLm5vQ29uZmxpY3QoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2NyaXB0c1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbGVjdG9yOiBzdHJpbmcpe31cclxuXHJcbiAgICBwdWJsaWMgcnVuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoYCMke3RoaXMuc2VsZWN0b3J9YCkuY2xvc2VzdChcImZvcm1cIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlcigkZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyKCRmb3JtOkpRdWVyeSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0ZVBpY2tlckZvcklucHV0cygkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWRhdGV0aW1lXScpKTtcclxuICAgICAgICB0aGlzLnNldERhdGVQaWNrZXJGb3JJbnB1dHMoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREYXRlUGlja2VyRm9ySW5wdXRzKCRpbnB1dHM6IEpRdWVyeSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkaW5wdXRzWzBdKTtcclxuXHJcbiAgICAgICAgJGlucHV0cy5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImJvdHRvbSBsZWZ0XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgICAgbGVmdEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1sZWZ0XCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICByaWdodEFycm93OiAnPGkgY2xhc3M9XCJsYSBsYS1hbmdsZS1yaWdodFwiPjwvaT4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9UYWJsZVNlcnZpY2UvdGFibGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuY2xhc3MgRXhwb3J0UmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgaWRzOiAobnVtYmVyfHN0cmluZylbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdEV4cG9ydFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQb3N0RXhwb3J0U2VydmljZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKHNlcnZpY2U6IFRhYmxlU2VydmljZSwgdXJsOiBzdHJpbmcpOiBQb3N0RXhwb3J0U2VydmljZVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUG9zdEV4cG9ydFNlcnZpY2Uoc2VydmljZSwgdXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgJGVkaXRCdXR0b246IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0YWJsZVNlcnZpY2U6IFRhYmxlU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVkaXRCdXR0b25DbGFzczogc3RyaW5nID0gXCJleHBvcnRQb3N0XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGlkczogKG51bWJlcnxzdHJpbmcpW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLiRlZGl0QnV0dG9uID0gJChgIyR7dGhpcy50YWJsZVNlcnZpY2UuY29udGFpbmVyTmFtZX0gLiR7dGhpcy5lZGl0QnV0dG9uQ2xhc3N9YCk7XHJcbiAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBzZXJ2aWNlLnJvd3NTZWxlY3RNYW5hZ2VyLm9uU2VsZWN0ZWRSb3dzLnN1YnNjcmliZShpZHMgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRzID0gaWRzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRzICYmIHRoaXMuaWRzLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kZWRpdEJ1dHRvbi5jbGljayhlID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRvRXhwb3J0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb0V4cG9ydCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5pZHMgJiYgdGhpcy5pZHMubGVuZ3RoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRSZXF1ZXN0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IFwiZXhwb3J0LnBkZlwiO1xyXG4gICAgICAgICAgICBsZXQgZGlzcG9zaXRpb24gPSB4aHR0cC5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1EaXNwb3NpdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2l0aW9uICYmIGRpc3Bvc2l0aW9uLmluZGV4T2YoJ2F0dGFjaG1lbnQnKSAhPT0gLTEpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWVSZWdleCA9IC9maWxlbmFtZVteOz1cXG5dKj0oKFsnXCJdKS4qP1xcMnxbXjtcXG5dKikvO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBmaWxlbmFtZVJlZ2V4LmV4ZWMoZGlzcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IG1hdGNoZXNbMV0ucmVwbGFjZSgvWydcIl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoeGh0dHAucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHR0cC5zdGF0dXMgPT09IDIwMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoeGh0dHAucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBkb3dubG9hZFVybDtcclxuICAgICAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuICAgICAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSBcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChkb3dubG9hZFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7IC8vIGNsZWFudXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgeGh0dHAub3BlbihcIlBPU1RcIiwgdGhpcy51cmwpO1xyXG4gICAgICAgIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHhodHRwLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICB4aHR0cC5zZW5kKEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpKTtcclxuICAgIH0gXHJcbiAgXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0KCk6IEV4cG9ydFJlcXVlc3RcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZHM6IHRoaXMuaWRzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL3hoclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmdDb25zdGFudHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2luZ2xlVG9uZVwiOyIsImV4cG9ydCBjbGFzcyBJbnN0YW5jZXNDb250YWluZXJcclxue1xyXG4gICAgcHJpdmF0ZSBpbnN0YW5jZXM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGluc3RhbmNlKG5hbWU6IHN0cmluZyk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3QgPSB0aGlzLmluc3RhbmNlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEluc3RhbmNlIHdpdGggbmFtZSAnJHtuYW1lfScgd2FzIG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRTZXJ2aWNlKG5hbWU6c3RyaW5nLCBmdW5jOigpID0+IGFueSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0ID0gdGhpcy5pbnN0YW5jZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghaW5zdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW25hbWVdID0gZnVuYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbmdsZVRvbmVCYXNlXHJcbntcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2VzQ29udGFpbmVyOiBJbnN0YW5jZXNDb250YWluZXIgPSBuZXcgSW5zdGFuY2VzQ29udGFpbmVyKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdFNlcnZpY2UobmFtZTogc3RyaW5nLCBmdW5jOiAoKSA9PiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250YWluZXIuaW5pdFNlcnZpY2UobmFtZSwgZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZShuYW1lOiBzdHJpbmcpOiBhbnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNDb250YWluZXIuaW5zdGFuY2UobmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0NvbnN0YW50XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGF0ZUZvcm1hdCA9IFwiREQvTU0vWVlZWVwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGF0ZVJhbmdlRmlsdGVyU3RhcnRHcm91cE5hbWUgPSBcInN0YXJ0RmlsdGVyXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRhdGVSYW5nZUZpbHRlckVuZEdyb3VwTmFtZSA9IFwiZW5kRmlsdGVyXCI7XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFhoclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RIdG1sKHR5cGU6IFwiUE9TVFwiIHwgXCJHRVRcIiB8IFwiUFVUXCIsIHVybDogc3RyaW5nLCByZXF1ZXN0OiBhbnksIHJlc3BvbnNlQWN0aW9uOiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3QodHlwZSwgdXJsLCAnSFRNTCcsIHJlcXVlc3QsIHJlc3BvbnNlQWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RKc29uKHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSwgcmVzcG9uc2VBY3Rpb246IChyZXNwb25zZTogYW55KSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdCh0eXBlLCB1cmwsICdqc29uJywgcmVxdWVzdCwgcmVzcG9uc2VBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdCh0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhVHlwZTogJ0hUTUwnIHwgJ2pzb24nLCByZXF1ZXN0OiBhbnksIHJlc3BvbnNlQWN0aW9uOiAocmVzcG9uc2U6IGFueSkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IGRhdGFUeXBlLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQWN0aW9uKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6ICh4aHIsIHN0YXR1cywgZXJyb3IpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL1RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWGhyIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcEZpbGVVcGxvYWRlclxyXG57XHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZTtcclxuICAgIHByaXZhdGUgcG9zdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc3RVcmw6IHN0cmluZywgc2VydmljZTogVGFibGVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wb3N0VXJsID0gcG9zdFVybDtcclxuXHJcbiAgICAgICAgJChcImh0bWxcIikub24oXCJkcmFnb3ZlclwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihldmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZHJhZ2dpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCJodG1sXCIpLm9uKFwiZHJhZ2xlYXZlXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcmFnZ2luZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcImh0bWxcIikub24oXCJkcm9wXCIsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7dGhpcy5zZXJ2aWNlLmNvbnRhaW5lck5hbWV9IHRyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIocm93OiBIVE1MRWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBjb25zdCByb3ckID0gJChyb3cpO1xyXG5cclxuICAgICAgICByb3ckLm9uKCdkcmFnb3ZlcicsIGZhbHNlKVxyXG4gICAgICAgICAgICAub24oJ2Ryb3AnLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZFZhbCA9IHJvdyQuZGF0YShcImlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRWYWwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gKGV2ZW50Lm9yaWdpbmFsRXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFuc2FjdGlvbklkJywgaWRWYWwpOyAvL3RvZG8gaGFyZGNvZGVkIHZhbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YShmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHJpdmF0ZSBzZW5kRGF0YShmb3JtRGF0YTogRm9ybURhdGEpOiB2b2lkXHJcbiAgICAvL3tcclxuICAgIC8vICAgIFhoci5yZXF1ZXN0KFwiUE9TVFwiLCB0aGlzLnBvc3RVcmwsIFwianNvblwiLCBmb3JtRGF0YSwgKCkgPT4gdGhpcy5zZXJ2aWNlLnJlZnJlc2goKSk7XHJcbiAgICAvL31cclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhKGZvcm1EYXRhOiBGb3JtRGF0YSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucG9zdFVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhIGFzIGFueSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgWGhyIH0gZnJvbSAnLi4vY29tbW9uL3hocic7XHJcblxyXG5cclxuY2xhc3MgRHJvcGRvd25MaXN0SXRlbVxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpc3RlbihtYWluRHJvcGRvd25TZWxlY3Rvcjogc3RyaW5nLCBjaGlsZERyb3Bkb3duU2VsZWN0b3I6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtYWluRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKGAjJHttYWluRHJvcGRvd25TZWxlY3Rvcn1gKTtcclxuICAgICAgICBjb25zdCBjaGlsZERyb3Bkb3duOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChgIyR7Y2hpbGREcm9wZG93blNlbGVjdG9yfWApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKG1haW5Ecm9wZG93bikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihtYWluRHJvcGRvd24sIGNoaWxkRHJvcGRvd24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbkRyb3Bkb3duLm9uKFwiY2hhbmdlXCIsIChldmVudDogYW55KSA9PiB0aGlzLnJlbmRlcihtYWluRHJvcGRvd24sIGNoaWxkRHJvcGRvd24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlcihtYWluRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4sIGNoaWxkRHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWFpblNlbGVjdGVkSWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShtYWluRHJvcGRvd24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFhoci5yZXF1ZXN0SnNvbihcIlBPU1RcIiwgYCR7dGhpcy51cmx9LyR7bWFpblNlbGVjdGVkSWR9YCwge30sIChpdGVtczogRHJvcGRvd25MaXN0SXRlbVtdKSA9PiB0aGlzLnBvcHVsYXRlRHJvcGRvd24oY2hpbGREcm9wZG93biwgaXRlbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvcHVsYXRlRHJvcGRvd24oZHJvcGRvd246IEpRdWVyeTxIVE1MRWxlbWVudD4sIGl0ZW1zOiBEcm9wZG93bkxpc3RJdGVtW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaWQ6IG51bWJlciA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShkcm9wZG93bik7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZCh0aGlzLmNyZWF0ZUVtcHR5T3B0aW9uKCkpO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCh4OiBEcm9wZG93bkxpc3RJdGVtKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkOiBib29sZWFuID0geC5pZCA9PSBpZDsgLy8geWVzIEkgbmVlZCA9PSEhXHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bi5hcHBlbmQodGhpcy5jcmVhdGVPcHRpb24oeC5uYW1lLCB4LmlkLCBzZWxlY3RlZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZShkcm9wZG93bjogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkcm9wZG93bi52YWwoKSBhcyBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVFbXB0eU9wdGlvbigpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIpLmF0dHIoXCJ2YWx1ZVwiLCBcIlwiKS50ZXh0KFwiLS1TZWxlY3QgVmFsdWUtLVwiKTsgLy90b2RvIHVzZSB2YWx1ZSBmcm9tIHN0cmluZyBjb25zdGFudHNcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU9wdGlvbih0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2UpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIpLmF0dHIoXCJ2YWx1ZVwiLCB2YWx1ZSkudGV4dCh0ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gXCIuL2NvbW1vblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlci9kcmFnQW5kRHJvcEZpbGVVcGxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcm9wZG93blNlcnZpY2UvZHJvcGRvd25TZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2UvbWFueVRvTWFueVJlbGF0aW9uU2VydmljZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RhbFNlcnZpY2UvbW9kYWxTZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlU2VydmljZS90YWJsZVNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUG9zdEV4cG9ydFNlcnZpY2UvUG9zdEV4cG9ydFNlcnZpY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vRm9ybVNjcmlwdHMvZm9ybVNjcmlwdHNcIjsiLCJpbXBvcnQge1xyXG4gICAgTWFueVRvTWFueVJlbGF0aW9uUmVxdWVzdCxcclxuICAgIE1hbnlUb01hbnlTYXZlVmlld01vZGVsLFxyXG4gICAgTWFueVRvTWFueVNhdmVBY3Rpb25cclxufSBmcm9tICcuL21hbnlUb01hbnlSZWxhdGlvblNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBYaHIgfSBmcm9tICcuLi9jb21tb24veGhyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW55VG9NYW55UmVsYXRpb25TZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgY29udGFpbmVyTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgbGVmdEVudGl0eUlkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxlZnRFbnRpdHlJZDogbnVtYmVyLCBjb250YWluZXJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGVmdEVudGl0eUlkID0gbGVmdEVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsbHlDaGVja2VkOiBzdHJpbmcgW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zVG9BZGQ6IE1hbnlUb01hbnlTYXZlVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zVG9EZWxldGU6IE1hbnlUb01hbnlTYXZlVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJDaGVja2JveChzZWxlY3Rvcjogc3RyaW5nLCBpZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSAkKGAjJHtzZWxlY3Rvcn1gKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrQm94LmlzKFwiOmNoZWNrZWRcIikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxseUNoZWNrZWQucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja0JveC5jaGFuZ2UoKGUpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tCb3guaXMoXCI6Y2hlY2tlZFwiKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxseUNoZWNrZWQuZmluZCh4ID0+IHggPT09IHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRJdGVtID0gdGhpcy5pdGVtc1RvRGVsZXRlLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZWRJdGVtKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtc1RvRGVsZXRlLmluZGV4T2YoZGVsZXRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNUb0RlbGV0ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGx5Q2hlY2tlZC5maW5kKHggPT4geCA9PT0gc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsSXRlbShpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkZWRJdGVtID0gdGhpcy5pdGVtc1RvQWRkLmZpbmQoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkSXRlbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXNUb0FkZC5pbmRleE9mKGFkZGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1RvQWRkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBYaHIucmVxdWVzdEh0bWwoXCJQT1NUXCIsIHRoaXMudXJsLCByZXF1ZXN0LCByZXNwb25zZSA9PiAkKGAjJHt0aGlzLmNvbnRhaW5lck5hbWV9YCkuaHRtbChyZXNwb25zZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkSXRlbShpZDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTWFueVRvTWFueVNhdmVWaWV3TW9kZWwoaWQsIE1hbnlUb01hbnlTYXZlQWN0aW9uLkFkZCk7XHJcbiAgICAgICAgdGhpcy5pdGVtc1RvQWRkLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxJdGVtKGlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbChpZCwgTWFueVRvTWFueVNhdmVBY3Rpb24uRGVsZXRlKTtcclxuICAgICAgICB0aGlzLml0ZW1zVG9EZWxldGUucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3QoKSA6IE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3RcclxuICAgIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IE1hbnlUb01hbnlSZWxhdGlvblJlcXVlc3QodGhpcy5sZWZ0RW50aXR5SWQpO1xyXG4gICAgICAgIHJlcXVlc3QuaXRlbXMgPSByZXF1ZXN0Lml0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zVG9BZGQpO1xyXG4gICAgICAgIHJlcXVlc3QuaXRlbXMgPSByZXF1ZXN0Lml0ZW1zLmNvbmNhdCh0aGlzLml0ZW1zVG9EZWxldGUpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgTWFueVRvTWFueVJlbGF0aW9uUmVxdWVzdFxyXG57XHJcbiAgICBwdWJsaWMgbGVmdEVudGl0eUlkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOiBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVmdEVudGl0eUlkOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sZWZ0RW50aXR5SWQgPSBsZWZ0RW50aXR5SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYW55VG9NYW55U2F2ZVZpZXdNb2RlbFxyXG57XHJcbiAgICBwdWJsaWMgYWN0aW9uOiBNYW55VG9NYW55U2F2ZUFjdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBhY3Rpb246IE1hbnlUb01hbnlTYXZlQWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFueVRvTWFueVNhdmVBY3Rpb25cclxue1xyXG4gICAgQWRkID0gMSxcclxuICAgIERlbGV0ZSA9IDJcclxufSIsImltcG9ydCB7IFhociB9IGZyb20gJy4uL2NvbW1vbi94aHInO1xyXG5cclxuXHJcbmludGVyZmFjZSBJTW9kYWxPcHRpb25zXHJcbntcclxuICAgIGJhY2tkcm9wOiBib29sZWFuO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW47XHJcbiAgICBmb2N1czogYm9vbGVhbjtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBtb2RhbDogSlF1ZXJ5O1xyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBKUXVlcnk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBJTW9kYWxPcHRpb25zID0ge1xyXG4gICAgICAgIGJhY2tkcm9wOiB0cnVlLFxyXG4gICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZGFsSWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gJChgIyR7bW9kYWxJZH1gKTtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dQYWdlKHVybDogc3RyaW5nID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNob3dQYWdlSW50ZXJuYWwodXJsLCBcIlRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlUGFnZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgKHRoaXMubW9kYWwgYXMgYW55KS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlckJ1dHRvbihidXR0b25JZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBidXR0b24gPSAkKGAjJHtidXR0b25JZH1gKTtcclxuICAgICAgICB2YXIgdXJsID0gYnV0dG9uLmF0dHIoJ3VybCcpO1xyXG4gICAgICAgIHZhciBpc0FjdGlvbmxpbmsgPSBidXR0b24uYXR0cignaXNBY3Rpb25saW5rJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5vbignY2xpY2snLFxyXG4gICAgICAgICAgICBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2VJbnRlcm5hbCh1cmwsIGlzQWN0aW9ubGluayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1BhZ2VJbnRlcm5hbCh1cmw6IHN0cmluZywgaXNBY3Rpb25saW5rOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzQWN0aW9ubGluayA9PT0gJ1RydWUnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHVybClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudCh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlUGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3coKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgICh0aGlzLm1vZGFsIGFzIGFueSkubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAodGhpcy5tb2RhbCBhcyBhbnkpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRDb250ZW50KHVybDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyQ2xhc3M6IHN0cmluZyA9ICdjbGVhcl9pbnB1dCc7XHJcbiAgICAgICAgY29uc3QgZm9jdXNBZnRlckNsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBsaW5rVGV4dDogc3RyaW5nID0gJyZ0aW1lczsnO1xyXG5cclxuICAgICAgICBjb25zdCBkaXZDbGFzcyA9IGNsZWFyQ2xhc3MgKyAnX2Rpdic7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmICghJHRoaXMucGFyZW50KCkuaGFzQ2xhc3MoZGl2Q2xhc3MpKSB7XHJcbiAgICAgICAgICAgICR0aGlzLndyYXAoYDxkaXYgc3R5bGU9J3Bvc2l0aW9uOiByZWxhdGl2ZTsnIGNsYXNzPScke2RpdkNsYXNzfSc+JHskdGhpcy5odG1sKCl9PC9kaXY+YCk7XHJcblxyXG4gICAgICAgICAgICAkdGhpcy5hZnRlcihcclxuICAgICAgICAgICAgICAgIGA8YSBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyBjdXJzb3I6IHBvaW50ZXI7JyBjbGFzcz0nJHtjbGVhckNsYXNzfSc+JHtsaW5rVGV4dH08L2E+YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuID0gJHRoaXMubmV4dCgpOyBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICAgICAgJHRoaXMudmFsKCcnKS5jaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXJCdG4oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb2N1c0FmdGVyQ2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyQnRuKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRIYXNUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcGx5QnV0dG9uQ3NzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbnB1dEhhc1RleHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkdGhpcy52YWwoKS50b1N0cmluZygpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXBwbHlCdXR0b25Dc3MoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJHRoaXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkdGhpcy5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgYnRuLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIgLSBidG4uaGVpZ2h0KCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogd2lkdGggLSBidG4ud2lkdGgoKSAtIDEwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLm9uKCdjbGljaycsIGNsZWFyRmllbGQpO1xyXG4gICAgICAgICR0aGlzLm9uKCdrZXl1cCBrZXlkb3duIGNoYW5nZSBmb2N1cycsIHRyaWdnZXJCdG4pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50IGFzIGFueSkucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQnRuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaCgpXHJcbntcclxuICAgIFxyXG59IiwiaW1wb3J0IHsgSVRhYmxlRmlsdGVyQ3JlYXRvciwgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBUYWJsZUZpbHRlciB9IGZyb20gXCIuLi90YWJsZVNlcnZpY2VDb21tb25cIjtcclxuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWUsIGdldEZpbHRlckZpZWxkSWQgfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbEZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5ib29sZWFuRmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLmJvb2xGaWx0ZXIoZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICBpbnB1dCQudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0JC5jaGFuZ2UoZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gaW5wdXQkLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5ib29sRmlsdGVyKGZpZWxkSWQsIHZhbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnJlbW92ZUZpbHRlcihmaWVsZElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VydmljZS5maWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJWYWx1ZUF0dHJpYnV0ZSA9ICdmaWx0ZXItdmFsdWUnO1xyXG5leHBvcnQgY29uc3QgZmlsdGVyRmllbGRJZEF0dHJpYnV0ZSA9ICdmaWVsZC1pZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTphbnlcclxue1xyXG4gICAgcmV0dXJuIGlucHV0JC5kYXRhKGZpbHRlclZhbHVlQXR0cmlidXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlckZpZWxkSWQoaW5wdXQkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTphbnlcclxue1xyXG4gICAgcmV0dXJuIGlucHV0JC5kYXRhKGZpbHRlckZpZWxkSWRBdHRyaWJ1dGUpO1xyXG59IiwiaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vZmlsdGVyc0NvbW1vblwiO1xyXG5pbXBvcnQgeyBJUmFuZ2VGaWx0ZXJDcmVhdG9yIH0gZnJvbSAnLi9maWx0ZXJzQ29tbW9uJztcclxuaW1wb3J0IHsgU3RyaW5nQ29uc3RhbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdkYXRlcmFuZ2VwaWNrZXInO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tICcuLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQ3JlYXRvciAvL2ltcGxlbWVudHMgSVJhbmdlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLmRhdGVSYW5nZUZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlOiBzdHJpbmcgPSBpbnB1dCQuZGF0YSgnZmlsdGVyLXN0YXJ0LXZhbHVlJyk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlOiBzdHJpbmcgPSBpbnB1dCQuZGF0YSgnZmlsdGVyLWVuZC12YWx1ZScpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnQ6IG1vbWVudC5Nb21lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBsZXQgZW5kOiBtb21lbnQuTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChzdGFydERhdGVWYWx1ZSAmJiBlbmREYXRlVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGFydCA9IG1vbWVudChzdGFydERhdGVWYWx1ZSwgU3RyaW5nQ29uc3RhbnQuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgIGVuZCA9IG1vbWVudChlbmREYXRlVmFsdWUsIFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQkLnZhbChzdGFydERhdGVWYWx1ZSArICcgLSAnICsgZW5kRGF0ZVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVycyhzZXJ2aWNlLCBmaWVsZElkLCBzdGFydERhdGVWYWx1ZSwgZW5kRGF0ZVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKTtcclxuICAgICAgICAgICAgZW5kID0gbW9tZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9ucyhzdGFydCwgZW5kKTtcclxuXHJcbiAgICAgICAgaW5wdXQkLnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSk7XHJcbiAgICAgICAgaW5wdXQkLmNzcyh7IFwibWluLXdpZHRoXCI6IFwiMTc1cHhcIiB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLmRhdGVyYW5nZXBpY2tlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLFxyXG4gICAgICAgICAgICAoZXYsIHBpY2tlcikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gcGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoU3RyaW5nQ29uc3RhbnQuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGlja2VyLmVuZERhdGUuZm9ybWF0KFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0JC52YWwoc3RhcnREYXRlICsgJyAtICcgKyBlbmREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMoc2VydmljZSwgZmllbGRJZCwgc3RhcnREYXRlLCBlbmREYXRlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdjYW5jZWwuZGF0ZXJhbmdlcGlja2VyJyxcclxuICAgICAgICAgICAgKGV2LCBwaWNrZXIpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlucHV0JC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIGZpZWxkSWQ6IHN0cmluZywgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoVGFibGVGaWx0ZXIuc3RhcnREYXRlRmlsdGVyKGZpZWxkSWQsIHN0YXJ0KSk7XHJcbiAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoVGFibGVGaWx0ZXIuZW5kRGF0ZUZpbHRlcihmaWVsZElkLCBlbmQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVPcHRpb25zKHN0YXJ0PzogbW9tZW50Lk1vbWVudCwgZW5kPzogbW9tZW50Lk1vbWVudCk6IE9wdGlvbnNcclxuICAgIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmREYXRlOiBlbmQsXHJcbiAgICAgICAgICAgIGF1dG9VcGRhdGVJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJhbmdlczoge1xyXG4gICAgICAgICAgICAgICAgJ1RvZGF5JzogW21vbWVudCgpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxyXG4gICAgICAgICAgICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBidXR0b25DbGFzc2VzOiBbJ20tYnRuIGJ0biddLFxyXG4gICAgICAgICAgICBhcHBseUJ1dHRvbkNsYXNzZXM6ICdidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzZXM6ICdidG4tc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFN0cmluZ0NvbnN0YW50LmRhdGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogJ0NsZWFyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVGFibGVGaWx0ZXJDcmVhdG9yLCBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudW1GaWx0ZXJDcmVhdG9yIC8vaW1wbGVtZW50cyBJVGFibGVGaWx0ZXJDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJGaWx0ZXJzKHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMkID0gJChgIyR7c2VydmljZS5jb250YWluZXJOYW1lfSAuZW51bUZpbHRlcmApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKGlucHV0cyRbaV0sIHNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlcihpbnB1dDogSFRNTEVsZW1lbnQsIHNlcnZpY2U6IFRhYmxlU2VydmljZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnB1dCQgPSAkKGlucHV0KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpbHRlclZhbHVlKGlucHV0JCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZCA9IGdldEZpbHRlckZpZWxkSWQoaW5wdXQkKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5lbnVtRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCQuY2hhbmdlKGUgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0JC5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuZW51bUZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nRmlsdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VudW1GaWx0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSAnLi92YWx1ZU9iamVjdEZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vbnVtYmVyRmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ib29sRmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9kYXRlUmFuZ2UnOyIsImltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IENsZWFyU2VhcmNoIH0gZnJvbSBcIi4uL2NsZWFyU2VhcmNoXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlckZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5udW1iZXJGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIubnVtYmVyRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDbGVhclNlYXJjaC5yZWdpc3RlcihpbnB1dCwgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLm51bWJlckZpbHRlcihmaWVsZElkLCBpbnB1dCQudmFsKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9maWx0ZXJzQ29tbW9uXCI7XHJcbmltcG9ydCB7IFRhYmxlRmlsdGVyIH0gZnJvbSBcIi4uL3RhYmxlU2VydmljZUNvbW1vblwiO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJWYWx1ZSwgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDbGVhclNlYXJjaCB9IGZyb20gXCIuLi9jbGVhclNlYXJjaFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0ZpbHRlckNyZWF0b3IgLy9pbXBsZW1lbnRzIElUYWJsZUZpbHRlckNyZWF0b3Jcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckZpbHRlcnMoc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyQgPSAkKGAjJHtzZXJ2aWNlLmNvbnRhaW5lck5hbWV9IC5zdHJpbmdGaWx0ZXJgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMkLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihpbnB1dHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoaW5wdXQ6IEhUTUxFbGVtZW50LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQkID0gJChpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWx0ZXJWYWx1ZShpbnB1dCQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGlucHV0JCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gVGFibGVGaWx0ZXIuc3RyaW5nRmlsdGVyKGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgaW5wdXQkLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDbGVhclNlYXJjaC5yZWdpc3RlcihpbnB1dCwgKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlRmlsdGVyKGZpZWxkSWQpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5wdXQkLm9uKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLnN0cmluZ0ZpbHRlcihmaWVsZElkLCBpbnB1dCQudmFsKCkudG9TdHJpbmcoKS5yZXBsYWNlKCdcXFxcJywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElUYWJsZUZpbHRlckNyZWF0b3IsIFRhYmxlU2VydmljZSB9IGZyb20gXCIuL2ZpbHRlcnNDb21tb25cIjtcclxuaW1wb3J0IHsgVGFibGVGaWx0ZXIsIFRhYmxlRmlsdGVyT3BlcmF0b3IgfSBmcm9tIFwiLi4vdGFibGVTZXJ2aWNlQ29tbW9uXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlclZhbHVlLCBnZXRGaWx0ZXJGaWVsZElkIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlT2JqZWN0RmlsdGVyQ3JlYXRvciAvL2ltcGxlbWVudHMgSVRhYmxlRmlsdGVyQ3JlYXRvclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRmlsdGVycyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLnZhbHVlT2JqZWN0RmlsdGVyYCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzJC5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoaW5wdXRzJFtpXSwgc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdGVyKGlucHV0OiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlucHV0JCA9ICQoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmlsdGVyVmFsdWUoaW5wdXQkKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkID0gZ2V0RmlsdGVyRmllbGRJZChpbnB1dCQpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0RmlsdGVyKGZpZWxkSWQsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICBpbnB1dCQudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0JC5jaGFuZ2UoZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gaW5wdXQkLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldEZpbHRlcihmaWVsZElkLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnVwc2VydEZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VydmljZS5yZW1vdmVGaWx0ZXIoZmllbGRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2UuZmlsdGVyRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEZpbHRlcihmaWVsZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsLm1hdGNoKC9bYS16QS1aXS8pKSAvL2lmIGlkIGlzIGd1aWQgb3Igc3RyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gIG5ldyBUYWJsZUZpbHRlcihmaWVsZElkLCAnc3RyaW5nJywgdmFsLnRyaW0oKSwgVGFibGVGaWx0ZXJPcGVyYXRvci5FcXVhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUYWJsZUZpbHRlci5udW1iZXJGaWx0ZXIoZmllbGRJZCwgdmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrQm94Q29udGFpbmVyXHJcbntcclxuICAgIHByaXZhdGUgY2hlY2tCb3g6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VBY3Rpb246ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hlY2tCb3g6IEhUTUxJbnB1dEVsZW1lbnQsIGNoYW5nZUFjdGlvbjogKCkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoZWNrQm94ID0gY2hlY2tCb3g7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uID0gY2hhbmdlQWN0aW9uO1xyXG5cclxuICAgICAgICAkKGNoZWNrQm94KS5jaGFuZ2UoZSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU2VsZWN0ZWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQm94LmNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvd0lkKCk6IG51bWJlciB8IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMuY2hlY2tCb3gpLmNsb3Nlc3QoJ3RyJykuZGF0YSgnaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvd3NTZWxlY3RNYW5hZ2VyXHJcbntcclxuICAgIHB1YmxpYyBvblNlbGVjdGVkUm93czogU3ViamVjdDwobnVtYmVyfHN0cmluZylbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVyczogQ2hlY2tCb3hDb250YWluZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZG9FbWl0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJTZWxlY3Rvcjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGVja0JveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkKGAjJHtjb250YWluZXJTZWxlY3Rvcn0gLnJvdy1zZWxlY3RgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGVja0JveGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJzLnB1c2gobmV3IENoZWNrQm94Q29udGFpbmVyKGNoZWNrQm94ZXNbaV0sICgpID0+IHRoaXMuY2hhbmdlQWN0aW9uKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoYCMke2NvbnRhaW5lclNlbGVjdG9yfSAudGFibGVTZWxlY3RBbGxgKS5vbignY2xpY2snLFxyXG4gICAgICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoYCMke2NvbnRhaW5lclNlbGVjdG9yfSAudGFibGVEZXNlbGVjdEFsbGApLm9uKCdjbGljaycsXHJcbiAgICAgICAgICAgIChldmVudDogRXZlbnQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0QWxsKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRvRW1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVycy5mb3JFYWNoKHggPT4geC5zZXQoKSk7XHJcbiAgICAgICAgdGhpcy5kb0VtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEFsbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0VtaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuZm9yRWFjaCh4ID0+IHgucmVzZXQoKSk7XHJcbiAgICAgICAgdGhpcy5kb0VtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VBY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmRvRW1pdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkczogKG51bWJlcnxzdHJpbmcpW10gPSB0aGlzLmNvbnRhaW5lcnMuZmlsdGVyKHggPT4geC5pc1NlbGVjdGVkKCkpLm1hcCh4ID0+IHguZ2V0Um93SWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RlZFJvd3MubmV4dChpZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSAnLi4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zb3J0Q29tbW9uJztcclxuaW1wb3J0IHsgVGFibGVPcmRlciB9IGZyb20gJy4uL3RhYmxlU2VydmljZUNvbW1vbic7XHJcbmltcG9ydCB7IFNvcnRJbmZvIH0gZnJvbSAnLi4vdGFibGVTZXJ2aWNlQ29tbW9uJztcclxuaW1wb3J0IHsgZ2V0RmlsdGVyRmllbGRJZCB9IGZyb20gXCIuLi9maWx0ZXJzL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRDcmVhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgYXNjQ2xhc3M6IHN0cmluZyA9ICdhc2NTb3J0JztcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzY0NsYXNzOiBzdHJpbmcgPSAnZGVzY1NvcnQnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJTb3J0cyhzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxzJCA9ICQoYCMke3NlcnZpY2UuY29udGFpbmVyTmFtZX0gLnRhYmxlU29ydGApO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhYmVscyQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU29ydChsYWJlbHMkW2ldLCBzZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJTb3J0KGxhYmVsOiBIVE1MRWxlbWVudCwgc2VydmljZTogVGFibGVTZXJ2aWNlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGxhYmxlJCA9ICQobGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWx0ZXJGaWVsZElkKGxhYmxlJCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24obGFibGUkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc29ydCA9IG5ldyBUYWJsZU9yZGVyKGZpZWxkSWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxhYmxlJC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XHJcbiAgICAgICAgbGFibGUkLndyYXAoYDxkaXYgY2xhc3M9J25vc2VsZWN0JyBzdHlsZT0nY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4Jz48L2Rpdj5gKTtcclxuICAgICAgICBsYWJsZSQuYWZ0ZXIoYDxkaXYgYXJyb3dQYWxjZWhvbGRlciBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1cHhcIj48L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyJCA9IGxhYmxlJC5wYXJlbnQoKTtcclxuICAgICAgICBjb25zdCBhcnJvd0NvbnRhaW5lciQgPSBjb250YWluZXIkLmNoaWxkcmVuKCdbYXJyb3dQYWxjZWhvbGRlcl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzOiBzdHJpbmcgPSBkaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFzYyA/IFNvcnRDcmVhdG9yLmFzY0NsYXNzIDogU29ydENyZWF0b3IuZGVzY0NsYXNzO1xyXG4gICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoY3NzQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgc2VydmljZS51cHNlcnRTb3J0KHsgZmllbGRJZDogZmllbGRJZCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGZpZWxkSWQsIGFycm93Q29udGFpbmVyJCwgc2VydmljZSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lciQub24oJ2NsaWNrJyxcclxuICAgICAgICAgICAgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIkLmhhc0NsYXNzKFNvcnRDcmVhdG9yLmFzY0NsYXNzKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycm93Q29udGFpbmVyJC5hZGRDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzb3J0LmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRlc2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcnJvd0NvbnRhaW5lciQuaGFzQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQucmVtb3ZlQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzb3J0LmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lciQuYWRkQ2xhc3MoU29ydENyZWF0b3IuZGVzY0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydC5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlcnZpY2UudXBzZXJ0U29ydChzb3J0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmZpbHRlckRhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXIoZmllbGRJZDogc3RyaW5nLCBhcnJvd0NvbnRhaW5lcjogSlF1ZXJ5LCBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVzZXRDYWxsYmFjayA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoYXJyb3dDb250YWluZXIuaGFzQ2xhc3MoU29ydENyZWF0b3IuYXNjQ2xhc3MpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lci5yZW1vdmVDbGFzcyhTb3J0Q3JlYXRvci5hc2NDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhcnJvd0NvbnRhaW5lci5oYXNDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd0NvbnRhaW5lci5yZW1vdmVDbGFzcyhTb3J0Q3JlYXRvci5kZXNjQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbzogU29ydEluZm8gPSB7XHJcbiAgICAgICAgICAgIGZpZWxkSWQ6IGZpZWxkSWQsXHJcbiAgICAgICAgICAgIGNhbGxCYWNrOiByZXNldENhbGxiYWNrXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2VydmljZS5yZWdpc3RlclNvcnQoaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGlyZWN0aW9uKGxhYmVsJDpKUXVlcnkpOiBPcmRlckRpcmVjdGlvbiB8IG51bGxcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbGFiZWwkLmRhdGEoXCJzb3J0LWRpcmVjdGlvblwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICAgIFRhYmxlRmlsdGVyLFxyXG4gICAgVGFibGVPcmRlcixcclxuICAgIFRhYmxlUmVxdWVzdCxcclxuICAgIFNvcnRJbmZvXHJcbn0gZnJvbSAnLi90YWJsZVNlcnZpY2VDb21tb24nO1xyXG5pbXBvcnQge1xyXG4gICAgU3RyaW5nRmlsdGVyQ3JlYXRvcixcclxuICAgIEVudW1GaWx0ZXJDcmVhdG9yLFxyXG4gICAgVmFsdWVPYmplY3RGaWx0ZXJDcmVhdG9yLFxyXG4gICAgTnVtYmVyRmlsdGVyQ3JlYXRvcixcclxuICAgIEJvb2xGaWx0ZXJDcmVhdG9yLFxyXG4gICAgRGF0ZVJhbmdlQ3JlYXRvclxyXG59IGZyb20gJy4vZmlsdGVycyc7XHJcbmltcG9ydCB7IFhociwgU2luZ2xlVG9uZUJhc2UgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBTb3J0Q3JlYXRvciB9IGZyb20gJy4vc29ydC9zb3J0Q3JlYXRvcic7XHJcbmltcG9ydCB7IFJvd3NTZWxlY3RNYW5hZ2VyIH0gZnJvbSAnLi9yb3dzU2VsZWN0L3Jvd3NTZWxlY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSBleHRlbmRzIFNpbmdsZVRvbmVCYXNlXHJcbntcclxuICAgIHB1YmxpYyBvbkZpbHRlclRhYmxlOiBTdWJqZWN0PFRhYmxlUmVxdWVzdD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAgIHB1YmxpYyBjb250YWluZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJVcmw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hVcmw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyczogVGFibGVGaWx0ZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgc29ydHM6IFRhYmxlT3JkZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgc29ydHNJbmZvOiBTb3J0SW5mb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIHJvd3NTZWxlY3RNYW5hZ2VyOiBSb3dzU2VsZWN0TWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCByZWZyZXNoVXJsOiBzdHJpbmcsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJOYW1lID0gY29udGFpbmVyTmFtZTtcclxuICAgICAgICB0aGlzLmZpbHRlclVybCA9IHVybDtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVcmwgPSByZWZyZXNoVXJsO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZ1RvRXZlbnRzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBTdHJpbmdGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBOdW1iZXJGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBEYXRlUmFuZ2VDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBWYWx1ZU9iamVjdEZpbHRlckNyZWF0b3IucmVnaXN0ZXJGaWx0ZXJzKHRoaXMpO1xyXG4gICAgICAgIEJvb2xGaWx0ZXJDcmVhdG9yLnJlZ2lzdGVyRmlsdGVycyh0aGlzKTtcclxuICAgICAgICBFbnVtRmlsdGVyQ3JlYXRvci5yZWdpc3RlckZpbHRlcnModGhpcyk7XHJcblxyXG4gICAgICAgIFNvcnRDcmVhdG9yLnJlZ2lzdGVyU29ydHModGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucm93c1NlbGVjdE1hbmFnZXIgPSBuZXcgUm93c1NlbGVjdE1hbmFnZXIodGhpcy5jb250YWluZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgWGhyLnJlcXVlc3RIdG1sKFwiR0VUXCIsIHRoaXMucmVmcmVzaFVybCwge30sIHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlLCBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwc2VydEZpbHRlcihmaWx0ZXI6IFRhYmxlRmlsdGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmlsdGVySW5kZXgoZmlsdGVyLmZpZWxkSWQsIGZpbHRlci5ncm91cCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IDAgJiYgZmlsdGVyLnZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGluZGV4LCAxLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihmaWVsZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycy5maWx0ZXIoeCA9PiB4LmZpZWxkSWQgIT0gZmllbGQgJiYgeC5ncm91cCA9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJTb3J0KGluZm86IFNvcnRJbmZvKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc29ydHNJbmZvLnB1c2goaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwc2VydFNvcnQoc29ydDogVGFibGVPcmRlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvcnRzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChzb3J0LmRpcmVjdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydHMucHVzaChzb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ydHNJbmZvLmZpbHRlcih4ID0+IHguZmllbGRJZCAhPT0gc29ydC5maWVsZElkKS5mb3JFYWNoKHggPT4geC5jYWxsQmFjaygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyRGF0YSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuZ2V0VGFibGVSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIFhoci5yZXF1ZXN0SHRtbChcIlBPU1RcIiwgdGhpcy5maWx0ZXJVcmwsIHJlcXVlc3QsIHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlLCByZXF1ZXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJsZVJlcXVlc3QoKTogVGFibGVSZXF1ZXN0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuZmlsdGVycy5maWx0ZXIoeCA9PiB4LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBvcmRlcnMgPSB0aGlzLnNvcnRzLmZpbHRlcih4ID0+IHguZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsdGVyczogZmlsdGVycyxcclxuICAgICAgICAgICAgb3JkZXJzOiBvcmRlcnMsXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBhbnksIHJlcXVlc3Q6IFRhYmxlUmVxdWVzdCA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyVGFibGUubmV4dChyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgICQoYCMke3RoaXMuY29udGFpbmVyTmFtZX1gKS5odG1sKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0U2VydmljZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5zb3J0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc29ydHNJbmZvID0gW107XHJcbiAgICAgICAgLy90aGlzLm9uRmlsdGVyVGFibGUuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckluZGV4KGZpZWxkOiBzdHJpbmcsIGdyb3VwTmFtZTogc3RyaW5nID0gbnVsbCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRmlsdGVyID1cclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLmZpbmQoeCA9PiB4LmZpZWxkSWQgPT09IGZpZWxkICYmIChncm91cE5hbWUgPT0gbnVsbCB8fCB4Lmdyb3VwID09PSBncm91cE5hbWUpKTtcclxuXHJcbiAgICAgICAgaWYgKCFleGlzdGluZ0ZpbHRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMuaW5kZXhPZihleGlzdGluZ0ZpbHRlcik7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCB0eXBlIFRhYmxlQ29sdW1uVHlwZSA9ICdzdHJpbmcnIHwgJ2Jvb2xlYW4nIHwgJ2RhdGUnIHwgJ251bWJlcicgfCAnZW51bScgfCAnY3VycmVuY3knO1xyXG5cclxuZXhwb3J0IGVudW0gVGFibGVGaWx0ZXJPcGVyYXRvclxyXG57XHJcbiAgICBFcXVhbCA9IDAsXHJcbiAgICBOb3RFcXVhbCA9IDEsXHJcbiAgICBTdGFydHNXaXRoID0gMixcclxuICAgIENvbnRhaW5zID0gMyxcclxuICAgIERvZXNOb3RDb250YWluID0gNCxcclxuICAgIEVuZHNXaXRoID0gNSxcclxuICAgIEdyZWF0ZXJUaGFuT3JFcXVhbCA9IDYsXHJcbiAgICBHcmVhdGVyVGhhbiA9IDcsXHJcbiAgICBMZXNzVGhhbk9yRXF1YWwgPSA4LFxyXG4gICAgTGVzc1RoYW4gPSA5XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUZpbHRlclxyXG57XHJcbiAgICBwdWJsaWMgZ3JvdXA6IHN0cmluZztcclxuICAgIHB1YmxpYyBlbmNyeXB0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBmaWVsZElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogVGFibGVDb2x1bW5UeXBlO1xyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgb3BlcmF0b3I6IFRhYmxlRmlsdGVyT3BlcmF0b3IgPSBUYWJsZUZpbHRlck9wZXJhdG9yLkVxdWFsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpZWxkSWQ6IHN0cmluZyxcclxuICAgICAgICB0eXBlOiBUYWJsZUNvbHVtblR5cGUsXHJcbiAgICAgICAgdmFsdWU/OiBhbnksXHJcbiAgICAgICAgb3BlcmF0b3I6IFRhYmxlRmlsdGVyT3BlcmF0b3IgPSBUYWJsZUZpbHRlck9wZXJhdG9yLkVxdWFsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZmllbGRJZCA9IGZpZWxkSWQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0pTT04oKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZDogdGhpcy5lbmNyeXB0ZWQsXHJcbiAgICAgICAgICAgIGZpZWxkSWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMub3BlcmF0b3JcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ3N0cmluZycsIHZhbC50cmltKCksIFRhYmxlRmlsdGVyT3BlcmF0b3IuQ29udGFpbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm9vbEZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlRmlsdGVyKGZpbGVkSWQsICdib29sZWFuJywgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVudW1GaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUZpbHRlcihmaWxlZElkLCAnZW51bScsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBudW1iZXJGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZyk6IFRhYmxlRmlsdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUZpbHRlcihmaWxlZElkLCAnbnVtYmVyJywgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRhdGVGaWx0ZXIoZmlsZWRJZDogc3RyaW5nLCB2YWw6IHN0cmluZywgb3BlcmF0b3I6IFRhYmxlRmlsdGVyT3BlcmF0b3IgPSBUYWJsZUZpbHRlck9wZXJhdG9yLkVxdWFsKTpcclxuICAgICAgICBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGVGaWx0ZXIoZmlsZWRJZCwgJ2RhdGUnLCB2YWwsIG9wZXJhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0RGF0ZUZpbHRlcihmaWxlZElkOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogVGFibGVGaWx0ZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBUYWJsZUZpbHRlci5kYXRlRmlsdGVyKGZpbGVkSWQsIHZhbCwgVGFibGVGaWx0ZXJPcGVyYXRvci5HcmVhdGVyVGhhbk9yRXF1YWwpO1xyXG4gICAgICAgIGZpbHRlci5ncm91cCA9IGNyZWF0ZVN0YXJ0RGF0ZUZpbHRlckdyb3VwKGZpbGVkSWQpO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbmREYXRlRmlsdGVyKGZpbGVkSWQ6IHN0cmluZywgdmFsOiBzdHJpbmcpOiBUYWJsZUZpbHRlclxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IFRhYmxlRmlsdGVyLmRhdGVGaWx0ZXIoZmlsZWRJZCwgdmFsLCBUYWJsZUZpbHRlck9wZXJhdG9yLkxlc3NUaGFuT3JFcXVhbCk7XHJcbiAgICAgICAgZmlsdGVyLmdyb3VwID0gY3JlYXRlRW5kRGF0ZUZpbHRlckdyb3VwKGZpbGVkSWQpO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyRGlyZWN0aW9uXHJcbntcclxuICAgIEFzYyA9IDEsXHJcbiAgICBEZXNjID0gMlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVPcmRlclxyXG57XHJcbiAgICBwdWJsaWMgZmllbGRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpcmVjdGlvbj86IE9yZGVyRGlyZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpZWxkSWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVSZXF1ZXN0XHJcbntcclxuICAgIHB1YmxpYyBmaWx0ZXJzOiBUYWJsZUZpbHRlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIG9yZGVyczogVGFibGVPcmRlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29ydEluZm9cclxue1xyXG4gICAgcHVibGljIGZpZWxkSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjYWxsQmFjazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgZGF0ZVJhbmdlRmlsdGVyU3RhcnREYXRlTmFtZTogc3RyaW5nID0gXCJzdGFydEZpbHRlclwiO1xyXG5jb25zdCBkYXRlUmFuZ2VGaWx0ZXJFbmREYXRlTmFtZTogc3RyaW5nID0gXCJlbmRGaWx0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXJ0RGF0ZUZpbHRlckdyb3VwKGZpZWxkSWQ6IHN0cmluZylcclxue1xyXG4gICAgcmV0dXJuIGAke2ZpZWxkSWR9XyR7ZGF0ZVJhbmdlRmlsdGVyU3RhcnREYXRlTmFtZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbmREYXRlRmlsdGVyR3JvdXAoZmllbGRJZDogc3RyaW5nKVxyXG57XHJcbiAgICByZXR1cm4gYCR7ZmllbGRJZH1fJHtkYXRlUmFuZ2VGaWx0ZXJFbmREYXRlTmFtZX1gO1xyXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==