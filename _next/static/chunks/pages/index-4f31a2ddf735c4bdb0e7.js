_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return u}));var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),i=t.n(o),c=t("pHx+"),u=!0;n.default=function(){var e=Object(c.b)().data;return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{href:"/users",children:Object(r.jsx)("a",{style:{marginRight:5},children:"Users"})}),Object(r.jsx)(i.a,{href:"/github",children:"GitHub"}),Object(r.jsx)("div",{className:"animate__animated animate__backInLeft",children:e.trendingGifs.map((function(e){return Object(r.jsx)("img",{src:e.images.fixed_height.url,alt:e.id},e.id)}))})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i,c=o(t("q1tI")),u=t("elyg"),a=t("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var d=function(e,n){var t=i||(s?i=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var n=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),f.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),f.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}f.delete(e)}):function(){}};function p(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",i=c.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?(0,u.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=i.href,h=i.as,g=e.children,v=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof g&&(g=c.default.createElement("a",null,g));var w=c.Children.only(g),j=w&&"object"===typeof w&&w.ref,m=c.default.useRef(),O={ref:c.default.useCallback((function(e){(m.current&&(m.current(),m.current=void 0),n&&s&&e&&e.tagName&&(0,u.isLocalURL)(f))&&(l[f+"%"+h]||(m.current=d(e,(function(){p(t,f,h,{locale:"undefined"!==typeof _?_:t&&t.locale})}))));j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[n,j,f,h,t,_]),onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,f,h,v,b,y,_)}};return n&&(O.onMouseEnter=function(e){(0,u.isLocalURL)(f)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),p(t,f,h,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(O.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof _?_:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(w,O)};n.default=h},"pHx+":function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return l}));var o,i=t("VX74");function c(){var e=r(["\n    query getMyUsers {\n  users {\n    id\n    name\n    email\n    description\n    github\n    google\n    image\n  }\n}\n    "]);return c=function(){return e},e}function u(){var e=r(["\n    query getTrendingGifs {\n  trendingGifs {\n    id\n    bitly_url\n    images {\n      fixed_height {\n        height\n        width\n        url\n      }\n    }\n  }\n}\n    "]);return u=function(){return e},e}!function(e){e.GitHub="GitHub",e.Google="Google"}(o||(o={}));var a=Object(i.gql)(u());function f(e){return i.useQuery(a,e)}var s=Object(i.gql)(c());function l(e){return i.useQuery(s,e)}}},[["/EDR",0,2,1,3]]]);