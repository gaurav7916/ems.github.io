define(["exports"],(function(e){"use strict";e.addKey=(e,l)=>{if(e.all&&e.deletedKeys.has(l)){const s=new Set(e.deletedKeys);s.delete(l),e={all:!0,deletedKeys:s}}else if(!e.all&&!e.keys.has(l)){const s=new Set(e.keys);s.add(l),e={all:!1,keys:s}}return e},e.containsKey=(e,l)=>null!=e&&(e.all?!e.deletedKeys.has(l):e.keys.has(l)),e.isKeyDefined=e=>null!=e,e.removeKey=(e,l,s)=>{if(e.all&&!e.deletedKeys.has(l)){const s=new Set(e.deletedKeys);s.add(l),e={all:!0,deletedKeys:s}}else if(!e.all&&e.keys.has(l)&&(!s||e.keys.size>1)){const s=new Set(e.keys);s.delete(l),e={all:!1,keys:s}}return e},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_keys.js.map
