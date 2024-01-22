"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[179],{

/***/ 2819:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  key: 0,
  class: "bi bi-volume-mute"
};
const _hoisted_2 = {
  key: 1,
  class: "bi bi-volume-up"
};
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'audio-toggle-button',
  setup(__props) {
    const {
      audio
    } = (0, modules_1.useModule)();
    const handleClick = () => audio.setMuted(!audio.muted);
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", (0, vue_2.mergeProps)(_ctx.$attrs, {
        class: "au-audio-toggle-btn",
        onClick: handleClick
      }), [(0, vue_2.unref)(audio).muted ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_1)) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_2))], 16);
    };
  }
});

/***/ }),

/***/ 1925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const composables_1 = __webpack_require__(755);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'countdown-seconds',
  props: {
    count: null,
    autostart: {
      type: Boolean
    },
    delay: null
  },
  emits: ['end'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      count,
      autostart = true,
      delay = 0
    } = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "984897a2": (0, vue_2.unref)(theme).theme.cardBg
    }));
    const {
      game,
      theme
    } = (0, modules_1.useModule)();
    const clock = (0, composables_1.useCountdownClock)(game.gameScene); //Fuck vue
    const secondsRemaining = (0, vue_3.computed)(() => {
      let sec = Math.floor(clock.remaining.value / 1000);
      if (clock.remaining.value === 0) {
        return '';
      }
      return `${sec + 1}`;
    });
    const container = (0, vue_3.ref)();
    const containerMotion = (0, motion_1.useMotion)(container, {
      initial: {
        scale: 0,
        opacity: 0,
        y: 300
      },
      enter: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          delay: 300,
          duration: 500,
          ease: 'easeOut'
        }
      },
      leave: {
        scale: 0,
        opacity: 0,
        transition: {
          duration: 500,
          ease: 'easeOut'
        }
      }
    });
    const countEl = (0, vue_3.ref)();
    (0, vue_3.watch)(() => secondsRemaining.value, () => {
      (0, motion_1.useMotion)(countEl, {
        initial: {
          scale: 0,
          opacity: 0
        },
        enter: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 350,
            ease: 'easeOut'
          }
        }
      });
    });
    (0, vue_3.onMounted)(() => {
      if (autostart) {
        setTimeout(() => {
          clock.start(count * 1000);
        }, delay);
      }
    });
    clock.on('end', () => {
      emit('end');
    });
    expose({
      start: () => {
        if (clock.status.value !== 'running') {
          clock.start(count * 1000);
        }
      },
      leave: () => {
        clock.stop();
        return containerMotion.apply('leave');
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        ref_key: "container",
        ref: container,
        class: "k-countdown-seconds-container"
      }, [(0, vue_2.createElementVNode)("div", {
        ref_key: "countEl",
        ref: countEl
      }, (0, vue_2.toDisplayString)((0, vue_2.unref)(secondsRemaining)), 513)], 512);
    };
  }
});

/***/ }),

/***/ 4051:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'game-background',
  props: {
    style: null
  },
  setup(__props) {
    const props = __props;
    const applyStylesToDocument = () => {
      document.body.style.animation = 'none';
      document.body.style.backgroundSize = 'reset';
      for (let key in props.style) {
        if (props.style[key]) {
          document.body.style[key] = props.style[key];
        }
      }
    };
    (0, vue_2.watch)(() => props.style, applyStylesToDocument);
    applyStylesToDocument();
    return (_ctx, _cache) => {
      return null;
    };
  }
});

/***/ }),

/***/ 6155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "k-game-timer"
};
const _hoisted_2 = {
  class: "k-game-timer__time"
};
const _hoisted_3 = {
  class: "k-game-timer__label"
};
const _hoisted_4 = {
  class: "flex-centered"
};
const _hoisted_5 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor",
  class: "bi bi-infinity",
  viewBox: "0 0 16 16"
};
const _hoisted_6 = /*#__PURE__*/(0, vue_2.createElementVNode)("path", {
  d: "M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"
}, null, -1);
const _hoisted_7 = [_hoisted_6];
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'game-timer',
  props: {
    infinite: Boolean,
    highContrast: Boolean
  },
  setup(__props) {
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "98146136": (0, vue_2.unref)(trackBg),
      "de71a31e": (0, vue_2.unref)(theme).values.timerFillBg
    }));
    const {
      game,
      theme
    } = (0, modules_1.useModule)();
    const fillStyleComputed = (0, vue_3.computed)(() => {
      let fillPercentReversed = 100;
      if (props.infinite || game.clock.status === 'stopped') {
        fillPercentReversed = 0;
      } else {
        fillPercentReversed = 100 - game.clock.progress * 100;
      }
      //let fillPercentReversed = props.infinite || game.clock.status === 'stopped' ? 0 : 100 - (game.clock.progress * 100);
      return {
        clipPath: `inset(0px ${fillPercentReversed}% 0px 0px)`
        // width: `${fillPercent}%`
      };
    });
    // const fill = ref();
    // watch(() => fillStyleComputed.value, () => {
    //     fill.value.style.clipPath = fillStyleComputed.value.clipPath;
    // })
    // const secondsRemaining = computed(() => {
    //     let sec = Math.floor(game.clock.remaining / 1000);
    //     if (game.clock.remaining === 0){
    //         return '';
    //     }
    //     return `${sec + 1}`;
    // })
    const trackBg = props.highContrast ? '#0000006c' : theme.theme.cardBg;
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", {
        class: "k-game-timer__track",
        style: (0, vue_2.normalizeStyle)({
          background: (0, vue_2.unref)(theme).values.timerTrackBg
        })
      }, [(0, vue_2.createElementVNode)("div", {
        class: "k-game-timer__fill",
        style: (0, vue_2.normalizeStyle)((0, vue_2.unref)(fillStyleComputed))
      }, null, 4), (0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.createElementVNode)("div", _hoisted_4, [__props.infinite ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("svg", _hoisted_5, _hoisted_7)) : (0, vue_2.createCommentVNode)("", true)])])], 4)])]);
    };
  }
});

/***/ }),

/***/ 9297:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "au-glow-btn__icon"
};
const _hoisted_2 = {
  class: "au-glow-btn__content"
};
const _hoisted_3 = {
  class: "au-glow-btn__label"
};
const _hoisted_4 = {
  class: "au-glow-btn__desc"
};
const vue_3 = __webpack_require__(6765);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'glow-button',
  props: {
    fullWidth: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const btnStyle = (0, vue_3.computed)(() => {
      if (props.fullWidth) {
        return {
          display: 'flex',
          width: '100%'
        };
      }
      return {};
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", (0, vue_2.mergeProps)(_ctx.$attrs, {
        class: "au-glow-btn",
        style: (0, vue_2.unref)(btnStyle)
      }), [(0, vue_2.createElementVNode)("div", _hoisted_1, [(0, vue_2.renderSlot)(_ctx.$slots, "icon")]), (0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.renderSlot)(_ctx.$slots, "label")]), (0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.renderSlot)(_ctx.$slots, "description")])])], 16);
    };
  }
});

/***/ }),

/***/ 1027:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "au-menu-btn__icon"
};
const _hoisted_2 = {
  class: "au-menu-btn__label"
};
const device_util_1 = __webpack_require__(2338);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'menu-button',
  props: {
    iconClass: null,
    label: null,
    toScene: null,
    audioKey: null
  },
  emits: ['click'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    const {
      global,
      audio
    } = (0, modules_1.useModule)();
    const handleClick = () => {
      var _a;
      (0, device_util_1.hapticsImpactLight)();
      audio.play((_a = props.audioKey) !== null && _a !== void 0 ? _a : 'FX_menu_btn');
      if (props.toScene) {
        global.startScene(props.toScene);
      } else {
        emit('click');
      }
    };
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", (0, vue_2.mergeProps)(_ctx.$attrs, {
        class: "au-menu-btn",
        onClick: handleClick
      }), [(0, vue_2.createElementVNode)("div", _hoisted_1, [(0, vue_2.createElementVNode)("i", {
        class: (0, vue_2.normalizeClass)(__props.iconClass)
      }, null, 2)]), (0, vue_2.createElementVNode)("div", _hoisted_2, (0, vue_2.toDisplayString)(__props.label), 1)], 16);
    };
  }
});

/***/ }),

/***/ 5426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = ["onPointerdown"];
const _hoisted_2 = {
  class: "au-modal__title"
};
const _hoisted_3 = {
  class: "au-modal__content"
};
const _hoisted_4 = {
  class: "au-modal__footer"
};
const device_util_1 = __webpack_require__(2338);
const vue_3 = __webpack_require__(6765);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'modal',
  props: {
    closeOnAndroidBack: Boolean,
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    visible: Boolean,
    hideCancel: Boolean,
    hideSubmit: Boolean,
    cancelLabel: {
      type: String,
      default: "Close"
    },
    submitLabel: {
      type: String,
      default: "Got it!"
    }
  },
  emits: ['update:visible', 'cancel', 'submit', 'hidden'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    const modal = (0, vue_3.ref)();
    const handleOutsideClick = e => {
      let target = e.target;
      if (props.closeOnOutsideClick && modal.value && target !== modal.value && !modal.value.contains(target)) {
        emit('update:visible', false);
        emit('cancel');
      }
    };
    const handleCancel = () => {
      emit('update:visible', false);
      emit('cancel');
    };
    const handleSubmit = () => {
      emit('update:visible', false);
      emit('submit');
    };
    const handleBackButon = () => props.closeOnAndroidBack ? emit('update:visible', false) : null;
    device_util_1.deviceEvents.on('backButton', handleBackButon);
    (0, vue_3.onUnmounted)(() => {
      device_util_1.deviceEvents.removeListener('backButton', handleBackButon);
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(vue_2.Transition, {
        name: "blur",
        appear: "",
        onLeaveTo: _cache[1] || (_cache[1] = $event => emit('hidden'))
      }, {
        default: (0, vue_2.withCtx)(() => [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", {
          class: "au-modal-container",
          onPointerdown: (0, vue_2.withModifiers)(handleOutsideClick, ["stop", "prevent"])
        }, [(0, vue_2.createVNode)(vue_2.Transition, {
          name: "slide-vertical",
          appear: "",
          mode: "out-in",
          onLeaveTo: _cache[0] || (_cache[0] = $event => emit('hidden'))
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", {
            ref_key: "modal",
            ref: modal,
            class: "au-modal"
          }, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.renderSlot)(_ctx.$slots, "title")]), (0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.renderSlot)(_ctx.$slots, "content")]), (0, vue_2.createElementVNode)("div", _hoisted_4, [!__props.hideCancel ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", {
            key: 0,
            class: "au-modal__cancel",
            onClick: handleCancel
          }, (0, vue_2.toDisplayString)(__props.cancelLabel), 1)) : (0, vue_2.createCommentVNode)("", true), !__props.hideSubmit ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", {
            key: 1,
            class: "au-modal__dismiss ml2",
            onClick: handleSubmit
          }, (0, vue_2.toDisplayString)(__props.submitLabel), 1)) : (0, vue_2.createCommentVNode)("", true)])], 512), [[vue_2.vShow, __props.visible]])]),
          _: 3
        })], 40, _hoisted_1), [[vue_2.vShow, __props.visible]])]),
        _: 3
      });
    };
  }
});

/***/ }),

/***/ 2907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  key: 0,
  class: "bi bi-chevron-double-left",
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_2 = {
  key: 1,
  class: "bi bi-chevron-double-right",
  style: {
    "margin-left": "10px"
  }
};
const device_util_1 = __webpack_require__(2338);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'nav-button',
  props: {
    type: null,
    audioKey: null,
    useBannerOffset: {
      type: Boolean
    }
  },
  emits: ['click'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    const {
      audio
    } = (0, modules_1.useModule)();
    const handleClick = () => {
      var _a;
      (0, device_util_1.hapticsImpactLight)();
      audio.play((_a = props.audioKey) !== null && _a !== void 0 ? _a : 'FX_menu_btn');
      emit('click');
    };
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", (0, vue_2.mergeProps)(_ctx.$attrs, {
        class: "au-nav-btn",
        onClick: handleClick
      }), [__props.type === 'back' ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_1)) : (0, vue_2.createCommentVNode)("", true), (0, vue_2.renderSlot)(_ctx.$slots, "default"), __props.type === 'next' ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_2)) : (0, vue_2.createCommentVNode)("", true)], 16);
    };
  }
});

/***/ }),

/***/ 3320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "au-navigable",
  ref: "container"
};
const _hoisted_2 = {
  class: "au-navigable__title"
};
const _hoisted_3 = {
  class: "au-navigable__header-info"
};
const _hoisted_4 = {
  class: "au-navigable__left"
};
const _hoisted_5 = {
  class: "au-navigable__center"
};
const _hoisted_6 = {
  class: "au-navigable__right"
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const ad_util_1 = __webpack_require__(2463);
const device_util_1 = __webpack_require__(2338);
//const emit = defineEmits(['back', 'next']);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'navigable-screen',
  props: {
    useBannerOffset: {
      type: Boolean
    }
  },
  emits: ['native-back'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    const {
      global
    } = (0, modules_1.useModule)();
    const headerEl = (0, vue_3.ref)();
    const navEl = (0, vue_3.ref)();
    /**
     * Handle banner resize, get the height
     */
    const bannerHeight = (0, vue_3.ref)(50);
    const handleBannerResize = size => bannerHeight.value = size.height;
    ad_util_1.adEvents.on('bannerSizeChange', handleBannerResize);
    (0, vue_3.onBeforeUnmount)(() => ad_util_1.adEvents.removeListener('bannerSizeChange', handleBannerResize));
    const bannerAdjustedHeight = (0, vue_3.computed)(() => {
      if (global.platform !== 'web' && props.useBannerOffset) {
        let headerHeight = /* titleEl.value?.getBoundingClientRect().height ?? */75;
        let navHeight = /* navEl.value?.getBoundingClientRect().height ?? */115;
        return {
          height: `calc(100% - ${bannerHeight.value + headerHeight + navHeight}px)`
        };
      }
    });
    const handleHardwareBackBtn = () => emit('native-back');
    device_util_1.deviceEvents.on('backButton', handleHardwareBackBtn);
    (0, vue_3.onBeforeUnmount)(() => {
      device_util_1.deviceEvents.removeListener('backButton', handleHardwareBackBtn);
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", {
        class: "au-navigable__header",
        ref_key: "headerEl",
        ref: headerEl
      }, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.renderSlot)(_ctx.$slots, "title")]), (0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.renderSlot)(_ctx.$slots, "header-info")])], 512), (0, vue_2.createElementVNode)("div", {
        class: "au-navigable__content",
        style: (0, vue_2.normalizeStyle)((0, vue_2.unref)(bannerAdjustedHeight))
      }, [(0, vue_2.renderSlot)(_ctx.$slots, "content")], 4), (0, vue_2.createElementVNode)("div", {
        class: "au-navigable__nav",
        ref_key: "navEl",
        ref: navEl
      }, [(0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.renderSlot)(_ctx.$slots, "nav-left")]), (0, vue_2.createElementVNode)("div", _hoisted_5, [(0, vue_2.renderSlot)(_ctx.$slots, "nav-center")]), (0, vue_2.createElementVNode)("div", _hoisted_6, [(0, vue_2.renderSlot)(_ctx.$slots, "nav-right")])], 512)], 512);
    };
  }
});

/***/ }),

/***/ 7124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "au-play-btn__circle"
};
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "outerCircle"
}, null, -1);
const _hoisted_3 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "innerCircle"
}, null, -1);
const _hoisted_4 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-play-fill"
}, null, -1);
const _hoisted_5 = [_hoisted_4];
const device_util_1 = __webpack_require__(2338);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'play-button',
  emits: ['click'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const {
      audio
    } = (0, modules_1.useModule)();
    const handleClick = () => {
      (0, device_util_1.hapticsImpactMedium)();
      //audio.play('FX_menu_btn_play');
      emit('click');
    };
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        class: "au-play-btn",
        onClick: handleClick
      }, [(0, vue_2.createElementVNode)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0, vue_2.createElementVNode)("button", (0, vue_2.mergeProps)(_ctx.$attrs, {
        class: "au-play-btn__btn"
      }), _hoisted_5, 16)])]);
    };
  }
});

/***/ }),

/***/ 5080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'pointer-fx',
  props: {
    colorStart: null,
    colorEnd: null
  },
  setup(__props) {
    const {
      colorStart = '#ffffff',
      colorEnd = '#ffffff'
    } = __props;
    // let colorStart = '#ffffff';
    // let colorEnd = '#ffffff';
    /**
     * Creates a `div` element with class `k-pointer-fx` at the pointer event position and
     * then begins a transition from `colorStart` to `colorEnd` over `duration` milliseconds,
     * as well as increasing the scale from 0 to 1 over the same duration.
     */
    const container = (0, vue_3.ref)();
    const stopMotions = new Set();
    const pointerEls = new Set();
    const handleDocumentPointerDown = e => {
      var _a, _b;
      let el = document.createElement('div');
      let containerRect = (_a = container.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
      if (containerRect == null) return;
      el.classList.add('k-pointer-fx');
      el.style.left = `${e.pageX - (containerRect === null || containerRect === void 0 ? void 0 : containerRect.left) - 50}px`;
      el.style.top = `${e.pageY - (containerRect === null || containerRect === void 0 ? void 0 : containerRect.top) - 50}px`;
      el.style.backgroundColor = (0, chroma_js_1.default)(colorStart).hex();
      el.style.transform = 'scale(0)';
      (_b = container.value) === null || _b === void 0 ? void 0 : _b.appendChild(el);
      pointerEls.add(el);
      const {
        apply,
        stop
      } = (0, motion_1.useMotion)(el, {
        initial: {
          opacity: 1,
          scale: 0,
          backgroundColor: (0, chroma_js_1.default)(colorStart).hex()
        },
        enter: {
          opacity: 0,
          scale: 5,
          backgroundColor: (0, chroma_js_1.default)(colorEnd).hex(),
          transition: {
            duration: 350,
            ease: 'easeOut',
            onComplete: () => stopMotions.delete(stop)
          }
        }
      });
      stopMotions.add(stop);
      apply('enter');
    };
    (0, vue_3.onMounted)(() => document.addEventListener('pointerdown', handleDocumentPointerDown));
    (0, vue_3.onBeforeUnmount)(() => {
      stopMotions.forEach(stop => stop());
      pointerEls.forEach(el => {
        var _a;
        return (_a = container.value) === null || _a === void 0 ? void 0 : _a.removeChild(el);
      });
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        ref_key: "container",
        ref: container,
        class: "k-pointer-fx-container"
      }, null, 512);
    };
  }
});

/***/ }),

/***/ 9146:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const device_util_1 = __webpack_require__(2338);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-button',
  props: {
    color: {
      type: String,
      default: 'white'
    }
  },
  emits: ['click'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "3b75f35a": _ctx.$props.color
    }));
    const handleClick = () => {
      (0, device_util_1.hapticsImpactLight)();
      emit('click', props.color);
    };
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        class: "k-color-button",
        onPointerdown: handleClick
      }, [(0, vue_2.renderSlot)(_ctx.$slots, "default")], 32);
    };
  }
});

/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const color_util_1 = __webpack_require__(5365);
const util_1 = __webpack_require__(1110);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-phasing-element',
  props: {
    is: null,
    targetColor: null,
    steps: null
  },
  setup(__props, _ref) {
    let {
      expose
    } = _ref;
    const props = __props;
    const {
      theme
    } = (0, modules_1.useModule)();
    const active = (0, vue_3.ref)(true);
    const stepIndex = (0, vue_3.ref)(-1);
    const stopPhase = (0, vue_3.ref)();
    const bgStartColor = theme.gameBg;
    const bg = (0, vue_3.ref)();
    /**
     * This method parses the next step in the provided "steps" array and decides what the next color should be
     * and the duration of the transition to that color (if not explicitly provided).
     */
    const step = fromColor => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (active.value === false) return;
      let currentStepIndex = (0, util_1.wrapAround)(stepIndex.value + 1, 0, props.steps.length - 1);
      let currentStep = props.steps[currentStepIndex];
      let duration = currentStep.duration === 'random' ? Phaser.Math.Between(1000, 4000) : currentStep.duration;
      let toColor = typeof currentStep.color === 'function' ? currentStep.color() : currentStep.color;
      toColor = toColor === 'random' ? (0, color_util_1.getColorWithSimilarityInRange)(props.targetColor, 85, 100).hex() : toColor;
      stepIndex.value = currentStepIndex;
      phaseToColor(fromColor, toColor, duration);
    });
    /**
     * Phases the background from one color to another and triggers the next step when it is complete.
     *
     * @param fromColor
     * @param toColor
     * @param duration
     */
    const phaseToColor = (fromColor, toColor, duration) => {
      const {
        stop
      } = (0, motion_1.useMotion)(bg, {
        initial: {
          background: fromColor
        },
        enter: {
          background: toColor,
          transition: {
            duration: duration,
            ease: 'linear',
            onComplete: () => step(toColor)
          }
        }
      });
      stopPhase.value = stop;
    };
    step('#00000000');
    expose({
      stop: () => {
        var _a, _b;
        active.value = false;
        (_a = stopPhase.value) === null || _a === void 0 ? void 0 : _a.call(stopPhase);
        let bgColor = (_b = bg.value) === null || _b === void 0 ? void 0 : _b.style.background;
        if (bgColor) return (0, chroma_js_1.default)(bgColor);else return (0, chroma_js_1.default)('#000000');
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)((0, vue_2.resolveDynamicComponent)((_a = __props.is) !== null && _a !== void 0 ? _a : 'div'), (0, vue_2.mergeProps)({
        ref_key: "bg",
        ref: bg
      }, _ctx.$attrs), {
        default: (0, vue_2.withCtx)(() => [(0, vue_2.renderSlot)(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});

/***/ }),

/***/ 4988:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-72579bd4"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "a-color-picker-container"
};
const vue_3 = __webpack_require__(6765);
const util_1 = __webpack_require__(1110);
const grid_color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(5222));
const stacked_circle_color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(856));
const single_color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(9556));
const scrolling_color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(4622));
const radial_color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(7103));
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-picker',
  props: {
    colors: null
  },
  emits: ['enter'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const props = __props;
    const {
      game
    } = (0, modules_1.useModule)();
    const getPickerComp = () => {
      //return ScrollingColorPicker;
      /**
       * If there is only one color, always use the single color picker.
       */
      if (props.colors.length === 1) return single_color_picker_vue_1.default;
      /**
       * Otherwise get a random picker from a list of pickers that are appropriate for the number of colors.
       */
      const pickerComps = [grid_color_picker_vue_1.default];
      if (props.colors.length <= 4) pickerComps.push(stacked_circle_color_picker_vue_1.default);
      if (props.colors.length <= 20 && game.matchState.difficulty >= 1) pickerComps.push(radial_color_picker_vue_1.default);
      //if (props.colors.length >= 10 && game.matchState.difficulty > 0) pickerComps.push(ScrollingColorPicker);
      return (0, util_1.randomUnique)(pickerComps, null);
    };
    const comp = getPickerComp();
    const handleEnter = () => {
      let compName = null;
      switch (true) {
        case comp === grid_color_picker_vue_1.default:
          compName = 'GridColorPicker';
          break;
        case comp === stacked_circle_color_picker_vue_1.default:
          compName = 'StackedCircleColorPicker';
          break;
        case comp === single_color_picker_vue_1.default:
          compName = 'SingleColorPicker';
          break;
        case comp === scrolling_color_picker_vue_1.default:
          compName = 'ScrollingColorPicker';
          break;
        case comp === radial_color_picker_vue_1.default:
          compName = 'RadialColorPicker';
          break;
      }
      emit('enter', compName);
    };
    const picker = (0, vue_3.ref)();
    expose({
      leave: () => {
        var _a;
        return (_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave();
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [((0, vue_2.openBlock)(), (0, vue_2.createBlock)((0, vue_2.resolveDynamicComponent)((0, vue_2.unref)(comp)), (0, vue_2.mergeProps)({
        ref_key: "picker",
        ref: picker
      }, _ctx.$attrs, {
        onEnter: handleEnter,
        colors: __props.colors
      }), null, 16, ["colors"]))]);
    };
  }
});

/***/ }),

/***/ 7121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const contrast_text_vue_1 = tslib_1.__importDefault(__webpack_require__(9315));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'contrast-color-text',
  props: {
    color: null
  },
  setup(__props) {
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "7dd168a8": bgColor.value
    }));
    const bgColor = (0, vue_3.ref)((0, chroma_js_1.default)(props.color).hex());
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        class: "k-color-text",
        style: (0, vue_2.normalizeStyle)({
          background: bgColor.value
        })
      }, [(0, vue_2.createVNode)(contrast_text_vue_1.default, {
        color: __props.color
      }, {
        default: (0, vue_2.withCtx)(() => [(0, vue_2.renderSlot)(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["color"])], 4);
    };
  }
});

/***/ }),

/***/ 5793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const color_util_1 = __webpack_require__(5365);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'contrast-text',
  props: {
    color: null,
    r: null,
    b: null,
    g: null
  },
  setup(__props) {
    const props = __props;
    const textColor = (0, vue_3.computed)(() => {
      var _a, _b, _c;
      let rgb = props.color ? props.color.rgb() : [(_a = props.r) !== null && _a !== void 0 ? _a : 0, (_b = props.g) !== null && _b !== void 0 ? _b : 0, (_c = props.b) !== null && _c !== void 0 ? _c : 0];
      return (0, color_util_1.getContrastColor)(rgb[0], rgb[1], rgb[2]);
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", {
        style: (0, vue_2.normalizeStyle)({
          color: (0, vue_2.unref)(textColor)
        })
      }, [(0, vue_2.renderSlot)(_ctx.$slots, "default")], 4);
    };
  }
});

/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-7ac196c2"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-done-btn__ring"
}, null, -1));
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("label", {
  class: "k-done-btn__label"
}, " Done! ", -1));
const _hoisted_3 = [_hoisted_1, _hoisted_2];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const device_util_1 = __webpack_require__(2338);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'done-button',
  props: {
    width: [Number, String]
  },
  emits: ['click'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "a4314644": _ctx.$props.width
    }));
    const btn = (0, vue_3.ref)();
    const motion = (0, motion_1.useMotion)(btn, {
      initial: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 500,
          ease: 'spring'
        }
      },
      leave: {
        opacity: 0,
        scale: 1.5,
        transition: {
          duration: 250,
          ease: 'easeIn'
        }
      }
    });
    const handleClick = () => {
      (0, device_util_1.hapticsImpactLight)();
      motion.apply('leave');
      emit('click');
    };
    expose({
      leave: () => motion.apply('leave')
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", (0, vue_2.mergeProps)({
        ref_key: "btn",
        ref: btn,
        class: "k-done-btn"
      }, _ctx.$attrs, {
        onPointerdownOnce: handleClick
      }), _hoisted_3, 16);
    };
  }
});

/***/ }),

/***/ 5516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "flex-centered",
  style: {
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "top": "0",
    "left": "0",
    "pointer-events": "none"
  }
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'expanding-circle',
  setup(__props, _ref) {
    let {
      expose
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "56143b4a": (0, vue_1.unref)(theme).theme.gameBg
    }));
    const {
      theme
    } = (0, modules_1.useModule)();
    /**
     * Leave transition
     */
    const circle = (0, vue_3.ref)();
    const circleMotion = (0, motion_1.useMotion)(circle, {
      initial: {
        opacity: 0,
        scale: 0
      },
      leave: {
        opacity: 1,
        scale: 30,
        transition: {
          duration: 500,
          ease: 'easeOut'
        }
      }
    });
    expose({
      leave: () => circleMotion.apply('leave')
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", {
        ref_key: "circle",
        ref: circle,
        class: "k-phase-bg-leave"
      }, null, 512)]);
    };
  }
});

/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-0116c3b5"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-game-content-area"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-pause"
}, null, -1));
const _hoisted_3 = [_hoisted_2];
const _hoisted_4 = ["onClick"];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const game_timer_vue_1 = tslib_1.__importDefault(__webpack_require__(2572));
const modules_1 = __webpack_require__(5978);
const pointer_fx_vue_1 = tslib_1.__importDefault(__webpack_require__(6193));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'game-content-area',
  props: {
    hideTray: Boolean,
    infiniteTime: Boolean,
    noPointerFx: Boolean,
    highContrast: Boolean
  },
  emits: ['down', 'skip'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "26fa1b54": (0, vue_2.unref)(cardBg)
    }));
    const {
      game,
      theme
    } = (0, modules_1.useModule)();
    const handlePointerDown = e => {
      emit('down', e);
    };
    const cardBg = props.highContrast ? '#0000006c' : theme.theme.cardBg;
    const skipped = (0, vue_3.ref)(false);
    const handleSkip = () => {
      if (!skipped.value) {
        skipped.value = true;
        game.useSkip();
        emit('skip');
        return;
      }
    };
    const instruction = (0, vue_3.ref)();
    const instructionMotion = (0, motion_1.useMotion)(instruction, {
      initial: {
        opacity: 0,
        y: -200
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 350,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: -200,
        transition: {
          duration: 350,
          ease: 'easeIn'
        }
      }
    });
    const tray = (0, vue_3.ref)();
    const trayMotion = (0, motion_1.useMotion)(tray, {
      initial: {
        opacity: 0,
        y: 200
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 350,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: 200,
        transition: {
          duration: 350,
          ease: 'easeIn'
        }
      }
    });
    expose({
      leave: () => {
        return Promise.all([instructionMotion.apply('leave'), trayMotion.apply('leave')]);
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [!(0, vue_2.unref)(game).matchState.gameOver && !__props.noPointerFx ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(pointer_fx_vue_1.default, {
        key: 0,
        "color-start": "#ffffff",
        "color-end": "#ffffff"
      })) : (0, vue_2.createCommentVNode)("", true), (0, vue_2.createElementVNode)("div", {
        ref_key: "instruction",
        ref: instruction,
        class: "k-game-content-area__instruction"
      }, [(0, vue_2.renderSlot)(_ctx.$slots, "instruction")], 512), (0, vue_2.createElementVNode)("div", {
        class: "k-game-content-area__content",
        onPointerdown: handlePointerDown,
        style: (0, vue_2.normalizeStyle)({
          padding: (0, vue_2.unref)(game).useReducedPadding ? '5px' : '7%'
        })
      }, [(0, vue_2.renderSlot)(_ctx.$slots, "content")], 36), !__props.hideTray ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        key: 1,
        ref_key: "tray",
        ref: tray,
        class: "k-game-content-area__tray"
      }, [(0, vue_2.createElementVNode)("button", {
        class: "k-pause-btn mr-2",
        onClick: _cache[0] || (_cache[0] = (0, vue_2.withModifiers)(
        //@ts-ignore
        function () {
          return (0, vue_2.unref)(game).togglePaused && (0, vue_2.unref)(game).togglePaused(...arguments);
        }, ["stop", "prevent"])),
        style: {
          "margin-right": "10px",
          "width": "50px"
        }
      }, _hoisted_3), (0, vue_2.createVNode)(game_timer_vue_1.default, {
        infinite: __props.infiniteTime,
        "high-contrast": __props.highContrast
      }, null, 8, ["infinite", "high-contrast"]), (0, vue_2.unref)(game).matchState.skips > 0 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("button", {
        key: 0,
        class: "k-skip-btn mr-2",
        onClick: (0, vue_2.withModifiers)(handleSkip, ["stop", "prevent"])
      }, " Skip ", 8, _hoisted_4)) : (0, vue_2.createCommentVNode)("", true)], 512)) : (0, vue_2.createCommentVNode)("", true)]);
    };
  }
});

/***/ }),

/***/ 1489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "k-game-over__content"
};
const _hoisted_2 = {
  style: {
    "margin-bottom": "375px"
  }
};
const _hoisted_3 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "dot-flashing"
}, null, -1);
const _hoisted_4 = [_hoisted_3];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'game-over',
  emits: ['next', 'leave'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const {
      game
    } = (0, modules_1.useModule)();
    const title = (0, vue_3.ref)();
    const titleMotion = (0, motion_1.useMotion)(title, {
      initial: {
        y: 0,
        filter: 'blur(100px)',
        opacity: 0
        //scale: 3
      },

      enter: {
        filter: 'blur(0px)',
        opacity: 1,
        //scale: 1,
        transition: {
          duration: 800,
          ease: 'easeOut'
        }
      },
      leave: {
        filter: 'blur(100px)',
        opacity: 0,
        y: -300,
        transition: {
          duration: 1000,
          ease: 'easeIn'
        }
      }
    });
    const spinner = (0, vue_3.ref)();
    const spinnerMotion = (0, motion_1.useMotion)(spinner, {
      initial: {
        opacity: 0
      },
      _enter: {
        opacity: 1,
        transition: {
          duration: 250,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        transition: {
          duration: 250,
          ease: 'easeIn'
        }
      }
    });
    const container = (0, vue_3.ref)();
    const containerMotions = (0, motion_1.useMotion)(container, {
      initial: {
        opacity: 1,
        backdropFilter: 'blur(0px)',
        '-webkit-backdrop-filter': 'blur(0px)'
      },
      enter: {
        backdropFilter: 'blur(100px)',
        '-webkit-backdrop-filter': 'blur(100px)',
        transition: {
          duration: 500,
          ease: 'easeOut'
        }
      },
      leave: {
        //opacity: 0,
        backdropFilter: 'blur(0px)',
        '-webkit-backdrop-filter': 'blur(0px)',
        transition: {
          duration: 1000,
          ease: 'easeIn'
        }
      }
    });
    //containerMotions.apply();
    // const GameOverMessages = [
    //     'Hm, note quite!',
    //     'Almost had it!',
    //     'You\'ll get it next time!',
    //     'Afraid not!',
    //     'So close!',
    //     'Not exactly!',
    //     'Oof!',
    //     'Next Time!',
    //     'Dang, sorry!',
    //     'Missed it by a whisker!',
    //     'So close, yet so far!',
    //     'Close, but no cigar!',
    //     'Ya goofed.'
    // ]
    const GameOverMessages = ['Ya goofed.'
    // 'My friend, you have goofed it.',
    // 'Goofed it.',
    // 'Colossal goof.',
    // 'Good sir, I do believe you have goofed.',
    // 'You\'ve really done it this time! Goofed it, I mean.',
    // 'Unprecedented goof.',
    // 'You got the goof in you kid.',
    // 'Goofing into the sunrise.',
    // 'If you\'re looking for goofs they\'re in aisle you.',
    // 'The goofs are strong in this one.'
    ];
    //const message = ref<string>(Phaser.Utils.Array.GetRandom(GameOverMessages));
    const message = game.matchState.timedOut ? 'Ran out of time.' : 'Not Quite.';
    let postGamePromise = game.preparePostGame();
    (0, vue_3.onMounted)(() => {
      var _a;
      (_a = game.gameScene) === null || _a === void 0 ? void 0 : _a.cameras.main.flash(3000, 136, 8, 8, false, (camera, progress) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (progress === 1) {
          /**
           * If our main transition is finished (camera flash) and the async work for post-game ad and stats hasn't
           * completed yet, throw up our loader and hold this screen until the work is complete.
           */
          if (!game.postGameReady) {
            spinnerMotion.apply('_enter');
            yield postGamePromise;
          }
          //await delay(100000); // for testing
          emit('next');
          yield Promise.all([titleMotion.apply('leave'), spinnerMotion.apply('leave'), containerMotions.apply('leave')]);
          emit('leave');
        }
      }));
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        "hide-tray": true,
        class: "k-game-over absolute-full-cover",
        "no-pointer-fx": ""
      }, {
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", {
          ref_key: "title",
          ref: title,
          class: "k-gameover-title"
        }, (0, vue_2.toDisplayString)((0, vue_2.unref)(message)), 513)]), (0, vue_2.createElementVNode)("div", {
          ref_key: "spinner",
          ref: spinner
        }, _hoisted_4, 512)])]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 2511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-4af38d6d"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = ["data-index", "data-hex"];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const color_util_1 = __webpack_require__(5365);
const flatten_1 = tslib_1.__importDefault(__webpack_require__(5564));
const util_1 = __webpack_require__(1110);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
//import Sortable from 'sortablejs';
const sortable_core_esm_js_1 = tslib_1.__importDefault(__webpack_require__(6837));
const lodash_1 = __webpack_require__(6486);
// const { game, audio } = useModule();
exports.Z = (0, vue_1.defineComponent)({
  __name: 'gradient-shape',
  props: {
    distanceMin: null,
    distanceMax: null,
    gridCount: null,
    swapCount: null
  },
  emits: ['enter'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      distanceMin = 50,
      distanceMax = 100,
      gridCount = 6,
      swapCount = 3
    } = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "537dca24": tileWidth.value
    }));
    const c1 = chroma_js_1.default.random();
    const c2 = (0, color_util_1.getColorWithSimilarityInRange)(c1, distanceMin, distanceMax);
    const c3 = (0, color_util_1.getColorWithSimilarityInRange)(c2, distanceMin, distanceMax);
    const c4 = (0, color_util_1.getColorWithSimilarityInRange)(c3, distanceMin, distanceMax);
    const grid = (0, vue_3.ref)((0, color_util_1.generateGradientSquare)(gridCount, [c1, c2, c3, c4]));
    const gridFlat = (0, vue_3.ref)((0, flatten_1.default)(grid.value));
    const tileWidth = (0, vue_3.ref)(`${100 / gridCount}%`);
    /**
     * Returns two grid indexs (flat grid) which have not yet been swapped or throws an error if all
     * indexes have been swapped (which the game parameters should prevent).
     */
    const alreadySwapped = (0, vue_3.ref)([]);
    const getUnswappedIndexes = () => {
      if (alreadySwapped.value.length === gridFlat.value.length) {
        throw new Error("getUnswappedIndexes(): All indexes have been swapped");
      }
      let index1 = (0, lodash_1.random)(0, gridFlat.value.length - 1);
      let index2 = (0, lodash_1.random)(0, gridFlat.value.length - 1);
      if (index1 === index2 || alreadySwapped.value.includes(index1) || alreadySwapped.value.includes(index2)) {
        return getUnswappedIndexes();
      }
      return [index1, index2];
    };
    const getShuffledGridFlat = count => {
      const gridFlatShuffled = [...gridFlat.value];
      for (let i = 0; i < count; i++) {
        (0, util_1.swap)(gridFlatShuffled, ...getUnswappedIndexes());
      }
      return gridFlatShuffled;
    };
    const gridFlatShuffled = (0, vue_3.ref)(getShuffledGridFlat(swapCount));
    const gridEl = (0, vue_3.ref)();
    (0, vue_3.onMounted)(() => {
      if (gridEl.value) {
        new sortable_core_esm_js_1.default(gridEl.value, {
          animation: 200,
          swap: true,
          ghostClass: "k-sortable-ghost",
          chosenClass: "k-sortable-chosen",
          dragClass: "k-sortable-drag" // Class name for the dragging item
          //swapThreshold: .25,
          //forceFallback: true
        });
      }
    });

    const isOrderValid = () => {
      if (gridEl.value) {
        const gridElChildren = gridEl.value.children;
        for (let i = 0; i < gridElChildren.length; i++) {
          if (gridElChildren[i].getAttribute('data-hex') !== gridFlat.value[i].hex()) {
            return false;
          }
        }
        return true;
      }
      return false;
    };
    /**
     * Removes any border radiuses on the grid elements. This is necessary because any corner elements that
     * are moved around will still have their borders otherwise, causing a visual bug.
     */
    const fixBorderRadius = () => {
      if (gridEl.value) {
        gridEl.value.style.overflow = 'hidden';
        const gridElChildren = gridEl.value.children;
        Array.from(gridElChildren).forEach(child => child.style.borderRadius = '0px');
      }
    };
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      if (entered.value === false && index === gridCount * gridCount - 1) {
        fixBorderRadius();
        entered.value = true;
        emit('enter');
      }
    };
    let cols = gridCount;
    const getBorderRadiusStyle = index => {
      let style = {},
        pos = index + 1;
      if (pos === 1) style = Object.assign(Object.assign({}, style), {
        borderTopLeftRadius: '10px'
      });
      if (pos === cols) style = Object.assign(Object.assign({}, style), {
        borderTopRightRadius: '10px'
      });
      if (pos === gridFlat.value.length - cols + 1) style = Object.assign(Object.assign({}, style), {
        borderBottomLeftRadius: '10px'
      });
      if (pos === gridFlat.value.length) style = Object.assign(Object.assign({}, style), {
        borderBottomRightRadius: '10px'
      });
      return style;
    };
    expose({
      isOrderValid,
      leave: () => (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)(), ['up', 'scatter', 'collect', 'grow'])
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        ref_key: "gridEl",
        ref: gridEl,
        class: "k-gradient-shape"
      }, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(gridFlatShuffled.value, (color, i) => {
        return (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", (0, vue_2.mergeProps)({
          class: "k-gradient-shape__item",
          "data-index": i,
          "data-hex": color.hex(),
          style: Object.assign({
            background: color.hex()
          }, getBorderRadiusStyle(i))
        }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(i, {
          onComplete: handleTransitionComplete
        })), null, 16, _hoisted_1)), [[_directive_motion, `btnMotion${i}`]]);
      }), 256))], 512);
    };
  }
});

/***/ }),

/***/ 2959:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-199607b9"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-color-grid"
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const color_button_vue_1 = tslib_1.__importDefault(__webpack_require__(8320));
const lodash_1 = __webpack_require__(6486);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'grid-color-picker',
  props: {
    colors: null,
    eliminiation: {
      type: Boolean
    }
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      colors = [],
      eliminiation = false
    } = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "ab8dea3a": (0, vue_2.unref)(btnWidth)
    }));
    let btnWidth = '';
    let cols = 4;
    if (colors.length <= 20) {
      cols = 4;
      btnWidth = '20%';
    } else {
      cols = 5;
      btnWidth = '16%';
      if (colors.length % 5 !== 0) {
        console.warn('<GridColorPicker />: Use multiples of 5 when there are more than 20 colors.');
      }
    }
    const handleColorSelected = (color, motionKey) => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (eliminiation) {
        let motion = (0, motion_1.useMotions)()[motionKey];
        if (motion) {
          motion.apply({
            opacity: 0,
            scale: 3,
            transition: {
              duration: 225,
              ease: 'easeIn',
              /**
               * Necessary or else the element will sometimes hover invisible over another
               * element, preventing it from being clicked.
               */
              onComplete: () => {
                motion.target.style.pointerEvents = 'none';
              }
            }
          });
        }
      }
      emit('select', color);
    });
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      if (entered.value === false && index === colors.length - 1) {
        entered.value = true;
        emit('enter');
      }
    };
    const variations = [{
      name: 'circles',
      style: {
        width: btnWidth,
        borderRadius: '100%'
      }
    }, {
      name: 'tight',
      style: {
        width: `${100 / cols}%`,
        borderRadius: '0%',
        flexGrow: 1,
        margin: 0,
        padding: 0
      }
    }, {
      name: 'rounded',
      style: {
        width: btnWidth
      }
    }];
    /**
     * Given an index, returns a style object which rounds the corners of the buttons on
     * the corners of the grid as defined by the `cols` variable. Used to round only the corner
     * blocks when the grid type is 'tight'.
     */
    const getBorderRadiusStyle = index => {
      let style = {},
        pos = index + 1;
      if (pos === 1) style = Object.assign(Object.assign({}, style), {
        borderTopLeftRadius: '4px'
      });
      if (pos === cols) style = Object.assign(Object.assign({}, style), {
        borderTopRightRadius: '4px'
      });
      if (pos === colors.length - cols + 1) style = Object.assign(Object.assign({}, style), {
        borderBottomLeftRadius: '4px'
      });
      if (pos === colors.length) style = Object.assign(Object.assign({}, style), {
        borderBottomRightRadius: '4px'
      });
      return style;
    };
    const btnStyle = (0, lodash_1.sample)(variations);
    const getBtnStyle = index => {
      if (btnStyle.name === 'tight') {
        return Object.assign(Object.assign({}, btnStyle.style), getBorderRadiusStyle(index));
      }
      return btnStyle.style;
    };
    expose({
      leave: () => (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)())
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(__props.colors, (color, i) => {
        return (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_button_vue_1.default, (0, vue_2.mergeProps)({
          color: color.hex(),
          class: "k-pick-color-btn",
          style: getBtnStyle(i),
          onClick: () => handleColorSelected(color, `btnMotion${i}`)
        }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(i, {
          onComplete: handleTransitionComplete
        })), null, 16, ["color", "style", "onClick"])), [[_directive_motion, `btnMotion${i}`]]);
      }), 256))]);
    };
  }
});

/***/ }),

/***/ 2832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-91e89fe6"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-match-summary"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("h1", {
  class: "k-match-summary__h1"
}, " Game Over ", -1));
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("h2", {
  class: "k-match-summary__h2"
}, " But we had fun :) ", -1));
const _hoisted_4 = [_hoisted_2, _hoisted_3];
const _hoisted_5 = {
  class: "k-match-summary__content"
};
const _hoisted_6 = {
  key: 1
};
const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-error-message"
}, [/*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-error-message__icon"
}, [/*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-emoji-smile"
})]), /*#__PURE__*/(0, vue_2.createElementVNode)("div", null, " I had some trouble fetching your rank, but here are some fun stats from your game! ")], -1));
const _hoisted_8 = /*#__PURE__*/(0, vue_2.createTextVNode)("Rounds");
const _hoisted_9 = /*#__PURE__*/(0, vue_2.createTextVNode)("Score");
const _hoisted_10 = /*#__PURE__*/(0, vue_2.createTextVNode)("Skips Used");
const _hoisted_11 = /*#__PURE__*/(0, vue_2.createTextVNode)("Hints Accepted");
const _hoisted_12 = /*#__PURE__*/(0, vue_2.createTextVNode)("Difficulty Reached");
const _hoisted_13 = {
  key: 0
};
const _hoisted_14 = {
  key: 1
};
const _hoisted_15 = {
  key: 2
};
const _hoisted_16 = {
  key: 3
};
const _hoisted_17 = {
  key: 4
};
const _hoisted_18 = {
  key: 5
};
const _hoisted_19 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Speed ");
const _hoisted_20 = {
  key: 0
};
const _hoisted_21 = {
  key: 1
};
const _hoisted_22 = {
  key: 2
};
const _hoisted_23 = {
  key: 3
};
const _hoisted_24 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Precision ");
const _hoisted_25 = {
  key: 0
};
const _hoisted_26 = {
  key: 1
};
const _hoisted_27 = {
  key: 2
};
const _hoisted_28 = {
  key: 3
};
const _hoisted_29 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("span", null, "Tap to Continue", -1));
const _hoisted_30 = /*#__PURE__*/(0, vue_2.createTextVNode)();
const _hoisted_31 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-chevron-double-right ml1"
}, null, -1));
const _hoisted_32 = [_hoisted_29, _hoisted_30, _hoisted_31];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const rank_meter_vue_1 = tslib_1.__importDefault(__webpack_require__(5378));
const dotted_list_vue_1 = tslib_1.__importDefault(__webpack_require__(8528));
const dotted_list_item_vue_1 = tslib_1.__importDefault(__webpack_require__(8478));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'match-summary',
  props: {
    context: null,
    stats: null
  },
  emits: ['next'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "79d0f004": (0, vue_2.unref)(theme).theme.cardBg,
      "30ea7d54": (0, vue_2.unref)(theme).theme.titleBg
    }));
    const {
      game,
      theme
    } = (0, modules_1.useModule)();
    const hastePercentage = game.matchState.hasteCount / game.matchState.round;
    const precisionPercentage = game.matchState.precisionCount / game.matchState.precisionRounds;
    const rank = (0, vue_3.ref)({
      matchRank: -1,
      overrallRank: -1
    });
    let statsData = props.context === 'best' && props.stats ? props.stats : game.requests.statsData;
    if (statsData) {
      rank.value = {
        matchRank: statsData.matchRank,
        overrallRank: statsData.overrallRank
      };
    }
    const title = (0, vue_3.ref)();
    const motionInstance = (0, motion_1.useMotion)(title, {
      initial: {
        opacity: 0,
        y: -300
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: 300,
        transition: {
          duration: 500,
          ease: 'easeIn'
        }
      }
    });
    const tray = (0, vue_3.ref)();
    const trayMotion = (0, motion_1.useMotion)(tray, {
      initial: {
        opacity: 0,
        y: 200
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 350,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: 200,
        transition: {
          duration: 350,
          ease: 'easeIn'
        }
      }
    });
    if (props.context === 'rank') {
      game.resetBackground();
      game.startBackgroundFx();
    }
    //game.setBackgroundColor(Phaser.Display.Color.HexStringToColor(theme.getTheme('default')!.gameBg));
    const ready = (0, vue_3.ref)(false);
    const transitioning = (0, vue_3.ref)(false);
    const handleClick = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (!transitioning.value && ready.value) {
        transitioning.value = true;
        yield motionInstance.apply('leave');
        emit('next');
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", {
        ref_key: "title",
        ref: title,
        class: "k-match-summary__title"
      }, _hoisted_4, 512), [[vue_2.vShow, __props.context === 'rank']]), (0, vue_2.createElementVNode)("div", _hoisted_5, [(0, vue_2.unref)(statsData) ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(rank_meter_vue_1.default, {
        key: 0,
        stats: (0, vue_2.unref)(statsData),
        context: __props.context
      }, null, 8, ["stats", "context"])) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0, vue_2.createVNode)(dotted_list_vue_1.default, null, {
        default: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_8]),
          right: (0, vue_2.withCtx)(() => [(0, vue_2.createTextVNode)((0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.round), 1)]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_9]),
          right: (0, vue_2.withCtx)(() => [(0, vue_2.createTextVNode)((0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.score), 1)]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_10]),
          right: (0, vue_2.withCtx)(() => [(0, vue_2.createTextVNode)((0, vue_2.toDisplayString)(5 - (0, vue_2.unref)(game).matchState.skips), 1)]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_11]),
          right: (0, vue_2.withCtx)(() => [(0, vue_2.createTextVNode)((0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.hintCount), 1)]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_12]),
          right: (0, vue_2.withCtx)(() => [(0, vue_2.unref)(game).matchState.difficulty === 0 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_13, " Very Easy ")) : (0, vue_2.unref)(game).matchState.difficulty === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_14, " Easy ")) : (0, vue_2.unref)(game).matchState.difficulty === 2 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_15, " Moderate ")) : (0, vue_2.unref)(game).matchState.difficulty === 3 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_16, " Difficult ")) : (0, vue_2.unref)(game).matchState.difficulty >= 4 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_17, " Very Difficult ")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_18, " EXTREME "))]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_19]),
          right: (0, vue_2.withCtx)(() => [hastePercentage < .4 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_20, " Slow ")) : hastePercentage <= .6 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_21, " Moderate ")) : hastePercentage <= .85 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_22, " Fast ")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_23, " Aggresive "))]),
          _: 1
        }), (0, vue_2.createVNode)(dotted_list_item_vue_1.default, null, {
          left: (0, vue_2.withCtx)(() => [_hoisted_24]),
          right: (0, vue_2.withCtx)(() => [hastePercentage < .4 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_25, " Low ")) : hastePercentage <= .6 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_26, " Moderate ")) : hastePercentage <= .85 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_27, " High ")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_28, " Laser "))]),
          _: 1
        })]),
        _: 1
      })]))]), (0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", {
        ref_key: "tray",
        ref: tray,
        class: "k-match-summary__tray"
      }, [(0, vue_2.createElementVNode)("button", {
        class: "k-continue-btn",
        onClick: _cache[0] || (_cache[0] = () => emit('next'))
      }, _hoisted_32)], 512), [[vue_2.vShow, __props.context === 'rank']])]);
    };
  }
});

/***/ }),

/***/ 8859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-596687f4"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Align this color. ");
const _hoisted_2 = {
  key: 1,
  class: "k-color-text mb2"
};
const _hoisted_3 = {
  class: "k-gradient-bg"
};
const _hoisted_4 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Align these colors. ");
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("div", null, " Tap (anywhere) in sequence to stop each ring and align the colors. ", -1));
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const contrast_text_vue_1 = tslib_1.__importDefault(__webpack_require__(9315));
const color_util_1 = __webpack_require__(5365);
const radial_color_aligner_1 = __webpack_require__(3464);
const device_util_1 = __webpack_require__(2338);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const audio_util_1 = __webpack_require__(6780);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'align-disks',
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    game.clock.stop();
    const tones = (0, audio_util_1.ascending)('FX_ascending_', 1, 8);
    const colors = [];
    const targetColor = (0, vue_3.ref)(chroma_js_1.default.random());
    const variation = (0, vue_3.ref)(0);
    const state = (0, vue_3.ref)({
      distanceMin: 49,
      distanceMax: 100,
      slices: 4,
      tiers: 3,
      duration: 15000
    });
    /**
     * Each tier contains a unique set of colors, except for the target color which is present in all tiers at
     * the first position. As difficulty increases, the number of tiersa nd slices increases, and the distance between
     * colors is reduced.
     */
    const variation1 = () => {
      variation.value = 1;
      console.log(`Align Disks: Variation 1, Difficulty ${game.matchState.difficulty}`);
      if (game.matchState.difficulty === 0) {
        state.value = {
          distanceMin: 50,
          distanceMax: 90,
          slices: 4,
          tiers: 3,
          duration: 10000
        };
      } else if (game.matchState.difficulty === 1) {
        state.value = {
          distanceMin: 40,
          distanceMax: 80,
          slices: 8,
          tiers: 4,
          duration: 12000
        };
      } else if (game.matchState.difficulty === 2) {
        state.value = {
          distanceMin: 30,
          distanceMax: 70,
          slices: 12,
          tiers: 4,
          duration: 15000
        };
      } else if (game.matchState.difficulty === 3) {
        state.value = {
          distanceMin: 20,
          distanceMax: 50,
          slices: 12,
          tiers: 5,
          duration: 25000
        };
      } else if (game.matchState.difficulty >= 4) {
        state.value = {
          distanceMin: 10,
          distanceMax: 30,
          slices: 12,
          tiers: 5,
          duration: 25000
        };
      }
      for (let i = 0; i < state.value.tiers; i++) {
        colors[i] = [];
        colors[i][0] = targetColor.value; //Assign our target color to the first position
        for (let j = 1; j < state.value.slices; j++) {
          //if index is odd, push a blank color (black), will not be renderd by radial color aligner
          if (j % 2 !== 0) {
            colors[i].push((0, chroma_js_1.default)('black'));
            continue;
          } else {
            colors[i].push((0, color_util_1.getColorWithSimilarityInRange)(targetColor.value, state.value.distanceMin, state.value.distanceMax));
          }
        }
      }
    };
    /**
     * Each tier contains the exact same colors in the same order, however
     */
    const variation2 = () => {
      variation.value = 2;
      console.log(`Align Disks: Variation 2, Difficulty ${game.matchState.difficulty}`);
      if (game.matchState.difficulty === 0) {
        state.value = {
          distanceMin: 50,
          distanceMax: 100,
          slices: 4,
          tiers: 3,
          duration: 10000
        };
      } else if (game.matchState.difficulty === 1) {
        state.value = {
          distanceMin: 40,
          distanceMax: 90,
          slices: 8,
          tiers: 4,
          duration: 12000
        };
      } else if (game.matchState.difficulty === 2) {
        state.value = {
          distanceMin: 30,
          distanceMax: 80,
          slices: 12,
          tiers: 4,
          duration: 12000
        };
      } else if (game.matchState.difficulty === 3) {
        state.value = {
          distanceMin: 20,
          distanceMax: 40,
          slices: 16,
          tiers: 4,
          duration: 20000
        };
      } else if (game.matchState.difficulty >= 4) {
        state.value = {
          distanceMin: 10,
          distanceMax: 25,
          slices: 12,
          tiers: 4,
          duration: 20000
        };
      }
      let colorsAll = [];
      for (let j = 0; j < state.value.slices; j++) {
        if (j % 2 !== 0) {
          colorsAll.push((0, chroma_js_1.default)('black'));
          continue;
        } else {
          colorsAll.push((0, color_util_1.getColorWithSimilarityInRange)(targetColor.value, state.value.distanceMin, state.value.distanceMax));
        }
      }
      for (let i = 0; i < state.value.tiers; i++) {
        colors[i] = colorsAll;
      }
    };
    /**
     * Each tier contains one color of a gradient which must be completed
     */
    const gradientColors = (0, vue_3.ref)([]);
    const variation3 = () => {
      variation.value = 3;
      console.log(`Align Disks: Variation 3, Difficulty ${game.matchState.difficulty}`);
      if (game.matchState.difficulty === 0) {
        state.value = {
          distanceMin: 50,
          distanceMax: 100,
          slices: 4,
          tiers: 3,
          duration: 12000
        };
      } else if (game.matchState.difficulty === 1) {
        state.value = {
          distanceMin: 40,
          distanceMax: 90,
          slices: 8,
          tiers: 4,
          duration: 15000
        };
      } else if (game.matchState.difficulty === 2) {
        state.value = {
          distanceMin: 35,
          distanceMax: 80,
          slices: 12,
          tiers: 4,
          duration: 15000
        };
      } else if (game.matchState.difficulty === 3) {
        state.value = {
          distanceMin: 30,
          distanceMax: 70,
          slices: 16,
          tiers: 4,
          duration: 20000
        };
      } else if (game.matchState.difficulty >= 4) {
        state.value = {
          distanceMin: 30,
          distanceMax: 55,
          slices: 12,
          tiers: 4,
          duration: 20000
        };
      }
      targetColor.value = (0, color_util_1.getRandomNonUglyColor)();
      let c2 = (0, color_util_1.getColorWithSimilarityInRange)(targetColor.value, state.value.distanceMin, state.value.distanceMax);
      gradientColors.value = (0, color_util_1.interpolate)(targetColor.value, c2, state.value.tiers);
      for (let i = 0; i < state.value.tiers; i++) {
        colors[i] = [];
        colors[i][0] = gradientColors.value[i]; //Assign our next gradient step to the first position
        for (let j = 1; j < state.value.slices; j++) {
          //if index is odd, push a blank color (black), will not be renderd by radial color aligner
          if (j % 2 !== 0) {
            colors[i].push((0, chroma_js_1.default)('black'));
            continue;
          } else {
            //Assign a random and not-too-similar color to the other positions
            colors[i].push((0, color_util_1.getColorWithSimilarityInRange)(targetColor.value, 50, 100));
          }
        }
      }
      // for (let i = 0; i < state.value.tiers; i++){
      //     colors[i] = colorsAll;
      // }
    };
    /**
     * Randomly select a game variation. Variation 3 is only available on once the
     * difficult increases.
     */
    let variations = [variation1, variation2];
    if (game.matchState.difficulty >= 2) {
      variations.push(variation3);
    }
    Phaser.Utils.Array.GetRandom(variations)();
    let scene = game.gameScene;
    let radial = new radial_color_aligner_1.RadialColorAligner(scene, colors, {
      speed: Phaser.Math.Between(50, 70) / 100,
      radius: game.gameScene.cameras.main.width / 2 * .8,
      strokeWidth: 22,
      //direction: sample(['random', 'left', 'random', 'right', 'random'])!,
      direction: 'random',
      y: '50%'
    });
    const lockTier = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      (0, device_util_1.hapticsImpactLight)();
      radial.lockTier();
    });
    /**
     * Graceful unmount for Phaser components during game over
     */
    (0, vue_3.onBeforeUnmount)(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
      radial.destroy();
    }));
    (0, vue_3.onMounted)(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
      yield Promise.all([radial.enter()]);
      game.clock.start(state.value.duration);
    }));
    const container = (0, vue_3.ref)();
    const picker = (0, vue_3.ref)();
    const leave = () => {
      var _a;
      return Promise.all([(_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave(), container === null || container === void 0 ? void 0 : container.value.leave(), radial.leave()]);
    };
    /**
     * The "complete" event is emitted immediately after the player has locked in the last tier
     * but before all of the animations have completed. This exists so that we can stop the clock
     * so it won't still run during final animations.
     */
    radial.on('complete', () => game.clock.pause());
    radial.on('fail', () => emit('fail'));
    radial.on('lock', () => tones.next());
    radial.on('success', avgAccuracy => {
      game.matchState.precisionRounds += 1;
      game.clock.pause();
      /**
       * Add multiplier for a good average lock-in score
       */
      let multipliers = [];
      if (avgAccuracy > .85) {
        let factor = 1;
        if (avgAccuracy >= .9) factor = 3;
        if (avgAccuracy > .95) factor = 6;
        multipliers.push({
          factor,
          label: 'Precision Bonus'
        });
        game.matchState.precisionCount += 1;
      }
      emit('next', {
        baseScore: (game.matchState.difficulty + 1) * 25,
        scoreMultipliers: multipliers,
        background: colors[0][0]
      });
    });
    expose({
      leave
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onDown: lockTier,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [variation.value === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
          key: 0,
          class: "k-color-text mb2",
          style: (0, vue_2.normalizeStyle)({
            background: targetColor.value.hex()
          })
        }, [(0, vue_2.createVNode)(contrast_text_vue_1.default, {
          color: targetColor.value
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_1]),
          _: 1
        }, 8, ["color"])], 4)) : variation.value === 3 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", _hoisted_3, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(gradientColors.value, c => {
          return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
            class: "k-gradient-bg__step",
            style: (0, vue_2.normalizeStyle)({
              background: c.hex()
            })
          }, null, 4);
        }), 256))]), (0, vue_2.createVNode)(contrast_text_vue_1.default, {
          color: targetColor.value
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_4]),
          _: 1
        }, 8, ["color"])])) : (0, vue_2.createCommentVNode)("", true), _hoisted_5]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 1400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Which color would you say is ");
const _hoisted_3 = {
  style: {
    "font-weight": "500"
  }
};
const _hoisted_4 = /*#__PURE__*/(0, vue_2.createTextVNode)("? ");
const _hoisted_5 = /*#__PURE__*/(0, vue_2.createTextVNode)(" What would you call this color? ");
const _hoisted_6 = {
  class: "container-centered"
};
const NamedColors = tslib_1.__importStar(__webpack_require__(5606));
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(3850));
const lodash_1 = __webpack_require__(6486);
const color_util_1 = __webpack_require__(5365);
const name_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(844));
const contrast_color_text_vue_1 = tslib_1.__importDefault(__webpack_require__(5262));
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-by-name',
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    game.clock.stop();
    const namedColor = (0, vue_3.ref)(game.getNamedColor(true));
    const color = (0, vue_3.ref)((0, chroma_js_1.default)(namedColor.value.hex));
    const variation = (0, vue_3.ref)(1);
    const state1 = (0, vue_3.ref)({
      distanceMin: 49,
      distanceMax: 100,
      gridCount: 4,
      duration: 7000
    });
    const state2 = (0, vue_3.ref)({
      duration: 7000,
      names: []
    });
    const gridColors = (0, vue_3.ref)([]);
    const getNamedColor = (difficulty, exclude) => {
      let namedColors = (0, lodash_1.sample)(Array.from(Object.values(NamedColors))); //Pull a random set of colors
      //let namedColors = NamedColors[`NamedColors${difficulty}`];
      let namedColor = (0, lodash_1.sample)(namedColors);
      if (exclude.find(n => n.hex === namedColor.hex)) {
        return getNamedColor(difficulty, exclude);
      }
      return namedColor;
    };
    /**
     * Assembles a set of random colors and the target color. The count is the total number of colors to return,
     * including the target color.
     */
    const getNamedColorOptions = (targetColor, count) => {
      let names = [];
      names.push(targetColor);
      for (let i = 0; i < count - 1; i++) {
        let namedColor = getNamedColor((0, lodash_1.clamp)(game.matchState.difficulty, 0, 2), names);
        names.push(namedColor);
      }
      return (0, lodash_1.shuffle)(names);
    };
    /**
     * Given a name, select a color
     */
    const variation1 = () => {
      variation.value = 1;
      if (game.matchState.difficulty === 0) {
        state1.value = {
          distanceMin: 49,
          distanceMax: 100,
          gridCount: 4,
          duration: 6000
        };
      } else if (game.matchState.difficulty === 1) {
        state1.value = {
          distanceMin: 49,
          distanceMax: 100,
          gridCount: 4,
          duration: 6000
        };
      } else if (game.matchState.difficulty === 2) {
        state1.value = {
          distanceMin: 49,
          distanceMax: 100,
          gridCount: 8,
          duration: 6000
        };
      }
      for (let i = 0; i < state1.value.gridCount; i++) {
        gridColors.value.push((0, color_util_1.getColorWithSimilarityInRange)(color.value, state1.value.distanceMin, state1.value.distanceMax));
      }
      //Randomly assign one of the grid values to our goal color.
      gridColors.value[Phaser.Math.Between(0, gridColors.value.length - 1)] = color.value;
    };
    /**
     * Select from a smaller number of very similar colors
     */
    const variation2 = () => {
      variation.value = 2;
      if (game.matchState.difficulty === 0) {
        state2.value = {
          duration: 10000,
          names: getNamedColorOptions(namedColor.value, 3)
        };
      } else if (game.matchState.difficulty === 1) {
        state2.value = {
          duration: 10000,
          names: getNamedColorOptions(namedColor.value, 4)
        };
      } else if (game.matchState.difficulty === 2) {
        state2.value = {
          duration: 15000,
          names: getNamedColorOptions(namedColor.value, 4)
        };
      } else if (game.matchState.difficulty >= 3) {
        state2.value = {
          duration: 15000,
          names: getNamedColorOptions(namedColor.value, 5)
        };
      }
    };
    /**
     * Randomly select a game variation
     */
    Phaser.Utils.Array.GetRandom([variation1, variation2])();
    const container = (0, vue_3.ref)();
    const picker = (0, vue_3.ref)();
    const handleEnter = () => game.clock.start(variation.value === 1 ? state1.value.duration : state2.value.duration);
    const handleColorSelected = c => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (c.hex() === color.value.hex()) {
        emit('next', {
          background: c
        });
        return;
      }
      emit('fail');
    });
    const handleNameSelected = (name, usedHint) => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (name.hex === namedColor.value.hex) {
        if (usedHint) game.matchState.hintCount += 1;
        emit('next', {
          scoreMultipliers: usedHint ? [{
            label: 'Hint Penalty',
            factor: -6
          }] : [],
          background: (0, chroma_js_1.default)(name.hex)
        });
        return;
      }
      emit('fail');
    });
    expose({
      leave: () => {
        var _a;
        return Promise.all([(_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave(), container === null || container === void 0 ? void 0 : container.value.leave()]);
      }
    });
    console.log(`Color By Name: Variation ${variation.value}, Difficulty ${game.matchState.difficulty}`);
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [variation.value === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0, vue_2.createElementVNode)("span", _hoisted_3, (0, vue_2.toDisplayString)((0, vue_2.unref)(lodash_1.capitalize)(namedColor.value.name)), 1), _hoisted_4])) : ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(contrast_color_text_vue_1.default, {
          key: 1,
          color: (0, vue_2.unref)(chroma_js_1.default)(namedColor.value.hex)
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_5]),
          _: 1
        }, 8, ["color"]))]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_6, [variation.value === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_picker_vue_1.default, {
          key: 0,
          ref_key: "picker",
          ref: picker,
          colors: gridColors.value,
          onEnter: handleEnter,
          onSelect: handleColorSelected
        }, null, 8, ["colors"])) : ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(name_picker_vue_1.default, {
          key: 1,
          ref_key: "picker",
          ref: picker,
          names: state2.value.names,
          "target-name": namedColor.value,
          onEnter: handleEnter,
          onSelect: handleNameSelected
        }, null, 8, ["names", "target-name"]))])]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 2848:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Tap when the background is the same color! ");
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Tap when the background is the same color! ");
const _hoisted_3 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Tap the correct color when the background matches it! ");
const _hoisted_4 = {
  key: 1,
  class: "container-centered"
};
const _hoisted_5 = {
  class: "k-phase-btn-container"
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const color_util_1 = __webpack_require__(5365);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const phasing_background_vue_1 = tslib_1.__importDefault(__webpack_require__(973));
const phasing_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1531));
const expanding_circle_vue_1 = tslib_1.__importDefault(__webpack_require__(6433));
const contrast_color_text_vue_1 = tslib_1.__importDefault(__webpack_require__(5262));
const color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(3850));
const lodash_1 = __webpack_require__(6486);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-phase',
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "6ed0b954": (0, vue_2.unref)(phaseBtnSize)
    }));
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    const failed = (0, vue_3.ref)(false);
    const targetColor = (0, vue_3.ref)((0, color_util_1.getRandomNonUglyColor)());
    const variation = (0, vue_3.ref)(1);
    const colors = (0, vue_3.ref)([]);
    const phaseStepBackground = (0, vue_3.ref)([]);
    const phaseSteps = (0, vue_3.ref)([]);
    const bgComponentRef = (0, vue_3.ref)();
    const containerRef = (0, vue_3.ref)();
    const circleLeaveFxRef = (0, vue_3.ref)();
    const phaseBtnRefs = (0, vue_3.ref)([]);
    const picker = (0, vue_3.ref)();
    const state = (0, vue_3.ref)({
      distanceMin: 49,
      distanceMax: 100,
      phaseDurationMin: 750,
      phaseDurationMax: 4000,
      colorCount: 1,
      threshold: 12,
      shape: 'square'
    });
    /**
     * Tap the correct color as the background phases through it.
     */
    const variation1 = () => {
      variation.value = 1;
      if (game.matchState.difficulty === 0) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 1,
          threshold: 12,
          shape: 'square'
        };
      } else if (game.matchState.difficulty === 1) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 4,
          threshold: 10,
          shape: 'square'
        };
      } else if (game.matchState.difficulty === 2) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 8,
          threshold: 9,
          shape: 'square'
        };
      } else if (game.matchState.difficulty === 3) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 12,
          threshold: 8,
          shape: 'square'
        };
      } else if (game.matchState.difficulty >= 4) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 16,
          threshold: 7,
          shape: 'square'
        };
      }
      /**
       * Generate a list of colors to choose from and a
       */
      colors.value[0] = targetColor.value;
      for (let i = 1; i < state.value.colorCount; i++) {
        colors.value.push((0, color_util_1.getRandomNonUglyColor)());
      }
      colors.value = Phaser.Utils.Array.Shuffle(colors.value);
      /**
       * Randomly get a basic phase step set which either phases directly into the
       * target color or phases to an intermediate color first.
       */
      phaseStepBackground.value = (0, lodash_1.sample)([[{
        duration: 'random',
        color: 'random'
      }, {
        duration: 'random',
        color: targetColor.value.hex()
      }], [{
        duration: 'random',
        color: targetColor.value.hex()
      }, {
        duration: 'random',
        color: 'random'
      }]]);
    };
    /**
     * Generates random phase steps where none of the steps will (probably) ever match the target color.
     */
    const getRandomSteps = count => {
      let steps = [];
      for (let i = 0; i < count; i++) {
        steps.push({
          duration: (0, lodash_1.random)(750, 4000),
          color: 'random'
        });
      }
      return steps;
    };
    /**
     * Generates a series of phase steps where one of them is the target color.
     * These same phase steps are used for both the background and the button, however the
     * "random" color is dynamically generated for either.
     */
    const getTargetSteps = function () {
      let durationMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 750;
      let durationMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
      let stepCount = (0, lodash_1.random)(3, 5);
      let targetIndex = (0, lodash_1.random)(2, stepCount - 1); //target should never be the first step
      let steps = [];
      for (let i = 0; i < stepCount; i++) {
        if (i === targetIndex) {
          steps.push({
            duration: (0, lodash_1.random)(durationMin, durationMax),
            color: targetColor.value.hex()
          });
        } else {
          steps.push({
            duration: (0, lodash_1.random)(durationMin, durationMax),
            color: 'random'
          });
        }
      }
      return steps;
    };
    const variation2 = () => {
      variation.value = 2;
      if (game.matchState.difficulty < 2) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 4000,
          colorCount: 1,
          threshold: 5,
          shape: 'square'
        };
      } else if (game.matchState.difficulty === 2) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 3000,
          colorCount: 3,
          threshold: 5,
          shape: (0, lodash_1.sample)(['circle', 'square'])
        };
      } else if (game.matchState.difficulty === 3) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 3000,
          colorCount: 4,
          threshold: 5,
          shape: (0, lodash_1.sample)(['circle', 'square'])
        };
      } else if (game.matchState.difficulty > 3) {
        state.value = {
          distanceMin: 49,
          distanceMax: 100,
          phaseDurationMin: 750,
          phaseDurationMax: 2750,
          colorCount: 6,
          threshold: 5,
          shape: (0, lodash_1.sample)(['circle', 'square'])
        };
      }
      /**
       * Generates multiples sets of phase steps, including one set which will contain our target color and be
       * used for both the background and one of the buttons (and so will be synchronized).
       */
      let targetSteps = getTargetSteps(state.value.phaseDurationMin, state.value.phaseDurationMax);
      let steps = [targetSteps];
      for (let i = 1; i < state.value.colorCount; i++) {
        steps.push(getRandomSteps(5));
      }
      phaseStepBackground.value = targetSteps;
      phaseSteps.value = (0, lodash_1.shuffle)(steps);
    };
    if (game.matchState.difficulty === 0) variation1();else (0, lodash_1.sample)([variation1, variation2])();
    //variation2();
    const handlePhaseButtonEnter = exposed => phaseBtnRefs.value.push(exposed);
    const phaseButtonsLeave = () => {
      return Promise.all(phaseBtnRefs.value.map((exp, i) => exp.leave((25 - i) * i)));
    };
    const leave = () => {
      var _a;
      return Promise.all([(_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave(), phaseButtonsLeave(), circleLeaveFxRef === null || circleLeaveFxRef === void 0 ? void 0 : circleLeaveFxRef.value.leave(), containerRef === null || containerRef === void 0 ? void 0 : containerRef.value.leave()]);
    };
    /**
     * Handler for when a color from the color picker is selected. This one requires that the color
     * selected is our target color, regardless of how close the deltaE value is to the color selected.
     */
    const buttonClicked = (0, vue_3.ref)(false);
    const handleColorSelected = selected => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (buttonClicked.value) return; //Ensure we only handle one click
      buttonClicked.value = true;
      if (bgComponentRef.value) {
        let bgColor = bgComponentRef.value.stop();
        let isTargetColor = selected.hex() === targetColor.value.hex();
        let distance = chroma_js_1.default.deltaE(selected, bgColor);
        if (isTargetColor && distance <= state.value.threshold) {
          game.matchState.precisionRounds += 1;
          let multipliers = [];
          if (distance <= 1) {
            game.matchState.precisionCount += 1;
            multipliers.push({
              factor: 4,
              label: 'Precision Bonus'
            });
          }
          emit('next', {
            scoreMultipliers: multipliers
          });
          return;
        }
        failed.value = true; //Will hide bg so that our red failure FX will not be obscured
        emit('fail');
      }
    });
    /**
     * Handler for when the phase button is pressed. This one compares the deltaE value of two colors
     * for which we don't have an absolute color value for.
     */
    const handlePhaseButtonDown = selectedColor => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (buttonClicked.value) return; //Ensure we only handle one click
      buttonClicked.value = true;
      //let selected : chroma.Color = phaseBtnRef.value.stop();
      let bgColor = bgComponentRef.value.stop();
      let distance = chroma_js_1.default.deltaE(selectedColor, bgColor);
      if (distance <= state.value.threshold) {
        game.matchState.precisionRounds += 1;
        let multipliers = [];
        if (distance <= 1) {
          game.matchState.precisionCount += 1;
          multipliers.push({
            factor: 4,
            label: 'Precision Bonus'
          });
        }
        emit('next', {
          scoreMultipliers: multipliers
        });
        return;
      }
      failed.value = true;
      emit('fail');
    });
    let phaseBtnSize = "60%";
    if (state.value.colorCount > 1) {
      phaseBtnSize = "40%";
    }
    // const phaseBtnSize = `${clamp(100 / (state.value.colorCount + 1), 15, 60)}%`;
    expose({
      leave
    });
    console.log(`Color Phase: Variation ${variation.value}, Difficulty ${game.matchState.difficulty}`);
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "containerRef",
        ref: containerRef,
        "high-contrast": true,
        "infinite-time": true,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [variation.value === 1 && colors.value.length === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(contrast_color_text_vue_1.default, {
          key: 0,
          color: targetColor.value
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_1]),
          _: 1
        }, 8, ["color"])) : variation.value === 2 ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(contrast_color_text_vue_1.default, {
          key: 1,
          color: (0, vue_2.unref)(chroma_js_1.default)('#0000006c')
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_2]),
          _: 1
        }, 8, ["color"])) : ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(contrast_color_text_vue_1.default, {
          key: 2,
          color: (0, vue_2.unref)(chroma_js_1.default)('#0000006c')
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_3]),
          _: 1
        }, 8, ["color"]))]),
        content: (0, vue_2.withCtx)(() => [variation.value === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_picker_vue_1.default, {
          key: 0,
          ref_key: "picker",
          ref: picker,
          colors: colors.value,
          onSelect: handleColorSelected
        }, null, 8, ["colors"])) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_4, [(0, vue_2.createElementVNode)("div", _hoisted_5, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(phaseSteps.value, (steps, i) => {
          return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(phasing_button_vue_1.default, {
            targetColor: targetColor.value,
            steps: steps,
            shape: state.value.shape,
            delay: (25 - i) * i,
            class: "k-phase-btn",
            onSelect: handlePhaseButtonDown,
            onEnter: handlePhaseButtonEnter
          }, null, 8, ["targetColor", "steps", "shape", "delay"]);
        }), 256))])])), !failed.value ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(phasing_background_vue_1.default, {
          key: 2,
          ref_key: "bgComponentRef",
          ref: bgComponentRef,
          targetColor: targetColor.value,
          steps: phaseStepBackground.value
        }, null, 8, ["targetColor", "steps"])) : (0, vue_2.createCommentVNode)("", true), (0, vue_2.createVNode)(expanding_circle_vue_1.default, {
          ref_key: "circleLeaveFxRef",
          ref: circleLeaveFxRef
        }, null, 512)]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 3445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-0124d255"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("div", null, " Tap any color which doesn't quite match the vibe! ", -1));
const _hoisted_2 = {
  class: "flex-centered",
  style: {
    "height": "100%"
  }
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const color_util_1 = __webpack_require__(5365);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(3850));
const shuffle_1 = tslib_1.__importDefault(__webpack_require__(9983));
const audio_util_1 = __webpack_require__(6780);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'odd-man-out',
  props: {
    difficulty: {
      type: Number,
      default: 0
    }
  },
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const props = __props;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    const tones = (0, audio_util_1.ascending)('FX_ascending_', 1, 8);
    const nonTargetColor = (0, vue_3.ref)((0, color_util_1.getRandomNonUglyColor)());
    const targetColors = (0, vue_3.ref)([]);
    const nonTargetColors = (0, vue_3.ref)([]);
    const combinedColors = (0, vue_3.ref)([]);
    const selectedCount = (0, vue_3.ref)(0);
    const state = (0, vue_3.ref)({
      distanceMin: 20,
      distanceMax: 25,
      targetDistanceMin: 90,
      targetDistanceMax: 100,
      targetCount: 1,
      nonTargetCount: 7,
      duration: 5000
    });
    /**
     * Select from a large number of not similar colors
     */
    const variation1 = () => {
      if (props.difficulty === 0) {
        state.value = {
          distanceMin: 15,
          distanceMax: 20,
          targetDistanceMin: 80,
          targetDistanceMax: 90,
          targetCount: 1,
          nonTargetCount: 7,
          duration: 5000
        };
      } else if (props.difficulty === 1) {
        state.value = {
          distanceMin: 20,
          distanceMax: 30,
          targetDistanceMin: 75,
          targetDistanceMax: 90,
          targetCount: 3,
          nonTargetCount: 17,
          duration: 5000
        };
      } else if (props.difficulty === 2) {
        state.value = {
          distanceMin: 20,
          distanceMax: 30,
          targetDistanceMin: 75,
          targetDistanceMax: 90,
          targetCount: 5,
          nonTargetCount: 15,
          duration: 7000
        };
      } else if (props.difficulty === 3) {
        state.value = {
          distanceMin: 20,
          distanceMax: 30,
          targetDistanceMin: 60,
          targetDistanceMax: 90,
          targetCount: 6,
          nonTargetCount: 14,
          duration: 10000
        };
      } else if (props.difficulty >= 4) {
        state.value = {
          distanceMin: 20,
          distanceMax: 30,
          targetDistanceMin: 60,
          targetDistanceMax: 90,
          targetCount: 7,
          nonTargetCount: 18,
          duration: 10000
        };
      }
      /**
       * Populate the grid colors. This a list of very similar colors to the non-target color.
       */
      for (let i = 0; i < state.value.nonTargetCount; i++) {
        nonTargetColors.value.push((0, color_util_1.getColorWithSimilarityInRange)(nonTargetColor.value, state.value.distanceMin, state.value.distanceMax, false));
      }
      /**
       * Populate our list of target colors. These are the colors that the player needs
       * to select / elmiminate.
       */
      for (let i = 0; i < state.value.targetCount; i++) {
        targetColors.value.push((0, color_util_1.getColorWithSimilarityInRange)(nonTargetColor.value, state.value.targetDistanceMin, state.value.targetDistanceMax));
      }
      combinedColors.value = (0, shuffle_1.default)([...targetColors.value, ...nonTargetColors.value]);
    };
    variation1();
    const container = (0, vue_3.ref)();
    const picker = (0, vue_3.ref)();
    const handleEnter = () => game.clock.start(state.value.duration);
    const handleColorSelected = c => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (targetColors.value.includes(c)) {
        selectedCount.value++;
        if (selectedCount.value === targetColors.value.length) {
          emit('next', {
            background: c
          });
          return;
        } else {
          tones.next();
        }
      } else {
        emit('fail');
      }
    });
    expose({
      leave: () => {
        var _a;
        return Promise.all([(_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave(), container === null || container === void 0 ? void 0 : container.value.leave()]);
      }
    });
    console.log(`Odd Man Out: Variation 1, Difficulty ${props.difficulty}`);
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [_hoisted_1]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createVNode)(color_picker_vue_1.default, {
          ref_key: "picker",
          ref: picker,
          colors: combinedColors.value,
          eliminiation: true,
          onEnter: handleEnter,
          onSelect: handleColorSelected
        }, null, 8, ["colors"])])]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 1005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-47ca570c"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};
const _hoisted_3 = {
  key: 0,
  class: "container-centered"
};
const _hoisted_4 = {
  key: 1,
  class: "k-tap-gradient-container",
  style: {
    "height": "100%"
  }
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const transitions_1 = __webpack_require__(5190);
const vuedraggable_1 = tslib_1.__importDefault(__webpack_require__(9980));
const done_button_vue_1 = tslib_1.__importDefault(__webpack_require__(6808));
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const color_button_vue_1 = tslib_1.__importDefault(__webpack_require__(8320));
const gradient_shape_vue_1 = tslib_1.__importDefault(__webpack_require__(6012));
const color_util_1 = __webpack_require__(5365);
const shuffle_1 = tslib_1.__importDefault(__webpack_require__(9983));
const lodash_1 = __webpack_require__(6486);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'order-gradient',
  props: {
    difficulty: {
      type: Number,
      default: 0
    }
  },
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const props = __props;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    const dragging = (0, vue_3.ref)(false);
    const variation = (0, vue_3.ref)(1);
    const stateVariation1 = (0, vue_3.ref)({
      distanceMin: 20,
      distanceMax: 30,
      gradientCount: 8,
      duration: 15000
    });
    const stateVariation2 = (0, vue_3.ref)({
      swapCount: 4,
      gridSize: 6,
      duration: 60000
    });
    const gradientColors = (0, vue_3.ref)([]);
    const gradientColorsShuffled = (0, vue_3.ref)([]);
    const selectedColors = (0, vue_3.ref)([]);
    if (props.difficulty === 0) {
      variation.value = 1;
      stateVariation1.value = {
        distanceMin: 20,
        distanceMax: 30,
        gradientCount: 5,
        duration: 10000
      };
    } else if (props.difficulty === 1) {
      variation.value = (0, lodash_1.sample)([1, 2]);
      if (variation.value === 1) {
        stateVariation1.value = {
          distanceMin: 20,
          distanceMax: 35,
          gradientCount: 8,
          duration: 15000
        };
      } else {
        stateVariation2.value = {
          swapCount: 2,
          gridSize: 5,
          duration: 30000
        };
      }
    } else if (props.difficulty === 2) {
      variation.value = (0, lodash_1.sample)([1, 2]);
      if (variation.value === 1) {
        stateVariation1.value = {
          distanceMin: 60,
          distanceMax: 100,
          gradientCount: 10,
          duration: 20000
        };
      } else {
        stateVariation2.value = {
          swapCount: 3,
          gridSize: 6,
          duration: 45000
        };
      }
    } else if (props.difficulty === 3) {
      variation.value = 2;
      stateVariation2.value = {
        swapCount: 4,
        gridSize: 6,
        duration: 60000
      };
    } else if (props.difficulty === 4) {
      variation.value = 2;
      stateVariation2.value = {
        swapCount: 5,
        gridSize: 7,
        duration: 60000
      };
    } else if (props.difficulty >= 5) {
      variation.value = 2;
      stateVariation2.value = {
        swapCount: 8,
        gridSize: 8,
        duration: 80000
      };
    }
    if (variation.value === 1) {
      let c1 = (0, color_util_1.getRandomNonUglyColor)();
      let c2 = (0, color_util_1.getColorWithSimilarityInRange)(c1, stateVariation1.value.distanceMin, stateVariation1.value.distanceMax);
      gradientColors.value = (0, color_util_1.interpolate)(c1, c2, stateVariation1.value.gradientCount);
      gradientColorsShuffled.value = (0, shuffle_1.default)(gradientColors.value);
    }
    const testOrder = arr => {
      return gradientColors.value.reduce((acc, curr, i) => {
        if (curr !== arr[i]) {
          acc = false;
        }
        return acc;
      }, true);
    };
    const handleColorSelected = color => {
      if (selectedColors.value.includes(color)) {
        selectedColors.value = selectedColors.value.filter(c => c !== color);
        return;
      }
      selectedColors.value.push(color);
    };
    const doneBtn = (0, vue_3.ref)();
    const container = (0, vue_3.ref)();
    const leave = () => {
      var _a, _b, _c;
      if (variation.value === 1) {
        return Promise.all([(0, transitions_1.gameSetLeave)((0, motion_1.useMotions)()), container === null || container === void 0 ? void 0 : container.value.leave(), (_a = doneBtn.value) === null || _a === void 0 ? void 0 : _a.leave()]);
      } else {
        return Promise.all([container === null || container === void 0 ? void 0 : container.value.leave(), (_b = gradientShape.value) === null || _b === void 0 ? void 0 : _b.leave(), (_c = doneBtn.value) === null || _c === void 0 ? void 0 : _c.leave()]);
      }
    };
    const gradientShape = (0, vue_3.ref)();
    const handleCheckOrder = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      var _a;
      let valid = false;
      if (variation.value === 1) {
        valid = testOrder(gradientColorsShuffled.value) || testOrder([...gradientColorsShuffled.value].reverse());
      } else if (variation.value === 2) {
        valid = (_a = gradientShape.value) === null || _a === void 0 ? void 0 : _a.isOrderValid();
      }
      if (valid) {
        emit('next', {
          baseScore: 50,
          background: gradientColors.value[0]
        });
        return;
      }
      emit('fail');
    });
    const started = (0, vue_3.ref)(false);
    const handleVariation1Enter = index => {
      let count = stateVariation1.value.gradientCount - 1;
      if (started.value === false && index === count) {
        started.value = true;
        game.clock.start(stateVariation1.value.duration);
      }
    };
    const handleVariation2Enter = () => {
      game.clock.start(stateVariation2.value.duration);
    };
    expose({
      leave
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onSkip: _cache[2] || (_cache[2] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [variation.value === 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, " Drag the colors into order! ")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_2, " Swap the tiles until the gradient is repaired! "))]),
        content: (0, vue_2.withCtx)(() => [variation.value === 2 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_3, [(0, vue_2.createVNode)(gradient_shape_vue_1.default, {
          ref_key: "gradientShape",
          ref: gradientShape,
          class: "mb4",
          "grid-count": stateVariation2.value.gridSize,
          "swap-count": stateVariation2.value.swapCount,
          onEnter: handleVariation2Enter
        }, null, 8, ["grid-count", "swap-count"]), (0, vue_2.createVNode)(done_button_vue_1.default, {
          ref_key: "doneBtn",
          ref: doneBtn,
          width: "25%",
          onClick: handleCheckOrder
        }, null, 512)])) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_4, [(0, vue_2.createVNode)((0, vue_2.unref)(vuedraggable_1.default), {
          list: gradientColorsShuffled.value,
          animation: 200,
          "item-key": "rgba",
          class: "k-tap-gradient-colors mb3",
          onStart: _cache[0] || (_cache[0] = $event => dragging.value = true),
          onEnd: _cache[1] || (_cache[1] = $event => dragging.value = false)
        }, {
          item: (0, vue_2.withCtx)(_ref2 => {
            let {
              element,
              index
            } = _ref2;
            return [(0, vue_2.withDirectives)((0, vue_2.createVNode)(color_button_vue_1.default, (0, vue_2.mergeProps)({
              color: element.hex(),
              class: "k-tap-gradient-btn",
              onClick: () => handleColorSelected(element)
            }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(index, {
              onComplete: handleVariation1Enter
            })), null, 16, ["color", "onClick"]), [[_directive_motion, `btnMotion${index}`]])];
          }),
          _: 1
        }, 8, ["list"]), (0, vue_2.createVNode)(done_button_vue_1.default, {
          ref_key: "doneBtn",
          ref: doneBtn,
          width: "25%",
          onClick: handleCheckOrder
        }, null, 512)]))]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};
const _hoisted_3 = {
  class: "k-drop-zones mb2"
};
const _hoisted_4 = ["id", "data-index", "onPointerdown"];
const _hoisted_5 = ["id"];
const _hoisted_6 = {
  class: "k-pattern-mem-bottom"
};
const _hoisted_7 = {
  class: "k-draggables-container"
};
const _hoisted_8 = ["data-index"];
const _hoisted_9 = {
  class: "k-countdown-duration"
};
const _hoisted_10 = {
  key: 0,
  class: "k-countdown-duration"
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const done_button_vue_1 = tslib_1.__importDefault(__webpack_require__(6808));
const countdown_seconds_vue_1 = tslib_1.__importDefault(__webpack_require__(5811));
const color_util_1 = __webpack_require__(5365);
const interactjs_1 = tslib_1.__importDefault(__webpack_require__(8496));
const shuffle_1 = tslib_1.__importDefault(__webpack_require__(9983));
const reactivity_1 = __webpack_require__(2262);
const audio_util_1 = __webpack_require__(6780);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'pattern-memory',
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "e84726a6": (0, vue_2.unref)(theme).theme.cardBg
    }));
    const {
      game,
      theme
    } = (0, modules_1.useModule)();
    const tones = (0, audio_util_1.ascending)('FX_ascending_', 1, 8);
    //const color = shallowRef(getRandomNonUglyColor());
    const colors = (0, vue_3.ref)([]);
    const pattern = (0, vue_3.ref)({});
    const placed = (0, vue_3.ref)({});
    const state = (0, vue_3.ref)({
      distanceMin: 49,
      distanceMax: 100,
      patternCount: 4,
      countdownDuration: 5000,
      duration: 15000
    });
    const showDoneBtn = (0, reactivity_1.computed)(() => {
      return Object.keys(placed.value).length === state.value.patternCount;
    });
    if (game.matchState.difficulty === 0) {
      state.value = {
        distanceMin: 49,
        distanceMax: 100,
        patternCount: 3,
        countdownDuration: 5000,
        duration: 10000
      };
    } else if (game.matchState.difficulty === 1) {
      state.value = {
        distanceMin: 40,
        distanceMax: 90,
        patternCount: 4,
        countdownDuration: 5000,
        duration: 10000
      };
    } else if (game.matchState.difficulty === 2) {
      state.value = {
        distanceMin: 30,
        distanceMax: 80,
        patternCount: 4,
        countdownDuration: 6000,
        duration: 15000
      };
    } else if (game.matchState.difficulty >= 4) {
      state.value = {
        distanceMin: 25,
        distanceMax: 60,
        patternCount: 6,
        countdownDuration: 7000,
        duration: 15000
      };
    }
    const getUniqueColor = () => {
      let color = (0, color_util_1.getRandomNonUglyColor)();
      for (let i = 0; i < colors.value.length; i++) {
        let validRange = (0, color_util_1.deltaEInRange)(color, colors.value[i], 20, 100);
        if (!validRange) {
          return getUniqueColor();
        }
      }
      return color;
    };
    /**
     * Selects a number of random positions in the grid and generates a color for each. Populates the pattern
     * map and the color array, which is then shuffled and used to populate the draggable elements. Also applies
     * the proper background color to the appropriate zone fill elements.
     */
    const generatePattern = () => {
      //Generate a number of unique indexes over our pattern/grid size (3x3=9)
      let gridPositions = new Set();
      while (gridPositions.size < state.value.patternCount) {
        gridPositions.add(Math.floor(Math.random() * 9));
      }
      //Generate a color for each grid position and add it to the pattern map, assing color to zone fill el
      let gridColors = {};
      for (let pos of gridPositions) {
        let gridColor = getUniqueColor();
        colors.value.push(gridColor);
        gridColors[pos] = gridColor;
        let fill = document.getElementById(`zone-fill${pos}`);
        if (fill) fill.style.background = gridColor.hex();
      }
      pattern.value = gridColors;
    };
    const resetDraggablePos = draggableIndex => {
      let draggable = document.querySelector(`.k-pattern-memory-draggable[data-index="${draggableIndex}"]`);
      if (draggable) {
        draggable.style.transform = 'translate(0px, 0px)';
        draggable.setAttribute('data-x', '0');
        draggable.setAttribute('data-y', '0');
      }
    };
    const clearZone = zoneIndex => {
      if (placed.value[zoneIndex] === undefined) return;
      //Reset zone color and return draggable back to its original position / make it visible
      let zone = document.getElementById(`zone${zoneIndex}`);
      let zoneFill = zone === null || zone === void 0 ? void 0 : zone.querySelector('.k-drop-zone-fill');
      let draggableIndex = placed.value[zoneIndex];
      let draggable = document.querySelector(`.k-pattern-memory-draggable[data-index="${draggableIndex}"]`);
      zoneFill.style.background = 'transparent';
      draggable.style.visibility = 'visible';
      delete placed.value[zoneIndex];
      tones.previous(true);
    };
    const placeZone = (zoneIndex, draggableIndex) => {
      if (placed.value[zoneIndex] !== undefined) {
        clearZone(zoneIndex);
      }
      //Set zone color and move draggable to zone
      let zone = document.getElementById(`zone${zoneIndex}`);
      let zoneFill = zone === null || zone === void 0 ? void 0 : zone.querySelector('.k-drop-zone-fill');
      let draggable = document.querySelector(`.k-pattern-memory-draggable[data-index="${draggableIndex}"]`);
      //let color = colors.value[draggableIndex];
      zoneFill.style.background = colors.value[draggableIndex].hex();
      draggable.style.visibility = 'hidden';
      placed.value[zoneIndex] = draggableIndex;
      resetDraggablePos(draggableIndex);
      tones.next();
    };
    function dragMoveListener(event) {
      var _a, _b;
      let d = event.target;
      let [x, y] = [parseFloat((_a = d.getAttribute('data-x')) !== null && _a !== void 0 ? _a : '0'), parseFloat((_b = d.getAttribute('data-y')) !== null && _b !== void 0 ? _b : '0')];
      let [nextX, nextY] = [x + event.dx, y + event.dy];
      d.style.transform = `translate(${nextX}px, ${nextY}px)`;
      d.setAttribute('data-x', nextX.toString());
      d.setAttribute('data-y', nextY.toString());
    }
    const dragContainerRef = (0, vue_3.ref)();
    (0, vue_3.onMounted)(() => {
      if (!dragContainerRef.value) return;
      (0, interactjs_1.default)('.k-pattern-memory-draggable').draggable({
        inertia: false,
        modifiers: [interactjs_1.default.modifiers.restrict({
          restriction: dragContainerRef.value.getBoundingClientRect(),
          endOnly: true
        })],
        autoScroll: false,
        listeners: {
          move: dragMoveListener,
          end(event) {
            let draggable = event.target;
            draggable.setAttribute('data-x', '0');
            draggable.setAttribute('data-y', '0');
            draggable.style.transition = `transform 300ms`;
            draggable.style.transform = `translate(${0}px, ${0}px)`;
            setTimeout(() => {
              draggable.style.transition = `none`;
            }, 300);
          }
        }
      });
      (0, interactjs_1.default)('.k-drop-zone').dropzone({
        accept: '.k-pattern-memory-draggable',
        overlap: 0.5,
        ondropactivate: event => {
          let dropzone = event.target;
          dropzone.classList.add('k-drop-active');
        },
        ondragenter: event => {
          let dropzone = event.target;
          dropzone.classList.add('k-drop-zone--hover');
        },
        ondragleave: function (event) {
          let dropzone = event.target;
          dropzone.classList.remove('k-drop-zone--hover');
        },
        ondrop: function (event) {
          var _a, _b;
          let dropzone = event.target;
          dropzone.classList.remove('k-drop-zone--hover');
          let dropzoneIndex = parseInt((_a = dropzone.getAttribute('data-index')) !== null && _a !== void 0 ? _a : '0');
          let draggable = event.relatedTarget;
          let draggableIndex = parseInt((_b = draggable.getAttribute('data-index')) !== null && _b !== void 0 ? _b : '0');
          placeZone(dropzoneIndex, draggableIndex);
        },
        ondropdeactivate: function (event) {
          let dropzone = event.target;
          dropzone.classList.remove('k-drop-zone--hover');
        }
      });
    });
    const overlay = (0, vue_3.ref)();
    const {
      apply
    } = (0, motion_1.useMotion)(overlay, {
      initial: {
        opacity: 0
      },
      flash: {
        opacity: 1,
        transition: {
          duration: 0,
          ease: 'linear',
          onComplete: () => apply('flashExit')
        }
      },
      flashExit: {
        opacity: 0,
        transition: {
          duration: 3000,
          ease: 'easeOut'
        }
      }
    });
    const resetDropzoneFills = () => {
      document.querySelectorAll('.k-drop-zone-fill').forEach(node => {
        node.style.background = 'transparent';
      });
    };
    const countdownComplete = (0, vue_3.ref)(false);
    const handleCountdownComplete = () => {
      apply('flash');
      resetDropzoneFills();
      colors.value = (0, shuffle_1.default)(colors.value);
      countdownComplete.value = true;
      game.clock.start(state.value.duration);
    };
    //Necessary if user skips before countdown is complete
    (0, vue_3.onBeforeUnmount)(() => {
      (0, interactjs_1.default)('.k-pattern-memory-draggable').unset();
      (0, interactjs_1.default)('.k-drop-zone').unset();
      //clearTimeout(countdownTimeout.value);
    });

    const countdownRef = (0, vue_3.ref)();
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      var _a;
      if (entered.value === false && index === 8) {
        entered.value = true;
        (_a = countdownRef.value) === null || _a === void 0 ? void 0 : _a.start();
        //countdown();
      }
    };

    const container = (0, vue_3.ref)();
    const doneBtnRef = (0, vue_3.ref)();
    const leave = () => {
      var _a, _b;
      return Promise.all([(_a = doneBtnRef.value) === null || _a === void 0 ? void 0 : _a.leave(), container === null || container === void 0 ? void 0 : container.value.leave(), (_b = countdownRef.value) === null || _b === void 0 ? void 0 : _b.leave(), (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)())]);
    };
    const handleSubmit = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      let patternEntries = Array.from(Object.entries(pattern.value));
      for (let i = 0; i < patternEntries.length; i++) {
        let [zoneIndex, patternColor] = patternEntries[i];
        let draggableIndex = placed.value[parseInt(zoneIndex)];
        if (draggableIndex !== undefined) {
          let placedColor = colors.value[draggableIndex];
          if ((patternColor === null || patternColor === void 0 ? void 0 : patternColor.hex()) !== (placedColor === null || placedColor === void 0 ? void 0 : placedColor.hex())) {
            emit('fail');
            return;
          }
        } else {
          emit('fail');
          return;
        }
      }
      emit('next', {
        background: colors.value[0]
      });
    });
    (0, vue_3.onMounted)(generatePattern);
    expose({
      leave
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [!countdownComplete.value ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_1, "Memorize this pattern!")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_2, "Drag each color into place to complete the pattern! Tap to reset any color you've already placed."))]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", {
          ref_key: "overlay",
          ref: overlay,
          class: "k-flash-overlay"
        }, null, 512), (0, vue_2.createElementVNode)("div", {
          ref_key: "dragContainerRef",
          ref: dragContainerRef,
          class: "container-centered k-drag-container"
        }, [(0, vue_2.createElementVNode)("div", _hoisted_3, [((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(3, (nRow, row) => {
          return (0, vue_2.createElementVNode)("div", {
            key: row,
            class: "k-drop-zone-row"
          }, [((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(3, (nCol, col) => {
            return (0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", (0, vue_2.mergeProps)({
              id: `zone${row * 3 + col}`,
              "data-index": row * 3 + col,
              class: "k-drop-zone",
              onPointerdown: () => clearZone(row * 3 + col)
            }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(row * 3 + col, {
              onComplete: handleTransitionComplete
            })), [(0, vue_2.createElementVNode)("div", {
              id: `zone-fill${row * 3 + col}`,
              class: "k-drop-zone-fill"
            }, null, 8, _hoisted_5)], 16, _hoisted_4), [[_directive_motion, `btnMotion${row * 3 + col}`]]);
          }), 64))]);
        }), 64))]), (0, vue_2.createElementVNode)("div", _hoisted_6, [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", _hoisted_7, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(colors.value, (c, i) => {
          return (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", (0, vue_2.mergeProps)({
            key: 9 + i,
            "data-index": i,
            class: "k-pattern-memory-draggable"
          }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(9 + i, {
            onComplete: handleTransitionComplete
          }), {
            style: {
              background: c.hex()
            }
          }), null, 16, _hoisted_8)), [[_directive_motion, `btnMotion${9 + i}`]]);
        }), 128))], 512), [[vue_2.vShow, countdownComplete.value && !(0, vue_2.unref)(showDoneBtn)]]), (0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", _hoisted_9, [!countdownComplete.value ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(countdown_seconds_vue_1.default, {
          key: 0,
          ref_key: "countdownRef",
          ref: countdownRef,
          class: "mt3",
          count: state.value.countdownDuration / 1000,
          autostart: false,
          onEnd: handleCountdownComplete
        }, null, 8, ["count"])) : (0, vue_2.createCommentVNode)("", true)], 512), [[vue_2.vShow, !countdownComplete.value]]), (0, vue_2.unref)(showDoneBtn) ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_10, [(0, vue_2.createVNode)(done_button_vue_1.default, {
          ref_key: "doneBtnRef",
          ref: doneBtnRef,
          onClick: handleSubmit,
          width: "25%"
        }, null, 512)])) : (0, vue_2.createCommentVNode)("", true)])], 512)]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-3e80744e"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Which color am I? ");
const _hoisted_2 = {
  class: "flex-centered",
  style: {
    "height": "100%"
  }
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const contrast_text_vue_1 = tslib_1.__importDefault(__webpack_require__(9315));
const color_picker_vue_1 = tslib_1.__importDefault(__webpack_require__(3850));
const color_util_1 = __webpack_require__(5365);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'pick-color',
  emits: ['next', 'fail'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    const color = (0, vue_3.shallowRef)((0, color_util_1.getRandomNonUglyColor)());
    const state = (0, vue_3.ref)({
      distanceMin: 49,
      distanceMax: 100,
      gridCount: 16,
      duration: 5000
    });
    const gridColors = (0, vue_3.ref)([]);
    /**
     * Select from a large number of not similar colors. As difficulty increases, the colors
     * become more similar and the count increases.
     */
    const variation1 = () => {
      if (game.matchState.difficulty === 0) {
        console.log("Pick Color: Variation 1, Difficulty 0");
        state.value = {
          distanceMin: 35,
          distanceMax: 80,
          gridCount: 12,
          duration: 5000
        };
      } else if (game.matchState.difficulty === 1) {
        //Add colors, increased similarity
        console.log("Pick Color: Variation 1, Difficulty 1");
        state.value = {
          distanceMin: 25,
          distanceMax: 70,
          gridCount: 16,
          duration: 5000
        };
      } else if (game.matchState.difficulty === 2) {
        //Add colors, increased similarity
        console.log("Pick Color: Variation 1, Difficulty 2");
        state.value = {
          distanceMin: 30,
          distanceMax: 60,
          gridCount: 25,
          duration: 6000
        };
      } else if (game.matchState.difficulty === 3) {
        //Add colors
        console.log("Pick Color: Variation 1, Difficulty 3");
        state.value = {
          distanceMin: 25,
          distanceMax: 45,
          gridCount: 30,
          duration: 7000
        };
      } else if (game.matchState.difficulty >= 4) {
        //Increased similarity
        console.log("Pick Color: Variation 1, Difficulty 4");
        state.value = {
          distanceMin: 10,
          distanceMax: 40,
          gridCount: 30,
          duration: 7000
        };
      }
    };
    /**
     * Select from a smaller number of very similar colors
     */
    const variation2 = () => {
      if (game.matchState.difficulty === 0) {
        console.log("Pick Color: Variation 2, Difficulty 0");
        state.value = {
          distanceMin: 15,
          distanceMax: 40,
          gridCount: Phaser.Utils.Array.GetRandom([4, 8]),
          duration: 5000
        };
      } else if (game.matchState.difficulty === 1) {
        console.log("Pick Color: Variation 2, Difficulty 1");
        state.value = {
          distanceMin: 13,
          distanceMax: 40,
          gridCount: Phaser.Utils.Array.GetRandom([8, 12]),
          duration: 5000
        };
      } else if (game.matchState.difficulty === 2) {
        console.log("Pick Color: Variation 2, Difficulty 2");
        state.value = {
          distanceMin: 15,
          distanceMax: 40,
          gridCount: 16,
          duration: 5000
        };
      } else if (game.matchState.difficulty === 3) {
        console.log("Pick Color: Variation 2, Difficulty 3");
        state.value = {
          distanceMin: 12,
          distanceMax: 30,
          gridCount: 20,
          duration: 5000
        };
      } else if (game.matchState.difficulty === 4) {
        console.log("Pick Color: Variation 2, Difficulty 4");
        state.value = {
          distanceMin: 5,
          distanceMax: 22,
          gridCount: 4,
          duration: 5000
        };
      } else if (game.matchState.difficulty >= 4) {
        console.log("Pick Color: Variation 2, Difficulty 5");
        state.value = {
          distanceMin: 5,
          distanceMax: 15,
          gridCount: 8,
          duration: 5000
        };
      }
    };
    /**
     * Randomly select a game variation
     */
    Phaser.Utils.Array.GetRandom([variation2, variation1])();
    for (let i = 0; i < state.value.gridCount; i++) {
      gridColors.value.push((0, color_util_1.getColorWithSimilarityInRange)(color.value, state.value.distanceMin, state.value.distanceMax));
    }
    /**
     * Randomly assign one of the grid values to our goal color.
     */
    gridColors.value[Phaser.Math.Between(0, gridColors.value.length - 1)] = color.value;
    const container = (0, vue_3.ref)();
    const picker = (0, vue_3.ref)();
    const handleEnter = componentName => {
      if (componentName === 'ScrollingColorPicker') {
        game.clock.start(state.value.duration * 3);
        return;
      }
      game.clock.start(state.value.duration);
    };
    const leave = () => {
      var _a;
      return Promise.all([(_a = picker.value) === null || _a === void 0 ? void 0 : _a.leave(), container === null || container === void 0 ? void 0 : container.value.leave()]);
    };
    const handleColorSelected = c => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (c.hex() === color.value.hex()) {
        emit('next', {
          background: c
        });
        return;
      }
      emit('fail');
    });
    expose({
      leave
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        ref_key: "container",
        ref: container,
        onSkip: _cache[0] || (_cache[0] = () => emit('next', {
          skipped: true
        }))
      }, {
        instruction: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", {
          class: "k-color-text",
          style: (0, vue_2.normalizeStyle)({
            background: (0, vue_2.unref)(color).hex()
          })
        }, [(0, vue_2.createVNode)(contrast_text_vue_1.default, {
          color: (0, vue_2.unref)(color)
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_1]),
          _: 1
        }, 8, ["color"])], 4)]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createVNode)(color_picker_vue_1.default, {
          ref_key: "picker",
          ref: picker,
          colors: gridColors.value,
          onEnter: handleEnter,
          onSelect: handleColorSelected
        }, null, 8, ["colors"])])]),
        _: 1
      }, 512);
    };
  }
});

/***/ }),

/***/ 5663:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-78ed36eb"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-name-picker"
};
const _hoisted_2 = ["onClick"];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const modules_1 = __webpack_require__(5978);
const util_1 = __webpack_require__(1110);
const lodash_1 = __webpack_require__(6486);
const device_util_1 = __webpack_require__(2338);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'name-picker',
  props: {
    names: null,
    targetName: null
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      names = [],
      targetName
    } = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "1a948d96": (0, vue_2.unref)(theme).theme.cardBg
    }));
    const {
      theme
    } = (0, modules_1.useModule)();
    const handleNameSelected = name => {
      (0, device_util_1.hapticsImpactLight)();
      emit('select', name, usedHint.value);
    };
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      if (entered.value === false && index === names.length - 1) {
        entered.value = true;
        emit('enter');
      }
    };
    const notSureLabels = ["I'm not sure!", "Who would know this?!", "Literally Impossible.", "Who knows...", "Beats me!", "No Thanks.", "I'll pass.", "You tell me!", "Too difficult!", "Mercy, please!"];
    const namesFiltered = (0, vue_3.ref)(names);
    const usedHint = (0, vue_3.ref)(false);
    const allowNotSure = (0, vue_3.ref)(names.length === 4 ? (0, lodash_1.sample)([true, false]) : false);
    const getRandomName = () => {
      let name = (0, lodash_1.sample)(namesFiltered.value);
      if (name.hex === targetName.hex) {
        return getRandomName();
      }
      return name;
    };
    const handleNarrowOptions = () => {
      usedHint.value = true;
      allowNotSure.value = false;
      namesFiltered.value = (0, lodash_1.shuffle)([targetName, getRandomName()]);
    };
    expose({
      leave: () => (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)())
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("ul", _hoisted_1, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(namesFiltered.value, (n, i) => {
        return (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("li", (0, vue_2.mergeProps)({
          key: n.hex,
          class: "k-name-picker-item"
        }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(i, {
          onComplete: handleTransitionComplete
        })), [(0, vue_2.createElementVNode)("button", {
          class: "k-name-picker-btn",
          onClick: () => handleNameSelected(n)
        }, (0, vue_2.toDisplayString)((0, vue_2.unref)(util_1.titleCase)(n.name)), 9, _hoisted_2)], 16)), [[_directive_motion, `btnMotion${i}`]]);
      }), 128)), allowNotSure.value ? (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("li", (0, vue_2.mergeProps)({
        key: 0,
        class: "k-name-picker-item"
      }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(__props.names.length, {
        onComplete: handleTransitionComplete
      })), [(0, vue_2.createElementVNode)("button", {
        class: "k-name-picker-btn",
        onClick: handleNarrowOptions
      }, (0, vue_2.toDisplayString)((0, vue_2.unref)(lodash_1.sample)(notSureLabels)), 1)], 16)), [[_directive_motion, `btnMotion${__props.names.length}`]]) : (0, vue_2.createCommentVNode)("", true)]);
    };
  }
});

/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const color_phasing_element_vue_1 = tslib_1.__importDefault(__webpack_require__(326));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'phasing-background',
  props: {
    targetColor: null,
    steps: null
  },
  setup(__props, _ref) {
    let {
      expose
    } = _ref;
    const props = __props;
    const phaseRef = (0, vue_3.ref)();
    expose({
      stop: () => phaseRef.value.stop()
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_phasing_element_vue_1.default, (0, vue_2.mergeProps)({
        ref_key: "phaseRef",
        ref: phaseRef
      }, _ctx.$attrs, {
        targetColor: props.targetColor,
        steps: props.steps,
        class: "k-phase-bg absolute-full-cover"
      }), null, 16, ["targetColor", "steps"]);
    };
  }
});

/***/ }),

/***/ 2633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const device_util_1 = __webpack_require__(2338);
const color_phasing_element_vue_1 = tslib_1.__importDefault(__webpack_require__(326));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'phasing-button',
  props: {
    targetColor: null,
    steps: null,
    shape: null,
    delay: null
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    var _a;
    const props = __props;
    const handlePointerDown = () => {
      (0, device_util_1.hapticsImpactLight)();
      /**
       * The stop method returns a hex color value.
       */
      emit('select', phaseRef.value.stop());
    };
    const phaseRef = (0, vue_3.ref)();
    const motion = (0, motion_1.useMotion)(phaseRef, {
      initial: {
        //opacity: 0,
        //y: 300,
        scale: 0
      },
      enter: {
        //y: 0,
        //opacity: 1,
        scale: 1,
        transition: {
          delay: (_a = props.delay) !== null && _a !== void 0 ? _a : 0,
          duration: 500,
          ease: 'easeOut'
        }
      }
      // leave: {
      //     opacity: 0,
      //     y: -300,
      //     transition: {
      //         duration: 225,
      //         ease: 'easeIn'
      //     },
      // }
    });

    const btnClass = props.shape === 'circle' ? 'k-phase-btn k-single-color-btn--circle' : 'k-phase-btn';
    // const btnClass = sample([
    //     'k-phase-btn',
    //     'k-phase-btn k-single-color-btn--circle'
    // ])!;
    const toExpose = {
      stop: () => phaseRef.value.stop(),
      leave: function () {
        let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        phaseRef.value.stop();
        return motion.apply({
          //opacity: 0,
          //y: 300,
          scale: 0,
          transition: {
            delay: delay,
            duration: 225,
            ease: 'easeIn'
          }
        });
      }
    };
    (0, vue_3.onMounted)(() => {
      emit('enter', toExpose);
    });
    expose(toExpose);
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_phasing_element_vue_1.default, (0, vue_2.mergeProps)({
        ref_key: "phaseRef",
        ref: phaseRef
      }, _ctx.$attrs, {
        is: "button",
        onPointerdown: handlePointerDown,
        targetColor: props.targetColor,
        steps: props.steps,
        class: (0, vue_2.unref)(btnClass)
      }), null, 16, ["targetColor", "steps", "class"]);
    };
  }
});

/***/ }),

/***/ 7256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "k-radial-picker"
};
const _hoisted_2 = {
  class: "k-radial-picker__tier tier-1"
};
const _hoisted_3 = ["id", "onPointerdown"];
const _hoisted_4 = {
  class: "k-radial-picker__tier tier-2"
};
const _hoisted_5 = ["id", "onPointerdown"];
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const device_util_1 = __webpack_require__(2338);
const modules_1 = __webpack_require__(5978);
const util_1 = __webpack_require__(1110);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'radial-color-picker',
  props: {
    colors: null,
    eliminiation: {
      type: Boolean
    }
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      colors = [],
      eliminiation = false
    } = __props;
    const {
      game
    } = (0, modules_1.useModule)();
    game.useReducedPadding = true;
    const getTierChunks = colors => {
      if (colors.length <= 12) return [colors, []];else if (colors.length < 18) return (0, util_1.chunkArray)(colors, [colors.length / 2, colors.length / 2]);else return (0, util_1.chunkArray)(colors, [12, 8]);
    };
    /**
     * Split our colors in two tiers. For smaller color sets, we want to split them evenly.
     */
    // const [colorsTier1, colorsTier2] = colors.length < 18 ? 
    //     chunkArray(colors, [colors.length / 2, colors.length / 2]) : 
    //     chunkArray(colors, [12, 8]);
    const [colorsTier1, colorsTier2] = getTierChunks(colors);
    const divisions = 360 / colors.length;
    const getBtnContinerStyle = (tier, index) => {
      const divisions = 360 / tier.length;
      //const color = tier[index];
      return {
        transform: `rotate(${index * divisions}deg) translate(0, -50%)`
      };
    };
    const getBtnStyle = (tier, index) => {
      const color = tier[index];
      return {
        background: color.hex()
      };
    };
    const tier1Ref = (0, vue_3.ref)();
    const teir1Motions = (0, motion_1.useMotion)(tier1Ref, {
      initial: {
        rotate: -360,
        scale: 0,
        opacity: 0
      },
      enter: {
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: {
          ease: 'easeOutSine',
          duration: 750,
          onComplete: () => {
            teir1Motions.apply('rotate');
            emit('enter');
          }
        }
      },
      rotate: {
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: 'linear',
          duration: 5000
        }
      },
      leave: {
        rotate: 360,
        scale: 0,
        opacity: 0,
        transition: {
          ease: 'linear',
          duration: 500,
          onComplete: () => game.useReducedPadding = false
        }
      }
    });
    const tier2Ref = (0, vue_3.ref)();
    const tier2Motions = (0, motion_1.useMotion)(tier2Ref, {
      initial: {
        rotate: 360,
        scale: 0,
        opacity: 0
      },
      enter: {
        rotate: 0,
        scale: 1,
        opacity: 1,
        transition: {
          ease: 'easeOutSine',
          duration: 750,
          onComplete: () => {
            tier2Motions.apply('rotate');
          }
        }
      },
      rotate: {
        rotate: -360,
        transition: {
          repeat: Infinity,
          ease: 'linear',
          duration: 5000
        }
      },
      leave: {
        rotate: 360,
        scale: 0,
        opacity: 0,
        transition: {
          ease: 'linear',
          duration: 500
        }
      }
    });
    const handleColorSelected = (color, id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
      (0, device_util_1.hapticsImpactLight)();
      emit('select', color);
      if (eliminiation) {
        let el = document.getElementById(id);
        if (el) {
          const {
            apply,
            stop
          } = (0, motion_1.useMotion)(el);
          apply({
            opacity: 0,
            scale: 3,
            transition: {
              duration: 225,
              ease: 'easeIn',
              /**
               * Necessary or else the element will sometimes hover invisible over another
               * element, preventing it from being clicked.
               */
              onComplete: () => el === null || el === void 0 ? void 0 : el.remove()
            }
          });
        }
      }
    });
    expose({
      leave: () => {
        return Promise.all([teir1Motions.apply('leave'), tier2Motions.apply('leave')]);
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", {
        ref_key: "tier1Ref",
        ref: tier1Ref,
        class: "k-radial-picker__ring"
      }, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)((0, vue_2.unref)(colorsTier1), (color, i) => {
        return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
          id: `tier1Btn${i}`,
          style: (0, vue_2.normalizeStyle)(getBtnContinerStyle((0, vue_2.unref)(colorsTier1), i)),
          class: "k-radial-picker__item-container",
          onPointerdown: () => handleColorSelected(color, `tier1Btn${i}`)
        }, [(0, vue_2.createElementVNode)("span", {
          class: "k-radial-picker__item",
          style: (0, vue_2.normalizeStyle)(getBtnStyle((0, vue_2.unref)(colorsTier1), i))
        }, null, 4)], 44, _hoisted_3);
      }), 256))], 512)]), (0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.createElementVNode)("div", {
        ref_key: "tier2Ref",
        ref: tier2Ref,
        class: "k-radial-picker__ring"
      }, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)((0, vue_2.unref)(colorsTier2), (color, i) => {
        return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
          style: (0, vue_2.normalizeStyle)(getBtnContinerStyle((0, vue_2.unref)(colorsTier2), i)),
          id: `tier2Btn${i}`,
          class: "k-radial-picker__item-container",
          onPointerdown: () => handleColorSelected(color, `tier2Btn${i}`)
        }, [(0, vue_2.createElementVNode)("span", {
          class: "k-radial-picker__item",
          style: (0, vue_2.normalizeStyle)(getBtnStyle((0, vue_2.unref)(colorsTier2), i))
        }, null, 4)], 44, _hoisted_5);
      }), 256))], 512)])]);
    };
  }
});

/***/ }),

/***/ 8506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-ce5999f8"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = ["enter"];
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("svg", {
  width: "25",
  height: "16",
  viewBox: "0 0 25 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0, vue_2.createElementVNode)("path", {
  d: "M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM25 7L1 7V9L25 9V7Z",
  fill: "white"
})], -1));
const _hoisted_3 = [_hoisted_2];
const _hoisted_4 = {
  class: "k-rank-meter__player-color"
};
const _hoisted_5 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Your color is currently ");
const _hoisted_6 = {
  style: {
    "font-weight": "500"
  }
};
const _hoisted_7 = /*#__PURE__*/(0, vue_2.createTextVNode)(". ");
const _hoisted_8 = {
  key: 0,
  class: "k-rank-meter__player-stats"
};
const _hoisted_9 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Your final score was ");
const _hoisted_10 = {
  style: {
    "font-weight": "500"
  }
};
const _hoisted_11 = /*#__PURE__*/(0, vue_2.createTextVNode)(" and you performed better than around ");
const _hoisted_12 = /*#__PURE__*/(0, vue_2.createTextVNode)(" of other players. ");
const _hoisted_13 = {
  key: 0
};
const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const _hoisted_16 = /*#__PURE__*/(0, vue_2.createTextVNode)(" This was not your best match. ");
const _hoisted_17 = [_hoisted_14, _hoisted_15, _hoisted_16];
const _hoisted_18 = {
  key: 1
};
const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const _hoisted_21 = /*#__PURE__*/(0, vue_2.createTextVNode)(" This was ");
const _hoisted_22 = {
  key: 0
};
const _hoisted_23 = /*#__PURE__*/(0, vue_2.createTextVNode)(" your best match yet! ");
const _hoisted_24 = {
  key: 2,
  style: {
    "color": "#4bff4b"
  }
};
const _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const _hoisted_26 = {
  key: 1,
  class: "k-rank-meter__player-stats"
};
const _hoisted_27 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Your highest score was ");
const _hoisted_28 = {
  style: {
    "font-weight": "500"
  }
};
const _hoisted_29 = /*#__PURE__*/(0, vue_2.createTextVNode)(", performing better than around ");
const _hoisted_30 = /*#__PURE__*/(0, vue_2.createTextVNode)(" of other players. ");
const _hoisted_31 = {
  key: 0,
  style: {
    "color": "#4bff4b"
  }
};
const _hoisted_32 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("br", null, null, -1));
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const lodash_1 = __webpack_require__(6486);
const ordinal_1 = tslib_1.__importDefault(__webpack_require__(2294));
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const color_namer_1 = __webpack_require__(4823);
const toLower_1 = tslib_1.__importDefault(__webpack_require__(7334));
const startCase_1 = tslib_1.__importDefault(__webpack_require__(8029));
const ntc_1 = tslib_1.__importDefault(__webpack_require__(8886));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'rank-meter',
  props: {
    context: null,
    stats: null
  },
  setup(__props) {
    const {
      stats,
      context
    } = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "fac48d8e": meterPos.value
    }));
    const {
      global,
      game
    } = (0, modules_1.useModule)();
    const titleCase = str => (0, startCase_1.default)((0, toLower_1.default)(str));
    const colors = ['#00FF47', '#00D1FF', '#DB00FF', '#FF9900', '#FF0000'];
    const f = chroma_js_1.default.scale(colors);
    const playerColorHex = (0, vue_3.ref)(f(1 - stats.rankPercentile).toString());
    const names = (0, color_namer_1.nameColor)(playerColorHex.value, {
      pick: ['ntc'],
      distance: 'deltaE'
    });
    const playerColorName = (0, vue_3.ref)(titleCase(names[0].name));
    if (playerColorName.value.toLowerCase() === 'red') {
      //playerColorName.value = 'Blood Red'
    } else if (playerColorName.value.toLowerCase() === 'green') {
      playerColorName.value = 'Champion Green';
    }
    //game.setBackgroundColor(chroma(playerColorHex.value).darken(6.5));
    const percentileLabel = `${Math.floor(stats.rankPercentile * 100)}%`;
    const duration = 3000;
    const meterPos = (0, vue_3.ref)(`calc(${(0, lodash_1.clamp)((1 - stats.rankPercentile) * 100, 1, 99)}% - 8px)`);
    const meter = (0, vue_3.ref)();
    const container = (0, vue_3.ref)();
    const arrow = (0, vue_3.ref)();
    const content = (0, vue_3.ref)();
    const playerColorEl = (0, vue_3.ref)();
    const rankCounter = (0, vue_3.reactive)({
      final: stats.matchRank,
      count: 0,
      from: stats.rankPercentile < .5 ? 1 : stats.rankCount
    });
    const fxBackgroundTimeout = window.setTimeout(() => {
      game.startBackgroundFx(
        // Phaser.Display.Color.HexStringToColor(playerColorHex.value).color
      );
    }, duration);
    (0, vue_3.onBeforeUnmount)(() => {
      clearTimeout(fxBackgroundTimeout);
    });
    function shuffleChars(str) {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
          result += ' ';
        } else {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }
      return result;
    }
    const entered = (0, vue_3.ref)(false);
    const enter = () => {
      var _a, _b, _c, _d;
      if (entered.value) return;
      entered.value = true;
      if (content.value && container.value && arrow.value && content.value) {
        let containerRect = (_a = container.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        let arrowRect = (_b = arrow.value) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        let contentRect = (_c = content.value) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
        let maxHeight = containerRect.bottom - containerRect.top - contentRect.height;
        let top = arrowRect.bottom - arrowRect.height / 2 - contentRect.height / 2 - containerRect.top;
        top = (0, lodash_1.clamp)(top, 0, maxHeight);
        content.value.style.left = `${arrowRect.right - containerRect.left + 5}px`;
        content.value.style.top = `${top}px`;
        let arrowStartPosY = containerRect.height - top;
        if (stats.rankPercentile <= .5) {
          arrowStartPosY = -(containerRect.height * (top / containerRect.height));
        }
        const arrowMotion = (0, motion_1.useMotion)(arrow, {
          initial: {
            opacity: 0,
            y: arrowStartPosY
          },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              ease: 'easeOut'
            }
          }
        });
        const contentMotion = (0, motion_1.useMotion)(content, {
          initial: {
            opacity: 0,
            y: arrowStartPosY
          },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              ease: 'easeOut'
            }
          }
        });
        let originalPlayerColorName = playerColorName.value;
        let originalPlayerColorHex = playerColorHex.value;
        rankCounter.count = rankCounter.from;
        let step = Math.floor(rankCounter.final / 75),
          throttleCounter = 0;
        let proxyCounter = {
          count: rankCounter.from
        };
        (_d = global.sceneState.scene) === null || _d === void 0 ? void 0 : _d.add.tween({
          targets: proxyCounter,
          count: rankCounter.final,
          duration: duration,
          ease: Phaser.Math.Easing.Cubic.Out,
          onUpdate: tween => {
            rankCounter.count = Math.floor(tween.getValue());
            throttleCounter += 1;
            if (throttleCounter % step === 0 && playerColorEl.value) {
              let color = (0, lodash_1.sample)(ntc_1.default);
              playerColorEl.value.style.color = color.hex;
              playerColorEl.value.innerText = shuffleChars(originalPlayerColorName); //color.name;
            }
          },

          onComplete: () => {
            if (playerColorEl.value) {
              playerColorEl.value.style.color = originalPlayerColorHex;
              playerColorEl.value.innerText = originalPlayerColorName;
            }
          }
        });
      }
    };
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
        ref_key: "container",
        ref: container,
        class: "k-rank-meter"
      }, [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", {
        ref_key: "meter",
        ref: meter,
        class: "k-rank-meter__meter",
        initial: {
          opacity: 0,
          x: -300
        },
        enter: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 500,
            ease: 'easeOut',
            onComplete: () => enter()
          }
        }
      }, null, 8, _hoisted_1), [[_directive_motion]]), (0, vue_2.createElementVNode)("div", {
        ref_key: "arrow",
        ref: arrow,
        class: "k-rank-meter__pos flex-centered"
      }, _hoisted_3, 512), (0, vue_2.createElementVNode)("div", {
        ref_key: "content",
        ref: content,
        class: "k-rank-meter__content"
      }, [(0, vue_2.createElementVNode)("label", _hoisted_4, [_hoisted_5, (0, vue_2.createElementVNode)("span", _hoisted_6, [(0, vue_2.createElementVNode)("span", {
        ref_key: "playerColorEl",
        ref: playerColorEl
      }, null, 512)]), _hoisted_7]), __props.context === 'rank' ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_8, [_hoisted_9, (0, vue_2.createElementVNode)("span", _hoisted_10, (0, vue_2.toDisplayString)(__props.stats.score), 1), _hoisted_11, (0, vue_2.createElementVNode)("span", {
        style: {
          "font-weight": "500"
        }
      }, (0, vue_2.toDisplayString)(percentileLabel)), _hoisted_12, __props.stats.matchRank > __props.stats.overrallRank ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_13, _hoisted_17)) : __props.stats.matchRank <= __props.stats.overrallRank ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_18, [_hoisted_19, _hoisted_20, _hoisted_21, __props.stats.rankPercentile <= .025 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_22, "(believe it or not)")) : (0, vue_2.createCommentVNode)("", true), _hoisted_23])) : (0, vue_2.createCommentVNode)("", true), __props.stats.matchRank <= 50 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_24, [_hoisted_25, (0, vue_2.createTextVNode)(" You ranked in the top 50! You're current rank is " + (0, vue_2.toDisplayString)((0, vue_2.unref)(ordinal_1.default)(Math.floor(rankCounter.count))) + ". Nice. ", 1)])) : (0, vue_2.createCommentVNode)("", true)])) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_26, [_hoisted_27, (0, vue_2.createElementVNode)("span", _hoisted_28, (0, vue_2.toDisplayString)(__props.stats.score), 1), _hoisted_29, (0, vue_2.createElementVNode)("span", {
        style: {
          "font-weight": "500"
        }
      }, (0, vue_2.toDisplayString)(percentileLabel)), _hoisted_30, __props.stats.matchRank <= 50 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_31, [_hoisted_32, (0, vue_2.createTextVNode)(" You're ranked in the top 50 with a rank of " + (0, vue_2.toDisplayString)((0, vue_2.unref)(ordinal_1.default)(Math.floor(rankCounter.count))) + ". Nice. ", 1)])) : (0, vue_2.createCommentVNode)("", true)]))], 512)], 512);
    };
  }
});

/***/ }),

/***/ 782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-dadbefc4"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-round-summary"
};
const _hoisted_2 = {
  style: {
    "margin-bottom": "375px"
  }
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-round-title__preheader"
}, " Tap to Continue ", -1));
const _hoisted_4 = {
  class: "k-round-title__header"
};
const _hoisted_5 = {
  key: 0,
  class: "k-round-score mt1"
};
const _hoisted_6 = {
  key: 0,
  style: {
    "letter-spacing": "initial",
    "font-weight": "200"
  }
};
const _hoisted_7 = {
  key: 1
};
const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-plus-circle"
}, null, -1));
const _hoisted_9 = {
  class: "k-round-score__multipliers"
};
const _hoisted_10 = {
  key: 0,
  class: "bi bi-plus-circle"
};
const _hoisted_11 = {
  key: 1,
  class: "bi bi-arrow-down"
};
const _hoisted_12 = {
  key: 2
};
const _hoisted_13 = {
  key: 0
};
const _hoisted_14 = {
  key: 1
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const modules_1 = __webpack_require__(5978);
const contrast_text_vue_1 = tslib_1.__importDefault(__webpack_require__(9315));
const game_content_area_vue_1 = tslib_1.__importDefault(__webpack_require__(6105));
const device_util_1 = __webpack_require__(2338);
const pointer_fx_vue_1 = tslib_1.__importDefault(__webpack_require__(6193));
const color_util_1 = __webpack_require__(5365);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'round',
  emits: ['next'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const {
      game,
      audio
    } = (0, modules_1.useModule)();
    let motionDurations = 400;
    let counterDurations = 500;
    const score = (0, vue_3.reactive)({
      counter: 0,
      final: game.matchState.postRound.score,
      multipliers: game.matchState.postRound.multipliers,
      duration: game.matchState.postRound.multipliers.length * counterDurations
    });
    // let refs : { [key:string]: Ref<HTMLElement | undefined> } = {};
    // score.multipliers.forEach((m, i) => {
    //     refs[`multiplier${i}`] = ref<HTMLElement>();
    // })
    let counterEl = (0, vue_3.ref)();
    let multiplierRefs = (0, vue_3.ref)();
    (0, vue_3.onMounted)(() => {
      var _a, _b, _c;
      let counterRect = (_a = counterEl.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
      if (!counterRect) return;
      let durationStep = counterDurations * 2;
      (_b = multiplierRefs.value) === null || _b === void 0 ? void 0 : _b.forEach((el, i) => {
        let elRect = el.getBoundingClientRect();
        if (!elRect) return;
        el.style.transformOrigin = 'center left';
        //durationStep = 5000;
        //let distance = 1
        const {
          apply
        } = (0, motion_1.useMotion)(el, {
          initial: {
            //scale: .75,
            opacity: 0,
            y: 150 // + (i * 30),
          },

          enter: {
            opacity: 1,
            //scale: 1.25,
            y: counterRect.top - elRect.top + 50,
            transition: {
              type: 'keyframes',
              ease: 'easeOut',
              delay: durationStep / 2 * i,
              //duration: ((durationStep / 4) * 3),// * (i + 1),  //5000 * (i + 1), //durationStep,// - 100,
              duration: durationStep / 2,
              //ease: 'linear',
              //ease: 'linear',
              onComplete: () => {
                apply('leave');
              }
            }
          },
          leave: {
            //scale: .75,
            opacity: 0,
            y: counterRect.top - elRect.top,
            transition: {
              type: 'keyframes',
              //duration: 500,
              duration: durationStep / 2,
              ease: 'easeOut'
            }
          }
        });
      });
      //Phaser tween to increment score counter to final value
      let counter = {
        count: score.counter
      };
      (_c = game.gameScene) === null || _c === void 0 ? void 0 : _c.add.tween({
        targets: counter,
        count: score.final,
        duration: score.duration,
        //ease: Phaser.Math.Easing.Cubic.Out,
        ease: Phaser.Math.Easing.Linear,
        onUpdate: tween => {
          score.counter = Math.floor(tween.getValue());
        }
      });
    });
    const titleEl = (0, vue_3.ref)();
    const titleMotion = (0, motion_1.useMotion)(titleEl, {
      initial: {
        opacity: 0,
        y: 300
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: motionDurations,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: 300,
        transition: {
          duration: motionDurations,
          ease: 'easeIn'
        }
      }
    });
    const scoreEl = (0, vue_3.ref)();
    const scoreMotion = (0, motion_1.useMotion)(scoreEl, {
      initial: {
        opacity: 0,
        y: 300
      },
      enter: {
        opacity: 1,
        y: 0,
        delay: 100,
        transition: {
          duration: motionDurations,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: 300,
        transition: {
          duration: motionDurations,
          ease: 'easeIn'
        }
      }
    });
    const skipMessageEl = (0, vue_3.ref)();
    const skipMessageMotion = (0, motion_1.useMotion)(skipMessageEl, {
      initial: {
        opacity: 0,
        y: 0
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 2500,
          ease: 'easeOut'
        }
      },
      leave: {
        opacity: 0,
        y: -100,
        transition: {
          duration: motionDurations,
          ease: 'easeIn'
        }
      }
    });
    const ready = (0, vue_3.ref)(false);
    const transitioning = (0, vue_3.ref)(false);
    const handleClick = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (!transitioning.value && ready.value) {
        transitioning.value = true;
        (0, device_util_1.hapticsImpactLight)();
        audio.play('FX_tap');
        yield Promise.all([titleMotion.apply('leave'), scoreMotion.apply('leave'), skipMessageMotion.apply('leave')]);
        emit('next');
      }
    });
    (0, vue_3.onMounted)(() => {
      setTimeout(() => {
        ready.value = true;
      }, 500);
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_content_area_vue_1.default, {
        onClick: handleClick,
        "hide-tray": true,
        "no-pointer-fx": ""
      }, {
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(pointer_fx_vue_1.default, {
          "color-start": (0, vue_2.unref)(color_util_1.getContrastColor)((0, vue_2.unref)(game).currentBgColor),
          "color-end": (0, vue_2.unref)(color_util_1.getContrastColor)((0, vue_2.unref)(game).currentBgColor)
        }, null, 8, ["color-start", "color-end"]), (0, vue_2.createElementVNode)("div", _hoisted_1, [(0, vue_2.createElementVNode)("div", _hoisted_2, [(0, vue_2.createElementVNode)("div", {
          ref_key: "titleEl",
          ref: titleEl,
          class: "k-round-title"
        }, [(0, vue_2.createVNode)(contrast_text_vue_1.default, {
          color: (0, vue_2.unref)(game).currentBgColor
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_3, (0, vue_2.createElementVNode)("div", _hoisted_4, " STAGE " + (0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.round), 1)]),
          _: 1
        }, 8, ["color"])], 512), (0, vue_2.createElementVNode)("div", {
          ref_key: "scoreEl",
          ref: scoreEl
        }, [(0, vue_2.unref)(game).matchState.round !== 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_5, [(0, vue_2.createVNode)(contrast_text_vue_1.default, {
          color: (0, vue_2.unref)(game).currentBgColor
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.unref)(game).matchState.postRound.score === 0 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_6, " No Points Awarded ")) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_7, [(0, vue_2.createElementVNode)("div", {
            ref_key: "counterEl",
            ref: counterEl,
            class: "k-round-score__counter mb2"
          }, [_hoisted_8, (0, vue_2.createTextVNode)(" " + (0, vue_2.toDisplayString)(score.counter) + " Points ", 1)], 512), (0, vue_2.createElementVNode)("div", _hoisted_9, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(score.multipliers, (m, i) => {
            return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", {
              ref_for: true,
              ref_key: "multiplierRefs",
              ref: multiplierRefs,
              class: "k-round-score__multiplier"
            }, [m.score > 0 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_10)) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("i", _hoisted_11)), (0, vue_2.createTextVNode)(" " + (0, vue_2.toDisplayString)(m.score) + " " + (0, vue_2.toDisplayString)(m.label) + " ", 1), m.factor > 0 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_12, " (x" + (0, vue_2.toDisplayString)(m.factor) + ") ", 1)) : (0, vue_2.createCommentVNode)("", true)], 512);
          }), 256))])]))]),
          _: 1
        }, 8, ["color"])])) : (0, vue_2.createCommentVNode)("", true)], 512)]), (0, vue_2.createElementVNode)("div", {
          ref_key: "skipMessageEl",
          ref: skipMessageEl,
          class: "k-round-skip-message"
        }, [(0, vue_2.unref)(game).matchState.skips < 5 ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(contrast_text_vue_1.default, {
          key: 0,
          color: (0, vue_2.unref)(game).currentBgColor
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.unref)(game).matchState.skips !== 1 ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_13, "You have " + (0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.skips) + " skips remaining.", 1)) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_14, "You have " + (0, vue_2.toDisplayString)((0, vue_2.unref)(game).matchState.skips) + " skip remaining.", 1))]),
          _: 1
        }, 8, ["color"])) : (0, vue_2.createCommentVNode)("", true)], 512)])]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 2465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  ref: "container",
  class: "k-scroll-color-container"
};
const vue_3 = __webpack_require__(6765);
const scrolling_color_picker_1 = __webpack_require__(4260);
const device_util_1 = __webpack_require__(2338);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'scrolling-color-picker',
  props: {
    colors: null
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      colors = []
    } = __props;
    const {
      game
    } = (0, modules_1.useModule)();
    const selected = (0, vue_3.ref)(false);
    const handleColorSelected = color => {
      if (!selected.value) {
        selected.value = true;
        (0, device_util_1.hapticsImpactLight)();
        emit('select', color);
      }
    };
    let scene = game.gameScene;
    let scroller1 = new scrolling_color_picker_1.ScrollingColorPicker(scene, [...colors], {
      speed: Phaser.Math.Between(20, 60) / 100,
      padding: 10,
      y: '36%'
    });
    let scroller2 = new scrolling_color_picker_1.ScrollingColorPicker(scene, Phaser.Utils.Array.Shuffle([...colors]), {
      padding: 10,
      direction: 'right',
      stackBeneath: scroller1,
      speed: Phaser.Math.Between(20, 70) / 100
    });
    let scroller3 = new scrolling_color_picker_1.ScrollingColorPicker(scene, Phaser.Utils.Array.Shuffle([...colors]), {
      padding: 10,
      direction: 'left',
      stackBeneath: scroller2,
      speed: Phaser.Math.Between(10, 50) / 100
    });
    scroller1.on('select', handleColorSelected);
    scroller2.on('select', handleColorSelected);
    scroller3.on('select', handleColorSelected);
    (0, vue_3.onMounted)(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
      yield Promise.all([scroller1.enter(), scroller2.enter(200), scroller3.enter(400)]);
      emit('enter');
    }));
    (0, vue_3.onBeforeUnmount)(() => {
      scroller1.destroy();
      scroller2.destroy();
      scroller3.destroy();
    });
    expose({
      leave: () => {
        return Promise.all([scroller1.leave(), scroller2.leave(), scroller3.leave()]);
      }
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, null, 512);
    };
  }
});

/***/ }),

/***/ 2462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-13cb310d"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-color-container"
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const device_util_1 = __webpack_require__(2338);
const lodash_1 = __webpack_require__(6486);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'single-color-picker',
  props: {
    colors: null
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const props = __props;
    (0, vue_1.useCssVars)(_ctx => ({
      "155e45ed": _ctx.$props.colors[0].hex()
    }));
    const handleColorSelected = () => {
      (0, device_util_1.hapticsImpactLight)();
      emit('select', props.colors[0]);
    };
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      if (entered.value === false) {
        entered.value = true;
        emit('enter');
      }
    };
    const btnClass = (0, lodash_1.sample)(['k-single-color-btn--circle', 'k-single-color-btn--square']);
    expose({
      leave: () => (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)())
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.withDirectives)((0, vue_2.createElementVNode)("div", (0, vue_2.mergeProps)({
        class: (0, vue_2.unref)(btnClass),
        onClick: handleColorSelected
      }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(0, {
        onComplete: handleTransitionComplete
      })), null, 16), [[_directive_motion, `btnMotion0`]])]);
    };
  }
});

/***/ }),

/***/ 3617:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _withScopeId = n => ((0, vue_2.pushScopeId)("data-v-44720d10"), n = n(), (0, vue_2.popScopeId)(), n);
const _hoisted_1 = {
  class: "k-color-space"
};
const vue_3 = __webpack_require__(6765);
const motion_1 = __webpack_require__(5532);
const transitions_1 = __webpack_require__(5190);
const color_button_vue_1 = tslib_1.__importDefault(__webpack_require__(8320));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'stacked-circle-color-picker',
  props: {
    colors: null
  },
  emits: ['enter', 'select'],
  setup(__props, _ref) {
    let {
      expose,
      emit
    } = _ref;
    const {
      colors = []
    } = __props;
    const handleColorSelected = color => {
      emit('select', color);
    };
    const entered = (0, vue_3.ref)(false);
    const handleTransitionComplete = index => {
      if (entered.value === false && index === colors.length - 1) {
        entered.value = true;
        emit('enter');
      }
    };
    const btnStyle = Phaser.Utils.Array.GetRandom([{
      borderRadius: '100%'
    }, {}]);
    const getBtnStyle = index => {
      return {
        width: `${100 / colors.length * (index + 1)}%`,
        zIndex: colors.length - index
      };
    };
    expose({
      leave: () => (0, transitions_1.gameSetLeave)((0, motion_1.useMotions)(), ['collect'])
    });
    return (_ctx, _cache) => {
      const _directive_motion = (0, vue_2.resolveDirective)("motion");
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)(__props.colors, (color, i) => {
        return (0, vue_2.withDirectives)(((0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_button_vue_1.default, (0, vue_2.mergeProps)({
          color: color.hex(),
          class: "k-pick-color-btn",
          style: getBtnStyle(i),
          onClick: () => handleColorSelected(color)
        }, (0, vue_2.unref)(transitions_1.getGameSetTransitions)(i, {
          onComplete: handleTransitionComplete
        })), null, 16, ["color", "style", "onClick"])), [[_directive_motion, `btnMotion${i}`]]);
      }), 256))]);
    };
  }
});

/***/ }),

/***/ 8816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const phaser_vue_1 = tslib_1.__importDefault(__webpack_require__(2543));
const control_overlay_vue_1 = tslib_1.__importDefault(__webpack_require__(8644));
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'index',
  setup(__props) {
    const {
      global,
      theme
    } = (0, modules_1.useModule)();
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(vue_2.Transition, {
        name: "fade",
        appear: ""
      }, {
        default: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", null, [(0, vue_2.createVNode)(phaser_vue_1.default), (0, vue_2.createVNode)(control_overlay_vue_1.default, null, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(vue_2.Transition, {
            name: (0, vue_2.unref)(global).sceneState.transitionClass,
            mode: "out-in"
          }, {
            default: (0, vue_2.withCtx)(() => [!(0, vue_2.unref)(global).sceneState.exiting && (0, vue_2.unref)(global).activeSceneKey ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)((0, vue_2.resolveDynamicComponent)((0, vue_2.unref)(global).activeSceneKey), {
              key: (0, vue_2.unref)(global).sceneState.scene
            })) : (0, vue_2.createCommentVNode)("", true)]),
            _: 1
          }, 8, ["name"])]),
          _: 1
        })])]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  ref: "game"
};
const vue_3 = __webpack_require__(6765);
const phaser_1 = tslib_1.__importDefault(__webpack_require__(2260));
const scenes_1 = tslib_1.__importDefault(__webpack_require__(6276));
const warppipeline_plugin_js_1 = tslib_1.__importDefault(__webpack_require__(4920));
const clock_plugin_js_1 = tslib_1.__importDefault(__webpack_require__(7845));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'phaser',
  setup(__props) {
    const gameContainerEl = (0, vue_3.ref)();
    (0, vue_3.onMounted)(() => {
      new phaser_1.default.Game({
        type: phaser_1.default.WEBGL,
        parent: gameContainerEl.value,
        backgroundColor: '#000000',
        scene: scenes_1.default,
        transparent: true,
        // physics: {
        //     default: 'arcade',
        //     arcade: {
        //         debug: true
        //         // gravity: {
        //         //     y: 200
        //         // }
        //     }
        // },
        // antialias: false,
        // antialiasGL: false,
        scale: {
          width: '100%',
          height: '100%',
          mode: phaser_1.default.Scale.RESIZE,
          autoCenter: phaser_1.default.Scale.CENTER_BOTH
        },
        // pipeline: [WarpPostFx],
        plugins: {
          global: [
          // {
          //     key: 'rexHorrifiPipeline',
          //     plugin: HorrifiPipelinePlugin,
          //     start: true
          // },
          {
            key: 'rexWarpPipeline',
            plugin: warppipeline_plugin_js_1.default,
            start: true
          }, {
            key: 'rexClock',
            plugin: clock_plugin_js_1.default,
            start: true
          }]
        }
        // audio: {
        //     disableWebAudio: true
        // }
      });
    });

    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, null, 512);
    };
  }
});

/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-stars"
}, null, -1);
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Color Fact! ");
const _hoisted_3 = {
  class: "k-color-fact-container"
};
const _hoisted_4 = {
  class: "k-color-fact-text"
};
const _hoisted_5 = /*#__PURE__*/(0, vue_2.createElementVNode)("h1", {
  class: "k-color-fact-title"
}, "Did you know?", -1);
const _hoisted_6 = /*#__PURE__*/(0, vue_2.createElementVNode)("span", {
  class: "k-color-fact-posttext"
}, "Wow!", -1);
const navigable_screen_vue_1 = tslib_1.__importDefault(__webpack_require__(340));
const nav_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1278));
const modules_1 = __webpack_require__(5978);
const color_facts_1 = __webpack_require__(5741);
const sample_1 = tslib_1.__importDefault(__webpack_require__(5534));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'color-fact-menu',
  emits: ['back'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "3189f86e": (0, vue_2.unref)(theme).theme.titleBg
    }));
    const {
      global,
      theme
    } = (0, modules_1.useModule)();
    const confirmText = ['WOWZA!', 'NEATO!', 'YABA DABA DOO!', 'JENGA!', 'HOLY MOLY!', 'HOT DOG!', 'HOT TAMALES!', 'HOT DIGGITY!', 'YEE HAW!', 'YIPPEE!', 'WOAH!', 'WOW!', 'WOWIE!', 'WOWZERS!', 'This is BIG!', 'Learning so much!', 'Thank you Dr. Color!', 'BANANAS!', 'So wise!', 'Sloop Diggity!'];
    const getUniqueFact = () => {
      if (global.colorFactsSeen.length === color_facts_1.ColorFacts.length) {
        global.colorFactsSeen = [];
      }
      let fact = (0, sample_1.default)(color_facts_1.ColorFacts);
      if (global.colorFactsSeen.includes(fact)) {
        return getUniqueFact();
      }
      global.colorFactsSeen.push(fact);
      return fact;
    };
    const colorFact = getUniqueFact();
    const handleNativeBack = () => emit('back');
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(navigable_screen_vue_1.default, {
        "use-banner-offset": "",
        onNativeBack: handleNativeBack
      }, {
        title: (0, vue_2.withCtx)(() => [_hoisted_1, _hoisted_2]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(vue_2.Transition, {
          name: "slide-fade",
          appear: ""
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.createElementVNode)("p", _hoisted_4, [_hoisted_5, (0, vue_2.createTextVNode)(" " + (0, vue_2.toDisplayString)((0, vue_2.unref)(colorFact)) + " ", 1), _hoisted_6])])]),
          _: 1
        })]),
        "nav-center": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "back",
          onClick: _cache[0] || (_cache[0] = $event => emit('back'))
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.createTextVNode)((0, vue_2.toDisplayString)((0, vue_2.unref)(sample_1.default)(confirmText)), 1)]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 4054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  class: "k-game absolute-full-cover ios-inset-padding"
};
const _hoisted_2 = {
  class: "k-game-content"
};
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const device_util_1 = __webpack_require__(2338);
const pause_menu_vue_1 = tslib_1.__importDefault(__webpack_require__(6418));
const game_background_vue_1 = tslib_1.__importDefault(__webpack_require__(6898));
const round_vue_1 = tslib_1.__importDefault(__webpack_require__(9073));
const pick_color_vue_1 = tslib_1.__importDefault(__webpack_require__(9164));
const odd_man_out_vue_1 = tslib_1.__importDefault(__webpack_require__(5765));
const color_phase_vue_1 = tslib_1.__importDefault(__webpack_require__(9687));
const order_gradient_vue_1 = tslib_1.__importDefault(__webpack_require__(3565));
const align_disks_vue_1 = tslib_1.__importDefault(__webpack_require__(2565));
const color_by_name_vue_1 = tslib_1.__importDefault(__webpack_require__(9539));
const game_over_vue_1 = tslib_1.__importDefault(__webpack_require__(6626));
const match_summary_vue_1 = tslib_1.__importDefault(__webpack_require__(3330));
const pattern_memory_vue_1 = tslib_1.__importDefault(__webpack_require__(1628));
const lodash_1 = __webpack_require__(6486);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
/**
 * Keeps track of current game component
 */
exports.Z = (0, vue_1.defineComponent)({
  __name: 'game',
  setup(__props) {
    var _this = this;
    (0, vue_1.useCssVars)(_ctx => ({
      "10205c9a": (0, vue_2.unref)(theme).values.fontColor
    }));
    const {
      global,
      theme,
      game,
      audio
    } = (0, modules_1.useModule)();
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    const devGame = null;
    //game.clock.setDisabled(true);
    game.matchState.difficulty = 0;
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    const activeComponent = (0, vue_3.shallowRef)(devGame !== null && devGame !== void 0 ? devGame : round_vue_1.default);
    let gameComponents = [pick_color_vue_1.default, color_phase_vue_1.default, order_gradient_vue_1.default, odd_man_out_vue_1.default, color_by_name_vue_1.default, align_disks_vue_1.default, pattern_memory_vue_1.default];
    //gameComponents = [ColorPhase];
    //gameComponents = [OrderGradient];
    const gamesComponentsPlayed = (0, vue_3.shallowRef)([]);
    const lastGameCompPlayed = (0, vue_3.shallowRef)();
    const compKey = (0, vue_3.ref)(Math.round(Math.random() * 1000));
    const gameOverScreenShown = (0, vue_3.ref)(false);
    const achievementBanner = (0, vue_3.ref)();
    (0, vue_3.onMounted)(() => {
      if (achievementBanner.value) {
        game.hydrateBannerRef(achievementBanner.value);
      }
    });
    device_util_1.deviceEvents.on('backButton', game.togglePaused);
    (0, vue_3.onBeforeUnmount)(() => {
      device_util_1.deviceEvents.removeListener('backButton', game.togglePaused);
    });
    //---------------------------------------------------------------------------------
    const enforceDifficulty = () => {
      /**
       * If the `devGame` value is set, increment difficult every match. Should never occur in production.
       */
      if (devGame && game.matchState.round !== 1) {
        game.matchState.difficulty = (0, lodash_1.clamp)(game.matchState.difficulty + 1, 0, 6);
        console.log("Difficulty incremented to", game.matchState.difficulty);
        return;
      }
      switch (true) {
        case game.matchState.round <= 7:
          game.matchState.difficulty = 0;
          return;
        case game.matchState.round > 7 && game.matchState.round <= 20:
          game.matchState.difficulty = 1;
          return;
        case game.matchState.round > 20 && game.matchState.round <= 30:
          game.matchState.difficulty = 2;
          return;
        case game.matchState.round > 30 && game.matchState.round <= 40:
          game.matchState.difficulty = 3;
          return;
        case game.matchState.round > 40 && game.matchState.round <= 50:
          game.matchState.difficulty = 4;
          return;
        case game.matchState.round > 50:
          game.matchState.difficulty = 5;
          return;
      }
    };
    const getNextGame = () => {
      enforceDifficulty();
      if (devGame) return devGame; //Dev override for working on a specific game
      if (gamesComponentsPlayed.value.length === gameComponents.length) {
        gamesComponentsPlayed.value = [];
      }
      /**
       * In the unlikely scenario that all the colors for a given difficulty level are in use,
       * mark the named-based games as played so that they won't come up anymore. This would probably
       * only potentially occur if the player has reached the highest difficulty and gone for a LOT of matches.
       */
      if (game.areAllNamedColorsUsed() && !gamesComponentsPlayed.value.includes(color_by_name_vue_1.default)) {
        console.log("Note: Named colors are all in use. Skipping games based on named colors.");
        !gamesComponentsPlayed.value.push(color_by_name_vue_1.default);
      }
      /**
       * Get a game that hasn't been played yet in this cycle and is not the same as the last game played
       * (which is only possible at the beginning of a new cycle).
       */
      let comp = Phaser.Utils.Array.GetRandom(gameComponents);
      if (gamesComponentsPlayed.value.includes(comp) || comp === lastGameCompPlayed.value) {
        return getNextGame();
      }
      if (!devGame) lastGameCompPlayed.value = comp;
      return comp;
    };
    const DefaultMatchData = {
      skipped: false,
      background: (0, chroma_js_1.default)(theme.theme.gameBg),
      baseScore: 25,
      scoreMultipliers: []
    };
    const postMatch = function () {
      let matchData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultMatchData;
      return tslib_1.__awaiter(_this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        audio.play('FX_success');
        game.clock.pause();
        game.scoreRound((_a = matchData.baseScore) !== null && _a !== void 0 ? _a : 25, (_b = matchData.scoreMultipliers) !== null && _b !== void 0 ? _b : []);
        game.setBackgroundColor((_c = matchData.background) !== null && _c !== void 0 ? _c : DefaultMatchData.background);
        yield (_e = (_d = mountedGameComp.value) === null || _d === void 0 ? void 0 : _d.leave) === null || _e === void 0 ? void 0 : _e.call(_d);
      });
    };
    const mountedGameComp = (0, vue_3.ref)();
    const handleNext = matchData => tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (activeComponent.value === match_summary_vue_1.default) {
        global.startScene('InterstitialScene');
        return;
      }
      /**
       * Go to next stage display
       */
      if (activeComponent.value !== round_vue_1.default) {
        yield postMatch(matchData);
        game.clock.stop(); //Completely reset clock between rounds so that the user won't see a paused clock on the start of the next round
        gamesComponentsPlayed.value.push(activeComponent.value);
        game.matchState.round += 1;
        yield (0, vue_3.nextTick)();
        activeComponent.value = round_vue_1.default;
        return;
      }
      /**
       * Get a random game component and rotate our key in case it is the currently rendered component already.
       */
      game.resetBackground();
      compKey.value = Math.round(Math.random() * 10000);
      activeComponent.value = getNextGame();
    });
    const handleFail = timedOut => {
      audio.play('FX_failure');
      (0, device_util_1.hapticsImpactHeavy)();
      game.clock.pause();
      game.end(timedOut);
    };
    const handleFailScreenComplete = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      var _f, _g;
      yield (_g = (_f = mountedGameComp.value) === null || _f === void 0 ? void 0 : _f.leave) === null || _g === void 0 ? void 0 : _g.call(_f);
      if (game.matchState.score === 0) {
        game.backToMenu();
        return;
      }
      activeComponent.value = match_summary_vue_1.default;
    });
    game.clock.on('end', () => handleFail(true));
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createVNode)(game_background_vue_1.default, {
        style: (0, vue_2.normalizeStyle)({
          background: (0, vue_2.unref)(theme).gameBg
        })
      }, null, 8, ["style"]), (0, vue_2.unref)(game).matchState.gameOver && !gameOverScreenShown.value ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(game_over_vue_1.default, {
        key: 0,
        onNext: handleFailScreenComplete,
        onLeave: _cache[0] || (_cache[0] = () => gameOverScreenShown.value = true)
      })) : (0, vue_2.createCommentVNode)("", true), (0, vue_2.unref)(game).paused ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(pause_menu_vue_1.default, {
        key: 1,
        onUnpause: (0, vue_2.unref)(game).togglePaused,
        onMenu: (0, vue_2.unref)(game).backToMenu,
        onEnd: (0, vue_2.unref)(game).backToMenu,
        onRestart: (0, vue_2.unref)(game).restartGame
      }, null, 8, ["onUnpause", "onMenu", "onEnd", "onRestart"])) : (0, vue_2.createCommentVNode)("", true), (0, vue_2.createElementVNode)("div", _hoisted_2, [((0, vue_2.openBlock)(), (0, vue_2.createBlock)((0, vue_2.resolveDynamicComponent)((0, vue_2.unref)(activeComponent)), {
        ref_key: "mountedGameComp",
        ref: mountedGameComp,
        context: "rank",
        key: compKey.value,
        difficulty: (0, vue_2.unref)(game).matchState.difficulty,
        onNext: handleNext,
        onFail: handleFail
      }, null, 40, ["difficulty"]))])]);
    };
  }
});

/***/ }),

/***/ 1309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = {
  key: 0,
  class: "k-menu"
};
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-menu__title"
}, " RE:PAINT ", -1);
const _hoisted_3 = {
  class: "k-menu__play"
};
const _hoisted_4 = {
  class: "k-menu__opts"
};
const _hoisted_5 = {
  class: "k-menu__remove-ads"
};
const _hoisted_6 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-hand-index-thumb"
}, null, -1);
const _hoisted_7 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Remove Ads ");
const _hoisted_8 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Thanks for your support! ");
const glow_button_vue_1 = tslib_1.__importDefault(__webpack_require__(3969));
const play_button_vue_1 = tslib_1.__importDefault(__webpack_require__(7204));
const menu_button_vue_1 = tslib_1.__importDefault(__webpack_require__(6893));
const audio_toggle_button_vue_1 = tslib_1.__importDefault(__webpack_require__(9137));
const theme_menu_vue_1 = tslib_1.__importDefault(__webpack_require__(2091));
const score_menu_vue_1 = tslib_1.__importDefault(__webpack_require__(7987));
const color_fact_menu_vue_1 = tslib_1.__importDefault(__webpack_require__(7123));
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
const game_background_vue_1 = tslib_1.__importDefault(__webpack_require__(6898));
const ad_util_1 = __webpack_require__(2463);
const device_util_1 = __webpack_require__(2338);
const tutorial_menu_vue_1 = tslib_1.__importDefault(__webpack_require__(5303));
var Screen;
(function (Screen) {
  Screen["MENU"] = "menu";
  Screen["SCORES"] = "SCORES";
  Screen["THEME"] = "THEME";
  Screen["COLOR_FACT"] = "COLOR_FACT";
  Screen["TUTORIAL"] = "TUTORIAL";
})(Screen || (Screen = {}));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'menu',
  setup(__props) {
    (0, vue_1.useCssVars)(_ctx => ({
      "1ad357ca": (0, vue_2.unref)(theme).theme.fontColor,
      "c7e3fb78": (0, vue_2.unref)(theme).theme.titleBg
    }));
    const {
      audio
    } = (0, modules_1.useModule)();
    const {
      global,
      theme,
      tutorial
    } = (0, modules_1.useModule)();
    const screen = (0, vue_3.ref)(Screen.MENU);
    const handlePlay = () => {
      tutorial.setActiveIfNotViewed();
      global.startScene('Game');
    };
    const handleTutorialClicked = () => {
      screen.value = Screen.TUTORIAL;
      // tutorial.setActive(true);
      // global.startScene('Game');
    };

    const handleThemeClicked = () => screen.value = Screen.THEME;
    const handleScoresClicked = () => screen.value = Screen.SCORES;
    const handleColorFactClicked = () => {
      (0, device_util_1.hapticsImpactLight)();
      audio.play('FX_menu_btn');
      screen.value = Screen.COLOR_FACT;
    };
    const handleRemoveAds = () => {};
    (0, vue_3.onMounted)(() => {
      (0, ad_util_1.showBanner)();
    });
    return (_ctx, _cache) => {
      return screen.value === Screen.MENU ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_1, [(0, vue_2.createVNode)(game_background_vue_1.default, {
        style: (0, vue_2.normalizeStyle)((0, vue_2.unref)(theme).menuBg)
      }, null, 8, ["style"]), (0, vue_2.createVNode)(audio_toggle_button_vue_1.default, {
        class: "audio-toggle-pos"
      }), _hoisted_2, (0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.createVNode)(play_button_vue_1.default, {
        onClick: handlePlay
      })]), (0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.createVNode)(menu_button_vue_1.default, {
        "icon-class": "bi bi-paint-bucket",
        label: "Theme",
        onClick: handleThemeClicked
      }), (0, vue_2.createVNode)(menu_button_vue_1.default, {
        "icon-class": "bi bi-trophy",
        label: "Stats",
        onClick: handleScoresClicked
      }), (0, vue_2.createVNode)(menu_button_vue_1.default, {
        "icon-class": "bi bi-book",
        label: "Tutorial",
        "audio-key": "FX_menu_btn_play",
        onClick: handleTutorialClicked
      })]), (0, vue_2.createElementVNode)("div", _hoisted_5, [(0, vue_2.createVNode)(glow_button_vue_1.default, {
        onClick: handleRemoveAds,
        "full-width": ""
      }, {
        icon: (0, vue_2.withCtx)(() => [_hoisted_6]),
        label: (0, vue_2.withCtx)(() => [_hoisted_7]),
        description: (0, vue_2.withCtx)(() => [_hoisted_8]),
        _: 1
      })])])) : screen.value === Screen.THEME ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(theme_menu_vue_1.default, {
        key: 1,
        onBack: _cache[0] || (_cache[0] = $event => screen.value = Screen.MENU)
      })) : screen.value === Screen.SCORES ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(score_menu_vue_1.default, {
        key: 2,
        onBack: _cache[1] || (_cache[1] = $event => screen.value = Screen.MENU)
      })) : screen.value === Screen.COLOR_FACT ? ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(color_fact_menu_vue_1.default, {
        key: 3,
        onBack: _cache[2] || (_cache[2] = $event => screen.value = Screen.MENU)
      })) : ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(tutorial_menu_vue_1.default, {
        key: 4,
        onBack: _cache[3] || (_cache[3] = $event => screen.value = Screen.MENU)
      }));
    };
  }
});

/***/ }),

/***/ 8083:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-pause"
}, null, -1);
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Paused ");
const _hoisted_3 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "flex-centered"
}, [/*#__PURE__*/(0, vue_2.createElementVNode)("img", {
  src: "images/IMG_line_divider.png",
  class: "k-pause-menu-divider"
})], -1);
const _hoisted_4 = {
  class: "px3 mt3 fit",
  style: {
    "width": "100%"
  }
};
const _hoisted_5 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-arrow-clockwise"
}, null, -1);
const _hoisted_6 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Restart Game ");
const _hoisted_7 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Your score will be discarded. ");
const _hoisted_8 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-slash-square",
  style: {
    "font-size": "20px"
  }
}, null, -1);
const _hoisted_9 = /*#__PURE__*/(0, vue_2.createTextVNode)(" End Game ");
const _hoisted_10 = /*#__PURE__*/(0, vue_2.createTextVNode)(" And return to menu. ");
const _hoisted_11 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Menu ");
const _hoisted_12 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Continue ");
const navigable_screen_vue_1 = tslib_1.__importDefault(__webpack_require__(340));
const nav_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1278));
const button_vue_1 = tslib_1.__importDefault(__webpack_require__(1399));
const ad_util_1 = __webpack_require__(2463);
const vue_3 = __webpack_require__(6765);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'pause-menu',
  emits: ['unpause', 'menu', 'end', 'restart', 'reduceFlashing'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const {
      global
    } = (0, modules_1.useModule)();
    //TODO: don't bother w/ all these events and just set this shit right here (except for maybe pausing?)
    const reduceFlashingComputed = (0, vue_3.computed)({
      get() {
        return global.reduceFlashing;
      },
      set(val) {
        global.setReduceFlashing(val);
      }
    });
    (0, ad_util_1.resumeBanner)();
    (0, vue_3.onBeforeUnmount)(() => {
      (0, ad_util_1.hideBanner)();
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(navigable_screen_vue_1.default, {
        "use-banner-offset": "",
        class: "au-pause-screen absolute-full-cover ios-inset-padding"
      }, {
        title: (0, vue_2.withCtx)(() => [_hoisted_1, _hoisted_2]),
        content: (0, vue_2.withCtx)(() => [_hoisted_3, (0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.createVNode)(button_vue_1.default, {
          class: "k-pause-menu-btn mb2",
          onClick: _cache[0] || (_cache[0] = $event => emit('restart'))
        }, {
          icon: (0, vue_2.withCtx)(() => [_hoisted_5]),
          label: (0, vue_2.withCtx)(() => [_hoisted_6]),
          sublabel: (0, vue_2.withCtx)(() => [_hoisted_7]),
          _: 1
        }), (0, vue_2.createVNode)(button_vue_1.default, {
          class: "k-pause-menu-btn",
          onClick: _cache[1] || (_cache[1] = $event => emit('end'))
        }, {
          icon: (0, vue_2.withCtx)(() => [_hoisted_8]),
          label: (0, vue_2.withCtx)(() => [_hoisted_9]),
          sublabel: (0, vue_2.withCtx)(() => [_hoisted_10]),
          _: 1
        })])]),
        "nav-left": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "back",
          onClick: _cache[2] || (_cache[2] = $event => emit('menu'))
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_11]),
          _: 1
        })]),
        "nav-right": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "next",
          onClick: _cache[3] || (_cache[3] = $event => emit('unpause'))
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_12]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 9015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", null, [/*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-award mr1"
}), /*#__PURE__*/(0, vue_2.createTextVNode)(" Stats ")], -1);
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  style: {
    "font-size": "14px",
    "text-transform": "initial"
  },
  class: "mt2"
}, " Based on your best match. ", -1);
const _hoisted_3 = {
  key: 0,
  class: "flex-centered col-12",
  style: {
    "height": "100%"
  }
};
const _hoisted_4 = {
  key: 1,
  class: "container-centered p2"
};
const _hoisted_5 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "k-score-error-message"
}, [/*#__PURE__*/(0, vue_2.createElementVNode)("p", {
  class: "k-error-text"
}, "¯\\_(ツ)_/¯"), /*#__PURE__*/(0, vue_2.createElementVNode)("p", {
  class: "k-error-text mb0"
}, "Hm, I had some trouble fetching your stats. Try again later maybe.")], -1);
const _hoisted_6 = [_hoisted_5];
const _hoisted_7 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Back to Menu ");
const vue_3 = __webpack_require__(6765);
const navigable_screen_vue_1 = tslib_1.__importDefault(__webpack_require__(340));
const nav_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1278));
const spinner_vue_1 = tslib_1.__importDefault(__webpack_require__(6547));
const modules_1 = __webpack_require__(5978);
const match_summary_vue_1 = tslib_1.__importDefault(__webpack_require__(3330));
const util_1 = __webpack_require__(1110);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'score-menu',
  emits: ['back'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "754ffafe": (0, vue_1.unref)(theme).theme.titleBg
    }));
    const {
      stats,
      theme
    } = (0, modules_1.useModule)();
    const handleNativeBack = () => emit('back');
    const state = (0, vue_3.reactive)({
      loading: true
    });
    const statsRes = (0, vue_3.ref)(false);
    const postGameAsyncTimeout = 12000;
    const getBestStats = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
      state.loading = true;
      try {
        statsRes.value = yield Promise.race([stats.getBest(), (0, util_1.delay)(postGameAsyncTimeout, false)]);
        console.log("DONE!");
      } catch (errors) {
        console.warn(errors);
        statsRes.value = false;
      }
      state.loading = false;
    });
    getBestStats();
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", null, [(0, vue_2.createVNode)(navigable_screen_vue_1.default, {
        "use-banner-offset": "",
        onNativeBack: handleNativeBack
      }, {
        title: (0, vue_2.withCtx)(() => [_hoisted_1, _hoisted_2]),
        content: (0, vue_2.withCtx)(() => [state.loading ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_3, [(0, vue_2.createVNode)(spinner_vue_1.default)])) : statsRes.value === false ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("div", _hoisted_4, _hoisted_6)) : ((0, vue_2.openBlock)(), (0, vue_2.createBlock)(match_summary_vue_1.default, {
          key: 2,
          context: "best",
          stats: statsRes.value
        }, null, 8, ["stats"]))]),
        "nav-center": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "back",
          onClick: _cache[0] || (_cache[0] = $event => emit('back'))
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_7]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
});

/***/ }),

/***/ 4157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-paint-bucket"
}, null, -1);
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Theme ");
const _hoisted_3 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Unlock Theme ");
const _hoisted_4 = {
  class: "au-theme-list__item-name flex-centered mb3 mt2"
};
const _hoisted_5 = {
  key: 0
};
const _hoisted_6 = {
  key: 1
};
const _hoisted_7 = {
  class: "au-theme-menu__list-wrapper"
};
const _hoisted_8 = {
  class: "au-theme-list"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", {
  class: "au-theme-list__item-bg"
}, null, -1);
const _hoisted_11 = {
  class: "au-theme-list__item-content"
};
const _hoisted_12 = {
  class: "flex-space-between col-12"
};
const _hoisted_13 = {
  class: "flex-centered"
};
const _hoisted_14 = {
  class: "au-theme-list__item-label"
};
const _hoisted_15 = /*#__PURE__*/(0, vue_2.createElementVNode)("div", null, null, -1);
const _hoisted_16 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Back to Menu ");
const vue_3 = __webpack_require__(6765);
const navigable_screen_vue_1 = tslib_1.__importDefault(__webpack_require__(340));
const nav_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1278));
const modal_vue_1 = tslib_1.__importDefault(__webpack_require__(6130));
const themes_v2_1 = __webpack_require__(161);
const modules_1 = __webpack_require__(5978);
exports.Z = (0, vue_1.defineComponent)({
  __name: 'theme-menu',
  emits: ['back'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    (0, vue_1.useCssVars)(_ctx => ({
      "51d547e6": (0, vue_2.unref)(themeStore).theme.titleBg,
      "c1ad23b6": (0, vue_2.unref)(themeStore).theme.cardBg
    }));
    const {
      theme: themeStore,
      achievements,
      global,
      audio
    } = (0, modules_1.useModule)();
    const modal = (0, vue_3.reactive)({
      visible: false,
      unlockable: false,
      target: null
    });
    /**
     * Internal theme item schema item as used by `themesComputed` to simplify template
     */
    const handleThemeSelected = key => {
      var _a, _b, _c;
      audio.play('FX_menu_btn');
      if (achievements.isThemeUnlocked(key)) {
        if (!global.reduceFlashing) {
          (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.cameras.main.flash(500);
        }
        themeStore.setTheme(key);
        return;
      }
      let theme = themes_v2_1.Themes[key];
      modal.visible = true;
      modal.target = Object.assign(Object.assign({}, theme), {
        key: key
      });
      modal.unlockable = ((_b = modal.target) === null || _b === void 0 ? void 0 : _b.credits) ? achievements.getCredits() >= ((_c = modal.target) === null || _c === void 0 ? void 0 : _c.credits) : true;
    };
    const handleCancelUnlock = () => modal.visible = false;
    const handleModalHidden = () => modal.target = null;
    const handleUnlock = () => {
      var _a, _b, _c;
      if (((_a = modal.target) === null || _a === void 0 ? void 0 : _a.credits) && achievements.getCredits() >= ((_b = modal.target) === null || _b === void 0 ? void 0 : _b.credits)) {
        achievements.unlockTheme(modal.target.key);
        themeStore.setTheme(modal.target.key);
        modal.target = null;
        modal.visible = false;
        //TODO: Play sound or something also
        if (!global.reduceFlashing) {
          (_c = global.sceneState.scene) === null || _c === void 0 ? void 0 : _c.cameras.main.flash(500);
        }
      }
    };
    const handleNativeBack = () => {
      if (!modal.visible) {
        emit('back');
      }
    };
    /**
     * Generates a `ThemeItem` object w/ all the necessary information to easily render in template,
     * including achievement unlock status and classes.
     */
    const themesComputed = (0, vue_3.computed)(() => {
      return Object.entries(themes_v2_1.Themes).map(entry => {
        var _a;
        let themeKey = entry[0],
          theme = entry[1];
        let unlocked = achievements.isThemeUnlocked(themeKey);
        let c = 'au-theme-list__item';
        if (themeStore.themeKey === themeKey) c += ' au-theme-list__item--selected';
        if (!unlocked) c += ' au-theme-list__item--locked';
        return {
          key: themeKey,
          name: theme.name,
          class: c,
          palette: theme.palette,
          credits: (_a = theme.credits) !== null && _a !== void 0 ? _a : 0,
          unlocked: unlocked
        };
      });
    });
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(navigable_screen_vue_1.default, {
        "use-banner-offset": "",
        onNativeBack: handleNativeBack
      }, {
        title: (0, vue_2.withCtx)(() => [_hoisted_1, _hoisted_2]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(modal_vue_1.default, {
          visible: modal.visible,
          onCancel: handleCancelUnlock,
          onSubmit: handleUnlock,
          onHidden: handleModalHidden,
          "submit-label": "Unlock",
          "hide-submit": !modal.unlockable,
          "cancel-label": modal.unlockable ? 'No Thanks' : 'Ok',
          "close-on-android-back": ""
        }, {
          title: (0, vue_2.withCtx)(() => [_hoisted_3]),
          content: (0, vue_2.withCtx)(() => {
            var _a, _b, _c, _d, _e, _f;
            return [(0, vue_2.createElementVNode)("div", _hoisted_4, [(0, vue_2.createElementVNode)("div", {
              class: "au-theme-list__item-preview",
              style: (0, vue_2.normalizeStyle)({
                background: (_b = (_a = modal.target) === null || _a === void 0 ? void 0 : _a.palette[0]) !== null && _b !== void 0 ? _b : '#ffffff'
              })
            }, null, 4), (0, vue_2.createTextVNode)(" " + (0, vue_2.toDisplayString)((_c = modal.target) === null || _c === void 0 ? void 0 : _c.name), 1)]), modal.unlockable ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_5, " Unlock this theme for " + (0, vue_2.toDisplayString)((_d = modal.target) === null || _d === void 0 ? void 0 : _d.credits) + " credits? ", 1)) : ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_6, " You'll need " + (0, vue_2.toDisplayString)(((_f = (_e = modal.target) === null || _e === void 0 ? void 0 : _e.credits) !== null && _f !== void 0 ? _f : 0) - (0, vue_2.unref)(achievements).getCredits()) + " more credits to unlock this theme. You can earn credits simply by playing or by completing achievements! ", 1))];
          }),
          _: 1
        }, 8, ["visible", "hide-submit", "cancel-label"]), (0, vue_2.createVNode)(vue_2.Transition, {
          name: "slide-fade",
          appear: ""
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_7, [(0, vue_2.createElementVNode)("ul", _hoisted_8, [((0, vue_2.openBlock)(true), (0, vue_2.createElementBlock)(vue_2.Fragment, null, (0, vue_2.renderList)((0, vue_2.unref)(themesComputed), theme => {
            var _a;
            return (0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("li", {
              key: theme.key,
              class: (0, vue_2.normalizeClass)(theme.class),
              onClick: () => handleThemeSelected(theme.key)
            }, [_hoisted_10, (0, vue_2.createElementVNode)("div", _hoisted_11, [(0, vue_2.createElementVNode)("div", _hoisted_12, [(0, vue_2.createElementVNode)("div", _hoisted_13, [(0, vue_2.createElementVNode)("div", {
              class: "au-theme-list__item-preview",
              style: (0, vue_2.normalizeStyle)({
                background: (_a = theme.palette[0]) !== null && _a !== void 0 ? _a : '#ffffff'
              })
            }, null, 4), (0, vue_2.createElementVNode)("span", _hoisted_14, (0, vue_2.toDisplayString)(theme.name), 1)]), _hoisted_15])])], 10, _hoisted_9);
          }), 128))])])]),
          _: 1
        })]),
        "nav-center": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "back",
          onClick: _cache[0] || (_cache[0] = $event => emit('back'))
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_16]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 9482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "X", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const vue_2 = __webpack_require__(6765);
const _hoisted_1 = /*#__PURE__*/(0, vue_2.createElementVNode)("i", {
  class: "bi bi-book mr1"
}, null, -1);
const _hoisted_2 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Tutorial ");
const _hoisted_3 = {
  class: "container-centered p2"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 0,
  class: "k-cat-source-label"
};
const _hoisted_6 = /*#__PURE__*/(0, vue_2.createTextVNode)(" Back to Menu ");
const core_1 = __webpack_require__(9895);
const vue_3 = __webpack_require__(6765);
const navigable_screen_vue_1 = tslib_1.__importDefault(__webpack_require__(340));
const nav_button_vue_1 = tslib_1.__importDefault(__webpack_require__(1278));
const spinner_vue_1 = tslib_1.__importDefault(__webpack_require__(6547));
exports.Z = (0, vue_1.defineComponent)({
  __name: 'tutorial-menu',
  emits: ['back'],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const imgReady = (0, vue_3.ref)(false);
    const imgSrc = (0, vue_3.ref)();
    const imgError = (0, vue_3.ref)(false);
    (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
      try {
        //const response = await fetch('https://cataas.com/cat');
        const res = yield core_1.CapacitorHttp.get({
          url: 'https://cataas.com/cat',
          responseType: 'blob'
        });
        const blob = res.data;
        //const blob = await response.blob();
        imgSrc.value = URL.createObjectURL(blob);
        imgReady.value = true;
      } catch (error) {
        imgSrc.value = 'images/IMG_cat.jpg';
        imgReady.value = true;
        imgError.value = true;
      }
    }))();
    const handleImageLoaded = () => imgReady.value = true;
    const handleImageLoadError = () => {
      imgSrc.value = 'images/IMG_cat.jpg';
      imgReady.value = true;
      imgError.value = true;
    };
    const handleNativeBack = () => emit('back');
    return (_ctx, _cache) => {
      return (0, vue_2.openBlock)(), (0, vue_2.createBlock)(navigable_screen_vue_1.default, {
        "use-banner-offset": "",
        onNativeBack: handleNativeBack
      }, {
        title: (0, vue_2.withCtx)(() => [_hoisted_1, _hoisted_2]),
        content: (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(vue_2.Transition, {
          name: "slide-fade",
          appear: ""
        }, {
          default: (0, vue_2.withCtx)(() => [(0, vue_2.createElementVNode)("div", _hoisted_3, [(0, vue_2.withDirectives)((0, vue_2.createVNode)(spinner_vue_1.default, null, null, 512), [[vue_2.vShow, !imgReady.value]]), (0, vue_2.withDirectives)((0, vue_2.createElementVNode)("img", {
            src: imgSrc.value,
            class: "k-cat-img",
            onLoad: handleImageLoaded,
            onError: handleImageLoadError
          }, null, 40, _hoisted_4), [[vue_2.vShow, imgReady.value]]), imgReady.value && !imgError.value ? ((0, vue_2.openBlock)(), (0, vue_2.createElementBlock)("span", _hoisted_5, " Courtesy of https://cataas.com/ ")) : (0, vue_2.createCommentVNode)("", true)])]),
          _: 1
        })]),
        "nav-center": (0, vue_2.withCtx)(() => [(0, vue_2.createVNode)(nav_button_vue_1.default, {
          type: "back",
          onClick: _cache[0] || (_cache[0] = $event => emit('back'))
        }, {
          default: (0, vue_2.withCtx)(() => [_hoisted_6]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

/***/ }),

/***/ 3717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getInGameStats = exports.getCrossGameStats = exports.Achievements = void 0;
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
//Generate default tracking stats
const getCrossGameStats = () => {
  return {};
};
exports.getCrossGameStats = getCrossGameStats;
//Generate 
const getInGameStats = () => {
  return {};
};
exports.getInGameStats = getInGameStats;
const Achievements = {
  default: {
    name: 'Not a Real Achievement',
    description: '',
    credits: 5,
    test: (tracking, match) => false,
    progress: (tracking, match, completed) => {
      return {
        format: TemplateTypes.AchievementProgressFormat.COUNT,
        value: 0,
        total: 1
      };
    }
  }
};
exports.Achievements = Achievements;

/***/ }),

/***/ 5741:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ColorFacts = void 0;
const ColorFacts = [`95% of everyone's favorite color is "Mustard Yellow."`, `Jacques Cousteau was the first to discover that Dolphins are only capable of seeing two colors - Fuchsia and Olive. Nice try, Dolphins!`, `It is not possible to put leather jackets in order of hue or lightness.`, `In 1997, the most popular baby name for boys was "Pantone 448 C."`, `There is reportedly a secret flavor of Mountain Dew called "Code Beige." Only the President of the United States knows the recipe.`, `Most aliens are green and weigh as little as a wheel of Brie cheese.`, `Research suggests "Cobalt" is the most ornery of all the colors.`, `There are more than a dozen colors!`, `Women are capable of distinguishing finer shades of color than men; however, men are capable of seeing The Color of The Chosen One. Women are also able to see this color.`, `Before coming into contact with oxygen, human blood is actually the color of Dijon mustard!`, `All colors actually taste like "Blue."`, `Every three millennia, the sun becomes an angrier shade of orange.`, `DeltaE, also known as ΔE, is a mathematical metric that quantifies the difference between two colors in terms of perceptual similarity or color distance. This is actually true, but it isn't funny.`,
// `It's common knowledge that Amber is the color of your energy.`,
`Of all the colors visible to the human eye, "Rose" is one of them.`, `Most humans are, sadly, only capable of naming 874 colors off the top of their head.`, `Women are capable of distinguishing finer shades of color than men, but not more than Greg. Never more than Greg!`, `You've run out of color fact tokens! Please insert two tokens to receive another color fact.`, `Colors. Colours. How do they work!? Scientists can only SHRUG!`, `Individuals with color blindness are incapable of hearing the tones produced by bands with color-based names such as Green Day and Yellow Card. This is considered one of the condition's few benefits!`, `Is anyone paying me to make up all these facts...?`, `I met a guy named Cerulean once. He tried to steal my identity.`, `"Mauve" is the official color of Baltimore Orioles!`, `The portion of the brain which stores color information is called the "Blingus." No one is sure why.`, `The first written mention of any color by name was in The Epic of Gilgamesh. The color was written as "Tweedle." There is no English translation.`, `The average human forgets and chooses a new favorite color every 3.5 seconds.`, `The U.S. Government has established a bounty program for the capture of the color "Puce," long-suspected of being responsible for the Max Headroom broadcast incident of 1987.`, `Speaking the word "Lavender" aloud is likely to cause nearby felines (kitties) to spontaneously combust. It is illegal to do so in 14 states.`, `If the color "Turquoise" were to spontaneously stop existing, that would be weird!`, `Both the color wheel and the cheese wheel were invented by Isaac Newton, a well-known wheel enthusiast and complete weirdo. Get a life, Isaac!`, `No one is quite sure where the color "Peach" came from. It is widely believed to be a hoax proliferated by Big Fruit.`, `The human eye, one of the most advanced in the animal kingdom, is capable of seeing, like, at least three different shades of Teal.`, `I'm tired of these colors, writing these "facts." I'm tired of being caught in the tangle of their shades.`, `Some people can only dream in black-and-white. Freaks!`, `The bigger the eyeball, the more room there is in there for colors and stuff. I dunno.`, `FACT. Color. Fact. C O L O R. FAAAAACCCTTT.`, `No color called "Jamesley" has ever been officially recognized by the Pantone Color Institute, though I have sent them many letters.`, `No color called "Rifter" exists YET, but oh how they are trying...`, `Colors are to sharks as sharks are to the Chevy Tahoe.`, `Seven deaths every year are attributed to the Color-Who-Shall-Not-Be-Named. That color's name? "Puceburt."`, `Of all the colors that glow in the dark, "green" is but one of them.`, `School buses are yellow because human children cannot resist the color's allure, while human adults are repulsed by its very existence.`, `There are fewer and fewer colors each year due to unsustainable color-harvesting practices.`, `Even if I knew any real facts about colors, I wouldn't tell you. Grow up!`, `We are living in the Golden Age of Color. It's all downhill from here!`, `Weedle weedle, woodle woodle, color facts are goodle goodle!`, `The colors of flowers have special meanings, but they are not important.`, `In traditional Japanese culture, the color "Sakura" represents the delicate beauty of cherry blossoms. I had ChatGPT write this one, and it sounds like it might actually be true, though I didn't bother checking. You're welcome!`, `The colors of most types of fruit change every few decades. This is an evolutionary trait meant to make all those paintings of bowls of fruit make no sense when the artist is long dead! Not this time, Caravaggio!`, `The official motto of the state of South Dakota is "The Color of South Dakota is South Dakota."`, `Scientists designed a special pair of glasses that allow color-blind people to see the color "Puce" (only). The glasses are called "Puce Glasses."`, `How is "Puce" even pronounced? Is it like "PUSE"? Or "PUKE"? Or "PUCHÉ"? It's time for some federal regulation on this kind of thing.`, `Each month of the year has its own color. Scientists have confirmed that anyone who knows their birth-month's color is a big ole NERD!`, `If you stand before a mirror in the dark and utter the word "Tweedle" three times, people will think you're an idiot.`, `Colors are made of tiny, nearly microscopic particles called "Little Pigment Guys." Their lust is insatiable, and they cannot be stopped.`];
exports.ColorFacts = ColorFacts;

/***/ }),

/***/ 2397:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  name: 'black',
  hex: '#000000'
}, {
  name: 'blue',
  hex: '#0000FF'
}, {
  name: 'cyan',
  hex: '#00FFFF'
}, {
  name: 'green',
  hex: '#008000'
}, {
  name: 'teal',
  hex: '#008080'
}, {
  name: 'turquoise',
  hex: '#40E0D0'
}, {
  name: 'indigo',
  hex: '#4B0082'
}, {
  name: 'gray',
  hex: '#808080'
}, {
  name: 'purple',
  hex: '#800080'
}, {
  name: 'brown',
  hex: '#A52A2A'
}, {
  name: 'tan',
  hex: '#D2B48C'
}, {
  name: 'violet',
  hex: '#EE82EE'
}, {
  name: 'beige',
  hex: '#F5F5DC'
}, {
  name: 'fuchsia',
  hex: '#FF00FF'
}, {
  name: 'gold',
  hex: '#FFD700'
}, {
  name: 'magenta',
  hex: '#FF00FF'
}, {
  name: 'orange',
  hex: '#FFA500'
}, {
  name: 'pink',
  hex: '#FFC0CB'
}, {
  name: 'red',
  hex: '#FF0000'
}, {
  name: 'white',
  hex: '#FFFFFF'
}, {
  name: 'yellow',
  hex: '#FFFF00'
}];

/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.nameColor = void 0;
const tslib_1 = __webpack_require__(655);
/**
 * This is the source code of https://github.com/colorjs/color-namer converted to TypeScript and
 * improved a bit. Most of the work done for that package was assembling the color lists. This is
 * the entirety of the code (the complicated parts are done by chromajs as well).
 */
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const basic_1 = tslib_1.__importDefault(__webpack_require__(2397));
const html_1 = tslib_1.__importDefault(__webpack_require__(2336));
const ntc_1 = tslib_1.__importDefault(__webpack_require__(8886));
const pantone_1 = tslib_1.__importDefault(__webpack_require__(1886));
const roygbiv_1 = tslib_1.__importDefault(__webpack_require__(1557));
const x11_1 = tslib_1.__importDefault(__webpack_require__(1734));
let lists = {
  basic: basic_1.default,
  html: html_1.default,
  ntc: ntc_1.default,
  pantone: pantone_1.default,
  roygbiv: roygbiv_1.default,
  x11: x11_1.default
};
let cache = new WeakMap();
const nameColor = (color, options) => {
  options = options || {};
  let cacheKey = {
    color,
    options
  };
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  let deltaE = String(options.distance).toLowerCase() === 'deltae';
  let chromaColor = (0, chroma_js_1.default)(color);
  let results = [];
  for (let key in lists) {
    if (options.pick && options.pick.indexOf(key) === -1) {
      continue;
    }
    if (options.omit && options.omit.indexOf(key) !== -1) {
      continue;
    }
    let list = lists[key];
    let resultItems = list.map(item => {
      return Object.assign(Object.assign({}, item), {
        distance: deltaE ? chroma_js_1.default.deltaE(chromaColor, (0, chroma_js_1.default)(item.hex)) : chroma_js_1.default.distance(chromaColor, (0, chroma_js_1.default)(item.hex))
      });
    }).filter(item => item.distance <= 10).sort((a, b) => a.distance - b.distance);
    results = [...results, ...resultItems];
  }
  cache.set(cacheKey, results);
  return results;
};
exports.nameColor = nameColor;

/***/ }),

/***/ 2336:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  name: 'aqua',
  hex: '#00FFFF'
}, {
  name: 'aliceblue',
  hex: '#F0F8FF'
}, {
  name: 'antiquewhite',
  hex: '#FAEBD7'
}, {
  name: 'black',
  hex: '#000000'
}, {
  name: 'blue',
  hex: '#0000FF'
}, {
  name: 'cyan',
  hex: '#00FFFF'
}, {
  name: 'darkblue',
  hex: '#00008B'
}, {
  name: 'darkcyan',
  hex: '#008B8B'
}, {
  name: 'darkgreen',
  hex: '#006400'
}, {
  name: 'darkturquoise',
  hex: '#00CED1'
}, {
  name: 'deepskyblue',
  hex: '#00BFFF'
}, {
  name: 'green',
  hex: '#008000'
}, {
  name: 'lime',
  hex: '#00FF00'
}, {
  name: 'mediumblue',
  hex: '#0000CD'
}, {
  name: 'mediumspringgreen',
  hex: '#00FA9A'
}, {
  name: 'navy',
  hex: '#000080'
}, {
  name: 'springgreen',
  hex: '#00FF7F'
}, {
  name: 'teal',
  hex: '#008080'
}, {
  name: 'midnightblue',
  hex: '#191970'
}, {
  name: 'dodgerblue',
  hex: '#1E90FF'
}, {
  name: 'lightseagreen',
  hex: '#20B2AA'
}, {
  name: 'forestgreen',
  hex: '#228B22'
}, {
  name: 'seagreen',
  hex: '#2E8B57'
}, {
  name: 'darkslategray',
  hex: '#2F4F4F'
}, {
  name: 'darkslategrey',
  hex: '#2F4F4F'
}, {
  name: 'limegreen',
  hex: '#32CD32'
}, {
  name: 'mediumseagreen',
  hex: '#3CB371'
}, {
  name: 'turquoise',
  hex: '#40E0D0'
}, {
  name: 'royalblue',
  hex: '#4169E1'
}, {
  name: 'steelblue',
  hex: '#4682B4'
}, {
  name: 'darkslateblue',
  hex: '#483D8B'
}, {
  name: 'mediumturquoise',
  hex: '#48D1CC'
}, {
  name: 'indigo',
  hex: '#4B0082'
}, {
  name: 'darkolivegreen',
  hex: '#556B2F'
}, {
  name: 'cadetblue',
  hex: '#5F9EA0'
}, {
  name: 'cornflowerblue',
  hex: '#6495ED'
}, {
  name: 'mediumaquamarine',
  hex: '#66CDAA'
}, {
  name: 'dimgray',
  hex: '#696969'
}, {
  name: 'dimgrey',
  hex: '#696969'
}, {
  name: 'slateblue',
  hex: '#6A5ACD'
}, {
  name: 'olivedrab',
  hex: '#6B8E23'
}, {
  name: 'slategray',
  hex: '#708090'
}, {
  name: 'slategrey',
  hex: '#708090'
}, {
  name: 'lightslategray',
  hex: '#778899'
}, {
  name: 'lightslategrey',
  hex: '#778899'
}, {
  name: 'mediumslateblue',
  hex: '#7B68EE'
}, {
  name: 'lawngreen',
  hex: '#7CFC00'
}, {
  name: 'aquamarine',
  hex: '#7FFFD4'
}, {
  name: 'chartreuse',
  hex: '#7FFF00'
}, {
  name: 'gray',
  hex: '#808080'
}, {
  name: 'grey',
  hex: '#808080'
}, {
  name: 'maroon',
  hex: '#800000'
}, {
  name: 'olive',
  hex: '#808000'
}, {
  name: 'purple',
  hex: '#800080'
}, {
  name: 'lightskyblue',
  hex: '#87CEFA'
}, {
  name: 'skyblue',
  hex: '#87CEEB'
}, {
  name: 'blueviolet',
  hex: '#8A2BE2'
}, {
  name: 'darkmagenta',
  hex: '#8B008B'
}, {
  name: 'darkred',
  hex: '#8B0000'
}, {
  name: 'saddlebrown',
  hex: '#8B4513'
}, {
  name: 'darkseagreen',
  hex: '#8FBC8F'
}, {
  name: 'lightgreen',
  hex: '#90EE90'
}, {
  name: 'mediumpurple',
  hex: '#9370DB'
}, {
  name: 'darkviolet',
  hex: '#9400D3'
}, {
  name: 'palegreen',
  hex: '#98FB98'
}, {
  name: 'darkorchid',
  hex: '#9932CC'
}, {
  name: 'yellowgreen',
  hex: '#9ACD32'
}, {
  name: 'sienna',
  hex: '#A0522D'
}, {
  name: 'brown',
  hex: '#A52A2A'
}, {
  name: 'darkgray',
  hex: '#A9A9A9'
}, {
  name: 'darkgrey',
  hex: '#A9A9A9'
}, {
  name: 'greenyellow',
  hex: '#ADFF2F'
}, {
  name: 'lightblue',
  hex: '#ADD8E6'
}, {
  name: 'paleturquoise',
  hex: '#AFEEEE'
}, {
  name: 'lightsteelblue',
  hex: '#B0C4DE'
}, {
  name: 'powderblue',
  hex: '#B0E0E6'
}, {
  name: 'firebrick',
  hex: '#B22222'
}, {
  name: 'darkgoldenrod',
  hex: '#B8860B'
}, {
  name: 'mediumorchid',
  hex: '#BA55D3'
}, {
  name: 'rosybrown',
  hex: '#BC8F8F'
}, {
  name: 'darkkhaki',
  hex: '#BDB76B'
}, {
  name: 'silver',
  hex: '#C0C0C0'
}, {
  name: 'mediumvioletred',
  hex: '#C71585'
}, {
  name: 'indianred',
  hex: '#CD5C5C'
}, {
  name: 'peru',
  hex: '#CD853F'
}, {
  name: 'chocolate',
  hex: '#D2691E'
}, {
  name: 'tan',
  hex: '#D2B48C'
}, {
  name: 'lightgray',
  hex: '#D3D3D3'
}, {
  name: 'lightgrey',
  hex: '#D3D3D3'
}, {
  name: 'thistle',
  hex: '#D8BFD8'
}, {
  name: 'goldenrod',
  hex: '#DAA520'
}, {
  name: 'orchid',
  hex: '#DA70D6'
}, {
  name: 'palevioletred',
  hex: '#DB7093'
}, {
  name: 'crimson',
  hex: '#DC143C'
}, {
  name: 'gainsboro',
  hex: '#DCDCDC'
}, {
  name: 'plum',
  hex: '#DDA0DD'
}, {
  name: 'burlywood',
  hex: '#DEB887'
}, {
  name: 'lightcyan',
  hex: '#E0FFFF'
}, {
  name: 'lavender',
  hex: '#E6E6FA'
}, {
  name: 'darksalmon',
  hex: '#E9967A'
}, {
  name: 'palegoldenrod',
  hex: '#EEE8AA'
}, {
  name: 'violet',
  hex: '#EE82EE'
}, {
  name: 'azure',
  hex: '#F0FFFF'
}, {
  name: 'honeydew',
  hex: '#F0FFF0'
}, {
  name: 'khaki',
  hex: '#F0E68C'
}, {
  name: 'lightcoral',
  hex: '#F08080'
}, {
  name: 'sandybrown',
  hex: '#F4A460'
}, {
  name: 'beige',
  hex: '#F5F5DC'
}, {
  name: 'mintcream',
  hex: '#F5FFFA'
}, {
  name: 'wheat',
  hex: '#F5DEB3'
}, {
  name: 'whitesmoke',
  hex: '#F5F5F5'
}, {
  name: 'ghostwhite',
  hex: '#F8F8FF'
}, {
  name: 'lightgoldenrodyellow',
  hex: '#FAFAD2'
}, {
  name: 'linen',
  hex: '#FAF0E6'
}, {
  name: 'salmon',
  hex: '#FA8072'
}, {
  name: 'oldlace',
  hex: '#FDF5E6'
}, {
  name: 'bisque',
  hex: '#FFE4C4'
}, {
  name: 'blanchedalmond',
  hex: '#FFEBCD'
}, {
  name: 'coral',
  hex: '#FF7F50'
}, {
  name: 'cornsilk',
  hex: '#FFF8DC'
}, {
  name: 'darkorange',
  hex: '#FF8C00'
}, {
  name: 'deeppink',
  hex: '#FF1493'
}, {
  name: 'floralwhite',
  hex: '#FFFAF0'
}, {
  name: 'fuchsia',
  hex: '#FF00FF'
}, {
  name: 'gold',
  hex: '#FFD700'
}, {
  name: 'hotpink',
  hex: '#FF69B4'
}, {
  name: 'ivory',
  hex: '#FFFFF0'
}, {
  name: 'lavenderblush',
  hex: '#FFF0F5'
}, {
  name: 'lemonchiffon',
  hex: '#FFFACD'
}, {
  name: 'lightpink',
  hex: '#FFB6C1'
}, {
  name: 'lightsalmon',
  hex: '#FFA07A'
}, {
  name: 'lightyellow',
  hex: '#FFFFE0'
}, {
  name: 'magenta',
  hex: '#FF00FF'
}, {
  name: 'mistyrose',
  hex: '#FFE4E1'
}, {
  name: 'moccasin',
  hex: '#FFE4B5'
}, {
  name: 'navajowhite',
  hex: '#FFDEAD'
}, {
  name: 'orange',
  hex: '#FFA500'
}, {
  name: 'orangered',
  hex: '#FF4500'
}, {
  name: 'papayawhip',
  hex: '#FFEFD5'
}, {
  name: 'peachpuff',
  hex: '#FFDAB9'
}, {
  name: 'pink',
  hex: '#FFC0CB'
}, {
  name: 'red',
  hex: '#FF0000'
}, {
  name: 'seashell',
  hex: '#FFF5EE'
}, {
  name: 'snow',
  hex: '#FFFAFA'
}, {
  name: 'tomato',
  hex: '#FF6347'
}, {
  name: 'white',
  hex: '#FFFFFF'
}, {
  name: 'yellow',
  hex: '#FFFF00'
}];

/***/ }),

/***/ 8886:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  "name": "Black",
  "hex": "#000000"
}, {
  "name": "Navy Blue",
  "hex": "#000080"
}, {
  "name": "Dark Blue",
  "hex": "#0000C8"
}, {
  "name": "Blue",
  "hex": "#0000FF"
}, {
  "name": "Stratos",
  "hex": "#000741"
}, {
  "name": "Swamp",
  "hex": "#001B1C"
}, {
  "name": "Resolution Blue",
  "hex": "#002387"
}, {
  "name": "Deep Fir",
  "hex": "#002900"
}, {
  "name": "Burnham",
  "hex": "#002E20"
}, {
  "name": "International Klein Blue",
  "hex": "#002FA7"
}, {
  "name": "Prussian Blue",
  "hex": "#003153"
}, {
  "name": "Midnight Blue",
  "hex": "#003366"
}, {
  "name": "Smalt",
  "hex": "#003399"
}, {
  "name": "Deep Teal",
  "hex": "#003532"
}, {
  "name": "Cyprus",
  "hex": "#003E40"
}, {
  "name": "Kaitoke Green",
  "hex": "#004620"
}, {
  "name": "Cobalt",
  "hex": "#0047AB"
}, {
  "name": "Crusoe",
  "hex": "#004816"
}, {
  "name": "Sherpa Blue",
  "hex": "#004950"
}, {
  "name": "Endeavour",
  "hex": "#0056A7"
}, {
  "name": "Camarone",
  "hex": "#00581A"
}, {
  "name": "Science Blue",
  "hex": "#0066CC"
}, {
  "name": "Blue Ribbon",
  "hex": "#0066FF"
}, {
  "name": "Tropical Rain Forest",
  "hex": "#00755E"
}, {
  "name": "Allports",
  "hex": "#0076A3"
}, {
  "name": "Deep Cerulean",
  "hex": "#007BA7"
}, {
  "name": "Lochmara",
  "hex": "#007EC7"
}, {
  "name": "Azure Radiance",
  "hex": "#007FFF"
}, {
  "name": "Teal",
  "hex": "#008080"
}, {
  "name": "Bondi Blue",
  "hex": "#0095B6"
}, {
  "name": "Pacific Blue",
  "hex": "#009DC4"
}, {
  "name": "Persian Green",
  "hex": "#00A693"
}, {
  "name": "Jade",
  "hex": "#00A86B"
}, {
  "name": "Caribbean Green",
  "hex": "#00CC99"
}, {
  "name": "Robin's Egg Blue",
  "hex": "#00CCCC"
}, {
  "name": "Green",
  "hex": "#00FF00"
}, {
  "name": "Spring Green",
  "hex": "#00FF7F"
}, {
  "name": "Cyan / Aqua",
  "hex": "#00FFFF"
}, {
  "name": "Blue Charcoal",
  "hex": "#010D1A"
}, {
  "name": "Midnight",
  "hex": "#011635"
}, {
  "name": "Holly",
  "hex": "#011D13"
}, {
  "name": "Daintree",
  "hex": "#012731"
}, {
  "name": "Cardin Green",
  "hex": "#01361C"
}, {
  "name": "County Green",
  "hex": "#01371A"
}, {
  "name": "Astronaut Blue",
  "hex": "#013E62"
}, {
  "name": "Regal Blue",
  "hex": "#013F6A"
}, {
  "name": "Aqua Deep",
  "hex": "#014B43"
}, {
  "name": "Orient",
  "hex": "#015E85"
}, {
  "name": "Blue Stone",
  "hex": "#016162"
}, {
  "name": "Fun Green",
  "hex": "#016D39"
}, {
  "name": "Pine Green",
  "hex": "#01796F"
}, {
  "name": "Blue Lagoon",
  "hex": "#017987"
}, {
  "name": "Deep Sea",
  "hex": "#01826B"
}, {
  "name": "Green Haze",
  "hex": "#01A368"
}, {
  "name": "English Holly",
  "hex": "#022D15"
}, {
  "name": "Sherwood Green",
  "hex": "#02402C"
}, {
  "name": "Congress Blue",
  "hex": "#02478E"
}, {
  "name": "Evening Sea",
  "hex": "#024E46"
}, {
  "name": "Bahama Blue",
  "hex": "#026395"
}, {
  "name": "Observatory",
  "hex": "#02866F"
}, {
  "name": "Cerulean",
  "hex": "#02A4D3"
}, {
  "name": "Tangaroa",
  "hex": "#03163C"
}, {
  "name": "Green Vogue",
  "hex": "#032B52"
}, {
  "name": "Mosque",
  "hex": "#036A6E"
}, {
  "name": "Midnight Moss",
  "hex": "#041004"
}, {
  "name": "Black Pearl",
  "hex": "#041322"
}, {
  "name": "Blue Whale",
  "hex": "#042E4C"
}, {
  "name": "Zuccini",
  "hex": "#044022"
}, {
  "name": "Teal Blue",
  "hex": "#044259"
}, {
  "name": "Deep Cove",
  "hex": "#051040"
}, {
  "name": "Gulf Blue",
  "hex": "#051657"
}, {
  "name": "Venice Blue",
  "hex": "#055989"
}, {
  "name": "Watercourse",
  "hex": "#056F57"
}, {
  "name": "Catalina Blue",
  "hex": "#062A78"
}, {
  "name": "Tiber",
  "hex": "#063537"
}, {
  "name": "Gossamer",
  "hex": "#069B81"
}, {
  "name": "Niagara",
  "hex": "#06A189"
}, {
  "name": "Tarawera",
  "hex": "#073A50"
}, {
  "name": "Jaguar",
  "hex": "#080110"
}, {
  "name": "Black Bean",
  "hex": "#081910"
}, {
  "name": "Deep Sapphire",
  "hex": "#082567"
}, {
  "name": "Elf Green",
  "hex": "#088370"
}, {
  "name": "Bright Turquoise",
  "hex": "#08E8DE"
}, {
  "name": "Downriver",
  "hex": "#092256"
}, {
  "name": "Palm Green",
  "hex": "#09230F"
}, {
  "name": "Madison",
  "hex": "#09255D"
}, {
  "name": "Bottle Green",
  "hex": "#093624"
}, {
  "name": "Deep Sea Green",
  "hex": "#095859"
}, {
  "name": "Salem",
  "hex": "#097F4B"
}, {
  "name": "Black Russian",
  "hex": "#0A001C"
}, {
  "name": "Dark Fern",
  "hex": "#0A480D"
}, {
  "name": "Japanese Laurel",
  "hex": "#0A6906"
}, {
  "name": "Atoll",
  "hex": "#0A6F75"
}, {
  "name": "Cod Gray",
  "hex": "#0B0B0B"
}, {
  "name": "Marshland",
  "hex": "#0B0F08"
}, {
  "name": "Gordons Green",
  "hex": "#0B1107"
}, {
  "name": "Black Forest",
  "hex": "#0B1304"
}, {
  "name": "San Felix",
  "hex": "#0B6207"
}, {
  "name": "Malachite",
  "hex": "#0BDA51"
}, {
  "name": "Ebony",
  "hex": "#0C0B1D"
}, {
  "name": "Woodsmoke",
  "hex": "#0C0D0F"
}, {
  "name": "Racing Green",
  "hex": "#0C1911"
}, {
  "name": "Surfie Green",
  "hex": "#0C7A79"
}, {
  "name": "Blue Chill",
  "hex": "#0C8990"
}, {
  "name": "Black Rock",
  "hex": "#0D0332"
}, {
  "name": "Bunker",
  "hex": "#0D1117"
}, {
  "name": "Aztec",
  "hex": "#0D1C19"
}, {
  "name": "Bush",
  "hex": "#0D2E1C"
}, {
  "name": "Cinder",
  "hex": "#0E0E18"
}, {
  "name": "Firefly",
  "hex": "#0E2A30"
}, {
  "name": "Torea Bay",
  "hex": "#0F2D9E"
}, {
  "name": "Vulcan",
  "hex": "#10121D"
}, {
  "name": "Green Waterloo",
  "hex": "#101405"
}, {
  "name": "Eden",
  "hex": "#105852"
}, {
  "name": "Arapawa",
  "hex": "#110C6C"
}, {
  "name": "Ultramarine",
  "hex": "#120A8F"
}, {
  "name": "Elephant",
  "hex": "#123447"
}, {
  "name": "Jewel",
  "hex": "#126B40"
}, {
  "name": "Diesel",
  "hex": "#130000"
}, {
  "name": "Asphalt",
  "hex": "#130A06"
}, {
  "name": "Blue Zodiac",
  "hex": "#13264D"
}, {
  "name": "Parsley",
  "hex": "#134F19"
}, {
  "name": "Nero",
  "hex": "#140600"
}, {
  "name": "Tory Blue",
  "hex": "#1450AA"
}, {
  "name": "Bunting",
  "hex": "#151F4C"
}, {
  "name": "Denim",
  "hex": "#1560BD"
}, {
  "name": "Genoa",
  "hex": "#15736B"
}, {
  "name": "Mirage",
  "hex": "#161928"
}, {
  "name": "Hunter Green",
  "hex": "#161D10"
}, {
  "name": "Big Stone",
  "hex": "#162A40"
}, {
  "name": "Celtic",
  "hex": "#163222"
}, {
  "name": "Timber Green",
  "hex": "#16322C"
}, {
  "name": "Gable Green",
  "hex": "#163531"
}, {
  "name": "Pine Tree",
  "hex": "#171F04"
}, {
  "name": "Chathams Blue",
  "hex": "#175579"
}, {
  "name": "Deep Forest Green",
  "hex": "#182D09"
}, {
  "name": "Blumine",
  "hex": "#18587A"
}, {
  "name": "Palm Leaf",
  "hex": "#19330E"
}, {
  "name": "Nile Blue",
  "hex": "#193751"
}, {
  "name": "Fun Blue",
  "hex": "#1959A8"
}, {
  "name": "Lucky Point",
  "hex": "#1A1A68"
}, {
  "name": "Mountain Meadow",
  "hex": "#1AB385"
}, {
  "name": "Tolopea",
  "hex": "#1B0245"
}, {
  "name": "Haiti",
  "hex": "#1B1035"
}, {
  "name": "Deep Koamaru",
  "hex": "#1B127B"
}, {
  "name": "Acadia",
  "hex": "#1B1404"
}, {
  "name": "Seaweed",
  "hex": "#1B2F11"
}, {
  "name": "Biscay",
  "hex": "#1B3162"
}, {
  "name": "Matisse",
  "hex": "#1B659D"
}, {
  "name": "Crowshead",
  "hex": "#1C1208"
}, {
  "name": "Rangoon Green",
  "hex": "#1C1E13"
}, {
  "name": "Persian Blue",
  "hex": "#1C39BB"
}, {
  "name": "Everglade",
  "hex": "#1C402E"
}, {
  "name": "Elm",
  "hex": "#1C7C7D"
}, {
  "name": "Green Pea",
  "hex": "#1D6142"
}, {
  "name": "Creole",
  "hex": "#1E0F04"
}, {
  "name": "Karaka",
  "hex": "#1E1609"
}, {
  "name": "El Paso",
  "hex": "#1E1708"
}, {
  "name": "Cello",
  "hex": "#1E385B"
}, {
  "name": "Te Papa Green",
  "hex": "#1E433C"
}, {
  "name": "Dodger Blue",
  "hex": "#1E90FF"
}, {
  "name": "Eastern Blue",
  "hex": "#1E9AB0"
}, {
  "name": "Night Rider",
  "hex": "#1F120F"
}, {
  "name": "Java",
  "hex": "#1FC2C2"
}, {
  "name": "Jacksons Purple",
  "hex": "#20208D"
}, {
  "name": "Cloud Burst",
  "hex": "#202E54"
}, {
  "name": "Blue Dianne",
  "hex": "#204852"
}, {
  "name": "Eternity",
  "hex": "#211A0E"
}, {
  "name": "Deep Blue",
  "hex": "#220878"
}, {
  "name": "Forest Green",
  "hex": "#228B22"
}, {
  "name": "Mallard",
  "hex": "#233418"
}, {
  "name": "Violet",
  "hex": "#240A40"
}, {
  "name": "Kilamanjaro",
  "hex": "#240C02"
}, {
  "name": "Log Cabin",
  "hex": "#242A1D"
}, {
  "name": "Black Olive",
  "hex": "#242E16"
}, {
  "name": "Green House",
  "hex": "#24500F"
}, {
  "name": "Graphite",
  "hex": "#251607"
}, {
  "name": "Cannon Black",
  "hex": "#251706"
}, {
  "name": "Port Gore",
  "hex": "#251F4F"
}, {
  "name": "Shark",
  "hex": "#25272C"
}, {
  "name": "Green Kelp",
  "hex": "#25311C"
}, {
  "name": "Curious Blue",
  "hex": "#2596D1"
}, {
  "name": "Paua",
  "hex": "#260368"
}, {
  "name": "Paris M",
  "hex": "#26056A"
}, {
  "name": "Wood Bark",
  "hex": "#261105"
}, {
  "name": "Gondola",
  "hex": "#261414"
}, {
  "name": "Steel Gray",
  "hex": "#262335"
}, {
  "name": "Ebony Clay",
  "hex": "#26283B"
}, {
  "name": "Bay of Many",
  "hex": "#273A81"
}, {
  "name": "Plantation",
  "hex": "#27504B"
}, {
  "name": "Eucalyptus",
  "hex": "#278A5B"
}, {
  "name": "Oil",
  "hex": "#281E15"
}, {
  "name": "Astronaut",
  "hex": "#283A77"
}, {
  "name": "Mariner",
  "hex": "#286ACD"
}, {
  "name": "Violent Violet",
  "hex": "#290C5E"
}, {
  "name": "Bastille",
  "hex": "#292130"
}, {
  "name": "Zeus",
  "hex": "#292319"
}, {
  "name": "Charade",
  "hex": "#292937"
}, {
  "name": "Jelly Bean",
  "hex": "#297B9A"
}, {
  "name": "Jungle Green",
  "hex": "#29AB87"
}, {
  "name": "Cherry Pie",
  "hex": "#2A0359"
}, {
  "name": "Coffee Bean",
  "hex": "#2A140E"
}, {
  "name": "Baltic Sea",
  "hex": "#2A2630"
}, {
  "name": "Turtle Green",
  "hex": "#2A380B"
}, {
  "name": "Cerulean Blue",
  "hex": "#2A52BE"
}, {
  "name": "Sepia Black",
  "hex": "#2B0202"
}, {
  "name": "Valhalla",
  "hex": "#2B194F"
}, {
  "name": "Heavy Metal",
  "hex": "#2B3228"
}, {
  "name": "Blue Gem",
  "hex": "#2C0E8C"
}, {
  "name": "Revolver",
  "hex": "#2C1632"
}, {
  "name": "Bleached Cedar",
  "hex": "#2C2133"
}, {
  "name": "Lochinvar",
  "hex": "#2C8C84"
}, {
  "name": "Mikado",
  "hex": "#2D2510"
}, {
  "name": "Outer Space",
  "hex": "#2D383A"
}, {
  "name": "St Tropaz",
  "hex": "#2D569B"
}, {
  "name": "Jacaranda",
  "hex": "#2E0329"
}, {
  "name": "Jacko Bean",
  "hex": "#2E1905"
}, {
  "name": "Rangitoto",
  "hex": "#2E3222"
}, {
  "name": "Rhino",
  "hex": "#2E3F62"
}, {
  "name": "Sea Green",
  "hex": "#2E8B57"
}, {
  "name": "Scooter",
  "hex": "#2EBFD4"
}, {
  "name": "Onion",
  "hex": "#2F270E"
}, {
  "name": "Governor Bay",
  "hex": "#2F3CB3"
}, {
  "name": "Sapphire",
  "hex": "#2F519E"
}, {
  "name": "Spectra",
  "hex": "#2F5A57"
}, {
  "name": "Casal",
  "hex": "#2F6168"
}, {
  "name": "Melanzane",
  "hex": "#300529"
}, {
  "name": "Cocoa Brown",
  "hex": "#301F1E"
}, {
  "name": "Woodrush",
  "hex": "#302A0F"
}, {
  "name": "San Juan",
  "hex": "#304B6A"
}, {
  "name": "Turquoise",
  "hex": "#30D5C8"
}, {
  "name": "Eclipse",
  "hex": "#311C17"
}, {
  "name": "Pickled Bluewood",
  "hex": "#314459"
}, {
  "name": "Azure",
  "hex": "#315BA1"
}, {
  "name": "Calypso",
  "hex": "#31728D"
}, {
  "name": "Paradiso",
  "hex": "#317D82"
}, {
  "name": "Persian Indigo",
  "hex": "#32127A"
}, {
  "name": "Blackcurrant",
  "hex": "#32293A"
}, {
  "name": "Mine Shaft",
  "hex": "#323232"
}, {
  "name": "Stromboli",
  "hex": "#325D52"
}, {
  "name": "Bilbao",
  "hex": "#327C14"
}, {
  "name": "Astral",
  "hex": "#327DA0"
}, {
  "name": "Christalle",
  "hex": "#33036B"
}, {
  "name": "Thunder",
  "hex": "#33292F"
}, {
  "name": "Shamrock",
  "hex": "#33CC99"
}, {
  "name": "Tamarind",
  "hex": "#341515"
}, {
  "name": "Mardi Gras",
  "hex": "#350036"
}, {
  "name": "Valentino",
  "hex": "#350E42"
}, {
  "name": "Jagger",
  "hex": "#350E57"
}, {
  "name": "Tuna",
  "hex": "#353542"
}, {
  "name": "Chambray",
  "hex": "#354E8C"
}, {
  "name": "Martinique",
  "hex": "#363050"
}, {
  "name": "Tuatara",
  "hex": "#363534"
}, {
  "name": "Waiouru",
  "hex": "#363C0D"
}, {
  "name": "Ming",
  "hex": "#36747D"
}, {
  "name": "La Palma",
  "hex": "#368716"
}, {
  "name": "Chocolate",
  "hex": "#370202"
}, {
  "name": "Clinker",
  "hex": "#371D09"
}, {
  "name": "Brown Tumbleweed",
  "hex": "#37290E"
}, {
  "name": "Birch",
  "hex": "#373021"
}, {
  "name": "Oracle",
  "hex": "#377475"
}, {
  "name": "Blue Diamond",
  "hex": "#380474"
}, {
  "name": "Grape",
  "hex": "#381A51"
}, {
  "name": "Dune",
  "hex": "#383533"
}, {
  "name": "Oxford Blue",
  "hex": "#384555"
}, {
  "name": "Clover",
  "hex": "#384910"
}, {
  "name": "Limed Spruce",
  "hex": "#394851"
}, {
  "name": "Dell",
  "hex": "#396413"
}, {
  "name": "Toledo",
  "hex": "#3A0020"
}, {
  "name": "Sambuca",
  "hex": "#3A2010"
}, {
  "name": "Jacarta",
  "hex": "#3A2A6A"
}, {
  "name": "William",
  "hex": "#3A686C"
}, {
  "name": "Killarney",
  "hex": "#3A6A47"
}, {
  "name": "Keppel",
  "hex": "#3AB09E"
}, {
  "name": "Temptress",
  "hex": "#3B000B"
}, {
  "name": "Aubergine",
  "hex": "#3B0910"
}, {
  "name": "Jon",
  "hex": "#3B1F1F"
}, {
  "name": "Treehouse",
  "hex": "#3B2820"
}, {
  "name": "Amazon",
  "hex": "#3B7A57"
}, {
  "name": "Boston Blue",
  "hex": "#3B91B4"
}, {
  "name": "Windsor",
  "hex": "#3C0878"
}, {
  "name": "Rebel",
  "hex": "#3C1206"
}, {
  "name": "Meteorite",
  "hex": "#3C1F76"
}, {
  "name": "Dark Ebony",
  "hex": "#3C2005"
}, {
  "name": "Camouflage",
  "hex": "#3C3910"
}, {
  "name": "Bright Gray",
  "hex": "#3C4151"
}, {
  "name": "Cape Cod",
  "hex": "#3C4443"
}, {
  "name": "Lunar Green",
  "hex": "#3C493A"
}, {
  "name": "Bean  ",
  "hex": "#3D0C02"
}, {
  "name": "Bistre",
  "hex": "#3D2B1F"
}, {
  "name": "Goblin",
  "hex": "#3D7D52"
}, {
  "name": "Kingfisher Daisy",
  "hex": "#3E0480"
}, {
  "name": "Cedar",
  "hex": "#3E1C14"
}, {
  "name": "English Walnut",
  "hex": "#3E2B23"
}, {
  "name": "Black Marlin",
  "hex": "#3E2C1C"
}, {
  "name": "Ship Gray",
  "hex": "#3E3A44"
}, {
  "name": "Pelorous",
  "hex": "#3EABBF"
}, {
  "name": "Bronze",
  "hex": "#3F2109"
}, {
  "name": "Cola",
  "hex": "#3F2500"
}, {
  "name": "Madras",
  "hex": "#3F3002"
}, {
  "name": "Minsk",
  "hex": "#3F307F"
}, {
  "name": "Cabbage Pont",
  "hex": "#3F4C3A"
}, {
  "name": "Tom Thumb",
  "hex": "#3F583B"
}, {
  "name": "Mineral Green",
  "hex": "#3F5D53"
}, {
  "name": "Puerto Rico",
  "hex": "#3FC1AA"
}, {
  "name": "Harlequin",
  "hex": "#3FFF00"
}, {
  "name": "Brown Pod",
  "hex": "#401801"
}, {
  "name": "Cork",
  "hex": "#40291D"
}, {
  "name": "Masala",
  "hex": "#403B38"
}, {
  "name": "Thatch Green",
  "hex": "#403D19"
}, {
  "name": "Fiord",
  "hex": "#405169"
}, {
  "name": "Viridian",
  "hex": "#40826D"
}, {
  "name": "Chateau Green",
  "hex": "#40A860"
}, {
  "name": "Ripe Plum",
  "hex": "#410056"
}, {
  "name": "Paco",
  "hex": "#411F10"
}, {
  "name": "Deep Oak",
  "hex": "#412010"
}, {
  "name": "Merlin",
  "hex": "#413C37"
}, {
  "name": "Gun Powder",
  "hex": "#414257"
}, {
  "name": "East Bay",
  "hex": "#414C7D"
}, {
  "name": "Royal Blue",
  "hex": "#4169E1"
}, {
  "name": "Ocean Green",
  "hex": "#41AA78"
}, {
  "name": "Burnt Maroon",
  "hex": "#420303"
}, {
  "name": "Lisbon Brown",
  "hex": "#423921"
}, {
  "name": "Faded Jade",
  "hex": "#427977"
}, {
  "name": "Scarlet Gum",
  "hex": "#431560"
}, {
  "name": "Iroko",
  "hex": "#433120"
}, {
  "name": "Armadillo",
  "hex": "#433E37"
}, {
  "name": "River Bed",
  "hex": "#434C59"
}, {
  "name": "Green Leaf",
  "hex": "#436A0D"
}, {
  "name": "Barossa",
  "hex": "#44012D"
}, {
  "name": "Morocco Brown",
  "hex": "#441D00"
}, {
  "name": "Mako",
  "hex": "#444954"
}, {
  "name": "Kelp",
  "hex": "#454936"
}, {
  "name": "San Marino",
  "hex": "#456CAC"
}, {
  "name": "Picton Blue",
  "hex": "#45B1E8"
}, {
  "name": "Loulou",
  "hex": "#460B41"
}, {
  "name": "Crater Brown",
  "hex": "#462425"
}, {
  "name": "Gray Asparagus",
  "hex": "#465945"
}, {
  "name": "Steel Blue",
  "hex": "#4682B4"
}, {
  "name": "Rustic Red",
  "hex": "#480404"
}, {
  "name": "Bulgarian Rose",
  "hex": "#480607"
}, {
  "name": "Clairvoyant",
  "hex": "#480656"
}, {
  "name": "Cocoa Bean",
  "hex": "#481C1C"
}, {
  "name": "Woody Brown",
  "hex": "#483131"
}, {
  "name": "Taupe",
  "hex": "#483C32"
}, {
  "name": "Van Cleef",
  "hex": "#49170C"
}, {
  "name": "Brown Derby",
  "hex": "#492615"
}, {
  "name": "Metallic Bronze",
  "hex": "#49371B"
}, {
  "name": "Verdun Green",
  "hex": "#495400"
}, {
  "name": "Blue Bayoux",
  "hex": "#496679"
}, {
  "name": "Bismark",
  "hex": "#497183"
}, {
  "name": "Bracken",
  "hex": "#4A2A04"
}, {
  "name": "Deep Bronze",
  "hex": "#4A3004"
}, {
  "name": "Mondo",
  "hex": "#4A3C30"
}, {
  "name": "Tundora",
  "hex": "#4A4244"
}, {
  "name": "Gravel",
  "hex": "#4A444B"
}, {
  "name": "Trout",
  "hex": "#4A4E5A"
}, {
  "name": "Pigment Indigo",
  "hex": "#4B0082"
}, {
  "name": "Nandor",
  "hex": "#4B5D52"
}, {
  "name": "Saddle",
  "hex": "#4C3024"
}, {
  "name": "Abbey",
  "hex": "#4C4F56"
}, {
  "name": "Blackberry",
  "hex": "#4D0135"
}, {
  "name": "Cab Sav",
  "hex": "#4D0A18"
}, {
  "name": "Indian Tan",
  "hex": "#4D1E01"
}, {
  "name": "Cowboy",
  "hex": "#4D282D"
}, {
  "name": "Livid Brown",
  "hex": "#4D282E"
}, {
  "name": "Rock",
  "hex": "#4D3833"
}, {
  "name": "Punga",
  "hex": "#4D3D14"
}, {
  "name": "Bronzetone",
  "hex": "#4D400F"
}, {
  "name": "Woodland",
  "hex": "#4D5328"
}, {
  "name": "Mahogany",
  "hex": "#4E0606"
}, {
  "name": "Bossanova",
  "hex": "#4E2A5A"
}, {
  "name": "Matterhorn",
  "hex": "#4E3B41"
}, {
  "name": "Bronze Olive",
  "hex": "#4E420C"
}, {
  "name": "Mulled Wine",
  "hex": "#4E4562"
}, {
  "name": "Axolotl",
  "hex": "#4E6649"
}, {
  "name": "Wedgewood",
  "hex": "#4E7F9E"
}, {
  "name": "Shakespeare",
  "hex": "#4EABD1"
}, {
  "name": "Honey Flower",
  "hex": "#4F1C70"
}, {
  "name": "Daisy Bush",
  "hex": "#4F2398"
}, {
  "name": "Indigo",
  "hex": "#4F69C6"
}, {
  "name": "Fern Green",
  "hex": "#4F7942"
}, {
  "name": "Fruit Salad",
  "hex": "#4F9D5D"
}, {
  "name": "Apple",
  "hex": "#4FA83D"
}, {
  "name": "Mortar",
  "hex": "#504351"
}, {
  "name": "Kashmir Blue",
  "hex": "#507096"
}, {
  "name": "Cutty Sark",
  "hex": "#507672"
}, {
  "name": "Emerald",
  "hex": "#50C878"
}, {
  "name": "Emperor",
  "hex": "#514649"
}, {
  "name": "Chalet Green",
  "hex": "#516E3D"
}, {
  "name": "Como",
  "hex": "#517C66"
}, {
  "name": "Smalt Blue",
  "hex": "#51808F"
}, {
  "name": "Castro",
  "hex": "#52001F"
}, {
  "name": "Maroon Oak",
  "hex": "#520C17"
}, {
  "name": "Gigas",
  "hex": "#523C94"
}, {
  "name": "Voodoo",
  "hex": "#533455"
}, {
  "name": "Victoria",
  "hex": "#534491"
}, {
  "name": "Hippie Green",
  "hex": "#53824B"
}, {
  "name": "Heath",
  "hex": "#541012"
}, {
  "name": "Judge Gray",
  "hex": "#544333"
}, {
  "name": "Fuscous Gray",
  "hex": "#54534D"
}, {
  "name": "Vida Loca",
  "hex": "#549019"
}, {
  "name": "Cioccolato",
  "hex": "#55280C"
}, {
  "name": "Saratoga",
  "hex": "#555B10"
}, {
  "name": "Finlandia",
  "hex": "#556D56"
}, {
  "name": "Havelock Blue",
  "hex": "#5590D9"
}, {
  "name": "Fountain Blue",
  "hex": "#56B4BE"
}, {
  "name": "Spring Leaves",
  "hex": "#578363"
}, {
  "name": "Saddle Brown",
  "hex": "#583401"
}, {
  "name": "Scarpa Flow",
  "hex": "#585562"
}, {
  "name": "Cactus",
  "hex": "#587156"
}, {
  "name": "Hippie Blue",
  "hex": "#589AAF"
}, {
  "name": "Wine Berry",
  "hex": "#591D35"
}, {
  "name": "Brown Bramble",
  "hex": "#592804"
}, {
  "name": "Congo Brown",
  "hex": "#593737"
}, {
  "name": "Millbrook",
  "hex": "#594433"
}, {
  "name": "Waikawa Gray",
  "hex": "#5A6E9C"
}, {
  "name": "Horizon",
  "hex": "#5A87A0"
}, {
  "name": "Jambalaya",
  "hex": "#5B3013"
}, {
  "name": "Bordeaux",
  "hex": "#5C0120"
}, {
  "name": "Mulberry Wood",
  "hex": "#5C0536"
}, {
  "name": "Carnaby Tan",
  "hex": "#5C2E01"
}, {
  "name": "Comet",
  "hex": "#5C5D75"
}, {
  "name": "Redwood",
  "hex": "#5D1E0F"
}, {
  "name": "Don Juan",
  "hex": "#5D4C51"
}, {
  "name": "Chicago",
  "hex": "#5D5C58"
}, {
  "name": "Verdigris",
  "hex": "#5D5E37"
}, {
  "name": "Dingley",
  "hex": "#5D7747"
}, {
  "name": "Breaker Bay",
  "hex": "#5DA19F"
}, {
  "name": "Kabul",
  "hex": "#5E483E"
}, {
  "name": "Hemlock",
  "hex": "#5E5D3B"
}, {
  "name": "Irish Coffee",
  "hex": "#5F3D26"
}, {
  "name": "Mid Gray",
  "hex": "#5F5F6E"
}, {
  "name": "Shuttle Gray",
  "hex": "#5F6672"
}, {
  "name": "Aqua Forest",
  "hex": "#5FA777"
}, {
  "name": "Tradewind",
  "hex": "#5FB3AC"
}, {
  "name": "Horses Neck",
  "hex": "#604913"
}, {
  "name": "Smoky",
  "hex": "#605B73"
}, {
  "name": "Corduroy",
  "hex": "#606E68"
}, {
  "name": "Danube",
  "hex": "#6093D1"
}, {
  "name": "Espresso",
  "hex": "#612718"
}, {
  "name": "Eggplant",
  "hex": "#614051"
}, {
  "name": "Costa Del Sol",
  "hex": "#615D30"
}, {
  "name": "Glade Green",
  "hex": "#61845F"
}, {
  "name": "Buccaneer",
  "hex": "#622F30"
}, {
  "name": "Quincy",
  "hex": "#623F2D"
}, {
  "name": "Butterfly Bush",
  "hex": "#624E9A"
}, {
  "name": "West Coast",
  "hex": "#625119"
}, {
  "name": "Finch",
  "hex": "#626649"
}, {
  "name": "Patina",
  "hex": "#639A8F"
}, {
  "name": "Fern",
  "hex": "#63B76C"
}, {
  "name": "Blue Violet",
  "hex": "#6456B7"
}, {
  "name": "Dolphin",
  "hex": "#646077"
}, {
  "name": "Storm Dust",
  "hex": "#646463"
}, {
  "name": "Siam",
  "hex": "#646A54"
}, {
  "name": "Nevada",
  "hex": "#646E75"
}, {
  "name": "Cornflower Blue",
  "hex": "#6495ED"
}, {
  "name": "Viking",
  "hex": "#64CCDB"
}, {
  "name": "Rosewood",
  "hex": "#65000B"
}, {
  "name": "Cherrywood",
  "hex": "#651A14"
}, {
  "name": "Purple Heart",
  "hex": "#652DC1"
}, {
  "name": "Fern Frond",
  "hex": "#657220"
}, {
  "name": "Willow Grove",
  "hex": "#65745D"
}, {
  "name": "Hoki",
  "hex": "#65869F"
}, {
  "name": "Pompadour",
  "hex": "#660045"
}, {
  "name": "Purple",
  "hex": "#660099"
}, {
  "name": "Tyrian Purple",
  "hex": "#66023C"
}, {
  "name": "Dark Tan",
  "hex": "#661010"
}, {
  "name": "Silver Tree",
  "hex": "#66B58F"
}, {
  "name": "Bright Green",
  "hex": "#66FF00"
}, {
  "name": "Screamin' Green",
  "hex": "#66FF66"
}, {
  "name": "Black Rose",
  "hex": "#67032D"
}, {
  "name": "Scampi",
  "hex": "#675FA6"
}, {
  "name": "Ironside Gray",
  "hex": "#676662"
}, {
  "name": "Viridian Green",
  "hex": "#678975"
}, {
  "name": "Christi",
  "hex": "#67A712"
}, {
  "name": "Nutmeg Wood Finish",
  "hex": "#683600"
}, {
  "name": "Zambezi",
  "hex": "#685558"
}, {
  "name": "Salt Box",
  "hex": "#685E6E"
}, {
  "name": "Tawny Port",
  "hex": "#692545"
}, {
  "name": "Finn",
  "hex": "#692D54"
}, {
  "name": "Scorpion",
  "hex": "#695F62"
}, {
  "name": "Lynch",
  "hex": "#697E9A"
}, {
  "name": "Spice",
  "hex": "#6A442E"
}, {
  "name": "Himalaya",
  "hex": "#6A5D1B"
}, {
  "name": "Soya Bean",
  "hex": "#6A6051"
}, {
  "name": "Hairy Heath",
  "hex": "#6B2A14"
}, {
  "name": "Royal Purple",
  "hex": "#6B3FA0"
}, {
  "name": "Shingle Fawn",
  "hex": "#6B4E31"
}, {
  "name": "Dorado",
  "hex": "#6B5755"
}, {
  "name": "Bermuda Gray",
  "hex": "#6B8BA2"
}, {
  "name": "Olive Drab",
  "hex": "#6B8E23"
}, {
  "name": "Eminence",
  "hex": "#6C3082"
}, {
  "name": "Turquoise Blue",
  "hex": "#6CDAE7"
}, {
  "name": "Lonestar",
  "hex": "#6D0101"
}, {
  "name": "Pine Cone",
  "hex": "#6D5E54"
}, {
  "name": "Dove Gray",
  "hex": "#6D6C6C"
}, {
  "name": "Juniper",
  "hex": "#6D9292"
}, {
  "name": "Gothic",
  "hex": "#6D92A1"
}, {
  "name": "Red Oxide",
  "hex": "#6E0902"
}, {
  "name": "Moccaccino",
  "hex": "#6E1D14"
}, {
  "name": "Pickled Bean",
  "hex": "#6E4826"
}, {
  "name": "Dallas",
  "hex": "#6E4B26"
}, {
  "name": "Kokoda",
  "hex": "#6E6D57"
}, {
  "name": "Pale Sky",
  "hex": "#6E7783"
}, {
  "name": "Cafe Royale",
  "hex": "#6F440C"
}, {
  "name": "Flint",
  "hex": "#6F6A61"
}, {
  "name": "Highland",
  "hex": "#6F8E63"
}, {
  "name": "Limeade",
  "hex": "#6F9D02"
}, {
  "name": "Downy",
  "hex": "#6FD0C5"
}, {
  "name": "Persian Plum",
  "hex": "#701C1C"
}, {
  "name": "Sepia",
  "hex": "#704214"
}, {
  "name": "Antique Bronze",
  "hex": "#704A07"
}, {
  "name": "Ferra",
  "hex": "#704F50"
}, {
  "name": "Coffee",
  "hex": "#706555"
}, {
  "name": "Slate Gray",
  "hex": "#708090"
}, {
  "name": "Cedar Wood Finish",
  "hex": "#711A00"
}, {
  "name": "Metallic Copper",
  "hex": "#71291D"
}, {
  "name": "Affair",
  "hex": "#714693"
}, {
  "name": "Studio",
  "hex": "#714AB2"
}, {
  "name": "Tobacco Brown",
  "hex": "#715D47"
}, {
  "name": "Yellow Metal",
  "hex": "#716338"
}, {
  "name": "Peat",
  "hex": "#716B56"
}, {
  "name": "Olivetone",
  "hex": "#716E10"
}, {
  "name": "Storm Gray",
  "hex": "#717486"
}, {
  "name": "Sirocco",
  "hex": "#718080"
}, {
  "name": "Aquamarine Blue",
  "hex": "#71D9E2"
}, {
  "name": "Venetian Red",
  "hex": "#72010F"
}, {
  "name": "Old Copper",
  "hex": "#724A2F"
}, {
  "name": "Go Ben",
  "hex": "#726D4E"
}, {
  "name": "Raven",
  "hex": "#727B89"
}, {
  "name": "Seance",
  "hex": "#731E8F"
}, {
  "name": "Raw Umber",
  "hex": "#734A12"
}, {
  "name": "Kimberly",
  "hex": "#736C9F"
}, {
  "name": "Crocodile",
  "hex": "#736D58"
}, {
  "name": "Crete",
  "hex": "#737829"
}, {
  "name": "Xanadu",
  "hex": "#738678"
}, {
  "name": "Spicy Mustard",
  "hex": "#74640D"
}, {
  "name": "Limed Ash",
  "hex": "#747D63"
}, {
  "name": "Rolling Stone",
  "hex": "#747D83"
}, {
  "name": "Blue Smoke",
  "hex": "#748881"
}, {
  "name": "Laurel",
  "hex": "#749378"
}, {
  "name": "Mantis",
  "hex": "#74C365"
}, {
  "name": "Russett",
  "hex": "#755A57"
}, {
  "name": "Deluge",
  "hex": "#7563A8"
}, {
  "name": "Cosmic",
  "hex": "#76395D"
}, {
  "name": "Blue Marguerite",
  "hex": "#7666C6"
}, {
  "name": "Lima",
  "hex": "#76BD17"
}, {
  "name": "Sky Blue",
  "hex": "#76D7EA"
}, {
  "name": "Dark Burgundy",
  "hex": "#770F05"
}, {
  "name": "Crown of Thorns",
  "hex": "#771F1F"
}, {
  "name": "Walnut",
  "hex": "#773F1A"
}, {
  "name": "Pablo",
  "hex": "#776F61"
}, {
  "name": "Pacifika",
  "hex": "#778120"
}, {
  "name": "Oxley",
  "hex": "#779E86"
}, {
  "name": "Pastel Green",
  "hex": "#77DD77"
}, {
  "name": "Japanese Maple",
  "hex": "#780109"
}, {
  "name": "Mocha",
  "hex": "#782D19"
}, {
  "name": "Peanut",
  "hex": "#782F16"
}, {
  "name": "Camouflage Green",
  "hex": "#78866B"
}, {
  "name": "Wasabi",
  "hex": "#788A25"
}, {
  "name": "Ship Cove",
  "hex": "#788BBA"
}, {
  "name": "Sea Nymph",
  "hex": "#78A39C"
}, {
  "name": "Roman Coffee",
  "hex": "#795D4C"
}, {
  "name": "Old Lavender",
  "hex": "#796878"
}, {
  "name": "Rum",
  "hex": "#796989"
}, {
  "name": "Fedora",
  "hex": "#796A78"
}, {
  "name": "Sandstone",
  "hex": "#796D62"
}, {
  "name": "Spray",
  "hex": "#79DEEC"
}, {
  "name": "Siren",
  "hex": "#7A013A"
}, {
  "name": "Fuchsia Blue",
  "hex": "#7A58C1"
}, {
  "name": "Boulder",
  "hex": "#7A7A7A"
}, {
  "name": "Wild Blue Yonder",
  "hex": "#7A89B8"
}, {
  "name": "De York",
  "hex": "#7AC488"
}, {
  "name": "Red Beech",
  "hex": "#7B3801"
}, {
  "name": "Cinnamon",
  "hex": "#7B3F00"
}, {
  "name": "Yukon Gold",
  "hex": "#7B6608"
}, {
  "name": "Tapa",
  "hex": "#7B7874"
}, {
  "name": "Waterloo ",
  "hex": "#7B7C94"
}, {
  "name": "Flax Smoke",
  "hex": "#7B8265"
}, {
  "name": "Amulet",
  "hex": "#7B9F80"
}, {
  "name": "Asparagus",
  "hex": "#7BA05B"
}, {
  "name": "Kenyan Copper",
  "hex": "#7C1C05"
}, {
  "name": "Pesto",
  "hex": "#7C7631"
}, {
  "name": "Topaz",
  "hex": "#7C778A"
}, {
  "name": "Concord",
  "hex": "#7C7B7A"
}, {
  "name": "Jumbo",
  "hex": "#7C7B82"
}, {
  "name": "Trendy Green",
  "hex": "#7C881A"
}, {
  "name": "Gumbo",
  "hex": "#7CA1A6"
}, {
  "name": "Acapulco",
  "hex": "#7CB0A1"
}, {
  "name": "Neptune",
  "hex": "#7CB7BB"
}, {
  "name": "Pueblo",
  "hex": "#7D2C14"
}, {
  "name": "Bay Leaf",
  "hex": "#7DA98D"
}, {
  "name": "Malibu",
  "hex": "#7DC8F7"
}, {
  "name": "Bermuda",
  "hex": "#7DD8C6"
}, {
  "name": "Copper Canyon",
  "hex": "#7E3A15"
}, {
  "name": "Claret",
  "hex": "#7F1734"
}, {
  "name": "Peru Tan",
  "hex": "#7F3A02"
}, {
  "name": "Falcon",
  "hex": "#7F626D"
}, {
  "name": "Mobster",
  "hex": "#7F7589"
}, {
  "name": "Moody Blue",
  "hex": "#7F76D3"
}, {
  "name": "Chartreuse",
  "hex": "#7FFF00"
}, {
  "name": "Aquamarine",
  "hex": "#7FFFD4"
}, {
  "name": "Maroon",
  "hex": "#800000"
}, {
  "name": "Rose Bud Cherry",
  "hex": "#800B47"
}, {
  "name": "Falu Red",
  "hex": "#801818"
}, {
  "name": "Red Robin",
  "hex": "#80341F"
}, {
  "name": "Vivid Violet",
  "hex": "#803790"
}, {
  "name": "Russet",
  "hex": "#80461B"
}, {
  "name": "Friar Gray",
  "hex": "#807E79"
}, {
  "name": "Olive",
  "hex": "#808000"
}, {
  "name": "Gray",
  "hex": "#808080"
}, {
  "name": "Gulf Stream",
  "hex": "#80B3AE"
}, {
  "name": "Glacier",
  "hex": "#80B3C4"
}, {
  "name": "Seagull",
  "hex": "#80CCEA"
}, {
  "name": "Nutmeg",
  "hex": "#81422C"
}, {
  "name": "Spicy Pink",
  "hex": "#816E71"
}, {
  "name": "Empress",
  "hex": "#817377"
}, {
  "name": "Spanish Green",
  "hex": "#819885"
}, {
  "name": "Sand Dune",
  "hex": "#826F65"
}, {
  "name": "Gunsmoke",
  "hex": "#828685"
}, {
  "name": "Battleship Gray",
  "hex": "#828F72"
}, {
  "name": "Merlot",
  "hex": "#831923"
}, {
  "name": "Shadow",
  "hex": "#837050"
}, {
  "name": "Chelsea Cucumber",
  "hex": "#83AA5D"
}, {
  "name": "Monte Carlo",
  "hex": "#83D0C6"
}, {
  "name": "Plum",
  "hex": "#843179"
}, {
  "name": "Granny Smith",
  "hex": "#84A0A0"
}, {
  "name": "Chetwode Blue",
  "hex": "#8581D9"
}, {
  "name": "Bandicoot",
  "hex": "#858470"
}, {
  "name": "Bali Hai",
  "hex": "#859FAF"
}, {
  "name": "Half Baked",
  "hex": "#85C4CC"
}, {
  "name": "Red Devil",
  "hex": "#860111"
}, {
  "name": "Lotus",
  "hex": "#863C3C"
}, {
  "name": "Ironstone",
  "hex": "#86483C"
}, {
  "name": "Bull Shot",
  "hex": "#864D1E"
}, {
  "name": "Rusty Nail",
  "hex": "#86560A"
}, {
  "name": "Bitter",
  "hex": "#868974"
}, {
  "name": "Regent Gray",
  "hex": "#86949F"
}, {
  "name": "Disco",
  "hex": "#871550"
}, {
  "name": "Americano",
  "hex": "#87756E"
}, {
  "name": "Hurricane",
  "hex": "#877C7B"
}, {
  "name": "Oslo Gray",
  "hex": "#878D91"
}, {
  "name": "Sushi",
  "hex": "#87AB39"
}, {
  "name": "Spicy Mix",
  "hex": "#885342"
}, {
  "name": "Kumera",
  "hex": "#886221"
}, {
  "name": "Suva Gray",
  "hex": "#888387"
}, {
  "name": "Avocado",
  "hex": "#888D65"
}, {
  "name": "Camelot",
  "hex": "#893456"
}, {
  "name": "Solid Pink",
  "hex": "#893843"
}, {
  "name": "Cannon Pink",
  "hex": "#894367"
}, {
  "name": "Makara",
  "hex": "#897D6D"
}, {
  "name": "Burnt Umber",
  "hex": "#8A3324"
}, {
  "name": "True V",
  "hex": "#8A73D6"
}, {
  "name": "Clay Creek",
  "hex": "#8A8360"
}, {
  "name": "Monsoon",
  "hex": "#8A8389"
}, {
  "name": "Stack",
  "hex": "#8A8F8A"
}, {
  "name": "Jordy Blue",
  "hex": "#8AB9F1"
}, {
  "name": "Electric Violet",
  "hex": "#8B00FF"
}, {
  "name": "Monarch",
  "hex": "#8B0723"
}, {
  "name": "Corn Harvest",
  "hex": "#8B6B0B"
}, {
  "name": "Olive Haze",
  "hex": "#8B8470"
}, {
  "name": "Schooner",
  "hex": "#8B847E"
}, {
  "name": "Natural Gray",
  "hex": "#8B8680"
}, {
  "name": "Mantle",
  "hex": "#8B9C90"
}, {
  "name": "Portage",
  "hex": "#8B9FEE"
}, {
  "name": "Envy",
  "hex": "#8BA690"
}, {
  "name": "Cascade",
  "hex": "#8BA9A5"
}, {
  "name": "Riptide",
  "hex": "#8BE6D8"
}, {
  "name": "Cardinal Pink",
  "hex": "#8C055E"
}, {
  "name": "Mule Fawn",
  "hex": "#8C472F"
}, {
  "name": "Potters Clay",
  "hex": "#8C5738"
}, {
  "name": "Trendy Pink",
  "hex": "#8C6495"
}, {
  "name": "Paprika",
  "hex": "#8D0226"
}, {
  "name": "Sanguine Brown",
  "hex": "#8D3D38"
}, {
  "name": "Tosca",
  "hex": "#8D3F3F"
}, {
  "name": "Cement",
  "hex": "#8D7662"
}, {
  "name": "Granite Green",
  "hex": "#8D8974"
}, {
  "name": "Manatee",
  "hex": "#8D90A1"
}, {
  "name": "Polo Blue",
  "hex": "#8DA8CC"
}, {
  "name": "Red Berry",
  "hex": "#8E0000"
}, {
  "name": "Rope",
  "hex": "#8E4D1E"
}, {
  "name": "Opium",
  "hex": "#8E6F70"
}, {
  "name": "Domino",
  "hex": "#8E775E"
}, {
  "name": "Mamba",
  "hex": "#8E8190"
}, {
  "name": "Nepal",
  "hex": "#8EABC1"
}, {
  "name": "Pohutukawa",
  "hex": "#8F021C"
}, {
  "name": "El Salva",
  "hex": "#8F3E33"
}, {
  "name": "Korma",
  "hex": "#8F4B0E"
}, {
  "name": "Squirrel",
  "hex": "#8F8176"
}, {
  "name": "Vista Blue",
  "hex": "#8FD6B4"
}, {
  "name": "Burgundy",
  "hex": "#900020"
}, {
  "name": "Old Brick",
  "hex": "#901E1E"
}, {
  "name": "Hemp",
  "hex": "#907874"
}, {
  "name": "Almond Frost",
  "hex": "#907B71"
}, {
  "name": "Sycamore",
  "hex": "#908D39"
}, {
  "name": "Sangria",
  "hex": "#92000A"
}, {
  "name": "Cumin",
  "hex": "#924321"
}, {
  "name": "Beaver",
  "hex": "#926F5B"
}, {
  "name": "Stonewall",
  "hex": "#928573"
}, {
  "name": "Venus",
  "hex": "#928590"
}, {
  "name": "Medium Purple",
  "hex": "#9370DB"
}, {
  "name": "Cornflower",
  "hex": "#93CCEA"
}, {
  "name": "Algae Green",
  "hex": "#93DFB8"
}, {
  "name": "Copper Rust",
  "hex": "#944747"
}, {
  "name": "Arrowtown",
  "hex": "#948771"
}, {
  "name": "Scarlett",
  "hex": "#950015"
}, {
  "name": "Strikemaster",
  "hex": "#956387"
}, {
  "name": "Mountain Mist",
  "hex": "#959396"
}, {
  "name": "Carmine",
  "hex": "#960018"
}, {
  "name": "Brown",
  "hex": "#964B00"
}, {
  "name": "Leather",
  "hex": "#967059"
}, {
  "name": "Purple Mountain's Majesty",
  "hex": "#9678B6"
}, {
  "name": "Lavender Purple",
  "hex": "#967BB6"
}, {
  "name": "Pewter",
  "hex": "#96A8A1"
}, {
  "name": "Summer Green",
  "hex": "#96BBAB"
}, {
  "name": "Au Chico",
  "hex": "#97605D"
}, {
  "name": "Wisteria",
  "hex": "#9771B5"
}, {
  "name": "Atlantis",
  "hex": "#97CD2D"
}, {
  "name": "Vin Rouge",
  "hex": "#983D61"
}, {
  "name": "Lilac Bush",
  "hex": "#9874D3"
}, {
  "name": "Bazaar",
  "hex": "#98777B"
}, {
  "name": "Hacienda",
  "hex": "#98811B"
}, {
  "name": "Pale Oyster",
  "hex": "#988D77"
}, {
  "name": "Mint Green",
  "hex": "#98FF98"
}, {
  "name": "Fresh Eggplant",
  "hex": "#990066"
}, {
  "name": "Violet Eggplant",
  "hex": "#991199"
}, {
  "name": "Tamarillo",
  "hex": "#991613"
}, {
  "name": "Totem Pole",
  "hex": "#991B07"
}, {
  "name": "Copper Rose",
  "hex": "#996666"
}, {
  "name": "Amethyst",
  "hex": "#9966CC"
}, {
  "name": "Mountbatten Pink",
  "hex": "#997A8D"
}, {
  "name": "Blue Bell",
  "hex": "#9999CC"
}, {
  "name": "Prairie Sand",
  "hex": "#9A3820"
}, {
  "name": "Toast",
  "hex": "#9A6E61"
}, {
  "name": "Gurkha",
  "hex": "#9A9577"
}, {
  "name": "Olivine",
  "hex": "#9AB973"
}, {
  "name": "Shadow Green",
  "hex": "#9AC2B8"
}, {
  "name": "Oregon",
  "hex": "#9B4703"
}, {
  "name": "Lemon Grass",
  "hex": "#9B9E8F"
}, {
  "name": "Stiletto",
  "hex": "#9C3336"
}, {
  "name": "Hawaiian Tan",
  "hex": "#9D5616"
}, {
  "name": "Gull Gray",
  "hex": "#9DACB7"
}, {
  "name": "Pistachio",
  "hex": "#9DC209"
}, {
  "name": "Granny Smith Apple",
  "hex": "#9DE093"
}, {
  "name": "Anakiwa",
  "hex": "#9DE5FF"
}, {
  "name": "Chelsea Gem",
  "hex": "#9E5302"
}, {
  "name": "Sepia Skin",
  "hex": "#9E5B40"
}, {
  "name": "Sage",
  "hex": "#9EA587"
}, {
  "name": "Citron",
  "hex": "#9EA91F"
}, {
  "name": "Rock Blue",
  "hex": "#9EB1CD"
}, {
  "name": "Morning Glory",
  "hex": "#9EDEE0"
}, {
  "name": "Cognac",
  "hex": "#9F381D"
}, {
  "name": "Reef Gold",
  "hex": "#9F821C"
}, {
  "name": "Star Dust",
  "hex": "#9F9F9C"
}, {
  "name": "Santas Gray",
  "hex": "#9FA0B1"
}, {
  "name": "Sinbad",
  "hex": "#9FD7D3"
}, {
  "name": "Feijoa",
  "hex": "#9FDD8C"
}, {
  "name": "Tabasco",
  "hex": "#A02712"
}, {
  "name": "Buttered Rum",
  "hex": "#A1750D"
}, {
  "name": "Hit Gray",
  "hex": "#A1ADB5"
}, {
  "name": "Citrus",
  "hex": "#A1C50A"
}, {
  "name": "Aqua Island",
  "hex": "#A1DAD7"
}, {
  "name": "Water Leaf",
  "hex": "#A1E9DE"
}, {
  "name": "Flirt",
  "hex": "#A2006D"
}, {
  "name": "Rouge",
  "hex": "#A23B6C"
}, {
  "name": "Cape Palliser",
  "hex": "#A26645"
}, {
  "name": "Gray Chateau",
  "hex": "#A2AAB3"
}, {
  "name": "Edward",
  "hex": "#A2AEAB"
}, {
  "name": "Pharlap",
  "hex": "#A3807B"
}, {
  "name": "Amethyst Smoke",
  "hex": "#A397B4"
}, {
  "name": "Blizzard Blue",
  "hex": "#A3E3ED"
}, {
  "name": "Delta",
  "hex": "#A4A49D"
}, {
  "name": "Wistful",
  "hex": "#A4A6D3"
}, {
  "name": "Green Smoke",
  "hex": "#A4AF6E"
}, {
  "name": "Jazzberry Jam",
  "hex": "#A50B5E"
}, {
  "name": "Zorba",
  "hex": "#A59B91"
}, {
  "name": "Bahia",
  "hex": "#A5CB0C"
}, {
  "name": "Roof Terracotta",
  "hex": "#A62F20"
}, {
  "name": "Paarl",
  "hex": "#A65529"
}, {
  "name": "Barley Corn",
  "hex": "#A68B5B"
}, {
  "name": "Donkey Brown",
  "hex": "#A69279"
}, {
  "name": "Dawn",
  "hex": "#A6A29A"
}, {
  "name": "Mexican Red",
  "hex": "#A72525"
}, {
  "name": "Luxor Gold",
  "hex": "#A7882C"
}, {
  "name": "Rich Gold",
  "hex": "#A85307"
}, {
  "name": "Reno Sand",
  "hex": "#A86515"
}, {
  "name": "Coral Tree",
  "hex": "#A86B6B"
}, {
  "name": "Dusty Gray",
  "hex": "#A8989B"
}, {
  "name": "Dull Lavender",
  "hex": "#A899E6"
}, {
  "name": "Tallow",
  "hex": "#A8A589"
}, {
  "name": "Bud",
  "hex": "#A8AE9C"
}, {
  "name": "Locust",
  "hex": "#A8AF8E"
}, {
  "name": "Norway",
  "hex": "#A8BD9F"
}, {
  "name": "Chinook",
  "hex": "#A8E3BD"
}, {
  "name": "Gray Olive",
  "hex": "#A9A491"
}, {
  "name": "Aluminium",
  "hex": "#A9ACB6"
}, {
  "name": "Cadet Blue",
  "hex": "#A9B2C3"
}, {
  "name": "Schist",
  "hex": "#A9B497"
}, {
  "name": "Tower Gray",
  "hex": "#A9BDBF"
}, {
  "name": "Perano",
  "hex": "#A9BEF2"
}, {
  "name": "Opal",
  "hex": "#A9C6C2"
}, {
  "name": "Night Shadz",
  "hex": "#AA375A"
}, {
  "name": "Fire",
  "hex": "#AA4203"
}, {
  "name": "Muesli",
  "hex": "#AA8B5B"
}, {
  "name": "Sandal",
  "hex": "#AA8D6F"
}, {
  "name": "Shady Lady",
  "hex": "#AAA5A9"
}, {
  "name": "Logan",
  "hex": "#AAA9CD"
}, {
  "name": "Spun Pearl",
  "hex": "#AAABB7"
}, {
  "name": "Regent St Blue",
  "hex": "#AAD6E6"
}, {
  "name": "Magic Mint",
  "hex": "#AAF0D1"
}, {
  "name": "Lipstick",
  "hex": "#AB0563"
}, {
  "name": "Royal Heath",
  "hex": "#AB3472"
}, {
  "name": "Sandrift",
  "hex": "#AB917A"
}, {
  "name": "Cold Purple",
  "hex": "#ABA0D9"
}, {
  "name": "Bronco",
  "hex": "#ABA196"
}, {
  "name": "Limed Oak",
  "hex": "#AC8A56"
}, {
  "name": "East Side",
  "hex": "#AC91CE"
}, {
  "name": "Lemon Ginger",
  "hex": "#AC9E22"
}, {
  "name": "Napa",
  "hex": "#ACA494"
}, {
  "name": "Hillary",
  "hex": "#ACA586"
}, {
  "name": "Cloudy",
  "hex": "#ACA59F"
}, {
  "name": "Silver Chalice",
  "hex": "#ACACAC"
}, {
  "name": "Swamp Green",
  "hex": "#ACB78E"
}, {
  "name": "Spring Rain",
  "hex": "#ACCBB1"
}, {
  "name": "Conifer",
  "hex": "#ACDD4D"
}, {
  "name": "Celadon",
  "hex": "#ACE1AF"
}, {
  "name": "Mandalay",
  "hex": "#AD781B"
}, {
  "name": "Casper",
  "hex": "#ADBED1"
}, {
  "name": "Moss Green",
  "hex": "#ADDFAD"
}, {
  "name": "Padua",
  "hex": "#ADE6C4"
}, {
  "name": "Green Yellow",
  "hex": "#ADFF2F"
}, {
  "name": "Hippie Pink",
  "hex": "#AE4560"
}, {
  "name": "Desert",
  "hex": "#AE6020"
}, {
  "name": "Bouquet",
  "hex": "#AE809E"
}, {
  "name": "Medium Carmine",
  "hex": "#AF4035"
}, {
  "name": "Apple Blossom",
  "hex": "#AF4D43"
}, {
  "name": "Brown Rust",
  "hex": "#AF593E"
}, {
  "name": "Driftwood",
  "hex": "#AF8751"
}, {
  "name": "Alpine",
  "hex": "#AF8F2C"
}, {
  "name": "Lucky",
  "hex": "#AF9F1C"
}, {
  "name": "Martini",
  "hex": "#AFA09E"
}, {
  "name": "Bombay",
  "hex": "#AFB1B8"
}, {
  "name": "Pigeon Post",
  "hex": "#AFBDD9"
}, {
  "name": "Cadillac",
  "hex": "#B04C6A"
}, {
  "name": "Matrix",
  "hex": "#B05D54"
}, {
  "name": "Tapestry",
  "hex": "#B05E81"
}, {
  "name": "Mai Tai",
  "hex": "#B06608"
}, {
  "name": "Del Rio",
  "hex": "#B09A95"
}, {
  "name": "Powder Blue",
  "hex": "#B0E0E6"
}, {
  "name": "Inch Worm",
  "hex": "#B0E313"
}, {
  "name": "Bright Red",
  "hex": "#B10000"
}, {
  "name": "Vesuvius",
  "hex": "#B14A0B"
}, {
  "name": "Pumpkin Skin",
  "hex": "#B1610B"
}, {
  "name": "Santa Fe",
  "hex": "#B16D52"
}, {
  "name": "Teak",
  "hex": "#B19461"
}, {
  "name": "Fringy Flower",
  "hex": "#B1E2C1"
}, {
  "name": "Ice Cold",
  "hex": "#B1F4E7"
}, {
  "name": "Shiraz",
  "hex": "#B20931"
}, {
  "name": "Biloba Flower",
  "hex": "#B2A1EA"
}, {
  "name": "Tall Poppy",
  "hex": "#B32D29"
}, {
  "name": "Fiery Orange",
  "hex": "#B35213"
}, {
  "name": "Hot Toddy",
  "hex": "#B38007"
}, {
  "name": "Taupe Gray",
  "hex": "#B3AF95"
}, {
  "name": "La Rioja",
  "hex": "#B3C110"
}, {
  "name": "Well Read",
  "hex": "#B43332"
}, {
  "name": "Blush",
  "hex": "#B44668"
}, {
  "name": "Jungle Mist",
  "hex": "#B4CFD3"
}, {
  "name": "Turkish Rose",
  "hex": "#B57281"
}, {
  "name": "Lavender",
  "hex": "#B57EDC"
}, {
  "name": "Mongoose",
  "hex": "#B5A27F"
}, {
  "name": "Olive Green",
  "hex": "#B5B35C"
}, {
  "name": "Jet Stream",
  "hex": "#B5D2CE"
}, {
  "name": "Cruise",
  "hex": "#B5ECDF"
}, {
  "name": "Hibiscus",
  "hex": "#B6316C"
}, {
  "name": "Thatch",
  "hex": "#B69D98"
}, {
  "name": "Heathered Gray",
  "hex": "#B6B095"
}, {
  "name": "Eagle",
  "hex": "#B6BAA4"
}, {
  "name": "Spindle",
  "hex": "#B6D1EA"
}, {
  "name": "Gum Leaf",
  "hex": "#B6D3BF"
}, {
  "name": "Rust",
  "hex": "#B7410E"
}, {
  "name": "Muddy Waters",
  "hex": "#B78E5C"
}, {
  "name": "Sahara",
  "hex": "#B7A214"
}, {
  "name": "Husk",
  "hex": "#B7A458"
}, {
  "name": "Nobel",
  "hex": "#B7B1B1"
}, {
  "name": "Heather",
  "hex": "#B7C3D0"
}, {
  "name": "Madang",
  "hex": "#B7F0BE"
}, {
  "name": "Milano Red",
  "hex": "#B81104"
}, {
  "name": "Copper",
  "hex": "#B87333"
}, {
  "name": "Gimblet",
  "hex": "#B8B56A"
}, {
  "name": "Green Spring",
  "hex": "#B8C1B1"
}, {
  "name": "Celery",
  "hex": "#B8C25D"
}, {
  "name": "Sail",
  "hex": "#B8E0F9"
}, {
  "name": "Chestnut",
  "hex": "#B94E48"
}, {
  "name": "Crail",
  "hex": "#B95140"
}, {
  "name": "Marigold",
  "hex": "#B98D28"
}, {
  "name": "Wild Willow",
  "hex": "#B9C46A"
}, {
  "name": "Rainee",
  "hex": "#B9C8AC"
}, {
  "name": "Guardsman Red",
  "hex": "#BA0101"
}, {
  "name": "Rock Spray",
  "hex": "#BA450C"
}, {
  "name": "Bourbon",
  "hex": "#BA6F1E"
}, {
  "name": "Pirate Gold",
  "hex": "#BA7F03"
}, {
  "name": "Nomad",
  "hex": "#BAB1A2"
}, {
  "name": "Submarine",
  "hex": "#BAC7C9"
}, {
  "name": "Charlotte",
  "hex": "#BAEEF9"
}, {
  "name": "Medium Red Violet",
  "hex": "#BB3385"
}, {
  "name": "Brandy Rose",
  "hex": "#BB8983"
}, {
  "name": "Rio Grande",
  "hex": "#BBD009"
}, {
  "name": "Surf",
  "hex": "#BBD7C1"
}, {
  "name": "Powder Ash",
  "hex": "#BCC9C2"
}, {
  "name": "Tuscany",
  "hex": "#BD5E2E"
}, {
  "name": "Quicksand",
  "hex": "#BD978E"
}, {
  "name": "Silk",
  "hex": "#BDB1A8"
}, {
  "name": "Malta",
  "hex": "#BDB2A1"
}, {
  "name": "Chatelle",
  "hex": "#BDB3C7"
}, {
  "name": "Lavender Gray",
  "hex": "#BDBBD7"
}, {
  "name": "French Gray",
  "hex": "#BDBDC6"
}, {
  "name": "Clay Ash",
  "hex": "#BDC8B3"
}, {
  "name": "Loblolly",
  "hex": "#BDC9CE"
}, {
  "name": "French Pass",
  "hex": "#BDEDFD"
}, {
  "name": "London Hue",
  "hex": "#BEA6C3"
}, {
  "name": "Pink Swan",
  "hex": "#BEB5B7"
}, {
  "name": "Fuego",
  "hex": "#BEDE0D"
}, {
  "name": "Rose of Sharon",
  "hex": "#BF5500"
}, {
  "name": "Tide",
  "hex": "#BFB8B0"
}, {
  "name": "Blue Haze",
  "hex": "#BFBED8"
}, {
  "name": "Silver Sand",
  "hex": "#BFC1C2"
}, {
  "name": "Key Lime Pie",
  "hex": "#BFC921"
}, {
  "name": "Ziggurat",
  "hex": "#BFDBE2"
}, {
  "name": "Lime",
  "hex": "#BFFF00"
}, {
  "name": "Thunderbird",
  "hex": "#C02B18"
}, {
  "name": "Mojo",
  "hex": "#C04737"
}, {
  "name": "Old Rose",
  "hex": "#C08081"
}, {
  "name": "Silver",
  "hex": "#C0C0C0"
}, {
  "name": "Pale Leaf",
  "hex": "#C0D3B9"
}, {
  "name": "Pixie Green",
  "hex": "#C0D8B6"
}, {
  "name": "Tia Maria",
  "hex": "#C1440E"
}, {
  "name": "Fuchsia Pink",
  "hex": "#C154C1"
}, {
  "name": "Buddha Gold",
  "hex": "#C1A004"
}, {
  "name": "Bison Hide",
  "hex": "#C1B7A4"
}, {
  "name": "Tea",
  "hex": "#C1BAB0"
}, {
  "name": "Gray Suit",
  "hex": "#C1BECD"
}, {
  "name": "Sprout",
  "hex": "#C1D7B0"
}, {
  "name": "Sulu",
  "hex": "#C1F07C"
}, {
  "name": "Indochine",
  "hex": "#C26B03"
}, {
  "name": "Twine",
  "hex": "#C2955D"
}, {
  "name": "Cotton Seed",
  "hex": "#C2BDB6"
}, {
  "name": "Pumice",
  "hex": "#C2CAC4"
}, {
  "name": "Jagged Ice",
  "hex": "#C2E8E5"
}, {
  "name": "Maroon Flush",
  "hex": "#C32148"
}, {
  "name": "Indian Khaki",
  "hex": "#C3B091"
}, {
  "name": "Pale Slate",
  "hex": "#C3BFC1"
}, {
  "name": "Gray Nickel",
  "hex": "#C3C3BD"
}, {
  "name": "Periwinkle Gray",
  "hex": "#C3CDE6"
}, {
  "name": "Tiara",
  "hex": "#C3D1D1"
}, {
  "name": "Tropical Blue",
  "hex": "#C3DDF9"
}, {
  "name": "Cardinal",
  "hex": "#C41E3A"
}, {
  "name": "Fuzzy Wuzzy Brown",
  "hex": "#C45655"
}, {
  "name": "Orange Roughy",
  "hex": "#C45719"
}, {
  "name": "Mist Gray",
  "hex": "#C4C4BC"
}, {
  "name": "Coriander",
  "hex": "#C4D0B0"
}, {
  "name": "Mint Tulip",
  "hex": "#C4F4EB"
}, {
  "name": "Mulberry",
  "hex": "#C54B8C"
}, {
  "name": "Nugget",
  "hex": "#C59922"
}, {
  "name": "Tussock",
  "hex": "#C5994B"
}, {
  "name": "Sea Mist",
  "hex": "#C5DBCA"
}, {
  "name": "Yellow Green",
  "hex": "#C5E17A"
}, {
  "name": "Brick Red",
  "hex": "#C62D42"
}, {
  "name": "Contessa",
  "hex": "#C6726B"
}, {
  "name": "Oriental Pink",
  "hex": "#C69191"
}, {
  "name": "Roti",
  "hex": "#C6A84B"
}, {
  "name": "Ash",
  "hex": "#C6C3B5"
}, {
  "name": "Kangaroo",
  "hex": "#C6C8BD"
}, {
  "name": "Las Palmas",
  "hex": "#C6E610"
}, {
  "name": "Monza",
  "hex": "#C7031E"
}, {
  "name": "Red Violet",
  "hex": "#C71585"
}, {
  "name": "Coral Reef",
  "hex": "#C7BCA2"
}, {
  "name": "Melrose",
  "hex": "#C7C1FF"
}, {
  "name": "Cloud",
  "hex": "#C7C4BF"
}, {
  "name": "Ghost",
  "hex": "#C7C9D5"
}, {
  "name": "Pine Glade",
  "hex": "#C7CD90"
}, {
  "name": "Botticelli",
  "hex": "#C7DDE5"
}, {
  "name": "Antique Brass",
  "hex": "#C88A65"
}, {
  "name": "Lilac",
  "hex": "#C8A2C8"
}, {
  "name": "Hokey Pokey",
  "hex": "#C8A528"
}, {
  "name": "Lily",
  "hex": "#C8AABF"
}, {
  "name": "Laser",
  "hex": "#C8B568"
}, {
  "name": "Edgewater",
  "hex": "#C8E3D7"
}, {
  "name": "Piper",
  "hex": "#C96323"
}, {
  "name": "Pizza",
  "hex": "#C99415"
}, {
  "name": "Light Wisteria",
  "hex": "#C9A0DC"
}, {
  "name": "Rodeo Dust",
  "hex": "#C9B29B"
}, {
  "name": "Sundance",
  "hex": "#C9B35B"
}, {
  "name": "Earls Green",
  "hex": "#C9B93B"
}, {
  "name": "Silver Rust",
  "hex": "#C9C0BB"
}, {
  "name": "Conch",
  "hex": "#C9D9D2"
}, {
  "name": "Reef",
  "hex": "#C9FFA2"
}, {
  "name": "Aero Blue",
  "hex": "#C9FFE5"
}, {
  "name": "Flush Mahogany",
  "hex": "#CA3435"
}, {
  "name": "Turmeric",
  "hex": "#CABB48"
}, {
  "name": "Paris White",
  "hex": "#CADCD4"
}, {
  "name": "Bitter Lemon",
  "hex": "#CAE00D"
}, {
  "name": "Skeptic",
  "hex": "#CAE6DA"
}, {
  "name": "Viola",
  "hex": "#CB8FA9"
}, {
  "name": "Foggy Gray",
  "hex": "#CBCAB6"
}, {
  "name": "Green Mist",
  "hex": "#CBD3B0"
}, {
  "name": "Nebula",
  "hex": "#CBDBD6"
}, {
  "name": "Persian Red",
  "hex": "#CC3333"
}, {
  "name": "Burnt Orange",
  "hex": "#CC5500"
}, {
  "name": "Ochre",
  "hex": "#CC7722"
}, {
  "name": "Puce",
  "hex": "#CC8899"
}, {
  "name": "Thistle Green",
  "hex": "#CCCAA8"
}, {
  "name": "Periwinkle",
  "hex": "#CCCCFF"
}, {
  "name": "Electric Lime",
  "hex": "#CCFF00"
}, {
  "name": "Tenn",
  "hex": "#CD5700"
}, {
  "name": "Chestnut Rose",
  "hex": "#CD5C5C"
}, {
  "name": "Brandy Punch",
  "hex": "#CD8429"
}, {
  "name": "Onahau",
  "hex": "#CDF4FF"
}, {
  "name": "Sorrell Brown",
  "hex": "#CEB98F"
}, {
  "name": "Cold Turkey",
  "hex": "#CEBABA"
}, {
  "name": "Yuma",
  "hex": "#CEC291"
}, {
  "name": "Chino",
  "hex": "#CEC7A7"
}, {
  "name": "Eunry",
  "hex": "#CFA39D"
}, {
  "name": "Old Gold",
  "hex": "#CFB53B"
}, {
  "name": "Tasman",
  "hex": "#CFDCCF"
}, {
  "name": "Surf Crest",
  "hex": "#CFE5D2"
}, {
  "name": "Humming Bird",
  "hex": "#CFF9F3"
}, {
  "name": "Scandal",
  "hex": "#CFFAF4"
}, {
  "name": "Red Stage",
  "hex": "#D05F04"
}, {
  "name": "Hopbush",
  "hex": "#D06DA1"
}, {
  "name": "Meteor",
  "hex": "#D07D12"
}, {
  "name": "Perfume",
  "hex": "#D0BEF8"
}, {
  "name": "Prelude",
  "hex": "#D0C0E5"
}, {
  "name": "Tea Green",
  "hex": "#D0F0C0"
}, {
  "name": "Geebung",
  "hex": "#D18F1B"
}, {
  "name": "Vanilla",
  "hex": "#D1BEA8"
}, {
  "name": "Soft Amber",
  "hex": "#D1C6B4"
}, {
  "name": "Celeste",
  "hex": "#D1D2CA"
}, {
  "name": "Mischka",
  "hex": "#D1D2DD"
}, {
  "name": "Pear",
  "hex": "#D1E231"
}, {
  "name": "Hot Cinnamon",
  "hex": "#D2691E"
}, {
  "name": "Raw Sienna",
  "hex": "#D27D46"
}, {
  "name": "Careys Pink",
  "hex": "#D29EAA"
}, {
  "name": "Tan",
  "hex": "#D2B48C"
}, {
  "name": "Deco",
  "hex": "#D2DA97"
}, {
  "name": "Blue Romance",
  "hex": "#D2F6DE"
}, {
  "name": "Gossip",
  "hex": "#D2F8B0"
}, {
  "name": "Sisal",
  "hex": "#D3CBBA"
}, {
  "name": "Swirl",
  "hex": "#D3CDC5"
}, {
  "name": "Charm",
  "hex": "#D47494"
}, {
  "name": "Clam Shell",
  "hex": "#D4B6AF"
}, {
  "name": "Straw",
  "hex": "#D4BF8D"
}, {
  "name": "Akaroa",
  "hex": "#D4C4A8"
}, {
  "name": "Bird Flower",
  "hex": "#D4CD16"
}, {
  "name": "Iron",
  "hex": "#D4D7D9"
}, {
  "name": "Geyser",
  "hex": "#D4DFE2"
}, {
  "name": "Hawkes Blue",
  "hex": "#D4E2FC"
}, {
  "name": "Grenadier",
  "hex": "#D54600"
}, {
  "name": "Can Can",
  "hex": "#D591A4"
}, {
  "name": "Whiskey",
  "hex": "#D59A6F"
}, {
  "name": "Winter Hazel",
  "hex": "#D5D195"
}, {
  "name": "Granny Apple",
  "hex": "#D5F6E3"
}, {
  "name": "My Pink",
  "hex": "#D69188"
}, {
  "name": "Tacha",
  "hex": "#D6C562"
}, {
  "name": "Moon Raker",
  "hex": "#D6CEF6"
}, {
  "name": "Quill Gray",
  "hex": "#D6D6D1"
}, {
  "name": "Snowy Mint",
  "hex": "#D6FFDB"
}, {
  "name": "New York Pink",
  "hex": "#D7837F"
}, {
  "name": "Pavlova",
  "hex": "#D7C498"
}, {
  "name": "Fog",
  "hex": "#D7D0FF"
}, {
  "name": "Valencia",
  "hex": "#D84437"
}, {
  "name": "Japonica",
  "hex": "#D87C63"
}, {
  "name": "Thistle",
  "hex": "#D8BFD8"
}, {
  "name": "Maverick",
  "hex": "#D8C2D5"
}, {
  "name": "Foam",
  "hex": "#D8FCFA"
}, {
  "name": "Cabaret",
  "hex": "#D94972"
}, {
  "name": "Burning Sand",
  "hex": "#D99376"
}, {
  "name": "Cameo",
  "hex": "#D9B99B"
}, {
  "name": "Timberwolf",
  "hex": "#D9D6CF"
}, {
  "name": "Tana",
  "hex": "#D9DCC1"
}, {
  "name": "Link Water",
  "hex": "#D9E4F5"
}, {
  "name": "Mabel",
  "hex": "#D9F7FF"
}, {
  "name": "Cerise",
  "hex": "#DA3287"
}, {
  "name": "Flame Pea",
  "hex": "#DA5B38"
}, {
  "name": "Bamboo",
  "hex": "#DA6304"
}, {
  "name": "Red Damask",
  "hex": "#DA6A41"
}, {
  "name": "Orchid",
  "hex": "#DA70D6"
}, {
  "name": "Copperfield",
  "hex": "#DA8A67"
}, {
  "name": "Golden Grass",
  "hex": "#DAA520"
}, {
  "name": "Zanah",
  "hex": "#DAECD6"
}, {
  "name": "Iceberg",
  "hex": "#DAF4F0"
}, {
  "name": "Oyster Bay",
  "hex": "#DAFAFF"
}, {
  "name": "Cranberry",
  "hex": "#DB5079"
}, {
  "name": "Petite Orchid",
  "hex": "#DB9690"
}, {
  "name": "Di Serria",
  "hex": "#DB995E"
}, {
  "name": "Alto",
  "hex": "#DBDBDB"
}, {
  "name": "Frosted Mint",
  "hex": "#DBFFF8"
}, {
  "name": "Crimson",
  "hex": "#DC143C"
}, {
  "name": "Punch",
  "hex": "#DC4333"
}, {
  "name": "Galliano",
  "hex": "#DCB20C"
}, {
  "name": "Blossom",
  "hex": "#DCB4BC"
}, {
  "name": "Wattle",
  "hex": "#DCD747"
}, {
  "name": "Westar",
  "hex": "#DCD9D2"
}, {
  "name": "Moon Mist",
  "hex": "#DCDDCC"
}, {
  "name": "Caper",
  "hex": "#DCEDB4"
}, {
  "name": "Swans Down",
  "hex": "#DCF0EA"
}, {
  "name": "Swiss Coffee",
  "hex": "#DDD6D5"
}, {
  "name": "White Ice",
  "hex": "#DDF9F1"
}, {
  "name": "Cerise Red",
  "hex": "#DE3163"
}, {
  "name": "Roman",
  "hex": "#DE6360"
}, {
  "name": "Tumbleweed",
  "hex": "#DEA681"
}, {
  "name": "Gold Tips",
  "hex": "#DEBA13"
}, {
  "name": "Brandy",
  "hex": "#DEC196"
}, {
  "name": "Wafer",
  "hex": "#DECBC6"
}, {
  "name": "Sapling",
  "hex": "#DED4A4"
}, {
  "name": "Barberry",
  "hex": "#DED717"
}, {
  "name": "Beryl Green",
  "hex": "#DEE5C0"
}, {
  "name": "Pattens Blue",
  "hex": "#DEF5FF"
}, {
  "name": "Heliotrope",
  "hex": "#DF73FF"
}, {
  "name": "Apache",
  "hex": "#DFBE6F"
}, {
  "name": "Chenin",
  "hex": "#DFCD6F"
}, {
  "name": "Lola",
  "hex": "#DFCFDB"
}, {
  "name": "Willow Brook",
  "hex": "#DFECDA"
}, {
  "name": "Chartreuse Yellow",
  "hex": "#DFFF00"
}, {
  "name": "Mauve",
  "hex": "#E0B0FF"
}, {
  "name": "Anzac",
  "hex": "#E0B646"
}, {
  "name": "Harvest Gold",
  "hex": "#E0B974"
}, {
  "name": "Calico",
  "hex": "#E0C095"
}, {
  "name": "Baby Blue",
  "hex": "#E0FFFF"
}, {
  "name": "Sunglo",
  "hex": "#E16865"
}, {
  "name": "Equator",
  "hex": "#E1BC64"
}, {
  "name": "Pink Flare",
  "hex": "#E1C0C8"
}, {
  "name": "Periglacial Blue",
  "hex": "#E1E6D6"
}, {
  "name": "Kidnapper",
  "hex": "#E1EAD4"
}, {
  "name": "Tara",
  "hex": "#E1F6E8"
}, {
  "name": "Mandy",
  "hex": "#E25465"
}, {
  "name": "Terracotta",
  "hex": "#E2725B"
}, {
  "name": "Golden Bell",
  "hex": "#E28913"
}, {
  "name": "Shocking",
  "hex": "#E292C0"
}, {
  "name": "Dixie",
  "hex": "#E29418"
}, {
  "name": "Light Orchid",
  "hex": "#E29CD2"
}, {
  "name": "Snuff",
  "hex": "#E2D8ED"
}, {
  "name": "Mystic",
  "hex": "#E2EBED"
}, {
  "name": "Apple Green",
  "hex": "#E2F3EC"
}, {
  "name": "Razzmatazz",
  "hex": "#E30B5C"
}, {
  "name": "Alizarin Crimson",
  "hex": "#E32636"
}, {
  "name": "Cinnabar",
  "hex": "#E34234"
}, {
  "name": "Cavern Pink",
  "hex": "#E3BEBE"
}, {
  "name": "Peppermint",
  "hex": "#E3F5E1"
}, {
  "name": "Mindaro",
  "hex": "#E3F988"
}, {
  "name": "Deep Blush",
  "hex": "#E47698"
}, {
  "name": "Gamboge",
  "hex": "#E49B0F"
}, {
  "name": "Melanie",
  "hex": "#E4C2D5"
}, {
  "name": "Twilight",
  "hex": "#E4CFDE"
}, {
  "name": "Bone",
  "hex": "#E4D1C0"
}, {
  "name": "Sunflower",
  "hex": "#E4D422"
}, {
  "name": "Grain Brown",
  "hex": "#E4D5B7"
}, {
  "name": "Zombie",
  "hex": "#E4D69B"
}, {
  "name": "Frostee",
  "hex": "#E4F6E7"
}, {
  "name": "Snow Flurry",
  "hex": "#E4FFD1"
}, {
  "name": "Amaranth",
  "hex": "#E52B50"
}, {
  "name": "Zest",
  "hex": "#E5841B"
}, {
  "name": "Dust Storm",
  "hex": "#E5CCC9"
}, {
  "name": "Stark White",
  "hex": "#E5D7BD"
}, {
  "name": "Hampton",
  "hex": "#E5D8AF"
}, {
  "name": "Bon Jour",
  "hex": "#E5E0E1"
}, {
  "name": "Mercury",
  "hex": "#E5E5E5"
}, {
  "name": "Polar",
  "hex": "#E5F9F6"
}, {
  "name": "Trinidad",
  "hex": "#E64E03"
}, {
  "name": "Gold Sand",
  "hex": "#E6BE8A"
}, {
  "name": "Cashmere",
  "hex": "#E6BEA5"
}, {
  "name": "Double Spanish White",
  "hex": "#E6D7B9"
}, {
  "name": "Satin Linen",
  "hex": "#E6E4D4"
}, {
  "name": "Harp",
  "hex": "#E6F2EA"
}, {
  "name": "Off Green",
  "hex": "#E6F8F3"
}, {
  "name": "Hint of Green",
  "hex": "#E6FFE9"
}, {
  "name": "Tranquil",
  "hex": "#E6FFFF"
}, {
  "name": "Mango Tango",
  "hex": "#E77200"
}, {
  "name": "Christine",
  "hex": "#E7730A"
}, {
  "name": "Tonys Pink",
  "hex": "#E79F8C"
}, {
  "name": "Kobi",
  "hex": "#E79FC4"
}, {
  "name": "Rose Fog",
  "hex": "#E7BCB4"
}, {
  "name": "Corn",
  "hex": "#E7BF05"
}, {
  "name": "Putty",
  "hex": "#E7CD8C"
}, {
  "name": "Gray Nurse",
  "hex": "#E7ECE6"
}, {
  "name": "Lily White",
  "hex": "#E7F8FF"
}, {
  "name": "Bubbles",
  "hex": "#E7FEFF"
}, {
  "name": "Fire Bush",
  "hex": "#E89928"
}, {
  "name": "Shilo",
  "hex": "#E8B9B3"
}, {
  "name": "Pearl Bush",
  "hex": "#E8E0D5"
}, {
  "name": "Green White",
  "hex": "#E8EBE0"
}, {
  "name": "Chrome White",
  "hex": "#E8F1D4"
}, {
  "name": "Gin",
  "hex": "#E8F2EB"
}, {
  "name": "Aqua Squeeze",
  "hex": "#E8F5F2"
}, {
  "name": "Clementine",
  "hex": "#E96E00"
}, {
  "name": "Burnt Sienna",
  "hex": "#E97451"
}, {
  "name": "Tahiti Gold",
  "hex": "#E97C07"
}, {
  "name": "Oyster Pink",
  "hex": "#E9CECD"
}, {
  "name": "Confetti",
  "hex": "#E9D75A"
}, {
  "name": "Ebb",
  "hex": "#E9E3E3"
}, {
  "name": "Ottoman",
  "hex": "#E9F8ED"
}, {
  "name": "Clear Day",
  "hex": "#E9FFFD"
}, {
  "name": "Carissma",
  "hex": "#EA88A8"
}, {
  "name": "Porsche",
  "hex": "#EAAE69"
}, {
  "name": "Tulip Tree",
  "hex": "#EAB33B"
}, {
  "name": "Rob Roy",
  "hex": "#EAC674"
}, {
  "name": "Raffia",
  "hex": "#EADAB8"
}, {
  "name": "White Rock",
  "hex": "#EAE8D4"
}, {
  "name": "Panache",
  "hex": "#EAF6EE"
}, {
  "name": "Solitude",
  "hex": "#EAF6FF"
}, {
  "name": "Aqua Spring",
  "hex": "#EAF9F5"
}, {
  "name": "Dew",
  "hex": "#EAFFFE"
}, {
  "name": "Apricot",
  "hex": "#EB9373"
}, {
  "name": "Zinnwaldite",
  "hex": "#EBC2AF"
}, {
  "name": "Fuel Yellow",
  "hex": "#ECA927"
}, {
  "name": "Ronchi",
  "hex": "#ECC54E"
}, {
  "name": "French Lilac",
  "hex": "#ECC7EE"
}, {
  "name": "Just Right",
  "hex": "#ECCDB9"
}, {
  "name": "Wild Rice",
  "hex": "#ECE090"
}, {
  "name": "Fall Green",
  "hex": "#ECEBBD"
}, {
  "name": "Aths Special",
  "hex": "#ECEBCE"
}, {
  "name": "Starship",
  "hex": "#ECF245"
}, {
  "name": "Red Ribbon",
  "hex": "#ED0A3F"
}, {
  "name": "Tango",
  "hex": "#ED7A1C"
}, {
  "name": "Carrot Orange",
  "hex": "#ED9121"
}, {
  "name": "Sea Pink",
  "hex": "#ED989E"
}, {
  "name": "Tacao",
  "hex": "#EDB381"
}, {
  "name": "Desert Sand",
  "hex": "#EDC9AF"
}, {
  "name": "Pancho",
  "hex": "#EDCDAB"
}, {
  "name": "Chamois",
  "hex": "#EDDCB1"
}, {
  "name": "Primrose",
  "hex": "#EDEA99"
}, {
  "name": "Frost",
  "hex": "#EDF5DD"
}, {
  "name": "Aqua Haze",
  "hex": "#EDF5F5"
}, {
  "name": "Zumthor",
  "hex": "#EDF6FF"
}, {
  "name": "Narvik",
  "hex": "#EDF9F1"
}, {
  "name": "Honeysuckle",
  "hex": "#EDFC84"
}, {
  "name": "Lavender Magenta",
  "hex": "#EE82EE"
}, {
  "name": "Beauty Bush",
  "hex": "#EEC1BE"
}, {
  "name": "Chalky",
  "hex": "#EED794"
}, {
  "name": "Almond",
  "hex": "#EED9C4"
}, {
  "name": "Flax",
  "hex": "#EEDC82"
}, {
  "name": "Bizarre",
  "hex": "#EEDEDA"
}, {
  "name": "Double Colonial White",
  "hex": "#EEE3AD"
}, {
  "name": "Cararra",
  "hex": "#EEEEE8"
}, {
  "name": "Manz",
  "hex": "#EEEF78"
}, {
  "name": "Tahuna Sands",
  "hex": "#EEF0C8"
}, {
  "name": "Athens Gray",
  "hex": "#EEF0F3"
}, {
  "name": "Tusk",
  "hex": "#EEF3C3"
}, {
  "name": "Loafer",
  "hex": "#EEF4DE"
}, {
  "name": "Catskill White",
  "hex": "#EEF6F7"
}, {
  "name": "Twilight Blue",
  "hex": "#EEFDFF"
}, {
  "name": "Jonquil",
  "hex": "#EEFF9A"
}, {
  "name": "Rice Flower",
  "hex": "#EEFFE2"
}, {
  "name": "Jaffa",
  "hex": "#EF863F"
}, {
  "name": "Gallery",
  "hex": "#EFEFEF"
}, {
  "name": "Porcelain",
  "hex": "#EFF2F3"
}, {
  "name": "Mauvelous",
  "hex": "#F091A9"
}, {
  "name": "Golden Dream",
  "hex": "#F0D52D"
}, {
  "name": "Golden Sand",
  "hex": "#F0DB7D"
}, {
  "name": "Buff",
  "hex": "#F0DC82"
}, {
  "name": "Prim",
  "hex": "#F0E2EC"
}, {
  "name": "Khaki",
  "hex": "#F0E68C"
}, {
  "name": "Selago",
  "hex": "#F0EEFD"
}, {
  "name": "Titan White",
  "hex": "#F0EEFF"
}, {
  "name": "Alice Blue",
  "hex": "#F0F8FF"
}, {
  "name": "Feta",
  "hex": "#F0FCEA"
}, {
  "name": "Gold Drop",
  "hex": "#F18200"
}, {
  "name": "Wewak",
  "hex": "#F19BAB"
}, {
  "name": "Sahara Sand",
  "hex": "#F1E788"
}, {
  "name": "Parchment",
  "hex": "#F1E9D2"
}, {
  "name": "Blue Chalk",
  "hex": "#F1E9FF"
}, {
  "name": "Mint Julep",
  "hex": "#F1EEC1"
}, {
  "name": "Seashell",
  "hex": "#F1F1F1"
}, {
  "name": "Saltpan",
  "hex": "#F1F7F2"
}, {
  "name": "Tidal",
  "hex": "#F1FFAD"
}, {
  "name": "Chiffon",
  "hex": "#F1FFC8"
}, {
  "name": "Flamingo",
  "hex": "#F2552A"
}, {
  "name": "Tangerine",
  "hex": "#F28500"
}, {
  "name": "Mandys Pink",
  "hex": "#F2C3B2"
}, {
  "name": "Concrete",
  "hex": "#F2F2F2"
}, {
  "name": "Black Squeeze",
  "hex": "#F2FAFA"
}, {
  "name": "Pomegranate",
  "hex": "#F34723"
}, {
  "name": "Buttercup",
  "hex": "#F3AD16"
}, {
  "name": "New Orleans",
  "hex": "#F3D69D"
}, {
  "name": "Vanilla Ice",
  "hex": "#F3D9DF"
}, {
  "name": "Sidecar",
  "hex": "#F3E7BB"
}, {
  "name": "Dawn Pink",
  "hex": "#F3E9E5"
}, {
  "name": "Wheatfield",
  "hex": "#F3EDCF"
}, {
  "name": "Canary",
  "hex": "#F3FB62"
}, {
  "name": "Orinoco",
  "hex": "#F3FBD4"
}, {
  "name": "Carla",
  "hex": "#F3FFD8"
}, {
  "name": "Hollywood Cerise",
  "hex": "#F400A1"
}, {
  "name": "Sandy brown",
  "hex": "#F4A460"
}, {
  "name": "Saffron",
  "hex": "#F4C430"
}, {
  "name": "Ripe Lemon",
  "hex": "#F4D81C"
}, {
  "name": "Janna",
  "hex": "#F4EBD3"
}, {
  "name": "Pampas",
  "hex": "#F4F2EE"
}, {
  "name": "Wild Sand",
  "hex": "#F4F4F4"
}, {
  "name": "Zircon",
  "hex": "#F4F8FF"
}, {
  "name": "Froly",
  "hex": "#F57584"
}, {
  "name": "Cream Can",
  "hex": "#F5C85C"
}, {
  "name": "Manhattan",
  "hex": "#F5C999"
}, {
  "name": "Maize",
  "hex": "#F5D5A0"
}, {
  "name": "Wheat",
  "hex": "#F5DEB3"
}, {
  "name": "Sandwisp",
  "hex": "#F5E7A2"
}, {
  "name": "Pot Pourri",
  "hex": "#F5E7E2"
}, {
  "name": "Albescent White",
  "hex": "#F5E9D3"
}, {
  "name": "Soft Peach",
  "hex": "#F5EDEF"
}, {
  "name": "Ecru White",
  "hex": "#F5F3E5"
}, {
  "name": "Beige",
  "hex": "#F5F5DC"
}, {
  "name": "Golden Fizz",
  "hex": "#F5FB3D"
}, {
  "name": "Australian Mint",
  "hex": "#F5FFBE"
}, {
  "name": "French Rose",
  "hex": "#F64A8A"
}, {
  "name": "Brilliant Rose",
  "hex": "#F653A6"
}, {
  "name": "Illusion",
  "hex": "#F6A4C9"
}, {
  "name": "Merino",
  "hex": "#F6F0E6"
}, {
  "name": "Black Haze",
  "hex": "#F6F7F7"
}, {
  "name": "Spring Sun",
  "hex": "#F6FFDC"
}, {
  "name": "Violet Red",
  "hex": "#F7468A"
}, {
  "name": "Chilean Fire",
  "hex": "#F77703"
}, {
  "name": "Persian Pink",
  "hex": "#F77FBE"
}, {
  "name": "Rajah",
  "hex": "#F7B668"
}, {
  "name": "Azalea",
  "hex": "#F7C8DA"
}, {
  "name": "We Peep",
  "hex": "#F7DBE6"
}, {
  "name": "Quarter Spanish White",
  "hex": "#F7F2E1"
}, {
  "name": "Whisper",
  "hex": "#F7F5FA"
}, {
  "name": "Snow Drift",
  "hex": "#F7FAF7"
}, {
  "name": "Casablanca",
  "hex": "#F8B853"
}, {
  "name": "Chantilly",
  "hex": "#F8C3DF"
}, {
  "name": "Cherub",
  "hex": "#F8D9E9"
}, {
  "name": "Marzipan",
  "hex": "#F8DB9D"
}, {
  "name": "Energy Yellow",
  "hex": "#F8DD5C"
}, {
  "name": "Givry",
  "hex": "#F8E4BF"
}, {
  "name": "White Linen",
  "hex": "#F8F0E8"
}, {
  "name": "Magnolia",
  "hex": "#F8F4FF"
}, {
  "name": "Spring Wood",
  "hex": "#F8F6F1"
}, {
  "name": "Coconut Cream",
  "hex": "#F8F7DC"
}, {
  "name": "White Lilac",
  "hex": "#F8F7FC"
}, {
  "name": "Desert Storm",
  "hex": "#F8F8F7"
}, {
  "name": "Texas",
  "hex": "#F8F99C"
}, {
  "name": "Corn Field",
  "hex": "#F8FACD"
}, {
  "name": "Mimosa",
  "hex": "#F8FDD3"
}, {
  "name": "Carnation",
  "hex": "#F95A61"
}, {
  "name": "Saffron Mango",
  "hex": "#F9BF58"
}, {
  "name": "Carousel Pink",
  "hex": "#F9E0ED"
}, {
  "name": "Dairy Cream",
  "hex": "#F9E4BC"
}, {
  "name": "Portica",
  "hex": "#F9E663"
}, {
  "name": "Amour",
  "hex": "#F9EAF3"
}, {
  "name": "Rum Swizzle",
  "hex": "#F9F8E4"
}, {
  "name": "Dolly",
  "hex": "#F9FF8B"
}, {
  "name": "Sugar Cane",
  "hex": "#F9FFF6"
}, {
  "name": "Ecstasy",
  "hex": "#FA7814"
}, {
  "name": "Tan Hide",
  "hex": "#FA9D5A"
}, {
  "name": "Corvette",
  "hex": "#FAD3A2"
}, {
  "name": "Peach Yellow",
  "hex": "#FADFAD"
}, {
  "name": "Turbo",
  "hex": "#FAE600"
}, {
  "name": "Astra",
  "hex": "#FAEAB9"
}, {
  "name": "Champagne",
  "hex": "#FAECCC"
}, {
  "name": "Linen",
  "hex": "#FAF0E6"
}, {
  "name": "Fantasy",
  "hex": "#FAF3F0"
}, {
  "name": "Citrine White",
  "hex": "#FAF7D6"
}, {
  "name": "Alabaster",
  "hex": "#FAFAFA"
}, {
  "name": "Hint of Yellow",
  "hex": "#FAFDE4"
}, {
  "name": "Milan",
  "hex": "#FAFFA4"
}, {
  "name": "Brink Pink",
  "hex": "#FB607F"
}, {
  "name": "Geraldine",
  "hex": "#FB8989"
}, {
  "name": "Lavender Rose",
  "hex": "#FBA0E3"
}, {
  "name": "Sea Buckthorn",
  "hex": "#FBA129"
}, {
  "name": "Sun",
  "hex": "#FBAC13"
}, {
  "name": "Lavender Pink",
  "hex": "#FBAED2"
}, {
  "name": "Rose Bud",
  "hex": "#FBB2A3"
}, {
  "name": "Cupid",
  "hex": "#FBBEDA"
}, {
  "name": "Classic Rose",
  "hex": "#FBCCE7"
}, {
  "name": "Apricot Peach",
  "hex": "#FBCEB1"
}, {
  "name": "Banana Mania",
  "hex": "#FBE7B2"
}, {
  "name": "Marigold Yellow",
  "hex": "#FBE870"
}, {
  "name": "Festival",
  "hex": "#FBE96C"
}, {
  "name": "Sweet Corn",
  "hex": "#FBEA8C"
}, {
  "name": "Candy Corn",
  "hex": "#FBEC5D"
}, {
  "name": "Hint of Red",
  "hex": "#FBF9F9"
}, {
  "name": "Shalimar",
  "hex": "#FBFFBA"
}, {
  "name": "Shocking Pink",
  "hex": "#FC0FC0"
}, {
  "name": "Tickle Me Pink",
  "hex": "#FC80A5"
}, {
  "name": "Tree Poppy",
  "hex": "#FC9C1D"
}, {
  "name": "Lightning Yellow",
  "hex": "#FCC01E"
}, {
  "name": "Goldenrod",
  "hex": "#FCD667"
}, {
  "name": "Candlelight",
  "hex": "#FCD917"
}, {
  "name": "Cherokee",
  "hex": "#FCDA98"
}, {
  "name": "Double Pearl Lusta",
  "hex": "#FCF4D0"
}, {
  "name": "Pearl Lusta",
  "hex": "#FCF4DC"
}, {
  "name": "Vista White",
  "hex": "#FCF8F7"
}, {
  "name": "Bianca",
  "hex": "#FCFBF3"
}, {
  "name": "Moon Glow",
  "hex": "#FCFEDA"
}, {
  "name": "China Ivory",
  "hex": "#FCFFE7"
}, {
  "name": "Ceramic",
  "hex": "#FCFFF9"
}, {
  "name": "Torch Red",
  "hex": "#FD0E35"
}, {
  "name": "Wild Watermelon",
  "hex": "#FD5B78"
}, {
  "name": "Crusta",
  "hex": "#FD7B33"
}, {
  "name": "Sorbus",
  "hex": "#FD7C07"
}, {
  "name": "Sweet Pink",
  "hex": "#FD9FA2"
}, {
  "name": "Light Apricot",
  "hex": "#FDD5B1"
}, {
  "name": "Pig Pink",
  "hex": "#FDD7E4"
}, {
  "name": "Cinderella",
  "hex": "#FDE1DC"
}, {
  "name": "Golden Glow",
  "hex": "#FDE295"
}, {
  "name": "Lemon",
  "hex": "#FDE910"
}, {
  "name": "Old Lace",
  "hex": "#FDF5E6"
}, {
  "name": "Half Colonial White",
  "hex": "#FDF6D3"
}, {
  "name": "Drover",
  "hex": "#FDF7AD"
}, {
  "name": "Pale Prim",
  "hex": "#FDFEB8"
}, {
  "name": "Cumulus",
  "hex": "#FDFFD5"
}, {
  "name": "Persian Rose",
  "hex": "#FE28A2"
}, {
  "name": "Sunset Orange",
  "hex": "#FE4C40"
}, {
  "name": "Bittersweet",
  "hex": "#FE6F5E"
}, {
  "name": "California",
  "hex": "#FE9D04"
}, {
  "name": "Yellow Sea",
  "hex": "#FEA904"
}, {
  "name": "Melon",
  "hex": "#FEBAAD"
}, {
  "name": "Bright Sun",
  "hex": "#FED33C"
}, {
  "name": "Dandelion",
  "hex": "#FED85D"
}, {
  "name": "Salomie",
  "hex": "#FEDB8D"
}, {
  "name": "Cape Honey",
  "hex": "#FEE5AC"
}, {
  "name": "Remy",
  "hex": "#FEEBF3"
}, {
  "name": "Oasis",
  "hex": "#FEEFCE"
}, {
  "name": "Bridesmaid",
  "hex": "#FEF0EC"
}, {
  "name": "Beeswax",
  "hex": "#FEF2C7"
}, {
  "name": "Bleach White",
  "hex": "#FEF3D8"
}, {
  "name": "Pipi",
  "hex": "#FEF4CC"
}, {
  "name": "Half Spanish White",
  "hex": "#FEF4DB"
}, {
  "name": "Wisp Pink",
  "hex": "#FEF4F8"
}, {
  "name": "Provincial Pink",
  "hex": "#FEF5F1"
}, {
  "name": "Half Dutch White",
  "hex": "#FEF7DE"
}, {
  "name": "Solitaire",
  "hex": "#FEF8E2"
}, {
  "name": "White Pointer",
  "hex": "#FEF8FF"
}, {
  "name": "Off Yellow",
  "hex": "#FEF9E3"
}, {
  "name": "Orange White",
  "hex": "#FEFCED"
}, {
  "name": "Red",
  "hex": "#FF0000"
}, {
  "name": "Rose",
  "hex": "#FF007F"
}, {
  "name": "Purple Pizzazz",
  "hex": "#FF00CC"
}, {
  "name": "Magenta / Fuchsia",
  "hex": "#FF00FF"
}, {
  "name": "Scarlet",
  "hex": "#FF2400"
}, {
  "name": "Wild Strawberry",
  "hex": "#FF3399"
}, {
  "name": "Razzle Dazzle Rose",
  "hex": "#FF33CC"
}, {
  "name": "Radical Red",
  "hex": "#FF355E"
}, {
  "name": "Red Orange",
  "hex": "#FF3F34"
}, {
  "name": "Coral Red",
  "hex": "#FF4040"
}, {
  "name": "Vermilion",
  "hex": "#FF4D00"
}, {
  "name": "International Orange",
  "hex": "#FF4F00"
}, {
  "name": "Outrageous Orange",
  "hex": "#FF6037"
}, {
  "name": "Blaze Orange",
  "hex": "#FF6600"
}, {
  "name": "Pink Flamingo",
  "hex": "#FF66FF"
}, {
  "name": "Orange",
  "hex": "#FF681F"
}, {
  "name": "Hot Pink",
  "hex": "#FF69B4"
}, {
  "name": "Persimmon",
  "hex": "#FF6B53"
}, {
  "name": "Blush Pink",
  "hex": "#FF6FFF"
}, {
  "name": "Burning Orange",
  "hex": "#FF7034"
}, {
  "name": "Pumpkin",
  "hex": "#FF7518"
}, {
  "name": "Flamenco",
  "hex": "#FF7D07"
}, {
  "name": "Flush Orange",
  "hex": "#FF7F00"
}, {
  "name": "Coral",
  "hex": "#FF7F50"
}, {
  "name": "Salmon",
  "hex": "#FF8C69"
}, {
  "name": "Pizazz",
  "hex": "#FF9000"
}, {
  "name": "West Side",
  "hex": "#FF910F"
}, {
  "name": "Pink Salmon",
  "hex": "#FF91A4"
}, {
  "name": "Neon Carrot",
  "hex": "#FF9933"
}, {
  "name": "Atomic Tangerine",
  "hex": "#FF9966"
}, {
  "name": "Vivid Tangerine",
  "hex": "#FF9980"
}, {
  "name": "Sunshade",
  "hex": "#FF9E2C"
}, {
  "name": "Orange Peel",
  "hex": "#FFA000"
}, {
  "name": "Mona Lisa",
  "hex": "#FFA194"
}, {
  "name": "Web Orange",
  "hex": "#FFA500"
}, {
  "name": "Carnation Pink",
  "hex": "#FFA6C9"
}, {
  "name": "Hit Pink",
  "hex": "#FFAB81"
}, {
  "name": "Yellow Orange",
  "hex": "#FFAE42"
}, {
  "name": "Cornflower Lilac",
  "hex": "#FFB0AC"
}, {
  "name": "Sundown",
  "hex": "#FFB1B3"
}, {
  "name": "My Sin",
  "hex": "#FFB31F"
}, {
  "name": "Texas Rose",
  "hex": "#FFB555"
}, {
  "name": "Cotton Candy",
  "hex": "#FFB7D5"
}, {
  "name": "Macaroni and Cheese",
  "hex": "#FFB97B"
}, {
  "name": "Selective Yellow",
  "hex": "#FFBA00"
}, {
  "name": "Koromiko",
  "hex": "#FFBD5F"
}, {
  "name": "Amber",
  "hex": "#FFBF00"
}, {
  "name": "Wax Flower",
  "hex": "#FFC0A8"
}, {
  "name": "Pink",
  "hex": "#FFC0CB"
}, {
  "name": "Your Pink",
  "hex": "#FFC3C0"
}, {
  "name": "Supernova",
  "hex": "#FFC901"
}, {
  "name": "Flesh",
  "hex": "#FFCBA4"
}, {
  "name": "Sunglow",
  "hex": "#FFCC33"
}, {
  "name": "Golden Tainoi",
  "hex": "#FFCC5C"
}, {
  "name": "Peach Orange",
  "hex": "#FFCC99"
}, {
  "name": "Chardonnay",
  "hex": "#FFCD8C"
}, {
  "name": "Pastel Pink",
  "hex": "#FFD1DC"
}, {
  "name": "Romantic",
  "hex": "#FFD2B7"
}, {
  "name": "Grandis",
  "hex": "#FFD38C"
}, {
  "name": "Gold",
  "hex": "#FFD700"
}, {
  "name": "School bus Yellow",
  "hex": "#FFD800"
}, {
  "name": "Cosmos",
  "hex": "#FFD8D9"
}, {
  "name": "Mustard",
  "hex": "#FFDB58"
}, {
  "name": "Peach Schnapps",
  "hex": "#FFDCD6"
}, {
  "name": "Caramel",
  "hex": "#FFDDAF"
}, {
  "name": "Tuft Bush",
  "hex": "#FFDDCD"
}, {
  "name": "Watusi",
  "hex": "#FFDDCF"
}, {
  "name": "Pink Lace",
  "hex": "#FFDDF4"
}, {
  "name": "Navajo White",
  "hex": "#FFDEAD"
}, {
  "name": "Frangipani",
  "hex": "#FFDEB3"
}, {
  "name": "Pippin",
  "hex": "#FFE1DF"
}, {
  "name": "Pale Rose",
  "hex": "#FFE1F2"
}, {
  "name": "Negroni",
  "hex": "#FFE2C5"
}, {
  "name": "Cream Brulee",
  "hex": "#FFE5A0"
}, {
  "name": "Peach",
  "hex": "#FFE5B4"
}, {
  "name": "Tequila",
  "hex": "#FFE6C7"
}, {
  "name": "Kournikova",
  "hex": "#FFE772"
}, {
  "name": "Sandy Beach",
  "hex": "#FFEAC8"
}, {
  "name": "Karry",
  "hex": "#FFEAD4"
}, {
  "name": "Broom",
  "hex": "#FFEC13"
}, {
  "name": "Colonial White",
  "hex": "#FFEDBC"
}, {
  "name": "Derby",
  "hex": "#FFEED8"
}, {
  "name": "Vis Vis",
  "hex": "#FFEFA1"
}, {
  "name": "Egg White",
  "hex": "#FFEFC1"
}, {
  "name": "Papaya Whip",
  "hex": "#FFEFD5"
}, {
  "name": "Fair Pink",
  "hex": "#FFEFEC"
}, {
  "name": "Peach Cream",
  "hex": "#FFF0DB"
}, {
  "name": "Lavender blush",
  "hex": "#FFF0F5"
}, {
  "name": "Gorse",
  "hex": "#FFF14F"
}, {
  "name": "Buttermilk",
  "hex": "#FFF1B5"
}, {
  "name": "Pink Lady",
  "hex": "#FFF1D8"
}, {
  "name": "Forget Me Not",
  "hex": "#FFF1EE"
}, {
  "name": "Tutu",
  "hex": "#FFF1F9"
}, {
  "name": "Picasso",
  "hex": "#FFF39D"
}, {
  "name": "Chardon",
  "hex": "#FFF3F1"
}, {
  "name": "Paris Daisy",
  "hex": "#FFF46E"
}, {
  "name": "Barley White",
  "hex": "#FFF4CE"
}, {
  "name": "Egg Sour",
  "hex": "#FFF4DD"
}, {
  "name": "Sazerac",
  "hex": "#FFF4E0"
}, {
  "name": "Serenade",
  "hex": "#FFF4E8"
}, {
  "name": "Chablis",
  "hex": "#FFF4F3"
}, {
  "name": "Seashell Peach",
  "hex": "#FFF5EE"
}, {
  "name": "Sauvignon",
  "hex": "#FFF5F3"
}, {
  "name": "Milk Punch",
  "hex": "#FFF6D4"
}, {
  "name": "Varden",
  "hex": "#FFF6DF"
}, {
  "name": "Rose White",
  "hex": "#FFF6F5"
}, {
  "name": "Baja White",
  "hex": "#FFF8D1"
}, {
  "name": "Gin Fizz",
  "hex": "#FFF9E2"
}, {
  "name": "Early Dawn",
  "hex": "#FFF9E6"
}, {
  "name": "Lemon Chiffon",
  "hex": "#FFFACD"
}, {
  "name": "Bridal Heath",
  "hex": "#FFFAF4"
}, {
  "name": "Scotch Mist",
  "hex": "#FFFBDC"
}, {
  "name": "Soapstone",
  "hex": "#FFFBF9"
}, {
  "name": "Witch Haze",
  "hex": "#FFFC99"
}, {
  "name": "Buttery White",
  "hex": "#FFFCEA"
}, {
  "name": "Island Spice",
  "hex": "#FFFCEE"
}, {
  "name": "Cream",
  "hex": "#FFFDD0"
}, {
  "name": "Chilean Heath",
  "hex": "#FFFDE6"
}, {
  "name": "Travertine",
  "hex": "#FFFDE8"
}, {
  "name": "Orchid White",
  "hex": "#FFFDF3"
}, {
  "name": "Quarter Pearl Lusta",
  "hex": "#FFFDF4"
}, {
  "name": "Half and Half",
  "hex": "#FFFEE1"
}, {
  "name": "Apricot White",
  "hex": "#FFFEEC"
}, {
  "name": "Rice Cake",
  "hex": "#FFFEF0"
}, {
  "name": "Black White",
  "hex": "#FFFEF6"
}, {
  "name": "Romance",
  "hex": "#FFFEFD"
}, {
  "name": "Yellow",
  "hex": "#FFFF00"
}, {
  "name": "Laser Lemon",
  "hex": "#FFFF66"
}, {
  "name": "Pale Canary",
  "hex": "#FFFF99"
}, {
  "name": "Portafino",
  "hex": "#FFFFB4"
}, {
  "name": "Ivory",
  "hex": "#FFFFF0"
}, {
  "name": "White",
  "hex": "#FFFFFF"
}];

/***/ }),

/***/ 1886:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  "name": "Mahogany",
  "hex": "#CD4A4A"
}, {
  "name": "Fuzzy Wuzzy Brown",
  "hex": "#CC6666"
}, {
  "name": "Chestnut",
  "hex": "#BC5D58"
}, {
  "name": "Red Orange",
  "hex": "#FF5349"
}, {
  "name": "Sunset Orange",
  "hex": "#FD5E53"
}, {
  "name": "Bittersweet",
  "hex": "#FD7C6E"
}, {
  "name": "Melon",
  "hex": "#FDBCB4"
}, {
  "name": "Outrageous Orange",
  "hex": "#FF6E4A"
}, {
  "name": "Vivid Tangerine",
  "hex": "#FFA089"
}, {
  "name": "Burnt Sienna",
  "hex": "#EA7E5D"
}, {
  "name": "Brown",
  "hex": "#B4674D"
}, {
  "name": "Sepia",
  "hex": "#A5694F"
}, {
  "name": "Orange",
  "hex": "#FF7538"
}, {
  "name": "Burnt Orange",
  "hex": "#FF7F49"
}, {
  "name": "Copper",
  "hex": "#DD9475"
}, {
  "name": "Mango Tango",
  "hex": "#FF8243"
}, {
  "name": "Atomic Tangerine",
  "hex": "#FFA474"
}, {
  "name": "Beaver",
  "hex": "#9F8170"
}, {
  "name": "Antique Brass",
  "hex": "#CD9575"
}, {
  "name": "Desert Sand",
  "hex": "#EFCDB8"
}, {
  "name": "Raw Sienna",
  "hex": "#D68A59"
}, {
  "name": "Tumbleweed",
  "hex": "#DEAA88"
}, {
  "name": "Tan",
  "hex": "#FAA76C"
}, {
  "name": "Peach",
  "hex": "#FFCFAB"
}, {
  "name": "Macaroni and Cheese",
  "hex": "#FFBD88"
}, {
  "name": "Apricot",
  "hex": "#FDD9B5"
}, {
  "name": "Neon Carrot",
  "hex": "#FFA343"
}, {
  "name": "Almond",
  "hex": "#EFDBC5"
}, {
  "name": "Yellow Orange",
  "hex": "#FFB653"
}, {
  "name": "Gold",
  "hex": "#E7C697"
}, {
  "name": "Shadow",
  "hex": "#8A795D"
}, {
  "name": "Banana Mania",
  "hex": "#FAE7B5"
}, {
  "name": "Sunglow",
  "hex": "#FFCF48"
}, {
  "name": "Goldenrod",
  "hex": "#FCD975"
}, {
  "name": "Dandelion",
  "hex": "#FDDB6D"
}, {
  "name": "Yellow",
  "hex": "#FCE883"
}, {
  "name": "Green Yellow",
  "hex": "#F0E891"
}, {
  "name": "Spring Green",
  "hex": "#ECEABE"
}, {
  "name": "Olive Green",
  "hex": "#BAB86C"
}, {
  "name": "Laser Lemon",
  "hex": "#FDFC74"
}, {
  "name": "Unmellow Yellow",
  "hex": "#FDFC74"
}, {
  "name": "Canary",
  "hex": "#FFFF99"
}, {
  "name": "Yellow Green",
  "hex": "#C5E384"
}, {
  "name": "Inch Worm",
  "hex": "#B2EC5D"
}, {
  "name": "Asparagus",
  "hex": "#87A96B"
}, {
  "name": "Granny Smith Apple",
  "hex": "#A8E4A0"
}, {
  "name": "Electric Lime",
  "hex": "#1DF914"
}, {
  "name": "Screamin Green",
  "hex": "#76FF7A"
}, {
  "name": "Fern",
  "hex": "#71BC78"
}, {
  "name": "Forest Green",
  "hex": "#6DAE81"
}, {
  "name": "Sea Green",
  "hex": "#9FE2BF"
}, {
  "name": "Green",
  "hex": "#1CAC78"
}, {
  "name": "Mountain Meadow",
  "hex": "#30BA8F"
}, {
  "name": "Shamrock",
  "hex": "#45CEA2"
}, {
  "name": "Jungle Green",
  "hex": "#3BB08F"
}, {
  "name": "Caribbean Green",
  "hex": "#1CD3A2"
}, {
  "name": "Tropical Rain Forest",
  "hex": "#17806D"
}, {
  "name": "Pine Green",
  "hex": "#158078"
}, {
  "name": "Robin Egg Blue",
  "hex": "#1FCECB"
}, {
  "name": "Aquamarine",
  "hex": "#78DBE2"
}, {
  "name": "Turquoise Blue",
  "hex": "#77DDE7"
}, {
  "name": "Sky Blue",
  "hex": "#80DAEB"
}, {
  "name": "Outer Space",
  "hex": "#414A4C"
}, {
  "name": "Blue Green",
  "hex": "#199EBD"
}, {
  "name": "Pacific Blue",
  "hex": "#1CA9C9"
}, {
  "name": "Cerulean",
  "hex": "#1DACD6"
}, {
  "name": "Cornflower",
  "hex": "#9ACEEB"
}, {
  "name": "Midnight Blue",
  "hex": "#1A4876"
}, {
  "name": "Navy Blue",
  "hex": "#1974D2"
}, {
  "name": "Denim",
  "hex": "#2B6CC4"
}, {
  "name": "Blue",
  "hex": "#1F75FE"
}, {
  "name": "Periwinkle",
  "hex": "#C5D0E6"
}, {
  "name": "Cadet Blue",
  "hex": "#B0B7C6"
}, {
  "name": "Indigo",
  "hex": "#5D76CB"
}, {
  "name": "Wild Blue Yonder",
  "hex": "#A2ADD0"
}, {
  "name": "Manatee",
  "hex": "#979AAA"
}, {
  "name": "Blue Bell",
  "hex": "#ADADD6"
}, {
  "name": "Blue Violet",
  "hex": "#7366BD"
}, {
  "name": "Purple Heart",
  "hex": "#7442C8"
}, {
  "name": "Royal Purple",
  "hex": "#7851A9"
}, {
  "name": "Purple Mountains’ Majesty",
  "hex": "#9D81BA"
}, {
  "name": "Violet (Purple)",
  "hex": "#926EAE"
}, {
  "name": "Wisteria",
  "hex": "#CDA4DE"
}, {
  "name": "Vivid Violet",
  "hex": "#8F509D"
}, {
  "name": "Fuchsia",
  "hex": "#C364C5"
}, {
  "name": "Shocking Pink",
  "hex": "#FB7EFD"
}, {
  "name": "Pink Flamingo",
  "hex": "#FC74FD"
}, {
  "name": "Plum",
  "hex": "#8E4585"
}, {
  "name": "Hot Magenta",
  "hex": "#FF1DCE"
}, {
  "name": "Purple Pizzazz",
  "hex": "#FF1DCE"
}, {
  "name": "Razzle Dazzle Rose",
  "hex": "#FF48D0"
}, {
  "name": "Orchid",
  "hex": "#E6A8D7"
}, {
  "name": "Red Violet",
  "hex": "#C0448F"
}, {
  "name": "Eggplant",
  "hex": "#6E5160"
}, {
  "name": "Cerise",
  "hex": "#DD4492"
}, {
  "name": "Wild Strawberry",
  "hex": "#FF43A4"
}, {
  "name": "Magenta",
  "hex": "#F664AF"
}, {
  "name": "Lavender",
  "hex": "#FCB4D5"
}, {
  "name": "Cotton Candy",
  "hex": "#FFBCD9"
}, {
  "name": "Violet Red",
  "hex": "#F75394"
}, {
  "name": "Carnation Pink",
  "hex": "#FFAACC"
}, {
  "name": "Razzmatazz",
  "hex": "#E3256B"
}, {
  "name": "Piggy Pink",
  "hex": "#FDD7E4"
}, {
  "name": "Jazzberry Jam",
  "hex": "#CA3767"
}, {
  "name": "Blush",
  "hex": "#DE5D83"
}, {
  "name": "Tickle Me Pink",
  "hex": "#FC89AC"
}, {
  "name": "Pink Sherbet",
  "hex": "#F780A1"
}, {
  "name": "Maroon",
  "hex": "#C8385A"
}, {
  "name": "Red",
  "hex": "#EE204D"
}, {
  "name": "Radical Red",
  "hex": "#FF496C"
}, {
  "name": "Mauvelous",
  "hex": "#EF98AA"
}, {
  "name": "Wild Watermelon",
  "hex": "#FC6C85"
}, {
  "name": "Scarlet",
  "hex": "#FC2847"
}, {
  "name": "Salmon",
  "hex": "#FF9BAA"
}, {
  "name": "Brick Red",
  "hex": "#CB4154"
}, {
  "name": "White",
  "hex": "#EDEDED"
}, {
  "name": "Timberwolf",
  "hex": "#DBD7D2"
}, {
  "name": "Silver",
  "hex": "#CDC5C2"
}, {
  "name": "Gray",
  "hex": "#95918C"
}, {
  "name": "Black",
  "hex": "#232323"
}];

/***/ }),

/***/ 1557:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  name: 'red',
  hex: '#FF0000'
}, {
  name: 'orange',
  hex: '#FFA500'
}, {
  name: 'yellow',
  hex: '#FFFF00'
}, {
  name: 'green',
  hex: '#008000'
}, {
  name: 'blue',
  hex: '#0000FF'
}, {
  name: 'indigo',
  hex: '#4B0082'
}, {
  name: 'violet',
  hex: '#EE82EE'
}];

/***/ }),

/***/ 1734:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = [{
  name: 'indigo',
  hex: '#4b0082'
}, {
  name: 'gold',
  hex: '#ffd700'
}, {
  name: 'hotpink',
  hex: '#ff69b4'
}, {
  name: 'firebrick',
  hex: '#b22222'
}, {
  name: 'indianred',
  hex: '#cd5c5c'
}, {
  name: 'yellow',
  hex: '#ffff00'
}, {
  name: 'mistyrose',
  hex: '#ffe4e1'
}, {
  name: 'darkolivegreen',
  hex: '#556b2f'
}, {
  name: 'olive',
  hex: '#808000'
}, {
  name: 'darkseagreen',
  hex: '#8fbc8f'
}, {
  name: 'pink',
  hex: '#ffc0cb'
}, {
  name: 'tomato',
  hex: '#ff6347'
}, {
  name: 'lightcoral',
  hex: '#f08080'
}, {
  name: 'orangered',
  hex: '#ff4500'
}, {
  name: 'navajowhite',
  hex: '#ffdead'
}, {
  name: 'lime',
  hex: '#00ff00'
}, {
  name: 'palegreen',
  hex: '#98fb98'
}, {
  name: 'darkslategrey',
  hex: '#2f4f4f'
}, {
  name: 'greenyellow',
  hex: '#adff2f'
}, {
  name: 'burlywood',
  hex: '#deb887'
}, {
  name: 'seashell',
  hex: '#fff5ee'
}, {
  name: 'mediumspringgreen',
  hex: '#00fa9a'
}, {
  name: 'fuchsia',
  hex: '#ff00ff'
}, {
  name: 'papayawhip',
  hex: '#ffefd5'
}, {
  name: 'blanchedalmond',
  hex: '#ffebcd'
}, {
  name: 'chartreuse',
  hex: '#7fff00'
}, {
  name: 'dimgray',
  hex: '#696969'
}, {
  name: 'black',
  hex: '#000000'
}, {
  name: 'peachpuff',
  hex: '#ffdab9'
}, {
  name: 'springgreen',
  hex: '#00ff7f'
}, {
  name: 'aquamarine',
  hex: '#7fffd4'
}, {
  name: 'white',
  hex: '#ffffff'
}, {
  name: 'orange',
  hex: '#ffa500'
}, {
  name: 'lightsalmon',
  hex: '#ffa07a'
}, {
  name: 'darkslategray',
  hex: '#2f4f4f'
}, {
  name: 'brown',
  hex: '#a52a2a'
}, {
  name: 'ivory',
  hex: '#fffff0'
}, {
  name: 'dodgerblue',
  hex: '#1e90ff'
}, {
  name: 'peru',
  hex: '#cd853f'
}, {
  name: 'lawngreen',
  hex: '#7cfc00'
}, {
  name: 'chocolate',
  hex: '#d2691e'
}, {
  name: 'crimson',
  hex: '#dc143c'
}, {
  name: 'forestgreen',
  hex: '#228b22'
}, {
  name: 'darkgrey',
  hex: '#a9a9a9'
}, {
  name: 'lightseagreen',
  hex: '#20b2aa'
}, {
  name: 'cyan',
  hex: '#00ffff'
}, {
  name: 'mintcream',
  hex: '#f5fffa'
}, {
  name: 'silver',
  hex: '#c0c0c0'
}, {
  name: 'antiquewhite',
  hex: '#faebd7'
}, {
  name: 'mediumorchid',
  hex: '#ba55d3'
}, {
  name: 'skyblue',
  hex: '#87ceeb'
}, {
  name: 'gray',
  hex: '#808080'
}, {
  name: 'darkturquoise',
  hex: '#00ced1'
}, {
  name: 'goldenrod',
  hex: '#daa520'
}, {
  name: 'darkgreen',
  hex: '#006400'
}, {
  name: 'floralwhite',
  hex: '#fffaf0'
}, {
  name: 'darkviolet',
  hex: '#9400d3'
}, {
  name: 'darkgray',
  hex: '#a9a9a9'
}, {
  name: 'moccasin',
  hex: '#ffe4b5'
}, {
  name: 'saddlebrown',
  hex: '#8b4513'
}, {
  name: 'grey',
  hex: '#808080'
}, {
  name: 'darkslateblue',
  hex: '#483d8b'
}, {
  name: 'lightskyblue',
  hex: '#87cefa'
}, {
  name: 'lightpink',
  hex: '#ffb6c1'
}, {
  name: 'mediumvioletred',
  hex: '#c71585'
}, {
  name: 'slategrey',
  hex: '#708090'
}, {
  name: 'red',
  hex: '#ff0000'
}, {
  name: 'deeppink',
  hex: '#ff1493'
}, {
  name: 'limegreen',
  hex: '#32cd32'
}, {
  name: 'darkmagenta',
  hex: '#8b008b'
}, {
  name: 'palegoldenrod',
  hex: '#eee8aa'
}, {
  name: 'plum',
  hex: '#dda0dd'
}, {
  name: 'turquoise',
  hex: '#40e0d0'
}, {
  name: 'lightgrey',
  hex: '#d3d3d3'
}, {
  name: 'lightgoldenrodyellow',
  hex: '#fafad2'
}, {
  name: 'darkgoldenrod',
  hex: '#b8860b'
}, {
  name: 'lavender',
  hex: '#e6e6fa'
}, {
  name: 'maroon',
  hex: '#800000'
}, {
  name: 'yellowgreen',
  hex: '#9acd32'
}, {
  name: 'sandybrown',
  hex: '#f4a460'
}, {
  name: 'thistle',
  hex: '#d8bfd8'
}, {
  name: 'violet',
  hex: '#ee82ee'
}, {
  name: 'navy',
  hex: '#000080'
}, {
  name: 'magenta',
  hex: '#ff00ff'
}, {
  name: 'dimgrey',
  hex: '#696969'
}, {
  name: 'tan',
  hex: '#d2b48c'
}, {
  name: 'rosybrown',
  hex: '#bc8f8f'
}, {
  name: 'olivedrab',
  hex: '#6b8e23'
}, {
  name: 'blue',
  hex: '#0000ff'
}, {
  name: 'lightblue',
  hex: '#add8e6'
}, {
  name: 'ghostwhite',
  hex: '#f8f8ff'
}, {
  name: 'honeydew',
  hex: '#f0fff0'
}, {
  name: 'cornflowerblue',
  hex: '#6495ed'
}, {
  name: 'slateblue',
  hex: '#6a5acd'
}, {
  name: 'linen',
  hex: '#faf0e6'
}, {
  name: 'darkblue',
  hex: '#00008b'
}, {
  name: 'powderblue',
  hex: '#b0e0e6'
}, {
  name: 'seagreen',
  hex: '#2e8b57'
}, {
  name: 'darkkhaki',
  hex: '#bdb76b'
}, {
  name: 'snow',
  hex: '#fffafa'
}, {
  name: 'sienna',
  hex: '#a0522d'
}, {
  name: 'mediumblue',
  hex: '#0000cd'
}, {
  name: 'royalblue',
  hex: '#4169e1'
}, {
  name: 'lightcyan',
  hex: '#e0ffff'
}, {
  name: 'green',
  hex: '#008000'
}, {
  name: 'mediumpurple',
  hex: '#9370db'
}, {
  name: 'midnightblue',
  hex: '#191970'
}, {
  name: 'cornsilk',
  hex: '#fff8dc'
}, {
  name: 'paleturquoise',
  hex: '#afeeee'
}, {
  name: 'bisque',
  hex: '#ffe4c4'
}, {
  name: 'slategray',
  hex: '#708090'
}, {
  name: 'darkcyan',
  hex: '#008b8b'
}, {
  name: 'khaki',
  hex: '#f0e68c'
}, {
  name: 'wheat',
  hex: '#f5deb3'
}, {
  name: 'teal',
  hex: '#008080'
}, {
  name: 'darkorchid',
  hex: '#9932cc'
}, {
  name: 'deepskyblue',
  hex: '#00bfff'
}, {
  name: 'salmon',
  hex: '#fa8072'
}, {
  name: 'darkred',
  hex: '#8b0000'
}, {
  name: 'steelblue',
  hex: '#4682b4'
}, {
  name: 'palevioletred',
  hex: '#db7093'
}, {
  name: 'lightslategray',
  hex: '#778899'
}, {
  name: 'aliceblue',
  hex: '#f0f8ff'
}, {
  name: 'lightslategrey',
  hex: '#778899'
}, {
  name: 'lightgreen',
  hex: '#90ee90'
}, {
  name: 'orchid',
  hex: '#da70d6'
}, {
  name: 'gainsboro',
  hex: '#dcdcdc'
}, {
  name: 'mediumseagreen',
  hex: '#3cb371'
}, {
  name: 'lightgray',
  hex: '#d3d3d3'
}, {
  name: 'mediumturquoise',
  hex: '#48d1cc'
}, {
  name: 'lemonchiffon',
  hex: '#fffacd'
}, {
  name: 'cadetblue',
  hex: '#5f9ea0'
}, {
  name: 'lightyellow',
  hex: '#ffffe0'
}, {
  name: 'lavenderblush',
  hex: '#fff0f5'
}, {
  name: 'coral',
  hex: '#ff7f50'
}, {
  name: 'purple',
  hex: '#800080'
}, {
  name: 'aqua',
  hex: '#00ffff'
}, {
  name: 'whitesmoke',
  hex: '#f5f5f5'
}, {
  name: 'mediumslateblue',
  hex: '#7b68ee'
}, {
  name: 'darkorange',
  hex: '#ff8c00'
}, {
  name: 'mediumaquamarine',
  hex: '#66cdaa'
}, {
  name: 'darksalmon',
  hex: '#e9967a'
}, {
  name: 'beige',
  hex: '#f5f5dc'
}, {
  name: 'blueviolet',
  hex: '#8a2be2'
}, {
  name: 'azure',
  hex: '#f0ffff'
}, {
  name: 'lightsteelblue',
  hex: '#b0c4de'
}, {
  name: 'oldlace',
  hex: '#fdf5e6'
}];

/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getFirebaseUser = exports.functions = void 0;
const tslib_1 = __webpack_require__(655);
// Import the functions you need from the SDKs you need
const app_1 = __webpack_require__(1923);
//import { getAnalytics } from "firebase/analytics";
const auth_1 = __webpack_require__(513);
const functions_1 = __webpack_require__(9065);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional`
const firebaseConfig = {
  apiKey: "AIzaSyDNvbl0zbiS2oYBRgZd_pW3PcAJPNHR1PE",
  authDomain: "kronoku-679f4.firebaseapp.com",
  projectId: "kronoku-679f4",
  storageBucket: "kronoku-679f4.appspot.com",
  messagingSenderId: "802727513870",
  appId: "1:802727513870:web:187cbc5d378f5cb486515f",
  measurementId: "G-CKJF7DT1DQ"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
//const analytics = getAnalytics(app);
//const auth = getAuth(); //Doesn't work on iOS due to missing GAPI or something 
const auth = (0, auth_1.initializeAuth)(app, {
  persistence: [auth_1.indexedDBLocalPersistence, auth_1.browserLocalPersistence]
});
// function whichAuth() {
//     let auth
//     if (Capacitor.isNativePlatform()) {
//       auth = initializeAuth(firebaseApp, {
//         persistence: indexedDBLocalPersistence
//       })
//     } else {
//       auth = getAuth()
//     }
//     return auth
//   }
//let creds : Awaited<ReturnType<typeof signInAnonymously>> | null = null;
const getFirebaseUser = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  console.log("getFirebaseUser");
  if (auth.currentUser) return auth.currentUser;
  try {
    return (yield (0, auth_1.signInAnonymously)(auth)).user;
  } catch (error) {
    console.warn(error);
    throw error;
    //throw error;
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(errorCode, errorMessage);
  }
});

exports.getFirebaseUser = getFirebaseUser;
const functions = (0, functions_1.getFunctions)(app, "us-central1");
exports.functions = functions;
if (false) {}

/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const sprite_fx_1 = __webpack_require__(4712);
class ExpandingSpritesBackgroundFx {
  constructor(scene) {
    let texture = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let colors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    this.colors = [];
    this.textures = [];
    this.sprite1 = null;
    this.sprite2 = null;
    this.timeout1 = -1;
    this.timeout2 = -1;
    this.timeout3 = -1;
    this.scene = scene;
    this.textures = typeof texture === 'string' ? [texture] : texture;
    this.colors = colors.map(c => {
      if (typeof c === 'number') {
        return c;
      }
      return c.num();
    });
    this.explode1();
    //this.explode2();
    this.timeout2 = window.setTimeout(() => {
      this.explode2();
    }, 4000);
    this.scene.events.on('shutdown', this.destroy, this);
  }
  getColor() {
    if (this.colors.length === 0) return Phaser.Display.Color.RandomRGB().color;
    return Phaser.Utils.Array.GetRandom(this.colors);
  }
  explode1() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      this.sprite1 = this.scene.add.sprite(Phaser.Math.Between(0, this.scene.cameras.main.width), 0,
      //Phaser.Math.Between(0, this.scene.cameras.main.height / 2),
      Phaser.Utils.Array.GetRandom(this.textures));
      //this.sprite1.tint = this.getColor();
      //this.sprite1.scale = 0;
      yield (0, sprite_fx_1.explode)(this.sprite1, {
        cloneTarget: false,
        scale: 4,
        duration: 8000,
        tint: this.getColor(),
        onComplete: () => {
          var _a;
          (_a = this.sprite1) === null || _a === void 0 ? void 0 : _a.destroy();
          this.sprite1 = null;
        }
      });
      this.explode1();
    });
  }
  explode2() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      this.sprite2 = this.scene.add.sprite(Phaser.Math.Between(0, this.scene.cameras.main.width), this.scene.cameras.main.height,
      //Phaser.Math.Between(this.scene.cameras.main.height / 2, this.scene.cameras.main.height),
      Phaser.Utils.Array.GetRandom(this.textures));
      //this.sprite2.tint = this.getColor();
      // this.sprite2.scale = 0;
      yield (0, sprite_fx_1.explode)(this.sprite2, {
        cloneTarget: false,
        scale: 4,
        duration: 8000,
        tint: this.getColor(),
        onComplete: () => {
          var _a;
          (_a = this.sprite2) === null || _a === void 0 ? void 0 : _a.destroy();
          this.sprite2 = null;
        }
      });
      this.explode2();
    });
  }
  setPalette(colors) {
    this.colors = colors;
    if (this.sprite1) this.sprite1.tint = this.getColor();
    if (this.sprite2) this.sprite2.tint = this.getColor();
  }
  destroy() {
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
    clearTimeout(this.timeout3);
  }
}
exports["default"] = ExpandingSpritesBackgroundFx;

/***/ }),

/***/ 4712:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.growText = exports.scatter = exports.shimmerTint = exports.slideFade = exports.shrink = exports.explode = void 0;
const explode = function (target) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _a, _b;
  config = Object.assign({
    cloneTarget: true,
    scale: 3,
    duration: 150
  }, config);
  let scene = target.scene;
  let sprite = config.cloneTarget ? scene.add.sprite(target.x, target.y, (_a = config.texture) !== null && _a !== void 0 ? _a : target.texture) : target;
  sprite.setScale(0, 0);
  sprite.alpha = target.alpha;
  sprite.tint = (_b = config.tint) !== null && _b !== void 0 ? _b : target.tint;
  sprite.setDisplaySize(target.displayWidth, target.displayHeight);
  sprite.setOrigin(target.originX, target.originY);
  sprite.depth = config.behind ? sprite.depth - 1 : sprite.depth + 1;
  return new Promise((res, rej) => {
    var _a;
    scene.tweens.add({
      targets: sprite,
      scaleX: config.scale,
      scaleY: config.scale,
      alpha: 0,
      duration: config.duration,
      delay: (_a = config.delay) !== null && _a !== void 0 ? _a : 0,
      onStart: () => {
        var _a;
        sprite.alpha = target.alpha;
        (_a = config.onStart) === null || _a === void 0 ? void 0 : _a.call(config);
      },
      onComplete: () => {
        var _a;
        sprite.alpha = 0;
        (_a = config.onComplete) === null || _a === void 0 ? void 0 : _a.call(config);
        res(null);
        sprite.destroy();
      }
    });
  });
};
exports.explode = explode;
const shrink = function (targets) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let scene = targets[0].scene;
  // let sprite = scene.add.sprite(target.x, target.y, config.texture ?? target.texture);
  //     sprite.alpha = 0;
  //     sprite.tint = config.tint ?? target.tint;
  //     sprite.setDisplaySize(target.displayWidth, target.displayHeight)
  //     sprite.setOrigin(target.originX, target.originY);
  //     sprite.depth = config.behind ? sprite.depth - 1 : sprite.depth + 1;
  return new Promise((res, rej) => {
    var _a, _b;
    scene.tweens.add({
      targets: targets,
      scaleX: 0,
      scaleY: 0,
      alpha: 0,
      duration: (_a = config.duration) !== null && _a !== void 0 ? _a : 150,
      delay: (_b = config.delay) !== null && _b !== void 0 ? _b : 0,
      onStart: () => {
        var _a;
        return (_a = config.onStart) === null || _a === void 0 ? void 0 : _a.call(config);
      },
      onComplete: () => {
        var _a;
        (_a = config.onComplete) === null || _a === void 0 ? void 0 : _a.call(config);
        res(null);
      }
    });
  });
};
exports.shrink = shrink;
const slideFade = function (target) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: 0,
    y: -25,
    type: 'exit'
  };
  var _a, _b, _c, _d, _e, _f;
  let scene = target.scene;
  target.alpha = 1; //TODO: Remove?
  let delay = (_a = config.delay) !== null && _a !== void 0 ? _a : 0;
  let duration = (_b = config.duration) !== null && _b !== void 0 ? _b : 200;
  let fadeDelay = delay + duration * .4;
  let fadeDuration = duration * .6;
  let startAlpha, endAlpha, startX, endX, startY, endY;
  if (config.type === 'enter') {
    startAlpha = 0;
    endAlpha = target.alpha;
    endX = target.x;
    endY = target.y;
    startX = endX + ((_c = config.x) !== null && _c !== void 0 ? _c : 0);
    startY = endY + ((_d = config.y) !== null && _d !== void 0 ? _d : 0);
  } else {
    startAlpha = target.alpha;
    endAlpha = 0;
    startX = target.x;
    startY = target.y;
    endX = startX + ((_e = config.x) !== null && _e !== void 0 ? _e : 0);
    endY = startY + ((_f = config.y) !== null && _f !== void 0 ? _f : 0);
  }
  //Apply any necessary starting properties
  target.alpha = startAlpha;
  target.x = startX;
  target.y = startY;
  return Promise.all([new Promise((res, rej) => {
    var _a;
    scene.tweens.add({
      //ease: Phaser.Math.Easing.Quartic.Out,
      ease: (_a = config.ease) !== null && _a !== void 0 ? _a : Phaser.Math.Easing.Quadratic.Out,
      targets: target,
      x: endX,
      y: endY,
      //alpha: 0,
      duration: duration,
      delay: delay,
      onUpdate: function () {
        var _a;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_a = config.onUpdate) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
      },
      onStart: function () {
        var _a;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return (_a = config.onStart) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
      },
      onComplete: function () {
        var _a;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_a = config.onComplete) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
        res(null);
      }
    });
  }), new Promise((res, rej) => {
    scene.tweens.add({
      ease: Phaser.Math.Easing.Quadratic.In,
      targets: target,
      alpha: endAlpha,
      duration: fadeDuration,
      delay: fadeDelay,
      onComplete: () => {
        res(null);
      }
    });
  })]);
};
exports.slideFade = slideFade;
const shimmerTints = [0xffffff, 0xff8484, 0x84ffb5, 0xcd84ff, 0xcd84ff, 0x68ffdb, 0xff6868];
const shimmerTint = target => {
  let count = 0;
  let originalTint = target.tint;
  const shimmer = () => {
    if (count % 10 === 0) {
      target.tint = Phaser.Utils.Array.GetRandom(shimmerTints);
      //target.tint = Phaser.Display.Color.RandomRGB(75).color;
    }

    count = Phaser.Math.Wrap(count, 0, 100);
  };
  return {
    start: () => {
      target.scene.events.on('update', shimmer);
    },
    stop: () => {
      target.tint = originalTint;
      target.scene.events.removeListener('update', shimmer);
    }
  };
};
exports.shimmerTint = shimmerTint;
const scatter = function (targets) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (targets.length > 0) {
    const config = Object.assign({
      duration: 750,
      delay: 0
    }, opts);
    const scene = targets[0].scene;
    return Promise.all(targets.map(target => {
      return new Promise((res, rej) => {
        let randX = Phaser.Math.Between(0, scene.cameras.main.width);
        let randY = Phaser.Math.Between(0, scene.cameras.main.height);
        scene.tweens.add({
          ease: Phaser.Math.Easing.Quartic.Out,
          targets: [target],
          alpha: 0,
          x: randX,
          y: randY,
          duration: config.duration,
          onUpdate: function () {
            var _a;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            return (_a = config.onUpdate) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
          },
          onStart: function () {
            var _a;
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            return (_a = config.onStart) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
          },
          onComplete: function () {
            var _a;
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }
            (_a = config.onComplete) === null || _a === void 0 ? void 0 : _a.call(config, ...args);
            res(null);
          }
        });
      });
    }));
  }
};
exports.scatter = scatter;
const GrowTextCache = new Map();
const growText = function (scene, text) {
  let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _a;
  let opts = Object.assign({
    enterDuration: 500,
    exitDuration: 3000,
    delay: 0,
    x: 0,
    y: 0
  }, config);
  let style = Object.assign({}, (_a = opts.style) !== null && _a !== void 0 ? _a : {});
  let textSprite = scene.add.text(opts.x, opts.y, text, style);
  textSprite.setAlpha(0);
  textSprite.setScale(0);
  textSprite.setOrigin(.5);
  let activeTween = null;
  let {
    start,
    stop
  } = shimmerTint(textSprite);
  const enter = function () {
    let enterOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _a;
    if (activeTween) activeTween.complete();
    textSprite.setAlpha(0);
    textSprite.setScale(0);
    textSprite.setText((_a = enterOpts.text) !== null && _a !== void 0 ? _a : text);
    textSprite.setStyle(Object.assign(Object.assign({}, style), enterOpts.style));
    if (opts.shimmer || enterOpts.shimmer) {
      start();
    } else {
      stop();
    }
    return new Promise((res, rej) => {
      var _a;
      activeTween = scene.tweens.add(Object.assign(Object.assign({
        ease: Phaser.Math.Easing.Quartic.Out,
        targets: [textSprite],
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        duration: opts.enterDuration
      }, (_a = enterOpts.tween) !== null && _a !== void 0 ? _a : {}), {
        onComplete: function () {
          var _a, _b;
          activeTween = null;
          for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            params[_key7] = arguments[_key7];
          }
          (_b = (_a = enterOpts.tween) === null || _a === void 0 ? void 0 : _a.onComplete) === null || _b === void 0 ? void 0 : _b.call(_a, ...params);
          res();
        }
      }));
    });
  };
  const exit = function () {
    let exitOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (activeTween) activeTween.complete();
    textSprite.setStyle(Object.assign(Object.assign({}, style), exitOpts.style));
    return new Promise((res, rej) => {
      var _a;
      activeTween = scene.tweens.add(Object.assign(Object.assign({
        ease: Phaser.Math.Easing.Quartic.In,
        targets: [textSprite],
        alpha: 0,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: opts.exitDuration
      }, (_a = exitOpts.tween) !== null && _a !== void 0 ? _a : {}), {
        onComplete: function () {
          var _a, _b;
          stop();
          activeTween = null;
          for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            params[_key8] = arguments[_key8];
          }
          (_b = (_a = exitOpts.tween) === null || _a === void 0 ? void 0 : _a.onComplete) === null || _b === void 0 ? void 0 : _b.call(_a, ...params);
          //textSprite.destroy();
          res();
        }
      }));
    });
  };
  const destroy = () => {
    activeTween === null || activeTween === void 0 ? void 0 : activeTween.stop();
    textSprite.destroy();
  };
  return {
    enter,
    exit,
    destroy
  };
};
exports.growText = growText;

/***/ }),

/***/ 2389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const phaser_1 = tslib_1.__importDefault(__webpack_require__(2260));
/**
 * Pointer-down effect that expands the given sprite outwards from the pointer x/y coordinates.
 */
class PointerWaveFX extends phaser_1.default.GameObjects.Sprite {
  constructor(scene, texture, frame) {
    super(scene, 0, 0, texture, frame);
    this.scene = scene;
    this.alpha = 0;
    this.originX = .5;
    this.originY = .5;
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.scene.input.on('pointerdown', this.handlePointerDown);
    this.scene.add.existing(this);
  }
  handlePointerDown() {
    this.x = this.scene.input.activePointer.x;
    this.y = this.scene.input.activePointer.y;
    if (this.tween) this.tween.restart();else {
      this.alpha = 1;
      this.scaleX = .1;
      this.scaleY = .1;
      this.tween = this.scene.tweens.add({
        targets: [this],
        ease: phaser_1.default.Math.Easing.Quartic.Out,
        scaleX: 1,
        scaleY: 1,
        alpha: 0,
        duration: 650,
        onComplete: () => {
          this.alpha = 0;
          this.tween = undefined;
        }
      });
    }
  }
  destroy() {
    var _a;
    (_a = this.scene) === null || _a === void 0 ? void 0 : _a.input.removeListener('pointerdown', this.handlePointerDown);
    super.destroy();
  }
}
exports["default"] = PointerWaveFX;

/***/ }),

/***/ 431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
class DetuneAudioTransition extends TemplateTypes.AudioTransition {
  constructor(scene, track) {
    let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super(scene, track, config);
  }
  get isPlaying() {
    var _a, _b;
    return ((_a = this.exitTween) === null || _a === void 0 ? void 0 : _a.isPlaying) || ((_b = this.enterTween) === null || _b === void 0 ? void 0 : _b.isPlaying);
  }
  enter(onComplete) {
    if (this.isPlaying) return;
    if (!this.track.isPlaying) {
      this.track.volume = 0;
      this.track.detune = -1200;
      this.track.play();
    }
    let tweenTarget = {
      volume: 0,
      detune: -1200
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      this.scene.tweens.add({
        targets: tweenTarget,
        volume: 1,
        detune: 50,
        duration: (_a = this.config.duration) !== null && _a !== void 0 ? _a : 500,
        onUpdate: () => {
          this.track.detune = parseFloat(tweenTarget.detune.toFixed(2));
          this.track.volume = parseFloat(tweenTarget.volume.toFixed(2));
        },
        onComplete: () => {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  exit(onComplete) {
    if (this.isPlaying) return;
    let tweenTarget = {
      volume: 1,
      detune: 50
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      this.scene.tweens.add({
        targets: tweenTarget,
        volume: 0,
        detune: -1200,
        duration: (_a = this.config.duration) !== null && _a !== void 0 ? _a : 500,
        onUpdate: () => {
          this.track.detune = parseFloat(tweenTarget.detune.toFixed(2));
          this.track.volume = parseFloat(tweenTarget.volume.toFixed(2));
        },
        onComplete: () => {
          this.track.stop();
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  cancel() {
    var _a, _b;
    (_a = this.enterTween) === null || _a === void 0 ? void 0 : _a.stop();
    (_b = this.exitTween) === null || _b === void 0 ? void 0 : _b.stop();
  }
  destroy() {
    var _a, _b;
    (_a = this.enterTween) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.exitTween) === null || _b === void 0 ? void 0 : _b.destroy();
  }
}
exports["default"] = DetuneAudioTransition;

/***/ }),

/***/ 4899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
class FadeAudioTransition extends TemplateTypes.AudioTransition {
  constructor(scene, track) {
    let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super(scene, track, config);
  }
  get isPlaying() {
    var _a, _b;
    return ((_a = this.exitTween) === null || _a === void 0 ? void 0 : _a.isPlaying) || ((_b = this.enterTween) === null || _b === void 0 ? void 0 : _b.isPlaying);
  }
  enter(onComplete) {
    if (this.isPlaying) return;
    if (!this.track.isPlaying) {
      this.track.volume = 0;
      this.track.play();
    }
    let tweenTarget = {
      volume: 0
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      this.scene.tweens.add({
        targets: tweenTarget,
        volume: 1,
        duration: (_a = this.config.duration) !== null && _a !== void 0 ? _a : 500,
        onUpdate: () => this.track.volume = parseFloat(tweenTarget.volume.toFixed(2)),
        onComplete: () => {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  exit(onComplete) {
    if (this.isPlaying) return;
    let tweenTarget = {
      volume: 1
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      this.exitTween = this.scene.tweens.add({
        targets: tweenTarget,
        volume: 0,
        duration: (_a = this.config.duration) !== null && _a !== void 0 ? _a : 500,
        onUpdate: () => this.track.volume = parseFloat(tweenTarget.volume.toFixed(2)),
        onComplete: () => {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  cancel() {
    var _a, _b;
    (_a = this.enterTween) === null || _a === void 0 ? void 0 : _a.stop();
    (_b = this.exitTween) === null || _b === void 0 ? void 0 : _b.stop();
  }
  destroy() {
    // this.enterTween?.destroy();
    // this.exitTween?.destroy();
  }
}
exports["default"] = FadeAudioTransition;

/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
class MenuFadeScaleTransition extends TemplateTypes.MenuTransition {
  constructor(config) {
    var _a;
    super(config, `
            .MenuFadeScaleTransition-enter-active,
            .MenuFadeScaleTransition-leave-active {
                transform: scale(1);
                transition: ${(_a = config.duration) !== null && _a !== void 0 ? _a : 500}ms ease;
            }
            
            .MenuFadeScaleTransition-enter-from,
            .MenuFadeScaleTransition-leave-to {
                transform: scale(2);
                opacity: 0;
            }
        `);
  }
}
exports["default"] = MenuFadeScaleTransition;

/***/ }),

/***/ 8868:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
class MenuFadeTransition extends TemplateTypes.MenuTransition {
  constructor(config) {
    var _a;
    super(config, `
            .MenuFadeTransition-enter-active,
            .MenuFadeTransition-leave-active {
                transition: opacity ${(_a = config.duration) !== null && _a !== void 0 ? _a : 500}ms ease;
            }
            
            .MenuFadeTransition-enter-from,
            .MenuFadeTransition-leave-to {
                opacity: 0;
            }
        `);
  }
}
exports["default"] = MenuFadeTransition;

/***/ }),

/***/ 1698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
class FadeSceneTransition extends TemplateTypes.SceneTransition {
  constructor(scene) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(scene, config);
  }
  get isPlaying() {
    var _a, _b;
    return ((_a = this.exitTween) === null || _a === void 0 ? void 0 : _a.isPlaying) || ((_b = this.enterTween) === null || _b === void 0 ? void 0 : _b.isPlaying);
  }
  enter(onComplete) {
    if (this.isPlaying) return;
    return new Promise((res, rej) => {
      var _a;
      this.scene.cameras.main.fadeIn((_a = this.config.duration) !== null && _a !== void 0 ? _a : 500, 0, 0, 0, (cam, progress) => {
        if (progress === 1) {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  exit(onComplete) {
    if (this.isPlaying) return;
    return new Promise((res, rej) => {
      var _a;
      this.scene.cameras.main.fadeOut((_a = this.config.duration) !== null && _a !== void 0 ? _a : 500, 0, 0, 0, (cam, progress) => {
        if (progress === 1) {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete();
          res();
        }
      });
    });
  }
  cancel() {
    var _a, _b;
    (_a = this.enterTween) === null || _a === void 0 ? void 0 : _a.stop();
    (_b = this.exitTween) === null || _b === void 0 ? void 0 : _b.stop();
  }
  destroy() {
    var _a, _b;
    (_a = this.enterTween) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.exitTween) === null || _b === void 0 ? void 0 : _b.destroy();
  }
}
exports["default"] = FadeSceneTransition;

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const fade_scene_transition_1 = tslib_1.__importDefault(__webpack_require__(1698));
const fade_audio_transition_1 = tslib_1.__importDefault(__webpack_require__(4899));
const detune_audio_transition_1 = tslib_1.__importDefault(__webpack_require__(431));
const menu_fade_transition_1 = tslib_1.__importDefault(__webpack_require__(8868));
const menu_fade_scale_transition_1 = tslib_1.__importDefault(__webpack_require__(4864));
const Transitions = {
  Scene: {
    'fade': fade_scene_transition_1.default
  },
  Menu: {
    'fade': menu_fade_transition_1.default,
    'fade-scale': menu_fade_scale_transition_1.default
  },
  Audio: {
    'fade': fade_audio_transition_1.default,
    'detune': detune_audio_transition_1.default
  }
};
exports["default"] = Transitions;

/***/ }),

/***/ 5606:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NamedColors2 = exports.NamedColors1 = exports.NamedColors0 = void 0;
const NamedColors0 = [{
  "name": "Aqua Deep",
  "hex": "#014B43",
  "difficulty": 0
}, {
  "name": "Evening Sea",
  "hex": "#024E46",
  "difficulty": 0
}, {
  "name": "Zuccini",
  "hex": "#044022",
  "difficulty": 0
}, {
  "name": "Holly",
  "hex": "#011D13",
  "difficulty": 0
}, {
  "name": "Crimson",
  "hex": "#DC143C",
  "difficulty": 0
}, {
  "name": "Auburn",
  "hex": "#A52A2A",
  "difficulty": 0
}, {
  "name": "Teal",
  "hex": "#008080",
  "difficulty": 0
}, {
  "name": "Marigold",
  "hex": "#EAA221",
  "difficulty": 0
}, {
  "name": "Jade",
  "hex": "#00A86B",
  "difficulty": 0
}, {
  "name": "Lilac",
  "hex": "#C8A2C8",
  "difficulty": 0
}, {
  "name": "Ruby",
  "hex": "#E0115F",
  "difficulty": 0
}, {
  "name": "Cyan",
  "hex": "#00FFFF",
  "difficulty": 0
}, {
  "name": "Caramel",
  "hex": "#FFD700",
  "difficulty": 0
}, {
  "name": "Lavender",
  "hex": "#967bb6",
  "difficulty": 0
}, {
  "name": "Tangerine",
  "hex": "#FFA500",
  "difficulty": 0
}, {
  "name": "Plum",
  "hex": "#8e4585",
  "difficulty": 0
}, {
  "name": "Sapphire",
  "hex": "#0F52BA",
  "difficulty": 0
}, {
  "name": "Moss",
  "hex": "#8A9A5B",
  "difficulty": 0
}, {
  "name": "Ebony",
  "hex": "#282C34",
  "difficulty": 0
}, {
  "name": "Ivory",
  "hex": "#FFFFF0",
  "difficulty": 0
}, {
  "name": "Mint",
  "hex": "#3EB489",
  "difficulty": 0
}, {
  "name": "Cinnamon",
  "hex": "#D2691E",
  "difficulty": 0
}, {
  "name": "Olive",
  "hex": "#808000",
  "difficulty": 0
}, {
  "name": "Sandalwood",
  "hex": "#DECBBD",
  "difficulty": 0
}, {
  "name": "Maroon",
  "hex": "#800000",
  "difficulty": 0
}, {
  "name": "Cactus",
  "hex": "#5B6F55",
  "difficulty": 0
}, {
  "name": "Mocha",
  "hex": "#6F372D",
  "difficulty": 0
}, {
  "name": "Pine",
  "hex": "#0a481e",
  "difficulty": 0
}, {
  "name": "Bumblebee",
  "hex": "#FFD700",
  "difficulty": 0
}, {
  "name": "Flamingo",
  "hex": "#FC8EAC",
  "difficulty": 0
}, {
  "name": "Toffee",
  "hex": "#A5673F",
  "difficulty": 0
}, {
  "name": "Ash",
  "hex": "#B2BEB5",
  "difficulty": 0
}, {
  "name": "Goldenrod",
  "hex": "#DAA520",
  "difficulty": 0
}, {
  "name": "Violet",
  "hex": "#7F00FF",
  "difficulty": 0
}, {
  "name": "Amber",
  "hex": "#FFBF00",
  "difficulty": 0
}, {
  "name": "Charcoal",
  "hex": "#36454F",
  "difficulty": 0
}, {
  "name": "Fern",
  "hex": "#71BC78",
  "difficulty": 0
}, {
  "name": "Sunflower",
  "hex": "#FFC512",
  "difficulty": 0
}, {
  "name": "Lapis",
  "hex": "#07249e",
  "difficulty": 0
}, {
  "name": "Peach",
  "hex": "#f98a87",
  "difficulty": 0
}, {
  "name": "Steel",
  "hex": "#738595",
  "difficulty": 0
}, {
  "name": "Brick",
  "hex": "#aa4a44",
  "difficulty": 0
}, {
  "name": "Platinum",
  "hex": "#E5E4E2",
  "difficulty": 0
}, {
  "name": "Pumpkin",
  "hex": "#FF7518",
  "difficulty": 0
}, {
  "name": "Azure",
  "hex": "#007FFF",
  "difficulty": 0
}, {
  "name": "Merlot",
  "hex": "#730039",
  "difficulty": 0
}, {
  "name": "Pewter",
  "hex": "#8C8E8C",
  "difficulty": 0
}, {
  "name": "Canary",
  "hex": "#FFFF99",
  "difficulty": 0
}, {
  "name": "Brass",
  "hex": "#B5A642",
  "difficulty": 0
}, {
  "name": "Chestnut",
  "hex": "#954535",
  "difficulty": 0
}, {
  "name": "Pearl",
  "hex": "#F2EDE4",
  "difficulty": 0
}, {
  "name": "Lemon",
  "hex": "#FFF700",
  "difficulty": 0
}, {
  "name": "Copper",
  "hex": "#B87333",
  "difficulty": 0
}, {
  "name": "Rose",
  "hex": "#930050",
  "difficulty": 0
}, {
  "name": "Grape",
  "hex": "#6F2DA8",
  "difficulty": 0
}, {
  "name": "Honey",
  "hex": "#D4AF37",
  "difficulty": 0
}, {
  "name": "Cocoa",
  "hex": "#D2691E",
  "difficulty": 0
}, {
  "name": "Lime",
  "hex": "#00FF00",
  "difficulty": 0
}, {
  "name": "Silver",
  "hex": "#C0C0C0",
  "difficulty": 0
}, {
  "name": "Golden",
  "hex": "#FFD700",
  "difficulty": 0
}, {
  "name": "Marble",
  "hex": "#EFEBE9",
  "difficulty": 0
}, {
  "name": "Cherry",
  "hex": "#DC143C",
  "difficulty": 0
}, {
  "name": "Cotton",
  "hex": "#FAF9F6",
  "difficulty": 0
}, {
  "name": "Shadow",
  "hex": "#757575",
  "difficulty": 0
}, {
  "name": "Mango",
  "hex": "#FF8243",
  "difficulty": 0
}, {
  "name": "Wine",
  "hex": "#722F37",
  "difficulty": 0
}, {
  "name": "Daffodil",
  "hex": "#FFFF31",
  "difficulty": 0
}, {
  "name": "Scarlet",
  "hex": "#FF2400",
  "difficulty": 0
}, {
  "name": "Pear",
  "hex": "#D1E231",
  "difficulty": 0
}, {
  "name": "Aqua",
  "hex": "#00FFFF",
  "difficulty": 0
}, {
  "name": "Aquamarine",
  "hex": "#7FFFD4",
  "difficulty": 0
}, {
  "name": "Blackberry",
  "hex": "#4D2A4D",
  "difficulty": 0
}, {
  "name": "Blueberry",
  "hex": "#464A88",
  "difficulty": 0
}, {
  "name": "Strawberry",
  "hex": "#FF3877",
  "difficulty": 0
}, {
  "name": "Sky",
  "hex": "#5ec4d6",
  "difficulty": 0
}, {
  "name": "Vanilla",
  "hex": "#F3E5AB",
  "difficulty": 0
}, {
  "name": "Lemonade",
  "hex": "#FFFACD",
  "difficulty": 0
}, {
  "name": "Wheat",
  "hex": "#F5DEB3",
  "difficulty": 0
}, {
  "name": "Navy",
  "hex": "#000080",
  "difficulty": 0
}, {
  "name": "Avocado",
  "hex": "#568203",
  "difficulty": 0
}, {
  "name": "Beige",
  "hex": "#F5F5DC",
  "difficulty": 0
}, {
  "name": "Bone",
  "hex": "#E3DAC9",
  "difficulty": 0
}, {
  "name": "bronze",
  "hex": "#CD7F32",
  "difficulty": 0
}, {
  "name": "Frost",
  "hex": "#E1E4FF",
  "difficulty": 0
}, {
  "name": "Mustard",
  "hex": "#FFDB58",
  "difficulty": 0
}, {
  "name": "Oatmeal",
  "hex": "#E6D8AD",
  "difficulty": 0
}];
exports.NamedColors0 = NamedColors0;
const NamedColors1 = [{
  "name": "Amethyst",
  "hex": "#9966CC",
  "difficulty": 1
}, {
  "name": "Emerald",
  "hex": "#50C878",
  "difficulty": 1
}, {
  "name": "Magenta",
  "hex": "#FF00FF",
  "difficulty": 1
}, {
  "name": "Coral",
  "hex": "#FF7F50",
  "difficulty": 1
}, {
  "name": "Citrine",
  "hex": "#E4D00A",
  "difficulty": 1
}, {
  "name": "Topaz",
  "hex": "#FFC87C",
  "difficulty": 1
}, {
  "name": "Turquoise",
  "hex": "#40E0D0",
  "difficulty": 1
}, {
  "name": "Peridot",
  "hex": "#E6E200",
  "difficulty": 1
}, {
  "name": "Mauve",
  "hex": "#E0B0FF",
  "difficulty": 1
}, {
  "name": "Citrus",
  "hex": "#FFA500",
  "difficulty": 1
}, {
  "name": "Citron",
  "hex": "#9FA91F",
  "difficulty": 1
}, {
  "name": "Slate",
  "hex": "#708090",
  "difficulty": 1
}, {
  "name": "Apricot",
  "hex": "#FBCEB1",
  "difficulty": 1
}, {
  "name": "Fuchsia",
  "hex": "#FF00FF",
  "difficulty": 1
}, {
  "name": "Pomegranate",
  "hex": "#F44336",
  "difficulty": 1
}, {
  "name": "Mulberry",
  "hex": "#C54B8C",
  "difficulty": 1
}, {
  "name": "Garnet",
  "hex": "#733635",
  "difficulty": 1
}, {
  "name": "Petal",
  "hex": "#F3E5AB",
  "difficulty": 1
}, {
  "name": "Juniper",
  "hex": "#74918E",
  "difficulty": 1
}, {
  "name": "Honeydew",
  "hex": "#F0FFF0",
  "difficulty": 1
}, {
  "name": "Buttercup",
  "hex": "#F3AD16",
  "difficulty": 1
}, {
  "name": "Cobalt",
  "hex": "#0047AB",
  "difficulty": 1
}, {
  "name": "Hazelnut",
  "hex": "#996633",
  "difficulty": 1
}, {
  "name": "Pistachio",
  "hex": "#93C572",
  "difficulty": 1
}, {
  "name": "Hibiscus",
  "hex": "#ED1C24",
  "difficulty": 1
}, {
  "name": "Sandstone",
  "hex": "#796D62",
  "difficulty": 1
}, {
  "name": "Cardinal",
  "hex": "#C41E3A",
  "difficulty": 1
}, {
  "name": "Sherbet",
  "hex": "#FFD8B1",
  "difficulty": 1
}, {
  "name": "Nutmeg",
  "hex": "#8C5D2C",
  "difficulty": 1
}, {
  "name": "Peppermint",
  "hex": "#C1F0D9",
  "difficulty": 1
}, {
  "name": "Velvet",
  "hex": "#750851",
  "difficulty": 1
}, {
  "name": "Lagoon",
  "hex": "#006994",
  "difficulty": 1
}, {
  "name": "Rosewood",
  "hex": "#65000B",
  "difficulty": 1
}, {
  "name": "Sage",
  "hex": "#BCB88A",
  "difficulty": 1
}, {
  "name": "Carnation",
  "hex": "#FFA6C9",
  "difficulty": 1
}, {
  "name": "Linen",
  "hex": "#FAF0E6",
  "difficulty": 1
}, {
  "name": "Tulip",
  "hex": "#FF878D",
  "difficulty": 1
}, {
  "name": "Hazel",
  "hex": "#8E7618",
  "difficulty": 1
}, {
  "name": "Champagne",
  "hex": "#F7E7CE",
  "difficulty": 1
}, {
  "name": "Oyster",
  "hex": "#D4D4D4",
  "difficulty": 1
}, {
  "name": "Eggplant",
  "hex": "#614051",
  "difficulty": 1
}, {
  "name": "Dusk",
  "hex": "#897f98",
  "difficulty": 1
}, {
  "name": "Raspberry",
  "hex": "#E30B5C",
  "difficulty": 1
}, {
  "name": "Sunset",
  "hex": "#FAD6A5",
  "difficulty": 1
}, {
  "name": "Moonlight",
  "hex": "#ACACAC",
  "difficulty": 1
}, {
  "name": "Blossom",
  "hex": "#F2BAC9",
  "difficulty": 1
}, {
  "name": "Obsidian",
  "hex": "#000000",
  "difficulty": 1
}, {
  "name": "Meadow",
  "hex": "#388E3C",
  "difficulty": 1
}, {
  "name": "Abyss",
  "hex": "#000C15",
  "difficulty": 1
}, {
  "name": "Sunrise",
  "hex": "#FFCC33",
  "difficulty": 1
}, {
  "name": "Mist",
  "hex": "#D7E4F2",
  "difficulty": 1
}, {
  "name": "Evergreen",
  "hex": "#014F0D",
  "difficulty": 1
}, {
  "name": "Midnight",
  "hex": "#191970",
  "difficulty": 1
}, {
  "name": "Butterfly",
  "hex": "#7A5DC7",
  "difficulty": 1
}, {
  "name": "Maple",
  "hex": "#D2691E",
  "difficulty": 1
}, {
  "name": "Silk",
  "hex": "#F9E4C6",
  "difficulty": 1
}, {
  "name": "Bamboo",
  "hex": "#DAEAD8",
  "difficulty": 1
}, {
  "name": "Twilight",
  "hex": "#4C3449",
  "difficulty": 1
}, {
  "name": "Butterscotch",
  "hex": "#E69E5C",
  "difficulty": 1
}, {
  "name": "Graphite",
  "hex": "#383838",
  "difficulty": 1
}, {
  "name": "Cedar",
  "hex": "#BDB76B",
  "difficulty": 1
}, {
  "name": "Basil",
  "hex": "#3D8B37",
  "difficulty": 1
}, {
  "name": "Onyx",
  "hex": "#464646",
  "difficulty": 1
}, {
  "name": "Honeysuckle",
  "hex": "#FFAB87",
  "difficulty": 1
}, {
  "name": "Ivy",
  "hex": "#2E8B57",
  "difficulty": 1
}, {
  "name": "Clementine",
  "hex": "#F96D00",
  "difficulty": 1
}, {
  "name": "Grapefruit",
  "hex": "#FF6347",
  "difficulty": 1
}, {
  "name": "Kiwi",
  "hex": "#8EE53F",
  "difficulty": 1
}, {
  "name": "Watermelon",
  "hex": "#FC6C85",
  "difficulty": 1
}, {
  "name": "Granite",
  "hex": "#676767",
  "difficulty": 1
}, {
  "name": "Walnut",
  "hex": "#773F1A",
  "difficulty": 1
}, {
  "name": "Mahogany",
  "hex": "#C04000",
  "difficulty": 1
}, {
  "name": "Oak",
  "hex": "#C0B283",
  "difficulty": 1
}, {
  "name": "Mushroom",
  "hex": "#BA8759",
  "difficulty": 1
}, {
  "name": "Rust",
  "hex": "#B7410E",
  "difficulty": 1
}, {
  "name": "Cantaloupe",
  "hex": "#FFA500",
  "difficulty": 1
}, {
  "name": "Jasmine",
  "hex": "#F8DE7E",
  "difficulty": 1
}, {
  "name": "Kale",
  "hex": "#5A7247",
  "difficulty": 1
}, {
  "name": "Pecan",
  "hex": "#B87D5B",
  "difficulty": 1
}, {
  "name": "Sepia",
  "hex": "#704214",
  "difficulty": 1
}, {
  "name": "Spruce",
  "hex": "#3B5B34",
  "difficulty": 1
}, {
  "name": "Swamp",
  "hex": "#001B1C",
  "difficulty": 1
}, {
  "name": "Tropical Rain Forest",
  "hex": "#00755E",
  "difficulty": 1
}];
exports.NamedColors1 = NamedColors1;
const NamedColors2 = [{
  "name": "Saffron",
  "hex": "#F4C430",
  "difficulty": 2
}, {
  "name": "Indigo",
  "hex": "#4B0082",
  "difficulty": 2
}, {
  "name": "Vermilion",
  "hex": "#E34234",
  "difficulty": 2
}, {
  "name": "Orchid",
  "hex": "#DA70D6",
  "difficulty": 2
}, {
  "name": "Blush",
  "hex": "#DE5D83",
  "difficulty": 2
}, {
  "name": "Sienna",
  "hex": "#A0522D",
  "difficulty": 2
}, {
  "name": "Peacock",
  "hex": "#33A1C9",
  "difficulty": 2
}, {
  "name": "Papaya",
  "hex": "#FFEFD5",
  "difficulty": 2
}, {
  "name": "Amaranth",
  "hex": "#E52B50",
  "difficulty": 2
}, {
  "name": "Currant",
  "hex": "#AA4B6B",
  "difficulty": 2
}, {
  "name": "Turmeric",
  "hex": "#EAC117",
  "difficulty": 2
}, {
  "name": "Poppy",
  "hex": "#E63946",
  "difficulty": 2
}, {
  "name": "Persimmon",
  "hex": "#FF6347",
  "difficulty": 2
}, {
  "name": "Marmalade",
  "hex": "#FFA500",
  "difficulty": 2
}, {
  "name": "Beryl",
  "hex": "#E6FFFE",
  "difficulty": 2
}, {
  "name": "Thistle",
  "hex": "#D8BFD8",
  "difficulty": 2
}, {
  "name": "Ochre",
  "hex": "#CC7722",
  "difficulty": 2
}, {
  "name": "Citronella",
  "hex": "#C5E17A",
  "difficulty": 2
}, {
  "name": "Eucalyptus",
  "hex": "#44D7A8",
  "difficulty": 2
}, {
  "name": "Paprika",
  "hex": "#8C3813",
  "difficulty": 2
}, {
  "name": "Peony",
  "hex": "#B768A2",
  "difficulty": 2
}, {
  "name": "Tawny",
  "hex": "#CD5700",
  "difficulty": 2
}, {
  "name": "Chartreuse",
  "hex": "#dfff00",
  "difficulty": 2
}, {
  "name": "Cypress",
  "hex": "#5C7E61",
  "difficulty": 2
}, {
  "name": "Bisque",
  "hex": "#FFE4C4",
  "difficulty": 2
}, {
  "name": "Wisteria",
  "hex": "#C9A0DC",
  "difficulty": 2
}, {
  "name": "Cerulean",
  "hex": "#007BA7",
  "difficulty": 2
}, {
  "name": "Pansy",
  "hex": "#78184A",
  "difficulty": 2
}, {
  "name": "Russet",
  "hex": "#80461B",
  "difficulty": 2
}, {
  "name": "Terra",
  "hex": "#964B00",
  "difficulty": 2
}, {
  "name": "Harvest",
  "hex": "#BB7431",
  "difficulty": 2
}, {
  "name": "Storm",
  "hex": "#4F666A",
  "difficulty": 2
}, {
  "name": "Rosemary",
  "hex": "#437C17",
  "difficulty": 2
}, {
  "name": "Lush",
  "hex": "#7CB342",
  "difficulty": 2
}, {
  "name": "Rainforest",
  "hex": "#005249",
  "difficulty": 2
}, {
  "name": "Mellow",
  "hex": "#F8BBD0",
  "difficulty": 2
}, {
  "name": "Majestic",
  "hex": "#8A2BE2",
  "difficulty": 2
}, {
  "name": "Opal",
  "hex": "#A8C3BC",
  "difficulty": 2
}, {
  "name": "Tranquil",
  "hex": "#F0FFFF",
  "difficulty": 2
}, {
  "name": "Opulent",
  "hex": "#FFD700",
  "difficulty": 2
}, {
  "name": "Willow",
  "hex": "#8F9779",
  "difficulty": 2
}, {
  "name": "Coastal",
  "hex": "#006994",
  "difficulty": 2
}, {
  "name": "Magnolia",
  "hex": "#F8F4FF",
  "difficulty": 2
}, {
  "name": "Jasper",
  "hex": "#D73B3E",
  "difficulty": 2
}, {
  "name": "Fig",
  "hex": "#4F2E4F",
  "difficulty": 2
}, {
  "name": "Limestone",
  "hex": "#F1E7D2",
  "difficulty": 2
}, {
  "name": "Quartz",
  "hex": "#E0D5C6",
  "difficulty": 2
}, {
  "name": "Terracotta",
  "hex": "#E2725B",
  "difficulty": 2
}, {
  "name": "Teak",
  "hex": "#B8860B",
  "difficulty": 2
}, {
  "name": "Zebrawood",
  "hex": "#E4D96F",
  "difficulty": 2
}, {
  "name": "Vermillion",
  "hex": "#FF4D00",
  "difficulty": 2
}, {
  "name": "Tusk",
  "hex": "#E4DED0",
  "difficulty": 2
}, {
  "name": "Periwinkle",
  "hex": "#CCCCFF",
  "difficulty": 2
}, {
  "name": "Seashell",
  "hex": "#FFF5EE",
  "difficulty": 2
}, {
  "name": "Mink",
  "hex": "#654321",
  "difficulty": 2
}, {
  "name": "Pebble",
  "hex": "#CFCFC4",
  "difficulty": 2
}, {
  "name": "Cornsilk",
  "hex": "#FFF8DC",
  "difficulty": 2
}, {
  "name": "Umber",
  "hex": "#635147",
  "difficulty": 2
}, {
  "name": "Azalea",
  "hex": "#F7C8DA",
  "difficulty": 2
}, {
  "name": "Claret",
  "hex": "#7F1734",
  "difficulty": 2
}, {
  "name": "Cornflower",
  "hex": "#6495ED",
  "difficulty": 2
}, {
  "name": "Flax",
  "hex": "#EEDC82",
  "difficulty": 2
}, {
  "name": "Praline",
  "hex": "#CC9966",
  "difficulty": 2
}, {
  "name": "Stratos",
  "hex": "#000741",
  "difficulty": 2
}, {
  "name": "Smalt",
  "hex": "#003399",
  "difficulty": 2
}, {
  "name": "Cyprus",
  "hex": "#003E40",
  "difficulty": 2
}, {
  "name": "Crusoe",
  "hex": "#004816",
  "difficulty": 2
}, {
  "name": "Camarone",
  "hex": "#00581A",
  "difficulty": 2
}, {
  "name": "Lochmara",
  "hex": "#007EC7",
  "difficulty": 2
}, {
  "name": "Azure Radiance",
  "hex": "#007FFF",
  "difficulty": 2
}];
exports.NamedColors2 = NamedColors2;

/***/ }),

/***/ 3464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RadialColorAligner = void 0;
const tslib_1 = __webpack_require__(655);
const event_emitter_1 = __webpack_require__(2986);
const sprite_fx_1 = __webpack_require__(4712);
const nanoid_1 = __webpack_require__(4296);
const util_1 = __webpack_require__(1110);
const lodash_1 = __webpack_require__(6486);
function multiplyArray(arr, multiplier) {
  const result = [];
  arr.forEach(element => {
    for (let i = 0; i < multiplier; i++) {
      result.push(element);
    }
  });
  return result;
}
/**
 * Generates a sprite which shows the overlap between a slice of two tiers.
 * NOTE: Ended up not using since this only really makes sense when the player knows which color they
 * are locking in.
 *
 * @param scene
 * @param radius
 * @param tier1
 * @param tier2
 * @returns
 */
function generateOverlapSlice(scene, radius, tier1, tier2) {
  /**
   * Just fumbled around until these calculations worked. No idea the logic behind it.
   */
  let x = scene.cameras.main.width / 2;
  let y = scene.cameras.main.height / 2;
  let radiusClamped = Phaser.Math.Clamp(radius, 0, scene.cameras.main.width / 2);
  let minRad = Math.min(tier1.sprite.rotation, tier2.sprite.rotation);
  let maxRad = Math.max(tier1.sprite.rotation, tier2.sprite.rotation);
  let sliceSizeRad = Phaser.Math.DegToRad(tier1.sliceSize);
  let textureKey = (0, nanoid_1.nanoid)();
  let g = scene.add.graphics();
  g.lineStyle(40, 0xffffff, 1);
  g.beginPath();
  g.arc(x, y, radiusClamped, minRad + sliceSizeRad, maxRad, true);
  g.strokePath();
  g.generateTexture(textureKey);
  g.destroy();
  return scene.add.sprite(x, y, textureKey);
}
function generateRadialSpriteGroup(scene, opts) {
  let x = scene.cameras.main.width / 2;
  let y = scene.cameras.main.height / 2;
  let radius = Phaser.Math.Clamp(opts.radius, 0, scene.cameras.main.width / 2);
  /**
   * Generate a texture for a single slice of the radial group. This texture will be used for all the sprites.
   * Generating a new texture for each one is way too resource-heavy to do.
   */
  let g = scene.add.graphics();
  g.visible = false;
  let g2 = scene.add.graphics();
  g2.visible = false;
  let tiers = [];
  for (let i = 0; i < opts.colors.length; i++) {
    //loop through 3d array of colors (i.e. tiers)
    let colors = opts.colors[i];
    if (colors.length % 4 !== 0 || colors.length > 16) {
      throw new Error('generateRadialSpriteGroup(): Color array length must be divisible by 4 and have a total of at most 16 elements.');
    }
    let angleDivisions = 360 / colors.length;
    let tierRadius = radius - (i * 4 + i * opts.strokeWidth); //Adding the extra `i` here to allow for a pixel of padding between each ring
    let path = new Phaser.Geom.Circle(x, y, tierRadius);
    let colliders = [];
    // let colliderMultiplier = 20 / colors.length; //Used to generate more colliders if our color segments are going to be large
    // let colorsFilled = multiplyArray(colors, colliderMultiplier); //Expand colors array to account for excess colliders
    for (let j = 0; j < colors.length; j++) {
      //loop through one of the arrays of colors 
      let angleStart = Phaser.Math.DegToRad(j * angleDivisions);
      let angleEnd = Phaser.Math.DegToRad((j + 1) * angleDivisions);
      //let tint = j === 0 ? colors[j].num() : 0xffffff00;
      if (j % 2 !== 0) continue;
      g.lineStyle(opts.strokeWidth, colors[j].num(), 1);
      g.beginPath();
      g.arc(x, y, tierRadius, angleStart, angleEnd, false, .01);
      g.strokePath();
      // let sprite = scene.add.sprite(0, 0, '_');
      //     sprite.scale = tierRadius / radius;
      //     //sprite.setDisplayOrigin(.5, .5);
      //     sprite.alpha = .1;
      //     //sprite.visible = false;
      //     sprite.setInteractive();
      //     sprite.input.alwaysEnabled = true; //Ensures sprite recieves input when invisible
      //     sprite.setData({
      //         tier: i,
      //         color: colorsFilled[j]
      //     })
      //     sprite.setDepth(100);
      // colliders.push(sprite);
    }

    let halfAngleDivision = angleDivisions / 2;
    Phaser.Actions.PlaceOnCircle(colliders, path, Phaser.Math.DegToRad(halfAngleDivision), Phaser.Math.DegToRad(360 + halfAngleDivision));
    //Phaser.Actions.PlaceOnCircle(colliders, path, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360));
    let textureKey = `radialtier-${(0, nanoid_1.nanoid)()}`;
    g.generateTexture(textureKey);
    let sprite = scene.add.sprite(x, y, textureKey);
    sprite.angle = Phaser.Math.Between(0, 360); //Assign a random angle
    //Generate the plain white arc used for placement effect
    let fxTextureKey = (0, nanoid_1.nanoid)();
    g2.lineStyle(opts.strokeWidth, 0xffffff, 1);
    g2.beginPath();
    g2.arc(x, y, tierRadius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false);
    g2.strokePath();
    g2.generateTexture(fxTextureKey);
    let fxSprite = scene.add.sprite(x, y, fxTextureKey);
    fxSprite.alpha = 0;
    tiers.push({
      sliceSize: angleDivisions,
      active: true,
      tier: i,
      path,
      sprite: sprite,
      fxSprite: fxSprite,
      colliders: colliders,
      speed: opts.speed + .1 * i
    });
    g.clear();
    g2.clear();
  }
  g.destroy();
  g2.destroy();
  return tiers;
}
class RadialColorAligner {
  constructor(scene, colors) {
    let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.events = new event_emitter_1.EventEmitter();
    this.tiers = [];
    this.centerX = 0;
    this.centerY = 0;
    this.selected = null;
    this.maxStepRatio = .003;
    //private stepDirectionMultiplier: number;
    this.directionMultipliers = [];
    this.tierLockIndex = 0;
    this.baseRequiredAccuracy = .75;
    this.locked = false;
    this.scene = scene;
    this.opts = Object.assign({
      speed: .5,
      direction: 'left',
      x: '50%',
      y: '50%',
      radius: scene.cameras.main.width / 2 * .9,
      strokeWidth: 40
    }, opts);
    let textureKey = `radialtexture-${(0, nanoid_1.nanoid)()}`;
    this.centerX = typeof this.opts.x === 'string' ? (0, util_1.resolvePercentX)(scene, this.opts.x) : this.opts.x;
    this.centerY = typeof this.opts.y === 'string' ? (0, util_1.resolvePercentY)(scene, this.opts.y) : this.opts.y;
    this.tiers = generateRadialSpriteGroup(scene, {
      colors: colors,
      speed: this.opts.speed,
      radius: this.opts.radius,
      strokeWidth: this.opts.strokeWidth,
      textureKey: textureKey,
      x: this.centerX,
      y: this.centerY
    });
    this.donut = scene.add.sprite(this.centerX, this.centerY, 'donut');
    this.donut.alpha = 0;
    this.donut.setDepth(200);
    // this.textPopup = new TextFadePopup(scene, { x: this.centerX, y: this.centerY });
    // this.textPopup.setFontFamily('Montserrat');
    // this.textPopup.setColor('#ffffff');
    // this.textPopup.setOrigin(.5, .5);
    this.text = (0, sprite_fx_1.growText)(this.scene, '', {
      //shimmer: true,
      x: this.centerX,
      y: this.centerY,
      enterDuration: 250,
      exitDuration: 150,
      style: {
        fontFamily: 'Montserrat',
        fontSize: '18px'
      }
    });
    //this.stepDirectionMultiplier = this.opts.direction === 'left' ? -1 : 1; //Step sign to determine direction
    colors.forEach((c, i) => {
      let multiplier = 1;
      if (this.opts.direction === 'left') multiplier = -1;else if (this.opts.direction === 'random') multiplier = (0, lodash_1.sample)([1, -1]);
      this.directionMultipliers.push(multiplier);
    });
    this.stepRatio = this.opts.speed * this.maxStepRatio; //Our actual step ratio is a percentage of our max percentage
    this.scene.registerUpdate(this);
  }
  getTierSpeed(tier, delta) {
    var _a;
    this.stepRatio = this.tiers[tier].speed * this.maxStepRatio; //Our actual step ratio is a percentage of our max percentage
    let deltaStep = ((_a = this.directionMultipliers[tier]) !== null && _a !== void 0 ? _a : 1) * (this.stepRatio * delta);
    return deltaStep;
  }
  update(time, delta) {
    this.tiers.forEach((tier, i) => {
      if (tier.active) {
        tier.sprite.rotation += this.getTierSpeed(i, delta);
      }
    });
  }
  lockTier() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      if (this.locked) return;
      this.locked = true;
      let tier = this.tiers[this.tierLockIndex];
      let tierParent = this.tiers[this.tierLockIndex - 1];
      if (tier) {
        tier.active = false;
        let isFinalTier = this.tierLockIndex === this.tiers.length - 1;
        let accuracyLeniency = Phaser.Math.Clamp(this.tierLockIndex - 1, 0, Infinity) * .075;
        let requiredCurrentAccuracy = .8 - accuracyLeniency,
          requiredAvgAccuracy = .65,
          currentAccuracy = tierParent ? this.getRotationAccuracyForTiers(tier, tierParent) : 1,
          currentAvgAccuracy = this.getRotationAccuracy().average;
        /**
         * Is final tier, check total average accuracy
         */
        if (isFinalTier) {
          /**
           * For final test, we check both the current accuracy and the average accuracy. If the user performed
           * poorly on the final tier, but performed well on the previous tiers, we will still pass them.
           */
          if (currentAccuracy < requiredCurrentAccuracy && currentAvgAccuracy < requiredAvgAccuracy) {
            this.failTier(currentAvgAccuracy);
            return;
          }
          this.events.emit('complete');
          this.tiers.forEach(t => {
            t.active = true;
            t.speed = 3;
          });
          this.events.emit('lock');
          yield this.flashTier(this.tierLockIndex, currentAccuracy);
          this.events.emit('success', currentAvgAccuracy);
          return;
          /**
           * Is not final tier, check accuracy of current tier and ensure it is not so terrible
           * that it just ends the game.
           */
        } else if (currentAccuracy < requiredCurrentAccuracy) {
          this.failTier(currentAccuracy);
          return;
        }
        this.events.emit('lock');
        this.flashTier(this.tierLockIndex, currentAccuracy, this.tierLockIndex === 0);
        this.tierLockIndex += 1;
      }
      this.locked = false;
    });
  }
  failTier(accuracy) {
    this.flashTier(this.tierLockIndex, accuracy);
    this.events.emit('fail');
  }
  flashTier(index, accuracy) {
    let flashOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let tier = this.tiers[index];
    if (tier) {
      let {
        fxSprite
      } = this.tiers[index];
      fxSprite.alpha = .5;
      fxSprite.scale = 1;
      fxSprite.setDepth(0);
      let rating = 'Perfect!';
      let tint = '#0f0';
      if (accuracy <= .75) {
        rating = 'Bad!';
        tint = '#FF776F';
      } else if (accuracy <= .8) {
        rating = 'Poor!';
        tint = '#FED543';
      } else if (accuracy < .95) {
        rating = 'Good!';
        tint = '#0f0';
      }
      return Promise.all([this.text.enter({
        text: rating,
        shimmer: accuracy >= .95,
        style: {
          color: accuracy >= .95 ? '#ffffff' : tint
        }
      }), new Promise(res => {
        this.scene.tweens.add({
          ease: Phaser.Math.Easing.Quartic.Out,
          targets: fxSprite,
          alpha: 0,
          scale: 2,
          duration: 1000,
          onComplete: () => {
            this.text.exit();
            res(null);
          }
        });
      })]);
    }
  }
  getRotationAccuracyForTiers(tier1, tier2) {
    let min = Phaser.Math.RadToDeg(Math.min(tier1.sprite.rotation, tier2.sprite.rotation));
    let max = Phaser.Math.RadToDeg(Math.max(tier1.sprite.rotation, tier2.sprite.rotation));
    let split = Phaser.Math.Clamp(1 - (max - min) / tier1.sliceSize, 0, 1);
    return split;
  }
  /**
   * Returns two values, the average difference of rotation for all the disks as a percentage value and
   * the difference between the two disks with the greatest separation (also as a percentage). The average
   * can be used to determine how well the player performed while the min/max can tell you whether they
   * managed to get overlap on all disks. A value of zero here would indicate that they did not.
   *
   */
  getRotationAccuracy() {
    let sliceSize = this.tiers[0].sliceSize; //Currently assuming all slice sizes are the same
    let rotations = this.tiers.map(t => t.sprite.rotation);
    // let average = Phaser.Math.Clamp(rotations.reduce((acc, rotation, i) => {
    //     if (i !== 0){
    //         let compare = [rotations[i], rotations[i - 1]];
    //         let min = Phaser.Math.RadToDeg(Math.min(...compare));
    //         let max = Phaser.Math.RadToDeg(Math.max(...compare));
    //         console.log("Accuracy for index", i, 1 - ((max - min) / sliceSize));
    //         acc += 1 - ((max - min) / sliceSize);
    //     }
    //     return acc;
    // }, 0) / rotations.length, 0 , 1);
    let average = this.tiers.reduce((acc, tier, i) => {
      if (i !== 0) {
        // let compare = [rotations[i], rotations[i - 1]];
        // let min = Phaser.Math.RadToDeg(Math.min(...compare));
        // let max = Phaser.Math.RadToDeg(Math.max(...compare));
        // console.log("Accuracy for index", i, 1 - ((max - min) / sliceSize));
        acc += this.getRotationAccuracyForTiers(this.tiers[i], this.tiers[i - 1]);
      }
      return acc;
    }, 0) / (this.tiers.length - 1);
    let min = Phaser.Math.RadToDeg(Math.min(...rotations));
    let max = Phaser.Math.RadToDeg(Math.max(...rotations));
    let split = Phaser.Math.Clamp(1 - (max - min) / sliceSize, 0, 1);
    return {
      average,
      split
    };
  }
  enter() {
    let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let originalSpeed = this.opts.speed;
    this.opts.speed = 5;
    return Promise.all([new Promise((res, rej) => {
      this.scene.tweens.add({
        ease: Phaser.Math.Easing.Quartic.In,
        targets: this.opts,
        speed: originalSpeed,
        duration: 1000,
        delay: delay,
        onComplete: () => res(null)
      });
    }), new Promise((res, rej) => {
      this.tiers.forEach(t => t.sprite.alpha = 0);
      this.scene.tweens.add({
        ease: Phaser.Math.Easing.Linear,
        targets: this.tiers.map(t => t.sprite),
        alpha: 1,
        duration: 1000,
        delay: delay,
        onComplete: () => res(null)
      });
    })]);
  }
  leave() {
    let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      // let toScale = Phaser.Utils.Array.GetRandom([0, 3]);
      // let arr = toScale > 0 ? this.tiers : [...this.tiers].reverse();
      let toScale = 3; //NOTE: Going to scale=0 looks kind of like a toilet flushing so...I removed it for now
      let arr = this.tiers;
      let promises = arr.map((tier, i) => {
        return Promise.all([new Promise((res, rej) => {
          this.scene.tweens.add({
            ease: Phaser.Math.Easing.Quadratic.Out,
            targets: tier.sprite,
            scale: toScale,
            duration: 500,
            delay: i * 100,
            onComplete: () => res(null)
          });
        }), new Promise((res, rej) => {
          this.scene.tweens.add({
            ease: Phaser.Math.Easing.Quadratic.Out,
            targets: tier.sprite,
            alpha: 0,
            duration: 500,
            delay: i * 100,
            onComplete: () => res(null)
          });
        })]);
      });
      yield Promise.all(promises);
      this.scene.unregisterUpdate(this);
    });
  }
  start() {
    this.scene.registerUpdate(this);
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  destroy() {
    this.scene.unregisterUpdate(this);
    this.text.destroy();
    this.tiers.forEach(t => t.sprite.destroy());
    this.events.removeAllListeners();
  }
}
exports.RadialColorAligner = RadialColorAligner;

/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ScrollingColorPicker = void 0;
const event_emitter_1 = __webpack_require__(2986);
const sprite_fx_1 = __webpack_require__(4712);
class ScrollingColorPicker {
  constructor(scene, colors) {
    let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.events = new event_emitter_1.EventEmitter();
    this.buttonWidth = 0;
    this.scene = scene;
    this.colors = [...colors];
    this.opts = Object.assign({
      stackBeneath: null,
      speed: .5,
      direction: 'left',
      padding: 0,
      buttonWidth: 30,
      y: '50%'
    }, opts);
    this.buttonWidth = this.opts.buttonWidth;
    /**
     * Calculate our step based on the "speed" value in opts. The speed value provided is a value between 0-1 which
     * is multiplied against a (max) percentage of the total screen width. This is necessary to normalize the scrolling
     * speed across different screen widths.
     */
    // let stepDirectionMultiplier = this.opts.direction === 'left' ? -1 : 1; //Step sign to determine direction
    // let maxStepRatio = .005; //Max percentage of scene width allowed for step
    // let stepRatio = this.opts.speed * maxStepRatio; //Our actual step ratio is a percentage of our max percentage
    // this.step = stepDirectionMultiplier * (scene.cameras.main.width * stepRatio);
    /**
     * Width of the wrap container must be the exact width of each of its items including padding between them
     */
    let wrapContainerWidth = (this.buttonWidth * 2 + this.opts.padding) * colors.length;
    let y = 0;
    if (this.opts.stackBeneath) {
      y = this.opts.stackBeneath.wrapRect.bottom;
    } else {
      y = typeof this.opts.y === 'string' ? parseInt(this.opts.y) / 100 * scene.cameras.main.height : this.opts.y;
      y -= this.opts.buttonWidth;
    }
    /**
     * Create wrap rectangle at given
     */
    this.wrapRect = new Phaser.Geom.Rectangle(0, y, wrapContainerWidth, 100);
    this.wrapRect.centerX = scene.cameras.main.width / 2;
    /**
     * Generate buttons
     */
    this.buttons = this.colors.map((color, i) => {
      let x = this.buttonWidth * 2 * i + this.opts.padding * (i + 1); //, y = 0;
      let circle = this.scene.add.circle(x, y, this.buttonWidth, color.num());
      circle.setInteractive();
      return circle;
    });
    this.scene.input.on('gameobjectdown', this.handlePointerDown, this);
    this.scene.registerUpdate(this);
  }
  handlePointerDown(pointer, gameObject) {
    let index = this.buttons.indexOf(gameObject);
    if (index !== -1) {
      this.events.emit('select', this.colors[index]);
      this.scene.events.removeListener('gameobjectdown', this.handlePointerDown, this);
    }
  }
  update(time, delta) {
    let stepDirectionMultiplier = this.opts.direction === 'left' ? -1 : 1; //Step sign to determine direction
    let maxStepRatio = .4; //Max percentage of scene width allowed for step
    let stepRatio = this.opts.speed * maxStepRatio; //Our actual step ratio is a percentage of our max percentage
    let deltaStep = stepDirectionMultiplier * (stepRatio * delta);
    Phaser.Actions.IncX(this.buttons, deltaStep, 0);
    Phaser.Actions.WrapInRectangle(this.buttons, this.wrapRect);
  }
  enter() {
    let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let originalSpeed = this.opts.speed;
    this.opts.speed = 4;
    return Promise.all([new Promise((res, rej) => {
      this.scene.tweens.add({
        ease: Phaser.Math.Easing.Linear,
        targets: this.opts,
        speed: originalSpeed,
        duration: 1000,
        delay: delay,
        onComplete: () => res(null)
      });
    }), new Promise((res, rej) => {
      this.buttons.forEach(b => b.alpha = 0);
      this.scene.tweens.add({
        ease: Phaser.Math.Easing.Linear,
        targets: this.buttons,
        alpha: 1,
        duration: 1000,
        delay: delay,
        onComplete: () => res(null)
      });
    })]);
  }
  leave() {
    this.scene.unregisterUpdate(this);
    return (0, sprite_fx_1.scatter)(this.buttons);
  }
  destroy() {
    this.scene.unregisterUpdate(this);
    this.scene.events.removeListener('gameobjectdown', this.handlePointerDown, this);
    this.buttons.forEach(b => b.destroy());
    this.colors = [];
    this.events.removeAllListeners();
  }
  stop() {
    this.scene.unregisterUpdate(this);
  }
  start() {
    this.scene.registerUpdate(this);
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
}
exports.ScrollingColorPicker = ScrollingColorPicker;

/***/ }),

/***/ 5190:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRandomY = exports.getRandomX = exports.getCenterY = exports.getCenterX = exports.getCenterVariant = exports.gameSetLeave = exports.getGameSetTransitions = void 0;
const lodash_1 = __webpack_require__(6486);
const getRandomX = () => Phaser.Math.Between(-window.innerWidth, window.innerWidth);
exports.getRandomX = getRandomX;
const getRandomY = () => Phaser.Math.Between(-window.innerHeight, window.innerHeight);
exports.getRandomY = getRandomY;
const getCenterX = () => window.innerWidth / 2;
exports.getCenterX = getCenterX;
const getCenterY = () => window.innerHeight / 2;
exports.getCenterY = getCenterY;
const getGameSetTransitions = function (index) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    delay: 25 * index,
    initial: {
      opacity: 0,
      scale: 1,
      y: 300,
      x: 0
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 500,
        ease: 'easeOut',
        onComplete: () => {
          var _a;
          return (_a = opts.onComplete) === null || _a === void 0 ? void 0 : _a.call(opts, index);
        }
      }
    },
    variants: {
      'up': {
        opacity: 0,
        y: -300,
        transition: {
          delay: (25 - index) * index,
          duration: 225,
          ease: 'easeIn'
        }
      },
      // 'down': {
      //     opacity: 0,
      //     y: 300,
      //     transition: {
      //         delay: 25 * index,
      //         duration: 250,
      //         ease: 'easeOut'
      //     },
      // },
      'shrink': {
        opacity: 0,
        scale: 0,
        transition: {
          delay: (25 - index) * index,
          duration: 225,
          ease: 'easeIn'
        }
      },
      'grow': {
        opacity: 0,
        scale: 3,
        transition: {
          delay: (25 - index) * index,
          duration: 225,
          ease: 'easeIn'
        }
      },
      'scatter': {
        opacity: 0,
        x: getRandomX(),
        y: getRandomY(),
        transition: {
          duration: 500,
          ease: 'easeIn'
        }
      }
    }
  };
};
exports.getGameSetTransitions = getGameSetTransitions;
const getCenterVariant = target => {
  let [centerX, centerY] = [getCenterX(), getCenterY()];
  let rect = target.getBoundingClientRect();
  return {
    opacity: 0,
    x: centerX - (rect.left + rect.width / 2),
    y: centerY - (rect.top + rect.height / 2),
    transition: {
      duration: 400,
      ease: 'easeIn'
    }
  };
};
exports.getCenterVariant = getCenterVariant;
let AllVariants = ['up', 'scatter', 'collect', 'grow', 'shrink'];
const gameSetLeave = function (motions) {
  let excludeVariants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const variations = (0, lodash_1.difference)(AllVariants, excludeVariants);
  const transitionName = Phaser.Utils.Array.GetRandom(variations);
  let proms = [];
  for (let key in motions) {
    // let f = motions[key];
    let target = motions[key].target;
    let variant = transitionName === 'collect' ? getCenterVariant(target) : transitionName;
    let prom = motions[key].apply(variant);
    if (prom) proms.push(prom);
  }
  return Promise.all(proms);
};
exports.gameSetLeave = gameSetLeave;

/***/ }),

/***/ 7778:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
const tslib_1 = __webpack_require__(655);
const core_1 = __webpack_require__(9895);
const admob_1 = __webpack_require__(4812);
const motion_1 = __webpack_require__(5532);
const vue_1 = __webpack_require__(6765);
const pinia_1 = __webpack_require__(4345);
__webpack_require__(9755);
const index_vue_1 = tslib_1.__importDefault(__webpack_require__(9516));
const preload_vue_1 = tslib_1.__importDefault(__webpack_require__(537));
const menu_vue_1 = tslib_1.__importDefault(__webpack_require__(9554));
const game_vue_1 = tslib_1.__importDefault(__webpack_require__(4833));
const sortable_core_esm_js_1 = tslib_1.__importStar(__webpack_require__(6837));
console.log("Mode: " + "production");
console.log("DBMode: " + "prod");
console.log("PLatform: " + core_1.Capacitor.getPlatform());
//Clear all cookies (comment out before build!)
// localStorage.clear();
// document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
/**
 * Initialize admob
 */
admob_1.AdMob.initialize({
  requestTrackingAuthorization: false,
  testingDevices: ['42b01f05-ffc4-4cf0-b217-330352303658', '1e60e91934a19982b4c87634ea2e7e4e'],
  initializeForTesting: "production" === 'development'
});
// @ts-ignore
sortable_core_esm_js_1.default.mount(new sortable_core_esm_js_1.Swap());
let App = (0, vue_1.createApp)(index_vue_1.default);
App.use((0, pinia_1.createPinia)());
App.use(motion_1.MotionPlugin);
App.component('Preload', preload_vue_1.default).component('Menu', menu_vue_1.default).component('Game', game_vue_1.default);
App.mount('#app');

/***/ }),

/***/ 9834:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAchievmentStore = void 0;
const pinia_1 = __webpack_require__(4345);
const vue_1 = __webpack_require__(6765);
const util_1 = __webpack_require__(1110);
const achievements_1 = __webpack_require__(3717);
const themes_v2_1 = __webpack_require__(161);
/**
 * NOTE: The ref syntax below seen here `ref() as Ref<>` is apparently the way a ref has to be defined when
 * the type is a generic.
 */
const crossGameStorageKey = 'achievement-cross-game-stats';
const completedStorageKey = 'achievement-completed';
const useAchievmentStore = (0, pinia_1.defineStore)('achievement-store', () => {
  const persisted = (0, util_1.fromLocalStorage)('achievement-store', {
    credits: 25,
    completed: [],
    unlockedThemes: [],
    crossGameStats: (0, achievements_1.getCrossGameStats)()
  });
  const credits = (0, vue_1.ref)(persisted.credits);
  const completed = (0, vue_1.ref)(persisted.completed);
  const unlockedThemes = (0, vue_1.ref)(persisted.unlockedThemes);
  const crossGameStats = (0, vue_1.ref)((0, util_1.fromLocalStorage)(crossGameStorageKey, persisted.crossGameStats));
  const inGameStats = (0, vue_1.ref)((0, achievements_1.getInGameStats)());
  const registry = (0, vue_1.ref)(achievements_1.Achievements);
  const persist = () => {
    (0, util_1.toLocalStorage)('achievement-store', {
      credits: credits.value,
      completed: completed.value,
      unlockedThemes: unlockedThemes.value,
      crossGameStats: crossGameStats.value
    });
  };
  /**
   * Return `true` if the given achievement key has been recorded as completed
   *
   * @param key - the achievement key as defined in the registry
   * @returns
   */
  const isComplete = key => completed.value.includes(key);
  /**
   * Retrieve an achievement by its key
   *
   * @param key - the achievement key as defined in the registry
   * @returns
   */
  const getAchievement = key => registry.value[key];
  /**
   * Resets in-game stats only. Should be called whenever a new match starts.
   */
  const resetInGameStats = () => inGameStats.value = (0, achievements_1.getInGameStats)();
  /**
   * Resets all achievement completion states and all stats back to defaults
   */
  const reset = () => {
    completed.value = [];
    crossGameStats.value = (0, achievements_1.getCrossGameStats)();
    inGameStats.value = (0, achievements_1.getInGameStats)();
    persist();
  };
  /**
   * Shallow merge tracking stats and return any just-completed achievements.
   *
   * @param stats - partial stats object
   */
  const updateCrossGameStats = updater => {
    crossGameStats.value = Object.assign(Object.assign({}, crossGameStats.value), updater(crossGameStats.value));
    persist();
  };
  /**
   * Shallow merge match stats and return any just-completed achievements.
   */
  const updateInGameStats = updater => {
    inGameStats.value = Object.assign(Object.assign({}, inGameStats.value), updater(inGameStats.value));
  };
  const getStats = () => {
    return {
      crossGame: Object.assign({}, crossGameStats.value),
      inGame: Object.assign({}, inGameStats.value)
    };
  };
  const setCompleted = (key, achievement) => {
    if (registry.value[key]) {
      completed.value.push(key);
      credits.value += achievement.credits;
      persist();
    }
  };
  const getCredits = () => credits.value;
  const addCredits = count => {
    credits.value += count;
    persist();
  };
  const unlockTheme = themeKey => {
    var _a, _b;
    let theme = themes_v2_1.Themes[themeKey];
    if (!unlockedThemes.value.includes(themeKey) && credits.value >= ((_a = theme.credits) !== null && _a !== void 0 ? _a : 0)) {
      credits.value -= (_b = theme.credits) !== null && _b !== void 0 ? _b : 0;
      unlockedThemes.value.push(themeKey);
      persist();
      return true;
    }
    return false;
  };
  const isThemeUnlocked = themeKey => {
    let theme = themes_v2_1.Themes[themeKey];
    return !theme.credits || theme.credits === 0 || unlockedThemes.value.includes(themeKey);
  };
  const test = () => {
    let results = [];
    Object.entries(registry.value).forEach(entry => {
      let key = entry[0],
        achievement = entry[1];
      if (!completed.value.includes(key) && achievement.test(crossGameStats.value, inGameStats.value)) {
        results.push(achievement);
        setCompleted(key, achievement); //Update our internal completion list / credits
      }
    });

    return results;
  };
  const getProgress = key => {
    return achievements_1.Achievements[key].progress(crossGameStats.value, inGameStats.value, completed.value);
  };
  return {
    isComplete,
    getAchievement,
    resetInGameStats,
    reset,
    updateCrossGameStats,
    updateInGameStats,
    getStats,
    test,
    getCredits,
    addCredits,
    unlockTheme,
    isThemeUnlocked,
    getProgress
  };
});
exports.useAchievmentStore = useAchievmentStore;

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAudioStore = void 0;
const pinia_1 = __webpack_require__(4345);
const vue_1 = __webpack_require__(6765);
const device_util_1 = __webpack_require__(2338);
const util_1 = __webpack_require__(1110);
const global_1 = __webpack_require__(2127);
const useAudioStore = (0, pinia_1.defineStore)('audio-store', () => {
  let persisted = (0, util_1.fromLocalStorage)('audio-settings', {
    muted: false
  });
  const global = (0, global_1.useGlobalStore)();
  const muted = (0, vue_1.ref)(persisted.muted);
  /**
   * Listen for device events change
   */
  device_util_1.deviceEvents.on('appStateChange', state => {
    let scene = global.sceneState.scene;
    if (!scene) return;
    if (!state.isActive) {
      scene.game.sound.volume = 0;
      return;
    }
    if (!muted.value) {
      scene.game.sound.volume = 1;
    }
  });
  const persist = () => {
    localStorage.setItem('audio-settings', JSON.stringify({
      muted: muted.value
    }));
  };
  const init = () => {
    if (muted.value) {
      let scene = global.sceneState.scene;
      if (scene) {
        scene.game.sound.volume = 0;
      }
    }
  };
  const setMuted = m => {
    muted.value = m;
    let scene = global.sceneState.scene;
    if (scene) {
      scene.game.sound.volume = muted.value ? 0 : 1;
    }
    persist();
  };
  const play = (key, extra) => {
    var _a;
    (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.sound.play(key, extra);
  };
  const add = (key, config) => {
    var _a;
    return (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.sound.add(key, config);
  };
  const fadeIn = function (audio) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    let onComplete = arguments.length > 2 ? arguments[2] : undefined;
    audio.volume = 0;
    audio.play();
    let tweenTarget = {
      volume: 0
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.tweens.add({
        targets: tweenTarget,
        volume: 1,
        duration: duration,
        onUpdate: () => audio.volume = parseFloat(tweenTarget.volume.toFixed(2)),
        onComplete: () => {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete(audio);
          res(audio);
        }
      });
    });
  };
  const fadeOut = function (audio) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    let onComplete = arguments.length > 2 ? arguments[2] : undefined;
    let tweenTarget = {
      volume: 1
    }; //Use a proxy target because the tweens are too granular
    return new Promise((res, rej) => {
      var _a;
      (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.tweens.add({
        targets: tweenTarget,
        volume: 0,
        duration: duration,
        onUpdate: () => audio.volume = parseFloat(tweenTarget.volume.toFixed(2)),
        onComplete: () => {
          onComplete === null || onComplete === void 0 ? void 0 : onComplete(audio);
          res(audio);
        }
      });
    });
  };
  return {
    init,
    muted,
    setMuted,
    play,
    add,
    fadeIn,
    fadeOut
  };
});
exports.useAudioStore = useAudioStore;

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useGameStore = void 0;
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const pinia_1 = __webpack_require__(4345);
const event_emitter_1 = __webpack_require__(2986);
const composables_1 = __webpack_require__(755);
const NamedColors = tslib_1.__importStar(__webpack_require__(5606));
const lodash_1 = __webpack_require__(6486);
const global_1 = __webpack_require__(2127);
const util_1 = __webpack_require__(1110);
const ad_util_1 = __webpack_require__(2463);
const stats_1 = __webpack_require__(3058);
const theme_1 = __webpack_require__(7406);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const getMatchState = () => {
  return {
    gameOver: false,
    timedOut: false,
    completedAchievements: [],
    round: 1,
    score: 0,
    skips: 3,
    hintCount: 0,
    hasteCount: 0,
    precisionRounds: 0,
    precisionCount: 0,
    lastMatchSkipped: false,
    postRound: {
      score: 0,
      multipliers: []
    },
    difficulty: 4,
    colorsNamed: {
      colors0: new Set(),
      colors1: new Set(),
      colors2: new Set()
    }
  };
};
const useGameStore = (0, pinia_1.defineStore)('game-store', () => {
  const global = (0, global_1.useGlobalStore)();
  const theme = (0, theme_1.useThemeStore)();
  const stats = (0, stats_1.useStatsStore)();
  const events = new event_emitter_1.EventEmitter();
  const gameScene = (0, vue_1.shallowRef)();
  const paused = (0, vue_1.ref)(false);
  const postGameReady = (0, vue_1.ref)(false);
  const bannerRef = (0, vue_1.shallowRef)();
  // stats = ref<GameTypes.ServerStats>(getDefaultStats());
  const matchState = (0, vue_1.ref)(getMatchState());
  const clock = (0, composables_1.useCountdownClock)();
  const useReducedPadding = (0, vue_1.ref)(false);
  /**
   * Keeps track of post-game request data. Any items set to `false` imply that the request failed for whatever reason.
   */
  const requests = (0, vue_1.reactive)({
    statsData: false,
    interstitial: false
  });
  const on = (event, listener) => events.on(event, listener);
  const removeListener = (event, listener) => events.removeListener(event, listener);
  const restage = game => {
    paused.value = false;
    postGameReady.value = false;
    gameScene.value = game;
    clock.stop();
    clock.populateScene(gameScene.value);
    //stats.value = getDefaultStats();
    matchState.value = getMatchState();
    requests.interstitial = false;
    requests.statsData = false;
  };
  const hydrateBannerRef = ref => bannerRef.value = ref;
  const showBanner = (name, credits) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return (_a = bannerRef.value) === null || _a === void 0 ? void 0 : _a.enter(name, credits);
  });
  //const incrementScore = (count: number) => stats.value.score += count;
  const pause = () => {
    var _a;
    if (!matchState.value.gameOver) {
      paused.value = true;
      (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.scene.pause();
    }
  };
  const unpause = () => {
    var _a;
    if (!matchState.value.gameOver) {
      paused.value = false;
      (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.scene.resume();
    }
  };
  const end = function () {
    let timedOut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    unpause();
    matchState.value.gameOver = true;
    matchState.value.timedOut = timedOut;
  };
  const startBackgroundFx = tint => {
    var _a;
    return (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.startBackgroundFx(tint);
  };
  const togglePaused = () => {
    paused.value ? unpause() : pause();
  };
  const restartGame = () => {
    unpause();
    global.startScene('RestartGame');
  };
  const backToMenu = () => {
    var _a;
    (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.scene.resume();
    global.startScene('Menu');
  };
  // const defaultBgColor = Phaser.Display.Color.HexStringToColor('#1E2430');
  const defaultBgColor = (0, chroma_js_1.default)(theme.theme.gameBg);
  const currentBgColor = (0, vue_1.ref)(defaultBgColor);
  const resetBackground = () => {
    var _a, _b;
    let color = currentBgColor.value;
    if (color.hex() === defaultBgColor.hex()) {
      //do instant fadeIn if already default, prevents random flash of white
      (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.cameras.main.fadeIn(0, ...color.rgb());
    } else if (color) {
      (_b = gameScene.value) === null || _b === void 0 ? void 0 : _b.cameras.main.fadeIn(500, ...color.rgb());
      currentBgColor.value = defaultBgColor;
    }
  };
  const setBackgroundColor = color => {
    var _a;
    (_a = gameScene.value) === null || _a === void 0 ? void 0 : _a.cameras.main.fadeOut(500, ...color.rgb());
    currentBgColor.value = color;
  };
  setBackgroundColor(defaultBgColor);
  const getUsedColorsForDifficulty = level => {
    let clamped = (0, lodash_1.clamp)(level, 0, 2);
    return matchState.value.colorsNamed[`colors${clamped}`];
  };
  const getNamedColorsForDifficulty = level => {
    let clamped = (0, lodash_1.clamp)(level, 0, 2);
    return NamedColors[`NamedColors${clamped}`];
  };
  const areAllNamedColorsUsed = () => {
    let used = getUsedColorsForDifficulty(matchState.value.difficulty);
    return used.size === getNamedColorsForDifficulty(matchState.value.difficulty).length;
  };
  const isNamedColorUsed = color => {
    return getUsedColorsForDifficulty(matchState.value.difficulty).has(color);
  };
  const getNamedColor = function () {
    let markAsUsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (areAllNamedColorsUsed()) {
      throw new Error('ColorByName: All named colors for this difficulty level have been used.');
    }
    let colors = getNamedColorsForDifficulty(matchState.value.difficulty);
    const namedColor = (0, lodash_1.sample)(colors);
    if (isNamedColorUsed(namedColor)) {
      return getNamedColor();
    }
    if (markAsUsed) {
      getUsedColorsForDifficulty(matchState.value.difficulty).add(namedColor);
    }
    return namedColor;
  };
  const useSkip = () => {
    if (matchState.value.skips > 0) {
      matchState.value.skips -= 1;
      matchState.value.lastMatchSkipped = true;
    }
  };
  const scoreRound = function () {
    let baseScore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
    let multipliers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (matchState.value.lastMatchSkipped) {
      matchState.value.postRound.score = 0;
      matchState.value.postRound.multipliers = [];
      matchState.value.lastMatchSkipped = false;
      return;
    }
    let postRound = matchState.value.postRound;
    postRound.multipliers = [{
      label: 'Base Score',
      factor: 1,
      score: baseScore
    }, {
      label: 'Stage Bonus',
      factor: matchState.value.round,
      score: baseScore * matchState.value.round
    }, {
      label: 'Difficulty Bonus',
      factor: matchState.value.difficulty + 1,
      score: baseScore * (matchState.value.difficulty + 1)
    }];
    let hasteFactor = clock.progress.value >= .85 ? 4 : clock.progress.value >= .7 ? 3 : clock.progress.value >= .5 ? 1 : 0;
    if (hasteFactor !== 0) {
      postRound.multipliers.push({
        label: 'Haste Bonus',
        factor: hasteFactor,
        score: baseScore * hasteFactor
      });
      matchState.value.hasteCount += 1;
    }
    matchState.value.postRound.multipliers.push(...multipliers.map(m => Object.assign(Object.assign({}, m), {
      score: baseScore * m.factor
    })));
    matchState.value.postRound.score = matchState.value.postRound.multipliers.reduce((acc, curr) => acc + curr.score, 0);
    matchState.value.score += matchState.value.postRound.score;
  };
  /**
   * ------------------------------------------------------------------------------------------------
   * Post-Game Async Work
   * ------------------------------------------------------------------------------------------------
   */
  const postGameAsyncTimeout = 7000;
  const rankCurrentMatchStats = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
      requests.statsData = yield Promise.race([stats.rankStats({
        score: matchState.value.score,
        rounds: matchState.value.round
      }), (0, util_1.delay)(postGameAsyncTimeout, false)]);
    } catch (errors) {
      requests.statsData = false;
    }
  });
  const prepInterstitial = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
      if (global.isFirstRun) {
        console.log("Interstitial Ad not shown since this is the first time the app has been run.");
        requests.interstitial = false;
        global.setIsFirstRun(false);
        return;
      }
      requests.interstitial = yield Promise.race([(0, ad_util_1.prepareInterstitial)(), (0, util_1.delay)(postGameAsyncTimeout, false)]);
    } catch (errors) {
      requests.statsData = false;
    }
  });
  const preparePostGame = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    /**
     * Skip requests if the player failed on first round or didn't complete any rounds w/ score.
     */
    if (matchState.value.score !== 0) {
      yield Promise.all([rankCurrentMatchStats(), prepInterstitial()]);
    }
    postGameReady.value = true;
  });
  return {
    on,
    removeListener,
    gameScene,
    hydrateBannerRef,
    showBanner,
    restage,
    stats,
    matchState,
    useReducedPadding,
    //incrementScore,
    paused,
    pause,
    unpause,
    togglePaused,
    restartGame,
    backToMenu,
    end,
    clock,
    currentBgColor,
    resetBackground,
    setBackgroundColor,
    areAllNamedColorsUsed,
    isNamedColorUsed,
    getNamedColor,
    startBackgroundFx,
    preparePostGame,
    postGameReady,
    scoreRound,
    requests,
    useSkip
  };
});
exports.useGameStore = useGameStore;

/***/ }),

/***/ 2127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useGlobalStore = void 0;
const pinia_1 = __webpack_require__(4345);
const core_1 = __webpack_require__(9895);
const util_1 = __webpack_require__(1110);
console.log("production");
const hydrateStore = () => {
  let persisted = (0, util_1.fromLocalStorage)('global-store', {
    reduceFlashing: false,
    isFirstRun: true
  });
  return {
    gameId: 0,
    baseUrl:  false ? 0 : 'https://apexultra.herokuapp.com',
    //theme: Themes[persisted.themeKey] ?? Themes.default,
    platform: core_1.Capacitor.getPlatform().toLowerCase(),
    isDev: "production" === 'development',
    preloadProgress: 0,
    reduceFlashing: persisted.reduceFlashing,
    isFirstRun: persisted.isFirstRun,
    colorFactsSeen: [],
    sceneState: {
      scene: null,
      exiting: true,
      transitionClass: ''
    }
  };
};
const useGlobalStore = (0, pinia_1.defineStore)({
  id: 'editor',
  state: () => hydrateStore(),
  actions: {
    persist() {
      (0, util_1.mergeIntoLocalStorage)('global-store', {
        reduceFlashing: this.reduceFlashing,
        isFirstRun: this.isFirstRun
      });
    },
    /**
     * Set "first run" status. When `isFirstRun` is `true`, ads are not shown. Currently this
     * value is set to `false` in the game module after the first game is finished.
     *
     * @param isFirstRun
     */
    setIsFirstRun(isFirstRun) {
      this.isFirstRun = isFirstRun;
      this.persist();
    },
    setPreloadProgress(val) {
      this.preloadProgress = val;
    },
    /**
     * Called from within phaser scene's to update current scene information. This should
     * not be called from Vue.
     */
    updateSceneState(state) {
      this.sceneState = state;
    },
    /**
     * Called from within Vue to change the current phaser scene. Note that a current
     * scene must be active before this can be called.
     *
     * @param key - The key of the existing phaser scene.
     */
    startScene(key) {
      var _a, _b, _c;
      if (key === ((_a = this.sceneState.scene) === null || _a === void 0 ? void 0 : _a.sceneKey)) {
        //If current scene, must call restart
        (_b = this.sceneState.scene) === null || _b === void 0 ? void 0 : _b.scene.restart();
        return;
      }
      (_c = this.sceneState.scene) === null || _c === void 0 ? void 0 : _c.exit(key);
    },
    setReduceFlashing(val) {
      this.reduceFlashing = val;
      this.persist();
      //mergeIntoLocalStorage<GlobalStorePersistedState>('global-store', { reduceFlashing: this.reduceFlashing });
    }
  },

  getters: {
    activeSceneKey: state => {
      var _a;
      return (_a = state.sceneState.scene) === null || _a === void 0 ? void 0 : _a.sceneKey;
    }
  }
});
exports.useGlobalStore = useGlobalStore;

/***/ }),

/***/ 5978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useModule = void 0;
const global_1 = __webpack_require__(2127);
const game_1 = __webpack_require__(232);
const audio_1 = __webpack_require__(4631);
const stats_1 = __webpack_require__(3058);
const achievements_1 = __webpack_require__(9834);
const theme_1 = __webpack_require__(7406);
const tutorial_1 = __webpack_require__(9156);
const useModule = () => {
  return {
    global: (0, global_1.useGlobalStore)(),
    game: (0, game_1.useGameStore)(),
    tutorial: (0, tutorial_1.useTutorialStore)(),
    audio: (0, audio_1.useAudioStore)(),
    stats: (0, stats_1.useStatsStore)(),
    theme: (0, theme_1.useThemeStore)(),
    achievements: (0, achievements_1.useAchievmentStore)()
  };
};
exports.useModule = useModule;

/***/ }),

/***/ 3058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useStatsStore = void 0;
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const firebase_1 = __webpack_require__(2060);
const functions_1 = __webpack_require__(9065);
const pinia_1 = __webpack_require__(4345);
const game_util_1 = __webpack_require__(1357);
const util_1 = __webpack_require__(1110);
const global_1 = __webpack_require__(2127);
const uuid_1 = __webpack_require__(7429);
const GameId = 0;
let devUuid = (0, uuid_1.v4)();
const useStatsStore = (0, pinia_1.defineStore)('stats-store', () => {
  const global = (0, global_1.useGlobalStore)();
  let persisted = (0, util_1.fromLocalStorage)('stats-store', {
    latestStats: (0, game_util_1.getDefaultStats)(),
    latestRank: -1
  });
  const latestStats = (0, vue_1.ref)(persisted.latestStats);
  const latestRank = (0, vue_1.ref)(persisted.latestRank);
  const persist = () => {
    (0, util_1.toLocalStorage)('stats-store', {
      latestStats: latestStats.value,
      latestRank: latestRank.value
    });
  };
  /**
   * Stores a new latest stats item with all ranks set to `-1`.
   */
  const setLatest = stats => {
    latestStats.value = stats;
    persist();
  };
  /**
   * Returns the most recent stats from localStorage with no rank information.
   */
  const getLatest = () => {
    return (0, util_1.clone)(latestStats.value);
  };
  /**
   * Retrieves the player's best stats from the server OR throws an error.
   */
  const getBest = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log('get best stats');
    yield (0, firebase_1.getFirebaseUser)(); //Ensure we are logged in anon or otherwise
    const getStats = (0, functions_1.httpsCallable)(firebase_1.functions, 'getBest');
    return (yield getStats({
      gameId: GameId
    })).data;
  });
  /**
   * Returns the given stats object w/ the current and best ranking populated.
   * If these stats are highest scoring for this deviceId, the server will store as best.
   */
  const rankStats = stats => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //throw "Not implemented";
    yield (0, firebase_1.getFirebaseUser)(); //Ensure we are logged in anon or otherwise
    const rankStats = (0, functions_1.httpsCallable)(firebase_1.functions, 'rankStats');
    const data = (yield rankStats({
      gameId: GameId,
      data: stats
    })).data;
    /**
     * Calculate rank change before recording latest current rank
     */
    let rankChange = latestRank.value === -1 ? 0 : latestRank.value - data.overrallRank;
    /**
     * Whenever stats are ranked, take note of the current rank so that we can compare next time and return
     * rank difference
     */
    latestRank.value = data.overrallRank;
    persist();
    return data;
    // return {
    //     stats: data,
    //     rankChange
    // }
  });

  return {
    getLatest,
    setLatest,
    getBest,
    rankStats
  };
});
exports.useStatsStore = useStatsStore;

/***/ }),

/***/ 7406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useThemeStore = void 0;
const vue_1 = __webpack_require__(6765);
const pinia_1 = __webpack_require__(4345);
const themes_v2_1 = __webpack_require__(161);
const util_1 = __webpack_require__(1110);
const global_1 = __webpack_require__(2127);
const useThemeStore = (0, pinia_1.defineStore)('theme-store', () => {
  var _a, _b;
  let persisted = (0, util_1.fromLocalStorage)('theme-store', {
    themeKey: 'default'
  });
  const themeKey = (0, vue_1.ref)((_a = persisted.themeKey) !== null && _a !== void 0 ? _a : 'default');
  const theme = (0, vue_1.ref)((_b = themes_v2_1.Themes[persisted.themeKey]) !== null && _b !== void 0 ? _b : themes_v2_1.Themes.default);
  const fallbackColor = Phaser.Display.Color.HexStringToColor('#000000');
  /**
   * Values and sets are converted to phaser color objects upfront whenever the theme changes so that we don't
   * have to keep created color objects on each function call.
   */
  const valuesAsPhaserColors = (0, vue_1.computed)(() => {
    return Object.entries(theme.value.values).reduce((acc, curr) => {
      acc[curr[0]] = Phaser.Display.Color.HexStringToColor(curr[1]);
      return acc;
    }, {});
  });
  const setsAsPhaserColors = (0, vue_1.computed)(() => {
    return Object.entries(theme.value.sets).reduce((acc, curr) => {
      let key = curr[0],
        set = curr[1];
      acc[key] = set.map(hex => Phaser.Display.Color.HexStringToColor(hex));
      return acc;
    }, {});
  });
  /**
   * Given a key for a color set within the current theme, returns a random color from
   * within the set as a phaser color object.
   *
   * @param key
   * @returns
   */
  const randomFromSet = key => {
    let set = setsAsPhaserColors.value[key];
    if (set) {
      return Phaser.Utils.Array.GetRandom(set);
    }
    return fallbackColor;
  };
  /**
   * A key/value cache where the key is an `accessKey` as passed into `randomUniqueFromSet()` and the value is an
   * array of colors (as numbers) which have already been returned by `randomUniqueFromSet()` for the same access key.
   */
  const uniqueAlreadyPicked = (0, vue_1.ref)({}); //Keeps track of already-selected colors for given access key
  const randomUniqueFromSet = (accessKey, key) => {
    let set = setsAsPhaserColors.value[key];
    if (set) {
      /**
       * Init array to record which colors have already been picked or reset it if it already
       * includes all possible colors from the set.
       */
      let alreadyPicked = uniqueAlreadyPicked.value[accessKey];
      if (!alreadyPicked || alreadyPicked.length === set.length) {
        alreadyPicked = uniqueAlreadyPicked.value[accessKey] = [];
      }
      /**
       * Get a random hex and check if it has already been selected. If so, recursively
       * find another.
       */
      let randColor = Phaser.Utils.Array.GetRandom(set);
      if (alreadyPicked.includes(randColor.color)) {
        return randomUniqueFromSet(accessKey, key);
      }
      uniqueAlreadyPicked.value[accessKey].push(randColor.color); //Add just selected color to unique array
      return randColor;
    }
    return fallbackColor;
  };
  /**
   * Clears all cached colors used w/ randomUniqueFromSet(). Important to call this if using the same `accessKey` with
   * a new set of colors as not doing so will eventually cause safety checks to fail and cause an infinite loop.
   * This can be called manually, but is also called automatically whenever a theme change takes place.
   */
  const resetRandomUniqueCache = () => uniqueAlreadyPicked.value = {};
  /**
   * Returns a theme set where each hex value has been converted to a number (for
   * use with phaser object to set `tint`)
   *
   * @param key - Key for a set included in the current theme
   */
  const getSetAsTint = key => {
    let set = setsAsPhaserColors.value[key];
    if (set) {
      return set.map(phaserColor => phaserColor.color);
    }
    return [];
  };
  const value = key => {
    var _a;
    return (_a = theme.value.values[key]) !== null && _a !== void 0 ? _a : '#000000';
  };
  /**
   * Converts a theme value from a hex string to a number
   *
   * @param key - theme value key
   * @returns
   */
  const tint = key => {
    var _a, _b;
    return (_b = (_a = valuesAsPhaserColors.value[key]) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : fallbackColor.color;
  };
  /**
   * Converts a theme value from a hex string to a Phaser color objectc.
   *
   * @param key - theme value key
   * @returns
   */
  const color = key => {
    var _a;
    return (_a = valuesAsPhaserColors.value[key]) !== null && _a !== void 0 ? _a : fallbackColor;
  };
  const getTheme = key => {
    let t = themes_v2_1.Themes[key];
    if (t) {
      return t;
    }
  };
  const setTheme = key => {
    var _a;
    const global = (0, global_1.useGlobalStore)();
    let t = themes_v2_1.Themes[key];
    if (t) {
      themeKey.value = key;
      theme.value = t;
      resetRandomUniqueCache();
      (0, util_1.mergeIntoLocalStorage)('theme-store', {
        themeKey: key
      });
      if (global.activeSceneKey === 'Menu') {
        (_a = global.sceneState.scene) === null || _a === void 0 ? void 0 : _a.updateBgFx();
      }
    }
  };
  const menuBg = (0, vue_1.computed)(() => theme.value.menuBg);
  const gameBg = (0, vue_1.computed)(() => theme.value.gameBg);
  const values = (0, vue_1.computed)(() => theme.value.values);
  return {
    themeKey,
    theme,
    menuBg,
    gameBg,
    values,
    value,
    randomFromSet,
    randomUniqueFromSet,
    resetRandomUniqueCache,
    getSetAsTint,
    tint,
    color,
    getTheme,
    setTheme
  };
});
exports.useThemeStore = useThemeStore;

/***/ }),

/***/ 9156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTutorialStore = void 0;
const vue_1 = __webpack_require__(6765);
const pinia_1 = __webpack_require__(4345);
const util_1 = __webpack_require__(1110);
const getTutorialScreenState = () => ({
  controls: false,
  objective: false,
  bumpers: false,
  achievements: false,
  rank: false
});
const useTutorialStore = (0, pinia_1.defineStore)('tutorial-store', () => {
  let persisted = (0, util_1.fromLocalStorage)('tutorial-store', {
    tutorialViewed: false
  });
  const tutorialViewed = (0, vue_1.ref)(persisted.tutorialViewed);
  const tutorialActive = (0, vue_1.ref)(false);
  const screens = (0, vue_1.ref)(getTutorialScreenState());
  const activeScreen = (0, vue_1.ref)(null);
  const isActive = (0, vue_1.computed)(() => tutorialActive.value);
  const setActive = val => tutorialActive.value = val;
  const setActiveIfNotViewed = () => {
    if (tutorialViewed.value === false) {
      tutorialActive.value = true;
    }
  };
  const persist = () => {
    (0, util_1.toLocalStorage)('tutorial-store', {
      tutorialViewed: tutorialViewed.value
    });
  };
  const endScreenCallback = (0, vue_1.ref)(null);
  const hide = () => {
    var _a;
    activeScreen.value = null;
    (_a = endScreenCallback.value) === null || _a === void 0 ? void 0 : _a.call(endScreenCallback);
  };
  const show = key => {
    if (tutorialActive.value && screens.value[key] === false) {
      activeScreen.value = key;
      screens.value[key] = true;
      return new Promise(resolve => {
        tutorialViewed.value = true;
        persist();
        endScreenCallback.value = () => resolve(null);
      });
    }
  };
  /**
   * Resets tutorial screen state, marking each as "unseen".
   */
  const reset = () => {
    hide();
    screens.value = getTutorialScreenState();
  };
  return {
    activeScreen,
    setActive,
    setActiveIfNotViewed,
    isActive,
    show,
    hide,
    reset
  };
});
exports.useTutorialStore = useTutorialStore;

/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const phaser_1 = tslib_1.__importDefault(__webpack_require__(2260));
const transitions_1 = tslib_1.__importDefault(__webpack_require__(302));
const modules_1 = __webpack_require__(5978);
const getTransitions = (scene, config, track) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  let transitions = {
    scene: {
      enter: null,
      exit: null
    },
    audio: {
      enter: null,
      exit: null
    },
    menu: {
      enter: null,
      exit: null
    }
  };
  if (!config.transition) return transitions;
  //Enter scene
  let enterSceneConfig = (_b = (_a = config.transition) === null || _a === void 0 ? void 0 : _a.scene) === null || _b === void 0 ? void 0 : _b.enter;
  if (enterSceneConfig) {
    if (typeof enterSceneConfig === 'string') {
      transitions.scene.enter = new transitions_1.default.Scene[enterSceneConfig](scene);
    } else if (enterSceneConfig.name) {
      transitions.scene.enter = new transitions_1.default.Scene[enterSceneConfig === null || enterSceneConfig === void 0 ? void 0 : enterSceneConfig.name](scene, enterSceneConfig);
    }
  }
  //Exit scene
  let exitSceneConfig = (_d = (_c = config.transition) === null || _c === void 0 ? void 0 : _c.scene) === null || _d === void 0 ? void 0 : _d.exit;
  if (exitSceneConfig) {
    if (typeof exitSceneConfig === 'string') {
      transitions.scene.exit = new transitions_1.default.Scene[exitSceneConfig](scene);
    } else if (exitSceneConfig.name) {
      transitions.scene.exit = new transitions_1.default.Scene[exitSceneConfig === null || exitSceneConfig === void 0 ? void 0 : exitSceneConfig.name](scene, exitSceneConfig);
    }
  }
  if (track) {
    //Enter audio
    let enterAudioConfig = (_f = (_e = config.transition) === null || _e === void 0 ? void 0 : _e.audio) === null || _f === void 0 ? void 0 : _f.enter;
    if (enterAudioConfig) {
      if (typeof enterAudioConfig === 'string') {
        transitions.audio.enter = new transitions_1.default.Audio[enterAudioConfig](scene, track);
      } else if (enterAudioConfig.name) {
        transitions.audio.enter = new transitions_1.default.Audio[enterAudioConfig === null || enterAudioConfig === void 0 ? void 0 : enterAudioConfig.name](scene, track, enterAudioConfig);
      }
    }
    //Exit audio
    let exitAudioConfig = (_h = (_g = config.transition) === null || _g === void 0 ? void 0 : _g.audio) === null || _h === void 0 ? void 0 : _h.exit;
    if (exitAudioConfig) {
      if (typeof exitAudioConfig === 'string') {
        transitions.audio.exit = new transitions_1.default.Audio[exitAudioConfig](scene, track);
      } else if (exitAudioConfig.name) {
        transitions.audio.exit = new transitions_1.default.Audio[exitAudioConfig === null || exitAudioConfig === void 0 ? void 0 : exitAudioConfig.name](scene, track, exitAudioConfig);
      }
    }
  }
  //Enter menu
  let enterMenuConfig = (_k = (_j = config.transition) === null || _j === void 0 ? void 0 : _j.menu) === null || _k === void 0 ? void 0 : _k.enter;
  if (enterMenuConfig) {
    if (typeof enterMenuConfig === 'string') {
      transitions.menu.enter = new transitions_1.default.Menu[enterMenuConfig]({});
    } else if (enterMenuConfig.name) {
      transitions.menu.enter = new transitions_1.default.Menu[enterMenuConfig === null || enterMenuConfig === void 0 ? void 0 : enterMenuConfig.name](enterMenuConfig);
    }
  }
  //Exit menu
  let exitMenuConfig = (_m = (_l = config.transition) === null || _l === void 0 ? void 0 : _l.menu) === null || _m === void 0 ? void 0 : _m.exit;
  if (exitMenuConfig) {
    if (typeof exitMenuConfig === 'string') {
      transitions.menu.exit = new transitions_1.default.Menu[exitMenuConfig]({});
    } else if (exitMenuConfig.name) {
      transitions.menu.exit = new transitions_1.default.Menu[exitMenuConfig === null || exitMenuConfig === void 0 ? void 0 : exitMenuConfig.name](exitMenuConfig);
    }
  }
  return transitions;
};
class BaseScene extends phaser_1.default.Scene {
  constructor(config) {
    super(config);
    this.updateables = new Set();
    this.config = config;
    this.sceneKey = config.key;
  }
  init() {
    const {
      global,
      audio
    } = (0, modules_1.useModule)();
    /**
     * Update the active scene
     */
    global.updateSceneState({
      scene: this,
      exiting: true,
      transitionClass: ''
    });
    /**
     * Init audio
     */
    if (this.config.trackKey) {
      this.track = audio.add(this.config.trackKey);
      this.track.loop = true;
    }
    /**
     * Generate our transition instances
     */
    this.transitions = getTransitions(this, this.config, this.track);
    this.events.on('shutdown', this.destroy, this);
  }
  enter() {
    var _a, _b, _c, _d, _e, _f, _g;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const {
        global
      } = (0, modules_1.useModule)();
      /**
       * Do audio transition if exists, otherwise just play the audio track
       * if one was provided.
       */
      if (this.track) {
        if ((_a = this.transitions) === null || _a === void 0 ? void 0 : _a.audio.enter) {
          (_b = this.transitions) === null || _b === void 0 ? void 0 : _b.audio.enter.enter();
        } else {
          this.track.play();
        }
      }
      /**
       * Notify store that we are entering so that Vue can begin its enter transition if applicable.
       */
      global.updateSceneState({
        scene: this,
        exiting: false,
        transitionClass: (_e = (_d = (_c = this.transitions) === null || _c === void 0 ? void 0 : _c.menu.enter) === null || _d === void 0 ? void 0 : _d.getClassName()) !== null && _e !== void 0 ? _e : ''
      });
      yield (_g = (_f = this.transitions) === null || _f === void 0 ? void 0 : _f.scene.enter) === null || _g === void 0 ? void 0 : _g.enter();
      /**
       * Notify again just to clear transition class. This will prevent unwanted transitions
       */
      global.updateSceneState({
        scene: this,
        exiting: false,
        transitionClass: ''
      });
    });
  }
  exit(nextSceneKey) {
    var _a, _b, _c, _d, _e, _f, _g;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const {
        global
      } = (0, modules_1.useModule)();
      /**
       * Do audio transition if exists, otherwise just play the audio track
       * if one was provided.
       */
      if (this.track) {
        //TODO: Populate track here
        if ((_a = this.transitions) === null || _a === void 0 ? void 0 : _a.audio.exit) {
          (_b = this.transitions) === null || _b === void 0 ? void 0 : _b.audio.exit.exit();
        } else {
          this.track.stop();
          this.track.destroy();
        }
      }
      /**
       * Notify store that we are exiting so that Vue can begin its exit transition if applicable.
       */
      global.updateSceneState({
        scene: this,
        exiting: true,
        transitionClass: (_e = (_d = (_c = this.transitions) === null || _c === void 0 ? void 0 : _c.menu.exit) === null || _d === void 0 ? void 0 : _d.getClassName()) !== null && _e !== void 0 ? _e : ''
      });
      /**
       * Wait for our exit to complete and then actually switch scenes
       */
      yield (_g = (_f = this.transitions) === null || _f === void 0 ? void 0 : _f.scene.exit) === null || _g === void 0 ? void 0 : _g.exit();
      this.scene.start(nextSceneKey);
    });
  }
  registerUpdate(item) {
    this.updateables.add(item);
  }
  unregisterUpdate(item) {
    this.updateables.delete(item);
  }
  update(time, delta) {
    this.updateables.forEach(u => u.update(time, delta));
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_b = (_a = this.transitions) === null || _a === void 0 ? void 0 : _a.scene.enter) === null || _b === void 0 ? void 0 : _b.destroy();
    (_d = (_c = this.transitions) === null || _c === void 0 ? void 0 : _c.scene.exit) === null || _d === void 0 ? void 0 : _d.destroy();
    (_f = (_e = this.transitions) === null || _e === void 0 ? void 0 : _e.audio.enter) === null || _f === void 0 ? void 0 : _f.destroy();
    (_h = (_g = this.transitions) === null || _g === void 0 ? void 0 : _g.audio.exit) === null || _h === void 0 ? void 0 : _h.destroy();
    delete this.transitions;
  }
}
exports["default"] = BaseScene;

/***/ }),

/***/ 1459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
const base_1 = tslib_1.__importDefault(__webpack_require__(867));
const wave_1 = tslib_1.__importDefault(__webpack_require__(2389));
const expanding_sprites_1 = tslib_1.__importDefault(__webpack_require__(894));
const ad_util_1 = __webpack_require__(2463);
const modules_1 = __webpack_require__(5978);
class Game extends base_1.default {
  constructor() {
    super({
      key: TemplateTypes.Scene.GAME,
      trackKey: 'MUSIC_menu',
      transition: {
        scene: {
          enter: {
            name: 'fade',
            duration: 500
          },
          exit: {
            name: 'fade',
            duration: 500
          }
        },
        menu: {
          exit: {
            name: 'fade-scale',
            duration: 500
          },
          enter: {
            name: 'fade',
            duration: 500
          }
        },
        audio: {
          exit: {
            name: 'detune',
            duration: 500
          },
          enter: {
            name: 'fade',
            duration: 500
          }
        }
      }
    });
    this.bgActive = false;
    this.modules = (0, modules_1.useModule)();
  }
  init() {
    super.init();
    this.input.setTopOnly(false);
    (0, ad_util_1.hideBanner)();
  }
  create() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      this.enter();
      /**
       * Reset game state
       */
      this.bgActive = false;
      this.modules.game.restage(this);
      this.events.on('pause', this.handlePause, this);
      this.events.on('resume', this.handleResume, this);
      this.events.on('shutdown', () => {
        this.events.removeListener('pause', this.handlePause, this);
        this.events.removeListener('resume', this.handleResume, this);
        this.input.removeAllListeners();
      });
      //let particles = new EventHorizonBackgroundFX(this, 'FX_bg_event-horizon');
      // let pointerFX = new PointerWaveFX(this, 'FX_pointer_wave');
      // let pipelineInstance  = (<WarpPipelinePlugin> this.plugins.get('rexWarpPipeline'))
      //     .add(<Phaser.GameObjects.GameObject> <unknown> particles.particles, {
      //         speedEnable: true,
      //         speedY: 2,
      //         frequencyX: 10,
      //         frequencyY: 10,
      //         amplitudeX: 10,
      //         amplitudeY: 10,
      //     });
    });
  }

  handlePause() {}
  handleResume() {}
  gameOver() {
    //this.modules.global.startScene('PostGame');
  }
  startBackgroundFx(tint) {
    if (this.bgActive) return;
    this.bgActive = true;
    const {
      theme
    } = (0, modules_1.useModule)();
    let pointerFX = new wave_1.default(this, 'FX_pointer_wave_filled');
    new expanding_sprites_1.default(this, 'FX_pointer_wave_filled', tint ? [tint] : theme.getSetAsTint('backgroundFX'));
    let pipelineInstance = this.plugins.get('rexWarpPipeline').add(this.cameras.main, {
      speedEnable: true,
      speedY: 2,
      frequencyX: 10,
      frequencyY: 10,
      amplitudeX: 10,
      amplitudeY: 10
    });
  }
  update(time, delta) {
    super.update(time, delta);
  }
}
exports["default"] = Game;

/***/ }),

/***/ 4929:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
const base_1 = tslib_1.__importDefault(__webpack_require__(867));
const ad_util_1 = __webpack_require__(2463);
class InterstitialScene extends base_1.default {
  constructor() {
    super({
      key: TemplateTypes.Scene.INTERSTITIAL_SCENE
    });
  }
  create() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      document.body.style.background = '#000000';
      yield (0, ad_util_1.showInterstitial)();
      this.exit('Menu');
    });
  }
}
exports["default"] = InterstitialScene;

/***/ }),

/***/ 7060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
const base_1 = tslib_1.__importDefault(__webpack_require__(867));
const wave_1 = tslib_1.__importDefault(__webpack_require__(2389));
const expanding_sprites_1 = tslib_1.__importDefault(__webpack_require__(894));
const modules_1 = __webpack_require__(5978);
class Menu extends base_1.default {
  constructor() {
    super({
      key: TemplateTypes.Scene.MENU,
      trackKey: 'MUSIC_game',
      transition: {
        scene: {
          enter: {
            name: 'fade',
            duration: 500
          },
          exit: {
            name: 'fade',
            duration: 500
          }
        },
        menu: {
          exit: {
            name: 'fade-scale',
            duration: 500
          },
          enter: {
            name: 'fade-scale',
            duration: 500
          }
        },
        audio: {
          exit: {
            name: 'detune',
            duration: 500
          },
          enter: {
            name: 'fade',
            duration: 500
          }
        }
      }
    });
    this.fx = null;
  }
  create() {
    const _super = Object.create(null, {
      enter: {
        get: () => super.enter
      }
    });
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      _super.enter.call(this);
      // this.fx = new ExpandingSpritesBackgroundFx(this, 'FX_pointer_wave_filled', [
      //     0x0bf3f0,
      //     0x21dbf2,
      //     0x41b8f4,
      //     0x2dcef2,
      //     0x4bacf4,
      //     0x56a1f5,
      //     0x787cf7,
      //     0x8f64f9,
      //     0xa748fa,
      //     0xb738fc,
      //     0xd516fd,
      //     0xe00bfe,
      //     0x0bfe61,
      //     0x00ffc4
      // ]);
      this.fx = null;
      this.updateBgFx();
      new wave_1.default(this, 'FX_pointer_wave');
      let pipelineInstance = this.plugins.get('rexWarpPipeline').add(this.cameras.main, {
        speedEnable: true,
        speedY: 2,
        frequencyX: 10,
        frequencyY: 10,
        amplitudeX: 10,
        amplitudeY: 10
      });
    });
  }
  updateBgFx() {
    const {
      theme
    } = (0, modules_1.useModule)();
    let tints = theme.getSetAsTint('backgroundFX');
    if (!this.fx) {
      this.fx = new expanding_sprites_1.default(this, 'FX_pointer_wave_filled', tints);
    } else {
      this.fx.setPalette(tints);
    }
  }
}
exports["default"] = Menu;

/***/ }),

/***/ 3324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
const base_1 = tslib_1.__importDefault(__webpack_require__(867));
const ad_util_1 = __webpack_require__(2463);
const modules_1 = __webpack_require__(5978);
const util_1 = __webpack_require__(1110);
class Preload extends base_1.default {
  constructor() {
    super({
      key: TemplateTypes.Scene.PRELOAD,
      transition: {
        scene: {
          enter: {
            name: 'fade',
            duration: 500
          },
          exit: {
            name: 'fade',
            duration: 500
          }
        },
        menu: {
          exit: {
            name: 'fade',
            duration: 500
          },
          enter: {
            name: 'fade',
            duration: 500
          }
        }
      }
    });
  }
  // init() {
  //     showBanner();
  // }
  preload() {
    const {
      global,
      audio
    } = (0, modules_1.useModule)();
    audio.init();
    this.load.on('progress', value => global.setPreloadProgress(value));
    this.load.on('complete', () => global.setPreloadProgress(100));
    //Audio
    this.load.audio('MUSIC_menu', 'audio/aetherial.mp3');
    this.load.audio('MUSIC_game', 'audio/loose_relaxed.mp3');
    this.load.audio('FX_menu_btn', 'audio/tap_neutral_0.mp3');
    this.load.audio('FX_menu_btn_play', 'audio/tap_neutral_2.mp3');
    this.load.audio('FX_success', 'audio/success_1.mp3');
    this.load.audio('FX_failure', 'audio/failure_deep.mp3');
    this.load.audio('FX_bounce', 'audio/bounce_1.mp3');
    this.load.audio('FX_tap', 'audio/tap_neutral_2.mp3');
    // this.load.audio('FX_fact', 'audio/sleep_1.mp3');
    this.load.audio('FX_ascending_1', 'audio/notes_ascending_0.mp3');
    this.load.audio('FX_ascending_2', 'audio/notes_ascending_1.mp3');
    this.load.audio('FX_ascending_3', 'audio/notes_ascending_2.mp3');
    this.load.audio('FX_ascending_4', 'audio/notes_ascending_3.mp3');
    this.load.audio('FX_ascending_5', 'audio/notes_ascending_4.mp3');
    this.load.audio('FX_ascending_6', 'audio/notes_ascending_5.mp3');
    this.load.audio('FX_ascending_7', 'audio/notes_ascending_6.mp3');
    this.load.audio('FX_ascending_8', 'audio/notes_ascending_7.mp3');
    const resolution = "200x200";
    //Images
    this.load.image('FX_bg_event-horizon', 'images/FX_bg_event-horizon.png');
    this.load.image('FX_pointer_wave', 'images/FX_pointer_wave.png');
    this.load.image('FX_pointer_wave_filled', 'images/FX_pointer_wave_filled.png');
    this.load.image('donut', 'images/donut.png');
  }
  create() {
    const _super = Object.create(null, {
      enter: {
        get: () => super.enter
      }
    });
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      _super.enter.call(this);
      const {
        global
      } = (0, modules_1.useModule)();
      if (global.platform !== 'web') {
        if (!global.isFirstRun) {
          let bannerSuccess = yield (0, ad_util_1.showBanner)();
          if (bannerSuccess) {
            yield (0, util_1.delay)(1500); //Delay to prevent stuttering on menu as banner ad is shown
          } else {
            console.warn('Preload: Banner Ad failed to load');
          }
        } else {
          console.log("Banner Ad not shown since this is the first time the app has been run.");
        }
      }
      //await delay(10000); //Uncomment to test preload screen on web
      this.exit('Menu');
    });
  }
}
exports["default"] = Preload;

/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const TemplateTypes = tslib_1.__importStar(__webpack_require__(1062));
const base_1 = tslib_1.__importDefault(__webpack_require__(867));
/**
 * This is a blank scene which is currently used when restarting the "Game" scene
 * as an intermediary step. This lets the scene change while respecting all the scene transitions
 * ect. so we don't have to stop the music ourselves.
 */
class RestartGame extends base_1.default {
  constructor() {
    super({
      key: TemplateTypes.Scene.RESTART_GAME
    });
  }
  create() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      document.body.style.background = '#000000';
      this.exit('Game');
    });
  }
}
exports["default"] = RestartGame;

/***/ }),

/***/ 6276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(655);
const preload_1 = tslib_1.__importDefault(__webpack_require__(3324));
const menu_1 = tslib_1.__importDefault(__webpack_require__(7060));
const game_1 = tslib_1.__importDefault(__webpack_require__(1459));
const restart_game_1 = tslib_1.__importDefault(__webpack_require__(7108));
const interstitial_scene_1 = tslib_1.__importDefault(__webpack_require__(4929));
const Scenes = [preload_1.default, menu_1.default, game_1.default, restart_game_1.default, interstitial_scene_1.default];
exports["default"] = Scenes;

/***/ }),

/***/ 161:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Themes = void 0;
const Themes = {
  default: {
    name: "Default",
    palette: ['#A748FA'],
    titleBg: 'linear-gradient(90deg, #00FFF0 0%, #EB00FF 100%)',
    fontColor: '#ffffff',
    cardBg: '#0000006c',
    menuBg: {
      background: '#14171e'
    },
    gameBg: '#14171e',
    values: {},
    sets: {
      backgroundFX: ['#08f7f1', '#58a0f6', '#8371f8', '#e704ff']
    }
  },
  interstellar: {
    name: "Interstellar",
    palette: ['#000000'],
    titleBg: 'linear-gradient(90deg, #FFFFFF 0%, #4E4E4E 100%)',
    fontColor: '#ffffff',
    cardBg: '#ffffff24',
    menuBg: {
      background: '#000000'
    },
    gameBg: '#000000',
    values: {},
    sets: {
      backgroundFX: ["#ffffff"]
    }
  },
  hotpink: {
    name: "Hot Pink",
    palette: ['#FF00E5'],
    titleBg: 'linear-gradient(90deg, #FF4D00 0%, #EB00FF 100%)',
    fontColor: '#FF00E5',
    cardBg: '#0000006c',
    menuBg: {
      background: '#1c1321'
    },
    gameBg: '#291E30',
    values: {},
    sets: {
      backgroundFX: ["#FF00E5"]
    }
  },
  tropical: {
    name: "Tropical",
    palette: ['#00FF38'],
    titleBg: 'linear-gradient(90deg, #008CB8 0%, #00FF29 100%)',
    fontColor: '#00FF38',
    cardBg: '#0000006c',
    menuBg: {
      background: '#131a13'
    },
    gameBg: '#182417',
    values: {},
    sets: {
      backgroundFX: ["#00DD31", "#DDBA00", "#00B5DD"]
    }
  },
  ultraviolet: {
    name: "Ultraviolet",
    palette: ['#110043'],
    titleBg: 'linear-gradient(90deg, #ff00f7 0%, #3500ff 100%)',
    fontColor: '#00FF38',
    cardBg: '#0000006c',
    menuBg: {
      background: 'linear-gradient(169.02deg, rgb(28, 19, 33) -0.18%, #110043 113.57%)'
    },
    gameBg: '#200043',
    values: {},
    sets: {
      backgroundFX: ["#FF00E5"]
    }
  },
  cottoncandy: {
    name: "Cotton Candy",
    palette: ['#99cff4'],
    titleBg: 'linear-gradient(90deg, #ff00f7 0%, #00ffbb 100%)',
    fontColor: '#00FF38',
    cardBg: '#0000006c',
    menuBg: {
      background: 'linear-gradient(169.02deg, #443F69 -0.18%, #2a2837 113.57%)'
      //backgroundSize: '100% 100%'
    },

    gameBg: '#443f69',
    values: {},
    sets: {
      backgroundFX: ['#99cff4']
    }
  },
  garden: {
    name: "Earthtone",
    palette: ['#ADE6B0'],
    titleBg: 'linear-gradient(90deg, #ff00f7 0%, #ffca00 100%)',
    fontColor: '#00FF38',
    cardBg: '#0000006c',
    menuBg: {
      background: '#291717'
      //backgroundSize: '100% 100%'
    },

    gameBg: '#291717',
    values: {},
    sets: {
      backgroundFX: ['#ce00ff', '#0fa100', '#ADE6B0', '#FEDC78', '#F6F5AD', '#CFEEB7']
    }
  },
  glacier: {
    name: "Glacier",
    palette: ['#66B3CC'],
    titleBg: 'linear-gradient(90deg, #ffffff 0%, #43a7ff 100%)',
    fontColor: '#00FF38',
    cardBg: '#0000006c',
    menuBg: {
      background: '#003D4E'
      //backgroundSize: '100% 100%'
    },

    gameBg: '#002935',
    values: {},
    sets: {
      backgroundFX: ['#66B3CC', '#ffffff', '#94e5ff']
    }
  }
};
exports.Themes = Themes;

/***/ }),

/***/ 1062:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AchievementProgressFormat = exports.ThemeKey = exports.MenuTransition = exports.AudioTransition = exports.SceneTransition = exports.BaseTransition = exports.SceneState = exports.Scene = void 0;
const themes_v2_1 = __webpack_require__(161);
Object.defineProperty(exports, "ThemeKey", ({
  enumerable: true,
  get: function () {
    return themes_v2_1.ThemeKey;
  }
}));
const nanoid_1 = __webpack_require__(4296);
/**
 * ------------------------------------------------------------------------------------------
 * Scene / Transitions
 * ------------------------------------------------------------------------------------------
 */
var Scene;
(function (Scene) {
  Scene["PRELOAD"] = "Preload";
  Scene["MENU"] = "Menu";
  Scene["GAME"] = "Game";
  Scene["POSTGAME"] = "PostGame";
  Scene["RESTART_GAME"] = "RestartGame";
  Scene["INTERSTITIAL_SCENE"] = "InterstitialScene";
})(Scene || (Scene = {}));
exports.Scene = Scene;
var SceneState;
(function (SceneState) {
  SceneState[SceneState["PRELOAD"] = 0] = "PRELOAD";
  SceneState[SceneState["CREATE"] = 1] = "CREATE";
  SceneState[SceneState["UPDATE"] = 2] = "UPDATE";
})(SceneState || (SceneState = {}));
exports.SceneState = SceneState;
class BaseTransition {
  constructor(scene) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.scene = scene;
    this.config = config;
  }
}
exports.BaseTransition = BaseTransition;
class SceneTransition extends BaseTransition {
  constructor(scene) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(scene, config);
    this.id = (0, nanoid_1.nanoid)();
  }
}
exports.SceneTransition = SceneTransition;
class AudioTransition extends BaseTransition {
  constructor(scene, track) {
    let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super(scene, config);
    this.track = track;
  }
  destroy() {
    setTimeout(() => {
      this.track.destroy();
    }, this.config.duration);
  }
}
exports.AudioTransition = AudioTransition;
class MenuTransition {
  constructor() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let css = arguments.length > 1 ? arguments[1] : undefined;
    this.css = '';
    this.css = css;
    this.config = config;
    let styleEl = document.getElementById(this.constructor.name);
    if (!styleEl) {
      document.body.insertAdjacentHTML('beforeend', `
                <style id="${this.constructor.name}">
                    ${this.css}
                </style>
            `);
    }
  }
  getClassName() {
    var _a;
    return (_a = this.constructor.name) !== null && _a !== void 0 ? _a : '';
  }
}
exports.MenuTransition = MenuTransition;
var AchievementProgressFormat;
(function (AchievementProgressFormat) {
  AchievementProgressFormat["COUNT"] = "count";
  AchievementProgressFormat["BOOLEAN"] = "boolean";
})(AchievementProgressFormat || (AchievementProgressFormat = {}));
exports.AchievementProgressFormat = AchievementProgressFormat;

/***/ }),

/***/ 2463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adEvents = exports.showInterstitial = exports.prepareInterstitial = exports.getBannerSize = exports.resumeBanner = exports.hideBanner = exports.showBanner = void 0;
const tslib_1 = __webpack_require__(655);
const core_1 = __webpack_require__(9895);
const event_emitter_1 = __webpack_require__(2986);
const admob_1 = __webpack_require__(4812);
const util_1 = __webpack_require__(1110);
/**
 * Wire up better events for the ads. The admob plugin by default has no way to unsub from
 * events, which is not convenient.
 */
const adEvents = new event_emitter_1.EventEmitter();
exports.adEvents = adEvents;
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.AdImpression, () => adEvents.emit('bannerAdImpression'));
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.Loaded, () => adEvents.emit('bannerAdLoaded'));
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.FailedToLoad, info => adEvents.emit('bannerAdFailedToLoad', info));
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.SizeChanged, size => adEvents.emit('bannerSizeChange', size));
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.Closed, () => adEvents.emit('bannerAdClosed'));
admob_1.AdMob.addListener(admob_1.BannerAdPluginEvents.Opened, () => adEvents.emit('bannerAdOpened'));
admob_1.AdMob.addListener(admob_1.InterstitialAdPluginEvents.FailedToLoad, () => adEvents.emit('interstitialAdFailedToLoad'));
admob_1.AdMob.addListener(admob_1.InterstitialAdPluginEvents.Dismissed, () => adEvents.emit('interstitialAdDismissed'));
admob_1.AdMob.addListener(admob_1.InterstitialAdPluginEvents.FailedToShow, () => adEvents.emit('interstitialAdFailedToShow'));
admob_1.AdMob.addListener(admob_1.InterstitialAdPluginEvents.Loaded, () => adEvents.emit('interstitialAdLoaded'));
admob_1.AdMob.addListener(admob_1.InterstitialAdPluginEvents.Showed, () => adEvents.emit('interstitialAdShowed'));
/**
 * Manage banner and get banner size
 */
let bannerSize = {
  width: 50,
  height: 50
};
let bannerLoaded = false;
const getBannerSize = () => bannerSize;
exports.getBannerSize = getBannerSize;
const hideBanner = () => bannerLoaded ? admob_1.AdMob.hideBanner() : null;
exports.hideBanner = hideBanner;
const resumeBanner = () => bannerLoaded ? admob_1.AdMob.resumeBanner() : null;
exports.resumeBanner = resumeBanner;
const showBanner = function () {
  let timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
  return tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let loadPromise = new Promise(resolve => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      if (core_1.Capacitor.getPlatform() === 'web') {
        console.log(`Banner Ad not loaded because platform is "${core_1.Capacitor.getPlatform()}"`);
        bannerLoaded = false;
        resolve(false);
      }
      if (bannerLoaded) {
        admob_1.AdMob.resumeBanner();
        resolve(true);
      }
      const resolvePromise = loaded => {
        adEvents.removeListener(admob_1.BannerAdPluginEvents.FailedToLoad, handleLoadFailed);
        adEvents.removeListener(admob_1.BannerAdPluginEvents.Loaded, handleLoaded);
        resolve(loaded);
      };
      const handleLoadFailed = () => {
        bannerLoaded = false;
        resolvePromise(false);
      };
      const handleLoaded = () => {
        bannerLoaded = true;
        resolvePromise(true);
      };
      adEvents.on(admob_1.BannerAdPluginEvents.FailedToLoad, handleLoadFailed);
      adEvents.on(admob_1.BannerAdPluginEvents.Loaded, handleLoaded);
      admob_1.AdMob.showBanner({
        margin: 0,
        adId: 'ca-app-pub-6032836321331778/1793759288',
        adSize: admob_1.BannerAdSize.BANNER,
        position: admob_1.BannerAdPosition.BOTTOM_CENTER,
        isTesting: "production" === 'development'
      });
    }));
    return Promise.race([loadPromise, (0, util_1.delay)(timeout, false)]);
  });
};
exports.showBanner = showBanner;
let interstitialLoaded = false;
const prepareInterstitial = () => {
  return new Promise(resolve => {
    if (core_1.Capacitor.getPlatform() === 'web') {
      interstitialLoaded = false;
      resolve(false);
    }
    const resolvePromise = loaded => {
      adEvents.removeListener(admob_1.InterstitialAdPluginEvents.FailedToLoad, handleLoadFailed);
      adEvents.removeListener(admob_1.InterstitialAdPluginEvents.Loaded, handleLoaded);
      resolve(loaded);
    };
    const handleLoadFailed = () => {
      interstitialLoaded = false;
      resolvePromise(false);
    };
    const handleLoaded = () => {
      interstitialLoaded = true;
      resolvePromise(true);
    };
    adEvents.on(admob_1.InterstitialAdPluginEvents.FailedToLoad, handleLoadFailed);
    adEvents.on(admob_1.InterstitialAdPluginEvents.Loaded, handleLoaded);
    admob_1.AdMob.prepareInterstitial({
      adId: 'ca-app-pub-6032836321331778/5625193080',
      isTesting: "production" === 'development'
    });
  });
};
exports.prepareInterstitial = prepareInterstitial;
const showInterstitial = () => {
  return new Promise(resolve => {
    /**
     * Ad was never loaded or failed to load. Do nothing and just resolve this promise.
     */
    if (!interstitialLoaded) {
      resolve(null);
    }
    const handleDismiss = () => {
      adEvents.removeListener(admob_1.InterstitialAdPluginEvents.Dismissed, handleDismiss);
      adEvents.removeListener(admob_1.InterstitialAdPluginEvents.FailedToShow, handleDismiss);
      resolve(null);
    };
    adEvents.on(admob_1.InterstitialAdPluginEvents.Dismissed, handleDismiss);
    adEvents.on(admob_1.InterstitialAdPluginEvents.FailedToShow, handleDismiss);
    admob_1.AdMob.showInterstitial();
  });
};
exports.showInterstitial = showInterstitial;

/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ascending = exports.fadeOut = void 0;
const modules_1 = __webpack_require__(5978);
const util_1 = __webpack_require__(1110);
const fadeOut = function (scene, audio) {
  let duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let onComplete = arguments.length > 3 ? arguments[3] : undefined;
  return new Promise((res, rej) => {
    scene.tweens.add({
      targets: audio,
      volume: 0,
      duration: duration,
      onComplete: () => {
        onComplete === null || onComplete === void 0 ? void 0 : onComplete(audio);
        res(audio);
      }
    });
  });
};
exports.fadeOut = fadeOut;
const ascending = (baseKey, startIndex, endIndex) => {
  const {
    audio
  } = (0, modules_1.useModule)();
  let currentIndex = startIndex;
  const play = index => audio.play(`${baseKey}${index}`);
  const previous = function () {
    let indexOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    currentIndex = (0, util_1.wrapAround)(currentIndex - 1, startIndex, endIndex);
    if (!indexOnly) play(currentIndex);
  };
  const next = function () {
    let indexOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    currentIndex = (0, util_1.wrapAround)(currentIndex + 1, startIndex, endIndex);
    if (!indexOnly) play(currentIndex);
  };
  return {
    play,
    previous,
    next
  };
};
exports.ascending = ascending;

/***/ }),

/***/ 5365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRandomColorMix = exports.generateGradientSquareHex = exports.generateGradientSquare = exports.deltaEInRange = exports.interpolate = exports.getContrastColor = exports.getColorWithSimilarityInRange = exports.getRandomNonUglyColorExpensive = exports.getRandomNonUglyColor = void 0;
const tslib_1 = __webpack_require__(655);
const lodash_1 = __webpack_require__(6486);
const chroma_js_1 = tslib_1.__importDefault(__webpack_require__(8670));
const uglyColors = [(0, chroma_js_1.default)('rgba(137,181,44,1)'), (0, chroma_js_1.default)('rgba(138,154,91,1)'), (0, chroma_js_1.default)('rgba(174,203,60,1)'), (0, chroma_js_1.default)('rgba(171,179,65,1)'), (0, chroma_js_1.default)('rgba(168,156,63,1)'), (0, chroma_js_1.default)('rgba(108,152,44,1)'), (0, chroma_js_1.default)('rgba(2,250,50,1)'), (0, chroma_js_1.default)('rgba(188,225,57,1)'), (0, chroma_js_1.default)('rgb(31, 116, 27)'), (0, chroma_js_1.default)('rgba(174,232,25,1)'), (0, chroma_js_1.default)('rgba(42,10,64,1)'), (0, chroma_js_1.default)('rgb(219, 89, 17)'), (0, chroma_js_1.default)('rgba(129,101,68,1)'), (0, chroma_js_1.default)('rgba(76,131,9,1)'), (0, chroma_js_1.default)('#b2bc0f'), (0, chroma_js_1.default)('#b2bc0f'), (0, chroma_js_1.default)('#70980f'), (0, chroma_js_1.default)('#865e22'), (0, chroma_js_1.default)('#d08723'), (0, chroma_js_1.default)('#484602'), (0, chroma_js_1.default)('#b87561'), (0, chroma_js_1.default)('#753d4d'), (0, chroma_js_1.default)('#4a412a')];
const isCloseToUglyColor = function (color) {
  let threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  threshold = (0, lodash_1.clamp)(threshold, 0, 100);
  for (let i = 0; i < uglyColors.length; i++) {
    if (chroma_js_1.default.deltaE(uglyColors[i], color) <= threshold) {
      return true;
    }
  }
  return false;
};
/**
 * Gets a color which is not super close to green.
 */
const getRandomNonUglyColorExpensive = () => {
  let color = chroma_js_1.default.random();
  if (isCloseToUglyColor(color)) {
    return getRandomNonUglyColorExpensive();
  }
  return color;
};
exports.getRandomNonUglyColorExpensive = getRandomNonUglyColorExpensive;
let green = (0, chroma_js_1.default)('lime');
const getRandomNonUglyColor = () => {
  let color = chroma_js_1.default.random();
  if (color.luminance() <= .3 || chroma_js_1.default.deltaE(green, color) <= 15) {
    return getRandomNonUglyColor();
  }
  return color;
  // let phaserColor = Phaser.Display.Color.RandomRGB();
  // let color = new Color(phaserColor.rgba);
  // if (isCloseToUglyColor(color)){
  //     console.log("TOO UGLY");
  //     return getRandomNonUglyColor();
  // }
  // return color;
};

exports.getRandomNonUglyColor = getRandomNonUglyColor;
const _darkenMod = color => color.darken((0, lodash_1.round)((0, lodash_1.random)(.1, 3, true), 2));
const _brightenMod = color => color.brighten((0, lodash_1.round)((0, lodash_1.random)(.1, 3, true), 2));
const _saturateMod = color => color.saturate((0, lodash_1.round)((0, lodash_1.random)(.1, 3, true), 2));
const _desaturatedMod = color => color.desaturate((0, lodash_1.round)((0, lodash_1.random)(.1, 3, true), 2));
const _luminanceMod = color => color.luminance((0, lodash_1.round)((0, lodash_1.random)(.5, 1, true), 2));
const applyRandomColorMods = color => {
  //let c = chroma(color);
  //color.darken(round(random(.1, 3, true), 2))
  // let amt = round(random(.1, 3, true), 2);
  //console.log('Applying MOD:', color);
  //sample([c.darken, c.brighten])?.(round(random(.1, 3, true), 2)); //Random lightness modifier
  //sample([color.saturate, color.desaturate])?.(round(random(.1, 3, true), 2)) //Random saturation
  return (0, lodash_1.sample)([
  //_darkenMod, 
  _brightenMod, _saturateMod, _desaturatedMod, _luminanceMod])(color);
};
const deltaEInRange = (c1, c2, min, max) => {
  let distance = chroma_js_1.default.deltaE(c1, c2);
  return distance > min && distance < max;
};
exports.deltaEInRange = deltaEInRange;
/**
 * Returns a random choma color similar or no similar to the given color, depending on the range given. The
 * scale is 0-100 and internally this maps to a deltaE difference of 0-55.
 *
 * http://zschuessler.github.io/DeltaE/learn/#toc-introduction
 *
 * NOTE: Seemingly getting random colors is very unlikely to result in a color with a deltaE difference above 60 or so. This method
 * takes in a 0-100 value but actually rescales it so that the max deltaE difference is really somewhere between 0 and 55. This still
 * requires many iterations.
 *
 * @param testColorRgb
 * @param minDistanceLab
 */
const getColorWithSimilarityInRange = function (color1) {
  let minDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let maxDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  let limitIterations = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let _iterations = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  if (limitIterations && _iterations >= 500) {
    console.warn(`getColorWithSimilarityInRange(): More than 500 iterations necessary to retrieve desired color at deltaE min=${minDistance} and max=${maxDistance}.`);
    return chroma_js_1.default.random();
  }
  let min = (0, lodash_1.round)((0, lodash_1.clamp)(minDistance, 0, 100) / 100 * 50, 4);
  let max = (0, lodash_1.round)((0, lodash_1.clamp)(maxDistance, 0, 100) / 100 * 50, 4);
  if (min >= max) {
    throw new Error('Min distance must be less than max distance');
  }
  let color2 = getRandomNonUglyColor();
  //let color2 = chroma.random(); //chroma.random();//avoidUglyColors ? getRandomNonUglyColor() : chroma.random();
  //let distance = chroma.deltaE(color1, color2);
  let inRange = deltaEInRange(color1, color2, min, max);
  if (!inRange) {
    // color2 = applyRandomColorMods(color2);
    // inRange = deltaEInRange(color1, color2, min, max);
    // if (!inRange){
    return getColorWithSimilarityInRange(color1, minDistance, maxDistance, limitIterations, _iterations + 1);
    //}
  }
  //console.log(`Color found in ${_iterations} iterations.`);
  return color2;
};
exports.getColorWithSimilarityInRange = getColorWithSimilarityInRange;
// const getRandomNonUglyColor = () : chroma.Color => {
//     let color = chroma.random();
//     if (color.luminance() <= .3){
//         return getRandomNonUglyColor();
//     }
//     return color;
// }
const getContrastColorRgb = (r, g, b) => {
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};
/**
 * Given a chroma color or rgb values, returns the contrast color (black or white) that will be most readable against
 * the given color.
 */
function getContrastColor(color, g, b) {
  let c;
  if (typeof color === 'number' && typeof g === 'number' && typeof b === 'number') {
    c = chroma_js_1.default.rgb(color, g, b);
  } else {
    c = (0, chroma_js_1.default)(color);
  }
  return getContrastColorRgb(...c.rgb());
}
exports.getContrastColor = getContrastColor;
const interpolate = (color1, color2, steps) => {
  return chroma_js_1.default.scale([color1, color2]).colors(steps).map(c => (0, chroma_js_1.default)(c));
};
exports.interpolate = interpolate;
function generateGradientSquare(size, colors) {
  const square = [];
  const gradient = chroma_js_1.default.scale(colors).mode('lab').colors(size);
  for (let x = 0; x < size; x++) {
    square[x] = [];
    for (let y = 0; y < size; y++) {
      const color = chroma_js_1.default.mix(chroma_js_1.default.mix(colors[0], colors[1], x / (size - 1)), chroma_js_1.default.mix(colors[2], colors[3], x / (size - 1)), y / (size - 1));
      square[x][y] = color;
    }
  }
  return square;
}
exports.generateGradientSquare = generateGradientSquare;
function generateGradientSquareHex(size, colors) {
  const square = [];
  const gradient = chroma_js_1.default.scale(colors).mode('lab').colors(size);
  for (let x = 0; x < size; x++) {
    square[x] = [];
    for (let y = 0; y < size; y++) {
      const color = chroma_js_1.default.mix(chroma_js_1.default.mix(colors[0], colors[1], x / (size - 1)), chroma_js_1.default.mix(colors[2], colors[3], x / (size - 1)), y / (size - 1));
      square[x][y] = {
        hex: color.hex()
      };
    }
  }
  return square;
}
exports.generateGradientSquareHex = generateGradientSquareHex;
// const mixColors = (colors: chroma.Color[]) => { 
//     return chroma.average(colors);
//     //return colors.slice(1).reduce<chroma.Color>((acc, curr) => acc.mix(curr), colors[0]) ?? chroma('white');
// }
/**
 * Given a color and a count, generates a set of colors for this given count that, when mixed together,
 * will equal the given color.
 */
function getRandomColorMix(count) {
  let mix = [];
  for (let i = 0; i < count; i++) {
    mix.push(getRandomNonUglyColor());
  }
  return {
    target: chroma_js_1.default.average(mix, 'lch'),
    mix
  };
}
exports.getRandomColorMix = getRandomColorMix;

/***/ }),

/***/ 755:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCountdownClock = void 0;
const tslib_1 = __webpack_require__(655);
const vue_1 = __webpack_require__(6765);
const event_emitter_1 = __webpack_require__(2986);
const lodash_1 = __webpack_require__(6486);
const clock_js_1 = tslib_1.__importDefault(__webpack_require__(4104));
const useCountdownClock = phaserScene => {
  const events = new event_emitter_1.EventEmitter();
  const scene = (0, vue_1.shallowRef)();
  const clock = (0, vue_1.shallowRef)();
  const countdownMs = (0, vue_1.ref)(0);
  const duration = (0, vue_1.ref)(0);
  const remaining = (0, vue_1.ref)(0);
  const progress = (0, vue_1.ref)(0);
  const disabled = (0, vue_1.ref)(false);
  const state = (0, vue_1.ref)('stopped');
  const recalc = () => {
    if (clock.value) {
      progress.value = (0, lodash_1.clamp)((0, lodash_1.round)(1 - Math.floor(clock.value.now) / countdownMs.value, 4), 0, 1);
      remaining.value = (0, lodash_1.clamp)(countdownMs.value - clock.value.now, 0, countdownMs.value);
    }
  };
  const start = countdownMillis => {
    if (disabled.value) return;
    if (clock.value) {
      clock.value.stop();
      countdownMs.value = countdownMillis;
      duration.value = countdownMillis; //Just for external reference
      state.value = 'running';
      clock.value.start();
    }
  };
  const stop = () => {
    if (disabled.value) return;
    if (clock.value) {
      clock.value.stop();
      countdownMs.value = 0;
      duration.value = 0;
      state.value = 'stopped';
      recalc();
      events.emit('stop');
    }
  };
  const pause = () => {
    if (disabled.value) return;
    if (state.value === 'running' && clock.value) {
      clock.value.pause();
      state.value = 'paused';
      events.emit('pause');
    }
  };
  const resume = () => {
    if (disabled.value) return;
    if (clock.value) {
      state.value = 'running';
      clock.value.resume();
      events.emit('resume');
    }
  };
  const on = (event, listener) => events.on(event, listener);
  const removeListener = (event, listener) => events.removeListener(event, listener);
  const destroy = () => {
    var _a;
    return (_a = clock.value) === null || _a === void 0 ? void 0 : _a.destroy();
  };
  const populateScene = phaserScene => {
    scene.value = phaserScene;
    clock.value = new clock_js_1.default(phaserScene);
    clock.value.on('update', () => {
      recalc();
      events.emit('update');
      if (clock.value && clock.value.now >= countdownMs.value) {
        clock.value.stop();
        events.emit('end');
      }
    });
  };
  const setDisabled = val => {
    disabled.value = val;
    if (val) stop();
  };
  const status = (0, vue_1.computed)(() => state.value);
  if (phaserScene) {
    populateScene(phaserScene);
  } else {
    console.warn('useCountdownClock(): No scene provided to countdown clock. Use populateScene() to populate the scene if not available at the time of hook creation.');
  }
  return {
    populateScene,
    on,
    removeListener,
    stop,
    start,
    resume,
    pause,
    progress,
    duration,
    remaining,
    destroy,
    status,
    setDisabled
  };
};
exports.useCountdownClock = useCountdownClock;

/***/ }),

/***/ 2338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deviceEvents = exports.hapticsSelectionEnd = exports.hapticsSelectionChanged = exports.hapticsSelectionStart = exports.hapticsVibrate = exports.hapticsImpactHeavy = exports.hapticsImpactLight = exports.hapticsImpactMedium = void 0;
const tslib_1 = __webpack_require__(655);
const haptics_1 = __webpack_require__(4052);
const app_1 = __webpack_require__(5137);
const event_emitter_1 = __webpack_require__(2986);
const deviceEvents = new event_emitter_1.EventEmitter();
exports.deviceEvents = deviceEvents;
//https://capacitorjs.com/docs/apis/haptics
const hapticsImpactMedium = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.impact({
    style: haptics_1.ImpactStyle.Medium
  });
});
exports.hapticsImpactMedium = hapticsImpactMedium;
const hapticsImpactLight = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.impact({
    style: haptics_1.ImpactStyle.Light
  });
});
exports.hapticsImpactLight = hapticsImpactLight;
const hapticsImpactHeavy = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.impact({
    style: haptics_1.ImpactStyle.Heavy
  });
});
exports.hapticsImpactHeavy = hapticsImpactHeavy;
const hapticsVibrate = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.vibrate();
});
exports.hapticsVibrate = hapticsVibrate;
const hapticsSelectionStart = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.selectionStart();
});
exports.hapticsSelectionStart = hapticsSelectionStart;
const hapticsSelectionChanged = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.selectionChanged();
});
exports.hapticsSelectionChanged = hapticsSelectionChanged;
const hapticsSelectionEnd = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
  yield haptics_1.Haptics.selectionEnd();
});
exports.hapticsSelectionEnd = hapticsSelectionEnd;
app_1.App.addListener('backButton', () => deviceEvents.emit('backButton'));
app_1.App.addListener('appStateChange', params => deviceEvents.emit('appStateChange', params));

/***/ }),

/***/ 2986:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EventEmitter = void 0;
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (typeof this.events[event] !== "object") {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.removeListener(event, listener);
  }
  removeListener(event, listener) {
    if (typeof this.events[event] !== "object") {
      return;
    }
    const idx = this.events[event].indexOf(listener);
    if (idx > -1) {
      this.events[event].splice(idx, 1);
    }
  }
  removeAllListeners() {
    Object.keys(this.events).forEach(event => this.events[event].splice(0, this.events[event].length));
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (typeof this.events[event] !== "object") {
      return;
    }
    [...this.events[event]].forEach(listener => listener.apply(this, args));
  }
  once(event, listener) {
    var _this = this;
    const remove = this.on(event, function () {
      remove();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      listener.apply(_this, args);
    });
    return remove;
  }
}
exports.EventEmitter = EventEmitter;

/***/ }),

/***/ 1357:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRandomStats = exports.getDefaultStats = void 0;
const getDefaultStats = () => ({
  score: 0,
  rounds: 0
});
exports.getDefaultStats = getDefaultStats;
const getRandomStats = () => ({
  score: Phaser.Math.Between(100, 10000),
  rounds: Phaser.Math.Between(10, 500)
});
exports.getRandomStats = getRandomStats;

/***/ }),

/***/ 1110:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.titleCase = exports.swap = exports.chunkArray = exports.wrapAround = exports.resolvePercentCoords = exports.resolvePercentY = exports.resolvePercentX = exports.randomUnique = exports.clone = exports.delay = exports.formatMilliseconds = exports.mergeIntoLocalStorage = exports.toLocalStorage = exports.fromLocalStorage = exports.mode = exports.weightedRandomCubic = exports.weightedRandomQuadratic = exports.generateWeightsCubic = exports.generateWeightsQuadratic = exports.weightedRandomArr = exports.weightedRandomObj = exports.reverseDirection = void 0;
const tslib_1 = __webpack_require__(655);
const lodash_1 = tslib_1.__importStar(__webpack_require__(6486));
const reverseDirection = direction => {
  switch (direction) {
    case 'bottom':
      return 'top';
    case 'top':
      return 'bottom';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
  }
};
exports.reverseDirection = reverseDirection;
const weightedRandomObj = options => {
  let i;
  let weights = [];
  for (i = 0; i < options.length; i++) weights[i] = options[i].weight + (weights[i - 1] || 0);
  var random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return options[i].item;
};
exports.weightedRandomObj = weightedRandomObj;
const weightedRandomArr = (items, weights) => {
  let i;
  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;
  let random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return items[i];
};
exports.weightedRandomArr = weightedRandomArr;
/**
 * Pass the number of weights you need and the three points on a Quadratic Curve and
 * this method will return an array where each element represents its index's position
 * on the curve.
 *
 * Useful for generating difficulty ramp weighting.
 *
 * @param count - number of weights to generate on curve
 * @param p0 - start point
 * @param p1 - control point 1
 * @param p2 - end poiint
 * @returns
 */
const generateWeightsQuadratic = (count, p0, p1, p2) => {
  let weights = [],
    increment = 1 / count;
  for (let i = 0; i < count; i++) {
    weights.push(Phaser.Math.Interpolation.QuadraticBezier((i + 1) * increment, p0, p1, p2));
  }
  return weights;
};
exports.generateWeightsQuadratic = generateWeightsQuadratic;
/**
 * Pass the number of weights you need and the four points on a Cubic Curve and
 * this method will return an array where each element represents its index's position
 * on the curve.
 *
 * @param count - number of weights to generate on curve
 * @param p0 - start point
 * @param p1 - control point 1
 * @param p2 - control point 2
 * @param p3 - end poiint
 */
const generateWeightsCubic = (count, p0, p1, p2, p3) => {
  let weights = [],
    increment = 1 / count;
  for (let i = 0; i < count; i++) {
    weights.push(Phaser.Math.Interpolation.CubicBezier((i + 1) * increment, p0, p1, p2, p3));
  }
  return weights;
};
exports.generateWeightsCubic = generateWeightsCubic;
const weightedRandomQuadratic = (items, p0, p1, p2) => {
  let w = weightedRandomArr(items, generateWeightsQuadratic(items.length, p0, p1, p2));
  return w;
};
exports.weightedRandomQuadratic = weightedRandomQuadratic;
const weightedRandomCubic = (items, p0, p1, p2, p3) => {
  return weightedRandomArr(items, generateWeightsCubic(items.length, p0, p1, p2, p3));
};
exports.weightedRandomCubic = weightedRandomCubic;
const mode = arr => {
  return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
};
exports.mode = mode;
/**
 * (ChatGPT)
 *
 * Merges two objects but ignores properties which are not present on the initial/first object.
 *
 * @param obj1
 * @param obj2
 * @returns
 */
function mergeObjectsAndIgnoreMissingProperties(obj1, obj2) {
  const mergedObject = lodash_1.default.merge({}, obj1, obj2, (objValue, srcValue) => {
    if (lodash_1.default.isUndefined(objValue)) {
      // Ignore properties not present in obj1
      return objValue;
    }
    // Use the value from obj2 for merging
    return srcValue;
  });
  return mergedObject;
}
/**
 * Returns an item from localStorage or the default item if no such item exists. Performs a deep merge from default
 * object to whatever is stored in localStorage. The returned object will always match the schema of the given default
 * object. Excess properties which may be leftover in localStorage will be removed.
 *
 * @param key - a localStorage key
 * @param defaultObj - default object if the given key doesn't exist in localStorage or is not a valid JSON
 * @returns
 */
const fromLocalStorage = (key, defaultObj) => {
  let json = localStorage.getItem(key);
  if (json) {
    try {
      let obj = JSON.parse(json);
      if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return defaultObj;
      return mergeObjectsAndIgnoreMissingProperties(defaultObj, obj);
    } catch (err) {
      return defaultObj;
    }
  }
  return defaultObj;
};
exports.fromLocalStorage = fromLocalStorage;
const toLocalStorage = (key, objToMerge) => {
  let json = localStorage.getItem(key);
  let item;
  try {
    item = lodash_1.default.merge({}, JSON.parse(json !== null && json !== void 0 ? json : '{}'), objToMerge);
  } catch (err) {
    item = objToMerge;
  }
  localStorage.setItem(key, JSON.stringify(item));
  return item;
};
exports.toLocalStorage = toLocalStorage;
/**
 * Given a localStorage key and an object, merges the given object into the existing on in localStorage if
 * it exists. Does not work for localStorage items which are just arrays.
 *
 * @param key - the local storage key of an item stored as an object
 * @param objToMerge - a partial or complete version of the stored object to perform a shallow merge on
 * @returns
 */
const mergeIntoLocalStorage = (key, objToMerge) => {
  let json = localStorage.getItem(key);
  let item;
  try {
    item = Object.assign(Object.assign({}, JSON.parse(json !== null && json !== void 0 ? json : '{}')), objToMerge);
  } catch (err) {
    item = objToMerge;
  }
  localStorage.setItem(key, JSON.stringify(item));
  return item;
};
exports.mergeIntoLocalStorage = mergeIntoLocalStorage;
/**
 * Converts milliseconds to formatted `hh:mm:ss`. ChatGPT wrote this one.
 *
 *
 * @param milliseconds - number
 * @returns
 */
const formatMilliseconds = milliseconds => {
  // Convert milliseconds to seconds
  const seconds = Math.floor(milliseconds / 1000);
  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const remainingSeconds = seconds % 60;
  // Format the time as a string
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  return timeString;
};
exports.formatMilliseconds = formatMilliseconds;
function delay(durationMs, returnVal) {
  return new Promise(res => {
    window.setTimeout(() => res(returnVal), durationMs);
  });
}
exports.delay = delay;
const clone = obj => JSON.parse(JSON.stringify(obj));
exports.clone = clone;
/**
 * Returns an element from the given array so long as it is not included in the exclusion array or equals the exclusion value.
 * Note that if the exclusion array includes the entire selection array, this method will cause an infinite loop.
 *
 * @param arr
 * @param exclude
 * @returns
 */
const randomUnique = (arr, exclude) => {
  let el = Phaser.Utils.Array.GetRandom(arr);
  if (Array.isArray(exclude) && exclude.includes(el) || el === exclude) {
    return randomUnique(arr, exclude);
  }
  return el;
};
exports.randomUnique = randomUnique;
const resolvePercentX = (scene, x) => {
  if (typeof x === 'string') {
    return parseInt(x) / 100 * scene.cameras.main.width;
  }
  return x * scene.cameras.main.width;
};
exports.resolvePercentX = resolvePercentX;
const resolvePercentY = (scene, y) => {
  if (typeof y === 'string') {
    return parseInt(y) / 100 * scene.cameras.main.height;
  }
  return y * scene.cameras.main.height;
};
exports.resolvePercentY = resolvePercentY;
const resolvePercentCoords = (scene, x, y) => {
  return {
    x: resolvePercentX(scene, x),
    y: resolvePercentY(scene, y)
  };
};
exports.resolvePercentCoords = resolvePercentCoords;
/**
 * Given an integer and a min/max range, returns the number if it is within range and wraps it around if it is not.
 */
const wrapAround = (value, min, max) => {
  const range = max - min + 1;
  const offsetValue = value - min;
  const wrappedValue = (offsetValue % range + range) % range;
  return wrappedValue + min;
};
exports.wrapAround = wrapAround;
/**
 * This function takes in an array and chunks it into smaller arrays of the given explicit sizes.
 * (Written by copilot.)
 *
 * @param arr
 * @param chunkSizes
 * @returns
 */
function chunkArray(arr, chunkSizes) {
  const result = [];
  let index = 0;
  for (const size of chunkSizes) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}
exports.chunkArray = chunkArray;
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
exports.swap = swap;
const titleCase = str => (0, lodash_1.startCase)((0, lodash_1.toLower)(str));
exports.titleCase = titleCase;

/***/ }),

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ audio_toggle_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ audio_toggle_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/audio-toggle-button.vue?vue&type=script&setup=true&lang=ts
var audio_toggle_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(2819);
;// CONCATENATED MODULE: ./src/components/audio-toggle-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/audio-toggle-button.vue?vue&type=style&index=0&id=a2b936ee&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/audio-toggle-button.vue?vue&type=style&index=0&id=a2b936ee&lang=scss

;// CONCATENATED MODULE: ./src/components/audio-toggle-button.vue



;

const __exports__ = audio_toggle_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const audio_toggle_button = (__exports__);

/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_button)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/button.vue?vue&type=template&id=f6d13490


const _hoisted_1 = { class: "au-button__icon" }
const _hoisted_2 = { class: "au-button__text" }
const _hoisted_3 = { class: "au-button__label" }
const _hoisted_4 = { class: "au-button__sub-label" }

function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", (0,runtime_core_esm_bundler/* mergeProps */.dG)(_ctx.$attrs, { class: "au-button" }), [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [
      (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "icon")
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, [
          (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "label"),
          (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")
        ])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, [
          (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "sublabel")
        ])
      ])
    ])
  ], 16))
}
;// CONCATENATED MODULE: ./src/components/button.vue?vue&type=template&id=f6d13490

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/button.vue?vue&type=style&index=0&id=f6d13490&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/button.vue?vue&type=style&index=0&id=f6d13490&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/button.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const components_button = (__exports__);

/***/ }),

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ control_overlay)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/control-overlay.vue?vue&type=template&id=58e95842


const _hoisted_1 = { class: "k-control-overlay" }

function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")
  ]))
}
;// CONCATENATED MODULE: ./src/components/control-overlay.vue?vue&type=template&id=58e95842

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/control-overlay.vue?vue&type=style&index=0&id=58e95842&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/control-overlay.vue?vue&type=style&index=0&id=58e95842&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/control-overlay.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const control_overlay = (__exports__);

/***/ }),

/***/ 5811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ countdown_secondsvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ countdown_seconds)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/countdown-seconds.vue?vue&type=script&setup=true&lang=ts
var countdown_secondsvue_type_script_setup_true_lang_ts = __webpack_require__(1925);
;// CONCATENATED MODULE: ./src/components/countdown-seconds.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/countdown-seconds.vue?vue&type=style&index=0&id=077d38de&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/countdown-seconds.vue?vue&type=style&index=0&id=077d38de&lang=css

;// CONCATENATED MODULE: ./src/components/countdown-seconds.vue



;

const __exports__ = countdown_secondsvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const countdown_seconds = (__exports__);

/***/ }),

/***/ 8478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dotted_list_item)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/dotted-list-item.vue?vue&type=template&id=24e7560a


const _hoisted_1 = { class: "au-dotted-list-line" }
const _hoisted_2 = { class: "au-dotted-list-line__label" }
const _hoisted_3 = { class: "au-dotted-list-line__value" }

function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("li", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_2, [
      (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "left")
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_3, [
      (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "right")
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/components/dotted-list-item.vue?vue&type=template&id=24e7560a

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/dotted-list-item.vue?vue&type=style&index=0&id=24e7560a&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/dotted-list-item.vue?vue&type=style&index=0&id=24e7560a&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/dotted-list-item.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const dotted_list_item = (__exports__);

/***/ }),

/***/ 8528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dotted_list)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/dotted-list.vue?vue&type=template&id=8c7e869a


function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_dom_esm_bundler.TransitionGroup, {
    name: "slide-fade",
    tag: "ul",
    class: "au-dotted-list",
    appear: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
      (0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")
    ]),
    _: 3
  }))
}
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/dotted-list.vue?vue&type=style&index=0&id=8c7e869a&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/dotted-list.vue?vue&type=style&index=0&id=8c7e869a&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/dotted-list.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const dotted_list = (__exports__);

/***/ }),

/***/ 6898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ game_backgroundvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ game_background)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/game-background.vue?vue&type=script&setup=true&lang=ts
var game_backgroundvue_type_script_setup_true_lang_ts = __webpack_require__(4051);
;// CONCATENATED MODULE: ./src/components/game-background.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/game-background.vue



const __exports__ = game_backgroundvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const game_background = (__exports__);

/***/ }),

/***/ 2572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ game_timervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ game_timer)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/game-timer.vue?vue&type=script&setup=true&lang=ts
var game_timervue_type_script_setup_true_lang_ts = __webpack_require__(6155);
;// CONCATENATED MODULE: ./src/components/game-timer.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/game-timer.vue?vue&type=style&index=0&id=ac4556c4&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/game-timer.vue?vue&type=style&index=0&id=ac4556c4&lang=scss

;// CONCATENATED MODULE: ./src/components/game-timer.vue



;

const __exports__ = game_timervue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const game_timer = (__exports__);

/***/ }),

/***/ 3969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ glow_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ glow_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/glow-button.vue?vue&type=script&setup=true&lang=ts
var glow_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/glow-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/glow-button.vue?vue&type=style&index=0&id=3bb7867e&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/glow-button.vue?vue&type=style&index=0&id=3bb7867e&lang=scss

;// CONCATENATED MODULE: ./src/components/glow-button.vue



;

const __exports__ = glow_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const glow_button = (__exports__);

/***/ }),

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ menu_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ menu_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/menu-button.vue?vue&type=script&setup=true&lang=ts
var menu_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(1027);
;// CONCATENATED MODULE: ./src/components/menu-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/menu-button.vue?vue&type=style&index=0&id=0e2fb800&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/menu-button.vue?vue&type=style&index=0&id=0e2fb800&lang=scss

;// CONCATENATED MODULE: ./src/components/menu-button.vue



;

const __exports__ = menu_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const menu_button = (__exports__);

/***/ }),

/***/ 6130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ modalvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ modal)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/modal.vue?vue&type=script&setup=true&lang=ts
var modalvue_type_script_setup_true_lang_ts = __webpack_require__(5426);
;// CONCATENATED MODULE: ./src/components/modal.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/modal.vue?vue&type=style&index=0&id=388c34df&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/modal.vue?vue&type=style&index=0&id=388c34df&lang=scss

;// CONCATENATED MODULE: ./src/components/modal.vue



;

const __exports__ = modalvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const modal = (__exports__);

/***/ }),

/***/ 1278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ nav_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ nav_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/nav-button.vue?vue&type=script&setup=true&lang=ts
var nav_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(2907);
;// CONCATENATED MODULE: ./src/components/nav-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/nav-button.vue?vue&type=style&index=0&id=62ac6b5c&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/nav-button.vue?vue&type=style&index=0&id=62ac6b5c&lang=scss

;// CONCATENATED MODULE: ./src/components/nav-button.vue



;

const __exports__ = nav_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const nav_button = (__exports__);

/***/ }),

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ navigable_screenvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ navigable_screen)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/navigable-screen.vue?vue&type=script&setup=true&lang=ts
var navigable_screenvue_type_script_setup_true_lang_ts = __webpack_require__(3320);
;// CONCATENATED MODULE: ./src/components/navigable-screen.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/navigable-screen.vue?vue&type=style&index=0&id=3be850f4&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/navigable-screen.vue?vue&type=style&index=0&id=3be850f4&lang=scss

;// CONCATENATED MODULE: ./src/components/navigable-screen.vue



;

const __exports__ = navigable_screenvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const navigable_screen = (__exports__);

/***/ }),

/***/ 7204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ play_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ play_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/play-button.vue?vue&type=script&setup=true&lang=ts
var play_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(7124);
;// CONCATENATED MODULE: ./src/components/play-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/play-button.vue?vue&type=style&index=0&id=1282b9ee&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/play-button.vue?vue&type=style&index=0&id=1282b9ee&lang=scss

;// CONCATENATED MODULE: ./src/components/play-button.vue



;

const __exports__ = play_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const play_button = (__exports__);

/***/ }),

/***/ 6193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ pointer_fxvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ pointer_fx)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/pointer-fx.vue?vue&type=script&setup=true&lang=ts
var pointer_fxvue_type_script_setup_true_lang_ts = __webpack_require__(5080);
;// CONCATENATED MODULE: ./src/components/pointer-fx.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/pointer-fx.vue?vue&type=style&index=0&id=05f64560&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/pointer-fx.vue?vue&type=style&index=0&id=05f64560&lang=css

;// CONCATENATED MODULE: ./src/components/pointer-fx.vue



;

const __exports__ = pointer_fxvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const pointer_fx = (__exports__);

/***/ }),

/***/ 6547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ spinner)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/spinner.vue?vue&type=template&id=653910d6


const _hoisted_1 = { class: "lds-dual-ring" }

function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1))
}
;// CONCATENATED MODULE: ./src/components/spinner.vue?vue&type=template&id=653910d6

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/spinner.vue?vue&type=style&index=0&id=653910d6&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/spinner.vue?vue&type=style&index=0&id=653910d6&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/spinner.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const spinner = (__exports__);

/***/ }),

/***/ 8320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-button.vue?vue&type=script&setup=true&lang=ts
var color_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(9146);
;// CONCATENATED MODULE: ./src/game/color-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-button.vue?vue&type=style&index=0&id=75622946&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/color-button.vue?vue&type=style&index=0&id=75622946&lang=scss

;// CONCATENATED MODULE: ./src/game/color-button.vue



;

const __exports__ = color_buttonvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const color_button = (__exports__);

/***/ }),

/***/ 326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_phasing_elementvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_phasing_element)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-phasing-element.vue?vue&type=script&setup=true&lang=ts
var color_phasing_elementvue_type_script_setup_true_lang_ts = __webpack_require__(6878);
;// CONCATENATED MODULE: ./src/game/color-phasing-element.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-phasing-element.vue?vue&type=style&index=0&id=ea0b71ac&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/color-phasing-element.vue?vue&type=style&index=0&id=ea0b71ac&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/color-phasing-element.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(color_phasing_elementvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-ea0b71ac"]])

/* harmony default export */ const color_phasing_element = (__exports__);

/***/ }),

/***/ 3850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-picker.vue?vue&type=script&setup=true&lang=ts
var color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(4988);
;// CONCATENATED MODULE: ./src/game/color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/color-picker.vue?vue&type=style&index=0&id=72579bd4&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/color-picker.vue?vue&type=style&index=0&id=72579bd4&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/color-picker.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(color_pickervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-72579bd4"]])

/* harmony default export */ const color_picker = (__exports__);

/***/ }),

/***/ 5262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ contrast_color_textvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ contrast_color_text)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/contrast-color-text.vue?vue&type=script&setup=true&lang=ts
var contrast_color_textvue_type_script_setup_true_lang_ts = __webpack_require__(7121);
;// CONCATENATED MODULE: ./src/game/contrast-color-text.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/contrast-color-text.vue?vue&type=style&index=0&id=65312c8f&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/contrast-color-text.vue?vue&type=style&index=0&id=65312c8f&lang=css

;// CONCATENATED MODULE: ./src/game/contrast-color-text.vue



;

const __exports__ = contrast_color_textvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const contrast_color_text = (__exports__);

/***/ }),

/***/ 9315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ contrast_textvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ contrast_text)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/contrast-text.vue?vue&type=script&setup=true&lang=ts
var contrast_textvue_type_script_setup_true_lang_ts = __webpack_require__(5793);
;// CONCATENATED MODULE: ./src/game/contrast-text.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/game/contrast-text.vue



const __exports__ = contrast_textvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const contrast_text = (__exports__);

/***/ }),

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ done_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ done_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/done-button.vue?vue&type=script&setup=true&lang=ts
var done_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(7641);
;// CONCATENATED MODULE: ./src/game/done-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/done-button.vue?vue&type=style&index=0&id=7ac196c2&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/done-button.vue?vue&type=style&index=0&id=7ac196c2&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/done-button.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(done_buttonvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-7ac196c2"]])

/* harmony default export */ const done_button = (__exports__);

/***/ }),

/***/ 6433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ expanding_circlevue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ expanding_circle)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/expanding-circle.vue?vue&type=script&setup=true&lang=ts
var expanding_circlevue_type_script_setup_true_lang_ts = __webpack_require__(5516);
;// CONCATENATED MODULE: ./src/game/expanding-circle.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/expanding-circle.vue?vue&type=style&index=0&id=f1af6e16&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/expanding-circle.vue?vue&type=style&index=0&id=f1af6e16&lang=css

;// CONCATENATED MODULE: ./src/game/expanding-circle.vue



;

const __exports__ = expanding_circlevue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const expanding_circle = (__exports__);

/***/ }),

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ game_content_areavue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ game_content_area)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/game-content-area.vue?vue&type=script&setup=true&lang=ts
var game_content_areavue_type_script_setup_true_lang_ts = __webpack_require__(3388);
;// CONCATENATED MODULE: ./src/game/game-content-area.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/game-content-area.vue?vue&type=style&index=0&id=0116c3b5&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/game-content-area.vue?vue&type=style&index=0&id=0116c3b5&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/game-content-area.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(game_content_areavue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-0116c3b5"]])

/* harmony default export */ const game_content_area = (__exports__);

/***/ }),

/***/ 6626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ game_overvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ game_over)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/game-over.vue?vue&type=script&setup=true&lang=ts
var game_overvue_type_script_setup_true_lang_ts = __webpack_require__(1489);
;// CONCATENATED MODULE: ./src/game/game-over.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/game-over.vue?vue&type=style&index=0&id=dbc421e2&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/game-over.vue?vue&type=style&index=0&id=dbc421e2&lang=scss

;// CONCATENATED MODULE: ./src/game/game-over.vue



;

const __exports__ = game_overvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const game_over = (__exports__);

/***/ }),

/***/ 6012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ gradient_shapevue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ gradient_shape)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/gradient-shape.vue?vue&type=script&setup=true&lang=ts
var gradient_shapevue_type_script_setup_true_lang_ts = __webpack_require__(2511);
;// CONCATENATED MODULE: ./src/game/gradient-shape.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/gradient-shape.vue?vue&type=style&index=0&id=4af38d6d&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/gradient-shape.vue?vue&type=style&index=0&id=4af38d6d&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/gradient-shape.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(gradient_shapevue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-4af38d6d"]])

/* harmony default export */ const gradient_shape = (__exports__);

/***/ }),

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ grid_color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ grid_color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/grid-color-picker.vue?vue&type=script&setup=true&lang=ts
var grid_color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(2959);
;// CONCATENATED MODULE: ./src/game/grid-color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/grid-color-picker.vue?vue&type=style&index=0&id=199607b9&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/grid-color-picker.vue?vue&type=style&index=0&id=199607b9&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/grid-color-picker.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(grid_color_pickervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-199607b9"]])

/* harmony default export */ const grid_color_picker = (__exports__);

/***/ }),

/***/ 3330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ match_summaryvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ match_summary)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/match-summary.vue?vue&type=script&setup=true&lang=ts
var match_summaryvue_type_script_setup_true_lang_ts = __webpack_require__(2832);
;// CONCATENATED MODULE: ./src/game/match-summary.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/match-summary.vue?vue&type=style&index=0&id=91e89fe6&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/match-summary.vue?vue&type=style&index=0&id=91e89fe6&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/match-summary.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(match_summaryvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-91e89fe6"]])

/* harmony default export */ const match_summary = (__exports__);

/***/ }),

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ align_disksvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ align_disks)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/align-disks.vue?vue&type=script&setup=true&lang=ts
var align_disksvue_type_script_setup_true_lang_ts = __webpack_require__(8859);
;// CONCATENATED MODULE: ./src/game/matches/align-disks.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/align-disks.vue?vue&type=style&index=0&id=596687f4&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/align-disks.vue?vue&type=style&index=0&id=596687f4&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/matches/align-disks.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(align_disksvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-596687f4"]])

/* harmony default export */ const align_disks = (__exports__);

/***/ }),

/***/ 9539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_by_namevue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_by_name)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/color-by-name.vue?vue&type=script&setup=true&lang=ts
var color_by_namevue_type_script_setup_true_lang_ts = __webpack_require__(1400);
;// CONCATENATED MODULE: ./src/game/matches/color-by-name.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/color-by-name.vue?vue&type=style&index=0&id=0527f9dc&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/color-by-name.vue?vue&type=style&index=0&id=0527f9dc&lang=scss

;// CONCATENATED MODULE: ./src/game/matches/color-by-name.vue



;

const __exports__ = color_by_namevue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const color_by_name = (__exports__);

/***/ }),

/***/ 9687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_phasevue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_phase)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/color-phase.vue?vue&type=script&setup=true&lang=ts
var color_phasevue_type_script_setup_true_lang_ts = __webpack_require__(2848);
;// CONCATENATED MODULE: ./src/game/matches/color-phase.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/color-phase.vue?vue&type=style&index=0&id=2b80260b&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/color-phase.vue?vue&type=style&index=0&id=2b80260b&lang=scss

;// CONCATENATED MODULE: ./src/game/matches/color-phase.vue



;

const __exports__ = color_phasevue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const color_phase = (__exports__);

/***/ }),

/***/ 5765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ odd_man_outvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ odd_man_out)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/odd-man-out.vue?vue&type=script&setup=true&lang=ts
var odd_man_outvue_type_script_setup_true_lang_ts = __webpack_require__(3445);
;// CONCATENATED MODULE: ./src/game/matches/odd-man-out.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/odd-man-out.vue?vue&type=style&index=0&id=0124d255&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/odd-man-out.vue?vue&type=style&index=0&id=0124d255&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/matches/odd-man-out.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(odd_man_outvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-0124d255"]])

/* harmony default export */ const odd_man_out = (__exports__);

/***/ }),

/***/ 3565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ order_gradientvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ order_gradient)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/order-gradient.vue?vue&type=script&setup=true&lang=ts
var order_gradientvue_type_script_setup_true_lang_ts = __webpack_require__(1005);
;// CONCATENATED MODULE: ./src/game/matches/order-gradient.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/order-gradient.vue?vue&type=style&index=0&id=47ca570c&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/order-gradient.vue?vue&type=style&index=0&id=47ca570c&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/matches/order-gradient.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(order_gradientvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-47ca570c"]])

/* harmony default export */ const order_gradient = (__exports__);

/***/ }),

/***/ 1628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ pattern_memoryvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ pattern_memory)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/pattern-memory.vue?vue&type=script&setup=true&lang=ts
var pattern_memoryvue_type_script_setup_true_lang_ts = __webpack_require__(7288);
;// CONCATENATED MODULE: ./src/game/matches/pattern-memory.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/pattern-memory.vue?vue&type=style&index=0&id=53868e6e&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/pattern-memory.vue?vue&type=style&index=0&id=53868e6e&lang=scss

;// CONCATENATED MODULE: ./src/game/matches/pattern-memory.vue



;

const __exports__ = pattern_memoryvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const pattern_memory = (__exports__);

/***/ }),

/***/ 9164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ pick_colorvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ pick_color)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/pick-color.vue?vue&type=script&setup=true&lang=ts
var pick_colorvue_type_script_setup_true_lang_ts = __webpack_require__(753);
;// CONCATENATED MODULE: ./src/game/matches/pick-color.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/matches/pick-color.vue?vue&type=style&index=0&id=3e80744e&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/matches/pick-color.vue?vue&type=style&index=0&id=3e80744e&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/matches/pick-color.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pick_colorvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-3e80744e"]])

/* harmony default export */ const pick_color = (__exports__);

/***/ }),

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ name_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ name_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/name-picker.vue?vue&type=script&setup=true&lang=ts
var name_pickervue_type_script_setup_true_lang_ts = __webpack_require__(5663);
;// CONCATENATED MODULE: ./src/game/name-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/name-picker.vue?vue&type=style&index=0&id=78ed36eb&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/name-picker.vue?vue&type=style&index=0&id=78ed36eb&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/name-picker.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(name_pickervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-78ed36eb"]])

/* harmony default export */ const name_picker = (__exports__);

/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ phasing_backgroundvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ phasing_background)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/phasing-background.vue?vue&type=script&setup=true&lang=ts
var phasing_backgroundvue_type_script_setup_true_lang_ts = __webpack_require__(1238);
;// CONCATENATED MODULE: ./src/game/phasing-background.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/phasing-background.vue?vue&type=style&index=0&id=458d8154&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/phasing-background.vue?vue&type=style&index=0&id=458d8154&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/phasing-background.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(phasing_backgroundvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-458d8154"]])

/* harmony default export */ const phasing_background = (__exports__);

/***/ }),

/***/ 1531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ phasing_buttonvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ phasing_button)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/phasing-button.vue?vue&type=script&setup=true&lang=ts
var phasing_buttonvue_type_script_setup_true_lang_ts = __webpack_require__(2633);
;// CONCATENATED MODULE: ./src/game/phasing-button.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/phasing-button.vue?vue&type=style&index=0&id=2d9c3506&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/phasing-button.vue?vue&type=style&index=0&id=2d9c3506&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/phasing-button.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(phasing_buttonvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-2d9c3506"]])

/* harmony default export */ const phasing_button = (__exports__);

/***/ }),

/***/ 7103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ radial_color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ radial_color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/radial-color-picker.vue?vue&type=script&setup=true&lang=ts
var radial_color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(7256);
;// CONCATENATED MODULE: ./src/game/radial-color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/radial-color-picker.vue?vue&type=style&index=0&id=67eba932&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/radial-color-picker.vue?vue&type=style&index=0&id=67eba932&lang=scss

;// CONCATENATED MODULE: ./src/game/radial-color-picker.vue



;

const __exports__ = radial_color_pickervue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const radial_color_picker = (__exports__);

/***/ }),

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ rank_metervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ rank_meter)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/rank-meter.vue?vue&type=script&setup=true&lang=ts
var rank_metervue_type_script_setup_true_lang_ts = __webpack_require__(8506);
;// CONCATENATED MODULE: ./src/game/rank-meter.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/rank-meter.vue?vue&type=style&index=0&id=ce5999f8&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/rank-meter.vue?vue&type=style&index=0&id=ce5999f8&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/rank-meter.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(rank_metervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-ce5999f8"]])

/* harmony default export */ const rank_meter = (__exports__);

/***/ }),

/***/ 9073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ roundvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ round)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/round.vue?vue&type=script&setup=true&lang=ts
var roundvue_type_script_setup_true_lang_ts = __webpack_require__(782);
;// CONCATENATED MODULE: ./src/game/round.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/round.vue?vue&type=style&index=0&id=dadbefc4&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/round.vue?vue&type=style&index=0&id=dadbefc4&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/round.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(roundvue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-dadbefc4"]])

/* harmony default export */ const round = (__exports__);

/***/ }),

/***/ 4622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ scrolling_color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ scrolling_color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/scrolling-color-picker.vue?vue&type=script&setup=true&lang=ts
var scrolling_color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(2465);
;// CONCATENATED MODULE: ./src/game/scrolling-color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/scrolling-color-picker.vue?vue&type=style&index=0&id=469d7960&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/scrolling-color-picker.vue?vue&type=style&index=0&id=469d7960&lang=scss

;// CONCATENATED MODULE: ./src/game/scrolling-color-picker.vue



;

const __exports__ = scrolling_color_pickervue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const scrolling_color_picker = (__exports__);

/***/ }),

/***/ 9556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ single_color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ single_color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/single-color-picker.vue?vue&type=script&setup=true&lang=ts
var single_color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(2462);
;// CONCATENATED MODULE: ./src/game/single-color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/single-color-picker.vue?vue&type=style&index=0&id=13cb310d&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/single-color-picker.vue?vue&type=style&index=0&id=13cb310d&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/single-color-picker.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(single_color_pickervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-13cb310d"]])

/* harmony default export */ const single_color_picker = (__exports__);

/***/ }),

/***/ 856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ stacked_circle_color_pickervue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ stacked_circle_color_picker)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/stacked-circle-color-picker.vue?vue&type=script&setup=true&lang=ts
var stacked_circle_color_pickervue_type_script_setup_true_lang_ts = __webpack_require__(3617);
;// CONCATENATED MODULE: ./src/game/stacked-circle-color-picker.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/game/stacked-circle-color-picker.vue?vue&type=style&index=0&id=44720d10&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/game/stacked-circle-color-picker.vue?vue&type=style&index=0&id=44720d10&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/game/stacked-circle-color-picker.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(stacked_circle_color_pickervue_type_script_setup_true_lang_ts/* default */.Z, [['__scopeId',"data-v-44720d10"]])

/* harmony default export */ const stacked_circle_color_picker = (__exports__);

/***/ }),

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ dist_ruleSet_1_rules_9_use_0_srcvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/index.vue?vue&type=script&setup=true&lang=ts
var dist_ruleSet_1_rules_9_use_0_srcvue_type_script_setup_true_lang_ts = __webpack_require__(8816);
;// CONCATENATED MODULE: ./src/index.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/index.vue



const __exports__ = dist_ruleSet_1_rules_9_use_0_srcvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const src = (__exports__);

/***/ }),

/***/ 2543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ phaservue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ phaser)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/phaser.vue?vue&type=script&setup=true&lang=ts
var phaservue_type_script_setup_true_lang_ts = __webpack_require__(6274);
;// CONCATENATED MODULE: ./src/phaser.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/phaser.vue



const __exports__ = phaservue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const phaser = (__exports__);

/***/ }),

/***/ 7123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ color_fact_menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ color_fact_menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/color-fact-menu.vue?vue&type=script&setup=true&lang=ts
var color_fact_menuvue_type_script_setup_true_lang_ts = __webpack_require__(9637);
;// CONCATENATED MODULE: ./src/scenes/color-fact-menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/color-fact-menu.vue?vue&type=style&index=0&id=5d56dd04&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/color-fact-menu.vue?vue&type=style&index=0&id=5d56dd04&lang=scss

;// CONCATENATED MODULE: ./src/scenes/color-fact-menu.vue



;

const __exports__ = color_fact_menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const color_fact_menu = (__exports__);

/***/ }),

/***/ 4833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ gamevue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ game)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/game.vue?vue&type=script&setup=true&lang=ts
var gamevue_type_script_setup_true_lang_ts = __webpack_require__(4054);
;// CONCATENATED MODULE: ./src/scenes/game.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/game.vue?vue&type=style&index=0&id=cf9fd1c6&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/game.vue?vue&type=style&index=0&id=cf9fd1c6&lang=scss

;// CONCATENATED MODULE: ./src/scenes/game.vue



;

const __exports__ = gamevue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const game = (__exports__);

/***/ }),

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/menu.vue?vue&type=script&setup=true&lang=ts
var menuvue_type_script_setup_true_lang_ts = __webpack_require__(1309);
;// CONCATENATED MODULE: ./src/scenes/menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/menu.vue?vue&type=style&index=0&id=d135c0fc&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/menu.vue?vue&type=style&index=0&id=d135c0fc&lang=scss

;// CONCATENATED MODULE: ./src/scenes/menu.vue



;

const __exports__ = menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const menu = (__exports__);

/***/ }),

/***/ 6418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ pause_menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ pause_menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/pause-menu.vue?vue&type=script&setup=true&lang=ts
var pause_menuvue_type_script_setup_true_lang_ts = __webpack_require__(8083);
;// CONCATENATED MODULE: ./src/scenes/pause-menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/pause-menu.vue?vue&type=style&index=0&id=2b98350d&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/pause-menu.vue?vue&type=style&index=0&id=2b98350d&lang=scss

;// CONCATENATED MODULE: ./src/scenes/pause-menu.vue



;

const __exports__ = pause_menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const pause_menu = (__exports__);

/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preload)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/preload.vue?vue&type=template&id=6060533a


const _hoisted_1 = { class: "au-preload-scene" }
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "images/icon-only-transparent.png",
  class: "preload-splash-img"
}, null, -1)
const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "dot-flashing" }, null, -1)
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
]

function render(_ctx, _cache) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, _hoisted_4))
}
;// CONCATENATED MODULE: ./src/scenes/preload.vue?vue&type=template&id=6060533a

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/preload.vue?vue&type=style&index=0&id=6060533a&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/preload.vue?vue&type=style&index=0&id=6060533a&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/scenes/preload.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const preload = (__exports__);

/***/ }),

/***/ 7987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ score_menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ score_menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/score-menu.vue?vue&type=script&setup=true&lang=ts
var score_menuvue_type_script_setup_true_lang_ts = __webpack_require__(9015);
;// CONCATENATED MODULE: ./src/scenes/score-menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/score-menu.vue?vue&type=style&index=0&id=16f11618&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/score-menu.vue?vue&type=style&index=0&id=16f11618&lang=scss

;// CONCATENATED MODULE: ./src/scenes/score-menu.vue



;

const __exports__ = score_menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const score_menu = (__exports__);

/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ theme_menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ theme_menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/theme-menu.vue?vue&type=script&setup=true&lang=ts
var theme_menuvue_type_script_setup_true_lang_ts = __webpack_require__(4157);
;// CONCATENATED MODULE: ./src/scenes/theme-menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/theme-menu.vue?vue&type=style&index=0&id=6a0e12b6&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/theme-menu.vue?vue&type=style&index=0&id=6a0e12b6&lang=scss

;// CONCATENATED MODULE: ./src/scenes/theme-menu.vue



;

const __exports__ = theme_menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const theme_menu = (__exports__);

/***/ }),

/***/ 5303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__esModule": () => (/* reexport */ tutorial_menuvue_type_script_setup_true_lang_ts/* __esModule */.X),
  "default": () => (/* binding */ tutorial_menu)
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-1.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/tutorial-menu.vue?vue&type=script&setup=true&lang=ts
var tutorial_menuvue_type_script_setup_true_lang_ts = __webpack_require__(9482);
;// CONCATENATED MODULE: ./src/scenes/tutorial-menu.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-3.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/scenes/tutorial-menu.vue?vue&type=style&index=0&id=cad5f3d4&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/scenes/tutorial-menu.vue?vue&type=style&index=0&id=cad5f3d4&lang=scss

;// CONCATENATED MODULE: ./src/scenes/tutorial-menu.vue



;

const __exports__ = tutorial_menuvue_type_script_setup_true_lang_ts/* default */.Z;

/* harmony default export */ const tutorial_menu = (__exports__);

/***/ }),

/***/ 6837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoScroll": () => (/* binding */ AutoScrollPlugin),
/* harmony export */   "MultiDrag": () => (/* binding */ MultiDragPlugin),
/* harmony export */   "OnSpill": () => (/* binding */ OnSpill),
/* harmony export */   "Sortable": () => (/* binding */ Sortable),
/* harmony export */   "Swap": () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var OnSpill = [Remove, Revert];

var swapValidEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragOver: function dragOver(_ref) {
      var activeSortable = _ref.activeSortable,
          target = _ref.target,
          dragEl = _ref.dragEl,
          onMove = _ref.onMove,
          completed = _ref.completed,
          cancel = _ref.cancel;
      var el = this.sortable.el,
          options = this.options;

      if (!activeSortable.options.swap || !target || target === el || target.contains(dragEl) || onMove(target) === false) {
        swapValidEl && toggleClass(swapValidEl, options.swapClass, false);
        swapValidEl = null;
        completed(false);
        cancel();
      }
    },
    dragOverValid: function dragOverValid(_ref2) {
      var target = _ref2.target,
          changed = _ref2.changed,
          completed = _ref2.completed,
          cancel = _ref2.cancel;
      var options = this.options;

      if (swapValidEl && swapValidEl !== target) {
        toggleClass(swapValidEl, options.swapClass, false);
      }

      toggleClass(target, options.swapClass, true);
      swapValidEl = target;
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      if (!swapValidEl) return;
      var toSortable = putSortable || this.sortable,
          options = this.options;
      toggleClass(swapValidEl, options.swapClass, false);

      if (options.swap || putSortable && putSortable.options.swap) {
        toSortable.captureAnimationState();
        if (toSortable !== activeSortable) activeSortable.captureAnimationState();
        swapNodes(dragEl, swapValidEl);
        toSortable.animateAll();
        if (toSortable !== activeSortable) activeSortable.animateAll();
      }
    },
    nulling: function nulling() {
      swapValidEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: swapValidEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [590], () => (__webpack_exec__(7778)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.3f54b787.js.map