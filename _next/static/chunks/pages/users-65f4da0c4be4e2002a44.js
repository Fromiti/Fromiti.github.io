_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var i,o=c(t("q1tI")),a=t("elyg"),s=t("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,n){var t=i||(l?i=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function h(e,n,t,r){(0,a.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),f[n+"%"+t]=!0)}var p=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),c=t&&t.pathname||"/",i=o.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),i=t[0],o=t[1];return{href:i,as:e.as?(0,a.resolveHref)(c,e.as):o||i}}),[c,e.href,e.as]),u=i.href,p=i.as,j=e.children,g=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof j&&(j=o.default.createElement("a",null,j));var O=o.Children.only(j),y=O&&"object"===typeof O&&O.ref,x=o.default.useRef(),_={ref:o.default.useCallback((function(e){(x.current&&(x.current(),x.current=void 0),n&&l&&e&&e.tagName&&(0,a.isLocalURL)(u))&&(f[u+"%"+p]||(x.current=d(e,(function(){h(t,u,p,{locale:"undefined"!==typeof m?m:t&&t.locale})}))));y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[n,y,u,p,t,m]),onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:i,locale:s}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,u,p,g,b,v,m)}};return n&&(_.onMouseEnter=function(e){(0,a.isLocalURL)(u)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),h(t,u,p,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(_.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof m?m:t&&t.locale,t&&t.defaultLocale))),o.default.cloneElement(O,_)};n.default=p},csLj:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return s}));var r=t("nKUr"),c=t("q1tI"),i=t("soUV"),o=t("pHx+"),a=function(){var e=Object(o.a)().data;return Object(r.jsx)("div",{className:"animate__animated animate__fadeIn",children:e.users.map((function(e){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)("h2",{children:[" ",e.name," "]}),Object(r.jsxs)("p",{children:[" ",e.description," "]}),Object(r.jsx)("img",{alt:e.name,src:"https://"===e.image.slice(0,8)?e.image:"https://storage.googleapis.com/social_todos/"+e.image})]},e.id)}))})},s=!0;n.default=function(){return Object(r.jsx)(i.a,{children:Object(r.jsx)(a,{})})}},"pHx+":function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return f}));var c,i=t("VX74");function o(){var e=r(["\n    query getMyUsers {\n  users {\n    id\n    name\n    email\n    description\n    github\n    google\n    image\n  }\n}\n    "]);return o=function(){return e},e}function a(){var e=r(["\n    query getTrendingGifs {\n  trendingGifs {\n    id\n    bitly_url\n    images {\n      fixed_height {\n        height\n        width\n        url\n      }\n    }\n  }\n}\n    "]);return a=function(){return e},e}!function(e){e.GitHub="GitHub",e.Google="Google"}(c||(c={}));var s=Object(i.gql)(a());function u(e){return i.useQuery(s,e)}var l=Object(i.gql)(o());function f(e){return i.useQuery(l,e)}},soUV:function(e,n,t){"use strict";var r=t("nKUr"),c=(t("q1tI"),t("YFqc")),i=t.n(c),o=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{style:{marginRight:5},children:"Index"})}),Object(r.jsx)(i.a,{href:"/users",children:Object(r.jsx)("a",{style:{marginRight:5},children:"Users"})}),Object(r.jsx)(i.a,{href:"/github",children:Object(r.jsx)("a",{style:{marginRight:5},children:"Github"})})]})};n.a=function(e){var n=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)("main",{children:n})]})}},x2w6:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t("csLj")}])}},[["x2w6",0,2,1,3]]]);