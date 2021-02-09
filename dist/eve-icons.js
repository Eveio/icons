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
          d: "M18.3334 10H15.0001L12.5001 17.5L7.50008 2.5L5.00008 10H1.66675",
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
    _c("g", { attrs: { id: "add" } }, [
      _c("path", {
        attrs: {
          d: "M16 6.66699V25.3337",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M6.66675 16H25.3334",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$4 = compose('IconAdmin');

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "admin" } }, [
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d: "M3.33325 17.4998V11.6665",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M3.33325 8.33333V2.5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M10 17.5V10",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M10 6.66667V2.5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M16.6667 17.5002V13.3335",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M16.6667 10V2.5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M0.833252 11.6665H5.83325",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M7.5 6.6665H12.5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M14.1667 13.3335H19.1667",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0H20V20H0V0Z", fill: "white" } })
        ])
      ])
    ])
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
    _c("g", { attrs: { id: "alcohol" } }, [
      _c("path", {
        attrs: {
          d:
            "M18.041 13.3451C18.7927 12.5121 19.3495 11.5338 19.6736 10.4762C19.9978 9.41868 20.0817 8.30659 19.9199 7.21517L18.9726 0.860238C18.9372 0.619964 18.8122 0.400237 18.6206 0.242011C18.4291 0.0837857 18.1842 -0.00214056 17.9317 0.000247637H6.48124C6.23917 -0.00492671 6.00279 0.0711264 5.8128 0.215316C5.6228 0.359506 5.49108 0.562812 5.44029 0.790239L4.18074 6.69518C3.9519 7.71071 3.94024 8.76032 4.14647 9.78032C4.35269 10.8003 4.7725 11.7694 5.38043 12.6288C5.98835 13.4882 6.7717 14.22 7.68295 14.7798C8.5942 15.3395 9.61434 15.7156 10.6815 15.8851C10.6703 15.9229 10.6616 15.9613 10.6554 16.0001V22H7.53259C7.25652 22 6.99175 22.1054 6.79653 22.2929C6.60132 22.4804 6.49164 22.7348 6.49164 23C6.49164 23.2652 6.60132 23.5196 6.79653 23.7071C6.99175 23.8946 7.25652 24 7.53259 24H15.8602C16.1362 24 16.401 23.8946 16.5962 23.7071C16.7914 23.5196 16.9011 23.2652 16.9011 23C16.9011 22.7348 16.7914 22.4804 16.5962 22.2929C16.401 22.1054 16.1362 22 15.8602 22H12.7373V16.0001C12.7397 15.9868 12.7397 15.9733 12.7373 15.9601C14.7908 15.7805 16.6919 14.8431 18.041 13.3451ZM17.0416 2.00023L17.7859 7.00018C17.6795 7.00973 17.5757 7.03679 17.4788 7.08017L16.2922 7.65017C15.6638 7.95376 14.9464 8.04243 14.2585 7.90153C13.5705 7.76063 12.9532 7.39859 12.5083 6.87518C11.8126 6.05463 10.8638 5.46732 9.7985 5.19777C8.7332 4.92822 7.60634 4.99034 6.58013 5.37519L7.33481 2.00023H17.0416ZM11.9878 14.0001C11.1662 14.0011 10.3534 13.8377 9.6011 13.5203C8.84882 13.203 8.17357 12.7386 7.61836 12.1568C7.06314 11.575 6.64013 10.8885 6.37625 10.141C6.11237 9.39349 6.01341 8.60141 6.08568 7.81517L7.12662 7.31517C7.75898 7.01982 8.4766 6.93813 9.1633 7.08331C9.85 7.2285 10.4656 7.59207 10.9105 8.11516C11.3908 8.69805 12.0012 9.16999 12.6966 9.49622C13.3919 9.82245 14.1547 9.99465 14.9285 10.0001C15.7236 10.0069 16.5095 9.83573 17.2238 9.50015L17.8432 9.20015C17.6245 10.54 16.9139 11.7605 15.84 12.6408C14.766 13.5212 13.3996 14.0033 11.9878 14.0001Z",
          fill: "currentColor"
        }
      })
    ])
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
    _c("g", { attrs: { id: "arrow" } }, [
      _c("path", {
        attrs: {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M14 5l7 7m0 0l-7 7m7-7H3",
          stroke: "currentColor"
        }
      })
    ])
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
    _c("g", { attrs: { id: "attachment" } }, [
      _c("path", {
        attrs: {
          d:
            "M21.44 11.0499L12.25 20.2399C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.2399C2.63416 19.1141 2.00166 17.5871 2.00166 15.9949C2.00166 14.4027 2.63416 12.8758 3.76 11.7499L12.95 2.55992C13.7006 1.80936 14.7185 1.3877 15.78 1.3877C16.8415 1.3877 17.8594 1.80936 18.61 2.55992C19.3606 3.31048 19.7822 4.32846 19.7822 5.38992C19.7822 6.45138 19.3606 7.46936 18.61 8.21992L9.41 17.4099C9.03472 17.7852 8.52573 17.996 7.995 17.996C7.46427 17.996 6.95528 17.7852 6.58 17.4099C6.20472 17.0346 5.99389 16.5256 5.99389 15.9949C5.99389 15.4642 6.20472 14.9552 6.58 14.5799L15.07 6.09992",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$8 = compose('IconAttention');

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "attention" } }, [
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
          d: "M7 3v4M7 11h.01"
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
    _c("g", { attrs: { id: "avatar" } }, [
      _c("path", {
        attrs: {
          d:
            "M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M27 29.625V27.375C27 26.1815 26.5259 25.0369 25.682 24.193C24.8381 23.3491 23.6935 22.875 22.5 22.875H13.5C12.3065 22.875 11.1619 23.3491 10.318 24.193C9.47411 25.0369 9 26.1815 9 27.375V29.625",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M18 18.375C20.4853 18.375 22.5 16.3603 22.5 13.875C22.5 11.3897 20.4853 9.375 18 9.375C15.5147 9.375 13.5 11.3897 13.5 13.875C13.5 16.3603 15.5147 18.375 18 18.375Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "block" } }, [
      _c("path", {
        attrs: {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M10 18.333c4.602 0 8.333-3.73 8.333-8.333S14.603 1.667 10 1.667 1.667 5.397 1.667 10c0 4.602 3.73 8.333 8.333 8.333zM4.108 4.108l11.784 11.784"
        }
      })
    ])
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
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d: "M10 0.833252V19.1666",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M14.1667 4.16675H7.91667C7.14312 4.16675 6.40125 4.47404 5.85427 5.02102C5.30729 5.568 5 6.30987 5 7.08342C5 7.85696 5.30729 8.59883 5.85427 9.14581C6.40125 9.69279 7.14312 10.0001 7.91667 10.0001H12.0833C12.8569 10.0001 13.5987 10.3074 14.1457 10.8544C14.6927 11.4013 15 12.1432 15 12.9167C15 13.6903 14.6927 14.4322 14.1457 14.9791C13.5987 15.5261 12.8569 15.8334 12.0833 15.8334H5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0H20V20H0V0Z", fill: "white" } })
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
    _c("g", { attrs: { id: "burger" } }, [
      _c("path", {
        attrs: {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M3 12h18M3 6h18M3 18h18"
        }
      })
    ])
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
    _c("g", { attrs: { id: "calendar" } }, [
      _c("path", {
        attrs: {
          d:
            "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M16 2V6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M8 2V6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M3 10H21",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "calendar-detailed" } }, [
      _c("path", {
        attrs: {
          fill: "#525252",
          d:
            "M20 2h-1V1c0-.265-.105-.52-.293-.707C18.52.105 18.265 0 18 0c-.265 0-.52.105-.707.293C17.105.48 17 .735 17 1v1h-4V1c0-.265-.105-.52-.293-.707C12.52.105 12.265 0 12 0c-.265 0-.52.105-.707.293C11.105.48 11 .735 11 1v1H7V1c0-.265-.105-.52-.293-.707C6.52.105 6.265 0 6 0c-.265 0-.52.105-.707.293C5.105.48 5 .735 5 1v1H4c-1.06 0-2.078.421-2.828 1.172C.422 3.922 0 4.939 0 6v14c0 1.06.421 2.078 1.172 2.828C1.922 23.578 2.939 24 4 24h16c1.06 0 2.078-.421 2.828-1.172C23.578 22.078 24 21.061 24 20V6c0-1.06-.421-2.078-1.172-2.828C22.078 2.422 21.061 2 20 2zM4 4h1v1c0 .265.105.52.293.707C5.48 5.895 5.735 6 6 6c.265 0 .52-.105.707-.293C6.895 5.52 7 5.265 7 5V4h4v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293C12.895 5.52 13 5.265 13 5V4h4v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293C18.895 5.52 19 5.265 19 5V4h1c.53 0 1.04.21 1.414.586C21.79 4.96 22 5.47 22 6v2H2V6c0-.53.21-1.04.586-1.414C2.96 4.21 3.47 4 4 4zm16 18H4c-.53 0-1.04-.21-1.414-.586C2.21 21.04 2 20.53 2 20V10h20v10c0 .53-.21 1.04-.586 1.414C21.04 21.79 20.53 22 20 22z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          fill: "#525252",
          d:
            "M6 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM6 19c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM10 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM10 19c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM14 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM14 19c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM18 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM18 19c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
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
    _c("g", { attrs: { id: "camera" } }, [
      _c("path", {
        attrs: {
          d:
            "M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$g = compose('IconCheck');

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 16 16" } }, [
    _c("g", { attrs: { id: "check" } }, [
      _c("path", {
        attrs: {
          d:
            "M15.8135 1.91657L7.77132 15.2207C7.47583 15.7087 6.97992 16 6.44348 16C5.96894 16 5.51945 15.7715 5.21144 15.3728L0.264833 8.98931C-0.130128 8.47936 -0.0778106 7.73032 0.384943 7.28392C0.834433 6.84887 1.58972 6.84055 2.04953 7.26652L6.25263 11.1585L13.7746 0.510047C14.1489 -0.0195763 14.9248 -0.162574 15.4554 0.203622C16.0066 0.584194 16.1643 1.33701 15.8135 1.91657Z",
          fill: "currentColor"
        }
      })
    ])
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
    _c("g", { attrs: { id: "chevron" } }, [
      _c("path", {
        attrs: {
          d: "M9 18L15 12L9 6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "circle-close" } }, [
      _c("path", {
        attrs: {
          d:
            "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M15 9L9 15",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M9 9L15 15",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "clock" } }, [
      _c("path", {
        attrs: {
          d:
            "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M12 6V12L16 14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "close" } }, [
      _c("path", {
        attrs: {
          d: "M18 6L6 18",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M6 6L18 18",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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
    _c("g", { attrs: { id: "company-info" } }, [
      _c("path", {
        attrs: {
          d:
            "M16.6667 5.8335H3.33341C2.41294 5.8335 1.66675 6.57969 1.66675 7.50016V15.8335C1.66675 16.754 2.41294 17.5002 3.33341 17.5002H16.6667C17.5872 17.5002 18.3334 16.754 18.3334 15.8335V7.50016C18.3334 6.57969 17.5872 5.8335 16.6667 5.8335Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M13.3334 5.83333V4.16667C13.3334 3.72464 13.1578 3.30072 12.8453 2.98816C12.5327 2.67559 12.1088 2.5 11.6667 2.5H8.33341C7.89139 2.5 7.46746 2.67559 7.1549 2.98816C6.84234 3.30072 6.66675 3.72464 6.66675 4.16667V5.83333",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$m = compose('IconComplete');

/* script */
const __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 15" } }, [
    _c("g", { attrs: { id: "complete" } }, [
      _c("path", {
        attrs: {
          d: "M18 2L7 13L2 8",
          stroke: "currentColor",
          "stroke-width": "3",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$n = compose('IconContractor');

/* script */
const __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 19 20" } }, [
    _c("g", { attrs: { id: "contractor" } }, [
      _c("path", {
        attrs: {
          d:
            "M18.3333 10C18.3333 9.81974 18.2748 9.64429 18.1666 9.50005C18.1666 9.47088 16.0541 6.62506 15.8499 1.61675C15.8369 1.18055 15.6532 0.766874 15.3385 0.46459C15.0237 0.162307 14.603 -0.00446858 14.1666 9.10934e-05H12.4999C12.0579 9.10934e-05 11.634 0.175685 11.3214 0.488245C11.0089 0.800804 10.8333 1.22472 10.8333 1.66675V4.16674C10.8333 4.60876 10.6577 5.03269 10.3451 5.34524C10.0326 5.6578 9.60865 5.8334 9.16663 5.8334C8.7246 5.8334 8.30068 5.6578 7.98812 5.34524C7.67556 5.03269 7.49997 4.60876 7.49997 4.16674V1.66675C7.49997 1.22472 7.32437 0.800804 7.01181 0.488245C6.69925 0.175685 6.27533 9.10934e-05 5.83331 9.10934e-05H4.16665C3.73315 -0.000104023 3.31663 0.16861 3.00547 0.470436C2.69431 0.772262 2.51299 1.18345 2.49999 1.61675C2.29999 6.58756 0.204166 9.47505 0.183333 9.50005C0.0691784 9.64218 0.00477747 9.81781 0 10V17.5C0 18.163 0.263391 18.7989 0.732229 19.2678C1.20107 19.7366 1.83695 20 2.49999 20H15.8333C16.4963 20 17.1322 19.7366 17.601 19.2678C18.0699 18.7989 18.3333 18.163 18.3333 17.5V10ZM1.66666 17.5V10.2584C2.22082 9.42505 3.95832 6.41256 4.16665 1.66675H5.83331V4.16674C5.83478 4.90458 6.08102 5.62108 6.53344 6.20395C6.98586 6.78681 7.61888 7.2031 8.3333 7.38756C8.33132 7.42503 8.33132 7.46258 8.3333 7.50006V10H5.83331C5.61229 10 5.40033 10.0878 5.24405 10.2441C5.08777 10.4004 4.99998 10.6124 4.99998 10.8334C4.99998 11.0544 5.08777 11.2663 5.24405 11.4226C5.40033 11.5789 5.61229 11.6667 5.83331 11.6667H8.3333V14.1667H5.83331C5.61229 14.1667 5.40033 14.2545 5.24405 14.4108C5.08777 14.567 4.99998 14.779 4.99998 15C4.99998 15.221 5.08777 15.433 5.24405 15.5893C5.40033 15.7456 5.61229 15.8334 5.83331 15.8334H8.3333V18.3333H2.49999C2.27898 18.3333 2.06701 18.2455 1.91074 18.0893C1.75446 17.933 1.66666 17.721 1.66666 17.5ZM16.6666 17.5C16.6666 17.721 16.5788 17.933 16.4225 18.0893C16.2662 18.2455 16.0543 18.3333 15.8333 18.3333H9.99995V15.8334H12.4999C12.721 15.8334 12.9329 15.7456 13.0892 15.5893C13.2455 15.433 13.3333 15.221 13.3333 15C13.3333 14.779 13.2455 14.567 13.0892 14.4108C12.9329 14.2545 12.721 14.1667 12.4999 14.1667H9.99995V11.6667H12.4999C12.721 11.6667 12.9329 11.5789 13.0892 11.4226C13.2455 11.2663 13.3333 11.0544 13.3333 10.8334C13.3333 10.6124 13.2455 10.4004 13.0892 10.2441C12.9329 10.0878 12.721 10 12.4999 10H9.99995V7.50006C10.0019 7.46258 10.0019 7.42503 9.99995 7.38756C10.7144 7.2031 11.3474 6.78681 11.7998 6.20395C12.2522 5.62108 12.4985 4.90458 12.4999 4.16674V1.66675H14.1666C14.3583 6.40006 16.0958 9.40005 16.6666 10.2417V17.5Z",
          fill: "currentColor"
        }
      })
    ])
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

var script$o = compose('IconDashboard');

/* script */
const __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "dashboard" } }, [
      _c("path", {
        attrs: {
          d: "M19.1666 5L11.2499 12.9167L7.08325 8.75L0.833252 15",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M14.1667 5H19.1667V10",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$p = compose('IconDelete');

/* script */
const __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 15 15" } }, [
    _c("g", { attrs: { id: "delete" } }, [
      _c("path", {
        attrs: {
          d: "M11.25 3.75L3.75 11.25",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M3.75 3.75L11.25 11.25",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
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

var script$q = compose('IconEdit');

/* script */
const __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 32 32" } }, [
    _c("g", { attrs: { id: "edit" } }, [
      _c("path", {
        attrs: {
          d:
            "M21 7C21.2626 6.73735 21.5744 6.52901 21.9176 6.38687C22.2608 6.24473 22.6286 6.17157 23 6.17157C23.3714 6.17157 23.7392 6.24473 24.0824 6.38687C24.4256 6.52901 24.7374 6.73735 25 7C25.2626 7.26264 25.471 7.57444 25.6131 7.9176C25.7553 8.26077 25.8284 8.62856 25.8284 9C25.8284 9.37143 25.7553 9.73923 25.6131 10.0824C25.471 10.4255 25.2626 10.7374 25 11L11.5 24.5L6 26L7.5 20.5L21 7Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
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

var script$r = compose('IconError');

/* script */
const __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "error" } }, [
      _c("path", {
        attrs: {
          d:
            "M4.102 0H9.898L14 4.102V9.898L9.898 14H4.102L0 9.898V4.102L4.102 0Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7 3V7",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7 11H7.01",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
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

var script$s = compose('IconEvent');

/* script */
const __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "event" } }, [
      _c("path", {
        attrs: {
          d:
            "M3.33333 20H16.6667C17.5507 20 18.3986 19.6488 19.0237 19.0237C19.6488 18.3986 20 17.5507 20 16.6667V5C20 4.11594 19.6488 3.2681 19.0237 2.64298C18.3986 2.01786 17.5507 1.66667 16.6667 1.66667H15.8333V0.833333C15.8333 0.61232 15.7455 0.400358 15.5893 0.244078C15.433 0.0877975 15.221 0 15 0C14.779 0 14.567 0.0877975 14.4107 0.244078C14.2545 0.400358 14.1667 0.61232 14.1667 0.833333V1.66667H10.8333V0.833333C10.8333 0.61232 10.7455 0.400358 10.5893 0.244078C10.433 0.0877975 10.221 0 10 0C9.77899 0 9.56702 0.0877975 9.41074 0.244078C9.25446 0.400358 9.16667 0.61232 9.16667 0.833333V1.66667H5.83333V0.833333C5.83333 0.61232 5.74554 0.400358 5.58926 0.244078C5.43298 0.0877975 5.22101 0 5 0C4.77899 0 4.56702 0.0877975 4.41074 0.244078C4.25446 0.400358 4.16667 0.61232 4.16667 0.833333V1.66667H3.33333C2.44928 1.66667 1.60143 2.01786 0.976311 2.64298C0.351189 3.2681 0 4.11594 0 5V16.6667C0 17.5507 0.351189 18.3986 0.976311 19.0237C1.60143 19.6488 2.44928 20 3.33333 20ZM16.6667 18.3333H3.33333C2.89131 18.3333 2.46738 18.1577 2.15482 17.8452C1.84226 17.5326 1.66667 17.1087 1.66667 16.6667V8.33333H18.3333V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333ZM3.33333 3.33333H4.16667V4.16667C4.16667 4.38768 4.25446 4.59964 4.41074 4.75592C4.56702 4.9122 4.77899 5 5 5C5.22101 5 5.43298 4.9122 5.58926 4.75592C5.74554 4.59964 5.83333 4.38768 5.83333 4.16667V3.33333H9.16667V4.16667C9.16667 4.38768 9.25446 4.59964 9.41074 4.75592C9.56702 4.9122 9.77899 5 10 5C10.221 5 10.433 4.9122 10.5893 4.75592C10.7455 4.59964 10.8333 4.38768 10.8333 4.16667V3.33333H14.1667V4.16667C14.1667 4.38768 14.2545 4.59964 14.4107 4.75592C14.567 4.9122 14.779 5 15 5C15.221 5 15.433 4.9122 15.5893 4.75592C15.7455 4.59964 15.8333 4.38768 15.8333 4.16667V3.33333H16.6667C17.1087 3.33333 17.5326 3.50893 17.8452 3.82149C18.1577 4.13405 18.3333 4.55797 18.3333 5V6.66667H1.66667V5C1.66667 4.55797 1.84226 4.13405 2.15482 3.82149C2.46738 3.50893 2.89131 3.33333 3.33333 3.33333Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12.5001 12.5H10.8334V10.8333C10.8334 10.6123 10.7456 10.4004 10.5893 10.2441C10.4331 10.0878 10.2211 10 10.0001 10C9.77907 10 9.56711 10.0878 9.41083 10.2441C9.25454 10.4004 9.16675 10.6123 9.16675 10.8333V12.5H7.50008C7.27907 12.5 7.06711 12.5878 6.91083 12.7441C6.75454 12.9004 6.66675 13.1123 6.66675 13.3333C6.66675 13.5543 6.75454 13.7663 6.91083 13.9226C7.06711 14.0789 7.27907 14.1667 7.50008 14.1667H9.16675V15.8333C9.16675 16.0543 9.25454 16.2663 9.41083 16.4226C9.56711 16.5789 9.77907 16.6667 10.0001 16.6667C10.2211 16.6667 10.4331 16.5789 10.5893 16.4226C10.7456 16.2663 10.8334 16.0543 10.8334 15.8333V14.1667H12.5001C12.7211 14.1667 12.9331 14.0789 13.0893 13.9226C13.2456 13.7663 13.3334 13.5543 13.3334 13.3333C13.3334 13.1123 13.2456 12.9004 13.0893 12.7441C12.9331 12.5878 12.7211 12.5 12.5001 12.5Z",
          fill: "currentColor"
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

var script$t = compose('IconEventInfo');

/* script */
const __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 28" } }, [
    _c("g", { attrs: { id: "event-info" } }, [
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d:
              "M11.9442 5.50904C10.5901 5.50904 10.1387 6.69102 10.1387 6.69102V2.98514C10.1387 2.98514 10.5901 2.53906 11.9442 2.53906C13.2984 2.53906 14.2012 3.43122 15.5553 3.43122C16.9095 3.43122 17.3609 2.98514 17.3609 2.98514V3.1635C17.3609 3.1635 17.2412 6.17659 15.4166 6.17659C13.3333 6.17659 13.2984 5.50904 11.9442 5.50904Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M10.1389 9.81371V6.69116",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("g", { attrs: { "clip-path": "url(#clip1)" } }, [
        _c("path", {
          attrs: {
            d:
              "M2.5 15.6465L10 9.88184L17.5 15.6465V24.7054C17.5 25.1422 17.3244 25.5611 17.0118 25.87C16.6993 26.1789 16.2754 26.3524 15.8333 26.3524H4.16667C3.72464 26.3524 3.30072 26.1789 2.98816 25.87C2.67559 25.5611 2.5 25.1422 2.5 24.7054V15.6465Z",
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
            "M2.5 15.6467C2.5 15.6467 4.16667 17.2938 6.25 17.2938C7.46904 17.2938 8.54543 16.7299 9.22871 16.2619C9.68058 15.9525 10.3194 15.9525 10.7713 16.2619C11.4546 16.7299 12.531 17.2938 13.75 17.2938C15.8333 17.2938 17.5 15.6467 17.5 15.6467",
          stroke: "currentColor",
          "stroke-width": "2"
        }
      }),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("rect", {
            attrs: {
              x: "8.33325",
              width: "10.8333",
              height: "10.7059",
              fill: "white"
            }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip1" } }, [
          _c("path", {
            attrs: { d: "M0 8.23486H20V27.9996H0V8.23486Z", fill: "white" }
          })
        ])
      ])
    ])
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

var script$u = compose('IconEventLogs');

/* script */
const __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "event-logs" } }, [
      _c("path", {
        attrs: {
          d:
            "M15.7833 2.50511H13.3333C13.3333 1.84072 13.0699 1.20353 12.6011 0.733731C12.1323 0.263931 11.4964 0 10.8333 0H2.5C1.83696 0 1.20107 0.263931 0.732233 0.733731C0.263392 1.20353 0 1.84072 0 2.50511V15.0307C0 15.6951 0.263392 16.3323 0.732233 16.8021C1.20107 17.2719 1.83696 17.5358 2.5 17.5358H2.61667C2.80857 18.2434 3.2275 18.868 3.80883 19.3134C4.39016 19.7587 5.10158 20 5.83333 20C6.56509 20 7.27651 19.7587 7.85784 19.3134C8.43917 18.868 8.8581 18.2434 9.05 17.5358H10.95C11.1419 18.2434 11.5608 18.868 12.1422 19.3134C12.7235 19.7587 13.4349 20 14.1667 20C14.8984 20 15.6098 19.7587 16.1912 19.3134C16.7725 18.868 17.1914 18.2434 17.3833 17.5358H17.5C18.163 17.5358 18.7989 17.2719 19.2678 16.8021C19.7366 16.3323 20 15.6951 20 15.0307V6.73458C20 5.61358 19.5559 4.53843 18.7652 3.74537C17.9746 2.95231 16.902 2.50622 15.7833 2.50511ZM15.7833 4.17519C16.46 4.1763 17.1086 4.44643 17.5867 4.92629C18.0648 5.40615 18.3333 6.05651 18.3333 6.73458V10.0205H14.2708C14.0222 10.0205 13.7837 9.92148 13.6079 9.74531C13.4321 9.56913 13.3333 9.33019 13.3333 9.08104V4.17519H15.7833ZM5.83333 18.3708C5.5037 18.3708 5.18146 18.2729 4.90738 18.0894C4.6333 17.9059 4.41968 17.645 4.29353 17.3399C4.16739 17.0347 4.13438 16.6989 4.19869 16.3749C4.263 16.051 4.42173 15.7534 4.65482 15.5198C4.88791 15.2863 5.18488 15.1272 5.50818 15.0628C5.83148 14.9983 6.1666 15.0314 6.47114 15.1578C6.77568 15.2842 7.03598 15.4983 7.21912 15.7729C7.40225 16.0476 7.5 16.3705 7.5 16.7008C7.5 17.1437 7.3244 17.5685 7.01184 17.8817C6.69928 18.1949 6.27536 18.3708 5.83333 18.3708ZM14.1667 18.3708C13.837 18.3708 13.5148 18.2729 13.2407 18.0894C12.9666 17.9059 12.753 17.645 12.6269 17.3399C12.5007 17.0347 12.4677 16.6989 12.532 16.3749C12.5963 16.051 12.7551 15.7534 12.9882 15.5198C13.2212 15.2863 13.5182 15.1272 13.8415 15.0628C14.1648 14.9983 14.4999 15.0314 14.8045 15.1578C15.109 15.2842 15.3693 15.4983 15.5524 15.7729C15.7356 16.0476 15.8333 16.3705 15.8333 16.7008C15.8333 17.1437 15.6577 17.5685 15.3452 17.8817C15.0326 18.1949 14.6087 18.3708 14.1667 18.3708ZM17.5 15.8657H17.3833C17.1914 15.1581 16.7725 14.5335 16.1912 14.0882C15.6098 13.6428 14.8984 13.4015 14.1667 13.4015C13.4349 13.4015 12.7235 13.6428 12.1422 14.0882C11.5608 14.5335 11.1419 15.1581 10.95 15.8657H9.05C8.8581 15.1581 8.43917 14.5335 7.85784 14.0882C7.27651 13.6428 6.56509 13.4015 5.83333 13.4015C5.10158 13.4015 4.39016 13.6428 3.80883 14.0882C3.2275 14.5335 2.80857 15.1581 2.61667 15.8657H2.5C2.27899 15.8657 2.06702 15.7777 1.91074 15.6211C1.75446 15.4645 1.66667 15.2522 1.66667 15.0307V2.50511C1.66667 2.28365 1.75446 2.07125 1.91074 1.91465C2.06702 1.75805 2.27899 1.67008 2.5 1.67008H10.8333C11.0543 1.67008 11.2663 1.75805 11.4226 1.91465C11.5789 2.07125 11.6667 2.28365 11.6667 2.50511V9.08104C11.6667 9.77312 11.941 10.4369 12.4294 10.9262C12.9178 11.4156 13.5802 11.6905 14.2708 11.6905H18.3333V15.0307C18.3333 15.2522 18.2455 15.4645 18.0893 15.6211C17.933 15.7777 17.721 15.8657 17.5 15.8657Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M9.16658 6.68041H7.49992V5.01033C7.49992 4.78887 7.41212 4.57647 7.25584 4.41987C7.09956 4.26327 6.8876 4.17529 6.66659 4.17529C6.44557 4.17529 6.23361 4.26327 6.07733 4.41987C5.92105 4.57647 5.83325 4.78887 5.83325 5.01033V6.68041H4.16659C3.94557 6.68041 3.73361 6.76838 3.57733 6.92498C3.42105 7.08158 3.33325 7.29398 3.33325 7.51545C3.33325 7.73691 3.42105 7.94931 3.57733 8.10591C3.73361 8.26251 3.94557 8.35048 4.16659 8.35048H5.83325V10.0206C5.83325 10.242 5.92105 10.4544 6.07733 10.611C6.23361 10.7676 6.44557 10.8556 6.66659 10.8556C6.8876 10.8556 7.09956 10.7676 7.25584 10.611C7.41212 10.4544 7.49992 10.242 7.49992 10.0206V8.35048H9.16658C9.3876 8.35048 9.59956 8.26251 9.75584 8.10591C9.91212 7.94931 9.99992 7.73691 9.99992 7.51545C9.99992 7.29398 9.91212 7.08158 9.75584 6.92498C9.59956 6.76838 9.3876 6.68041 9.16658 6.68041Z",
          fill: "currentColor"
        }
      })
    ])
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

var script$v = compose('IconExcel');

/* script */
const __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 30 30" } }, [
    _c("g", { attrs: { id: "excel" } }, [
      _c("path", {
        attrs: {
          d:
            "M29.0625 25.3125H15.9375C15.42 25.3125 15 24.8925 15 24.375C15 23.8575 15 6.1425 15 5.625C15 5.1075 15.42 4.6875 15.9375 4.6875H29.0625C29.58 4.6875 30 5.1075 30 5.625V24.375C30 24.8925 29.58 25.3125 29.0625 25.3125Z",
          fill: "#E8E8E8"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M19.6875 10.3125H15.9375C15.42 10.3125 15 9.8925 15 9.375C15 8.8575 15.42 8.4375 15.9375 8.4375H19.6875C20.205 8.4375 20.625 8.8575 20.625 9.375C20.625 9.8925 20.205 10.3125 19.6875 10.3125Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M19.6875 14.0625H15.9375C15.42 14.0625 15 13.6425 15 13.125C15 12.6075 15.42 12.1875 15.9375 12.1875H19.6875C20.205 12.1875 20.625 12.6075 20.625 13.125C20.625 13.6425 20.205 14.0625 19.6875 14.0625Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M19.6875 17.8125H15.9375C15.42 17.8125 15 17.3925 15 16.875C15 16.3575 15.42 15.9375 15.9375 15.9375H19.6875C20.205 15.9375 20.625 16.3575 20.625 16.875C20.625 17.3925 20.205 17.8125 19.6875 17.8125Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M19.6875 21.5625H15.9375C15.42 21.5625 15 21.1425 15 20.625C15 20.1075 15.42 19.6875 15.9375 19.6875H19.6875C20.205 19.6875 20.625 20.1075 20.625 20.625C20.625 21.1425 20.205 21.5625 19.6875 21.5625Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M25.3125 10.3125H23.4375C22.92 10.3125 22.5 9.8925 22.5 9.375C22.5 8.8575 22.92 8.4375 23.4375 8.4375H25.3125C25.83 8.4375 26.25 8.8575 26.25 9.375C26.25 9.8925 25.83 10.3125 25.3125 10.3125Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M25.3125 14.0625H23.4375C22.92 14.0625 22.5 13.6425 22.5 13.125C22.5 12.6075 22.92 12.1875 23.4375 12.1875H25.3125C25.83 12.1875 26.25 12.6075 26.25 13.125C26.25 13.6425 25.83 14.0625 25.3125 14.0625Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M25.3125 17.8125H23.4375C22.92 17.8125 22.5 17.3925 22.5 16.875C22.5 16.3575 22.92 15.9375 23.4375 15.9375H25.3125C25.83 15.9375 26.25 16.3575 26.25 16.875C26.25 17.3925 25.83 17.8125 25.3125 17.8125Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M25.3125 21.5625H23.4375C22.92 21.5625 22.5 21.1425 22.5 20.625C22.5 20.1075 22.92 19.6875 23.4375 19.6875H25.3125C25.83 19.6875 26.25 20.1075 26.25 20.625C26.25 21.1425 25.83 21.5625 25.3125 21.5625Z",
          fill: "#388E3C"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M16.5356 1.15244C16.3219 0.97431 16.035 0.897435 15.765 0.953685L0.765 3.76619C0.320625 3.84869 0 4.23493 0 4.68681V25.3118C0 25.7618 0.320625 26.1499 0.765 26.2324L15.765 29.0449C15.8212 29.0562 15.8794 29.0618 15.9375 29.0618C16.155 29.0618 16.3669 28.9868 16.5356 28.8462C16.7513 28.6681 16.875 28.4018 16.875 28.1243V1.87431C16.875 1.59494 16.7513 1.33056 16.5356 1.15244Z",
          fill: "#2E7D32"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12.8925 18.1322L9.92811 14.7441L12.9262 10.8891C13.245 10.4803 13.17 9.89159 12.7631 9.57284C12.3562 9.25409 11.7675 9.32909 11.4469 9.73596L8.66999 13.306L6.32999 10.6322C5.98686 10.2385 5.39436 10.2028 5.00811 10.5441C4.61811 10.8853 4.57874 11.4778 4.91999 11.866L7.49811 14.8135L4.88436 18.1735C4.56561 18.5822 4.64061 19.171 5.04749 19.4897C5.21999 19.6228 5.42436 19.6866 5.62499 19.6866C5.90436 19.6866 6.17999 19.5628 6.36561 19.3247L8.75624 16.2497L11.4825 19.3641C11.6681 19.5778 11.9269 19.6866 12.1875 19.6866C12.4069 19.6866 12.6262 19.6097 12.8044 19.4541C13.1944 19.1128 13.2337 18.5203 12.8925 18.1322Z",
          fill: "#FAFAFA"
        }
      })
    ])
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

var script$w = compose('IconFile');

/* script */
const __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 30 30" } }, [
    _c("g", { attrs: { id: "file" } }, [
      _c("path", {
        attrs: {
          d:
            "M3.5 4C3.5 2.067 5.067 0.5 7 0.5H17.2305C18.2166 0.5 19.157 0.915985 19.8203 1.64565L23.6142 5.81888L25.8 8.73333C26.2544 9.33917 26.5 10.076 26.5 10.8333V26C26.5 27.933 24.933 29.5 23 29.5H7C5.067 29.5 3.5 27.933 3.5 26V4Z",
          fill: "#FFFFFF",
          stroke: "currentColor",
          "stroke-width": "1.2"
        }
      })
    ])
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

var script$x = compose('IconFlag');

/* script */
const __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "flag" } }, [
      _c("path", {
        attrs: {
          d:
            "M4 10C4 10 4.875 9 7.5 9C10.125 9 11.875 10 14.5 10C18 10 18 3.5 18 3.5V3C18 3 17.125 4 14.5 4C11.875 4 10.125 2 7.5 2C4.875 2 4 3 4 3V10Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M4 22V10",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$y = compose('IconGrid');

/* script */
const __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "grid" } }, [
      _c("path", {
        attrs: {
          d: "M10 3H3V10H10V3Z",
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M21 3H14V10H21V3Z",
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M21 14H14V21H21V14Z",
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M10 14H3V21H10V14Z",
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$z = compose('IconHamburger');

/* script */
const __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 100 80" } }, [
    _c("g", { attrs: { id: "hamburger" } }, [
      _c("rect", {
        attrs: { width: "100", height: "20", fill: "currentColor" }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: { y: "30", width: "100", height: "20", fill: "currentColor" }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: { y: "60", width: "100", height: "20", fill: "currentColor" }
      })
    ])
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

var script$A = compose('IconHome');

/* script */
const __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "home" } }, [
      _c("path", {
        attrs: {
          d:
            "M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7.5 18.3333V10H12.5V18.3333",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$B = compose('IconHospital');

/* script */
const __vue_script__$B = script$B;

/* template */
var __vue_render__$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "hospital" } }, [
      _c("path", {
        attrs: {
          d:
            "M18.94 3.00614H16C16 2.20886 15.6839 1.44424 15.1213 0.880477C14.5587 0.316717 13.7956 0 13 0H3C2.20435 0 1.44129 0.316717 0.878679 0.880477C0.31607 1.44424 0 2.20886 0 3.00614V18.0368C0 18.8341 0.31607 19.5987 0.878679 20.1625C1.44129 20.7262 2.20435 21.043 3 21.043H3.14C3.37028 21.8921 3.873 22.6416 4.5706 23.1761C5.26819 23.7105 6.1219 24 7 24C7.8781 24 8.73181 23.7105 9.4294 23.1761C10.127 22.6416 10.6297 21.8921 10.86 21.043H13.14C13.3703 21.8921 13.873 22.6416 14.5706 23.1761C15.2682 23.7105 16.1219 24 17 24C17.8781 24 18.7318 23.7105 19.4294 23.1761C20.127 22.6416 20.6297 21.8921 20.86 21.043H21C21.7956 21.043 22.5587 20.7262 23.1213 20.1625C23.6839 19.5987 24 18.8341 24 18.0368V8.0815C24 6.7363 23.4671 5.44612 22.5183 4.49445C21.5695 3.54278 20.2825 3.00747 18.94 3.00614ZM18.94 5.01023C19.752 5.01156 20.5303 5.33572 21.104 5.91155C21.6778 6.48738 22 7.26782 22 8.0815V12.0246H17.125C16.8266 12.0246 16.5405 11.9058 16.3295 11.6944C16.1185 11.483 16 11.1962 16 10.8972V5.01023H18.94ZM7 22.045C6.60444 22.045 6.21776 21.9275 5.88886 21.7073C5.55996 21.487 5.30362 21.174 5.15224 20.8078C5.00087 20.4416 4.96126 20.0387 5.03843 19.6499C5.1156 19.2612 5.30608 18.9041 5.58579 18.6238C5.86549 18.3435 6.22186 18.1527 6.60982 18.0753C6.99778 17.998 7.39992 18.0377 7.76537 18.1894C8.13082 18.3411 8.44318 18.5979 8.66294 18.9275C8.8827 19.2571 9 19.6445 9 20.0409C9 20.5724 8.78929 21.0822 8.41421 21.458C8.03914 21.8339 7.53043 22.045 7 22.045ZM17 22.045C16.6044 22.045 16.2178 21.9275 15.8889 21.7073C15.56 21.487 15.3036 21.174 15.1522 20.8078C15.0009 20.4416 14.9613 20.0387 15.0384 19.6499C15.1156 19.2612 15.3061 18.9041 15.5858 18.6238C15.8655 18.3435 16.2219 18.1527 16.6098 18.0753C16.9978 17.998 17.3999 18.0377 17.7654 18.1894C18.1308 18.3411 18.4432 18.5979 18.6629 18.9275C18.8827 19.2571 19 19.6445 19 20.0409C19 20.5724 18.7893 21.0822 18.4142 21.458C18.0391 21.8339 17.5304 22.045 17 22.045ZM21 19.0389H20.86C20.6297 18.1898 20.127 17.4402 19.4294 16.9058C18.7318 16.3714 17.8781 16.0818 17 16.0818C16.1219 16.0818 15.2682 16.3714 14.5706 16.9058C13.873 17.4402 13.3703 18.1898 13.14 19.0389H10.86C10.6297 18.1898 10.127 17.4402 9.4294 16.9058C8.73181 16.3714 7.8781 16.0818 7 16.0818C6.1219 16.0818 5.26819 16.3714 4.5706 16.9058C3.873 17.4402 3.37028 18.1898 3.14 19.0389H3C2.73478 19.0389 2.48043 18.9333 2.29289 18.7454C2.10536 18.5575 2 18.3026 2 18.0368V3.00614C2 2.74038 2.10536 2.4855 2.29289 2.29758C2.48043 2.10966 2.73478 2.00409 3 2.00409H13C13.2652 2.00409 13.5196 2.10966 13.7071 2.29758C13.8946 2.4855 14 2.74038 14 3.00614V10.8972C14 11.7277 14.3292 12.5242 14.9153 13.1115C15.5013 13.6987 16.2962 14.0286 17.125 14.0286H22V18.0368C22 18.3026 21.8946 18.5575 21.7071 18.7454C21.5196 18.9333 21.2652 19.0389 21 19.0389Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M11 8.01639H9V6.0123C9 5.74654 8.89464 5.49167 8.70711 5.30375C8.51957 5.11583 8.26522 5.01025 8 5.01025C7.73478 5.01025 7.48043 5.11583 7.29289 5.30375C7.10536 5.49167 7 5.74654 7 6.0123V8.01639H5C4.73478 8.01639 4.48043 8.12196 4.29289 8.30988C4.10536 8.4978 4 8.75268 4 9.01844C4 9.2842 4.10536 9.53907 4.29289 9.72699C4.48043 9.91491 4.73478 10.0205 5 10.0205H7V12.0246C7 12.2903 7.10536 12.5452 7.29289 12.7331C7.48043 12.921 7.73478 13.0266 8 13.0266C8.26522 13.0266 8.51957 12.921 8.70711 12.7331C8.89464 12.5452 9 12.2903 9 12.0246V10.0205H11C11.2652 10.0205 11.5196 9.91491 11.7071 9.72699C11.8946 9.53907 12 9.2842 12 9.01844C12 8.75268 11.8946 8.4978 11.7071 8.30988C11.5196 8.12196 11.2652 8.01639 11 8.01639Z",
          fill: "currentColor"
        }
      })
    ])
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

var script$C = compose('IconLoading');

/* script */
const __vue_script__$C = script$C;

/* template */
var __vue_render__$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "loading" } }, [
      _c("path", {
        attrs: {
          d: "M12 2V6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M16.24 7.76018L19.07 4.93018",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M18 12H22",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M16.24 16.2402L19.07 19.0702",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M12 18V22",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M4.92999 19.0702L7.75999 16.2402",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M2 12H6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M4.92999 4.93018L7.75999 7.76018",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$D = compose('IconLocation');

/* script */
const __vue_script__$D = script$D;

/* template */
var __vue_render__$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "location" } }, [
      _c("path", {
        attrs: {
          d:
            "M2.5 9.16675L18.3333 1.66675L10.8333 17.5001L9.16667 10.8334L2.5 9.16675Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$E = compose('IconLocationPin');

/* script */
const __vue_script__$E = script$E;

/* template */
var __vue_render__$E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "location-pin" } }, [
      _c("path", {
        attrs: {
          d:
            "M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
          stroke: "currentColor",
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

var script$F = compose('IconMoreHorizontal');

/* script */
const __vue_script__$F = script$F;

/* template */
var __vue_render__$F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 40 40" } }, [
    _c("g", { attrs: { id: "more-horizontal" } }, [
      _c("path", {
        attrs: {
          fill: "currentColor",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M21.666 20c0-.92-.746-1.667-1.666-1.667-.92 0-1.667.747-1.667 1.667s.746 1.667 1.667 1.667c.92 0 1.666-.747 1.666-1.667zM10 20c0-.92-.746-1.667-1.666-1.667-.92 0-1.667.747-1.667 1.667s.746 1.667 1.667 1.667C9.254 21.667 10 20.92 10 20zM33.333 20c0-.92-.746-1.667-1.666-1.667-.92 0-1.667.747-1.667 1.667s.746 1.667 1.667 1.667c.92 0 1.666-.747 1.666-1.667z"
        }
      })
    ])
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

var script$G = compose('IconMusic');

/* script */
const __vue_script__$G = script$G;

/* template */
var __vue_render__$G = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "music" } }, [
      _c("path", {
        attrs: {
          stroke: "#525252",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M9 18V5l12-2v13M6 21c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          stroke: "#525252",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M18 19c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
        }
      })
    ])
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

var script$H = compose('IconNotification');

/* script */
const __vue_script__$H = script$H;

/* template */
var __vue_render__$H = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 36 36" } }, [
    _c("g", { attrs: { id: "notification" } }, [
      _c("path", {
        attrs: {
          d:
            "M27 12C27 9.61305 26.0518 7.32387 24.364 5.63604C22.6761 3.94821 20.3869 3 18 3C15.6131 3 13.3239 3.94821 11.636 5.63604C9.94821 7.32387 9 9.61305 9 12C9 22.5 4.5 25.5 4.5 25.5H31.5C31.5 25.5 27 22.5 27 12Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M20.5948 31.5C20.3311 31.9546 19.9525 32.332 19.4971 32.5943C19.0417 32.8566 18.5254 32.9947 17.9998 32.9947C17.4742 32.9947 16.9579 32.8566 16.5024 32.5943C16.047 32.332 15.6685 31.9546 15.4048 31.5",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$I = compose('IconOrganizer');

/* script */
const __vue_script__$I = script$I;

/* template */
var __vue_render__$I = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "organiser" } }, [
      _c("path", {
        attrs: {
          stroke: "#525252",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M16 4h2c.53 0 1.04.21 1.414.586C19.79 4.96 20 5.47 20 6v14c0 .53-.21 1.04-.586 1.414C19.04 21.79 18.53 22 18 22H6c-.53 0-1.04-.21-1.414-.586C4.21 21.04 4 20.53 4 20V6c0-.53.21-1.04.586-1.414C4.96 4.21 5.47 4 6 4h2"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          stroke: "#525252",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M15 2H9c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h6c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1z"
        }
      })
    ])
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

var script$J = compose('IconQuestionMark');

/* script */
const __vue_script__$J = script$J;

/* template */
var __vue_render__$J = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "question-mark" } }, [
      _c("path", {
        attrs: {
          d:
            "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M7.08984 7.00057C7.32495 6.33224 7.789 5.76868 8.3998 5.4097C9.0106 5.05073 9.72874 4.91951 10.427 5.03928C11.1253 5.15906 11.7587 5.52209 12.2149 6.0641C12.6712 6.6061 12.9209 7.29209 12.9198 8.00057C12.9198 10.0006 10 11 10 12.5",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M10 15H10.01",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
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

var script$K = compose('IconRegulations');

/* script */
const __vue_script__$K = script$K;

/* template */
var __vue_render__$K = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "regulations" } }, [
      _c("path", {
        attrs: {
          d:
            "M1.66675 2.5H6.66675C7.5508 2.5 8.39865 2.85119 9.02377 3.47631C9.64889 4.10143 10.0001 4.94928 10.0001 5.83333V17.5C10.0001 16.837 9.73669 16.2011 9.26785 15.7322C8.79901 15.2634 8.16312 15 7.50008 15H1.66675V2.5Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$L = compose('IconRisk');

/* script */
const __vue_script__$L = script$L;

/* template */
var __vue_render__$L = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 19 20" } }, [
    _c("g", { attrs: { id: "risk" } }, [
      _c("path", {
        attrs: {
          d:
            "M18.3332 7.94569V3.31523C18.3335 3.13508 18.2756 2.95967 18.1682 2.81519C18.0608 2.67071 17.9097 2.5649 17.7374 2.51356L9.40416 0.0083507H9.35833C9.2308 -0.00278357 9.10254 -0.00278357 8.975 0.0083507H8.92917L0.595957 2.51356C0.423639 2.5649 0.27251 2.67071 0.165128 2.81519C0.0577451 2.95967 -0.000132982 3.13508 0.000131673 3.31523V7.94569C-0.0122496 10.6442 0.848842 13.274 2.45424 15.4406C4.05963 17.6072 6.32277 19.1938 8.90417 19.9623H8.925C9.08222 20.0126 9.25112 20.0126 9.40833 19.9623H9.42916C12.0106 19.1938 14.2737 17.6072 15.8791 15.4406C17.4845 13.274 18.3456 10.6442 18.3332 7.94569ZM1.66677 7.94569V3.92483L8.33335 1.92066V17.9874C6.35224 17.1668 4.66002 15.7734 3.47264 13.9848C2.28526 12.1963 1.65656 10.0938 1.66677 7.94569ZM9.99999 17.9665V1.92066L16.6666 3.92483V7.94569C16.6768 10.0938 16.0481 12.1963 14.8607 13.9848C13.6733 15.7734 11.9811 17.1668 9.99999 17.9874V17.9665Z",
          fill: "currentColor"
        }
      })
    ])
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

var script$M = compose('IconSearch');

/* script */
const __vue_script__$M = script$M;

/* template */
var __vue_render__$M = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "search" } }, [
      _c("path", {
        attrs: {
          d:
            "M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M3.0001 21.0004L7.3501 16.6504",
          stroke: "currentColor",
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

var script$N = compose('IconSearchAlt');

/* script */
const __vue_script__$N = script$N;

/* template */
var __vue_render__$N = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 40 40" } }, [
    _c("g", { attrs: { id: "search-alt" } }, [
      _c("path", {
        attrs: {
          d:
            "M21.6667 31.6667C14.3029 31.6667 8.33333 25.6971 8.33333 18.3333C8.33333 10.9695 14.3029 5 21.6667 5C29.0305 5 35 10.9695 35 18.3333C35 25.6971 29.0305 31.6667 21.6667 31.6667Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M4.99999 35L12.25 27.75",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$O = compose('IconSettings');

/* script */
const __vue_script__$O = script$O;

/* template */
var __vue_render__$O = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "settings" } }, [
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d:
              "M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M16.1666 12.5002C16.0557 12.7515 16.0226 13.0303 16.0716 13.3007C16.1206 13.571 16.2495 13.8204 16.4416 14.0168L16.4916 14.0668C16.6465 14.2216 16.7695 14.4054 16.8533 14.6078C16.9372 14.8101 16.9804 15.027 16.9804 15.246C16.9804 15.465 16.9372 15.6819 16.8533 15.8842C16.7695 16.0866 16.6465 16.2704 16.4916 16.4252C16.3368 16.5801 16.153 16.7031 15.9507 16.7869C15.7483 16.8708 15.5314 16.914 15.3124 16.914C15.0934 16.914 14.8765 16.8708 14.6742 16.7869C14.4719 16.7031 14.288 16.5801 14.1332 16.4252L14.0833 16.3752C13.8869 16.183 13.6374 16.0542 13.3671 16.0052C13.0967 15.9561 12.8179 15.9892 12.5666 16.1002C12.3201 16.2058 12.1099 16.3812 11.9618 16.6048C11.8138 16.8283 11.7343 17.0903 11.7333 17.3585V17.5002C11.7333 17.9422 11.5577 18.3661 11.2451 18.6787C10.9325 18.9912 10.5086 19.1668 10.0666 19.1668C9.62456 19.1668 9.20063 18.9912 8.88807 18.6787C8.57551 18.3661 8.39992 17.9422 8.39992 17.5002V17.4252C8.39347 17.1493 8.30418 16.8818 8.14368 16.6574C7.98317 16.433 7.75886 16.2621 7.49992 16.1668C7.24857 16.0559 6.96976 16.0228 6.69943 16.0718C6.4291 16.1208 6.17965 16.2497 5.98325 16.4418L5.93325 16.4918C5.77846 16.6468 5.59465 16.7697 5.39232 16.8536C5.18999 16.9375 4.97311 16.9806 4.75408 16.9806C4.53506 16.9806 4.31818 16.9375 4.11585 16.8536C3.91352 16.7697 3.72971 16.6468 3.57492 16.4918C3.41996 16.337 3.29703 16.1532 3.21315 15.9509C3.12928 15.7486 3.08611 15.5317 3.08611 15.3127C3.08611 15.0936 3.12928 14.8768 3.21315 14.6744C3.29703 14.4721 3.41996 14.2883 3.57492 14.1335L3.62492 14.0835C3.81703 13.8871 3.94591 13.6376 3.99492 13.3673C4.04394 13.097 4.01085 12.8182 3.89992 12.5668C3.79428 12.3204 3.61888 12.1101 3.39531 11.9621C3.17173 11.814 2.90974 11.7346 2.64159 11.7335H2.49992C2.05789 11.7335 1.63397 11.5579 1.32141 11.2453C1.00885 10.9328 0.833252 10.5089 0.833252 10.0668C0.833252 9.6248 1.00885 9.20088 1.32141 8.88832C1.63397 8.57576 2.05789 8.40016 2.49992 8.40016H2.57492C2.85075 8.39371 3.11826 8.30443 3.34267 8.14392C3.56708 7.98341 3.73801 7.75911 3.83325 7.50016C3.94418 7.24882 3.97727 6.97 3.92826 6.69967C3.87924 6.42934 3.75037 6.17989 3.55825 5.9835L3.50825 5.9335C3.35329 5.77871 3.23036 5.59489 3.14649 5.39256C3.06261 5.19023 3.01944 4.97335 3.01944 4.75433C3.01944 4.5353 3.06261 4.31843 3.14649 4.1161C3.23036 3.91377 3.35329 3.72995 3.50825 3.57516C3.66304 3.4202 3.84685 3.29727 4.04918 3.2134C4.25151 3.12952 4.46839 3.08635 4.68742 3.08635C4.90644 3.08635 5.12332 3.12952 5.32565 3.2134C5.52798 3.29727 5.7118 3.4202 5.86658 3.57516L5.91658 3.62516C6.11298 3.81728 6.36243 3.94615 6.63276 3.99517C6.90309 4.04418 7.1819 4.01109 7.43325 3.90016H7.49992C7.74639 3.79453 7.9566 3.61913 8.10466 3.39555C8.25272 3.17198 8.33218 2.90998 8.33325 2.64183V2.50016C8.33325 2.05814 8.50885 1.63421 8.82141 1.32165C9.13397 1.00909 9.55789 0.833496 9.99992 0.833496C10.4419 0.833496 10.8659 1.00909 11.1784 1.32165C11.491 1.63421 11.6666 2.05814 11.6666 2.50016V2.57516C11.6677 2.84332 11.7471 3.10531 11.8952 3.32888C12.0432 3.55246 12.2534 3.72786 12.4999 3.8335C12.7513 3.94443 13.0301 3.97752 13.3004 3.9285C13.5707 3.87948 13.8202 3.75061 14.0166 3.5585L14.0666 3.5085C14.2214 3.35354 14.4052 3.2306 14.6075 3.14673C14.8098 3.06286 15.0267 3.01968 15.2458 3.01968C15.4648 3.01968 15.6817 3.06286 15.884 3.14673C16.0863 3.2306 16.2701 3.35354 16.4249 3.5085C16.5799 3.66328 16.7028 3.8471 16.7867 4.04943C16.8706 4.25176 16.9137 4.46864 16.9137 4.68766C16.9137 4.90669 16.8706 5.12357 16.7867 5.3259C16.7028 5.52823 16.5799 5.71204 16.4249 5.86683L16.3749 5.91683C16.1828 6.11323 16.0539 6.36268 16.0049 6.633C15.9559 6.90333 15.989 7.18215 16.0999 7.4335V7.50016C16.2056 7.74664 16.381 7.95684 16.6045 8.10491C16.8281 8.25297 17.0901 8.33243 17.3583 8.3335H17.4999C17.9419 8.3335 18.3659 8.50909 18.6784 8.82165C18.991 9.13421 19.1666 9.55813 19.1666 10.0002C19.1666 10.4422 18.991 10.8661 18.6784 11.1787C18.3659 11.4912 17.9419 11.6668 17.4999 11.6668H17.4249C17.1568 11.6679 16.8948 11.7474 16.6712 11.8954C16.4476 12.0435 16.2722 12.2537 16.1666 12.5002V12.5002Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0H20V20H0V0Z", fill: "white" } })
        ])
      ])
    ])
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

var script$P = compose('IconSliders');

/* script */
const __vue_script__$P = script$P;

/* template */
var __vue_render__$P = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "sliders" } }, [
      _c("path", {
        attrs: {
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d:
            "M3.333 17.5v-5.833M3.333 8.333V2.5M10 17.5V10M10 6.667V2.5M16.667 17.5v-4.167M16.667 10V2.5M.833 11.667h5M7.5 6.667h5M14.167 13.333h5"
        }
      })
    ])
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

var script$Q = compose('IconSort');

/* script */
const __vue_script__$Q = script$Q;

/* template */
var __vue_render__$Q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 12 7" } }, [
    _c("g", { attrs: { id: "sort" } }, [
      _c("path", {
        attrs: {
          d: "M11 6L6 1L1 6",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
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

var script$R = compose('IconStar');

/* script */
const __vue_script__$R = script$R;

/* template */
var __vue_render__$R = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "star" } }, [
      _c("path", {
        attrs: {
          d:
            "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
          stroke: "currentColor",
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

var script$S = compose('IconSuccess');

/* script */
const __vue_script__$S = script$S;

/* template */
var __vue_render__$S = function() {
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
          d: "M10.3334 4.5L5.75008 9.08333L3.66675 7",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
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

//

var script$T = compose('IconTeamManagement');

/* script */
const __vue_script__$T = script$T;

/* template */
var __vue_render__$T = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "team-management" } }, [
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d:
              "M14.1666 17.5V15.8333C14.1666 14.9493 13.8154 14.1014 13.1903 13.4763C12.5652 12.8512 11.7173 12.5 10.8333 12.5H4.16659C3.28253 12.5 2.43468 12.8512 1.80956 13.4763C1.18444 14.1014 0.833252 14.9493 0.833252 15.8333V17.5",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M7.50008 9.16667C9.34103 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34103 2.5 7.50008 2.5C5.65913 2.5 4.16675 3.99238 4.16675 5.83333C4.16675 7.67428 5.65913 9.16667 7.50008 9.16667Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M19.1667 17.5001V15.8334C19.1662 15.0948 18.9204 14.3774 18.4679 13.7937C18.0154 13.2099 17.3819 12.793 16.6667 12.6084",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M13.3333 2.6084C14.0503 2.79198 14.6858 3.20898 15.1396 3.79366C15.5935 4.37833 15.8398 5.09742 15.8398 5.83757C15.8398 6.57771 15.5935 7.2968 15.1396 7.88147C14.6858 8.46615 14.0503 8.88315 13.3333 9.06673",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0H20V20H0V0Z", fill: "white" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$T = [];
__vue_render__$T._withStripped = true;

  /* style */
  const __vue_inject_styles__$T = undefined;
  /* scoped */
  const __vue_scope_id__$T = undefined;
  /* module identifier */
  const __vue_module_identifier__$T = undefined;
  /* functional template */
  const __vue_is_functional_template__$T = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$T = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$T, staticRenderFns: __vue_staticRenderFns__$T },
    __vue_inject_styles__$T,
    __vue_script__$T,
    __vue_scope_id__$T,
    __vue_is_functional_template__$T,
    __vue_module_identifier__$T,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$U = compose('IconTrash');

/* script */
const __vue_script__$U = script$U;

/* template */
var __vue_render__$U = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "trash" } }, [
      _c("path", {
        attrs: {
          d: "M3 6H5H21",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M10 11V17",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M14 11V17",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$U = [];
__vue_render__$U._withStripped = true;

  /* style */
  const __vue_inject_styles__$U = undefined;
  /* scoped */
  const __vue_scope_id__$U = undefined;
  /* module identifier */
  const __vue_module_identifier__$U = undefined;
  /* functional template */
  const __vue_is_functional_template__$U = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$U = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$U, staticRenderFns: __vue_staticRenderFns__$U },
    __vue_inject_styles__$U,
    __vue_script__$U,
    __vue_scope_id__$U,
    __vue_is_functional_template__$U,
    __vue_module_identifier__$U,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$V = compose('IconUpload');

/* script */
const __vue_script__$V = script$V;

/* template */
var __vue_render__$V = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "upload" } }, [
      _c("path", {
        attrs: {
          d:
            "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M14.1668 6.66667L10.0002 2.5L5.8335 6.66667",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M10 2.5V12.5",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$V = [];
__vue_render__$V._withStripped = true;

  /* style */
  const __vue_inject_styles__$V = undefined;
  /* scoped */
  const __vue_scope_id__$V = undefined;
  /* module identifier */
  const __vue_module_identifier__$V = undefined;
  /* functional template */
  const __vue_is_functional_template__$V = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$V = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$V, staticRenderFns: __vue_staticRenderFns__$V },
    __vue_inject_styles__$V,
    __vue_script__$V,
    __vue_scope_id__$V,
    __vue_is_functional_template__$V,
    __vue_module_identifier__$V,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$W = compose('IconUserCheck');

/* script */
const __vue_script__$W = script$W;

/* template */
var __vue_render__$W = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "user-check" } }, [
      _c("path", {
        attrs: {
          d:
            "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M17 11L19 13L23 9",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$W = [];
__vue_render__$W._withStripped = true;

  /* style */
  const __vue_inject_styles__$W = undefined;
  /* scoped */
  const __vue_scope_id__$W = undefined;
  /* module identifier */
  const __vue_module_identifier__$W = undefined;
  /* functional template */
  const __vue_is_functional_template__$W = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$W = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$W, staticRenderFns: __vue_staticRenderFns__$W },
    __vue_inject_styles__$W,
    __vue_script__$W,
    __vue_scope_id__$W,
    __vue_is_functional_template__$W,
    __vue_module_identifier__$W,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$X = compose('IconUsers');

/* script */
const __vue_script__$X = script$X;

/* template */
var __vue_render__$X = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 24 24" } }, [
    _c("g", { attrs: { id: "users" } }, [
      _c("path", {
        attrs: {
          d:
            "M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$X = [];
__vue_render__$X._withStripped = true;

  /* style */
  const __vue_inject_styles__$X = undefined;
  /* scoped */
  const __vue_scope_id__$X = undefined;
  /* module identifier */
  const __vue_module_identifier__$X = undefined;
  /* functional template */
  const __vue_is_functional_template__$X = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$X = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$X, staticRenderFns: __vue_staticRenderFns__$X },
    __vue_inject_styles__$X,
    __vue_script__$X,
    __vue_scope_id__$X,
    __vue_is_functional_template__$X,
    __vue_module_identifier__$X,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$Y = compose('IconValid');

/* script */
const __vue_script__$Y = script$Y;

/* template */
var __vue_render__$Y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "valid" } }, [
      _c("circle", {
        attrs: { cx: "10", cy: "10", r: "10", fill: "currentColor" }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M15.3337 6L8.00033 13.3333L4.66699 10",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$Y = [];
__vue_render__$Y._withStripped = true;

  /* style */
  const __vue_inject_styles__$Y = undefined;
  /* scoped */
  const __vue_scope_id__$Y = undefined;
  /* module identifier */
  const __vue_module_identifier__$Y = undefined;
  /* functional template */
  const __vue_is_functional_template__$Y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Y = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Y, staticRenderFns: __vue_staticRenderFns__$Y },
    __vue_inject_styles__$Y,
    __vue_script__$Y,
    __vue_scope_id__$Y,
    __vue_is_functional_template__$Y,
    __vue_module_identifier__$Y,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$Z = compose('IconWarning');

/* script */
const __vue_script__$Z = script$Z;

/* template */
var __vue_render__$Z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 14 14" } }, [
    _c("g", { attrs: { id: "warning" } }, [
      _c("path", {
        attrs: {
          d:
            "M5.94972 2.33944L0.747856 10.9966C0.640606 11.1818 0.583857 11.3917 0.583257 11.6055C0.582656 11.8193 0.638224 12.0295 0.744433 12.2153C0.850642 12.401 1.00379 12.5558 1.18864 12.6643C1.37349 12.7727 1.58359 12.831 1.79806 12.8333H12.2018C12.4162 12.831 12.6264 12.7727 12.8112 12.6643C12.996 12.5558 13.1492 12.401 13.2554 12.2153C13.3616 12.0295 13.4172 11.8193 13.4166 11.6055C13.416 11.3917 13.3592 11.1818 13.252 10.9966L8.05012 2.33944C7.94063 2.1595 7.78648 2.01073 7.60252 1.90749C7.41857 1.80424 7.21102 1.75 6.99992 1.75C6.78881 1.75 6.58127 1.80424 6.39732 1.90749C6.21336 2.01073 6.0592 2.1595 5.94972 2.33944Z",
          fill: "currentColor"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7 5.83301V8.16634",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M7 10.5H7.00583",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      })
    ])
  ])
};
var __vue_staticRenderFns__$Z = [];
__vue_render__$Z._withStripped = true;

  /* style */
  const __vue_inject_styles__$Z = undefined;
  /* scoped */
  const __vue_scope_id__$Z = undefined;
  /* module identifier */
  const __vue_module_identifier__$Z = undefined;
  /* functional template */
  const __vue_is_functional_template__$Z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Z = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Z, staticRenderFns: __vue_staticRenderFns__$Z },
    __vue_inject_styles__$Z,
    __vue_script__$Z,
    __vue_scope_id__$Z,
    __vue_is_functional_template__$Z,
    __vue_module_identifier__$Z,
    false,
    undefined,
    undefined,
    undefined
  );

//

var script$_ = compose('IconWeather');

/* script */
const __vue_script__$_ = script$_;

/* template */
var __vue_render__$_ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("IconBase", { attrs: { viewBox: "0 0 20 20" } }, [
    _c("g", { attrs: { id: "weather" } }, [
      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
        _c("path", {
          attrs: {
            d:
              "M9.99992 14.1666C12.3011 14.1666 14.1666 12.3011 14.1666 9.99992C14.1666 7.69873 12.3011 5.83325 9.99992 5.83325C7.69873 5.83325 5.83325 7.69873 5.83325 9.99992C5.83325 12.3011 7.69873 14.1666 9.99992 14.1666Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M10 0.833252V2.49992",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M10 17.5V19.1667",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M3.5166 3.5166L4.69993 4.69993",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M15.3 15.3L16.4834 16.4834",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M0.833252 10H2.49992",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M17.5 10H19.1667",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M3.5166 16.4834L4.69993 15.3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d: "M15.3 4.69993L16.4834 3.5166",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        })
      ]),
      _vm._v(" "),
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip0" } }, [
          _c("path", { attrs: { d: "M0 0H20V20H0V0Z", fill: "white" } })
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__$_ = [];
__vue_render__$_._withStripped = true;

  /* style */
  const __vue_inject_styles__$_ = undefined;
  /* scoped */
  const __vue_scope_id__$_ = undefined;
  /* module identifier */
  const __vue_module_identifier__$_ = undefined;
  /* functional template */
  const __vue_is_functional_template__$_ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$_ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$_, staticRenderFns: __vue_staticRenderFns__$_ },
    __vue_inject_styles__$_,
    __vue_script__$_,
    __vue_scope_id__$_,
    __vue_is_functional_template__$_,
    __vue_module_identifier__$_,
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
exports.IconComplete = __vue_component__$m;
exports.IconContractor = __vue_component__$n;
exports.IconDashboard = __vue_component__$o;
exports.IconDelete = __vue_component__$p;
exports.IconEdit = __vue_component__$q;
exports.IconError = __vue_component__$r;
exports.IconEvent = __vue_component__$s;
exports.IconEventInfo = __vue_component__$t;
exports.IconEventLogs = __vue_component__$u;
exports.IconExcel = __vue_component__$v;
exports.IconFile = __vue_component__$w;
exports.IconFlag = __vue_component__$x;
exports.IconGrid = __vue_component__$y;
exports.IconHamburger = __vue_component__$z;
exports.IconHome = __vue_component__$A;
exports.IconHospital = __vue_component__$B;
exports.IconLoading = __vue_component__$C;
exports.IconLocation = __vue_component__$D;
exports.IconLocationPin = __vue_component__$E;
exports.IconMoreHorizontal = __vue_component__$F;
exports.IconMusic = __vue_component__$G;
exports.IconNotification = __vue_component__$H;
exports.IconOrganizer = __vue_component__$I;
exports.IconQuestionMark = __vue_component__$J;
exports.IconRegulations = __vue_component__$K;
exports.IconRisk = __vue_component__$L;
exports.IconSearch = __vue_component__$M;
exports.IconSearchAlt = __vue_component__$N;
exports.IconSettings = __vue_component__$O;
exports.IconSliders = __vue_component__$P;
exports.IconSort = __vue_component__$Q;
exports.IconStar = __vue_component__$R;
exports.IconSuccess = __vue_component__$S;
exports.IconTeamManagement = __vue_component__$T;
exports.IconTrash = __vue_component__$U;
exports.IconUpload = __vue_component__$V;
exports.IconUserCheck = __vue_component__$W;
exports.IconUsers = __vue_component__$X;
exports.IconValid = __vue_component__$Y;
exports.IconWarning = __vue_component__$Z;
exports.IconWeather = __vue_component__$_;
//# sourceMappingURL=eve-icons.js.map
