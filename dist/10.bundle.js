(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(393))},296:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n=function(e,t,r){return function(n){var o=function(e,t,r){return function(n){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n.apply(void 0,o);var l=t();e(a({},l,{match:a({},l.match,{user:r()})}))}}}(e,t,r);if("function"==typeof n)return o(n);for(var i={},l=0,s=Object.keys(n);l<s.length;l++){var u=s[l];i[u]=o(n[u])}return i}}},297:function(e,t,r){"use strict";var a=r(75),n=r(82),o=r(79),i=r(83),l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function l(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}s((a=a.apply(e,t||[])).next())})},u=function(e,t){var r,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},c=function(e,t,r){var a=void 0,n=!1;return function(o){var i=function(){return s(void 0,void 0,void 0,function(){var t,r;return u(this,function(n){switch(n.label){case 0:return t=l({},a),a=void 0,[4,e.sendMatch(t)];case 1:return void 0!==(r=n.sent()).id&&r.id!==t.match.id&&o(r.id),void 0!==a&&i(),[2]}})})};return{storeMatch:function(e){return s(void 0,void 0,void 0,function(){return u(this,function(o){switch(o.label){case 0:if(!t()||!r())return[2];if(a=function(e){return{match:l({},e.match),currentBatterIndex:e.currentBatterIndex,currentBowlerIndex:e.currentBowlerIndex,version:e.version,lastEvent:e.lastEvent}}(e),n)return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),n=!0,[4,i()];case 2:case 3:return o.sent(),[3,4];case 4:n=!1,o.label=5;case 5:return[2]}})})}}}}(Object(n.a)(Object(o.a)(3,1e3)),function(){return navigator.onLine},i.default.isAuthenticated),d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},f=function(e){return function(t){return e.forEach(function(e){return e(t)})}},m=function(e){return function(t){e(t);var r=Object(a.a)(localStorage).getMatch();void 0!==r&&Object(a.a)(localStorage).storeMatch(d({},r,{match:d({},r.match,{id:t})}))}};t.a=function(e,t){return f(e?[Object(a.a)(localStorage).storeMatch,c(m(t)).storeMatch]:[Object(a.a)(localStorage).storeMatch])}},299:function(e,t,r){"use strict";var a=r(0),n=r(15),o=r.n(n),i=r(76),l=r.n(i),s=r(21),u=r.n(s),c=r(311),d=r.n(c),f=r(34);t.a=function(e){var t=e.heading,r=e.save,n=e.canSave,i=e.children;return a.createElement(a.Fragment,null,a.createElement(l.a,{disableGutters:!0},a.createElement(o.a,{variant:"h4",color:"inherit",style:{flexGrow:1}},t),a.createElement(f.a,{title:n()?"Click to save":"Must be filled in before you can save"},a.createElement("span",null,a.createElement(u.a,{"aria-label":"complete",variant:"fab",color:"primary",onClick:r,disabled:!n()},a.createElement(d.a,null))))),i)}},300:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(391))},307:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(392))},317:function(e,t,r){"use strict";var a=r(0),n=r(32),o=r.n(n),i=r(40),l=r.n(i),s=r(55),u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};t.a=Object(s.withStyles)(function(e){return{root:u({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,margin:"20px"})}})(function(e){var t=e.classes,r=e.children;return a.createElement(o.a,{className:t.root},a.createElement(l.a,{container:!0},a.createElement(l.a,{item:!0,sm:1,md:2}),a.createElement(l.a,{item:!0,xs:12,sm:10,md:8},r)))})},332:function(e,t,r){"use strict";var a=r(0),n=r(15),o=r.n(n),i=r(55),l=r(333),s=r.n(l),u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c={margin:"4px",textAlign:"center"},d=function(e){return{warning:{backgroundColor:"transparent",border:"1px solid "+e.palette.primary.main,color:e.palette.primary.main,paddingLeft:"5px",paddingRight:"5px",borderRadius:"4px"}}},f={marginRight:"4px",marginBottom:"-6px"};t.a=function(e){return Object(i.withStyles)(d)(function(t){return a.createElement(a.Fragment,null,!t.isAuthenticated&&a.createElement("div",{style:c},a.createElement("div",{className:t.classes.warning},a.createElement("span",null,a.createElement(o.a,{color:"inherit",variant:"body2"},a.createElement(s.a,{style:f}),"You are not currently logged in, you can continue to score but the match will not be stored online or appear in live updates")))),a.createElement(e,u({},t)))})}},333:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(33)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})),"Info");t.default=o},388:function(e,t,r){"use strict";t.a=function(e,t,r){void 0!==e?void 0!==e.match.toss?e.match.complete?r.pathname.match(new RegExp("/scorecard","i"))||t.replace("/scorecard"):r.pathname.match(new RegExp("/match/inprogress","i"))||t.replace("/match/inprogress"):r.pathname.match(new RegExp("/match/start","i"))||t.replace("/match/start"):r.pathname.match(new RegExp("/match/create","i"))||t.replace("/match/create")}},391:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(3)),o=a(r(7)),i=a(r(4)),l=a(r(0)),s=(a(r(2)),a(r(9))),u=a(r(312)),c=a(r(294)),d=a(r(6)),f=a(r(307)),m=function(e){return{root:{transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 17px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}};function p(e){var t,r=e.children,a=e.classes,c=e.className,d=e.disableAnimation,m=e.FormLabelClasses,p=(e.margin,e.muiFormControl),h=e.shrink,v=(e.variant,(0,i.default)(e,["children","classes","className","disableAnimation","FormLabelClasses","margin","muiFormControl","shrink","variant"])),g=h;void 0===g&&p&&(g=p.filled||p.focused||p.adornedStart);var b=(0,u.default)({props:e,muiFormControl:p,states:["margin","variant"]}),y=(0,s.default)(a.root,(t={},(0,o.default)(t,a.formControl,p),(0,o.default)(t,a.animated,!d),(0,o.default)(t,a.shrink,g),(0,o.default)(t,a.marginDense,"dense"===b.margin),(0,o.default)(t,a.filled,"filled"===b.variant),(0,o.default)(t,a.outlined,"outlined"===b.variant),t),c);return l.default.createElement(f.default,(0,n.default)({"data-shrink":g,className:y,classes:(0,n.default)({focused:a.focused,disabled:a.disabled,error:a.error,required:a.required},m)},v),r)}t.styles=m,p.defaultProps={disableAnimation:!1};var h=(0,d.default)(m,{name:"MuiInputLabel"})((0,c.default)(p));t.default=h},392:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(3)),o=a(r(7)),i=a(r(4)),l=a(r(0)),s=(a(r(2)),a(r(9))),u=(r(8),a(r(312))),c=a(r(294)),d=a(r(6)),f=function(e){return{root:{fontFamily:e.typography.fontFamily,color:e.palette.text.secondary,fontSize:e.typography.pxToRem(16),lineHeight:1,padding:0,"&$focused":{color:e.palette.primary["light"===e.palette.type?"dark":"light"]},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}};function m(e){var t,r=e.children,a=e.classes,c=e.className,d=e.component,f=(e.disabled,e.error,e.filled,e.focused,e.muiFormControl),m=(e.required,(0,i.default)(e,["children","classes","className","component","disabled","error","filled","focused","muiFormControl","required"])),p=(0,u.default)({props:e,muiFormControl:f,states:["required","focused","disabled","error","filled"]});return l.default.createElement(d,(0,n.default)({className:(0,s.default)(a.root,(t={},(0,o.default)(t,a.disabled,p.disabled),(0,o.default)(t,a.error,p.error),(0,o.default)(t,a.filled,p.filled),(0,o.default)(t,a.focused,p.focused),(0,o.default)(t,a.required,p.required),t),c)},m),r,p.required&&l.default.createElement("span",{className:(0,s.default)(a.asterisk,(0,o.default)({},a.error,p.error))}," *"))}t.styles=f,m.defaultProps={component:"label"};var p=(0,d.default)(f,{name:"MuiFormLabel"})((0,c.default)(m));t.default=p},393:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(3)),o=a(r(7)),i=a(r(4)),l=a(r(10)),s=a(r(12)),u=a(r(13)),c=a(r(11)),d=a(r(14)),f=a(r(0)),m=(a(r(2)),a(r(9))),p=(r(8),r(390)),h=a(r(6)),v=r(17),g=r(77),b=a(r(389)),y={root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}};t.styles=y;var E=function(e){function t(e){var r;(0,l.default)(this,t),(r=(0,s.default)(this,(0,u.default)(t).call(this))).handleFocus=function(){r.setState(function(e){return e.focused?null:{focused:!0}})},r.handleBlur=function(){r.setState(function(e){return e.focused?{focused:!1}:null})},r.handleDirty=function(){r.state.filled||r.setState({filled:!0})},r.handleClean=function(){r.state.filled&&r.setState({filled:!1})},r.state={adornedStart:!1,filled:!1,focused:!1};var a=e.children;return a&&f.default.Children.forEach(a,function(e){if((0,g.isMuiElement)(e,["Input","Select"])){(0,p.isFilled)(e.props,!0)&&(r.state.filled=!0);var t=(0,g.isMuiElement)(e,["Select"])?e.props.input:e;t&&(0,p.isAdornedStart)(t.props)&&(r.state.adornedStart=!0)}}),r}return(0,d.default)(t,e),(0,c.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.disabled&&t.focused?{focused:!1}:null}}]),(0,c.default)(t,[{key:"render",value:function(){var e,t=this.props,r=t.classes,a=t.className,l=t.component,s=t.disabled,u=t.error,c=t.fullWidth,d=t.margin,p=t.required,h=t.variant,g=(0,i.default)(t,["classes","className","component","disabled","error","fullWidth","margin","required","variant"]),y=this.state,E={adornedStart:y.adornedStart,disabled:s,error:u,filled:y.filled,focused:y.focused,margin:d,onBlur:this.handleBlur,onEmpty:this.handleClean,onFilled:this.handleDirty,onFocus:this.handleFocus,required:p,variant:h};return f.default.createElement(b.default.Provider,{value:E},f.default.createElement(l,(0,n.default)({className:(0,m.default)(r.root,(e={},(0,o.default)(e,r["margin".concat((0,v.capitalize)(d))],"none"!==d),(0,o.default)(e,r.fullWidth,c),e),a)},g)))}}]),t}(f.default.Component);E.defaultProps={component:"div",disabled:!1,error:!1,fullWidth:!1,margin:"none",required:!1,variant:"standard"};var x=(0,h.default)(y,{name:"MuiFormControl"})(E);t.default=x},418:function(e,t,r){"use strict";var a=r(0),n=r(388),o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};t.a=function(e){return function(t){return a.useEffect(function(){Object(n.a)(t.inProgressMatchStore,t.history,t.location)},[]),void 0===t.inProgressMatchStore||void 0===t.inProgressMatchStore.match?null:a.createElement(e,o({},t))}}},570:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(298),o=r(317),i=r(295),l=r.n(i),s=r(300),u=r.n(s),c=r(292),d=r.n(c),f=r(290),m=r.n(f),p=r(299),h=r(288),v={marginTop:"20px"},g=function(e){var t=a.useState(h.h.HomeTeam),r=t[0],n=t[1],o=a.useState(h.h.HomeTeam),i=o[0],s=o[1];return a.createElement(p.a,{heading:"Toss",save:function(){return e.startMatch(r,i)},canSave:function(){return!0}},a.createElement(l.a,{fullWidth:!0,style:v},a.createElement(u.a,{htmlFor:"tossWonBy"},"Toss won by"),a.createElement(d.a,{inputProps:{id:"matchType"},value:r,onChange:function(e){return n(Number(e.target.value))}},a.createElement(m.a,{value:h.h.HomeTeam},e.homeTeam.name),a.createElement(m.a,{value:h.h.AwayTeam},e.awayTeam.name))),a.createElement(l.a,{fullWidth:!0,style:v},a.createElement(u.a,{htmlFor:"battingFirst"},"Batting first"),a.createElement(d.a,{inputProps:{id:"battingFirst"},value:i,onChange:function(e){return s(Number(e.target.value))}},a.createElement(m.a,{value:h.h.HomeTeam},e.homeTeam.name),a.createElement(m.a,{value:h.h.AwayTeam},e.awayTeam.name))))},b=r(296),y=function(e,t,r,a){return Object(b.a)(t,function(){return e},a)(function(t,a){e.startMatch(t,a),r()})},E=function(e){var t=e.inProgress,r=e.storeMatch,n=e.history,i=e.userProfile;return a.createElement(o.a,null,a.createElement(g,{homeTeam:t.match.homeTeam,awayTeam:t.match.awayTeam,startMatch:y(t,r,function(){return n.replace("/match/inprogress")},function(){return i.id})}))},x=r(297),O=r(418),w=r(309),j=r(41),M=r(332),P=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},S=Object(M.a)(function(e){var t=a.useContext(j.a).setOptions;return a.useEffect(function(){return t({showMatchesLink:!0})},[]),a.createElement(E,P({inProgress:e.inProgressMatchStore,storeMatch:Object(x.a)(e.isAuthenticated,e.inProgressMatchStore.setId)},e))});t.default=Object(w.a)()(Object(n.c)("inProgressMatchStore")(Object(O.a)(S)))}}]);