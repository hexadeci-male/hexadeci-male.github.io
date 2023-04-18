import{j as e,c as j,f as U,r as f,a as l,b as X,S as B,m as c,u as F,d as I,e as A,P as K,l as O,F as $,B as M,C as L,T as W,H}from"./index.0c18ebab.js";import{m as N,g as J,u as Z}from"./chunk-KSQA4OTT.5ad757b3.js";import{I as q}from"./chunk-E77276RR.c77f88c4.js";var V=t=>e(j.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});V.displayName="StackItem";var T="& > *:not(style) ~ *:not(style)";function ee(t){const{spacing:r,direction:n}=t,o={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:n,[T]:N(n,i=>o[i])}}function te(t){const{spacing:r,direction:n}=t,o={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":N(n,i=>o[i])}}var C=U((t,r)=>{const{isInline:n,direction:o,align:i,justify:h,spacing:m="0.5rem",wrap:v,children:g,divider:d,className:p,shouldWrapChildren:s,...u}=t,a=n?"row":o!=null?o:"column",k=f.exports.useMemo(()=>ee({direction:a,spacing:m}),[a,m]),w=f.exports.useMemo(()=>te({spacing:m,direction:a}),[m,a]),x=!!d,E=!s&&!x,S=f.exports.useMemo(()=>{const y=J(g);return E?y:y.map((b,R)=>{const _=typeof b.key!="undefined"?b.key:R,z=R+1===y.length,D=s?e(V,{children:b},_):b;if(!x)return D;const G=f.exports.cloneElement(d,{__css:w}),Q=z?null:G;return l(f.exports.Fragment,{children:[D,Q]},_)})},[d,w,x,E,s,g]),P=X("chakra-stack",p);return e(j.div,{ref:r,display:"flex",alignItems:i,justifyContent:h,flexDirection:k.flexDirection,flexWrap:v,className:P,__css:x?{}:{[T]:k[T]},...u,children:S})});C.displayName="Stack";function re(t,r){try{return t.addEventListener("change",r),()=>t.removeEventListener("change",r)}catch{return t.addListener(r),()=>t.removeListener(r)}}function ne(t,r){return r!==void 0?r:typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}function oe(t,r){const[n,o]=f.exports.useState(ne(t,r)),i=f.exports.useRef();return f.exports.useEffect(()=>{if("matchMedia"in window)return i.current=window.matchMedia(t),o(i.current.matches),re(i.current,h=>o(h.matches))},[t]),n}function Y(t,r,n){f.exports.useEffect(()=>(window.addEventListener(t,r,n),()=>window.removeEventListener(t,r,n)),[])}function ie(t){return oe("(prefers-reduced-motion: reduce)",t)}const ae=t=>t<.5?2*t*t:-1+(4-2*t)*t,se=({axis:t,target:r,parent:n,alignment:o,offset:i,isList:h})=>{if(!r||!n&&typeof document=="undefined")return 0;const m=!!n,g=(n||document.body).getBoundingClientRect(),d=r.getBoundingClientRect(),p=s=>d[s]-g[s];if(t==="y"){const s=p("top");if(s===0)return 0;if(o==="start"){const a=s-i;return a<=d.height*(h?0:1)||!h?a:0}const u=m?g.height:window.innerHeight;if(o==="end"){const a=s+i-u+d.height;return a>=-d.height*(h?0:1)||!h?a:0}return o==="center"?s-u/2+d.height/2:0}if(t==="x"){const s=p("left");if(s===0)return 0;if(o==="start"){const a=s-i;return a<=d.width||!h?a:0}const u=m?g.width:window.innerWidth;if(o==="end"){const a=s+i-u+d.width;return a>=-d.width||!h?a:0}return o==="center"?s-u/2+d.width/2:0}return 0},ce=({axis:t,parent:r})=>{if(!r&&typeof document=="undefined")return 0;const n=t==="y"?"scrollTop":"scrollLeft";if(r)return r[n];const{body:o,documentElement:i}=document;return o[n]+i[n]},de=({axis:t,parent:r,distance:n})=>{if(!r&&typeof document=="undefined")return;const o=t==="y"?"scrollTop":"scrollLeft";if(r)r[o]=n;else{const{body:i,documentElement:h}=document;i[o]=n,h[o]=n}};function le({duration:t=1250,axis:r="y",onScrollFinish:n,easing:o=ae,offset:i=0,cancelable:h=!0,isList:m=!1}={}){const v=f.exports.useRef(0),g=f.exports.useRef(0),d=f.exports.useRef(!1),p=f.exports.useRef(null),s=f.exports.useRef(null),u=ie(),a=()=>{v.current&&cancelAnimationFrame(v.current)},k=f.exports.useCallback(({alignment:x="start"}={})=>{var E;d.current=!1,v.current&&a();const S=(E=ce({parent:p.current,axis:r}))!=null?E:0,P=se({parent:p.current,target:s.current,axis:r,alignment:x,offset:i,isList:m})-(p.current?0:S);function y(){g.current===0&&(g.current=performance.now());const R=performance.now()-g.current,_=u||t===0?1:R/t,z=S+P*o(_);de({parent:p.current,axis:r,distance:z}),!d.current&&_<1?v.current=requestAnimationFrame(y):(typeof n=="function"&&n(),g.current=0,v.current=0,a())}y()},[p.current]),w=()=>{h&&(d.current=!0)};return Y("wheel",w,{passive:!0}),Y("touchmove",w,{passive:!0}),f.exports.useEffect(()=>a,[]),{scrollableRef:p,targetRef:s,scrollIntoView:k,cancel:a}}var fe="/assets/big_button.3942c1a8.svg";function he({...t}){return e(B,{variant:"themed",...t,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 1024 512",children:l("g",{fill:"none",children:[l("g",{stroke:"#000",strokeWidth:"3",children:[e("path",{vectorEffect:"non-scaling-stroke",d:"M85.979 170.858s41.3-14.825 64.597 1.06 22.978 72.218 19.061 120.722-69.554 138.277-69.554 138.277",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(748.78 -13) scale(1.03368)"}),e("path",{vectorEffect:"non-scaling-stroke",d:"M141.8 264.37l9.907-29.162M141.8 264.37l44.447 22.906",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(748.78 -13) scale(1.03368) rotate(-41.768 340.924 403.482)"})]}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M44.302 136.512c0 60.116 8.667 126.471-1.266 186.067M40.504 142.841c35.577-4.447 59.705 5.987 54.428 45.567-1.98 14.855-6.378 29.919-17.72 40.505-4.709 4.394-10.695 7.246-16.456 10.126-3.94 1.97-17.062 3.797-12.657 3.797 9.578 0 19.355-4.033 29.112-2.531 8.426 1.296 17.534 7.24 22.784 13.923 24.793 31.555-29.569 64.668-54.428 70.883",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(171.298 -69.11)"})}),e("path",{vectorEffect:"non-scaling-stroke",stroke:"#3f5787",strokeWidth:"3",d:"M299.14 152.208c1.985 17.868-2.388 73.016 22.784 77.211 25.89 4.315 35.723-18.518 40.504-39.239 1.596-6.914 2.532-14.435 2.532-21.517v-13.924c0 25.977 1.117 45.27 12.657 68.351",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02)"}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M240.494 160.562c0 45.55 10.127 89.289 10.127 134.17M199.99 202.332c21.065 0 43.846.344 64.554-3.798",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(171.298 -69.11)"})}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M348.084 152.382c-43.84-17.536-25.677 99.298-25.677 120.832M289.995 200.482c19.916 2.489 38.584 1.483 57.396-6.042",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(202.204 -57.096)"})}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M378.462 208.66c3.76 22.56 3.798 44.288 3.798 67.086M375.93 179.548v7.595",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(198.406 -52.033)"})}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M415.17 273.214c0-25.561-6.453-48.717-11.392-73.414M405.043 222.584c10.572-7.929 20.358-17.278 31.644-24.05",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(208.532 -57.096)"})}),e("path",{vectorEffect:"non-scaling-stroke",stroke:"#3f5787",strokeWidth:"3",d:"M705.563 126.97c-5.836 0-18.453-3.053-24.05 0-7.936 4.329-6.41 7.485-7.594 15.189-5.76 37.435 21.448 23.048 43.035 39.238 2.865 2.149 6.775 4.11 7.595 7.595 8.453 35.923-40.538 39.485-60.757 35.441",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02)"}),e("g",{stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M524.025 171.954c10.438 41.752 14.191 84.345 27.846 125.31M506.304 213.724c23.897-2.39 52.466-3.24 72.148-18.987",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(233.745 -69.121)"})}),e("g",{stroke:"#3f5787",strokeWidth:"2",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M727.577 221.67c-10.919-1.82-19.37 7.923-6.906 15.193 10.93 6.377 11.492-7.844 5.525-13.812M764.179 223.051c-9.476 1.896-19.358 10.433-6.216 18.647 15.466 9.666 10.23-29.72 5.525-17.956M796.637 223.742c-12.759 2.552-7.935 24.1 2.072 22.1 12.32-2.465 9.87-19.297-.69-21.41",transform:"matrix(1.15633 0 0 1.15633 -80.04 -40.02) translate(-623.93 10.028)"})})]})})})}function ge({...t}){return e(B,{variant:"themed",...t,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"doodle_greeter",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 512 512",children:l("g",{id:"doodle_greeter-u-doodle_greeter",transform:"matrix(1.75237 0 0 1.75237 -6.64 -16.636)",children:[e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-body",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M41.26 142.401c1.645-5.482 2.124-14.243 8.058-16.786 11.084-4.75 92.627-5.687 104.073.672 13.542 7.523 10.772 105.38 2.686 115.488-8.545 10.682-33.942 6.509-46.33 8.057-11.213 1.402-73.745 12.535-79.9 2.686-16.606-26.568 27.382-81.333 9.4-112.802"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-leg_r",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M65.433 255.875c-8.504 3.645-18.809 6.06-23.5 15.443-2.787 5.573 3.487 14.295.67 18.8-2.287 3.66-18.906 3.534-23.5 5.372"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-leg_l",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M111.09 249.832c34.252 9.786 19.596 26.982 26.187 33.572 2.5 2.5 19.53 1.466 23.5.672"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-arm_r",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M42.268 178.718c-3.393 0-10.805-3.225-13.429-2.014-16.03 7.398-15.34 31.044-18.129 44.986"}),e(c.path,{id:"doodle_greeter-u-arm_l",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M162.442 185.013c30.356-6.295 29.946-19.493 29.946-37.898",animate:F()?{}:{d:["M162.442 185.013c30.356-6.295 29.946-19.493 29.946-37.898","M162.442 185.013c27.427-3.148 31.37 0 51.386-6.295"]},transition:{repeat:1/0,repeatType:"mirror"}}),l("g",{id:"doodle_greeter-u-face",transform:"translate(-35.888 49.071)",children:[e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-eye_r",fill:"#0c0c0c",d:"M1.666 5.946a4.28 4.28 0 118.56 0 4.28 4.28 0 01-8.56 0z",transform:"translate(113.192 117.154)"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-eye_l",fill:"#0c0c0c",d:"M1.666 5.946a4.28 4.28 0 118.56 0 4.28 4.28 0 01-8.56 0z",transform:"translate(146.957 117.154)"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-u-mouth",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M130.913 148.486c9.59 0 13.16-3.558 19.76-1.358 1.362.454.95 6.311.828 7.04-2.653 15.918-24.803 26.556-36.44 12.008-6.105-7.63-4.464-22.07-2.333-20.29s8.595 2.6 18.185 2.6z"})]}),l("g",{id:"doodle_greeter-u-hair",fill:"none",stroke:"#3f5787",strokeWidth:"3",transform:"translate(-35.888 49.071)",children:[e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path1",d:"M89.5 75.522c-4.199-6.065-9.444-11.346-13.184-17.578"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path2",d:"M102.683 75.522c-3.34-5.568-6.242-9.623-7.324-16.113"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path3",d:"M112.937 74.79c1.982-4.627 3.99-9.243 5.859-13.916"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path4",d:"M128.317 74.79c.911-8.198.176-15.996-.732-24.17"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path5",d:"M137.106 74.057c-1.294-6.471-2.17-12.398-5.127-18.31"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path6",d:"M143.698 74.057c3.442-6.886 4.508-11.055 11.718-15.38"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path7",d:"M156.149 74.79c4.056-5.41 7.96-10.793 10.986-16.846"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path8",d:"M171.53 75.522c.814-5.702-.325-13.412 5.858-14.648"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path9",d:"M181.05 76.254c4.439-4.439 5.86-7.67 5.86-13.916"})]}),l("g",{id:"doodle_greeter-u-text",fill:"none",stroke:"#3f5787",strokeWidth:"3",transform:"scale(1.48913) rotate(9.898 208.934 -194.186)",children:[e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path10",d:"M114.401 30.113v19.042"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path11",d:"M114.16 40.698c3.865-.773 7.64 0 11.51 0"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path12",d:"M125.67 31.557c.367 5.86-.135 11.85 1.017 17.605"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path13",d:"M137.52 38.667c.342 3.074.748 6.108 1.355 9.14"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path14",d:"M137.182 32.911c-7.154 1.022-.736 4.756 0 .339l.338-2.032"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path15",d:"M165.96 33.25c-.934 7.466-1.355 14.468-1.355 22.006"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path16",d:"M157.157 42.39c4.448 0 8.8.678 13.204.678"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path17",d:"M175.44 36.974c0 6.142.676 12.175.676 18.282"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path18",d:"M175.1 47.808c3.547-8.867 9.142 1.921 9.142 6.432"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path19",d:"M188.643 49.839c8.026-1.147 5.909-8.617 2.37-5.078-2.59 2.59 2.86 14.068 7.448 9.48"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path20",d:"M203.878 54.917c0-4.117.687-7.392 0-11.51"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path21",d:"M203.54 48.485c2.094-1.257 4.48-1.793 6.77-2.709"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path22",d:"M214.035 50.516c5.245.75 11.302-5.865 5.078-7.11-3.39-.678-5.946 16.598 3.386 12.866"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path23",d:"M234.687 39.682c-.81 4.048.339 8.11.339 12.188"}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path24",d:"M235.026 54.917c-3.57.714-.06 4.026.677.339"})]}),e("path",{vectorEffect:"non-scaling-stroke",id:"doodle_greeter-s-path25",fill:"none",stroke:"#3f5787",strokeWidth:"3",d:"M167.036 124.436c12.568-12.568 16.182-18.955 18.694-36.538"})]})})})}function pe({...t}){return e(B,{variant:"themed",...t,children:l("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 300 300",children:[e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.6",d:"M222.18 222.919c-49.862 5.248-83.97 5.324-133.617 2.014-10.62-.708-29.202 3.027-37.6-5.372-16.371-16.37-.332-37.835 6.714-55.058 8.936-21.844 58.84-121.587 81.244-129.588 10.133-3.619 27.41 23.381 35.587 31.558 31.497 31.497 49.364 68.536 61.1 110.788 6.13 22.068 21.284 45.658-13.428 45.658M130.537 226.71c.793 8.72 7.243 29.78-5.045 29.78M159.43 226.71c0 6.284 5.36 31.866-5.066 29.78",transform:"translate(80.669 80.618) scale(.83828)"}),e("g",{fill:"none",stroke:"#3f5787",strokeWidth:"0.6",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M66.659 144.378c-10.72 2.68-22.237 5.955-32.483 10.054M33.898 154.495c-1.706-1.086-3.158-1.993-5.019-2.738M33.594 154.495c-1.57 1.346-3.402 2.284-5.17 3.345M33.594 154.343c-.26 1.824-.399 3.665-.76 5.474",transform:"translate(80.669 80.618) scale(.83828)"})}),e("g",{fill:"none",stroke:"#3f5787",strokeWidth:"0.6",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M220.837 140.331c9.29 5.807 18.687 13.384 28.872 17.458M249.031 157.939c1.974-.539 3.832-1.013 5.833-1.346M249.255 157.939c2.194.658 4.436 1.614 5.833 3.477M248.919 158.05c.37 2.222.278 4.315 1.458 6.283",transform:"translate(80.669 80.618) scale(.83828)"})}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#0c0c0c",d:"M-23.132 0c0-12.775 10.357-23.132 23.132-23.132S23.132-12.775 23.132 0 12.775 23.132 0 23.132-23.132 12.775-23.132 0z",transform:"translate(80.669 80.618) scale(.83828) translate(-.655 -15.098) scale(1.06703) translate(-3.643 -1.682) matrix(.66622 0 0 .66622 145.228 110.191)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"#0e0e0e",d:"M-5.638 0A5.638 5.638 0 115.638 0 5.638 5.638 0 01-5.638 0z",transform:"translate(80.669 80.618) scale(.83828) translate(-.655 -15.098) scale(1.06703) translate(-3.643 -1.682) matrix(.18083 0 0 .18083 145.228 110.191)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#0c0c0c",d:"M-23.132 0c0-12.775 10.357-23.132 23.132-23.132S23.132-12.775 23.132 0 12.775 23.132 0 23.132-23.132 12.775-23.132 0z",transform:"translate(80.669 80.618) scale(.83828) translate(-.655 -15.098) scale(1.06703) translate(-40.063 -.665) matrix(.6648 0 0 .6648 147.958 109.207)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"#0e0e0e",d:"M-5.638 0A5.638 5.638 0 115.638 0 5.638 5.638 0 01-5.638 0z",transform:"translate(80.669 80.618) scale(.83828) translate(-.655 -15.098) scale(1.06703) translate(-40.063 -.665) matrix(.18044 0 0 .18044 147.958 109.207)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.6",d:"M124.829 185.528c23.361 0 55.084 22.555 54.615 6.945s-26.233-44.925-50.987-45.706-56.313 32.831-56.665 47.6 29.675-8.84 53.037-8.84zM104.926 154.79c-1.39 5.327 44.223 4.69 44.315-1.003M104.01 189.782c-5.404-12.938 49.816-12.692 43.372.096",transform:"translate(80.669 80.618) scale(.83828) translate(-.655 -15.098) scale(1.06703)"}),l("g",{fill:"none",stroke:"#3f5787",children:[e("path",{vectorEffect:"non-scaling-stroke",d:"M66.406 28.872c-9.375-5.357-23.864 1.749-20.144 14.772 2.98 10.43 41.004 23.362 15.443 38.272-5.052 2.947-9.86 2.686-15.443 2.686M98.635 51.701C71.83 62.423 85.2 95.539 111.392 80.573M127.507 78.559c-2.804-9.812-4.927-19.366-8.729-28.872M120.12 58.415c4.884-4.883 10.914-10.743 18.13-10.743M146.979 59.758c3.187.456 6.15 1.105 9.4.672 1.83-.244 3.62-.76 5.371-1.343 16.705-5.569-2.92-13.194-7.386-8.729-7.845 7.845 3.42 24.147 13.43 20.143M195.48 66.128c-23.172 3.132-23.916-19.076-10.23-21.813 12.565-2.513 8.334 21.845 13.152 24.736M206.737 64.458c-1.913-6.695-2.015-12.575-2.015-19.471",transform:"rotate(-13.671 248.432 -18.992) scale(.57619)"}),e("path",{vectorEffect:"non-scaling-stroke",d:"M203.38 52.372c5.938-5.938 15.745-8.17 18.8 2.015.671 2.238.362 8.366 2.014 6.714 3.978-3.977-2.072-20.996 12.758-12.757 2.318 1.288 4.456 3.527 5.371 6.043.58 1.596-.372 5.22-.671 6.714M251.723 41.63c.916 6.406 2.686 13.01 2.686 19.471M249.709 28.872c-8.398 1.68-2.68 9.368-1.343 2.686M266.495 59.758c-1.893-8.52-2.33-17.021-4.029-25.514M261.795 42.972c12.438-20.73 18.271.692 22.829 12.086M300.067 34.244c-13.26 17.68-24.857-16.692-7.386-15.444 18.808 1.344 18.008 32.223 4.7 39.615",transform:"rotate(-13.671 248.432 -18.992) scale(.57619)"}),e("path",{vectorEffect:"non-scaling-stroke",d:"M2.619 40.958c0 18.06 2.685 35.676 2.685 53.715M-28.268 73.187c17.137-3.116 34.227-.5 51.03-4.7M-20.882 57.744c14.848 8.909 31.578 17.474 44.987 28.2M18.062 51.701c-7.385 14.77-18.053 24.916-28.2 37.6",transform:"rotate(-13.671 248.432 -18.992) scale(.57619) translate(7.386 -8.057)"}),e("g",{children:e("path",{vectorEffect:"non-scaling-stroke",d:"M2.619 40.958c0 18.06 2.685 35.676 2.685 53.715M-28.268 73.187c17.137-3.116 34.227-.5 51.03-4.7M-20.882 57.744c14.848 8.909 31.578 17.474 44.987 28.2M18.062 51.701c-7.385 14.77-18.053 24.916-28.2 37.6",transform:"rotate(-13.671 248.432 -18.992) scale(.57619) translate(344.45 -40.958)"})})]}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.6",d:"M114.75 109.445c0 19.716 13.623 28.972 22.828 44.315"})]})})}function me({...t}){return e(B,{variant:"themed",...t,children:l("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 300 300",children:[e("g",{fill:"none",stroke:"#3f5787",strokeWidth:"3",children:e("path",{vectorEffect:"non-scaling-stroke",d:"M79.163 35.586c1.204 15.658 1.343 31.986 1.343 47.673M77.82 38.272c27.862 3.096 40.578 45.658 2.014 45.658M126.835 53.044c-15.112 9.067-1.478 31.265 12.758 23.5 13.534-7.382-3.442-21.251-10.743-24.172M185.25 53.044c0 8.33.672 16.507.672 24.843M185.25 35.586c-10.081 6.05 1.503 10.358 0 1.343M208.08 34.915c0 14.112-1.428 29.12 1.343 42.972M193.98 51.701c7.886 0 15.584-1.343 23.5-1.343",transform:"rotate(10.468 125.393 381.26)"})}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.808",d:"M4.665 290.874h188.067M189.017 290.874C231.202 220.566 181 104.012 87.75 139.877c-8.54 3.285-20.196 8.141-26.221 15.37-5.002 6.003-8.176 14.18-9.946 21.701-9.754 41.454-29.684 73.784-46.113 112.117M112.518 215.536c13.07 5.228 23.78 2.242 36.167-2.713M83.132 222.785c31.558 12.623 65.943 10.164 94.938-7.233"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.808",d:"M78.396 174.649c3.88-.788 13.053-9.216 22.561-8.823 9.226.381 18.848 9.625 19.043 6.31 1.58-26.901-37.69-21.996-41.604 2.513M167.641 174.217c-3.603-.692-14.307-9.228-23.218-8.685-10.033.612-18.163 10.183-18.41 6.62-1.87-26.883 37.451-22.4 41.628 2.065"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"#0c0c0c",d:"M-6.198 0A6.198 6.198 0 016.198 0c0 3.423-12.396 3.423-12.396 0z",transform:"matrix(.51058 0 0 .51058 101.624 165.273)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"#0c0c0c",d:"M-6.198 0A6.198 6.198 0 016.198 0c0 3.423-12.396 3.423-12.396 0z",transform:"matrix(.51058 0 0 .51058 145.52 164.416)"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.808",d:"M108.099 196.183c5.609 0 39.994 3.366 41.435-3.837 2.93-14.65-39.9-16.853-39.9 3.837"}),e("path",{vectorEffect:"non-scaling-stroke",fill:"none",stroke:"#3f5787",strokeWidth:"0.6",d:"M195.994 154.432c10.203-10.204 17.783-30.073 12.086-44.316"})]})})}function ue(){const t=I({light:"#68d391",dark:"#63b3ed",hacker:"#007f00",random:A()}),r=I({light:"#050505",dark:"#777777",hacker:"#006600",random:A()});return e(K,{id:"particles-home",init:O,options:{fullScreen:{enable:!0,zIndex:-1},particles:{number:{value:64,density:{enable:!0,value_area:1200}},color:{value:t},shape:{type:"star",polygon:{nb_sides:5}},opacity:{value:.75,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:12,size_min:1,sync:!1}},line_linked:{enable:!0,distance:100,color:r,opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:["bubble","grab"],parallax:{enable:!0,force:60,smooth:10}},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:200,size:10,duration:3}}},retina_detect:!0}})}function ye({onExplodeClick:t}){const r=F(),{scrollIntoView:n,targetRef:o}=le(),i=Z({base:!1,md:!0});return l($,{children:[i&&!r&&e(M,{id:"page-particles",as:c.div,initial:r?void 0:{opacity:0},animate:{opacity:1,transition:{delay:3}},children:e(ue,{})}),e(L,{paddingTop:{base:"10",md:"24"},children:l(C,{spacing:"12",direction:"column",textAlign:"center",as:c.div,variants:{hide:{},show:{transition:{staggerChildren:2}}},initial:r?void 0:"hide",animate:"show",children:[e(W,{fontSize:{md:"large",lg:"xl"},textAlign:{md:"left"},as:c.p,variants:{hide:{opacity:0},show:{opacity:1}},children:"The name's Wyly ..."}),l(M,{position:"relative",textAlign:"center",as:c.div,variants:{hide:{},show:{transition:{staggerChildren:.3}}},children:[e(H,{color:"themed.accent3",fontSize:{base:"5xl",md:"7xl",lg:"8xl"},as:c.h2,variants:{hide:{opacity:0,y:-30},show:{opacity:1,y:0,transition:{type:"spring",bounce:.8}}},children:"Colin Wyly"}),e(M,{minHeight:"1",marginTop:"2",marginBottom:"2",marginX:"auto",maxWidth:"75%",bgGradient:"linear(90deg, themed.scheme 0%, themed.accent6 50%, themed.accent4 100%)",as:c.div,variants:{hide:{maxWidth:"0%"},show:{maxWidth:"75%"}}}),e(W,{fontSize:{base:"md",md:"lg",lg:"2xl"},as:c.p,variants:{hide:{opacity:0,y:30},show:{opacity:1,y:0,transition:{type:"spring",bounce:.8}}},children:"Coder I Developer I Tech Guy"}),e(W,{marginTop:"12",fontSize:{base:"8px",md:"10px",lg:"12px"},fontWeight:"normal",fontFamily:"body",as:c.p,variants:{hide:{opacity:0},show:{opacity:1}},children:"(It's pronounced 'why-lee' \u{1F61B})"}),l(C,{position:"relative",direction:"row",justifyContent:"space-between",children:[e(M,{display:"flex",width:"48",height:"48",position:{base:"unset",xl:"absolute"},top:"-150px",left:"-200px",as:c.div,variants:{hide:{scaleY:0},show:{scaleY:1,transition:{type:"spring",bounce:.8}}},children:e(ge,{alignSelf:"flex-end"})}),e(M,{display:"flex",width:"48",height:"48",position:{base:"unset",xl:"absolute"},top:"-300px",right:"-200px",as:c.div,variants:{hide:{scaleY:0},show:{scaleY:1,transition:{type:"spring",bounce:.8}}},children:e(pe,{alignSelf:"flex-end"})})]})]}),e(W,{textAlign:{md:"left"},as:c.p,variants:{hide:{opacity:0,x:-30},show:{opacity:1,x:0}},children:"Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered all over this site."}),e(M,{as:c.div,variants:{hide:{opacity:0,x:-50},show:{opacity:1,x:0}},children:e(he,{width:{base:"48",md:"64"},marginLeft:"auto !important",marginRight:{base:"auto !important",md:"inherit !important"},cursor:"pointer",onClick:()=>{n()}})})]})}),l(L,{id:"explode-time-yay",ref:o,position:"relative",paddingY:"12",as:c.div,initial:r?void 0:"initial",whileInView:r?void 0:"animate",viewport:{once:!0,amount:.3},variants:{initial:{},animate:{transition:{delayChildren:1,staggerChildren:.5}}},children:[l(C,{spacing:"8",direction:"column",alignItems:"center",textAlign:"center",children:[l(H,{as:c.h2,variants:{initial:{opacity:0,y:50},animate:{opacity:1,y:0}},children:["QUICK!",e("br",{}),"Blow up my website!"]}),e(W,{as:c.p,variants:{initial:{opacity:0,y:50},animate:{opacity:1,y:0}},children:"Press that big red button below to explode everything!"}),e(q,{id:"big-button",as:c.img,variants:{initial:{scale:0},animate:{scale:1}},whileHover:r?void 0:{boxShadow:`0 0 20px 5px ${I({default:"white",light:"black"})}`},onClick:t,src:fe,borderRadius:"full",boxSize:"48",cursor:"pointer"})]}),e(M,{as:c.div,variants:{initial:{opacity:0,x:-50},animate:{opacity:1,x:0}},position:"absolute",width:"48",height:"48",bottom:{base:"-135px",xl:"0px"},left:{base:"0px",xl:"-40px"},children:e(me,{})})]})]})}export{ye as default};
