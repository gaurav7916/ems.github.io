define(["exports","preact/jsx-runtime","preact/compat","preact/hooks","./hooks/UNSAFE_useFocusableTextField","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./hooks/UNSAFE_useTextField","./hooks/UNSAFE_useHover","./UNSAFE_Label","./UNSAFE_TextField","./UNSAFE_UserAssistance",'css!./UNSAFE_InputPassword.css',"./hooks/UNSAFE_useTranslationBundle","./hooks/UNSAFE_usePress","./index-c2eae4df","./index-c0d64413","./hooks/UNSAFE_useClearIcon","./utils/UNSAFE_componentUtils","./ClearIcon-b4659511","./hooks/UNSAFE_useToggle","./TextFieldInput-a8516ac9","./tslib.es6-5322d4a4","./hooks/UNSAFE_useFocusWithin","./useFocusWithin-f17ee2ac","preact","./hooks/UNSAFE_useId","./utils/UNSAFE_classNames","./classNames-73af7744","./utils/UNSAFE_interpolations/text","./keys-5462bc54","./_curry1-2a38bee3","./_has-3f42f5b3","./utils/UNSAFE_mergeInterpolations","./_curry2-531229e9","./UNSAFE_LabelValueLayout","./UNSAFE_Flex","./Flex-155c2aac","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./utils/UNSAFE_stringUtils","./stringUtils-f9014434","./utils/UNSAFE_interpolations/boxalignment","./utils/UNSAFE_interpolations/flexbox","./flexbox-be79af91","./utils/UNSAFE_interpolations/flexitem","./flexitem-d070b54e","./hooks/UNSAFE_useDebounce","./UNSAFE_LiveRegion","./UNSAFE_ComponentMessage","./ComponentMessage-e01cedda","./UNSAFE_Message","./MessageCloseButton-5b1f1674","./MessageDetail-a5d52a2c","./MessageFormattingUtils-9aa68065","./utils/UNSAFE_getLocale","./Message.types-cb789985","./MessageStartIcon-64af111b","./MessageSummary-5990b45a","./MessageTimestamp-d830e666","./MessageUtils-fbb3325b","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./MessagesManager-c1177761","./UNSAFE_TransitionGroup","./UNSAFE_Icon","./Icon-404367f1","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./hooks/UNSAFE_useTheme","./ComponentMessageContainer-94a4feca","./hooks/UNSAFE_useTextFieldInputHandlers","./utils/PRIVATE_clientHints","./clientHints-4675dd55"],(function(e,s,i,o,n,t,a,l,r,u,c,d,F,b,x,A,p,U,g,S,E,_,h,N,m,f,v,j,y,I,C,T,k,R,P,M,L,w,D,O,H,V,q,B,W,z,G,J,K,Q,X,Y,Z,$,ee,se,ie,oe,ne,te,ae,le,re,ue,ce,de,Fe,be,xe,Ae,pe,Ue,ge,Se,Ee,_e){"use strict";const he="bedqiru";function Ne({isRevealed:e,onPress:i}){const{pressProps:o}=x.usePress(i),n=b.useTranslationBundle("@oracle/oraclejet-preact").inputPassword_hidden();return s.jsx("button",Object.assign({"aria-label":n,role:"switch","aria-checked":!e,class:he,tabIndex:0},o,{children:e?s.jsx(p.SvgIcoViewHide,{}):s.jsx(p.SvgIcoView,{})}))}const me=i.forwardRef((({assistiveText:e,autoComplete:i="off",autoFocus:F=!1,hasClearIcon:b,hasRevealToggle:x="always",helpSourceLink:A,helpSourceText:p,id:h,isDisabled:N,isReadonly:m,isRequired:f=!1,isRequiredShown:v,label:j,labelEdge:y,messages:I,placeholder:C,textAlign:T,userAssistanceDensity:k,value:R,onInput:P,onCommit:M},L)=>{const{isDisabled:w,isReadonly:D,labelEdge:O,textAlign:H,userAssistanceDensity:V}=t.useFormContext(),q=null!=N?N:w,B=null!=m?m:D,W=null!=y?y:O,z=null!=T?T:H,G=null!=k?k:V,{bool:J,setFalse:K,setTrue:Q}=E.useToggle(!1),{enabledElementRef:X,focusProps:Y,isFocused:Z,readonlyElementRef:$}=n.useFocusableTextField({isDisabled:q,isReadonly:B,ref:L,onBlurWithin:K}),{hoverProps:ee,isHover:se}=r.useHover({isDisabled:B||q||!1}),{formFieldContext:ie,inputProps:oe,labelProps:ne,textFieldProps:te,userAssistanceProps:ae}=l.useTextField({id:h,isDisabled:q,isFocused:Z,isReadonly:B,labelEdge:W,messages:I,value:R}),le=o.useCallback((()=>{J?K():Q()}),[J]),re=q||"always"!==x?null:s.jsx(Ne,{onPress:le,isRevealed:J}),ue="none"!==W?s.jsx(u.Label,Object.assign({},ne,{children:j})):void 0,ce={label:"none"!==W?ue:void 0,labelEdge:"none"!==W?W:void 0},de="none"===W?j:void 0,Fe=q||B?"efficient"!==G?void 0:s.jsx(d.InlineUserAssistance,Object.assign({userAssistanceDensity:G},ae)):s.jsx(d.InlineUserAssistance,Object.assign({assistiveText:e,helpSourceLink:A,helpSourceText:p,messages:I,isRequiredShown:v,userAssistanceDensity:G},ae));if(B)return s.jsx(a.FormFieldContext.Provider,Object.assign({value:ie},{children:s.jsx(c.ReadonlyTextField,Object.assign({role:"presentation",inlineUserAssistance:Fe},ce,{children:s.jsx(c.ReadonlyTextFieldInput,{ariaLabel:de,ariaLabelledby:ne.id,as:"input",autoFocus:F,elementRef:$,id:h,textAlign:z,type:"password",value:R,hasInsideLabel:void 0!==j&&"inside"===W})}))}));const be=s.jsx(_.TextFieldInput,Object.assign({ariaLabel:de,autoComplete:i,autoFocus:F,hasInsideLabel:void 0!==ue&&"inside"===W,inputRef:X,isRequired:f,onInput:P,onCommit:M,placeholder:C,textAlign:z,value:R,type:J?"text":"password"},oe)),xe=o.useCallback((()=>{var e;null===(e=X.current)||void 0===e||e.focus(),null==P||P({previousValue:R,value:""})}),[P,R]),Ae=U.useClearIcon({clearIcon:s.jsx(S.ClearIcon,{onClick:xe}),display:b,hasValue:ie.hasValue,isFocused:Z,isEnabled:!B&&!q,isHover:se}),pe=g.beforeVNode(re,Ae);return s.jsx(a.FormFieldContext.Provider,Object.assign({value:ie},{children:s.jsx(c.TextField,Object.assign({endContent:pe,inlineUserAssistance:Fe,mainContent:be,onBlur:Y.onfocusout,onFocus:Y.onfocusin},te,ce,ee))}))}));e.InputPassword=me,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_InputPassword.js.map
