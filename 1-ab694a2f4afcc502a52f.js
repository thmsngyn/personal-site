webpackJsonp([1],{548:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1)),o=n(a(44)),l=(0,o.default)(i.default.createElement("g",null,i.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),"ExpandMore");t.default=l},599:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),s=n(r),u=a(3),d=n(u),c=a(16),f=n(c),p=a(48),m=a(603),h=n(m),v=a(601),g=n(v),x=a(600),b=n(x),k=a(602),y=n(k),w=a(74),E=a(45);a(114);var C=function(e){var t;return{infoBox:(t={display:"none"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={display:"block",color:e.info.colors.text,background:e.info.colors.background,position:"absolute",left:0,top:0,width:e.info.sizes.width+"px",height:"100%",padding:"20px 40px","&::after":{content:'""',position:"absolute",right:0,top:"20px",bottom:"20px",width:"1px",borderRight:"1px solid "+e.base.colors.lines}},t),wrapper:{position:"absolute",top:e.info.sizes.headerHeight+"px",bottom:0,left:0,width:"100%",padding:"0 40px 0",willChange:"opacity, bottom",transition:"bottom .5s 0s",opacity:1,transitionTimingFunction:"ease",".is-aside.closed &":{bottom:e.navigator.sizes.closedHeight+"px"},".moving-featured &":{bottom:0}}}},_=function(e){function t(){var a,n,l;i(this,t);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return a=n=o(this,e.call.apply(e,[this].concat(s))),n.avatarOnClick=w.featureNavigator.bind(n),n.menulinkOnClick=w.moveNavigatorAside.bind(n),n.expandOnClick=function(e){n.props.setNavigatorShape("closed")},l=a,o(n,l)}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.parts,n=e.pages,i=e.navigatorPosition,o=e.navigatorShape,l=a.find(function(e){return"info"===e.node.frontmatter.title});return s.default.createElement("aside",{className:t.infoBox+" "+(i?i:"")+"\n        "+(o?o:"")},l&&s.default.createElement(b.default,{info:l,avatarOnClick:this.avatarOnClick,expandOnClick:this.expandOnClick}),s.default.createElement("div",{className:t.wrapper},l&&s.default.createElement(y.default,{info:l}),s.default.createElement(h.default,null),n&&s.default.createElement(g.default,{pages:n,linkOnClick:this.menulinkOnClick})))},t}(s.default.Component);_.propTypes={classes:d.default.object.isRequired,parts:d.default.array.isRequired,pages:d.default.array.isRequired,navigatorPosition:d.default.string.isRequired,navigatorShape:d.default.string.isRequired,isWideScreen:d.default.bool.isRequired,setNavigatorShape:d.default.func.isRequired};var T=function(e,t){return{navigatorPosition:e.navigatorPosition,navigatorShape:e.navigatorShape,isWideScreen:e.isWideScreen}},M={setNavigatorPosition:E.setNavigatorPosition,setNavigatorShape:E.setNavigatorShape};t.default=(0,p.connect)(T,M)((0,f.default)(C)(_)),e.exports=t.default},600:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),o=n(i),l=a(3),r=n(l),s=a(16),u=n(s),d=a(50),c=n(d),f=a(88),p=n(f),m=a(548),h=n(m),v=a(197),g=n(v),x=a(62),b=n(x),k=function(e){var t,a,n;return{header:{lineHeight:1,position:"relative"},avatarLink:(t={willChange:"left, top",float:"left",display:"block",position:"relative",margin:"0 12px 0 0"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={margin:"0 20px 0 0"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={position:"absolute",top:"10px",left:"50%",marginLeft:"-30px",transition:"all .5s",transitionTimingFunction:"ease",".navigator-in-transition-from.navigator-is-opened &":{left:"50%"},".is-aside.open &":{left:"8%",top:"0"}},t),avatar:(a={width:"36px",height:"36px",borderRadius:"65% 75%",border:"1px solid #ddd",transition:"all .3s",transitionTimingFunction:"ease",display:"inline-block",overflow:"hidden","& img":{maxWidth:"100%"}},a["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={width:"44px",height:"44px"},a["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={width:"60px",height:"60px"},a["@media (hover: hover)"]={"&:hover":{borderRadius:"75% 65%"}},a),title:(n={willChange:"transform, left, top",fontSize:e.info.fonts.boxTitleSize+"em",margin:0,float:"left",transitionTimingFunction:"ease","& small":{display:"block",fontSize:".6em",marginTop:".3em"}},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={fontSize:e.info.fonts.boxTitleSizeM+"em"},n["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={fontSize:e.info.fonts.boxTitleSizeL+"em",position:"absolute",top:"85px",textAlign:"center",left:"50%",transform:"translate(-50%)",transition:"all .5s",".is-aside.open &":{left:"65%",top:1.9-e.info.fonts.boxTitleSizeL+"em",textAlign:"left"}},n),expand:{height:40,width:40,position:"absolute",top:"35px",right:"65px",display:"none",color:e.info.colors.text,".is-aside.open &":{display:"block"}}}},y=function(e){var t=e.classes,a=e.avatarOnClick,n=e.expandOnClick;return o.default.createElement("header",{className:t.header},o.default.createElement(c.default,{className:t.avatarLink,onClick:a,to:"/",title:"back to Home page"},o.default.createElement("div",{className:t.avatar},o.default.createElement("img",{src:g.default,alt:""}))),o.default.createElement("h1",{className:t.title},b.default.infoTitle.replace(/ /g," "),b.default.infoTitleNote&&o.default.createElement("small",null,b.default.infoTitleNote)),o.default.createElement(p.default,{"aria-label":"Expand the box",className:t.expand,onClick:n,title:"Expand the box"},o.default.createElement(h.default,null)))};y.propTypes={classes:r.default.object.isRequired,avatarOnClick:r.default.func.isRequired,expandOnClick:r.default.func.isRequired},t.default=(0,u.default)(k)(y),e.exports=t.default},601:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),o=n(i),l=a(3),r=n(l),s=a(16),u=n(s),d=a(50),c=n(d),f=function(e){return{infoMenu:{display:"flex",flexDirection:"column",alignItems:"center",listStyle:"none",margin:0,width:"100%"},link:{padding:".5em",fontWeight:300,textTransform:"lowercase",color:e.info.colors.menuLink,"&:hover":{color:e.info.colors.menuLinkHover}}}},p=function(e){var t=e.classes,a=e.pages,n=e.linkOnClick;return o.default.createElement("nav",{className:t.infoMenu},a.map(function(e,a){var i=e.node,l=i.fields,r=i.frontmatter;return o.default.createElement(c.default,{key:l.slug,to:l.slug,onClick:n,className:t.link,"data-shape":"closed"},r.menuTitle?r.menuTitle:r.title)}),o.default.createElement(c.default,{to:"/contact/",onClick:n,className:t.link,"data-shape":"closed"},"Contact"))};p.propTypes={pages:r.default.array.isRequired,classes:r.default.object.isRequired,linkOnClick:r.default.func.isRequired},t.default=(0,u.default)(f)(p),e.exports=t.default},602:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),o=n(i),l=a(3),r=n(l),s=a(16),u=n(s),d=function(e){return{text:{display:"block",fontWeight:300,lineHeight:1.5,fontSize:".95em",textAlign:"left",marginBottom:".8em","& p:first-child":{marginTop:0},"& p:last-child":{marginBottom:0}}}},c=function(e){var t=e.classes,a=e.info,n=a.node.html;return o.default.createElement("div",{className:t.text,dangerouslySetInnerHTML:{__html:n}})};c.propTypes={classes:r.default.object.isRequired,info:r.default.object.isRequired},t.default=(0,u.default)(d)(c),e.exports=t.default},603:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),o=n(i),l=a(3),r=n(l),s=a(16),u=n(s),d=a(62),c=n(d),f=a(1229),p=n(f),m=a(1228),h=n(m),v=a(1231),g=n(v),x=a(1230),b=n(x),k=function(e){return{social:{display:"flex",justifyContent:"center",flexWrap:"wrap"},link:{display:"inline-block",padding:"5px","&:hover":{"& svg":{fill:e.info.colors.socialIconsHover}}},svg:{width:"40px",height:"40px",fill:e.info.colors.socialIcons,transition:"all .5s"}}},y=function(e){var t=e.classes,a=c.default.authorSocialLinks,n={twitter:g.default,facebook:h.default,github:p.default,linkedin:b.default};return o.default.createElement("div",{className:t.social},a.map(function(e){var a=n[e.name];return o.default.createElement("a",{href:e.url,key:e.name,className:t.link,target:"_blank",rel:"noopener noreferrer",title:e.name},o.default.createElement(a,{className:t.svg}))}))};y.propTypes={classes:r.default.object.isRequired},t.default=(0,u.default)(k)(y),e.exports=t.default},604:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(599);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(i).default}}),e.exports=t.default},1228:function(e,t,a){function n(e){return i.createElement("svg",e,i.createElement("path",{d:"M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"}))}var i=a(1);n.defaultProps={viewBox:"0 0 512 512"},e.exports=n,n.default=n},1229:function(e,t,a){function n(e){return i.createElement("svg",e,i.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}))}var i=a(1);n.defaultProps={viewBox:"0 0 512 512"},e.exports=n,n.default=n},1230:function(e,t,a){function n(e){return i.createElement("svg",e,i.createElement("path",{transform:"translate(66.25 66.25)",d:"M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n\tC366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056\n\tH65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806\n\tc5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1\n\ts40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73\n\tc-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079\n\tc0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426\n\tc5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472\n\tL341.91,330.654L341.91,330.654z"}))}var i=a(1);n.defaultProps={viewBox:"0 0 512 512"},e.exports=n,n.default=n},1231:function(e,t,a){function n(e){return i.createElement("svg",e,i.createElement("path",{d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}))}var i=a(1);n.defaultProps={viewBox:"0 0 512 512"},e.exports=n,n.default=n}});
//# sourceMappingURL=1-ab694a2f4afcc502a52f.js.map