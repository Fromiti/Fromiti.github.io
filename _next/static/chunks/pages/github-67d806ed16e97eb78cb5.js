_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a,c=o(t("q1tI")),i=t("elyg"),u=t("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var d=function(e,n){var t=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function p(e,n,t,r){(0,i.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",a=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),s=a.href,h=a.as,v=e.children,_=e.replace,w=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=c.Children.only(v),m=b&&"object"===typeof b&&b.ref,E=c.default.useRef(),j={ref:c.default.useCallback((function(e){(E.current&&(E.current(),E.current=void 0),n&&f&&e&&e.tagName&&(0,i.isLocalURL)(s))&&(l[s+"%"+h]||(E.current=d(e,(function(){p(t,s,h,{locale:"undefined"!==typeof g?g:t&&t.locale})}))));m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[n,m,s,h,t,g]),onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,s,h,_,w,y,g)}};return n&&(j.onMouseEnter=function(e){(0,i.isLocalURL)(s)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),p(t,s,h,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(j.href=(0,i.addBasePath)((0,i.addLocale)(h,"undefined"!==typeof g?g:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(b,j)};n.default=h},s2hT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/github",function(){return t("uhGn")}])},uhGn:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return c}));var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),a=t.n(o),c=!0;n.default=function(e){var n=e.viewer;return Object(r.jsxs)("div",{className:"animate__animated animate__fadeInTopLeft",children:[Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{style:{marginRight:5},children:"Index"})}),Object(r.jsx)(a.a,{href:"/users",children:"Users"}),Object(r.jsxs)("pre",{children:[" ",JSON.stringify(n,null,4)," "]})]})}}},[["s2hT",0,2,1]]]);