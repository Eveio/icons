'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

//
//
//
//
//
//

var script = {
  name: 'IconBase',

  props: {
    viewBox: {
      type: String,
      default: '0 0 40 40'
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "svg",
    {
      staticClass: "icon",
      attrs: {
        viewBox: _vm.viewBox,
        fill: "none",
        xmlns: "https://www.w3.org/2000/svg"
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-52a89cfe_0", { source: ".icon[data-v-52a89cfe] {\n  display: inline-block;\n  vertical-align: sub;\n  width: 20px;\n  height: 20px;\n}\n.icon.icon-xs[data-v-52a89cfe] {\n  width: 16px;\n  height: 16px;\n}\n.icon.icon-m[data-v-52a89cfe] {\n  width: 40px;\n  height: 40px;\n}\n.icon.icon-l[data-v-52a89cfe] {\n  width: 64px;\n  height: 64px;\n}\n.icon.icon-xl[data-v-52a89cfe] {\n  width: 96px;\n  height: 96px;\n}\n.icon.icon-xxl[data-v-52a89cfe] {\n  width: 128px;\n  height: 128px;\n}\n@keyframes rotate-data-v-52a89cfe {\nto {\n    transform: rotate(1turn);\n}\n}\n[data-v-52a89cfe].rotate {\n  animation: rotate-data-v-52a89cfe 3s linear infinite;\n}\n[data-v-52a89cfe].rotate path:nth-child(1) {\n  opacity: 1;\n}\n[data-v-52a89cfe].rotate path:nth-child(2) {\n  opacity: 0.91;\n}\n[data-v-52a89cfe].rotate path:nth-child(3) {\n  opacity: 0.82;\n}\n[data-v-52a89cfe].rotate path:nth-child(4) {\n  opacity: 0.73;\n}\n[data-v-52a89cfe].rotate path:nth-child(5) {\n  opacity: 0.64;\n}\n[data-v-52a89cfe].rotate path:nth-child(6) {\n  opacity: 0.55;\n}\n[data-v-52a89cfe].rotate path:nth-child(7) {\n  opacity: 0.46;\n}\n[data-v-52a89cfe].rotate path:nth-child(8) {\n  opacity: 0.37;\n}\n\n/*# sourceMappingURL=IconBase.vue.map */", map: {"version":3,"sources":["/Users/an/Projects/eve-icons/src/IconBase.vue","IconBase.vue"],"names":[],"mappings":"AAoBA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;ACnBA;ADqBA;EACA,WAAA;EACA,YAAA;ACnBA;ADsBA;EACA,WAAA;EACA,YAAA;ACpBA;ADuBA;EACA,WAAA;EACA,YAAA;ACrBA;ADwBA;EACA,WAAA;EACA,YAAA;ACtBA;ADyBA;EACA,YAAA;EACA,aAAA;ACvBA;AD2BA;AACA;IACA,wBAAA;ACxBE;AACF;AD2BA;EACA,oDAAA;ACzBA;AD4BA;EACA,UAAA;AC1BA;ADyBA;EACA,aAAA;ACvBA;ADsBA;EACA,aAAA;ACpBA;ADmBA;EACA,aAAA;ACjBA;ADgBA;EACA,aAAA;ACdA;ADaA;EACA,aAAA;ACXA;ADUA;EACA,aAAA;ACRA;ADOA;EACA,aAAA;ACLA;;AAEA,uCAAuC","file":"IconBase.vue","sourcesContent":["<template>\n  <svg class=\"icon\" :viewBox=\"viewBox\" fill=\"none\" xmlns=\"https://www.w3.org/2000/svg\">\n    <slot></slot>\n  </svg>\n</template>\n\n<script>\nexport default {\n  name: 'IconBase',\n\n  props: {\n    viewBox: {\n      type: String,\n      default: '0 0 40 40'\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.icon {\n  display: inline-block;\n  vertical-align: sub;\n  width: 20px;\n  height: 20px;\n\n  &.icon-xs {\n    width: 16px;\n    height: 16px;\n  }\n\n  &.icon-m {\n    width: 40px;\n    height: 40px;\n  }\n\n  &.icon-l {\n    width: 64px;\n    height: 64px;\n  }\n\n  &.icon-xl {\n    width: 96px;\n    height: 96px;\n  }\n\n  &.icon-xxl {\n    width: 128px;\n    height: 128px;\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n::v-deep.rotate {\n  animation: rotate 3s linear infinite;\n\n  @for $i from 1 through 8 {\n    path:nth-child(#{$i}) {\n      opacity: 1 - (($i - 1) * 0.09);\n    }\n  }\n}\n</style>\n",".icon {\n  display: inline-block;\n  vertical-align: sub;\n  width: 20px;\n  height: 20px;\n}\n.icon.icon-xs {\n  width: 16px;\n  height: 16px;\n}\n.icon.icon-m {\n  width: 40px;\n  height: 40px;\n}\n.icon.icon-l {\n  width: 64px;\n  height: 64px;\n}\n.icon.icon-xl {\n  width: 96px;\n  height: 96px;\n}\n.icon.icon-xxl {\n  width: 128px;\n  height: 128px;\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(1turn);\n  }\n}\n::v-deep.rotate {\n  animation: rotate 3s linear infinite;\n}\n::v-deep.rotate path:nth-child(1) {\n  opacity: 1;\n}\n::v-deep.rotate path:nth-child(2) {\n  opacity: 0.91;\n}\n::v-deep.rotate path:nth-child(3) {\n  opacity: 0.82;\n}\n::v-deep.rotate path:nth-child(4) {\n  opacity: 0.73;\n}\n::v-deep.rotate path:nth-child(5) {\n  opacity: 0.64;\n}\n::v-deep.rotate path:nth-child(6) {\n  opacity: 0.55;\n}\n::v-deep.rotate path:nth-child(7) {\n  opacity: 0.46;\n}\n::v-deep.rotate path:nth-child(8) {\n  opacity: 0.37;\n}\n\n/*# sourceMappingURL=IconBase.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-52a89cfe";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

function compose (name) {
    return Vue__default['default'].extend({
        name: name,
        components: {
            IconBase: __vue_component__
        }
    });
}

//

var script$1 = compose('IconAccreditation');

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "accreditation", fill: "currentColor" } }, [
      _c("path", {
        attrs: {
          d:
            "M17.037 2.917h-4.074c0-.774-.312-1.516-.868-2.063A2.987 2.987 0 0010 0c-.786 0-1.54.307-2.095.854a2.894 2.894 0 00-.868 2.063H2.963c-.786 0-1.54.307-2.095.854A2.894 2.894 0 000 5.833v8.75c0 .774.312 1.516.868 2.063.555.547 1.31.854 2.095.854h14.074c.786 0 1.54-.307 2.095-.854A2.894 2.894 0 0020 14.583v-8.75c0-.773-.312-1.515-.868-2.062a2.987 2.987 0 00-2.095-.854zM10 1.458c.393 0 .77.154 1.048.427.277.274.434.645.434 1.032H8.518c0-.387.156-.758.433-1.032A1.494 1.494 0 0110 1.458zm-.37 14.584v-.73c0-.773.312-1.515.867-2.062a2.987 2.987 0 012.096-.854c.785 0 1.54.307 2.095.854.555.547.868 1.289.868 2.063v.729H9.63zm1.481-6.563c0-.288.087-.57.25-.81.163-.24.394-.427.665-.537a1.503 1.503 0 011.614.316 1.437 1.437 0 01.321 1.59 1.463 1.463 0 01-.545.654 1.498 1.498 0 01-1.871-.182 1.447 1.447 0 01-.434-1.03zm7.407 5.104c0 .387-.156.758-.433 1.031a1.493 1.493 0 01-1.048.428v-.73c0-.782-.213-1.55-.618-2.225a4.413 4.413 0 00-1.682-1.606 2.9 2.9 0 00.771-1.495 2.875 2.875 0 00-.192-1.666 2.928 2.928 0 00-1.092-1.287 2.997 2.997 0 00-3.263 0A2.928 2.928 0 009.87 8.32a2.875 2.875 0 00-.192 1.666 2.9 2.9 0 00.771 1.495 4.413 4.413 0 00-1.682 1.606 4.323 4.323 0 00-.618 2.226v.729H2.963c-.393 0-.77-.154-1.048-.428a1.447 1.447 0 01-.434-1.03v-8.75c0-.387.157-.758.434-1.032a1.493 1.493 0 011.048-.427h14.074c.393 0 .77.154 1.048.427.277.274.433.645.433 1.031v8.75z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M3.704 9.167h2.963a.702.702 0 00.523-.244.889.889 0 00.217-.59.889.889 0 00-.217-.589.702.702 0 00-.523-.244H3.704a.702.702 0 00-.524.244.889.889 0 00-.217.59c0 .22.078.432.217.589a.702.702 0 00.524.244zM3.704 10.417a.702.702 0 00-.524.244.89.89 0 00-.217.59c0 .22.078.432.217.588a.702.702 0 00.524.244h2.963a.702.702 0 00.523-.244.889.889 0 00.217-.589.89.89 0 00-.217-.59.702.702 0 00-.523-.243H3.704z"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$2 = compose('IconActivity');

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "activity" } }, [
      _c("path", {
        attrs: {
          d: "M18.333 10H15l-2.5 7.5-5-15L5 10H1.667",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$3 = compose('IconAdd');

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 32 32" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "add",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [_c("path", { attrs: { d: "M16 6.667v18.667M6.667 16h18.666" } })]
    )
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$4 = compose('IconSliders');

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("path", {
      attrs: {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d:
          "M3.333 17.5v-5.833m0-3.334V2.5M10 17.5V10m0-3.333V2.5m6.667 15v-4.167m0-3.333V2.5M.833 11.667h5m1.667-5h5m1.667 6.666h5",
        id: "sliders"
      }
    })
  ])
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$5 = compose('IconAlcohol');

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        d:
          "M18.041 13.345a7.614 7.614 0 001.633-2.869 7.41 7.41 0 00.246-3.26L18.973.86a.99.99 0 00-.352-.618A1.067 1.067 0 0017.93 0H6.482a1.069 1.069 0 00-.668.215.995.995 0 00-.373.575L4.18 6.695a7.374 7.374 0 00-.034 3.085A7.509 7.509 0 005.38 12.63a7.848 7.848 0 002.303 2.15c.911.56 1.931.937 2.998 1.106a.91.91 0 00-.026.115v6H7.533c-.276 0-.541.105-.736.293a.98.98 0 00-.305.707c0 .265.11.52.305.707.195.188.46.293.736.293h8.327c.276 0 .541-.105.736-.293a.98.98 0 00.305-.707.98.98 0 00-.305-.707A1.063 1.063 0 0015.86 22h-3.123v-6a.112.112 0 000-.04c2.054-.18 3.955-1.117 5.304-2.615zM17.041 2l.745 5a.962.962 0 00-.307.08l-1.187.57a3.205 3.205 0 01-2.034.252 3.114 3.114 0 01-1.75-1.027 5.23 5.23 0 00-2.71-1.677 5.406 5.406 0 00-3.218.177L7.335 2h9.707zm-5.053 12a6.124 6.124 0 01-2.387-.48 5.918 5.918 0 01-1.983-1.363 5.642 5.642 0 01-1.242-2.016 5.476 5.476 0 01-.29-2.326l1.04-.5a3.239 3.239 0 012.037-.232 3.145 3.145 0 011.748 1.032 5.14 5.14 0 001.786 1.381 5.347 5.347 0 004.527.004l.62-.3a5.627 5.627 0 01-2.004 3.44A6.06 6.06 0 0111.988 14z",
        fill: "currentColor",
        id: "alcohol"
      }
    })
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$6 = compose('IconArrow');

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M14 5l7 7m0 0l-7 7m7-7H3",
        stroke: "currentColor",
        id: "arrow"
      }
    })
  ])
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$7 = compose('IconAttachment');

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        d:
          "M21.44 11.05l-9.19 9.19a6.003 6.003 0 11-8.49-8.49l9.19-9.19a4.002 4.002 0 015.66 5.66l-9.2 9.19a2.001 2.001 0 11-2.83-2.83l8.49-8.48",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "attachment"
      }
    })
  ])
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$8 = compose('IconError');

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "error" } }, [
      _c("path", {
        attrs: {
          fill: "currentColor",
          d:
            "M4.102 0h5.796L14 4.102v5.796L9.898 14H4.102L0 9.898V4.102L4.102 0z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          stroke: "#fff",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M7 3v4m0 4h.01"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$9 = compose('IconAvatar');

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 36 36" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "avatar",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M18 33c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15z"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M27 29.625v-2.25a4.5 4.5 0 00-4.5-4.5h-9a4.5 4.5 0 00-4.5 4.5v2.25M18 18.375a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$a = compose('IconBlock');

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("path", {
      attrs: {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d:
          "M10 18.333c4.602 0 8.333-3.73 8.333-8.333S14.603 1.667 10 1.667 1.667 5.397 1.667 10A8.333 8.333 0 0010 18.333zM4.108 4.108l11.784 11.784",
        id: "block"
      }
    })
  ])
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$a = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$b = compose('IconBudget');

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "budget" } }, [
      _c(
        "g",
        {
          attrs: {
            "clip-path": "url(#clip0)",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 .833v18.334M14.167 4.167h-6.25a2.917 2.917 0 100 5.833h4.166a2.917 2.917 0 110 5.833H5"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0h20v20H0V0z", fill: "#fff" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$b = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$c = compose('IconBurger');

/* script */
const __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M3 12h18M3 6h18M3 18h18",
        id: "burger"
      }
    })
  ])
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$c = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$d = compose('IconCalendar');

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "calendar",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$d = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$e = compose('IconCalendarDetailed');

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "calendar-detailed", fill: "currentColor" } }, [
      _c("path", {
        attrs: {
          d:
            "M20 2h-1V1a.997.997 0 00-1-1 .997.997 0 00-1 1v1h-4V1a.997.997 0 00-1-1 .997.997 0 00-1 1v1H7V1a.997.997 0 00-1-1 .997.997 0 00-1 1v1H4a4 4 0 00-4 4v14a4 4 0 004 4h16a4 4 0 004-4V6a4 4 0 00-4-4zM4 4h1v1a.997.997 0 001 1 .997.997 0 001-1V4h4v1a.997.997 0 001 1 .997.997 0 001-1V4h4v1a.997.997 0 001 1 .997.997 0 001-1V4h1c.53 0 1.04.21 1.414.586C21.79 4.96 22 5.47 22 6v2H2V6c0-.53.21-1.04.586-1.414A1.995 1.995 0 014 4zm16 18H4c-.53 0-1.04-.21-1.414-.586A1.995 1.995 0 012 20V10h20v10c0 .53-.21 1.04-.586 1.414A1.995 1.995 0 0120 22z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M6 15a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm4-4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$e = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$f = compose('IconCamera');

/* script */
const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "camera",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
          }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M12 17a4 4 0 100-8 4 4 0 000 8z" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$f = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$g = compose('IconComplete');

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 15" } }, [
    _c("path", {
      attrs: {
        d: "M18 2L7 13 2 8",
        stroke: "currentColor",
        "stroke-width": "3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "complete"
      }
    })
  ])
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$g = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$h = compose('IconChevron');

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        d: "M9 18l6-6-6-6",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "chevron"
      }
    })
  ])
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$h = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$i = compose('IconCircleClose');

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "circle-close",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM15 9l-6 6M9 9l6 6"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$i = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$j = compose('IconClock');

/* script */
const __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "clock",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M12 6v6l4 2" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$j = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$k = compose('IconClose');

/* script */
const __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "close",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [_c("path", { attrs: { d: "M18 6L6 18M6 6l12 12" } })]
    )
  ])
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$k = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$l = compose('IconCompanyInfo');

/* script */
const __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "company-info",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M16.667 5.833H3.333c-.92 0-1.666.747-1.666 1.667v8.334c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666V7.5c0-.92-.746-1.667-1.666-1.667zM13.333 5.833V4.167A1.667 1.667 0 0011.667 2.5H8.333a1.667 1.667 0 00-1.666 1.667v1.666"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$l = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$m = compose('IconContractor');

/* script */
const __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 19 20" } }, [
    _c("path", {
      attrs: {
        d:
          "M18.333 10a.833.833 0 00-.166-.5c0-.03-2.113-2.875-2.317-7.883A1.667 1.667 0 0014.167 0H12.5a1.667 1.667 0 00-1.667 1.667v2.5a1.667 1.667 0 11-3.333 0v-2.5A1.667 1.667 0 005.833 0H4.167A1.667 1.667 0 002.5 1.617C2.3 6.587.204 9.475.183 9.5A.833.833 0 000 10v7.5A2.5 2.5 0 002.5 20h13.333a2.5 2.5 0 002.5-2.5V10zM1.667 17.5v-7.242c.554-.833 2.291-3.845 2.5-8.591h1.666v2.5a3.333 3.333 0 002.5 3.22 1.066 1.066 0 000 .113V10h-2.5a.833.833 0 100 1.667h2.5v2.5h-2.5a.833.833 0 100 1.666h2.5v2.5H2.5a.834.834 0 01-.833-.833zm15 0a.833.833 0 01-.834.833H10v-2.5h2.5a.833.833 0 100-1.666H10v-2.5h2.5a.833.833 0 100-1.667H10V7.5a1.082 1.082 0 000-.112 3.333 3.333 0 002.5-3.221v-2.5h1.667c.191 4.733 1.929 7.733 2.5 8.575V17.5z",
        fill: "currentColor",
        id: "contractor"
      }
    })
  ])
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$m = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$n = compose('IconDashboard');

/* script */
const __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "dashboard",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: { d: "M19.167 5l-7.917 7.917L7.083 8.75.833 15" }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M14.167 5h5v5" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$n = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$o = compose('IconEdit');

/* script */
const __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 32 32" } }, [
    _c("path", {
      attrs: {
        d: "M21 7a2.827 2.827 0 114 4L11.5 24.5 6 26l1.5-5.5L21 7z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "edit"
      }
    })
  ])
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$o = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$p = compose('IconEvent');

/* script */
const __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "event", fill: "currentColor" } }, [
      _c("path", {
        attrs: {
          d:
            "M3.333 20h13.334A3.333 3.333 0 0020 16.667V5a3.333 3.333 0 00-3.333-3.333h-.834V.833a.834.834 0 00-1.666 0v.834h-3.334V.833a.834.834 0 00-1.666 0v.834H5.833V.833a.833.833 0 10-1.666 0v.834h-.834A3.333 3.333 0 000 5v11.667A3.333 3.333 0 003.333 20zm13.334-1.667H3.333a1.667 1.667 0 01-1.666-1.666V8.333h16.666v8.334a1.667 1.667 0 01-1.666 1.666zm-13.334-15h.834v.834a.833.833 0 101.666 0v-.834h3.334v.834a.833.833 0 101.666 0v-.834h3.334v.834a.834.834 0 001.666 0v-.834h.834A1.667 1.667 0 0118.333 5v1.667H1.667V5a1.667 1.667 0 011.666-1.667z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12.5 12.5h-1.667v-1.667a.833.833 0 00-1.666 0V12.5H7.5a.833.833 0 100 1.667h1.667v1.666a.833.833 0 001.666 0v-1.666H12.5a.833.833 0 100-1.667z"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$p = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$q = compose('IconEventInfo');

/* script */
const __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 28" } }, [
    _c("g", { attrs: { id: "event-info" } }, [
      _c(
        "g",
        {
          attrs: {
            "clip-path": "url(#clip0)",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M11.944 5.509c-1.354 0-1.805 1.182-1.805 1.182V2.985s.451-.446 1.805-.446c1.354 0 2.257.892 3.611.892 1.355 0 1.806-.446 1.806-.446v.179s-.12 3.013-1.944 3.013c-2.084 0-2.119-.668-3.473-.668zM10.139 9.814V6.69"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("g", { attrs: { "clip-path": "url(#clip1)" } }, [
        _c("path", {
          attrs: {
            d:
              "M2.5 15.646L10 9.883l7.5 5.764v9.06c0 .436-.176.855-.488 1.164a1.676 1.676 0 01-1.179.482H4.167c-.442 0-.866-.173-1.179-.482a1.637 1.637 0 01-.488-1.165v-9.058z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M2.5 15.647s1.667 1.647 3.75 1.647c1.219 0 2.295-.564 2.979-1.032.452-.31 1.09-.31 1.542 0 .684.468 1.76 1.032 2.979 1.032 2.083 0 3.75-1.647 3.75-1.647",
          stroke: "currentColor",
          "stroke-width": "2"
        }
      }),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", {
            attrs: { fill: "#fff", d: "M8.333 0h10.833v10.706H8.333z" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip1" } }, [
          _c("path", { attrs: { d: "M0 8.235h20V28H0V8.235z", fill: "#fff" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$q = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$r = compose('IconHospital');

/* script */
const __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "event-logs", fill: "currentColor" } }, [
      _c("path", {
        attrs: {
          d:
            "M15.783 2.505h-2.45c0-.664-.263-1.301-.732-1.771A2.497 2.497 0 0010.833 0H2.5C1.837 0 1.201.264.732.734A2.508 2.508 0 000 2.505v12.526c0 .664.263 1.301.732 1.771.47.47 1.105.734 1.768.734h.117a3.33 3.33 0 006.433 0h1.9A3.34 3.34 0 0014.167 20a3.33 3.33 0 003.216-2.464h.117c.663 0 1.299-.264 1.768-.734.469-.47.732-1.107.732-1.771V6.735a4.234 4.234 0 00-1.235-2.99 4.216 4.216 0 00-2.982-1.24zm0 1.67a2.552 2.552 0 011.804.751c.478.48.746 1.13.746 1.809v3.285h-4.062a.937.937 0 01-.938-.939V4.175h2.45zm-9.95 14.196a1.664 1.664 0 01-1.54-1.031 1.674 1.674 0 011.215-2.277 1.663 1.663 0 011.711.71 1.673 1.673 0 01-.207 2.109c-.313.313-.737.489-1.179.489zm8.334 0a1.664 1.664 0 01-1.54-1.031 1.673 1.673 0 011.214-2.277 1.663 1.663 0 011.711.71 1.672 1.672 0 01-1.385 2.598zm3.333-2.505h-.117a3.34 3.34 0 00-3.216-2.464c-.732 0-1.444.24-2.025.686a3.34 3.34 0 00-1.192 1.778h-1.9a3.34 3.34 0 00-3.217-2.464 3.329 3.329 0 00-3.216 2.464H2.5a.833.833 0 01-.833-.835V2.505A.836.836 0 012.5 1.67h8.333a.833.833 0 01.834.835v6.576a2.601 2.601 0 002.604 2.61h4.062v3.34a.836.836 0 01-.833.835z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M9.167 6.68H7.5V5.01a.836.836 0 00-.833-.835.832.832 0 00-.834.835v1.67H4.167a.832.832 0 00-.834.835.836.836 0 00.834.835h1.666v1.67a.836.836 0 00.834.836.832.832 0 00.833-.835V8.35h1.667A.832.832 0 0010 7.514a.836.836 0 00-.833-.835z"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$r = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$s = compose('IconExcel');

/* script */
const __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 30 30" } }, [
    _c("g", { attrs: { id: "excel" } }, [
      _c("path", {
        attrs: {
          d:
            "M29.063 25.313H15.938a.938.938 0 01-.938-.938V5.625c0-.518.42-.938.938-.938h13.124c.518 0 .938.42.938.938v18.75c0 .517-.42.938-.938.938z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M19.688 10.313h-3.75a.938.938 0 010-1.876h3.75a.938.938 0 010 1.876zM19.688 14.063h-3.75a.938.938 0 010-1.876h3.75a.938.938 0 010 1.876zM19.688 17.813h-3.75a.938.938 0 010-1.875h3.75a.938.938 0 010 1.874zM19.688 21.563h-3.75a.938.938 0 010-1.875h3.75a.938.938 0 010 1.875zM25.313 10.313h-1.875a.938.938 0 010-1.876h1.875a.938.938 0 010 1.876zM25.313 14.063h-1.875a.938.938 0 010-1.876h1.875a.938.938 0 010 1.876zM25.313 17.813h-1.875a.938.938 0 010-1.875h1.875a.938.938 0 010 1.874zM25.313 21.563h-1.875a.938.938 0 010-1.875h1.875a.938.938 0 010 1.875z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M16.536 1.152a.921.921 0 00-.771-.198l-15 2.812a.935.935 0 00-.765.92v20.626c0 .45.32.838.765.92l15 2.813a.933.933 0 00.77-.199.938.938 0 00.34-.722V1.874a.935.935 0 00-.34-.722z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12.893 18.132l-2.965-3.388 2.998-3.855a.939.939 0 00-.163-1.316.94.94 0 00-1.316.163l-2.777 3.57-2.34-2.674a.933.933 0 00-1.322-.088.936.936 0 00-.088 1.322l2.578 2.947-2.614 3.36a.939.939 0 101.482 1.152l2.39-3.075 2.726 3.114a.93.93 0 001.322.09.936.936 0 00.088-1.322z"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$s = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$t = compose('IconFile');

/* script */
const __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 30 30" } }, [
    _c("path", {
      attrs: {
        d:
          "M3.5 4A3.5 3.5 0 017 .5h10.23a3.5 3.5 0 012.59 1.146l3.794 4.173L25.8 8.733a3.5 3.5 0 01.7 2.1V26a3.5 3.5 0 01-3.5 3.5H7A3.5 3.5 0 013.5 26V4z",
        stroke: "currentColor",
        "stroke-width": "1.2",
        id: "file"
      }
    })
  ])
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$t = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$u = compose('IconFlag');

/* script */
const __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "flag",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M4 10s.875-1 3.5-1 4.375 1 7 1C18 10 18 3.5 18 3.5V3s-.875 1-3.5 1-4.375-2-7-2S4 3 4 3v7zM4 22V10"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$u = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$v = compose('IconGrid');

/* script */
const __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "grid",
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d: "M10 3H3v7h7V3zM21 3h-7v7h7V3zM21 14h-7v7h7v-7zM10 14H3v7h7v-7z"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$v = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$w = compose('IconHome');

/* script */
const __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "home",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M2.5 7.5L10 1.667 17.5 7.5v9.167a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z"
          }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M7.5 18.333V10h5v8.333" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = undefined;
  /* scoped */
  const __vue_scope_id__$w = undefined;
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$w = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$x = compose('IconLoading');

/* script */
const __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "loading",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M12 2v4M16.24 7.76l2.83-2.83M18 12h4M16.24 16.24l2.83 2.83M12 18v4M4.93 19.07l2.83-2.83M2 12h4M4.93 4.93l2.83 2.83"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$x = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$y = compose('IconLocation');

/* script */
const __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("path", {
      attrs: {
        d: "M2.5 9.167l15.833-7.5-7.5 15.833-1.666-6.667L2.5 9.167z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "location"
      }
    })
  ])
};
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = undefined;
  /* scoped */
  const __vue_scope_id__$y = undefined;
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$y = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$z = compose('IconLocationPin');

/* script */
const __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "location-pin",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M12 13a3 3 0 100-6 3 3 0 000 6z" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = undefined;
  /* scoped */
  const __vue_scope_id__$z = undefined;
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$z = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$A = compose('IconMoreHorizontal');

/* script */
const __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 40 40" } }, [
    _c("path", {
      attrs: {
        fill: "currentColor",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d:
          "M21.666 20a1.667 1.667 0 10-3.334 0 1.667 1.667 0 003.334 0zM10 20a1.667 1.667 0 10-3.334 0A1.667 1.667 0 0010 20zm23.333 0a1.667 1.667 0 10-3.334 0 1.667 1.667 0 003.334 0z",
        id: "more-horizontal"
      }
    })
  ])
};
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = undefined;
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$A = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$B = compose('IconMusic');

/* script */
const __vue_script__$B = script$B;

/* template */
var __vue_render__$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "music",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2"
        }
      },
      [
        _c("path", {
          attrs: { d: "M9 18V5l12-2v13M6 21a3 3 0 100-6 3 3 0 000 6z" }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M18 19a3 3 0 100-6 3 3 0 000 6z" } })
      ]
    )
  ])
};
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = undefined;
  /* scoped */
  const __vue_scope_id__$B = undefined;
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$B = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$C = compose('IconNotification');

/* script */
const __vue_script__$C = script$C;

/* template */
var __vue_render__$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 36 36" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "notification",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M27 12a9 9 0 10-18 0c0 10.5-4.5 13.5-4.5 13.5h27S27 22.5 27 12zM20.595 31.5a3 3 0 01-5.19 0"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$C = [];
__vue_render__$C._withStripped = true;

  /* style */
  const __vue_inject_styles__$C = undefined;
  /* scoped */
  const __vue_scope_id__$C = undefined;
  /* module identifier */
  const __vue_module_identifier__$C = undefined;
  /* functional template */
  const __vue_is_functional_template__$C = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$C = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
    __vue_inject_styles__$C,
    __vue_script__$C,
    __vue_scope_id__$C,
    __vue_is_functional_template__$C,
    __vue_module_identifier__$C,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$D = compose('IconOrganizer');

/* script */
const __vue_script__$D = script$D;

/* template */
var __vue_render__$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "organiser",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M16 4h2c.53 0 1.04.21 1.414.586C19.79 4.96 20 5.47 20 6v14c0 .53-.21 1.04-.586 1.414A1.995 1.995 0 0118 22H6c-.53 0-1.04-.21-1.414-.586A1.995 1.995 0 014 20V6c0-.53.21-1.04.586-1.414A1.995 1.995 0 016 4h2"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$D = [];
__vue_render__$D._withStripped = true;

  /* style */
  const __vue_inject_styles__$D = undefined;
  /* scoped */
  const __vue_scope_id__$D = undefined;
  /* module identifier */
  const __vue_module_identifier__$D = undefined;
  /* functional template */
  const __vue_is_functional_template__$D = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$D = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
    __vue_inject_styles__$D,
    __vue_script__$D,
    __vue_scope_id__$D,
    __vue_is_functional_template__$D,
    __vue_module_identifier__$D,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$E = compose('IconQuestionMark');

/* script */
const __vue_script__$E = script$E;

/* template */
var __vue_render__$E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "question-mark" } }, [
      _c("path", {
        attrs: {
          d:
            "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7.09 7a3 3 0 015.83 1c0 2-2.92 3-2.92 4.5M10 15h.01",
          stroke: "#fff",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$E = [];
__vue_render__$E._withStripped = true;

  /* style */
  const __vue_inject_styles__$E = undefined;
  /* scoped */
  const __vue_scope_id__$E = undefined;
  /* module identifier */
  const __vue_module_identifier__$E = undefined;
  /* functional template */
  const __vue_is_functional_template__$E = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$E = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
    __vue_inject_styles__$E,
    __vue_script__$E,
    __vue_scope_id__$E,
    __vue_is_functional_template__$E,
    __vue_module_identifier__$E,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$F = compose('IconRegulations');

/* script */
const __vue_script__$F = script$F;

/* template */
var __vue_render__$F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "regulations",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M1.667 2.5h5A3.333 3.333 0 0110 5.833V17.5A2.5 2.5 0 007.5 15H1.667V2.5zM18.333 2.5h-5A3.333 3.333 0 0010 5.833V17.5a2.5 2.5 0 012.5-2.5h5.833V2.5z"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$F = [];
__vue_render__$F._withStripped = true;

  /* style */
  const __vue_inject_styles__$F = undefined;
  /* scoped */
  const __vue_scope_id__$F = undefined;
  /* module identifier */
  const __vue_module_identifier__$F = undefined;
  /* functional template */
  const __vue_is_functional_template__$F = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$F = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
    __vue_inject_styles__$F,
    __vue_script__$F,
    __vue_scope_id__$F,
    __vue_is_functional_template__$F,
    __vue_module_identifier__$F,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$G = compose('IconRisk');

/* script */
const __vue_script__$G = script$G;

/* template */
var __vue_render__$G = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 19 20" } }, [
    _c("path", {
      attrs: {
        d:
          "M18.333 7.946v-4.63a.836.836 0 00-.596-.802L9.404.008h-.046a2.204 2.204 0 00-.383 0h-.046L.596 2.514A.833.833 0 000 3.315v4.63a12.493 12.493 0 002.454 7.496 12.45 12.45 0 006.45 4.521h.021c.157.05.326.05.483 0h.021a12.45 12.45 0 006.45-4.521 12.493 12.493 0 002.454-7.495zm-16.666 0V3.925L8.333 1.92v16.066a10.792 10.792 0 01-4.86-4.002 10.826 10.826 0 01-1.806-6.04zM10 17.966V1.921l6.667 2.004v4.02c.01 2.149-.619 4.251-1.806 6.04A10.792 10.792 0 0110 17.987v-.02z",
        fill: "currentColor",
        id: "risk"
      }
    })
  ])
};
var __vue_staticRenderFns__$G = [];
__vue_render__$G._withStripped = true;

  /* style */
  const __vue_inject_styles__$G = undefined;
  /* scoped */
  const __vue_scope_id__$G = undefined;
  /* module identifier */
  const __vue_module_identifier__$G = undefined;
  /* functional template */
  const __vue_is_functional_template__$G = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$G = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
    __vue_inject_styles__$G,
    __vue_script__$G,
    __vue_scope_id__$G,
    __vue_is_functional_template__$G,
    __vue_module_identifier__$G,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$H = compose('IconSearch');

/* script */
const __vue_script__$H = script$H;

/* template */
var __vue_render__$H = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "search",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: { d: "M13 19a8 8 0 110-16 8 8 0 010 16zM3 21l4.35-4.35" }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$H = [];
__vue_render__$H._withStripped = true;

  /* style */
  const __vue_inject_styles__$H = undefined;
  /* scoped */
  const __vue_scope_id__$H = undefined;
  /* module identifier */
  const __vue_module_identifier__$H = undefined;
  /* functional template */
  const __vue_is_functional_template__$H = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$H = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
    __vue_inject_styles__$H,
    __vue_script__$H,
    __vue_scope_id__$H,
    __vue_is_functional_template__$H,
    __vue_module_identifier__$H,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$I = compose('IconSearchAlt');

/* script */
const __vue_script__$I = script$I;

/* template */
var __vue_render__$I = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 40 40" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "search-alt",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M21.667 31.667c-7.364 0-13.334-5.97-13.334-13.334C8.333 10.97 14.303 5 21.667 5 29.03 5 35 10.97 35 18.333c0 7.364-5.97 13.334-13.333 13.334zM5 35l7.25-7.25"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$I = [];
__vue_render__$I._withStripped = true;

  /* style */
  const __vue_inject_styles__$I = undefined;
  /* scoped */
  const __vue_scope_id__$I = undefined;
  /* module identifier */
  const __vue_module_identifier__$I = undefined;
  /* functional template */
  const __vue_is_functional_template__$I = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$I = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
    __vue_inject_styles__$I,
    __vue_script__$I,
    __vue_scope_id__$I,
    __vue_is_functional_template__$I,
    __vue_module_identifier__$I,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$J = compose('IconSettings');

/* script */
const __vue_script__$J = script$J;

/* template */
var __vue_render__$J = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "settings" } }, [
      _c(
        "g",
        {
          attrs: {
            "clip-path": "url(#clip0)",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        },
        [
          _c("path", {
            attrs: { d: "M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M16.167 12.5a1.375 1.375 0 00.275 1.517l.05.05a1.666 1.666 0 01-.541 2.72 1.667 1.667 0 01-1.818-.362l-.05-.05a1.374 1.374 0 00-1.516-.275 1.375 1.375 0 00-.834 1.258v.142a1.667 1.667 0 01-3.333 0v-.075a1.375 1.375 0 00-.9-1.258 1.375 1.375 0 00-1.517.275l-.05.05a1.667 1.667 0 11-2.358-2.359l.05-.05a1.375 1.375 0 00.275-1.516 1.375 1.375 0 00-1.258-.834H2.5a1.667 1.667 0 110-3.333h.075a1.375 1.375 0 001.258-.9 1.375 1.375 0 00-.275-1.516l-.05-.05a1.667 1.667 0 112.359-2.359l.05.05a1.375 1.375 0 001.516.275H7.5a1.375 1.375 0 00.833-1.258V2.5a1.667 1.667 0 013.334 0v.075a1.375 1.375 0 00.833 1.258 1.375 1.375 0 001.517-.275l.05-.05a1.667 1.667 0 112.358 2.359l-.05.05a1.375 1.375 0 00-.275 1.517V7.5a1.376 1.376 0 001.258.834h.142a1.667 1.667 0 110 3.333h-.075a1.376 1.376 0 00-1.258.833v0z"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0h20v20H0V0z", fill: "#fff" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$J = [];
__vue_render__$J._withStripped = true;

  /* style */
  const __vue_inject_styles__$J = undefined;
  /* scoped */
  const __vue_scope_id__$J = undefined;
  /* module identifier */
  const __vue_module_identifier__$J = undefined;
  /* functional template */
  const __vue_is_functional_template__$J = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$J = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
    __vue_inject_styles__$J,
    __vue_script__$J,
    __vue_scope_id__$J,
    __vue_is_functional_template__$J,
    __vue_module_identifier__$J,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$K = compose('IconSort');

/* script */
const __vue_script__$K = script$K;

/* template */
var __vue_render__$K = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 12 7" } }, [
    _c("path", {
      attrs: {
        d: "M11 6L6 1 1 6",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "sort"
      }
    })
  ])
};
var __vue_staticRenderFns__$K = [];
__vue_render__$K._withStripped = true;

  /* style */
  const __vue_inject_styles__$K = undefined;
  /* scoped */
  const __vue_scope_id__$K = undefined;
  /* module identifier */
  const __vue_module_identifier__$K = undefined;
  /* functional template */
  const __vue_is_functional_template__$K = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$K = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
    __vue_inject_styles__$K,
    __vue_script__$K,
    __vue_scope_id__$K,
    __vue_is_functional_template__$K,
    __vue_module_identifier__$K,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$L = compose('IconStar');

/* script */
const __vue_script__$L = script$L;

/* template */
var __vue_render__$L = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("path", {
      attrs: {
        d:
          "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        id: "star"
      }
    })
  ])
};
var __vue_staticRenderFns__$L = [];
__vue_render__$L._withStripped = true;

  /* style */
  const __vue_inject_styles__$L = undefined;
  /* scoped */
  const __vue_scope_id__$L = undefined;
  /* module identifier */
  const __vue_module_identifier__$L = undefined;
  /* functional template */
  const __vue_is_functional_template__$L = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$L = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
    __vue_inject_styles__$L,
    __vue_script__$L,
    __vue_scope_id__$L,
    __vue_is_functional_template__$L,
    __vue_module_identifier__$L,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$M = compose('IconSuccess');

/* script */
const __vue_script__$M = script$M;

/* template */
var __vue_render__$M = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "success" } }, [
      _c("circle", {
        attrs: { cx: "7", cy: "7", r: "7", fill: "currentColor" }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M10.333 4.5L5.75 9.083 3.667 7",
          stroke: "#fff",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$M = [];
__vue_render__$M._withStripped = true;

  /* style */
  const __vue_inject_styles__$M = undefined;
  /* scoped */
  const __vue_scope_id__$M = undefined;
  /* module identifier */
  const __vue_module_identifier__$M = undefined;
  /* functional template */
  const __vue_is_functional_template__$M = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$M = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
    __vue_inject_styles__$M,
    __vue_script__$M,
    __vue_scope_id__$M,
    __vue_is_functional_template__$M,
    __vue_module_identifier__$M,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$N = compose('IconUsers');

/* script */
const __vue_script__$N = script$N;

/* template */
var __vue_render__$N = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "users",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$N = [];
__vue_render__$N._withStripped = true;

  /* style */
  const __vue_inject_styles__$N = undefined;
  /* scoped */
  const __vue_scope_id__$N = undefined;
  /* module identifier */
  const __vue_module_identifier__$N = undefined;
  /* functional template */
  const __vue_is_functional_template__$N = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$N = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
    __vue_inject_styles__$N,
    __vue_script__$N,
    __vue_scope_id__$N,
    __vue_is_functional_template__$N,
    __vue_module_identifier__$N,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$O = compose('IconTrash');

/* script */
const __vue_script__$O = script$O;

/* template */
var __vue_render__$O = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "trash",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$O = [];
__vue_render__$O._withStripped = true;

  /* style */
  const __vue_inject_styles__$O = undefined;
  /* scoped */
  const __vue_scope_id__$O = undefined;
  /* module identifier */
  const __vue_module_identifier__$O = undefined;
  /* functional template */
  const __vue_is_functional_template__$O = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$O = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
    __vue_inject_styles__$O,
    __vue_script__$O,
    __vue_scope_id__$O,
    __vue_is_functional_template__$O,
    __vue_module_identifier__$O,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$P = compose('IconUpload');

/* script */
const __vue_script__$P = script$P;

/* template */
var __vue_render__$P = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "upload",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M17.5 12.5v3.333a1.666 1.666 0 01-1.667 1.667H4.167A1.667 1.667 0 012.5 15.833V12.5M14.167 6.667L10 2.5 5.833 6.667M10 2.5v10"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$P = [];
__vue_render__$P._withStripped = true;

  /* style */
  const __vue_inject_styles__$P = undefined;
  /* scoped */
  const __vue_scope_id__$P = undefined;
  /* module identifier */
  const __vue_module_identifier__$P = undefined;
  /* functional template */
  const __vue_is_functional_template__$P = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$P = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
    __vue_inject_styles__$P,
    __vue_script__$P,
    __vue_scope_id__$P,
    __vue_is_functional_template__$P,
    __vue_module_identifier__$P,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$Q = compose('IconUserCheck');

/* script */
const __vue_script__$Q = script$Q;

/* template */
var __vue_render__$Q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c(
      "g",
      {
        attrs: {
          id: "user-check",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM17 11l2 2 4-4"
          }
        })
      ]
    )
  ])
};
var __vue_staticRenderFns__$Q = [];
__vue_render__$Q._withStripped = true;

  /* style */
  const __vue_inject_styles__$Q = undefined;
  /* scoped */
  const __vue_scope_id__$Q = undefined;
  /* module identifier */
  const __vue_module_identifier__$Q = undefined;
  /* functional template */
  const __vue_is_functional_template__$Q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Q = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Q, staticRenderFns: __vue_staticRenderFns__$Q },
    __vue_inject_styles__$Q,
    __vue_script__$Q,
    __vue_scope_id__$Q,
    __vue_is_functional_template__$Q,
    __vue_module_identifier__$Q,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$R = compose('IconWarning');

/* script */
const __vue_script__$R = script$R;

/* template */
var __vue_render__$R = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "warning" } }, [
      _c("path", {
        attrs: {
          d:
            "M5.95 2.34L.748 10.996a1.222 1.222 0 00.44 1.667c.185.109.396.167.61.17h10.404a1.23 1.23 0 001.053-.619 1.222 1.222 0 00-.003-1.218L8.05 2.339a1.227 1.227 0 00-1.653-.432 1.226 1.226 0 00-.447.432z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7 5.833v2.333M7 10.5h.006",
          stroke: "#fff",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$R = [];
__vue_render__$R._withStripped = true;

  /* style */
  const __vue_inject_styles__$R = undefined;
  /* scoped */
  const __vue_scope_id__$R = undefined;
  /* module identifier */
  const __vue_module_identifier__$R = undefined;
  /* functional template */
  const __vue_is_functional_template__$R = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$R = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$R, staticRenderFns: __vue_staticRenderFns__$R },
    __vue_inject_styles__$R,
    __vue_script__$R,
    __vue_scope_id__$R,
    __vue_is_functional_template__$R,
    __vue_module_identifier__$R,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$S = compose('IconWeather');

/* script */
const __vue_script__$S = script$S;

/* template */
var __vue_render__$S = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "weather" } }, [
      _c(
        "g",
        {
          attrs: {
            "clip-path": "url(#clip0)",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 14.167a4.167 4.167 0 100-8.334 4.167 4.167 0 000 8.334zM10 .833V2.5M10 17.5v1.667M3.517 3.517L4.7 4.7M15.3 15.3l1.183 1.183M.833 10H2.5M17.5 10h1.667M3.517 16.483L4.7 15.3M15.3 4.7l1.183-1.183"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0h20v20H0V0z", fill: "#fff" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$S = [];
__vue_render__$S._withStripped = true;

  /* style */
  const __vue_inject_styles__$S = undefined;
  /* scoped */
  const __vue_scope_id__$S = undefined;
  /* module identifier */
  const __vue_module_identifier__$S = undefined;
  /* functional template */
  const __vue_is_functional_template__$S = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$S = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$S, staticRenderFns: __vue_staticRenderFns__$S },
    __vue_inject_styles__$S,
    __vue_script__$S,
    __vue_scope_id__$S,
    __vue_is_functional_template__$S,
    __vue_module_identifier__$S,
    false,
    undefined,
    undefined,
    undefined
  );

exports.IconAccreditation = __vue_component__$1;
exports.IconActivity = __vue_component__$2;
exports.IconAdd = __vue_component__$3;
exports.IconAdmin = __vue_component__$4;
exports.IconAlcohol = __vue_component__$5;
exports.IconArrow = __vue_component__$6;
exports.IconAttachment = __vue_component__$7;
exports.IconAttention = __vue_component__$8;
exports.IconAvatar = __vue_component__$9;
exports.IconBlock = __vue_component__$a;
exports.IconBudget = __vue_component__$b;
exports.IconBurger = __vue_component__$c;
exports.IconCalendar = __vue_component__$d;
exports.IconCalendarDetailed = __vue_component__$e;
exports.IconCamera = __vue_component__$f;
exports.IconCheck = __vue_component__$g;
exports.IconChevron = __vue_component__$h;
exports.IconCircleClose = __vue_component__$i;
exports.IconClock = __vue_component__$j;
exports.IconClose = __vue_component__$k;
exports.IconCompanyInfo = __vue_component__$l;
exports.IconComplete = __vue_component__$g;
exports.IconContractor = __vue_component__$m;
exports.IconDashboard = __vue_component__$n;
exports.IconDelete = __vue_component__$k;
exports.IconEdit = __vue_component__$o;
exports.IconError = __vue_component__$8;
exports.IconEvent = __vue_component__$p;
exports.IconEventInfo = __vue_component__$q;
exports.IconEventLogs = __vue_component__$r;
exports.IconExcel = __vue_component__$s;
exports.IconFile = __vue_component__$t;
exports.IconFlag = __vue_component__$u;
exports.IconGrid = __vue_component__$v;
exports.IconHamburger = __vue_component__$c;
exports.IconHome = __vue_component__$w;
exports.IconHospital = __vue_component__$r;
exports.IconLoading = __vue_component__$x;
exports.IconLocation = __vue_component__$y;
exports.IconLocationPin = __vue_component__$z;
exports.IconMoreHorizontal = __vue_component__$A;
exports.IconMusic = __vue_component__$B;
exports.IconNotification = __vue_component__$C;
exports.IconOrganizer = __vue_component__$D;
exports.IconQuestionMark = __vue_component__$E;
exports.IconRegulations = __vue_component__$F;
exports.IconRisk = __vue_component__$G;
exports.IconSearch = __vue_component__$H;
exports.IconSearchAlt = __vue_component__$I;
exports.IconSettings = __vue_component__$J;
exports.IconSliders = __vue_component__$4;
exports.IconSort = __vue_component__$K;
exports.IconStar = __vue_component__$L;
exports.IconSuccess = __vue_component__$M;
exports.IconTeamManagement = __vue_component__$N;
exports.IconTrash = __vue_component__$O;
exports.IconUpload = __vue_component__$P;
exports.IconUserCheck = __vue_component__$Q;
exports.IconUsers = __vue_component__$N;
exports.IconValid = __vue_component__$M;
exports.IconWarning = __vue_component__$R;
exports.IconWeather = __vue_component__$S;
//# sourceMappingURL=eve-icons.js.map
