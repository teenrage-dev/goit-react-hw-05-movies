(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[482],{81:function(e,t,n){"use strict";n.d(t,{AJ:function(){return u},B0:function(){return i},E4:function(){return a},FH:function(){return o},N1:function(){return c},q1:function(){return r}});var o="https://api.themoviedb.org/3/",r="81ea3d7bbcc395dafd55ea308df4d534",u="https://image.tmdb.org/t/p/w500/",i="https://image.tmdb.org/t/p/w185/",c="https://via.placeholder.com/500x750",a="https://via.placeholder.com/185x278"},482:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(861),r=n(885),u=n(757),i=n.n(u),c=n(791),a=n(628),f={},l=n(81),s=function(){var e=(0,o.Z)(i().mark((function e(t){var n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l.FH,"search/movie?api_key=").concat(l.q1,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,console.log(o),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=n(501),y=n(871),v=n(184),b=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1],l=(0,c.useState)(""),b=(0,r.Z)(l,2),d=b[0],h=b[1],m=(0,y.TH)(),g=(0,p.lr)({query:""}),O=(0,r.Z)(g,2),j=O[0],w=O[1],x=j.get("query");console.log(j),console.log(m),(0,c.useEffect)((function(){function e(){return(e=(0,o.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(x);case 3:t=e.sent,n=t.results,u(n),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}console.log(x),""!==x&&function(){e.apply(this,arguments)}()}),[x]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:[(0,v.jsx)("div",{className:"row",children:(0,v.jsx)(a.DebounceInput,{minLength:1,debounceTimeout:500,autoFocus:!0,type:"text",value:d,onChange:function(e){var t=e.target.value.toLocaleLowerCase();h(t),w({query:t}),console.log(d,t)}})}),(0,v.jsx)("ul",{className:"row",children:n.map((function(e){return(0,v.jsx)("li",{className:f.DebounceInput,children:(0,v.jsx)(p.OL,{to:"/movies/".concat(e.id),state:{from:"/movies?query=".concat(x)},children:e.title||e.name})},e.id)}))})]})})}},95:function(e,t,n){var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,l=a||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,v=function(){return l.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function d(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,u,i,c,a,f=0,l=!1,s=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,u=r;return o=r=void 0,f=t,i=e.apply(u,n)}function g(e){return f=e,c=setTimeout(j,t),l?m(e):i}function O(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-f>=u}function j(){var e=v();if(O(e))return w(e);c=setTimeout(j,function(e){var n=t-(e-a);return s?y(n,u-(e-f)):n}(e))}function w(e){return c=void 0,h&&o?m(e):(o=r=void 0,i)}function x(){var e=v(),n=O(e);if(o=arguments,r=this,a=e,n){if(void 0===c)return g(a);if(s)return c=setTimeout(j,t),m(a)}return void 0===c&&(c=setTimeout(j,t)),i}return t=d(t)||0,b(n)&&(l=!!n.leading,u=(s="maxWait"in n)?p(d(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=r=c=void 0},x.flush=function(){return void 0===c?i:w(v())},x}},674:function(e,t,n){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var r=c(n(791)),u=c(n(95)),i=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(f,e);var t,n,o,c=y(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),h(b(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,o=t.props.minLength;t.setState({value:e.target.value},(function(){var r=t.state.value;r.length>=o?t.notify(e):n.length>r.length&&t.notify(l(l({},e),{},{target:l(l({},e.target),{},{value:""})}))}))})),h(b(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),h(b(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),h(b(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,u.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),h(b(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),h(b(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var o=t.state.value,r=t.props.minLength;o.length>=r?t.doNotify(e):t.doNotify(l(l({},e),{},{target:l(l({},e.target),{},{value:o})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=f,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,o=t.debounceTimeout,r=e.debounceTimeout,u=e.value,i=this.state.value;"undefined"!==typeof n&&u!==n&&i!==n&&this.setState({value:n}),o!==r&&this.createNotifier(o)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,o=n.element,u=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,f=n.onKeyDown,s=n.onBlur,p=n.inputRef,y=a(n,i),v=this.state.value;e=u?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},t=c?{onBlur:this.onBlur}:s?{onBlur:s}:{};var b=p?{ref:p}:{};return r.default.createElement(o,l(l(l(l({},y),{},{onChange:this.onChange,value:v},e),t),b))}}])&&s(t.prototype,n),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.default.PureComponent);t.DebounceInput=m,h(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,t,n){"use strict";var o=n(674).DebounceInput;o.DebounceInput=o,e.exports=o}}]);
//# sourceMappingURL=482.11c4b9c1.chunk.js.map