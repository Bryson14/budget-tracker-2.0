(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{3447:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandbox",function(){return r(5828)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),s=r(387),c=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=a(c.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],_=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,a=u[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,j,x,r,n]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:i}))}(e,n,d,p,m,g,v,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof x?x:n&&n.locale,E=n&&n.isLocaleDomain&&l.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);k.href=E||l.addBasePath(l.addLocale(p,N,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],p=f[1],h=a(o.useState(t?t.current:null),2),m=h[0],g=h[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&g(t.current)}),[t]),[v,d]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},5828:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(5675),o=r(1664);function i(){return(0,n.jsxs)("div",{className:"min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "}),(0,n.jsx)("div",{className:"relative mb-4 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10",children:(0,n.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{src:"/images/close_black_24dp.svg",className:"h-6",alt:"Tailwind Play",height:"30",width:"30"})}),(0,n.jsx)("li",{children:"Bryson Meiling"}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{src:"/images/settings_black_24dp.svg",className:"h-6",alt:"Tailwind Play",height:"30",width:"30"})})]}),(0,n.jsxs)("div",{className:"divide-y divide-gray-300/50",children:[(0,n.jsxs)("div",{className:"py-8 text-base leading-7 space-y-6 text-gray-600",children:[(0,n.jsx)("p",{children:"An advanced online playground for Tailwind CSS, including support for things like:"}),(0,n.jsx)("p",{children:"Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."})]}),(0,n.jsxs)("div",{className:"pt-8 text-base leading-7 font-semibold",children:[(0,n.jsx)("p",{className:"text-gray-900",children:"Want to dig deeper into Tailwind?"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://tailwindcss.com/docs",className:"text-sky-500 hover:text-sky-600",children:"Read the docs \u2192"})}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"}),(0,n.jsx)("p",{children:"more stuff"})]})]})]})}),(0,n.jsx)("div",{id:"footer-div-ok",className:"fixed bottom-0 inset-x-0 px-6 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10",children:(0,n.jsx)("footer",{className:"bottom-0 sticky ",children:(0,n.jsxs)("nav",{className:"fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900 uppercase font-mono relative",children:[(0,n.jsx)("a",{href:"#",className:"w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300",children:(0,n.jsx)(a.default,{src:"/images/view_list_black_24dp.svg",width:32,height:32,alt:"Transaction List"})}),(0,n.jsx)(o.default,{href:"/add",children:(0,n.jsx)("a",{className:"w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800",children:(0,n.jsx)(a.default,{src:"/images/add_black_24dp.svg",width:32,height:32,alt:"Add new expense"})})}),(0,n.jsx)("a",{href:"#",className:"w-full block py-5 px-3 my-3 mx-4 text-center hover:bg-blue-200 hover:text-blue-800",children:(0,n.jsx)(a.default,{src:"/images/expand_less_black_24dp.svg",width:32,height:32,alt:"See more"})})]})})})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[675,774,888,179],(function(){return t=3447,e(e.s=t);var t}));var t=e.O();_N_E=t}]);