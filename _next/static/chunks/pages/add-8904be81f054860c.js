(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{3248:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add",function(){return r(9398)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){s=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6273),i=r(387),c=r(7190);var u={};function d(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var t=a(s.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,h=o.as,p=e.children,g=e.replace,m=e.shallow,v=e.scroll,x=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var b=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),w=y[0],j=y[1],k=l.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);l.default.useEffect((function(){var e=j&&r&&s.isLocalURL(f),t="undefined"!==typeof x?x:n&&n.locale,a=u[f+"%"+h+(t?"%"+t:"")];e&&!a&&d(n,f,h,{locale:t})}),[h,f,j,x,r,n]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}))}(e,n,f,h,g,m,v,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(n,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof x?x:n&&n.locale,L=n&&n.isLocaleDomain&&s.getDomainLocale(h,M,n&&n.locales,n&&n.domainLocales);N.href=L||s.addBasePath(s.addLocale(h,M,n&&n.defaultLocale))}return l.default.cloneElement(t,N)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){s=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,u=o.useRef(),d=a(o.useState(!1),2),f=d[0],h=d[1],p=a(o.useState(t?t.current:null),2),g=p[0],m=p[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:r}))}),[n,g,r,f]);return o.useEffect((function(){if(!s&&!f){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&m(t.current)}),[t]),[v,f]};var o=r(7294),l=r(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},9398:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),a=r(1664),o=(r(5675),r(7294));r(9008);function l(){var e=(0,o.useState)(""),t=e[0],r=e[1],l=new Date,s=(0,o.useState)(l.toISOString().split("T")[0]),i=s[0],c=s[1],u=(0,o.useState)(""),d=u[0],f=u[1],h=(0,o.useState)(""),p=h[0],g=h[1];(0,o.useEffect)((function(){Number(t)<0?(document.getElementById("message-div").innerHTML="A negative number will count as\n a credit towards the category.",document.getElementById("message-div").classList.add(),document.getElementById("message-div").classList.remove()):(document.getElementById("message-div").innerHTML="",document.getElementById("message-div").classList.add(),document.getElementById("message-div").classList.remove())}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "}),(0,n.jsxs)("div",{className:"relative rounded-xl px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10 dark:bg-gradient-to-t dark:from-slate-500 dark:via-purple-900 dark:to-gray-800",children:[(0,n.jsx)("div",{className:"absolute top-0 right-0 h-16 w-16 p-4 grid items-center",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsxs)("a",{children:[" ",(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"35",children:[(0,n.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,n.jsx)("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})]})]})})}),(0,n.jsx)("div",{className:"align-center mb-10",children:(0,n.jsx)("h1",{className:"text-xl font-bold ",children:"Add Expenses"})}),(0,n.jsx)("form",{onSubmit:function(e){return e.preventDefault()},className:"px-3 pt-6 pb-8 mb-4",children:(0,n.jsxs)("div",{className:"grid justify-around",children:[(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)("span",{className:"absolute pl-6 text-bold text-gray-700 leading-tight py-1 text-slate-500 text-3xl",children:"$"}),(0,n.jsx)("input",{className:"text-center text-bold text-2xl block w-full text-emerald-400 appearance-none border rounded-3xl py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:"price_input",type:"text",inputMode:"decimal",placeholder:"0.00",value:t,onChange:function(e){var t;".."===(t=e.target.value)?r("-"):"."===t?r(t):isNaN(Number(t))?r(""):t.includes(".")?t.indexOf(".")===t.length-2?r(Number(t).toFixed(1)):t.indexOf(".")===t.length-1?r(t):r(Number(t).toFixed(2)):r(t)}})]}),(0,n.jsxs)("div",{className:"mb-6 xl:w-96",children:[(0,n.jsx)("span",{className:"absolute p-2.5 z-1000",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",className:"fill-black dark:fill-white",children:[(0,n.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"}),(0,n.jsx)("path",{d:"M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"})]})}),(0,n.jsxs)("select",{id:"category-select",className:"font-['Proxima Nova'] form-select transition ease-in-out shadow appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:p,onChange:function(e){return g(e.target.value)},children:[(0,n.jsx)("option",{value:"home",className:"p2-2",children:"Home"}),(0,n.jsx)("option",{value:"car",className:"p2-2",children:"Car"}),(0,n.jsx)("option",{value:"b-fun-money",className:"p2-2",children:"Brysons Money"}),(0,n.jsx)("option",{value:"food",className:"p2-2",children:"Food"})]})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("span",{className:"absolute p-2.5",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",className:"fill-black dark:fill-white",children:[(0,n.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,n.jsx)("path",{d:"M19,5v9l-5,0l0,5H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h10l6-6V5C21,3.9,20.1,3,19,3z M12,14H7v-2h5V14z M17,10H7V8h10V10z"})]})}),(0,n.jsx)("input",{className:"text-xl font-normal bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:"note",type:"text",placeholder:"Note",value:d,onChange:function(e){return f(e.target.value)}})]}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("span",{className:"absolute p-2.5",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",className:"fill-black dark:fill-white",children:[(0,n.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,n.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"})]})}),(0,n.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:"date-input",type:"date",value:i,onChange:function(e){return c(e.target.value)}})]})}),(0,n.jsx)("button",{className:"grow bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline",onClick:function(){console.log("Price: ".concat(t,", date: ").concat(i,", category: ").concat(p,", note: ").concat(d))},children:"Add reciept"})]})}),(0,n.jsx)("div",{visibility:"hidden",id:"message-div",className:"max-width text-yellow-500 text-sm whitespace-nowrap"}),(0,n.jsxs)("div",{className:" lg:hidden max-width text-slate-500 text-sm",children:["Use ",(0,n.jsx)("code",{children:".."})," to make a minus sign!"]})]})]})})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[675,774,888,179],(function(){return t=3248,e(e.s=t);var t}));var t=e.O();_N_E=t}]);