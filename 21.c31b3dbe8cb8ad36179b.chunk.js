(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1ba9ba8ec980a3dd5a90":function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),i=n("0d7f0986bcd2f33d8a2a"),a=n("1037a6e0d5914309f74c"),c=n.n(a),f=n("4dd2a92e69dcbe1bab10"),l=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),u=n("282d5645b44ba868741e"),d=n.n(u),s=n("b912ecc4473ae8a2ff0b"),b=n.n(s),p=n("921c0b8c557fe6ba5da8"),v=n.n(p),y=n("2abb2ecfab271efcf057"),h=n.n(y),g=n("f466c6fac21e2bd173f8"),m=n.n(g),w=n("f0d76769f542545382df"),S=n.n(w),_=n("2de20a79156911f204a2"),O=n.n(_),P=n("a289f12938702445a8e7"),j=n.n(P),T=n("07460803b00a50e0385f");function k(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var c=new Array(a),f=0;f<a;f++)c[f]=arguments[f+3];t.children=c}if(t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var N=0;function R(e,t,n,r,o){return{id:N+=1,name:e,calories:t,fat:n,carbs:r,protein:o}}var C=[R("Frozen yoghurt",159,6,24,4),R("Ice cream sandwich",237,9,37,4.3),R("Eclair",262,16,24,6),R("Cupcake",305,3.7,67,4.3),R("Gingerbread",356,16,49,3.9)],E=k(O.a,{},void 0,k(j.a,{},void 0,k(S.a,{},void 0,"Dessert (100g serving)"),k(S.a,{align:"right"},void 0,"Calories"),k(S.a,{align:"right"},void 0,"Fat (g)"),k(S.a,{align:"right"},void 0,"Carbs (g)"),k(S.a,{align:"right"},void 0,"Protein (g)")));var $,D=Object(l.withStyles)(T.a)(function(e){var t=e.classes;return k(o.Fragment,{},void 0,k(d.a,{className:t.toolbar},void 0,k("div",{className:t.title},void 0,k(v.a,{className:t.title,variant:"h6"},void 0,"Nutrition"))),k("div",{className:t.rootTable},void 0,k(h.a,{className:b()(t.table,t.stripped)},void 0,E,k(m.a,{},void 0,C.map(function(e){return[k(j.a,{},e.id,k(S.a,{},void 0,e.name),k(S.a,{align:"right"},void 0,e.calories),k(S.a,{align:"right"},void 0,e.fat),k(S.a,{align:"right"},void 0,e.carbs),k(S.a,{align:"right"},void 0,e.protein))]})))))});function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n,r){$||($="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&o)for(var f in o)void 0===t[f]&&(t[f]=o[f]);else t||(t=o||{});return{$$typeof:$,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===F(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=x(f.n,{title:"Table",whiteBg:!0,icon:"table_chart",desc:"UI Table when no data to be shown"},void 0,x("div",{},void 0,x(D,{}))),G=x(f.n,{title:"Empty Table",whiteBg:!0,icon:"table_chart",desc:"They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another"},void 0,x("div",{},void 0,x(f.g,{}))),H=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(f,o["Component"]);var t,n,r,a=I(f);function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),a.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=c.a.name+" - Table",t=c.a.desc;return x("div",{},void 0,x(i.Helmet,{},void 0,x("title",{},void 0,e),x("meta",{name:"description",content:t}),x("meta",{property:"og:title",content:e}),x("meta",{property:"og:description",content:t}),x("meta",{property:"twitter:title",content:e}),x("meta",{property:"twitter:description",content:t})),z,G)}}])&&A(t.prototype,n),r&&A(t,r),f}();t.default=H}}]);