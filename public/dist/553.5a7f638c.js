"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[553],{

/***/ 2553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdMobWeb": () => (/* binding */ AdMobWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9895);

class AdMobWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.WebPlugin {
    constructor() {
        super({
            name: 'AdMob',
            platforms: ['web'],
        });
    }
    async initialize() {
        console.log('initialize');
    }
    async targetSettings() {
        console.log('targetSettings');
    }
    async trackingAuthorizationStatus() {
        return {
            status: 'authorized',
        };
    }
    async setApplicationMuted(options) {
        console.log('setApplicationMuted', options);
    }
    async setApplicationVolume(options) {
        console.log('setApplicationVolume', options);
    }
    async showBanner(options) {
        console.log('showBanner', options);
    }
    // Hide the banner, remove it from screen, but can show it later
    async hideBanner() {
        console.log('hideBanner');
    }
    // Resume the banner, show it after hide
    async resumeBanner() {
        console.log('resumeBanner');
    }
    // Destroy the banner, remove it from screen.
    async removeBanner() {
        console.log('removeBanner');
    }
    async prepareInterstitial(options) {
        console.log('prepareInterstitial', options);
        return {
            adUnitId: options.adId,
        };
    }
    async showInterstitial() {
        console.log('showInterstitial');
    }
    async prepareRewardVideoAd(options) {
        console.log(options);
        return {
            adUnitId: options.adId,
        };
    }
    async showRewardVideoAd() {
        return {
            type: '',
            amount: 0,
        };
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=553.5a7f638c.js.map