(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{6944:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(2595)}])},9147:function(e,t,n){"use strict";n.d(t,{H$:function(){return l}});n(1674);var a=["Transactions","Categories","Information"],i=n(1674);function l(e,t){console.log("Validating baseid and api key");var n={passed:!0,apikey:!0,baseid:!0,trans_tbl:!0,ctgy_tbl:!0,info_tbl:!0},l=new i({apiKey:t}).base(e);return a.forEach((function(e){l(e).select({maxRecords:1,view:"Grid view"}).eachPage((function(e,t){e.forEach((function(e){})),t()}),(function(t){t&&(n.passed=!1,-1!==t.message.indexOf("api key")?n.apikey=!1:-1!==t.message.indexOf("Could not find what you are looking for")?n.baseid=!1:-1!==t.message.indexOf("Could not find table")&&e==a[0]?n.trans_tbl=!1:-1!==t.message.indexOf("Could not find table")&&e==a[1]?n.ctgy_tbl=!1:-1!==t.message.indexOf("Could not find table")&&e==a[2]&&(n.info_tbl=!1))}))})),console.log(n),n}},2595:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(5893),i=n(1664),l=n(9008),r=n(9147),s=n(7294);function d(e){var t=e.props,n=(0,s.useState)(""),r=n[0],d=n[1],u=(0,s.useState)(""),h=u[0],x=u[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{children:(0,a.jsx)("title",{children:"Settings"})}),(0,a.jsx)("p",{children:t}),(0,a.jsx)("h1",{children:"Settings"}),(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{children:"Back to Home"})}),(0,a.jsx)("h3",{children:"Base ID"}),(0,a.jsx)("input",{type:"text",placeholder:"BaseID",id:"baseid",value:h,onChange:function(e){return x(e.target.value)}}),(0,a.jsx)("h3",{children:"API Key"}),(0,a.jsx)("input",{type:"text",placeholder:"API Key",id:"apikey",value:r,onChange:function(e){return d(e.target.value)}}),(0,a.jsx)("button",{onClick:o,children:"Update BaseId and Api Key"}),(0,a.jsx)("p",{children:"Something showing up right? Try making sure your database is set up correcly!"}),(0,a.jsx)("button",{onClick:c,children:"Test Database"}),(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Test"}),(0,a.jsx)("th",{children:"Result"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Overall"}),(0,a.jsx)("td",{id:"overall-result",children:" - "})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Correct Api Key"}),(0,a.jsx)("td",{id:"api-key-table-result",children:" - "})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Correct Base Id"}),(0,a.jsx)("td",{id:"baseid-result",children:" - "})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Transaction Table"}),(0,a.jsx)("td",{id:"trans-table-result",children:" - "})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Category Table"}),(0,a.jsx)("td",{id:"ctgry-table-result",children:" - "})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Information table Key"}),(0,a.jsx)("td",{id:"info-table-result",children:" - "})]})]})]}),(0,a.jsx)("hr",{}),(0,a.jsx)("h2",{children:"Database Settings"}),(0,a.jsx)("p",{children:"Need to make a clean, new database? Click Here!"}),(0,a.jsx)("button",{children:"New Database"})]})}function c(){var e=localStorage.getItem("baseid"),t=localStorage.getItem("apikey"),n={};null!==t&&null!==t&&(n=(0,r.H$)(e,t));var a="Passed",i="Failed";n.passed?document.getElementById("overall-result").innerText=a:document.getElementById("overall-result").innerText=i,n.baseid?document.getElementById("baseid-result").innerText=a:document.getElementById("baseid-result").innerText=i,n.apikey?document.getElementById("api-key-table-result").innerText=a:document.getElementById("api-key-table-result").innerText=i,n.trans_tbl?document.getElementById("trans-table-result").innerText=a:document.getElementById("trans-table-result").innerText=i,n.ctgy_tbl?document.getElementById("ctgry-table-result").innerText=a:document.getElementById("ctgry-table-result").innerText=i,n.info_tbl?document.getElementById("info-table-result").innerText=a:document.getElementById("info-table-result").innerText=i}function o(){console.log("trying with ".concat(apikey.value," and ").concat(baseid.value));var e=(0,r.H$)(baseid.value,apikey.value);if(!0===e.passed)return localStorage.setItem("apikey",apikey.value),localStorage.setItem("baseid",baseid.value),void c();alert("Incorrect Credentials",e)}},356:function(){},9065:function(){}},function(e){e.O(0,[86,774,888,179],(function(){return t=6944,e(e.s=t);var t}));var t=e.O();_N_E=t}]);