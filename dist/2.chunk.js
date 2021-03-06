webpackJsonp([2],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel1_05_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ef4ed9c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel1_05_vue__ = __webpack_require__(23);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel1_05_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ef4ed9c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel1_05_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Carousel1_05.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Carousel1_05.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ef4ed9c", Component.options)
  } else {
    hotAPI.reload("data-v-2ef4ed9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import {store} from "../js/store.js";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      items: [{
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
      }, {
        itemName: "item2",
        description: "desc2",
        imgSrc: "",
        isActive: false
      }, {
        itemName: "item3",
        description: "desc3",
        imgSrc: "",
        isActive: false
      }],
      cIndex: 0,
      activePageButton: 0
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {},
  methods: {
    prevItem: function prevItem() {
      var cIndex = this.cIndex;
      var items = this.items;

      if (cIndex === 0) {
        cIndex = items.length; // go to last
      }
      cIndex = cIndex - 1;

      this.cIndex = cIndex;
      this.setActivePageButton(this.cIndex);
    },
    nextItem: function nextItem() {
      var cIndex = this.cIndex;
      var items = this.items;

      cIndex = cIndex + 1;
      cIndex = cIndex % items.length; // go to first

      this.cIndex = cIndex;
      this.setActivePageButton(this.cIndex);
    },
    customPage: function customPage(num) {
      this.cIndex = num;
      this.setActivePageButton(num);
    },
    setActivePageButton: function setActivePageButton(index) {
      var activeItem = index;
      var activePageButton = this.activePageButton;

      this.items[activeItem].isActive = true;

      if (activePageButton !== activeItem) {
        this.items[activePageButton].isActive = false;

        // set current activePageButton
        this.activePageButton = activeItem;
      }
    }
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "vueCarousel105"
  }, [_c('div', {
    staticClass: "vueCarousel105_content"
  }, [_vm._v("\r\n      " + _vm._s(_vm.items[_vm.cIndex].itemName)), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "vueCarousel105_description"
  }, [_vm._v("\r\n        " + _vm._s(_vm.items[_vm.cIndex].description) + "\r\n      ")])]), _vm._v(" "), _c('nav', {
    staticClass: "vueCarousel105_pagination",
    attrs: {
      "id": "vueCarousel105_pagination"
    }
  }, _vm._l((_vm.items), function(i, index) {
    return _c('div', {
      staticClass: "vueCarousel105_pagebuttons",
      class: {
        vueCarousel105_active: i.isActive
      },
      attrs: {
        "aria-selected": i.isActive
      },
      on: {
        "click": function($event) {
          _vm.customPage(index)
        }
      }
    })
  })), _vm._v(" "), _c('div', {
    staticClass: "row vueCarousel105_prevnext"
  }, [_c('span', {
    staticClass: "vueCarousel105_previous",
    on: {
      "click": function($event) {
        _vm.prevItem()
      }
    }
  }, [_c('svg', {
    staticClass: "vueCarousel105_chevron",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "vueCarousel105_next",
    on: {
      "click": function($event) {
        _vm.nextItem()
      }
    }
  }, [_c('svg', {
    staticClass: "vueCarousel105_chevron",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ef4ed9c", esExports)
  }
}

/***/ })

});