/*!
 * 
 *             jsPDF AutoTable plugin v3.5.3
 *             
 *             Copyright (c) 2020 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *         
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(function(){try{return require("jspdf")}catch(t){}}());else if("function"==typeof define&&define.amd)define(["jspdf"],e);else{var n="object"==typeof exports?e(function(){try{return require("jspdf")}catch(t){}}()):e(t.jsPDF);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";function o(t,e){var n=t>0,o=e||0===e;return n&&o?"DF":n?"S":o?"F":null}Object.defineProperty(e,"__esModule",{value:!0}),e.getStringWidth=function(t,e,n){return n.applyStyles(e,!0),(Array.isArray(t)?t:[t]).map((function(t){return n.getTextWidth(t)})).reduce((function(t,e){return Math.max(t,e)}),0)},e.addTableBorder=function(t,e){var n=t.settings.tableLineWidth,r=t.settings.tableLineColor;e.applyStyles({lineWidth:n,lineColor:r});var i=o(n,!1);i&&e.rect(t.pageStartX,t.pageStartY,t.width,t.cursor.y-t.pageStartY,i)},e.getFillStyle=o,e.marginOrPadding=function(t,e){var n,o,r,i;if(t=t||e,Array.isArray(t)){if(t.length>=4)return{top:t[0],right:t[1],bottom:t[2],left:t[3]};if(3===t.length)return{top:t[0],right:t[1],bottom:t[2],left:t[1]};if(2===t.length)return{top:t[0],right:t[1],bottom:t[0],left:t[1]};t=1===t.length?t[0]:e}return"object"==typeof t?("number"==typeof t.vertical&&(t.top=t.vertical,t.bottom=t.vertical),"number"==typeof t.horizontal&&(t.right=t.horizontal,t.left=t.horizontal),{left:null!==(n=t.left)&&void 0!==n?n:e,top:null!==(o=t.top)&&void 0!==o?o:e,right:null!==(r=t.right)&&void 0!==r?r:e,bottom:null!==(i=t.bottom)&&void 0!==i?i:e}):("number"!=typeof t&&(t=e),{top:t,right:t,bottom:t,left:t})}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.FONT_ROW_RATIO=1.15;var i=function(t){function e(e){var n=t.call(this)||this;return n._element=e,n}return r(e,t),e}(Array);e.HtmlRowInput=i,e.defaultStyles=function(t){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/t,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},e.getTheme=function(t){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[t]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={},r=function(){function t(t){this.jsPDFDocument=t,this.userStyles={textColor:t.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:t.internal.getFontSize(),fontStyle:t.internal.getFont().fontStyle,font:t.internal.getFont().fontName}}return t.setDefaults=function(t,e){void 0===e&&(e=null),e?e.__autoTableDocumentDefaults=t:o=t},t.unifyColor=function(t){return Array.isArray(t)?t:"number"==typeof t?[t,t,t]:"string"==typeof t?[t]:null},t.prototype.applyStyles=function(e,n){var o,r,i;if(void 0===n&&(n=!1),e.fontStyle&&this.jsPDFDocument.setFontStyle(e.fontStyle),e.font&&this.jsPDFDocument.setFont(e.font),e.fontSize&&this.jsPDFDocument.setFontSize(e.fontSize),!n){var l=t.unifyColor(e.fillColor);l&&(o=this.jsPDFDocument).setFillColor.apply(o,l),(l=t.unifyColor(e.textColor))&&(r=this.jsPDFDocument).setTextColor.apply(r,l),(l=t.unifyColor(e.lineColor))&&(i=this.jsPDFDocument).setDrawColor.apply(i,l),"number"==typeof e.lineWidth&&this.jsPDFDocument.setLineWidth(e.lineWidth)}},t.prototype.splitTextToSize=function(t,e,n){return this.jsPDFDocument.splitTextToSize(t,e,n)},t.prototype.rect=function(t,e,n,o,r){return this.jsPDFDocument.rect(t,e,n,o,r)},t.prototype.getPreviousAutoTable=function(){return this.jsPDFDocument.previousAutoTable},t.prototype.getTextWidth=function(t){return this.jsPDFDocument.getTextWidth(t)},t.prototype.getDocument=function(){return this.jsPDFDocument},t.prototype.setPage=function(t){this.jsPDFDocument.setPage(t)},t.prototype.addPage=function(){return this.jsPDFDocument.addPage()},t.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},t.prototype.getGlobalOptions=function(){return o||{}},t.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},t.prototype.pageSize=function(){var t=this.jsPDFDocument.internal.pageSize;return null==t.width&&(t={width:t.getWidth(),height:t.getHeight()}),t},t.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},t.prototype.pageNumber=function(){var t=this.jsPDFDocument.internal.getCurrentPageInfo();return t?t.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},t}();e.DocHandler=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),r=n(1);function i(t,e,n,i,a,s){for(var u=new r.HtmlRowInput(i),d=0;d<i.cells.length;d++){var h=i.cells[d],c=n.getComputedStyle(h);if(a||"none"!==c.display){var f=void 0;s&&(f=o.parseCss(t,h,e,c,n)),u.push({rowSpan:h.rowSpan,colSpan:h.colSpan,styles:f,_element:h,content:l(h)})}}var g=n.getComputedStyle(i);if(u.length>0&&(a||"none"!==g.display))return u}function l(t){var e=t.cloneNode(!0);return e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/ +/g," "),e.innerHTML=e.innerHTML.split("<br>").map((function(t){return t.trim()})).join("\n"),e.innerText||e.textContent||""}e.parseHtml=function(t,e,n,o,r){var l,a,s;void 0===o&&(o=!1),void 0===r&&(r=!1),s="string"==typeof e?n.document.querySelector(e):e;var u=Object.keys(t.getFontList()),d=t.scaleFactor(),h=[],c=[],f=[];if(!s)return console.error("Html table could not be found with input: ",e),{head:h,body:c,foot:f};for(var g=0;g<s.rows.length;g++){var p=s.rows[g],y=null===(a=null===(l=null==p?void 0:p.parentElement)||void 0===l?void 0:l.tagName)||void 0===a?void 0:a.toLowerCase(),v=i(u,d,n,p,o,r);v&&("thead"===y?h.push(v):"tfoot"===y?f.push(v):c.push(v))}return{head:h,body:c,foot:f}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,o,r){o=o||{};var i=r.internal.scaleFactor,l=r.internal.getFontSize()/i,a="",s=1;if("middle"!==o.valign&&"bottom"!==o.valign&&"center"!==o.halign&&"right"!==o.halign||(s=(a="string"==typeof t?t.split(/\r\n|\r|\n/g):t).length||1),n+=l*(2-1.15),"middle"===o.valign?n-=s/2*l*1.15:"bottom"===o.valign&&(n-=s*l*1.15),"center"===o.halign||"right"===o.halign){var u=l;if("center"===o.halign&&(u*=.5),a&&s>=1){for(var d=0;d<a.length;d++)r.text(a[d],e-r.getStringUnitWidth(a[d])*u,n),n+=1.15*l;return r}e-=r.getStringUnitWidth(t)*u}return"justify"===o.halign?r.text(t,e,n,{maxWidth:o.maxWidth||100,align:"justify"}):r.text(t,e,n),r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(6),l=n(0),a=n(2),s=n(12),u=n(7),d=n(14);function h(t,e,n,o,r,i,l){var a={};return e.map((function(e,n){for(var s=0,d=new u.Row(e,n,t),h=0,c=0,f=0,p=o;f<p.length;f++){var y=p[f];if(null==a[y.index]||0===a[y.index].left)if(0===c){var v=void 0,m={};"object"!=typeof(v=Array.isArray(e)?e[y.index-h-s]:e[y.dataKey])||Array.isArray(v)||(m=(null==v?void 0:v.styles)||{});var b=g(t,y,n,i,r,l,m),w=new u.Cell(v,b,t);d.cells[y.dataKey]=w,d.cells[y.index]=w,c=w.colSpan-1,a[y.index]={left:w.rowSpan-1,times:c}}else c--,h++;else a[y.index].left--,c=a[y.index].times,s++}return d}))}function c(t,e){var n={};return t.forEach((function(t){if(null!=t.raw){var o=function(t,e){if("head"===t){if("object"==typeof e)return e.header||e.title||null;if("string"==typeof e||"number"==typeof e)return e}else if("foot"===t&&"object"==typeof e)return e.footer;return null}(e,t.raw);null!=o&&(n[t.dataKey]=o)}})),Object.keys(n).length>0?n:null}function f(t,e,n){var o=t[0]||e[0]||n[0]||[],r=[];return Object.keys(o).filter((function(t){return"_element"!==t})).forEach((function(t){var e,n=1;"object"!=typeof(e=Array.isArray(o)?o[parseInt(t)]:o[t])||Array.isArray(e)||(n=(null==e?void 0:e.colSpan)||1);for(var i=0;i<n;i++){var l=void 0;l=Array.isArray(o)?r.length:t+(i>0?"_"+i:""),r.push({dataKey:l,header:e})}})),r}function g(t,e,n,r,l,a,s){var u,d=o.getTheme(r);"head"===t?u=l.headStyles:"body"===t?u=l.bodyStyles:"foot"===t&&(u=l.footStyles);var h=i.assign({},d.table,d[t],l.styles,u),c=l.columnStyles[e.dataKey]||l.columnStyles[e.index]||{},f="body"===t?c:{},g="body"===t&&n%2==0?i.assign({},d.alternateRow,l.alternateRowStyles):{},p=o.defaultStyles(a),y=i.assign({},p,h,g,f);return i.assign(y,s)}e.createTable=function(t,e){var n=new a.DocHandler(t),o=n.getDocumentOptions(),g=n.getGlobalOptions();s.default(g,o,e,n);var p,y=i.assign({},g,o,e),v=n.getPreviousAutoTable(),m=n.scaleFactor(),b=l.marginOrPadding(y.margin,40/m),w=function(t,e,n,o){var r,i,l,a,s,u,d,h,c,f,g;f=!0===t.showFoot?"everyPage":!1===t.showFoot?"never":null!==(r=t.showFoot)&&void 0!==r?r:"everyPage";g=!0===t.showHead?"everyPage":!1===t.showHead?"never":null!==(i=t.showHead)&&void 0!==i?i:"everyPage";var p=null!==(l=t.useCss)&&void 0!==l&&l,y=t.theme||(p?"plain":"striped");return{includeHiddenHtml:null!==(a=t.includeHiddenHtml)&&void 0!==a&&a,useCss:p,theme:y,startY:n,margin:o,pageBreak:null!==(s=t.pageBreak)&&void 0!==s?s:"auto",rowPageBreak:null!==(u=t.rowPageBreak)&&void 0!==u?u:"auto",tableWidth:null!==(d=t.tableWidth)&&void 0!==d?d:"auto",showHead:g,showFoot:f,tableLineWidth:null!==(h=t.tableLineWidth)&&void 0!==h?h:0,tableLineColor:null!==(c=t.tableLineColor)&&void 0!==c?c:200}}(y,0,function(t,e,n,o,r){var i=!1;if(t){var l=t.startPageNumber+t.pageNumber-1;i=l===n}var a=o.startY;null!=a&&!1!==a||i&&(a=t.finalY+20/e);return a||r}(v,m,n.pageNumber(),y,b.top),b),x=function(t,e,n){for(var o={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},r=function(r){if("columnStyles"===r){var l=t[r],a=e[r],s=n[r];o.columnStyles=i.assign({},l,a,s)}else{var u=[t,e,n].map((function(t){return t[r]||{}}));o[r]=i.assign({},u[0],u[1],u[2])}},l=0,a=Object.keys(o);l<a.length;l++){var s=a[l];r(s)}return o}(g,o,e);"undefined"!=typeof window&&(p=window);var P=function(t,e,n,o,i,l){var a=e.head||[],s=e.body||[],d=e.foot||[];if(e.html){var g=e.includeHiddenHtml;if(l){var p=r.parseHtml(t,e.html,l,g,e.useCss)||{};a=p.head||a,s=p.body||a,d=p.foot||a}else console.error("Cannot parse html in non browser environment")}var y=function(t){return t.map((function(t,e){var n,o,r;return r="object"==typeof t&&null!==(o=null!==(n=t.dataKey)&&void 0!==n?n:t.key)&&void 0!==o?o:e,new u.Column(r,t,e)}))}(e.columns||f(a,s,d));if(0===a.length&&e.columns){(v=c(y,"head"))&&a.push(v)}if(0===d.length&&e.columns){var v;(v=c(y,"foot"))&&d.push(v)}return{columns:y,head:h("head",a,e,y,n,o,i),body:h("body",s,e,y,n,o,i),foot:h("foot",d,e,y,n,o,i)}}(n,y,x,w.theme,m,p),S=new u.Table(e.tableId,w,x,function(t,e,n){for(var o={didParseCell:[],willDrawCell:[],didDrawCell:[],didDrawPage:[]},r=0,i=[t,e,n];r<i.length;r++){var l=i[r];l.didParseCell&&o.didParseCell.push(l.didParseCell),l.willDrawCell&&o.willDrawCell.push(l.willDrawCell),l.didDrawCell&&o.didDrawCell.push(l.didDrawCell),l.didDrawPage&&o.didDrawPage.push(l.didDrawPage)}return o}(g,o,e),P);return function(t,e,n){t.allRows().forEach((function(o){for(var r=0,i=t.columns;r<i.length;r++){var a=i[r],s=o.cells[a.index];if(s){t.callCellHooks(n,t.hooks.didParseCell,s,o,a);var u=s.padding("horizontal");s.contentWidth=l.getStringWidth(s.text,s.styles,n)+u;var d=l.getStringWidth(s.text.join(" ").split(/\s+/),s.styles,n);if(s.minReadableWidth=d+s.padding("horizontal"),"number"==typeof s.styles.cellWidth)s.minWidth=s.styles.cellWidth,s.wrappedWidth=s.styles.cellWidth;else if("wrap"===s.styles.cellWidth)s.minWidth=s.contentWidth,s.wrappedWidth=s.contentWidth;else{var h=10/e;s.minWidth=s.styles.minCellWidth||h,s.wrappedWidth=s.contentWidth,s.minWidth>s.wrappedWidth&&(s.wrappedWidth=s.minWidth)}}}})),t.allRows().forEach((function(e){for(var n=0,o=t.columns;n<o.length;n++){var r=o[n],i=e.cells[r.index];if(i&&1===i.colSpan)r.wrappedWidth=Math.max(r.wrappedWidth,i.wrappedWidth),r.minWidth=Math.max(r.minWidth,i.minWidth),r.minReadableWidth=Math.max(r.minReadableWidth,i.minReadableWidth);else{var l=(t.styles.columnStyles[r.dataKey]||t.styles.columnStyles[r.index]||{}).cellWidth;l&&"number"==typeof l&&(r.minWidth=l,r.wrappedWidth=l)}i&&(i.colSpan>1&&!r.minWidth&&(r.minWidth=i.minWidth),i.colSpan>1&&!r.wrappedWidth&&(r.wrappedWidth=i.minWidth))}}))}(S,m,n),S.minWidth=S.columns.reduce((function(t,e){return t+e.minWidth}),0),S.wrappedWidth=S.columns.reduce((function(t,e){return t+e.wrappedWidth}),0),"number"==typeof S.settings.tableWidth?S.width=S.settings.tableWidth:"wrap"===S.settings.tableWidth?S.width=S.wrappedWidth:S.width=n.pageSize().width-b.left-b.right,d.calculateWidths(n,S),n.applyStyles(n.userStyles),S},e.getColumnDef=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.assign=function(t,e,n,o,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),l=1;l<arguments.length;l++){var a=arguments[l];if(null!=a)for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(i[s]=a[s])}return i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(13),i=n(0),l=function(){function t(t,e,n,o,r){this.cursor={x:0,y:0},this.columns=[],this.head=[],this.body=[],this.foot=[],this.wrappedWidth=0,this.minWidth=0,this.width=0,this.height=0,this.headHeight=0,this.footHeight=0,this.startPageNumber=1,this.pageNumber=1,this.pageCount=1,this.pageStartX=0,this.pageStartY=0,this.finalY=0,this.id=t,this.settings=e,this.styles=n,this.hooks=o,this.columns=r.columns,this.head=r.head,this.body=r.body,this.foot=r.foot}return t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(t,e,n,o,i){for(var l=0,a=e;l<a.length;l++){var s=!1===(0,a[l])(new r.CellHookData(this,t,n,o,i));if(n.text=Array.isArray(n.text)?n.text:[n.text],s)return!1}return!0},t.prototype.callEndPageHooks=function(t){t.applyStyles(t.userStyles);for(var e=0,n=this.hooks.didDrawPage;e<n.length;e++){(0,n[e])(new r.HookData(this,t))}},t}();e.Table=l;var a=function(){function t(t,e,n){this.cells={},this.height=0,this.maxCellHeight=0,this.x=0,this.y=0,this.spansMultiplePages=!1,this.raw=t,t instanceof o.HtmlRowInput&&(this.raw=t._element,this.element=t._element),this.index=e,this.section=n}return t.prototype.hasRowSpan=function(t){var e=this;return t.filter((function(t){var n=e.cells[t.index];return!!n&&n.rowSpan>1})).length>0},t.prototype.canEntireRowFit=function(t){return this.maxCellHeight<=t},t.prototype.getMinimumRowHeight=function(t,e){var n=this;return t.reduce((function(t,r){var i=n.cells[r.index];if(!i)return 0;var l=i.styles.fontSize/e.scaleFactor()*o.FONT_ROW_RATIO,a=i.padding("vertical")+l;return a>t?a:t}),0)},t}();e.Row=a;var s=function(){function t(t,e,n){var o,r;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.textPos={y:0,x:0},this.x=0,this.y=0,this.colSpan=1,this.rowSpan=1,this.styles=e,this.section=n,this.raw=t;var i=t;null==t||"object"!=typeof t||Array.isArray(t)||(this.rowSpan=t.rowSpan||1,this.colSpan=t.colSpan||1,i=null!==(r=null!==(o=t.content)&&void 0!==o?o:t.title)&&void 0!==r?r:t,t._element&&(this.raw=t._element));var l=null!=i?""+i:"";this.text=l.split(/\r\n|\r|\n/g)}return t.prototype.getContentHeight=function(t){return(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/t*o.FONT_ROW_RATIO)+this.padding("vertical")},t.prototype.padding=function(t){var e=i.marginOrPadding(this.styles.cellPadding,0);return"vertical"===t?e.top+e.bottom:"horizontal"===t?e.left+e.right:e[t]},t}();e.Cell=s;var u=function(){function t(t,e,n){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=t,this.raw=e,this.index=n}return t.prototype.getMaxCustomCellWidth=function(t){for(var e=0,n=0,o=t.allRows();n<o.length;n++){var r=o[n].cells[this.index];r&&"number"==typeof r.styles.cellWidth&&(e=Math.max(e,r.styles.cellWidth))}return e},t}();e.Column=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=n(7),l=n(2),a=n(6),s=n(4);function u(t,e,n){var r=t.styles.fontSize/n.scaleFactor()*o.FONT_ROW_RATIO,i=t.padding("vertical"),l=Math.floor((e-i)/r);return Math.max(0,l)}function d(t,e,n){t.cursor.x=t.settings.margin.left,e.y=t.cursor.y,e.x=t.cursor.x;for(var o=0,i=t.columns;o<i.length;o++){var l=i[o],a=e.cells[l.index];if(a){if(n.applyStyles(a.styles),a.x=t.cursor.x,a.y=e.y,"top"===a.styles.valign)a.textPos.y=t.cursor.y+a.padding("top");else if("bottom"===a.styles.valign)a.textPos.y=t.cursor.y+a.height-a.padding("bottom");else{var u=a.height-a.padding("vertical");a.textPos.y=t.cursor.y+u/2+a.padding("top")}if("right"===a.styles.halign)a.textPos.x=a.x+a.width-a.padding("right");else if("center"===a.styles.halign){var d=a.width-a.padding("horizontal");a.textPos.x=a.x+d/2+a.padding("left")}else a.textPos.x=a.x+a.padding("left");if(!1!==t.callCellHooks(n,t.hooks.willDrawCell,a,e,l)){var h=a.styles,c=r.getFillStyle(h.lineWidth,h.fillColor);c&&n.rect(a.x,t.cursor.y,a.width,a.height,c),s.default(a.text,a.textPos.x,a.textPos.y,{halign:a.styles.halign,valign:a.styles.valign,maxWidth:Math.ceil(a.width-a.padding("left")-a.padding("right"))},n.getDocument()),t.callCellHooks(n,t.hooks.didDrawCell,a,e,l),t.cursor.x+=l.width}else t.cursor.x+=l.width}else t.cursor.x+=l.width}t.cursor.y+=e.height}function h(t,e){e.applyStyles(e.userStyles),"everyPage"===t.settings.showFoot&&t.foot.forEach((function(n){return d(t,n,e)})),t.finalY=t.cursor.y,t.callEndPageHooks(e);var n=t.settings.margin;r.addTableBorder(t,e),c(e),t.pageNumber++,t.pageCount++,t.cursor={x:n.left,y:n.top},t.pageStartX=t.cursor.x,t.pageStartY=t.cursor.y,"everyPage"===t.settings.showHead&&t.head.forEach((function(n){return d(t,n,e)}))}function c(t){var e=t.pageNumber();t.setPage(e+1),t.pageNumber()===e&&t.addPage()}e.drawTable=function(t,e){var n=e.settings,o=n.startY,s=n.margin;e.cursor={x:s.left,y:o};var f=o+s.bottom+e.headHeight+e.footHeight;"avoid"===n.pageBreak&&(f+=e.height);var g=new l.DocHandler(t);("always"===n.pageBreak||null!=n.startY&&f>g.pageSize().height)&&(c(g),e.cursor.y=s.top),e.pageStartX=e.cursor.x,e.pageStartY=e.cursor.y,e.startPageNumber=g.pageNumber(),g.applyStyles(g.userStyles),"firstPage"!==n.showHead&&"everyPage"!==n.showHead||e.head.forEach((function(t){return d(e,t,g)})),g.applyStyles(g.userStyles),e.body.forEach((function(t,n){!function t(e,n,o,r){var l=function(t,e,n){var o=t.settings.margin.bottom,r=t.settings.showFoot;("everyPage"===r||"lastPage"===r&&e)&&(o+=t.footHeight);return n.pageSize().height-t.cursor.y-o}(e,o,r);if(n.canEntireRowFit(l))d(e,n,r);else if(function(t,e,n,o){var r=t.pageSize().height,i=o.settings.margin,l=i.top+i.bottom,a=r-l;"body"===e.section&&(a-=o.headHeight+o.footHeight);var s=e.getMinimumRowHeight(o.columns,t),u=s<n;if(s>a)return console.error("Will not be able to print row "+e.index+" correctly since it's minimum height is larger than page height"),!0;if(!u)return!1;var d=e.hasRowSpan(o.columns);if(e.maxCellHeight>a)return d&&console.error("The content of row "+e.index+" will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported."),!0;if(d)return!1;if("avoid"===o.settings.rowPageBreak)return!1;return!0}(r,n,l,e)){var s=function(t,e,n,o){var r=new i.Row(t.raw,-1,t.section);r.spansMultiplePages=!0,t.spansMultiplePages=!0,t.height=0,t.maxCellHeight=0;for(var l=0,s=n.columns;l<s.length;l++){var d=s[l];if(y=t.cells[d.index]){Array.isArray(y.text)||(y.text=[y.text]);var h=new i.Cell(y.raw,y.styles,y.section);(h=a.assign(h,y)).textPos=a.assign({},y.textPos),h.text=[];var c=u(y,e,o);y.text.length>c&&(h.text=y.text.splice(c,y.text.length));var f=o.scaleFactor();y.contentHeight=y.getContentHeight(f),y.contentHeight>t.height&&(t.height=y.contentHeight,t.maxCellHeight=y.contentHeight),h.contentHeight=h.getContentHeight(f),h.contentHeight>r.height&&(r.height=h.contentHeight,r.maxCellHeight=h.contentHeight),r.cells[d.index]=h}}for(var g=0,p=n.columns;g<p.length;g++){var y;d=p[g];(h=r.cells[d.index])&&(h.height=r.height),(y=t.cells[d.index])&&(y.height=t.height)}return r}(n,l,e,r);d(e,n,r),h(e,r),t(e,s,o,r)}else h(e,r),t(e,n,o,r)}(e,t,n===e.body.length-1,g)})),g.applyStyles(g.userStyles),"lastPage"!==n.showFoot&&"everyPage"!==n.showFoot||e.foot.forEach((function(t){return d(e,t,g)})),r.addTableBorder(e,g),e.callEndPageHooks(g),e.finalY=e.cursor.y,t.previousAutoTable=e,t.lastAutoTable=e,t.autoTable&&(t.autoTable.previous=e),g.applyStyles(g.userStyles)},e.addPage=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=n(5),i=n(8);function l(t){o.default(t)}e.applyPlugin=l,e.default=function(t,e){var n=r.createTable(t,e);i.drawTable(t,n)};try{l(n(15))}catch(t){}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),l=n(5),a=n(8);e.default=function(t){t.API.autoTable=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];1===e.length?t=e[0]:(console.error("Use of deprecated autoTable initiation"),(t=e[2]||{}).columns=e[0],t.body=e[1]);var o=l.createTable(this,t);return a.drawTable(this,o),this},t.API.lastAutoTable=!1,t.API.previousAutoTable=!1,t.API.autoTable.previous=!1,t.API.autoTableText=function(t,e,n,o){r.default(t,e,n,o,this)},t.API.autoTableSetDefaults=function(t){return i.DocHandler.setDefaults(t,this),this},t.autoTableSetDefaults=function(t,e){i.DocHandler.setDefaults(t,e)},t.API.autoTableHtmlToJson=function(t,e){if(void 0===e&&(e=!1),"undefined"==typeof window)return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var n=new i.DocHandler(this),r=o.parseHtml(n,t,window,e,!1),a=r.head,s=r.body,u=r.foot;return{columns:l.getColumnDef(a,s,u),rows:s,data:s}},t.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.previousAutoTable.finalY instead.");var t=this.previousAutoTable;return t.cursor&&"number"==typeof t.cursor.y?t.cursor.y:0},t.API.autoTableAddPageContent=function(e){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),t.API.autoTable.globalDefaults||(t.API.autoTable.globalDefaults={}),t.API.autoTable.globalDefaults.addPageContent=e,this},t.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);function r(t,e){var n=function t(e,n){var o=n(e);return"rgba(0, 0, 0, 0)"===o||"transparent"===o||"initial"===o||"inherit"===o?null==e.parentElement?null:t(e.parentElement,n):o}(t,e);if(!n)return null;var o=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!o||!Array.isArray(o))return null;var r=[parseInt(o[1]),parseInt(o[2]),parseInt(o[3])];return 0===parseInt(o[4])||isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}e.parseCss=function(t,e,n,i,l){var a={},s=r(e,(function(t){return l.getComputedStyle(t).backgroundColor}));null!=s&&(a.fillColor=s),null!=(s=r(e,(function(t){return l.getComputedStyle(t).color})))&&(a.textColor=s),null!=(s=r(e,(function(t){return l.getComputedStyle(t).borderTopColor})))&&(a.lineColor=s);var u=function(t,e){var n=[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft],r=96/(72/e),i=(parseInt(t.lineHeight)-parseInt(t.fontSize))/e/2,l=n.map((function(t){return parseInt(t)/r})),a=o.marginOrPadding(l,0);i>a.top&&(a.top=i);i>a.bottom&&(a.bottom=i);return a}(i,n);u&&(a.cellPadding=u);var d=parseInt(i.borderTopWidth||"");(d=d/(96/72)/n)&&(a.lineWidth=d);var h=["left","right","center","justify"];-1!==h.indexOf(i.textAlign)&&(a.halign=i.textAlign),-1!==(h=["middle","bottom","top"]).indexOf(i.verticalAlign)&&(a.valign=i.verticalAlign);var c=parseInt(i.fontSize||"");isNaN(c)||(a.fontSize=c/(96/72));var f=function(t){var e="";("bold"===t.fontWeight||"bolder"===t.fontWeight||parseInt(t.fontWeight)>=700)&&(e="bold");"italic"!==t.fontStyle&&"oblique"!==t.fontStyle||(e+="italic");return e}(i);f&&(a.fontStyle=f);var g=(i.fontFamily||"").toLowerCase();return-1!==t.indexOf(g)&&(a.font=g),a}},function(t,e,n){"use strict";function o(t){t.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),t.minCellHeight||(t.minCellHeight=t.rowHeight)):t.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),t.cellWidth||(t.cellWidth=t.columnWidth))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r){for(var i=function(t){t&&"object"!=typeof t&&console.error("The options parameter should be of type object, is: "+typeof t),void 0!==t.extendWidth&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),void 0!==t.margins&&(void 0===t.margin&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&"number"!=typeof t.startY&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(e){r.applyStyles(r.userStyles),t.beforePageContent&&t.beforePageContent(e),r.applyStyles(r.userStyles),t.afterPageContent&&t.afterPageContent(e),r.applyStyles(r.userStyles),t.afterPageAdd&&e.pageNumber>1&&e.afterPageAdd(e),r.applyStyles(r.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach((function(e){t[e]&&console.error('The "'+e+'" hook has changed in version 3.0, check the changelog for how to migrate.')})),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach((function(e){var n=e[0],o=e[1];t[o]&&(console.error("Use of deprecated option "+o+". Use "+n+" instead"),t[n]=t[o])})),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach((function(e){var n="string"==typeof e?e:e[0],o="string"==typeof e?e:e[1];void 0!==t[n]&&(void 0===t.styles[o]&&(t.styles[o]=t[n]),console.error("Use of deprecated option: "+n+", use the style "+o+" instead."))}));for(var e=0,n=["styles","bodyStyles","headStyles","footStyles"];e<n.length;e++){o(t[n[e]]||{})}for(var i=t.columnStyles||{},l=0,a=Object.keys(i);l<a.length;l++){o(i[a[l]]||{})}},l=0,a=[t,e,n];l<a.length;l++){i(a[l])}}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){this.table=t,this.pageNumber=t.pageNumber,this.pageCount=this.pageNumber,this.settings=t.settings,this.cursor=t.cursor,this.doc=e.getDocument()};e.HookData=i;var l=function(t){function e(e,n,o,r,i){var l=t.call(this,e,n)||this;return l.cell=o,l.row=r,l.column=i,l.section=r.section,l}return r(e,t),e}(i);e.CellHookData=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);function r(t,e,n){for(var o=e,i=t.reduce((function(t,e){return t+e.wrappedWidth}),0),l=0;l<t.length;l++){var a=t[l],s=o*(a.wrappedWidth/i),u=a.width+s,d=n(a),h=u<d?d:u;e-=h-a.width,a.width=h}if(e=Math.round(1e10*e)/1e10){var c=t.filter((function(t){return!(e<0)||t.width>n(t)}));c.length&&(e=r(c,e,n))}return e}function i(t,e,n,r,i){return t.map((function(t){return function(t,e,n,r,i){var l=1e4*r.scaleFactor();if((e=Math.ceil(e*l)/l)>=o.getStringWidth(t,n,r))return t;for(;e<o.getStringWidth(t+i,n,r)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+i}(t,e,n,r,i)}))}e.calculateWidths=function(t,e){var n=[],o=0;e.columns.forEach((function(t){var r=t.getMaxCustomCellWidth(e);r?t.width=r:(t.width=t.wrappedWidth,n.push(t)),o+=t.width}));var l=e.width-o;l&&(l=r(n,l,(function(t){return Math.max(t.minReadableWidth,t.minWidth)}))),l&&(l=r(n,l,(function(t){return t.minWidth}))),(l=Math.abs(l))>1e-10&&(l=l<1?l:Math.round(l),console.error("Of the table content, "+l+" units width could not fit page")),function(t){for(var e=t.allRows(),n=0;n<e.length;n++)for(var o=e[n],r=null,i=0,l=0,a=0;a<t.columns.length;a++){var s=t.columns[a];if((l-=1)>1&&t.columns[a+1])i+=s.width,delete o.cells[s.index];else if(r){var u=r;delete o.cells[s.index],r=null,u.width=s.width+i}else{if(!(u=o.cells[s.index]))continue;if(l=u.colSpan,i=0,u.colSpan>1){r=u,i+=s.width;continue}u.width=s.width+i}}}(e),function(t,e){for(var n={count:0,height:0},o=0,r=t.allRows();o<r.length;o++){for(var l=r[o],a=0,s=t.columns;a<s.length;a++){var u=s[a],d=l.cells[u.index];if(d){e.applyStyles(d.styles,!0);var h=d.width-d.padding("horizontal");"linebreak"===d.styles.overflow?d.text=e.splitTextToSize(d.text,h+1/e.scaleFactor(),{fontSize:d.styles.fontSize}):"ellipsize"===d.styles.overflow?d.text=i(d.text,h,d.styles,e,"..."):"hidden"===d.styles.overflow?d.text=i(d.text,h,d.styles,e,""):"function"==typeof d.styles.overflow&&(d.text=d.styles.overflow(d.text,h)),d.contentHeight=d.getContentHeight(e.scaleFactor()),d.styles.minCellHeight>d.contentHeight&&(d.contentHeight=d.styles.minCellHeight);var c=d.contentHeight/d.rowSpan;d.rowSpan>1&&n.count*n.height<c*d.rowSpan?n={height:c,count:d.rowSpan}:n&&n.count>0&&n.height>c&&(c=n.height),c>l.height&&(l.height=c,l.maxCellHeight=c)}}n.count--}}(e,t),function(t){for(var e={},n=1,o=t.allRows(),r=0;r<o.length;r++){for(var i=o[r],l=0,a=t.columns;l<a.length;l++){var s=a[l],u=e[s.index];if(n>1)n--,delete i.cells[s.index];else if(u)u.cell.height+=i.height,u.cell.height>i.maxCellHeight&&(u.row.maxCellHeight=u.cell.height),n=u.cell.colSpan,delete i.cells[s.index],u.left--,u.left<=1&&delete e[s.index];else{var d=i.cells[s.index];if(!d)continue;if(d.height=i.height,d.rowSpan>1){var h=o.length-r,c=d.rowSpan>h?h:d.rowSpan;e[s.index]={cell:d,left:c,row:i}}}}"head"===i.section&&(t.headHeight+=i.maxCellHeight),"foot"===i.section&&(t.footHeight+=i.maxCellHeight),t.height+=i.height}}(e)},e.resizeColumns=r,e.ellipsize=i},function(e,n){if(void 0===t){var o=new Error("Cannot find module 'undefined'");throw o.code="MODULE_NOT_FOUND",o}e.exports=t}])}));