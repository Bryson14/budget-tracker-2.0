(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{6944:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return s(2595)}])},9147:function(e,t,s){"use strict";s.d(t,{H$:function(){return l}});s(4051),s(1674);var a=["Transactions","Categories","Information"],n=s(1674);function l(e,t){console.log("Validating baseid and api key");var s={passed:!0,apikey:!0,baseid:!0,trans_tbl:!0,ctgy_tbl:!0,info_tbl:!0},l=new n({apiKey:t}).base(e);return a.forEach((function(e){l(e).select({maxRecords:1,view:"Grid view"}).eachPage((function(e,t){e.forEach((function(e){})),t()}),(function(t){t&&(s.passed=!1,-1!==t.message.indexOf("api key")?s.apikey=!1:-1!==t.message.indexOf("Could not find what you are looking for")?s.baseid=!1:-1!==t.message.indexOf("Could not find table")&&e==a[0]?s.trans_tbl=!1:-1!==t.message.indexOf("Could not find table")&&e==a[1]?s.ctgy_tbl=!1:-1!==t.message.indexOf("Could not find table")&&e==a[2]&&(s.info_tbl=!1))}))})),console.log(s),s}},2595:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(5893),n=s(1664),l=s(9008),r=s(5675),i=s(9147),o=s(7294),c="apikey",d="baseid";function x(e){e.props;var t=(0,o.useState)(""),s=t[0],x=t[1],p=(0,o.useState)(""),u=p[0],g=p[1];return(0,o.useEffect)((function(){null!==localStorage.getItem(c)&&x(localStorage.getItem(c)),null!==localStorage.getItem(d)&&g(localStorage.getItem(d))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{children:(0,a.jsx)("title",{children:"Settings"})}),(0,a.jsxs)("div",{className:"min-h-max grow bg-gray-50 py-6 flex flex-col justify-center relative sm:py-12",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center "}),(0,a.jsxs)("div",{className:"relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("h1",{className:"text-xl font-bold ",children:"Settings"}),(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{className:"",children:(0,a.jsx)(r.default,{src:"/images/cottage_black_24dp.svg",alt:"home",className:"p-1",width:40,height:40})})})]}),(0,a.jsx)("form",{onSubmit:function(e){return e.preventDefault()},className:"px-8 pt-6 pb-8 mb-4",children:(0,a.jsxs)("div",{className:"justify-around",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"baseid",children:"Base ID"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"bsaeid",type:"text",placeholder:"Base ID",value:u,onChange:function(e){return g(e.target.value)}})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"apikey",children:"API Key"}),(0,a.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"apikey",type:"password",placeholder:"API Key",value:s,onChange:function(e){return x(e.target.value)}})]}),(0,a.jsx)("button",{className:"bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:function(){return function(e,t){console.log("trying with ".concat(e," and ").concat(t));var s=(0,i.H$)(e,t);if(!0===s.passed)return localStorage.setItem(c,t),localStorage.setItem(d,e),void m();alert("Incorrect Credentials",s)}(u,s)},children:"Update BaseId and Api Key"})]})}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,a.jsx)("div",{className:"py-2 inline-block min-w-full sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsxs)("table",{className:"min-w-full",children:[(0,a.jsx)("thead",{className:"bg-white border-b",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"#"}),(0,a.jsx)("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Test"}),(0,a.jsx)("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Result"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"1"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:"Overall"}),(0,a.jsx)("td",{id:"overall-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]}),(0,a.jsxs)("tr",{className:"bg-white border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"2"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:"Correct API Key"}),(0,a.jsx)("td",{id:"api-key-table-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]}),(0,a.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"3"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center",children:"Correct Base ID"}),(0,a.jsx)("td",{id:"baseid-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]}),(0,a.jsxs)("tr",{className:"bg-white border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"4"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center",children:"Transaction Table Exists"}),(0,a.jsx)("td",{id:"trans-table-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]}),(0,a.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"5"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center",children:"Category Table Exists"}),(0,a.jsx)("td",{id:"ctgry-table-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]}),(0,a.jsxs)("tr",{className:"bg-white border-b",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:"6"}),(0,a.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center",children:"Information Table Exists"}),(0,a.jsx)("td",{id:"info-table-result",className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"})]})]})]})})})})}),(0,a.jsx)("div",{className:"grid place-items-center",children:(0,a.jsx)("button",{className:"m-4 place-self-center bg-emerald-400 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:m,children:"Test Database"})})]})]})]})}function m(){var e=localStorage.getItem(d),t=localStorage.getItem(c),s={};null!==t&&null!==t&&(s=(0,i.H$)(e,t));var a="Passed",n="Failed";s.passed?document.getElementById("overall-result").innerText=a:document.getElementById("overall-result").innerText=n,s.baseid?document.getElementById("baseid-result").innerText=a:document.getElementById("baseid-result").innerText=n,s.apikey?document.getElementById("api-key-table-result").innerText=a:document.getElementById("api-key-table-result").innerText=n,s.trans_tbl?document.getElementById("trans-table-result").innerText=a:document.getElementById("trans-table-result").innerText=n,s.ctgy_tbl?document.getElementById("ctgry-table-result").innerText=a:document.getElementById("ctgry-table-result").innerText=n,s.info_tbl?document.getElementById("info-table-result").innerText=a:document.getElementById("info-table-result").innerText=n}},356:function(){},9065:function(){}},function(e){e.O(0,[86,675,774,888,179],(function(){return t=6944,e(e.s=t);var t}));var t=e.O();_N_E=t}]);