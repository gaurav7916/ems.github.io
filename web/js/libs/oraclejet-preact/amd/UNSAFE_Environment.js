define(["exports","preact","preact/jsx-runtime","preact/hooks","./UNSAFE_Layer","preact/compat"],(function(e,n,t,r,o,i){"use strict";var c,s;const l={user:{locale:document.documentElement.getAttribute("lang")||"en",direction:"rtl"===document.documentElement.getAttribute("dir")?"rtl":"ltr",forcedColors:(null===(s=null===(c=window.matchMedia)||void 0===c?void 0:c.call(window,"(forced-colors: active)"))||void 0===s?void 0:s.matches)?"active":"none"},theme:{name:"redwood",colorScheme:"light",scale:"lg"}},a=n.createContext(l);function d(e,n){const t=Object.assign({},e.user,null==n?void 0:n.user),r=Object.assign({},e.theme,null==n?void 0:n.theme),o=Object.assign({},e.translations),i=(null==n?void 0:n.translations)||{};return Object.keys(i).forEach((e=>{let n=i[e];o[e]&&(n=Object.assign({},o[e],n)),o[e]=n})),{user:t,theme:r,translations:o}}e.EnvironmentContext=a,e.EnvironmentProvider=function({children:e,environment:n}){return t.jsx(a.Consumer,{children:o=>{const i=r.useMemo((()=>d(o,n)),[o,n]);return t.jsx(a.Provider,Object.assign({value:i},{children:e}))}})},e.RootEnvironmentProvider=function({children:e,environment:n}){const i=r.useMemo((()=>d(l,n)),[n]);return t.jsx(a.Provider,Object.assign({value:i},{children:t.jsx(o.LayerManager,{children:e})}))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Environment.js.map
