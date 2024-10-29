exports.id=637,exports.ids=[637],exports.modules={1323:(e,t)=>{"use strict";function n(e,t){return t in e?e[t]:"then"in e&&"function"===typeof e.then?e.then((e=>n(e,t))):"function"===typeof e&&"default"===t?e:void 0}Object.defineProperty(t,"l",{enumerable:!0,get:function(){return n}})},953:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return a}});const r=n(475),o=n(8364),i="";function a(e,t){return(0,o.normalizePathTrailingSlash)((0,r.addPathPrefix)(e,i))}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1443:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}});n(8364);const r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6691:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return u},ACTION_NAVIGATE:function(){return r},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return n},ACTION_RESTORE:function(){return o},ACTION_SERVER_ACTION:function(){return s},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return l},PrefetchKind:function(){return c},isThenable:function(){return f}});const n="refresh",r="navigate",o="restore",i="server-patch",a="prefetch",u="fast-refresh",s="server-action";var c,l;function f(e){return e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(c||(c={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(l||(l={})),("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}});n(8364);function r(e,t,n,r){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9142:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return i}});const r=n(8106),o="";function i(e){return(0,r.pathHasPrefix)(e,o)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});const r=n(167),o=n(8760),i=n(997),a=o._(n(6689)),u=r._(n(6405)),s=r._(n(7828)),c=n(7367),l=n(7903),f=n(6218),d=(n(1997),n(5469)),p=r._(n(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,o,i,a){const u=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===u)return;e["data-loaded-src"]=u;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){return Boolean(a.use)?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;const y=(0,a.forwardRef)(((e,t)=>{let{src:n,srcSet:r,sizes:o,height:u,width:s,decoding:c,className:l,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:y,fill:b,onLoadRef:_,onLoadingCompleteRef:P,setBlurComplete:v,setShowAltText:j,sizesInput:O,onLoad:x,onError:w,...S}=e;return(0,i.jsx)("img",{...S,...m(d),loading:h,width:s,height:u,decoding:c,"data-nimg":b?"fill":"1",className:l,style:f,sizes:o,srcSet:r,src:n,ref:(0,a.useCallback)((e=>{t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&g(e,p,_,P,v))}),[n,p,_,P,v,w,y,O,t]),onLoad:e=>{g(e.currentTarget,p,_,P,v)},onError:e=>{j(!0),"empty"!==p&&v(!0),w&&w(e)}})}));function b(e){let{isAppRouter:t,imgAttributes:n}=e;const r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}const _=(0,a.forwardRef)(((e,t)=>{const n=!(0,a.useContext)(d.RouterContext),r=(0,a.useContext)(f.ImageConfigContext),o=(0,a.useMemo)((()=>{const e=h||r||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[r]),{onLoad:u,onLoadingComplete:s}=e,g=(0,a.useRef)(u);(0,a.useEffect)((()=>{g.current=u}),[u]);const m=(0,a.useRef)(s);(0,a.useEffect)((()=>{m.current=s}),[s]);const[_,P]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),{props:O,meta:x}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:_,showAltText:v});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...O,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:P,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,i.jsx)(b,{isAppRouter:n,imgAttributes:O}):null]})}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});const r=n(167),o=n(997),i=r._(n(6689)),a=n(1401),u=n(2045),s=n(7420),c=n(7201),l=n(1443),f=n(5469),d=n(7443),p=n(2905),h=n(4318),g=n(953),m=n(6691);new Set;function y(e){return"string"===typeof e?e:(0,s.formatUrl)(e)}const b=i.default.forwardRef((function(e,t){let n;const{href:r,as:s,children:b,prefetch:_=null,passHref:P,replace:v,shallow:j,scroll:O,locale:x,onClick:w,onMouseEnter:S,onTouchStart:R,legacyBehavior:M=!1,...C}=e;n=b,!M||"string"!==typeof n&&"number"!==typeof n||(n=(0,o.jsx)("a",{children:n}));const E=i.default.useContext(f.RouterContext),A=i.default.useContext(d.AppRouterContext),I=null!=E?E:A,z=!E,T=!1!==_,k=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL;const{href:L,as:U}=i.default.useMemo((()=>{if(!E){const e=y(r);return{href:e,as:s?y(s):e}}const[e,t]=(0,a.resolveHref)(E,r,!0);return{href:e,as:s?(0,a.resolveHref)(E,s):t||e}}),[E,r,s]),N=i.default.useRef(L),D=i.default.useRef(U);let W;M&&(W=i.default.Children.only(n));const q=M?W&&"object"===typeof W&&W.ref:t,[F,K,H]=(0,p.useIntersection)({rootMargin:"200px"}),B=i.default.useCallback((e=>{D.current===U&&N.current===L||(H(),D.current=U,N.current=L),F(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[U,q,L,H,F]);i.default.useEffect((()=>{}),[U,L,K,x,T,null==E?void 0:E.locale,I,z,k]);const G={ref:B,onClick(e){M||"function"!==typeof w||w(e),M&&W.props&&"function"===typeof W.props.onClick&&W.props.onClick(e),I&&(e.defaultPrevented||function(e,t,n,r,o,a,s,c,l){const{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,u.isLocalURL)(n)))return;e.preventDefault();const d=()=>{const e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};l?i.default.startTransition(d):d()}(e,I,L,U,v,j,O,x,z))},onMouseEnter(e){M||"function"!==typeof S||S(e),M&&W.props&&"function"===typeof W.props.onMouseEnter&&W.props.onMouseEnter(e)},onTouchStart:function(e){M||"function"!==typeof R||R(e),M&&W.props&&"function"===typeof W.props.onTouchStart&&W.props.onTouchStart(e)}};if((0,c.isAbsoluteUrl)(U))G.href=U;else if(!M||P||"a"===W.type&&!("href"in W.props)){const e="undefined"!==typeof x?x:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);G.href=t||(0,g.addBasePath)((0,l.addLocale)(U,e,null==E?void 0:E.defaultLocale))}return M?i.default.cloneElement(W,G):(0,o.jsx)("a",{...C,...G,children:n})}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8364:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return i}});const r=n(9362),o=n(2107),i=e=>{if(!e.startsWith("/"))return e;const{pathname:t,query:n,hash:i}=(0,o.parsePath)(e);return""+(0,r.removeTrailingSlash)(t)+n+i};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});const n="undefined"!==typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},r="undefined"!==typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1401:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});const r=n(8260),o=n(7420),i=n(3061),a=n(7201),u=n(8364),s=n(2045),c=n(5722),l=n(4321);function f(e,t,n){let f,d="string"===typeof t?t:(0,o.formatWithValidation)(t);const p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");const t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(g){f=new URL("/","http://n")}try{const e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){const n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:u}=(0,l.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,u)}))}const a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(g){return n?[d]:d}}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});const r=n(6689),o=n(3815),i="function"===typeof IntersectionObserver,a=new Map,u=[];function s(e,t,n){const{id:r,observer:o,elements:i}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=u.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=a.get(n),r))return r;const o=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:i,elements:o},u.push(t),a.set(t,r),r}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);const e=u.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&u.splice(e,1)}}}function c(e){let{rootRef:t,rootMargin:n,disabled:a}=e;const u=a||!i,[c,l]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{f.current=e}),[]);(0,r.useEffect)((()=>{if(i){if(u||c)return;const e=f.current;if(e&&e.tagName){return s(e,(e=>e&&l(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!c){const e=(0,o.requestIdleCallback)((()=>l(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[u,n,t,c,f.current]);const p=(0,r.useCallback)((()=>{l(!1)}),[]);return[d,c,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},1885:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});const n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},7367:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}});n(1997);const r=n(9919),o=n(7903);function i(e){return void 0!==e.default}new Map;function a(e){return"undefined"===typeof e?e:"number"===typeof e?Number.isFinite(e)?e:NaN:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){const e=.01*Math.min(...t);return{widths:o.filter((t=>t>=r[0]*e)),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>o.find((t=>t>=e))||o[o.length-1])))],kind:"x"}}(t,o,a),l=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map(((e,r)=>u({config:t,src:n,quality:i,width:e})+" "+("w"===c?e:r+1)+c)).join(", "),src:u({config:t,src:n,quality:i,width:s[l]})}}function s(e,t){let{src:n,sizes:s,unoptimized:c=!1,priority:l=!1,loading:f,className:d,quality:p,width:h,height:g,fill:m=!1,style:y,overrideSrc:b,onLoad:_,onLoadingComplete:P,placeholder:v="empty",blurDataURL:j,fetchPriority:O,layout:x,objectFit:w,objectPosition:S,lazyBoundary:R,lazyRoot:M,...C}=e;const{imgConf:E,showAltText:A,blurComplete:I,defaultLoader:z}=t;let T,k=E||o.imageConfigDefault;if("allSizes"in k)T=k;else{const e=[...k.deviceSizes,...k.imageSizes].sort(((e,t)=>e-t)),t=k.deviceSizes.sort(((e,t)=>e-t));T={...k,allSizes:e,deviceSizes:t}}if("undefined"===typeof z)throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=C.loader||z;delete C.loader,delete C.srcSet;const U="__next_img_default"in L;if(U){if("custom"===T.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=L;L=t=>{const{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(m=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];t&&(y={...y,...t});const n=e[x];n&&!s&&(s=n)}let N,D,W="",q=a(h),F=a(g);if(function(e){return"object"===typeof e&&(i(e)||function(e){return void 0!==e.src}(e))}(n)){const e=i(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(N=e.blurWidth,D=e.blurHeight,j=j||e.blurDataURL,W=e.src,!m)if(q||F){if(q&&!F){const t=q/e.width;F=Math.round(e.height*t)}else if(!q&&F){const t=F/e.height;q=Math.round(e.width*t)}}else q=e.width,F=e.height}n="string"===typeof n?n:W;let K=!l&&("lazy"===f||"undefined"===typeof f);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(c=!0,K=!1),T.unoptimized&&(c=!0),U&&n.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(c=!0),l&&(O="high");const H=a(p);const B=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:w,objectPosition:S}:{},A?{}:{color:"transparent"},y),G=I||"empty"===v?null:"blur"===v?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:q,heightInt:F,blurWidth:N,blurHeight:D,blurDataURL:j||"",objectFit:B.objectFit})+'")':'url("'+v+'")';let V=G?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{};const $=u({config:T,src:n,unoptimized:c,width:q,quality:H,sizes:s,loader:L});return{props:{...C,loading:K?"lazy":f,fetchPriority:O,width:q,height:F,decoding:"async",className:d,style:{...B,...V},sizes:$.sizes,srcSet:$.srcSet,src:b||$.src},meta:{unoptimized:c,priority:l,placeholder:v,fill:m}}}},7828:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return f}});const r=n(167),o=n(8760),i=n(997),a=o._(n(6689)),u=r._(n(7215)),s=n(8039),c=n(1988),l=n(5495);n(1997);function f(e){void 0===e&&(e=!1);const t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function h(e,t){const{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(f(n).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?i=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&a||!n.has(e)?(n.add(e),r[t]=n):i=!1}}}return i}}()).reverse().map(((e,t)=>{const r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})}))}const g=function(e){let{children:t}=e;const n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return(0,i.jsx)(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n),children:t})};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9919:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e;const u=r?40*r:t,s=o?40*o:n,c=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7903:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});const n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return u}});const r=n(167),o=n(7367),i=n(6541),a=r._(n(6663));function u(e){const{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(const[n,r]of Object.entries(t))void 0===r&&delete t[n];return{props:t}}const s=i.Image},6663:(e,t)=>{"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;const r=n},475:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});const r=n(2107);function o(e,t){if(!e.startsWith("/")||!t)return e;const{pathname:n,query:o,hash:i}=(0,r.parsePath)(e);return""+t+n+o+i}},7420:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});const r=n(8760)._(n(8260)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",a=e.pathname||"",u=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),s&&"object"===typeof s&&(s=String(r.urlQueryToSearchParams(s)));let l=e.search||s&&"?"+s||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),u&&"#"!==u[0]&&(u="#"+u),l&&"?"!==l[0]&&(l="?"+l),a=a.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),""+i+c+a+l+u}const a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},4321:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});const r=n(122),o=n(2437);function i(e,t,n){let i="";const a=(0,o.getRouteRegex)(e),u=a.groups,s=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;const c=Object.keys(u);return c.every((e=>{let t=s[e]||"";const{repeat:n,optional:r}=u[e];let o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in s)&&(i=i.replace(o,n?t.map((e=>encodeURIComponent(e))).join("/"):encodeURIComponent(t))||"/")}))||(i=""),{params:c,result:i}}},2045:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});const r=n(7201),o=n(9142);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{const t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(t){return!1}}},3061:(e,t)=>{"use strict";function n(e,t){const n={};return Object.keys(e).forEach((r=>{t.includes(r)||(n[r]=e[r])})),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},2107:(e,t)=>{"use strict";function n(e){const t=e.indexOf("#"),n=e.indexOf("?"),r=n>-1&&(t<0||n<t);return r||t>-1?{pathname:e.substring(0,r?n:t),query:r?e.substring(n,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return n}})},8106:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});const r=n(2107);function o(e,t){if("string"!==typeof e)return!1;const{pathname:n}=(0,r.parsePath)(e);return n===t||n.startsWith(t+"/")}},8260:(e,t)=>{"use strict";function n(e){const t={};return e.forEach(((e,n)=>{"undefined"===typeof t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]})),t}function r(e){return"string"===typeof e||"number"===typeof e&&!isNaN(e)||"boolean"===typeof e?String(e):""}function o(e){const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,o]=e;Array.isArray(o)?o.forEach((e=>t.append(n,r(e)))):t.set(n,r(o))})),t}function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((t=>{Array.from(t.keys()).forEach((t=>e.delete(t))),t.forEach(((t,n)=>e.append(n,t)))})),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},9362:(e,t)=>{"use strict";function n(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return n}})},122:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});const r=n(7201);function o(e){let{re:t,groups:n}=e;return e=>{const o=t.exec(e);if(!o)return!1;const i=e=>{try{return decodeURIComponent(e)}catch(t){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach((e=>{const t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map((e=>i(e))):t.repeat?[i(r)]:i(r))})),a}}},2437:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return p},getRouteRegex:function(){return l}});const r=n(2407),o=n(1885),i=n(9362),a="nxtP",u="nxtI";function s(e){const t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));const n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function c(e){const t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={};let a=1;return{parameterizedRoute:t.map((e=>{const t=r.INTERCEPTION_ROUTE_MARKERS.find((t=>e.startsWith(t))),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){const{key:e,optional:r,repeat:u}=s(i[1]);return n[e]={pos:a++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(i){const{key:e,repeat:t,optional:r}=s(i[1]);return n[e]={pos:a++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return"/"+(0,o.escapeStringRegexp)(e)})).join(""),groups:n}}function l(e){const{parameterizedRoute:t,groups:n}=c(e);return{re:new RegExp("^"+t+"(?:/)?$"),groups:n}}function f(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:i,keyPrefix:a}=e;const{key:u,optional:c,repeat:l}=s(r);let f=u.replace(/\W/g,"");a&&(f=""+a+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),i[f]=a?""+a+u:u;const p=t?(0,o.escapeStringRegexp)(t):"";return l?c?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function d(e,t){const n=(0,i.removeTrailingSlash)(e).slice(1).split("/"),s=function(){let e=0;return()=>{let t="",n=++e;for(;n>0;)t+=String.fromCharCode(97+(n-1)%26),n=Math.floor((n-1)/26);return t}}(),c={};return{namedParameterizedRoute:n.map((e=>{const n=r.INTERCEPTION_ROUTE_MARKERS.some((t=>e.startsWith(t))),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){const[n]=e.split(i[0]);return f({getSafeRouteKey:s,interceptionMarker:n,segment:i[1],routeKeys:c,keyPrefix:t?u:void 0})}return i?f({getSafeRouteKey:s,segment:i[1],routeKeys:c,keyPrefix:t?a:void 0}):"/"+(0,o.escapeStringRegexp)(e)})).join(""),routeKeys:c}}function p(e,t){const n=d(e,t);return{...l(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function h(e,t){const{parameterizedRoute:n}=c(e),{catchAll:r=!0}=t;if("/"===n){return{namedRegex:"^/"+(r?".*":"")+"$"}}const{namedParameterizedRoute:o}=d(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},7215:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});const r=n(6689),o=!0,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function u(e){const{headManager:t,reduceComponentsToState:n}=e;function u(){if(t&&t.mountedInstances){const o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}var s;o&&(null==t||null==(s=t.mountedInstances)||s.add(e.children),u());return i((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)}))),a((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.AmpContext},7443:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.AppRouterContext},1988:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.HeadManagerContext},6218:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.ImageConfigContext},5469:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.RouterContext},5675:(e,t,n)=>{e.exports=n(5666)},1664:(e,t,n)=>{e.exports=n(9577)},8760:(e,t)=>{"use strict";function n(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}}};