!function(){var t,n={7576:function(t,n,e){"use strict";var r=e(7294),i=e(3935),a=e(914),o=e(5332),u=e(8087),s=e(1438),p=e(387),l=e(7616),y="0xcfd2771ce226126adcb2e3e4af66fa3ae34281d5",c=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"mintForAddress",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"resetStickers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"anyoneCanCustomize",type:"bool"}],name:"setAnyoneCanCustomize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"mintIsOpen",type:"bool"}],name:"setOpenMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"setRevealIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"stickersEnabled",type:"bool"}],name:"setStickersEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"setStickerUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setUnrevealBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uriSuffix",type:"string"}],name:"setUriSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"availableSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"baseTokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getStickerUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"goat",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"hasStickers",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isMintOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenOwner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];function d(t,n,e,r,i,a,o){try{var u=t[a](o),s=u.value}catch(t){return void e(t)}u.done?n(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var a=t.apply(n,e);function o(t){d(a,r,i,o,u,"next",t)}function u(t){d(a,r,i,o,u,"throw",t)}o(void 0)}))}}function m(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,a=[],o=!0,u=!1;try{for(e=e.call(t);!(o=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(t){u=!0,i=t}finally{try{o||null==e.return||e.return()}finally{if(u)throw i}}return a}}(t,n)||function(t,n){if(t){if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var v=function(){var t=(0,a.Ge)(),n=t.activate,e=(t.deactivate,t.library,t.account),i=m((0,r.useState)(1),2),o=i[0],d=i[1],b=m((0,r.useState)(null),2),v=b[0],w=b[1],g=m((0,r.useState)(.0824),2),h=g[0],T=g[1],k=m((0,r.useState)(!0),2),x=k[0],M=k[1],O=m((0,r.useState)(0),2),I=O[0],S=O[1],E=new u._k({supportedChainIds:[1]}),R=function(){var t=f(regeneratorRuntime.mark((function t(){var n,e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new s.Qg(window.ethereum).getSigner(),e=new p.CH(y,c,n),r=l.vz((o*h).toString(),"ether"),t.prev=3,t.next=6,e.mint(o,{value:r});case 6:t.sent,alert("Transaction successful."),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0),-1!==t.t0.toString().search("insufficient funds")?alert("Insufficient funds."):alert("transaction failed");case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(E);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){f(regeneratorRuntime.mark((function t(){var n,r,i,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new s.Qg(window.ethereum).getSigner(),r=new p.CH(y,c,n),t.next=4,r.getMintPrice();case 4:return i=t.sent,t.next=7,r.isMintOpen();case 7:if(!(a=t.sent)){t.next=13;break}return t.next=11,r.totalSupply();case 11:o=t.sent,S(o.toNumber());case 13:w(null==e?null:e),M(a),T(parseFloat(i/Math.pow(10,18)));case 16:case"end":return t.stop()}}),t)})))()}),[e]),r.createElement(r.Fragment,null,r.createElement("div",{id:"mintsection"},r.createElement("div",{id:"centerdiv"},x?r.createElement("div",null,null==v?r.createElement("button",{id:"connectwalletbtn",onClick:j},"connect"):r.createElement("div",null,r.createElement("div",{id:"countdiv"},I&&r.createElement("span",{id:"tokennumber"},I," / 10000 Minted ")),r.createElement("div",{id:"countdiv"},"Mint your hoops now."),r.createElement("div",{id:"countdiv"},r.createElement("div",{id:"selectcount",onClick:function(){o>1&&d(o-1)}},"-"),r.createElement("div",{id:"tokencount"},o),r.createElement("div",{id:"selectcount",onClick:function(){o<25&&d(o+1)}},"+")),r.createElement("button",{id:"mintbtn",onClick:R},"Mint"))):r.createElement("div",{id:"countdiv"},"Mint is currently closed"))))},w=function(){return r.createElement(a.Ht,{getLibrary:function(t){var n=new o.Q(t,"any");return n.pollingInterval=15e3,n}},r.createElement(v,null))},g=e(3379),h=e.n(g),T=e(7795),k=e.n(T),x=e(569),M=e.n(x),O=e(6636),I=e.n(O),S=e(9216),E=e.n(S),R=e(4589),j=e.n(R),A=e(1424),C={};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function _(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function U(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,n){return z=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},z(t,n)}function F(t,n){if(n&&("object"===P(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}C.styleTagTransform=j(),C.setAttributes=I(),C.insert=M().bind(null,"head"),C.domAPI=k(),C.insertStyleElement=E(),h()(A.Z,C),A.Z&&A.Z.locals&&A.Z.locals,e(8520),e(6124);var Z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&z(t,n)}(u,t);var n,e,i,a,o=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=B(i);if(a){var e=B(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return F(this,t)});function u(){return _(this,u),o.apply(this,arguments)}return n=u,(e=[{key:"render",value:function(){return r.createElement("div",null,r.createElement(w,null))}}])&&U(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),u}(r.Component);i.render(r.createElement(Z,{},null),document.getElementById("react-target"))},1424:function(t,n,e){"use strict";var r=e(8081),i=e.n(r),a=e(3645),o=e.n(a),u=e(1667),s=e.n(u),p=new URL(e(324),e.b),l=o()(i()),y=s()(p);l.push([t.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mintsection {\n  min-height: 400px;\n  width: 100%;\n  display: block;\n  background-image: url("+y+');\n  padding-top: 3em;\n  background-size: 100% 100%;\n  z-index: 1000;\n}\n\n#centerdiv {\n  margin: auto;\n  width: 50vw;\n  text-align: center;\n}\n\n#mintbtn {\n  width: 15vw;\n  height: 3.8vw;\n  padding: 0px !important;\n  margin: 10px 0 2vw !important;\n  border-radius: 0.5vw;\n  background: #c39a69;\n  color: white;\n  font-size: 2.1vw;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "montserrat-black-new", Sans-serif;\n  cursor: pointer;\n  transition: transform .6s;\n}\n\n#connectwalletbtn {\n  width: 15vw;\n  height: 3.8vw;\n  padding: 0px !important;\n  margin: 0px 0 2vw !important;\n  border-radius: 0.5vw;\n  background: #c39a69;\n  color: white;\n  font-size: 2.1vw;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-family: "montserrat-black-new", Sans-serif;\n  cursor: pointer;\n  transition: transform .6s;\n}\n\n#mintbtn:hover, #connectwalletbtn:hover {\n  transform: scale(1.2)\n}\n\n#numberopt {\n  text-align: center;\n  font-size: 3vw !important;\n  cursor: pointer;\n}\n\n#tokencount {\n  background: rgba(255, 255, 255, 0.30000001192092896);\n  border: 0.15vw solid rgba(255, 255, 255, 1);\n  border-radius: 0.5vw;\n  color: rgb(100, 100, 100);\n  text-align: center;\n  width: 3vw;\n  height: 3vw;\n  padding-left: 1.5vw;\n  padding-right: 1.5vw;\n  margin: 0 1vw;\n  font-size: 2vw !important;\n  display: inline !important;\n  cursor: pointer;\n}\n\n#selectcount {\n  display: inline !important;\n  color: rgb(100, 100, 100);\n  font-size: 2.1vw;\n  cursor: pointer;\n}\n\n#selectcount:hover {\n  cursor: pointer;\n}\n\n#countdiv {\n  width: 100%;\n  padding: 5px;\n  margin: auto;\n  font-size: 2.4vw;\n  color: #C39A69;\n  font-weight: 900;\n  cursor: pointer;\n}\n\n#tokennumber {\n  color: #a06114;\n  font-size: 2.4vw !important;\n  padding: 0px;\n  cursor: pointer;\n}',""]),n.Z=l},324:function(t,n,e){"use strict";t.exports=e.p+"f2154c0a09e459097b68.webp"},6601:function(){}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var a=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,r.amdO={},t=[],r.O=function(n,e,i,a){if(!e){var o=1/0;for(l=0;l<t.length;l++){e=t[l][0],i=t[l][1],a=t[l][2];for(var u=!0,s=0;s<e.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](e[s])}))?e.splice(s--,1):(u=!1,a<o&&(o=a));if(u){t.splice(l--,1);var p=i();void 0!==p&&(n=p)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[e,i,a]},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.p="/",function(){r.b=document.baseURI||self.location.href;var t={179:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,a,o=e[0],u=e[1],s=e[2],p=0;if(o.some((function(n){return 0!==t[n]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(s)var l=s(r)}for(n&&n(e);p<o.length;p++)a=o[p],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},e=self.webpackChunkreact_in_webflow=self.webpackChunkreact_in_webflow||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var i=r.O(void 0,[216],(function(){return r(7576)}));i=r.O(i)}();