(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{235:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(223),l=a(243),c=a(244),s=a(76),u=a.n(s),i=a(16),f=(a(26),a(35),a(23),a(18),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),m=n.a.createContext&&n.a.createContext(f),d=function(){return(d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function g(e){return function(t){return n.a.createElement(v,d({attr:d({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.a.createElement(t.tag,d({key:a},t.attr),e(t.child))}))}(e.child))}}function v(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var o=e.attr,l=p(e,["attr"]);return n.a.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:a,style:d({color:e.color||t.color},t.style,e.style),height:r,width:r}),e.children)};return void 0!==m?n.a.createElement(m.Consumer,null,(function(e){return t(e)})):t(f)}var b=function(e){return g({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"}}]})(e)};b.displayName="FaLongArrowAltLeft";var h=a(227),y=a.n(h),O=a(225);function E(e){var t=e.data.markdownRemark;return n.a.createElement(O.a,null,n.a.createElement(o.a,null,n.a.createElement(i.a,{to:"/"+t.frontmatter.category,className:"back-button"},n.a.createElement(b,null)),n.a.createElement("div",null,n.a.createElement(u.a,{title:""+t.frontmatter.title}),n.a.createElement("h2",null,t.frontmatter.title),n.a.createElement(l.a,{className:"mb-4 product-product"},n.a.createElement(c.a,null,n.a.createElement(y.a,{className:"product-product-image",fluid:t.frontmatter.featuredImage.childImageSharp.fluid,alt:t.frontmatter.title})),n.a.createElement(c.a,null,n.a.createElement("p",null,"Product: ",t.frontmatter.title),n.a.createElement("p",null,"Category: ",t.frontmatter.category),n.a.createElement("p",null,"Date: ",t.frontmatter.date),n.a.createElement("p",{className:"product-product-content",dangerouslySetInnerHTML:{__html:t.html}}))))))}a.d(t,"default",(function(){return E})),a.d(t,"pageQuery",(function(){return w}));var w="2677710037"},239:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},243:function(e,t,a){"use strict";var r=a(103),n=a(104),o=a(0),l=a.n(o),c=a(6),s=a.n(c),u=a(105),i=a.n(u),f=a(106),m={tag:s.a.oneOfType([s.a.func,s.a.string]),noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},d=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,c=e.tag,s=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(f.b)(i()(t,o?"no-gutters":null,s?"form-row":"row"),a);return l.a.createElement(c,Object(r.a)({},u,{className:m}))};d.propTypes=m,d.defaultProps={tag:"div"},t.a=d},244:function(e,t,a){"use strict";a(31);var r=a(103),n=a(104),o=a(239),l=a.n(o),c=a(0),s=a.n(c),u=a(6),i=a.n(u),f=a(105),m=a.n(f),d=a(106),p=i.a.oneOfType([i.a.number,i.a.string]),g=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(d.a)(p,'Please use the prop "order"'),pull:Object(d.a)(p,'Please use the prop "order"'),order:p,offset:p})]),v={tag:i.a.oneOfType([i.a.func,i.a.string]),xs:g,sm:g,md:g,lg:g,xl:g,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,r){var n=e[t];if(delete u[t],n||""===n){var o=!r;if(l()(n)){var c,s=o?"-":"-"+t+"-",f=h(o,t,n.size);i.push(Object(d.b)(m()(((c={})[f]=n.size||""===n.size,c["order"+s+n.order]=n.order||0===n.order,c["offset"+s+n.offset]=n.offset||0===n.offset,c)),a))}else{var p=h(o,t,n);i.push(p)}}})),i.length||i.push("col");var f=Object(d.b)(m()(t,i),a);return s.a.createElement(c,Object(r.a)({},u,{className:f}))};y.propTypes=v,y.defaultProps=b,t.a=y}}]);
//# sourceMappingURL=component---src-templates-blog-js-a884e56281ede037c1d5.js.map