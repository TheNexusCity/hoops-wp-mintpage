!function(){var t,e={7576:function(t,e,n){"use strict";var r=n(7294),i=n(3935),a=n(914),o=n(5332),u=n(8087),s=n(1438),p=n(387),l=n(7616),y="0x9c4c13903d82fE1A869D96C84D1ed4aF7D680381",c=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"availableSuply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"goat",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isMintOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"mintForAddress",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"royaltyAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"mintIsOpen",type:"bool"}],name:"setOpenMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"setRevealIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setUnrevealBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uriSuffix",type:"string"}],name:"setUriSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenOwner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}];function d(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){d(a,r,i,o,u,"next",t)}function u(t){d(a,r,i,o,u,"throw",t)}o(void 0)}))}}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,u=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(t){u=!0,i=t}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function(){var t=(0,a.Ge)(),e=t.activate,n=(t.deactivate,t.library,t.account),i=m((0,r.useState)(1),2),o=i[0],d=i[1],b=m((0,r.useState)(null),2),v=b[0],w=b[1],g=m((0,r.useState)(.0824),2),h=g[0],T=g[1],x=m((0,r.useState)(!0),2),M=x[0],k=x[1],O=m((0,r.useState)(0),2),E=O[0],I=O[1],S=new u._k({supportedChainIds:[1,4]}),A=function(){var t=f(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new s.Qg(window.ethereum).getSigner(),n=new p.CH(y,c,e),r=l.vz((o*h).toString(),"ether"),t.prev=3,t.next=6,n.mint(o,{value:r});case 6:t.sent,alert("Transaction successful."),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0),-1!==t.t0.toString().search("insufficient funds")?alert("Insufficient funds."):alert("transaction failed");case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(S);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){f(regeneratorRuntime.mark((function t(){var e,r,i,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new s.Qg(window.ethereum).getSigner(),r=new p.CH(y,c,e),t.next=4,r.totalSupply();case 4:return i=t.sent,t.next=7,r.getMintPrice();case 7:return a=t.sent,t.next=10,r.isMintOpen();case 10:o=t.sent,I(i.toNumber()),w(null==n?null:n),k(o),T(parseFloat(a/Math.pow(10,18)));case 15:case"end":return t.stop()}}),t)})))()}),[n]),r.createElement(r.Fragment,null,r.createElement("div",{id:"mintsection"},r.createElement("div",{id:"centerdiv"},M?r.createElement("div",null,null==v?r.createElement("button",{id:"connectwalletbtn",onClick:j},"connect"):r.createElement("div",null,r.createElement("div",{id:"countdiv"},r.createElement("span",{id:"tokennumber"},E," / 10000  "),"Minted"),r.createElement("div",{id:"countdiv"},"Mint your hoops now."),r.createElement("div",{id:"countdiv"},r.createElement("div",{id:"selectcount",onClick:function(){o>1&&d(o-1)}},"-"),r.createElement("div",{id:"tokencount"},o),r.createElement("div",{id:"selectcount",onClick:function(){o<25&&d(o+1)}},"+")),r.createElement("button",{id:"mintbtn",onClick:A},"Mint"))):r.createElement("div",{id:"countdiv"},"Mint is currently closed"))))},w=function(){return r.createElement(a.Ht,{getLibrary:function(t){var e=new o.Q(t,"any");return e.pollingInterval=15e3,e}},r.createElement(v,null))},g=n(3379),h=n.n(g),T=n(3380),x=n.n(T),M=n(569),k=n.n(M),O=n(3565),E=n.n(O),I=n(9216),S=n.n(I),A=n(4589),j=n.n(A),R=n(1424),P={};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},z(t,e)}function U(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}P.styleTagTransform=j(),P.setAttributes=E(),P.insert=k().bind(null,"head"),P.domAPI=x(),P.insertStyleElement=S(),h()(R.Z,P),R.Z&&R.Z.locals&&R.Z.locals,n(8520),n(6124);var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,n,i,a,o=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(i);if(a){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(){return C(this,u),o.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){return r.createElement("div",null,r.createElement(w,null))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(r.Component);i.render(r.createElement(Z,{},null),document.getElementById("react-target"))},1424:function(t,e,n){"use strict";var r=n(8081),i=n.n(r),a=n(3645),o=n.n(a)()(i());o.push([t.id,'@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n#mintsection {\r\n  min-height:300px;\r\n  width: 100%;\r\n  display: block;\r\n  /* padding: 3em; */\r\n  /* margin:2em; */\r\n  padding-top: 3em;\r\n  z-index: 1000;\r\n}\r\n#centerdiv {\r\n  margin: auto;\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n#mintbtn {\r\n    width: 15vw;\r\n    height: 3.8vw;\r\n    padding: 0px !important;\r\n    margin: 10px 0 2vw !important;\r\n    border-radius: 0.5vw;\r\n    background: #c39a69;\r\n    color: white;\r\n    font-size: 2.1vw;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    font-family: "montserrat-black-new", Sans-serif;\r\n    cursor: pointer;\r\n  }\r\n#connectwalletbtn {\r\n    width: 15vw;\r\n    height: 3.8vw;\r\n    padding: 0px !important;\r\n    margin: 0px 0 2vw !important;\r\n    border-radius: 0.5vw;\r\n    background: #c39a69;\r\n    color: white;\r\n    font-size: 2.1vw;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    font-family: "montserrat-black-new", Sans-serif;\r\n    cursor: pointer;\r\n  }\r\n  #numberopt {\r\n    text-align: center;\r\n    font-size: 3vw !important;\r\n    cursor: pointer;\r\n  }\r\n  #tokencount {\r\n    background: rgba(255,255,255,0.30000001192092896);\r\n    border: 0.15vw solid rgba(255,255,255,1);\r\n    border-radius: 0.5vw;\r\n    color: rgb(100,100,100);\r\n    text-align: center;\r\n    width: 3vw;\r\n    height: 3vw;\r\n    padding-left: 1.5vw;\r\n    padding-right: 1.5vw;\r\n    margin: 0 1vw;\r\n    font-size: 2vw !important;\r\n    display: inline !important;\r\n    cursor: pointer;\r\n  }\r\n  #selectcount {\r\n    display: inline !important;\r\n    color: rgb(100,100,100);\r\n    font-size: 2.1vw;\r\n    cursor: pointer;\r\n  }\r\n  #selectcount:hover {\r\n    cursor: pointer;\r\n  }\r\n  #countdiv {\r\n    width: 100%;\r\n    padding: 5px;\r\n    margin: auto;\r\n    font-size: 2.4vw;\r\n    color: #C39A69;\r\n    font-weight: 900;\r\n    cursor: pointer;\r\n  }\r\n  #tokennumber {\r\n    color: #a06114;\r\n    font-size: 2.4vw !important;\r\n    padding: 0px;\r\n    cursor: pointer;\r\n  }\r\n  ',""]),e.Z=o},6601:function(){}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,r.amdO={},t=[],r.O=function(e,n,i,a){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],a=t[l][2];for(var u=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(u=!1,a<o&&(o=a));if(u){t.splice(l--,1);var p=i();void 0!==p&&(e=p)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,i,a]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,o=n[0],u=n[1],s=n[2],p=0;if(o.some((function(e){return 0!==t[e]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(s)var l=s(r)}for(e&&e(n);p<o.length;p++)a=o[p],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},n=self.webpackChunkreact_in_webflow=self.webpackChunkreact_in_webflow||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var i=r.O(void 0,[216],(function(){return r(7576)}));i=r.O(i)}();