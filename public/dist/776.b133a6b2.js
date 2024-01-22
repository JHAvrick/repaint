"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[776],{

/***/ 9776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HapticsWeb": () => (/* binding */ HapticsWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9895);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8681);


class HapticsWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.WebPlugin {
    constructor() {
        super(...arguments);
        this.selectionStarted = false;
    }
    async impact(options) {
        const pattern = this.patternForImpact(options === null || options === void 0 ? void 0 : options.style);
        this.vibrateWithPattern(pattern);
    }
    async notification(options) {
        const pattern = this.patternForNotification(options === null || options === void 0 ? void 0 : options.type);
        this.vibrateWithPattern(pattern);
    }
    async vibrate(options) {
        const duration = (options === null || options === void 0 ? void 0 : options.duration) || 300;
        this.vibrateWithPattern([duration]);
    }
    async selectionStart() {
        this.selectionStarted = true;
    }
    async selectionChanged() {
        if (this.selectionStarted) {
            this.vibrateWithPattern([70]);
        }
    }
    async selectionEnd() {
        this.selectionStarted = false;
    }
    patternForImpact(style = _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle.Heavy */ .y$.Heavy) {
        if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle.Medium */ .y$.Medium) {
            return [43];
        }
        else if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle.Light */ .y$.Light) {
            return [20];
        }
        return [61];
    }
    patternForNotification(type = _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType.Success */ .k$.Success) {
        if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType.Warning */ .k$.Warning) {
            return [30, 40, 30, 50, 60];
        }
        else if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType.Error */ .k$.Error) {
            return [27, 45, 50];
        }
        return [35, 65, 21];
    }
    vibrateWithPattern(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
        else {
            throw this.unavailable('Browser does not support the vibrate API');
        }
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=776.b133a6b2.js.map