define(["exports","preact/hooks","../utils/PRIVATE_clientHints","../clientHints-4675dd55"],(function(e,n,t,u){"use strict";e.useTextFieldInputHandlers=function({value:e,onInput:t,onCommit:r,onKeyDown:l}){const o=n.useRef(!1),s=n.useRef(e),c=n.useRef(e);e!==c.current&&(s.current=e);const[,a]=n.useReducer((e=>e+1),0),i=n.useCallback((e=>{const n=e.target.value;s.current!==n&&(null==r||r({previousValue:s.current,value:n}),s.current=n)}),[r]),d=n.useCallback((e=>{null==l||l(e),"Enter"===e.key&&i(e)}),[i,l]),p=n.useCallback((()=>{o.current=!0}),[]),f=n.useCallback((()=>{o.current=!1}),[]),v=n.useCallback((n=>{if(!o.current||"android"===u.getClientHints().platform){const u=n.target.value;c.current=u,null==t||t({previousValue:e,value:u}),a(null)}}),[e,t]);return{onBlur:i,onKeyDown:d,oncompositionstart:p,oncompositionend:f,onInput:v}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useTextFieldInputHandlers.js.map
