define(["exports","preact/hooks","../utils/UNSAFE_lengthFilter"],(function(e,t,n){"use strict";e.useLengthFilter=function({maxLength:e,maxLengthUnit:u,onCommit:l,onInput:s,value:a}){const[i,o]=t.useState(!1),c=t.useCallback((t=>n.filter(t,e,u)),[e,u]);t.useEffect((()=>{if(void 0===a)return;const e=c(a);e!==a?(null==s||s({previousValue:a,value:e}),null==l||l({previousValue:a,value:e}),o(!0)):o(!1)}),[a,l,s,c]);const r=t.useCallback(((...e)=>{const{previousValue:t,value:n}=e[0],u=c(null!=n?n:"");t!==u?(null==s||s(Object.assign(Object.assign({},e[0]),{value:u})),o(!1)):o(!0)}),[s,c]);return{isMaxLengthExceeded:i,valueLength:void 0===a?void 0:n.calcLength(a,u),onFilteredInput:r}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useLengthFilter.js.map
