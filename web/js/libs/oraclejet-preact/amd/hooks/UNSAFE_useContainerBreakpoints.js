define(["exports","preact/hooks","./UNSAFE_useBreakpoints"],(function(e,t,n){"use strict";e.useContainerBreakpoints=function(e=n.defaultBreakpoints){const[r,s]=t.useState(0),o=t.useRef(null),u=t.useMemo((()=>new ResizeObserver((e=>{for(let t of e)s(t.contentRect.width)}))),[]),c=t.useCallback((e=>{const t=o.current;e!=t&&(t&&u.unobserve(t),e&&u.observe(e),o.current=e)}),[]);return{breakpointMatches:t.useMemo((()=>{const t={};for(let n in e)t[n]=r>=parseInt(e[n]);return t}),[r]),ref:c}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useContainerBreakpoints.js.map
