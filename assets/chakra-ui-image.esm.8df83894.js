import{f as I,o as w,r as o,g as O,h as _}from"./index.074e3330.js";function f(){return f=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},f.apply(this,arguments)}function F(a,e){if(a==null)return{};var r={},t=Object.keys(a),n,l;for(l=0;l<t.length;l++)n=t[l],!(e.indexOf(n)>=0)&&(r[n]=a[n]);return r}function y(a){var e=a.loading,r=a.src,t=a.srcSet,n=a.onLoad,l=a.onError,d=a.crossOrigin,h=a.sizes,s=a.ignoreFallback,k=o.exports.useState("pending"),m=k[0],u=k[1];o.exports.useEffect(function(){u(r?"loading":"pending")},[r]);var c=o.exports.useRef(),b=o.exports.useCallback(function(){if(!!r){g();var i=new Image;i.src=r,d&&(i.crossOrigin=d),t&&(i.srcset=t),h&&(i.sizes=h),e&&(i.loading=e),i.onload=function(v){g(),u("loaded"),n==null||n(v)},i.onerror=function(v){g(),u("failed"),l==null||l(v)},c.current=i}},[r,d,t,h,n,l,e]),g=function(){c.current&&(c.current.onload=null,c.current.onerror=null,c.current=null)};return _(function(){if(!s)return m==="loading"&&b(),function(){g()}},[m,b,s]),s?"loaded":m}var L=function(e,r){return e!=="loaded"&&r==="beforeLoadOrError"||e==="failed"&&r==="onError"},j=["htmlWidth","htmlHeight","alt"],R=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy"],x=o.exports.forwardRef(function(a,e){var r=a.htmlWidth,t=a.htmlHeight,n=a.alt,l=F(a,j);return o.exports.createElement("img",f({width:r,height:t,ref:e,alt:n},l))}),z=I(function(a,e){var r=a.fallbackSrc,t=a.fallback,n=a.src,l=a.srcSet,d=a.align,h=a.fit,s=a.loading,k=a.ignoreFallback,m=a.crossOrigin,u=a.fallbackStrategy,c=u===void 0?"beforeLoadOrError":u,b=F(a,R),g=r!==void 0||t!==void 0,i=s!=null||k||!g,v=y(f({},a,{ignoreFallback:i})),E=L(v,c),S=f({ref:e,objectFit:h,objectPosition:d},i?b:w(b,["onError","onLoad"]));return E?t||o.exports.createElement(O.img,f({as:x,className:"chakra-image__placeholder",src:r},S)):o.exports.createElement(O.img,f({as:x,src:n,srcSet:l,crossOrigin:m,loading:s,className:"chakra-image"},S))});export{z as I};