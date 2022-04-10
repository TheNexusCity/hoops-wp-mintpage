!function(){var e,t={7576:function(e,t,n){"use strict";var r=n(7294),i=n(3935),a=n(914),o=n(5332),u=n(8087),p=n(1438),s=n(387),l=n(7616),y="0x82922DE951aFF292736E24BCFa7618974869aC7d",c=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"availableSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"goat",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isMintOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"mintForAddress",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"royaltyAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"mintIsOpen",type:"bool"}],name:"setOpenMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"setRevealIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setUnrevealBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uriSuffix",type:"string"}],name:"setUriSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenOwner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}];function d(e,t,n,r,i,a,o){try{var u=e[a](o),p=u.value}catch(e){return void n(e)}u.done?t(p):Promise.resolve(p).then(r,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){d(a,r,i,o,u,"next",e)}function u(e){d(a,r,i,o,u,"throw",e)}o(void 0)}))}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){var e=(0,a.Ge)(),t=e.activate,n=(e.deactivate,e.library,e.account,m((0,r.useState)(1),2)),i=n[0],o=n[1],d=m((0,r.useState)(1e4),2),b=d[0],v=d[1],w=new u._k({supportedChainIds:[1,5]}),g=function(){var e=f(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(w);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:return n=new p.Qg(window.ethereum).getSigner(),r=new s.CH(y,c,n),a=l.vz((.0824*i).toString(),"ether"),e.prev=11,e.next=14,r.mint(i,{value:a});case 14:e.sent,alert("Transaction successful."),e.next=22;break;case 18:e.prev=18,e.t1=e.catch(11),console.log("error",e.t1),-1!==e.t1.toString().search("insufficient funds")?alert("Insufficient funds."):alert("transaction failed");case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,null,[[0,5],[11,18]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.Qg(window.ethereum).getSigner(),n=new s.CH(y,c,t),e.next=4,n.availableSupply();case 4:r=e.sent,v(r.toNumber());case 6:case"end":return e.stop()}}),e)})))()}),[]),r.createElement(r.Fragment,null,r.createElement("div",{id:"mintsection"},r.createElement("div",{id:"countdiv"},b,"/10000 Minted"),r.createElement("div",{id:"countdiv"},"Mint your hoops now."),r.createElement("div",{id:"countdiv"},r.createElement("div",{id:"selectcount",onClick:function(){i>1&&o(i-1)}},"-"),r.createElement("div",{id:"tokencount"},i),r.createElement("div",{id:"selectcount",onClick:function(){i<25&&o(i+1)}},"+")),r.createElement("button",{id:"mintbtn",onClick:g},"Mint")))},w=function(){return r.createElement(a.Ht,{getLibrary:function(e){var t=new o.Q(e,"any");return t.pollingInterval=15e3,t}},r.createElement(v,null))},g=n(3379),T=n.n(g),h=n(7795),x=n.n(h),M=n(569),O=n.n(M),k=n(6636),I=n.n(k),E=n(9216),S=n.n(E),j=n(4589),A=n.n(j),P=n(1424),R={};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function U(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}R.styleTagTransform=A(),R.setAttributes=I(),R.insert=O().bind(null,"head"),R.domAPI=x(),R.insertStyleElement=S(),T()(P.Z,R),P.Z&&P.Z.locals&&P.Z.locals,n(8520),n(6124);var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,i,a,o=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(i);if(a){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function u(){return C(this,u),o.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return r.createElement("div",null,r.createElement(w,null))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.Component);i.render(r.createElement(Z,{},null),document.getElementById("react-target"))},1424:function(e,t,n){"use strict";var r=n(8081),i=n.n(r),a=n(3645),o=n.n(a)()(i());o.push([e.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n#mintsection {\n  min-height:300px;\n  width: 100%;\n  display: block;\n  padding: 3em;\n  margin:2em;\n  z-index: 1000;\n}\n\n#mintbtn {\n    width:200px;\n    height: 3.3vw;\n    padding: 0px !important;\n    margin: 0px 0 2vw !important;\n    border-radius: 1vw;\n    background: rgba(255,0,0,0.30000001192092896);\n    border: solid 0.3vw red;\n    color: rgb(100,100,100);\n    font-size: 1.5vw;\n    font-weight: bold;\n  }\n  #numberopt {\n    text-align: center;\n    font-size: 3vw !important;\n  }\n  #tokencount {\n    background: rgba(255,255,255,0.30000001192092896);\n    border: 0.15vw solid rgba(255,255,255,1);\n    border-radius: 0.5vw;\n    color: rgb(100,100,100);\n    text-align: center;\n    width: 3vw;\n    height: 3vw;\n    padding-left: 1.5vw;\n    padding-right: 1.5vw;\n    margin: 0 1vw;\n    font-size: 1.5vw !important;\n    display: inline !important;\n  }\n  #selectcount {\n    display: inline !important;\n    color: rgb(100,100,100);\n    font-size: 1.6vw;\n  }\n  #selectcount:hover {\n    cursor: pointer;\n  }\n  #countdiv {\n    width: 100%;\n    margin: auto;\n  }\n  ",""]),t.Z=o},6601:function(){}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,r.amdO={},e=[],r.O=function(t,n,i,a){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],a=e[l][2];for(var u=!0,p=0;p<n.length;p++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[p])}))?n.splice(p--,1):(u=!1,a<o&&(o=a));if(u){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,i,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],u=n[1],p=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(p)var l=p(r)}for(t&&t(n);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunkreact_in_webflow=self.webpackChunkreact_in_webflow||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[216],(function(){return r(7576)}));i=r.O(i)}();