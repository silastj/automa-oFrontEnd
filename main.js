!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){class o{constructor(e){this.rodas=e}acelerar(){console.log("Acelerou")}}new class extends o{acelerar(){super.acelerar(),console.log("Acelerou rapido")}empinar(){console.log("Moto empinou com "+this.rodas+"rodas")}}(2),new o(4);const n=new Countdown("24 December 2020 23:59:59 GMT-0300");console.log(n._futureDate.getDay()),console.log(n._timeStampDiff),console.log(n.days),console.log(n.total),setInterval(()=>{const e=document.querySelector("#dados p:first-child"),t=document.querySelector("#dados p:nth-child(2)"),o=document.querySelector("#dados p:nth-child(3)"),r=document.querySelector("#dados p:last-child");e.innerText=n.total.days,t.innerText=n.total.hours,o.innerText=n.total.minutes,r.innerText=n.total.seconds},1e3);alert("oi")}]);