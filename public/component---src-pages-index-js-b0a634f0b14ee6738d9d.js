(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+8dI":function(e,t,n){e.exports={contact:"contact-module--contact--3UxoS",contactWrapper:"contact-module--contact-wrapper--2c77R",contactWrapperText:"contact-module--contact-wrapper-text--2lpf5"}},"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function a(e,t){var n=t.distance,i=t.left,a=t.right,o=t.up,s=t.down,r=t.top,c=t.bottom,u=t.big,d=t.mirror,h=t.opposite,f=(n?n.toString():0)+((i?1:0)|(a?2:0)|(r||s?4:0)|(c||o?8:0)|(d?16:0)|(h?32:0)|(e?64:0)|(u?128:0));if(p.hasOwnProperty(f))return p[f];var m=i||a||o||s||r||c,v=void 0,b=void 0;if(m){if(!d!=!(e&&h)){var y=[a,i,c,r,s,o];i=y[0],a=y[1],r=y[2],c=y[3],o=y[4],s=y[5]}var w=n||(u?"2000px":"100%");v=i?"-"+w:a?w:"0",b=s||r?"-"+w:o||c?w:"0"}return p[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),s=e.timeout,r=e.duration,c=void 0===r?l.defaults.duration:r,d=e.delay,p=void 0===d?l.defaults.delay:d,h=e.count,f=void 0===h?l.defaults.count:h,m=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===s?c:s,delay:p,forever:o,count:f,style:{animationFillMode:"both"},reverse:m.left};return t?(0,u.default)(m,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var s,r=n("17x9"),l=n("ar19"),c=n("eH+L"),u=(s=c)&&s.__esModule?s:{default:s},d={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},p={};o.propTypes=d,t.default=o,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},u=n("17x9"),d=n("ar19"),p=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),h={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:p.isRequired,outEffect:(0,u.oneOfType)([p,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,s=n.delay,r=n.duration;if(!a){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),s+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,s=void 0;if(t.collapseOnly)o=n.duration/3,s=n.delay;else{var r=i>>2,l=r>>1;o=r,s=n.delay+(this.isOn?0:i-r-l),e.style.animationDuration=i-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,r=i.reverse,l=n.length,u=2*o;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),o=u/2);var p=r?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(r?p--:p++,0,l,o,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,r=i.children,l=this.props.disabled?o:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(n=this.cascade(r),u=s({},a,{opacity:1})):u=this.props.disabled?a:s({},a,this.state.style);var p=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?n||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},GGmB:function(e,t,n){e.exports={about:"about-module--about--29fvI",wrapperImage:"about-module--wrapper-image--1hNew",wrapperInfo:"about-module--wrapper-info--3L51J",wrapperInfoText:"about-module--wrapper-info-text--3MxHf"}},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("KQm4"),a=n("q1tI"),o=n.n(a),s=(n("q4sD"),n("L6Je")),r=n("vrFN"),l=n("/eHF"),c=n.n(l),u=n("oqc9"),d=n("wx14"),p=n("zLVn"),h=n("TSYQ"),f=n.n(h),m=n("vUet"),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,a=e.as,s=void 0===a?"div":a,r=e.className,l=Object(p.a)(e,["bsPrefix","fluid","as","className"]),c=Object(m.a)(n,"container"),u="string"==typeof i?"-"+i:"-fluid";return o.a.createElement(s,Object(d.a)({ref:t},l,{className:f()(r,i?""+c+u:c)}))}));v.displayName="Container",v.defaultProps={fluid:!1};var b=v,y=n("c5dY"),w=n.n(y),g=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(a.useState)(!1),s=i[0],r=i[1];return Object(a.useEffect)((function(){window.innerWidth>769?(n(!0),r(!1)):(r(!0),n(!1))}),[]),o.a.createElement("section",{id:"hero",className:"jumbotron  "+w.a.herojumbotron,fluid:!0},o.a.createElement(b,null,o.a.createElement(c.a,{left:t,bottom:s,duration:1e3,delay:500,distance:"30px"},o.a.createElement("h1",{className:w.a.herotitle},"Hello!"," ",o.a.createElement("span",{className:w.a.wave,role:"img",alt:"waving hand emoji"}," ","👋"," ")),o.a.createElement("h1",{className:w.a.herotitle},"My name is ",o.a.createElement("span",{className:"text-color-main"},"Kelly Ren"),o.a.createElement("br",null),"I am a full stack Web Developer."," ",o.a.createElement("span",{role:"img",alt:"a developer emoji"}," ","👩🏻‍💻"," "))),o.a.createElement(c.a,{left:t,bottom:s,duration:1e3,delay:1e3,distance:"30px"},o.a.createElement("p",{className:w.a.cta},o.a.createElement("button",{className:"text-color-main cta-btn cta-btn-hero hvr-shutter-out-horizontal"},o.a.createElement(u.Link,{to:"about",smooth:!0,duration:1e3},"Know more"))))))},E=["xl","lg","md","sm","xs"],O=o.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,a=e.noGutters,s=e.as,r=void 0===s?"div":s,l=Object(p.a)(e,["bsPrefix","className","noGutters","as"]),c=Object(m.a)(n,"row"),u=c+"-cols",h=[];return E.forEach((function(e){var t,n=l[e];delete l[e];var i="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+u+i+"-"+t)})),o.a.createElement(r,Object(d.a)({ref:t},l,{className:f.a.apply(void 0,[i,c,a&&"no-gutters"].concat(h))}))}));O.displayName="Row",O.defaultProps={noGutters:!1};var j=O,x=["xl","lg","md","sm","xs"],k=o.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,a=e.as,s=void 0===a?"div":a,r=Object(p.a)(e,["bsPrefix","className","as"]),l=Object(m.a)(n,"col"),c=[],u=[];return x.forEach((function(e){var t,n,i,a=r[e];if(delete r[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,i=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&c.push(!0===t?""+l+s:""+l+s+"-"+t),null!=i&&u.push("order"+s+"-"+i),null!=n&&u.push("offset"+s+"-"+n)})),c.length||c.push(l),o.a.createElement(s,Object(d.a)({},r,{ref:t,className:f.a.apply(void 0,[i].concat(c,u))}))}));k.displayName="Col";var N=k,T=function(e){var t=e.title;return o.a.createElement(c.a,{bottom:!0,duration:1e3,delay:300,distance:"0px"},o.a.createElement("h2",{className:"section-title"},t))},M=n("Wbzz"),R=n("9eSz"),S=n.n(R),P=function(){var e,t,n=Object(M.useStaticQuery)("3029897201");return(null==n||null===(e=n.file)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fixed)?o.a.createElement(S.a,{fixed:n.file.childImageSharp.fixed,placeholderStyle:{visibility:"hidden"},alt:"Profile picture",style:{borderRadius:"50%"}}):o.a.createElement("div",null,"Picture not found")},C=n("GGmB"),I=n.n(C),_=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=Object(a.useState)(!1),s=i[0],r=i[1];return Object(a.useEffect)((function(){window.innerWidth>769?(n(!0),r(!1)):(r(!0),n(!1))}),[]),o.a.createElement("section",{id:"about",className:I.a.about},o.a.createElement(b,null,o.a.createElement(T,{title:"About Me"}),o.a.createElement(j,{className:I.a.aboutWrapper},o.a.createElement(N,{className:I.a.wrapperImage,md:6,sm:12},o.a.createElement(c.a,{bottom:!0,duration:1e3,delay:600,distance:"30px"},o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"23.2px"}},o.a.createElement(P,null)))),o.a.createElement(N,{md:6,sm:12},o.a.createElement(c.a,{left:t,bottom:s,duration:1e3,delay:1e3,distance:"30px"},o.a.createElement("div",{className:I.a.wrapperInfo},o.a.createElement("p",{className:I.a.wrapperInfoText},"After working in Google as a project lead I discovered my passion for programming and went for an intensive full stack bootcamp at Israel Tech Challenge (ITC) and completed a 3 months internship as a full stack developer."),o.a.createElement("p",{className:I.a.wrapperInfoText},"As a project lead I had to connect colleagues cross countries and departments and had a chance to be involved in meaningful projects from seed point to product launch and solve all the problems all during the process."),o.a.createElement("p",{className:I.a.wrapperInfoText},"As a developer I wish to use my global experience and creative thinking to give myself an added value in the industry."),o.a.createElement("span",{className:"d-flex mt-3"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn hvr-shutter-out-horizontal cta-btn-resume",href:"./"},"Resume"))))))))},L=n("+8dI"),H=n.n(L),A=function(){return o.a.createElement("section",{id:"contact",className:H.a.contact},o.a.createElement(b,null,o.a.createElement(T,{title:"Contact"}),o.a.createElement(c.a,{bottom:!0,duration:1e3,delay:800,distance:"30px"},o.a.createElement("div",{className:H.a.contactWrapper},o.a.createElement("p",{className:H.a.contactWrapperText},"'Would you like to work with me? Awesome!'"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn hvr-shutter-out-horizontal cta-btn-resume",href:"mailto:renkelei.kelly@gmail.com"},"Let's talk")))))},q=n("IP2g"),F=n("wHSu"),W=n("c+OE"),z=n.n(W),D=n("gP7e"),V=n.n(D),G=Object(a.createContext)(),Y=G.Provider,B=(G.Consumer,G),X=function(e){var t=e.filename,n=e.alt;return o.a.createElement(M.StaticQuery,{query:"2170319851",render:function(e){var i=e.allImageSharp.edges.find((function(e){return e.node.fluid.originalName===t}));if(!i)return null;var a=i.node.fluid;return o.a.createElement(S.a,{alt:n,fluid:a})}})},J=function(){var e=Object(a.useContext)(B).projects,t=Object(a.useState)(!1),n=t[0],i=t[1],s=Object(a.useState)(!1),r=s[0],l=s[1];return Object(a.useEffect)((function(){window.innerWidth>769?(i(!0),l(!1)):(l(!0),i(!1))}),[]),o.a.createElement("section",{id:"projects",className:V.a.projects},o.a.createElement(b,null,o.a.createElement(T,{title:"Projects"}),e.map((function(e){var t=e.title,i=e.info,a=e.info2,s=e.url,l=e.repo,u=e.img,d=e.id;return o.a.createElement(j,{key:d,className:V.a.projectContainer},o.a.createElement(N,{lg:4,sm:12},o.a.createElement(c.a,{left:n,bottom:r,duration:1e3,delay:500,distance:"30px"},o.a.createElement("div",{className:V.a.projectWrapperText},o.a.createElement("h3",{className:V.a.projectTitle},t),o.a.createElement("p",null,i),o.a.createElement("p",null,a),o.a.createElement("div",{className:V.a.ctaContainer},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn-hero hvr-shutter-out-horizontal",href:s||"#!"},"See Live"),l&&o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main hvr-bob ",href:l},"Source Code",o.a.createElement(q.a,{icon:F.a,className:V.a.codeIcon})))))),o.a.createElement(N,{lg:8,sm:12},o.a.createElement(c.a,{right:n,bottom:r,duration:1e3,delay:1e3,distance:"30px"},o.a.createElement("div",{className:V.a.projectWrapperImage},o.a.createElement("a",{href:s||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},o.a.createElement(z.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},o.a.createElement("div",{"data-tilt":!0,className:"thumbnail"},o.a.createElement(X,{alt:t,filename:u}))))))))}))))},K=(n("Vr40"),n("Q3JZ"));t.default=function(){var e=Object(a.useState)([""]),t=e[0],n=e[1];return Object(a.useEffect)((function(){n(Object(i.a)(K.b))}),[]),o.a.createElement(Y,{value:{projects:t}},o.a.createElement(g,null),o.a.createElement(s.a,null,o.a.createElement(r.a,{title:"Home"}),o.a.createElement(_,null),o.a.createElement(J,null),o.a.createElement(A,null)))}},Vr40:function(e,t,n){},ar19:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),s=(Math.log(a)-o)/(n-t);return Math.exp(o+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=h[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=s=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(c,1500),r||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},"c+OE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("q1tI"),r=(i=s)&&i.__esModule?i:{default:i},l=n("i8i4");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={style:{}};return n.width=null,n.height=null,n.left=null,n.top=null,n.transitionTimeout=null,n.updateCall=null,n.element=null,n.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},n.props.options),n.reverse=n.settings.reverse?-1:1,n.onMouseEnter=n.onMouseEnter.bind(n,n.props.onMouseEnter),n.onMouseMove=n.onMouseMove.bind(n,n.props.onMouseMove),n.onMouseLeave=n.onMouseLeave.bind(n,n.props.onMouseLeave),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.element=(0,l.findDOMNode)(this)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:a({},this.state.style,{willChange:"transform"})})),this.setTransition(),e(t)}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame((function(){e.setState(Object.assign({},e.state,{style:a({},e.state.style,{transform:"perspective("+e.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))}))}},{key:"onMouseMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return t.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}},{key:"setTransition",value:function(){var e=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:a({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout((function(){e.setState(Object.assign({},e.state,{style:a({},e.state.style,{transition:""})}))}),this.settings.speed)}},{key:"onMouseLeave",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.setTransition(),this.settings.reset&&this.reset(),e(t)}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,n=(e.nativeEvent.clientY-this.top)/this.height,i=Math.min(Math.max(t,0),1),a=Math.min(Math.max(n,0),1);return{tiltX:(this.reverse*(this.settings.max/2-i*this.settings.max)).toFixed(2),tiltY:(this.reverse*(a*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*i,percentageY:100*a}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:a({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return r.default.createElement("div",{style:e,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.props.children)}}]),t}(s.Component);t.default=c},c5dY:function(e,t,n){e.exports={herojumbotron:"hero-module--herojumbotron--3qSWJ",herotitle:"hero-module--herotitle--1qg09",cta:"hero-module--cta--vXRK_",wave:"hero-module--wave--3rGP5",waveAnimation:"hero-module--wave-animation--68OBo",hero:"hero-module--hero--m4VNG"}},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,(function(i){return o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n("q1tI")),s=i(n("28nh"));e.exports=t.default},gP7e:function(e,t,n){e.exports={projects:"projects-module--projects--2DKix",ctaBtn:"projects-module--cta-btn--ggM0b",projectContainer:"projects-module--project-container--2dslZ",projectTitle:"projects-module--project-title--1MoFJ",projectWrapperText:"projects-module--project-wrapper-text--3w87b",ctaContainer:"projects-module--cta-container--2S8Oy",codeIcon:"projects-module--codeIcon--1Nn8I",projectWrapperImage:"projects-module--project-wrapper-image--3lAef",thumbnail:"projects-module--thumbnail--1g45l",row:"projects-module--row--2Bkhh"}},q4sD:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-b0a634f0b14ee6738d9d.js.map