(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{291:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a={display:"flex",flexDirection:"column"},o=(r({},{backgroundColor:"rgb(233, 236, 239)",paddingTop:"4px"},{paddingLeft:"15px"}),function(e){return{header:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,paddingLeft:"5px",paddingRight:"5px",borderRadius:"4px"},toolbar:r({padding:"0 8px"},e.mixins.toolbar)}})},301:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(385))},302:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(386))},303:function(e,t,n){"use strict";var r=n(0),a={transition:"background-color 1s"};t.a=function(e){var t=r.useState(!1),n=t[0],o=t[1],c=r.useRef(null),i=r.useRef(null);return r.useEffect(function(){if(!i.current)if(n&&c.current){c.current.style.borderRadius="5px";var t=e.highlightBackgroundColour||"#9b34ee",r=c.current.style.backgroundColor;c.current.style.backgroundColor=t,i.current=setTimeout(function(){c.current&&(c.current.style.backgroundColor=r),i.current=null},1e3)}else o(!0)},[e.text]),r.createElement("span",{style:a,ref:c},e.text)}},310:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(415))},315:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(413))},347:function(e,t,n){"use strict";var r,a,o,c,i,l=n(404),u=function(e,t){window.subscriptions&&window.subscriptions.publish(e,t)},s=function(e,t){window.subscriptions&&window.subscriptions.publish(e,t)};n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),function(e){e[e.AllUpdates=0]="AllUpdates",e[e.Scorecard=1]="Scorecard"}(c||(c={})),function(e){e[e.MatchIds=0]="MatchIds",e[e.MatchId=1]="MatchId",e[e.MatchUpdates=2]="MatchUpdates",e[e.NewMatch=3]="NewMatch",e[e.ScorecardUpdate=4]="ScorecardUpdate"}(i||(i={}));var d=((r={})[c.AllUpdates]="/matchupdates",r[c.Scorecard]="/scorecards",r),f=((a={})[c.AllUpdates]="matchids",a[c.Scorecard]="matchid",a),m=((o={})[i.MatchUpdates]="matchupdates",o[i.NewMatch]="newmatch",o[i.ScorecardUpdate]="scorecardupdate",o);t.c=function(e,t){return function(n,r){var a=e.socketio?function(e){var t=l(e);return t.on("connect",function(){return u("connected")}),t.on("disconnect",function(e){"io client disconnect"!==e&&u("disconnected")}),t.on("connect_error",function(){return u("disconnected")}),t}(""+e.url+d[t]):function(e){var t={},n=new WebSocket(e);n.onopen=function(){return s("connected")},n.onmessage=function(e){console.log("socket data",e);var n=JSON.parse(e.data),r=t[n.action];r&&r(n.updates)};return{emit:function(e,t){var r;n.readyState===n.OPEN?n.send(JSON.stringify(((r={action:e})[e]=t,r))):n.onopen=function(){var r;s("connected"),n.send(JSON.stringify(((r={action:e})[e]=t,r)))}},disconnect:function(){n&&n.close()},on:function(e,n){console.log(e),t[e]=n}}}(e.url),o=function(){return a.emit(f[t],n())};return a.on("reconnect",o),r.forEach(function(e){var t=e.event,n=e.action,r=e.resubscribe;return a.on(m[t],function(e){n(e),r&&o()})}),o(),function(){return a.disconnect()}}}},385:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n(3)),o=r(n(4)),c=r(n(0)),i=(r(n(2)),r(n(9))),l=r(n(32)),u=r(n(6)),s={root:{overflow:"hidden"}};function d(e){var t=e.classes,n=e.className,r=e.raised,u=(0,o.default)(e,["classes","className","raised"]);return c.default.createElement(l.default,(0,a.default)({className:(0,i.default)(t.root,n),elevation:r?8:1},u))}t.styles=s,d.defaultProps={raised:!1};var f=(0,u.default)(s,{name:"MuiCard"})(d);t.default=f},386:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n(3)),o=r(n(4)),c=r(n(0)),i=(r(n(2)),r(n(9))),l=(n(8),r(n(6))),u={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,n=e.className,r=e.component,l=(0,o.default)(e,["classes","className","component"]);return c.default.createElement(r,(0,a.default)({className:(0,i.default)(t.root,n)},l))}t.styles=u,s.defaultProps={component:"div"};var d=(0,l.default)(u,{name:"MuiCardContent"})(s);t.default=d},398:function(e,t,n){"use strict";t.a=function(e){var t;return new Date(e)<((t=new Date).setDate(t.getDate()-6),t)}},399:function(e,t,n){"use strict";var r=n(0),a=n(315),o=n.n(a);t.a=function(){return r.createElement("div",{style:{width:"100%",textAlign:"center"}},r.createElement(o.a,{size:50}))}},402:function(e,t,n){"use strict";t.a=function(e){var t,n,r;return{rootStyle:(t={marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},t[e.breakpoints.up(1100+3*e.spacing.unit*2)]={width:1100,marginLeft:"auto",marginRight:"auto"},t),paperStyle:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,marginBottom:4*e.spacing.unit},mainContentStyle:(n={padding:6*e.spacing.unit+"px"},n[e.breakpoints.up("md")]={paddingRight:0},n),toolbar:e.mixins.toolbar,logoStyle:{maxHeight:"200px",margin:"30px"},linkStyle:{color:e.palette.primary.contrastText},cardStyle:{display:"flex"},cardDetailsStyle:{flex:1},headerStyle:(r={width:"100%",padding:2*e.spacing.unit+"px"},r[e.breakpoints.up("md")]={paddingRight:0},r),addButton:{marginRight:e.spacing.unit}}}},403:function(e,t,n){"use strict";var r=n(0),a=n(347),o=n(18),c=n(82),i=n(79),l=n(75),u=n(398),s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function c(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,i)}l((r=r.apply(e,t||[])).next())})},f=function(e,t){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};t.a=function(e,t){var n=Object(c.a)(Object(i.a)(3,1e3)),m=Object(a.c)(Object({url:"https://cric-scorebook.herokuapp.com",socketio:!0}),a.b.AllUpdates),p=r.useState(Object(l.a)(localStorage).getMatch())[0],h=r.useState([]),v=h[0],y=h[1],g=r.useState(!0),b=g[0],E=g[1],x=r.useState([]),w=x[0],k=x[1],S=r.useState(void 0),O=S[0],M=S[1],P=r.useRef(void 0),j=r.useRef(void 0),C=function(e){return void 0===t?e:function(e,t){return e.slice().sort(function(e,n){return e.user===t?-1:n.user===t?1:0})}(e,t.id)},N=function(e){P.current=m(function(){return e.map(function(e){return e.id})},[{event:a.a.MatchUpdates,action:k},{event:a.a.NewMatch,action:M,resubscribe:!0}])},T=function(){j.current&&(clearTimeout(j.current),j.current=void 0)},_=function(e,n){var r=function(e){return!e||e.match.complete?void 0:{id:e.match.id,date:e.match.date,user:e.match.user,homeTeam:e.match.homeTeam.name,awayTeam:e.match.awayTeam.name,status:e.match.status,version:e.version,lastEvent:e.lastEvent}}(p);if(!r)return e;if(!(r&&(void 0===r.user||void 0!==t&&t.id===r.user)&&!Object(u.a)(r.date)&&(void 0===r.id||n||!!e.find(function(e){return e.id===r.id}))))return e;var a=e.find(function(e){return e.id===r.id});return a&&a.version>r.version?e:e.filter(function(e){return e!==a}).concat(r)},D=function(){return d(void 0,void 0,void 0,function(){var e;return f(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),T(),E(!0),[4,n.getInProgressMatches()];case 1:return e=t.sent(),y(C(_(e))),E(!1),N(e),[3,3];case 2:return t.sent(),y(C(_([],!0))),E(!1),A(),[3,3];case 3:return[2]}})})},A=function(){j.current=setTimeout(D,6e4)};return r.useEffect(function(){y(v.map(function(e){var t=w.find(function(t){return t.id===e.id});return void 0===t?e:s({},e,{status:t.status,lastEvent:t.lastEvent})}))},[w]),r.useEffect(function(){if(O){P.current&&P.current();var e=v.concat([O]);y(e),N(e.map(function(e){return e}))}},[O]),r.useEffect(function(){return e===o.b?D():(E(!1),y(C(_([],!0))),A()),function(){P.current&&P.current()}},[e]),r.useEffect(function(){return T},[]),[v,b,function(e){return d(void 0,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return p&&p.match.id===e&&Object(l.a)(localStorage).removeMatch(),e?[4,n.removeMatch(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return y(v.filter(function(t){return t.id!==e})),[2]}})})}]}},410:function(e,t){},411:function(e,t,n){"use strict";var r=n(0),a=n(80),o=n.n(a),c=n(60),i=n.n(c),l=n(59),u=n.n(l),s=n(24),d=n.n(s),f=n(412),m=n.n(f),p=n(140),h=n.n(p),v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y={backgroundColor:h.a[700]};t.a=function(e){var t=e.message,n=e.onClose;return r.createElement(o.a,{open:!0,TransitionComponent:function(e){return r.createElement(u.a,v({direction:"down"},e))},anchorOrigin:{vertical:"bottom",horizontal:"center"}},r.createElement(i.a,{style:y,message:t,action:[r.createElement(d.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n},r.createElement(m.a,null))]}))}},412:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(33)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=o},413:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n(3)),o=r(n(7)),c=r(n(4)),i=r(n(0)),l=(r(n(2)),r(n(9))),u=(n(8),r(n(6))),s=n(17),d=44;function f(e){var t,n,r;return t=e,n=0,r=1,e=(Math.min(Math.max(n,t),r)-n)/(r-n),e=(e-=1)*e*e+1}var m=function(e){return{root:{display:"inline-block",lineHeight:1},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"mui-progress-circular-rotate 1.4s linear infinite",animationName:"$mui-progress-circular-rotate"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"mui-progress-circular-dash 1.4s ease-in-out infinite",animationName:"$mui-progress-circular-dash",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}};function p(e){var t,n,r,u=e.classes,m=e.className,p=e.color,h=e.disableShrink,v=e.size,y=e.style,g=e.thickness,b=e.value,E=e.variant,x=(0,c.default)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},k={},S={};if("determinate"===E||"static"===E){var O=2*Math.PI*((d-g)/2);w.strokeDasharray=O.toFixed(3),S["aria-valuenow"]=Math.round(b),"static"===E?(w.strokeDashoffset="".concat(((100-b)/100*O).toFixed(3),"px"),k.transform="rotate(-90deg)"):(w.strokeDashoffset="".concat((r=(100-b)/100,r*r*O).toFixed(3),"px"),k.transform="rotate(".concat((270*f(b/70)).toFixed(3),"deg)"))}return i.default.createElement("div",(0,a.default)({className:(0,l.default)(u.root,(t={},(0,o.default)(t,u["color".concat((0,s.capitalize)(p))],"inherit"!==p),(0,o.default)(t,u.indeterminate,"indeterminate"===E),(0,o.default)(t,u.static,"static"===E),t),m),style:(0,a.default)({width:v,height:v},k,y),role:"progressbar"},S,x),i.default.createElement("svg",{className:u.svg,viewBox:"".concat(d/2," ").concat(d/2," ").concat(d," ").concat(d)},i.default.createElement("circle",{className:(0,l.default)(u.circle,(n={},(0,o.default)(n,u.circleIndeterminate,"indeterminate"===E),(0,o.default)(n,u.circleStatic,"static"===E),(0,o.default)(n,u.circleDisableShrink,h),n)),style:w,cx:d,cy:d,r:(d-g)/2,fill:"none",strokeWidth:g})))}t.styles=m,p.defaultProps={color:"primary",disableShrink:!1,size:40,thickness:3.6,value:0,variant:"indeterminate"};var h=(0,u.default)(m,{name:"MuiCircularProgress",flip:!1})(p);t.default=h},415:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n(3)),o=r(n(7)),c=r(n(4)),i=r(n(0)),l=(r(n(2)),r(n(9))),u=r(n(6)),s=n(77);n(21);var d={root:{display:"flex",alignItems:"center",boxSizing:"border-box",padding:"8px 4px"},disableActionSpacing:{padding:8},action:{margin:"0 4px"}};function f(e){var t=e.disableActionSpacing,n=e.children,r=e.classes,u=e.className,d=(0,c.default)(e,["disableActionSpacing","children","classes","className"]);return i.default.createElement("div",(0,a.default)({className:(0,l.default)(r.root,(0,o.default)({},r.disableActionSpacing,t),u)},d),t?n:(0,s.cloneChildrenWithClassName)(n,r.action))}t.styles=d,f.defaultProps={disableActionSpacing:!1};var m=(0,u.default)(d,{name:"MuiCardActions"})(f);t.default=m},499:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(33)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Add");t.default=o},568:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(21),o=n.n(a),c=n(34),i=n(499),l=n.n(i),u=n(93),s=n(40),d=n.n(s),f=n(6),m=n.n(f),p=n(15),h=n.n(p),v=n(301),y=n.n(v),g=n(302),b=n.n(g),E=n(310),x=n.n(E),w=n(81),k=n.n(w),S=n(74),O=n.n(S),M=n(90),P=n(303),j=n(291),C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},N={marginTop:"8px",marginBottom:"8px"},T={flex:1,marginBottom:"12px"},_=function(e){return r.createElement(d.a,{item:!0,xs:12,sm:6,md:4},r.createElement(k.a,{in:!0,timeout:1e3},r.createElement(y.a,{style:{display:"flex",height:"100%"}},r.createElement("div",{style:C({},j.a,{flex:1})},r.createElement(b.a,{style:C({},j.a,{flex:1})},r.createElement("div",{style:T},r.createElement(h.a,{variant:"subtitle1",color:"textSecondary"},M(e.match.date,"dd-mmm-yyyy")),r.createElement(O.a,{style:N}),r.createElement(h.a,{component:"h2",variant:"h5",color:"primary"},e.match.homeTeam+" v "+e.match.awayTeam)),r.createElement("div",null,r.createElement(h.a,{component:"h2",variant:"h6"},r.createElement(P.a,{text:e.match.status})),r.createElement(h.a,{component:"h2",variant:"body1",color:"textSecondary",style:{marginTop:"16px"}},r.createElement(P.a,{text:e.match.lastEvent})))),r.createElement(x.a,null,r.createElement(c.a,{title:"View the match scorecard"},r.createElement(o.a,{size:"small",color:"primary",onClick:e.showScorecard},"Scorecard")),e.match.user===e.currentUser&&r.createElement(r.Fragment,null,r.createElement(c.a,{title:"Continue scoring this match"},r.createElement(o.a,{size:"small",color:"primary",onClick:e.continueScoring},"Continue")),r.createElement(c.a,{title:"Permanently remove this match"},r.createElement(o.a,{size:"small",color:"secondary",onClick:e.removeMatch},"Remove"))))))))},D=n(402),A=n(411),R=n(72),U=n.n(R),z=n(73),F=n.n(z),I=n(56),L=n.n(I),B=n(19),H=n.n(B),J=n(399),W=function(e){return r.createElement("div",null,r.createElement(U.a,{open:!0,"aria-labelledby":"loading-title"},r.createElement(F.a,{id:"loading-title"},"Loading"),r.createElement(L.a,null,r.createElement(H.a,null,e.message)),r.createElement(L.a,null,r.createElement(J.a,null))))},Y=n(57),G=n.n(Y),V={textAlign:"center"},$=function(e){var t=e.match,n=e.onYes,a=e.onNo;return r.createElement("div",null,r.createElement(U.a,{open:!0,"aria-labelledby":"delete-confirmation-title"},r.createElement(F.a,{id:"delete-confirmation-title"},"Remove match"),r.createElement(L.a,null,r.createElement(H.a,{color:"textSecondary",style:V},M(t.date,"dd-mmm-yyyy")),r.createElement(H.a,{color:"textPrimary",style:V},t.homeTeam+" v "+t.awayTeam),r.createElement(H.a,{color:"textPrimary"},"Are you sure you want to PERMANENTLY remove this match?")),r.createElement(G.a,null,r.createElement(o.a,{onClick:n,color:"primary",autoFocus:!0},"Yes, get rid of it"),r.createElement(o.a,{onClick:a,color:"primary"},"No"))))},q=n(403),K=n(18),Q=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function c(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,i)}l((r=r.apply(e,t||[])).next())})},X=function(e,t){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},Z=m()(D.a)(function(e){var t,n=r.useState(!1),a=n[0],o=n[1],c=r.useState(!1),i=c[0],l=c[1],u=r.useState(!1),s=u[0],f=u[1],m=r.useState(void 0),p=m[0],v=m[1],y=Object(q.a)(e.status,e.userProfile),g=y[0],b=y[1],E=y[2],x=function(t){return function(){return Q(void 0,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t?(o(!0),l(!1),[4,e.fetchMatch(t)]):[3,2];case 1:n.sent(),o(!1),n.label=2;case 2:return e.history.push("/match/inprogress"),[3,4];case 3:return n.sent(),o(!1),l(!0),[3,4];case 4:return[2]}})})}},w=function(e){return function(){f(!1),v(g.find(function(t){return t.id===e}))}},k=function(){f(!1),v(void 0)};return r.createElement(r.Fragment,null,r.createElement("div",{className:e.classes.rootStyle},r.createElement("div",{className:e.classes.toolbar}),b&&r.createElement(J.a,null),!b&&0===g.length&&r.createElement(h.a,{variant:"h5",color:"primary"},e.status===K.b?"There are no matches currently in progress":"Unable test to connect to the live match server"),!b&&r.createElement(d.a,{container:!0,spacing:40},g.map(function(t){return r.createElement(_,{key:t.id||"OFFLINE",match:t,showScorecard:(n=t.id,function(){return e.history.push("/scorecard"+(n?"/"+n:""))}),continueScoring:x(t.id),removeMatch:w(t.id),currentUser:e.userProfile?e.userProfile.id:void 0});var n}))),i&&r.createElement(A.a,{message:"There was an error reading the match.  Please try again.",onClose:function(){return l(!1)}}),s&&r.createElement(A.a,{message:"There was an error removing the match.  Please try again.",onClose:function(){return f(!1)}}),a&&r.createElement(W,{message:"Fetching match to continue scoring..."}),p&&r.createElement($,{match:p,onYes:(t=p.id,function(){return Q(void 0,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:k(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,E(t)];case 2:return n.sent(),[3,4];case 3:return e=n.sent(),f(!0),console.error(e),[3,4];case 4:return[2]}})})}),onNo:k}))}),ee=n(75),te=n(92),ne=n(41),re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ae=function(e){return r.createElement(c.a,{title:"Score new match"},r.createElement(o.a,{"aria-label":"create new match",variant:"fab",color:"secondary",onClick:function(){return e.history.push("/match/create")}},r.createElement(l.a,null)))};t.default=Object(u.a)(function(e){var t=r.useContext(ne.a).setOptions;return r.useEffect(function(){return t({stayWhenLoggingOut:!0,title:"Matches",button:ae})},[]),r.createElement(Z,re({},e,{fetchMatch:Object(te.a)(e.matchApi,Object(ee.a)(localStorage))}))})}}]);