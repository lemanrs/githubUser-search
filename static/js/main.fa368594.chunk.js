(this.webpackJsonpgithub=this.webpackJsonpgithub||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},21:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=(a(20),a(2)),o=a(14);a(21);var i=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("div",null,r.a.createElement("input",{className:"search-box",type:"text",placeholder:"Please enter username...",onChange:t,onKeyPress:a}))},u=a(13),m=a.n(u);var h=function(e){var t=e.result;return r.a.createElement("div",{className:"result"},r.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:t.avatar_url,alt:"avatar"})),r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"text"}," Click to visit github profile")),r.a.createElement("h3",null,t.login))};var d=function(e){var t=e.results;return r.a.createElement("div",{className:"results"},t.map((function(e){return r.a.createElement(h,{key:e.id,result:e})})))};var v=function(){var e=Object(n.useState)({s:"",results:[]}),t=Object(o.a)(e,2),a=t[0],c=t[1],l="https://api.github.com/search/users?q=".concat(a.s,"&client_id=").concat("a133e9d45a19ef4fb6e9","&client_secret=").concat("6db4ed2932e8444141a2be5420343a7f498495ac");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"title"}," Github Database")),r.a.createElement("main",null,r.a.createElement(i,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(s.a)({},e,{s:t})}))},search:function(e){"Enter"===e.key&&m()(l).then((function(e){var t=e.data.items;console.log(t),c((function(e){return Object(s.a)({},e,{results:t})}))}))}}),r.a.createElement(d,{results:a.results})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.fa368594.chunk.js.map