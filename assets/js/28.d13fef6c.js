(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{478:function(e,t,i){!function(e){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=" .timeline { padding: 0; position: relative; list-style: none; font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif; -webkit-font-smoothing: antialiased; margin: 10px 20px; } .timeline:after { position: absolute; content: ''; left: 0; top: 0; width: 1px; height: 100%; background-color: var(--timelineTheme); } .timeline-item { position: relative; margin: 1.5em 0 0 28px; padding-bottom: 1.5em; border-bottom: 1px dotted var(--timelineTheme); } .timeline-item:last-child { border-bottom: none; } .timeline-circle { position: absolute; top: .28em; left: -34px; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--timelineTheme); background-color: var(--timelineTheme); z-index: 1; box-sizing: content-box; } .timeline-circle.hollow { background-color: var(--timelineBg); } .timeline-title { position: relative; display: inline-block; /** * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素） */ cursor: crosshair; margin: -.15em 0 15px 28px } .timeline-title:not(:first-child) { margin-top: 28px; } .timeline-title-circle { left: -36px; top: .15em; width: 16px; height: 16px; } .timeline-others { width: 40px; height: auto; top: .2em; left: -48px; line-height: 1; padding: 2px 0; text-align: center; border: none; background-color: var(--timelineBg); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var t={render:function(){var e=this.$createElement;return(this._self._c||e)("ul",{ref:"timeline",staticClass:"timeline"},[this._t("default")],2)},staticRenderFns:[],name:"Timeline",props:{timelineTheme:{type:String,default:"#dbdde0"},timelineBg:{type:String,default:"#fff"}},mounted:function(){var e=this.$refs.timeline;e.style.setProperty("--timelineTheme",this.timelineTheme),e.style.setProperty("--timelineBg",this.timelineBg)}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var i={name:"TimelineItemBase",props:{bgColor:{type:String,default:""},lineColor:{type:String,default:""},hollow:{type:Boolean,default:!1},fontColor:{type:String,default:"#37414a"}},data:function(){return{slotOthers:!1}},computed:{circleStyle:function(){if(this.bgColor||this.lineColor||this.hollow){var e={};return this.bgColor&&(e={"border-color":this.bgColor,"background-color":this.bgColor}),this.lineColor&&(e=Object.assign({},e,{"border-color":this.lineColor})),e}},itemStyle:function(){return{color:this.fontColor}},slotClass:function(){var e="";return this.slotOthers?e="timeline-others":this.hollow&&(e="hollow"),e}},mounted:function(){this.slotOthers=!!this.$refs.others.innerHTML}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"timeline-item",style:this.itemStyle},[t("div",{ref:"others",staticClass:"timeline-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[],extends:i};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"timeline-title",style:this.itemStyle},[t("div",{ref:"others",staticClass:"timeline-circle timeline-title-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[],extends:i};"undefined"!=typeof window&&window.Vue&&(window.Vue.component(t.name,t),window.Vue.component(n.name,n),window.Vue.component(o.name,o)),e.Timeline=t,e.TimelineItem=n,e.TimelineTitle=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},494:function(e,t,i){"use strict";i.r(t);var n=i(478),o={name:"sample-timeline",components:{Timeline:n.Timeline,TimelineItem:n.TimelineItem,TimelineTitle:n.TimelineTitle}},l=i(13),r=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("timeline",{attrs:{"timeline-theme":"lightblue"}},[t("timeline-title",{attrs:{"bg-color":"#09FFAA"}},[e._v("Prehistoric hunters cross over into Canada from Asia")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#9dd8e0"}},[e._v("\tLeif Ericsson leads a Viking expedition to the New World")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#9dFFe0"}},[e._v("First Year 1B")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#FFF000"}},[e._v("Accepted Computer Engineering")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#cFe8eF"}},[e._v("The Iroquois Confederacy is formed")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#97Aec8"}},[e._v("John Cabot reaches Newfoundland (or perhaps Cape Breton)")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#5744D4"}},[e._v("Jacques Cartier first explores the St. Lawrence region")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#0F4859"}},[e._v("Second Year 2B")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#094341"}},[e._v("Samuel de Champlain establishes a French colony at Québec City")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#825F03"}},[e._v("Hudson’s Bay Company is formed")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#954F08"}},[e._v("Expulsion of the Acadians")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#A71490"}},[e._v("Battle of the Plains of Abraham: Québec City is captured")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#C084A9"}},[e._v("New France is formally ceded to Britain; Pontiac Rebellion erupts")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#7B71C2"}},[e._v("Loyalist refugees begin arriving after the American Revolution")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#2348B1"}},[e._v("War of 1812: U.S. invades Canada")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#915F15"}},[e._v("Rebellions against British rule in Upper and Lower Canada")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#0909FA"}},[e._v("\tResponsible government is won, first in Nova Scotia, then in Canada")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);