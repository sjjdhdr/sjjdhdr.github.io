//@ sourceMappingURL=script.map.js?1470258680
// /iw/javascript/jquery/jquery.min.js  

/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

// /static/bower_components/atavist-polymer/webcomponents-lite.min.js  

/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.14
window.WebComponents=window.WebComponents||{},function(e){var t=e.flags||{},n="webcomponents-lite.js",r=document.querySelector('script[src*="'+n+'"]');if(!t.noOpts){if(location.search.slice(1).split("&").forEach(function(e){var n,r=e.split("=");r[0]&&(n=r[0].match(/wc-(.+)/))&&(t[n[1]]=r[1]||!0)}),r)for(var o,i=0;o=r.attributes[i];i++)"src"!==o.name&&(t[o.name]=o.value||!0);if(t.log){var a=t.log.split(",");t.log={},a.forEach(function(e){t.log[e]=!0})}else t.log={}}t.shadow=t.shadow||t.shadowdom||t.polyfill,"native"===t.shadow?t.shadow=!1:t.shadow=t.shadow||!HTMLElement.prototype.createShadowRoot,t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),e.flags=t}(window.WebComponents),function(e){"use strict";function t(e){return void 0!==h[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){g.push(e)}var d=a||"scheme start",u=0,l="",w=!1,_=!1,g=[];e:for(;(e[u-1]!=p||0==u)&&!this._isInvalid;){var b=e[u];switch(d){case"scheme start":if(!b||!m.test(b)){if(a){c("Invalid scheme.");break e}l="",d="no scheme";continue}l+=b.toLowerCase(),d="scheme";break;case"scheme":if(b&&v.test(b))l+=b.toLowerCase();else{if(":"!=b){if(a){if(p==b)break e;c("Code point not allowed in scheme: "+b);break e}l="",u=0,d="no scheme";continue}if(this._scheme=l,l="",a)break e;t(this._scheme)&&(this._isRelative=!0),d="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==b?(this._query="?",d="query"):"#"==b?(this._fragment="#",d="fragment"):p!=b&&"	"!=b&&"\n"!=b&&"\r"!=b&&(this._schemeData+=o(b));break;case"no scheme":if(s&&t(s._scheme)){d="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=b||"/"!=e[u+1]){c("Expected /, got: "+b),d="relative";continue}d="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),p==b){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password;break e}if("/"==b||"\\"==b)"\\"==b&&c("\\ is an invalid code point."),d="relative slash";else if("?"==b)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,d="query";else{if("#"!=b){var y=e[u+1],E=e[u+2];("file"!=this._scheme||!m.test(b)||":"!=y&&"|"!=y||p!=E&&"/"!=E&&"\\"!=E&&"?"!=E&&"#"!=E)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),d="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,d="fragment"}break;case"relative slash":if("/"!=b&&"\\"!=b){"file"!=this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),d="relative path";continue}"\\"==b&&c("\\ is an invalid code point."),d="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=b){c("Expected '/', got: "+b),d="authority ignore slashes";continue}d="authority second slash";break;case"authority second slash":if(d="authority ignore slashes","/"!=b){c("Expected '/', got: "+b);continue}break;case"authority ignore slashes":if("/"!=b&&"\\"!=b){d="authority";continue}c("Expected authority, got: "+b);break;case"authority":if("@"==b){w&&(c("@ already seen."),l+="%40"),w=!0;for(var L=0;L<l.length;L++){var M=l[L];if("	"!=M&&"\n"!=M&&"\r"!=M)if(":"!=M||null!==this._password){var T=o(M);null!==this._password?this._password+=T:this._username+=T}else this._password="";else c("Invalid whitespace in authority.")}l=""}else{if(p==b||"/"==b||"\\"==b||"?"==b||"#"==b){u-=l.length,l="",d="host";continue}l+=b}break;case"file host":if(p==b||"/"==b||"\\"==b||"?"==b||"#"==b){2!=l.length||!m.test(l[0])||":"!=l[1]&&"|"!=l[1]?0==l.length?d="relative path start":(this._host=r.call(this,l),l="",d="relative path start"):d="relative path";continue}"	"==b||"\n"==b||"\r"==b?c("Invalid whitespace in file host."):l+=b;break;case"host":case"hostname":if(":"!=b||_){if(p==b||"/"==b||"\\"==b||"?"==b||"#"==b){if(this._host=r.call(this,l),l="",d="relative path start",a)break e;continue}"	"!=b&&"\n"!=b&&"\r"!=b?("["==b?_=!0:"]"==b&&(_=!1),l+=b):c("Invalid code point in host/hostname: "+b)}else if(this._host=r.call(this,l),l="",d="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(b))l+=b;else{if(p==b||"/"==b||"\\"==b||"?"==b||"#"==b||a){if(""!=l){var N=parseInt(l,10);N!=h[this._scheme]&&(this._port=N+""),l=""}if(a)break e;d="relative path start";continue}"	"==b||"\n"==b||"\r"==b?c("Invalid code point in port: "+b):n.call(this)}break;case"relative path start":if("\\"==b&&c("'\\' not allowed in path."),d="relative path","/"!=b&&"\\"!=b)continue;break;case"relative path":if(p!=b&&"/"!=b&&"\\"!=b&&(a||"?"!=b&&"#"!=b))"	"!=b&&"\n"!=b&&"\r"!=b&&(l+=o(b));else{"\\"==b&&c("\\ not allowed in relative path.");var O;(O=f[l.toLowerCase()])&&(l=O),".."==l?(this._path.pop(),"/"!=b&&"\\"!=b&&this._path.push("")):"."==l&&"/"!=b&&"\\"!=b?this._path.push(""):"."!=l&&("file"==this._scheme&&0==this._path.length&&2==l.length&&m.test(l[0])&&"|"==l[1]&&(l=l[0]+":"),this._path.push(l)),l="","?"==b?(this._query="?",d="query"):"#"==b&&(this._fragment="#",d="fragment")}break;case"query":a||"#"!=b?p!=b&&"	"!=b&&"\n"!=b&&"\r"!=b&&(this._query+=i(b)):(this._fragment="#",d="fragment");break;case"fragment":p!=b&&"	"!=b&&"\n"!=b&&"\r"!=b&&(this._fragment+=b)}u++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var d=!1;if(!e.forceJURL)try{var u=new URL("b","http://a");u.pathname="c%20d",d="http://a/c%20d"===u.href}catch(l){}if(!d){var h=Object.create(null);h.ftp=21,h.file=0,h.gopher=70,h.http=80,h.https=443,h.ws=80,h.wss=443;var f=Object.create(null);f["%2e"]=".",f[".%2e"]="..",f["%2e."]="..",f["%2e%2e"]="..";var p=void 0,m=/[a-zA-Z]/,v=/[a-zA-Z0-9\+\-\.]/;c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return(""!=this._username||null!=this._password)&&(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var w=e.URL;w&&(c.createObjectURL=function(e){return w.createObjectURL.apply(w,arguments)},c.revokeObjectURL=function(e){w.revokeObjectURL(e)}),e.URL=c}}(self),"undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),function(e){function t(e){b.push(e),g||(g=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){g=!1;var e=b;b=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=v.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=v.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++y}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function d(e,t){return E=new s(e,t)}function u(e){return L?L:(L=c(E),L.oldValue=e,L)}function l(){E=L=void 0}function h(e){return e===L||e===E}function f(e,t){return e===t?e:L&&h(e)?L:null}function p(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var m,v=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var w=[],_=String(Math.random());window.addEventListener("message",function(e){if(e.data===_){var t=w;w=[],t.forEach(function(e){e()})}}),m=function(e){w.push(e),window.postMessage(_,"*")}}var g=!1,b=[],y=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=v.get(e);r||v.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new p(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=v.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var E,L;p.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=f(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=v.get(e);t||v.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=v.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new d("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=d("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,h=e.target;"DOMNodeInserted"===e.type?(s=[h],c=[]):(s=[],c=[h]);var f=h.previousSibling,p=h.nextSibling,o=d("childList",e.target.parentNode);o.addedNodes=s,o.removedNodes=c,o.previousSibling=f,o.nextSibling=p,i(e.relatedNode,function(e){return e.childList?o:void 0})}l()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(self),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||p,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===w}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===w)&&(t.removeEventListener(_,o),r(e,t))};t.addEventListener(_,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){c==d&&e&&e({allImports:s,loadedImports:u,errorImports:l})}function r(e){o(e),u.push(this),c++,n()}function i(e){l.push(this),c++,n()}var s=t.querySelectorAll("link[rel=import]"),c=0,d=s.length,u=[],l=[];if(d)for(var h,f=0;d>f&&(h=s[f]);f++)a(h)?(c++,n()):(h.addEventListener("load",r),h.addEventListener("error",i));else n()}function a(e){return l?e.__loaded||e["import"]&&"loading"!==e["import"].readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&d(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function d(e){var t=e["import"];t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",l=Boolean(u in document.createElement("link")),h=Boolean(window.ShadowDOMPolyfill),f=function(e){return h?window.ShadowDOMPolyfill.wrapIfNeeded(e):e},p=f(document),m={get:function(){var e=window.HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return f(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(p,"_currentScript",m);var v=/Trident/.test(navigator.userAgent),w=v?"complete":"interactive",_="readystatechange";l&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)d(e)}()),t(function(e){window.HTMLImports.ready=!0,window.HTMLImports.readyTime=(new Date).getTime();var t=p.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded",!0,!0,e),p.dispatchEvent(t)}),e.IMPORT_LINK_TYPE=u,e.useNative=l,e.rootDocument=p,e.whenReady=t,e.isIE=v}(window.HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(window.HTMLImports),window.HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e,t){var n=e.ownerDocument,r=n.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,t,r),e},resolveUrlsInCssText:function(e,r,o){var i=this.replaceUrls(e,o,r,t);return i=this.replaceUrls(i,o,r,n)},replaceUrls:function(e,t,n,r){return e.replace(r,function(e,r,o,i){var a=o.replace(/["']/g,"");return n&&(a=new URL(a,n).href),t.href=a,a=t.href,r+"'"+a+"'"+i})}};e.path=r}),window.HTMLImports.addModule(function(e){var t={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(e){if(4===i.readyState){var n=i.getResponseHeader("Location"),a=null;if(n)var a="/"===n.substr(0,1)?location.origin+n:n;r.call(o,!t.ok(i)&&i,i.response||i.responseText,a)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}};e.xhr=t}),window.HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e)if(e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}else setTimeout(function(){this.receive(e,r,{error:"href must be specified"},null)}.bind(this),0)},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),window.HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),window.HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,d=e.isIE,u=e.IMPORT_LINK_TYPE,l="link[rel="+u+"]",h={documentSelectors:l,importsSelectors:[l,"link[rel=stylesheet]:not([type])","style:not([type])","script:not([type])",'script[type="application/javascript"]','script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(c.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(e["import"]=e.__doc,window.HTMLImports.__importsParsingHook&&window.HTMLImports.__importsParsingHook(e),e["import"]&&(e["import"].__importParsed=!0),this.markParsingComplete(e),e.__resource&&!e.__error?e.dispatchEvent(new CustomEvent("load",{bubbles:!1})):e.dispatchEvent(new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),t.__appliedElement=e,e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){var t=this.rootImportForElement(e.__importElement||e);t.parentNode.insertBefore(e,t)},trackElement:function(e,t){var n=this,r=function(o){e.removeEventListener("load",r),e.removeEventListener("error",r),t&&t(o),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),d&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&setTimeout(function(){e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))})}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(t){r.parentNode&&r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.__doc,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.__doc?!1:!0}};e.parser=h,e.IMPORT_SELECTOR=l}),window.HTMLImports.addModule(function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e){return!!Object.getOwnPropertyDescriptor(e,"baseURI")}function o(e,t){var n=document.implementation.createHTMLDocument(a);n._URL=t;var o=n.createElement("base");o.setAttribute("href",t),n.baseURI||r(n)||Object.defineProperty(n,"baseURI",{value:t});var i=n.createElement("meta");return i.setAttribute("charset","utf-8"),n.head.appendChild(i),n.head.appendChild(o),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var i=e.flags,a=e.IMPORT_LINK_TYPE,s=e.IMPORT_SELECTOR,c=e.rootDocument,d=e.Loader,u=e.Observer,l=e.parser,h={documents:{},documentPreloadSelectors:s,importsPreloadSelectors:[s].join(","),loadNode:function(e){f.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);f.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,r,a,s){if(i.load&&console.log("loaded",e,n),n.__resource=r,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:o(r,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.__doc=c}l.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),l.parseNext()},loadedAll:function(){l.parseNext()}},f=new d(h.loaded.bind(h),h.loadedAll.bind(h));if(h.observer=new u,!document.baseURI){var p={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",p),Object.defineProperty(c,"baseURI",p)}e.importer=h,e.importLoader=f}),window.HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a,s=0,c=e.length;c>s&&(a=e[s]);s++)r||(r=a.ownerDocument,o=t.isParsed(r)),i=this.shouldLoadNode(a),i&&n.loadNode(a),this.shouldParseNode(a)&&o&&t.parseDynamic(a,i)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){window.HTMLImports.importer.bootDocument(o)}var n=e.initializeModules,r=e.isIE;if(!e.useNative){(!window.CustomEvent||r&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),n();var o=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(window.HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.isIE=/Trident/.test(navigator.userAgent),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){i(e,t,[])}function i(e,t,n){if(e=window.wrap(e),!(n.indexOf(e)>=0)){n.push(e);for(var r,o=e.querySelectorAll("link[rel="+a+"]"),s=0,c=o.length;c>s&&(r=o[s]);s++)r["import"]&&i(r["import"],t,n);t(e)}}var a=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),window.CustomElements.addModule(function(e){function t(e,t){return n(e,t)||r(e,t)}function n(t,n){return e.upgrade(t,n)?!0:void(n&&a(t))}function r(e,t){g(e,function(e){return n(e,t)?!0:void 0})}function o(e){L.push(e),E||(E=!0,setTimeout(i))}function i(){E=!1;for(var e,t=L,n=0,r=t.length;r>n&&(e=t[n]);n++)e();L=[]}function a(e){y?o(function(){s(e)}):s(e)}function s(e){e.__upgraded__&&!e.__attached&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){d(e),g(e,function(e){d(e)})}function d(e){y?o(function(){u(e)}):u(e)}function u(e){e.__upgraded__&&e.__attached&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function l(e){for(var t=e,n=window.wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host}}function h(e){if(e.shadowRoot&&!e.shadowRoot.__watched){_.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)m(t),t=t.olderShadowRoot}}function f(e,n){if(_.dom){var r=n[0];if(r&&"childList"===r.type&&r.addedNodes&&r.addedNodes){for(var o=r.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var i=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";i=i.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,i||"")}var a=l(e);n.forEach(function(e){"childList"===e.type&&(M(e.addedNodes,function(e){e.localName&&t(e,a)}),M(e.removedNodes,function(e){e.localName&&c(e)}))}),_.dom&&console.groupEnd()}function p(e){for(e=window.wrap(e),e||(e=window.wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(f(e,t.takeRecords()),i())}function m(e){if(!e.__observer){var t=new MutationObserver(f.bind(this,e));t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function v(e){e=window.wrap(e),_.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop());var n=e===window.wrap(document);t(e,n),m(e),_.dom&&console.groupEnd()}function w(e){b(e,v)}var _=e.flags,g=e.forSubtree,b=e.forDocumentTree,y=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=y;var E=!1,L=[],M=Array.prototype.forEach.call.bind(Array.prototype.forEach),T=Element.prototype.createShadowRoot;T&&(Element.prototype.createShadowRoot=function(){var e=T.call(this);return window.CustomElements.watchShadow(this),e}),e.watchShadow=h,e.upgradeDocumentTree=w,e.upgradeDocument=v,e.upgradeSubtree=r,e.upgradeAll=t,e.attached=a,e.takeRecords=p}),window.CustomElements.addModule(function(e){function t(t,r){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var o=t.getAttribute("is"),i=e.getRegisteredDefinition(t.localName)||e.getRegisteredDefinition(o);if(i&&(o&&i.tag==t.localName||!o&&!i["extends"]))return n(t,i,r)}}function n(t,n,o){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),o&&e.attached(t),e.upgradeSubtree(t,o),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t["native"]),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),window.CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(d(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c.lifecycle=c.lifecycle||{},c.ancestry=i(c["extends"]),a(c),s(c),n(c.prototype),u(c.__name,c),c.ctor=l(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&w(document),c.ctor;
}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<E.length;t++)if(e===E[t])return!0}function i(e){var t=d(e);return t?i(t["extends"]).concat([t]):[]}function a(e){for(var t,n=e["extends"],r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype,i=!1;o;)o==t&&(i=!0),r=Object.getPrototypeOf(o),r&&(o.__proto__=r),o=r;i||console.warn(e.tag+" prototype not found in prototype chain for "+e.is),e["native"]=t}}function c(e){return g(T(e.tag),e)}function d(e){return e?L[e.toLowerCase()]:void 0}function u(e,t){L[e]=t}function l(e){return function(){return c(e)}}function h(e,t,n){return e===M?f(t,n):N(e,t)}function f(e,t){e&&(e=e.toLowerCase()),t&&(t=t.toLowerCase());var n=d(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=f(e),r.setAttribute("is",t),r):(r=T(e),e.indexOf("-")>=0&&b(r,HTMLElement),r)}function p(e,t){var n=e[t];e[t]=function(){var e=n.apply(this,arguments);return _(e),e}}var m,v=e.isIE,w=e.upgradeDocumentTree,_=e.upgradeAll,g=e.upgradeWithDefinition,b=e.implementPrototype,y=e.useNative,E=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],L={},M="http://www.w3.org/1999/xhtml",T=document.createElement.bind(document),N=document.createElementNS.bind(document);m=Object.__proto__||y?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},p(Node.prototype,"cloneNode"),p(document,"importNode"),v&&!function(){var e=document.importNode;document.importNode=function(){var t=e.apply(document,arguments);if(t.nodeType==t.DOCUMENT_FRAGMENT_NODE){var n=document.createDocumentFragment();return n.appendChild(t),n}return t}}(),document.registerElement=t,document.createElement=f,document.createElementNS=h,e.registry=L,e["instanceof"]=m,e.reservedTagList=E,e.getRegisteredDefinition=d,document.register=document.registerElement}),function(e){function t(){a(window.wrap(document)),window.CustomElements.ready=!0;var e=window.requestAnimationFrame||function(e){setTimeout(e,16)};e(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}var n=e.useNative,r=e.initializeModules,o=e.isIE;if(n){var i=function(){};e.watchShadow=i,e.upgrade=i,e.upgradeAll=i,e.upgradeDocumentTree=i,e.upgradeSubtree=i,e.takeRecords=i,e["instanceof"]=function(e,t){return e instanceof t}}else r();var a=e.upgradeDocumentTree,s=e.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(e){e["import"]&&s(wrap(e["import"]))}),(!window.CustomEvent||o&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var c=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(c,t)}else t()}(window.CustomElements),"undefined"==typeof HTMLTemplateElement&&!function(){function e(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case" ":return"&nbsp;"}}function t(t){return t.replace(a,e)}var n="template",r=document.implementation.createHTMLDocument("template"),o=!0;HTMLTemplateElement=function(){},HTMLTemplateElement.prototype=Object.create(HTMLElement.prototype),HTMLTemplateElement.decorate=function(e){e.content||(e.content=r.createDocumentFragment());for(var n;n=e.firstChild;)e.content.appendChild(n);if(o)try{Object.defineProperty(e,"innerHTML",{get:function(){for(var e="",n=this.content.firstChild;n;n=n.nextSibling)e+=n.outerHTML||t(n.data);return e},set:function(e){for(r.body.innerHTML=e,HTMLTemplateElement.bootstrap(r);this.content.firstChild;)this.content.removeChild(this.content.firstChild);for(;r.body.firstChild;)this.content.appendChild(r.body.firstChild)},configurable:!0})}catch(i){o=!1}},HTMLTemplateElement.bootstrap=function(e){for(var t,r=e.querySelectorAll(n),o=0,i=r.length;i>o&&(t=r[o]);o++)HTMLTemplateElement.decorate(t)},window.addEventListener("DOMContentLoaded",function(){HTMLTemplateElement.bootstrap(document)});var i=document.createElement;document.createElement=function(){"use strict";var e=i.apply(document,arguments);return"template"==e.localName&&HTMLTemplateElement.decorate(e),e};var a=/[&\u00A0<>]/g}(),function(e){"use strict";if(!window.performance){var t=Date.now();window.performance={now:function(){return Date.now()-t}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}())}(window.WebComponents),function(e){var t=document.createElement("style");t.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n=document.querySelector("head");n.insertBefore(t,n.firstChild)}(window.WebComponents);
// /static/bower_components/atavist-polymer/atavist-polymer.min.js  

!function(){function t(){document.body.removeAttribute("unresolved")}window.WebComponents?addEventListener("WebComponentsReady",t):"interactive"===document.readyState||"complete"===document.readyState?t():addEventListener("DOMContentLoaded",t)}(),window.Polymer={Settings:function(){var t=window.Polymer||{};location.search.slice(1).split("&").forEach(function(e){e=e.split("="),e[0]&&(t[e[0]]=e[1]||!0)});var e="shadow"===t.dom,n=Boolean(Element.prototype.createShadowRoot),i=n&&!window.ShadowDOMPolyfill,o=e&&n,r=Boolean("import"in document.createElement("link")),s=r,a=!window.CustomElements||window.CustomElements.useNative;return{wantShadow:e,hasShadow:n,nativeShadow:i,useShadow:o,useNativeShadow:o&&i,useNativeImports:s,useNativeCustomElements:a}}()},function(){var t=window.Polymer;window.Polymer=function(t){"function"==typeof t&&(t=t.prototype),t||(t={});var n=e(t);t=n.prototype;var i={prototype:t};return t["extends"]&&(i["extends"]=t["extends"]),Polymer.telemetry._registrate(t),document.registerElement(t.is,i),n};var e=function(t){var e=Polymer.Base;return t["extends"]&&(e=Polymer.Base._getExtendedPrototype(t["extends"])),t=Polymer.Base.chainObject(t,e),t.registerCallback(),t.constructor};if(window.Polymer=Polymer,t)for(var n in t)Polymer[n]=t[n];Polymer.Class=e}(),Polymer.telemetry={registrations:[],_regLog:function(t){console.log("["+t.is+"]: registered")},_registrate:function(t){this.registrations.push(t),Polymer.log&&this._regLog(t)},dumpRegistrations:function(){this.registrations.forEach(this._regLog)}},Object.defineProperty(window,"currentImport",{enumerable:!0,configurable:!0,get:function(){return(document._currentScript||document.currentScript).ownerDocument}}),Polymer.RenderStatus={_ready:!1,_callbacks:[],whenReady:function(t){this._ready?t():this._callbacks.push(t)},_makeReady:function(){this._ready=!0,this._callbacks.forEach(function(t){t()}),this._callbacks=[]},_catchFirstRender:function(){requestAnimationFrame(function(){Polymer.RenderStatus._makeReady()})}},window.HTMLImports?HTMLImports.whenReady(function(){Polymer.RenderStatus._catchFirstRender()}):Polymer.RenderStatus._catchFirstRender(),Polymer.ImportStatus=Polymer.RenderStatus,Polymer.ImportStatus.whenLoaded=Polymer.ImportStatus.whenReady,Polymer.Base={__isPolymerInstance__:!0,_addFeature:function(t){this.extend(this,t)},registerCallback:function(){this._desugarBehaviors(),this._doBehavior("beforeRegister"),this._registerFeatures(),this._doBehavior("registered")},createdCallback:function(){Polymer.telemetry.instanceCount++,this.root=this,this._doBehavior("created"),this._initFeatures()},attachedCallback:function(){Polymer.RenderStatus.whenReady(function(){this.isAttached=!0,this._doBehavior("attached")}.bind(this))},detachedCallback:function(){this.isAttached=!1,this._doBehavior("detached")},attributeChangedCallback:function(t){this._attributeChangedImpl(t),this._doBehavior("attributeChanged",arguments)},_attributeChangedImpl:function(t){this._setAttributeToProperty(this,t)},extend:function(t,e){return t&&e&&Object.getOwnPropertyNames(e).forEach(function(n){this.copyOwnProperty(n,e,t)},this),t||e},mixin:function(t,e){for(var n in e)t[n]=e[n];return t},copyOwnProperty:function(t,e,n){var i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(n,t,i)},_log:console.log.apply.bind(console.log,console),_warn:console.warn.apply.bind(console.warn,console),_error:console.error.apply.bind(console.error,console),_logf:function(){return this._logPrefix.concat([this.is]).concat(Array.prototype.slice.call(arguments,0))}},Polymer.Base._logPrefix=function(){var t=window.chrome||/firefox/i.test(navigator.userAgent);return t?["%c[%s::%s]:","font-weight: bold; background-color:#EEEE00;"]:["[%s::%s]:"]}(),Polymer.Base.chainObject=function(t,e){return t&&e&&t!==e&&(Object.__proto__||(t=Polymer.Base.extend(Object.create(e),t)),t.__proto__=e),t},Polymer.Base=Polymer.Base.chainObject(Polymer.Base,HTMLElement.prototype),window.CustomElements?Polymer["instanceof"]=CustomElements["instanceof"]:Polymer["instanceof"]=function(t,e){return t instanceof e},Polymer.isInstance=function(t){return Boolean(t&&t.__isPolymerInstance__)},Polymer.telemetry.instanceCount=0,function(){function t(){if(r){var t=document._currentScript||document.currentScript,e=t&&t.ownerDocument||document;e&&CustomElements.upgradeAll(e)}}var e={},n={},i=function(t){return e[t]||n[t.toLowerCase()]},o=function(){return document.createElement("dom-module")};o.prototype=Object.create(HTMLElement.prototype),Polymer.Base.extend(o.prototype,{constructor:o,createdCallback:function(){this.register()},register:function(t){var t=t||this.id||this.getAttribute("name")||this.getAttribute("is");t&&(this.id=t,e[t]=this,n[t.toLowerCase()]=this)},"import":function(e,n){if(e){var o=i(e);return o||(t(),o=i(e)),o&&n&&(o=o.querySelector(n)),o}}});var r=window.CustomElements&&!CustomElements.useNative;document.registerElement("dom-module",o)}(),Polymer.Base._addFeature({_prepIs:function(){if(!this.is){var t=(document._currentScript||document.currentScript).parentNode;if("dom-module"===t.localName){var e=t.id||t.getAttribute("name")||t.getAttribute("is");this.is=e}}this.is&&(this.is=this.is.toLowerCase())}}),Polymer.Base._addFeature({behaviors:[],_desugarBehaviors:function(){this.behaviors.length&&(this.behaviors=this._desugarSomeBehaviors(this.behaviors))},_desugarSomeBehaviors:function(t){t=this._flattenBehaviorsList(t);for(var e=t.length-1;e>=0;e--)this._mixinBehavior(t[e]);return t},_flattenBehaviorsList:function(t){var e=[];return t.forEach(function(t){t instanceof Array?e=e.concat(this._flattenBehaviorsList(t)):t?e.push(t):this._warn(this._logf("_flattenBehaviorsList","behavior is null, check for missing or 404 import"))},this),e},_mixinBehavior:function(t){Object.getOwnPropertyNames(t).forEach(function(e){switch(e){case"hostAttributes":case"registered":case"properties":case"observers":case"listeners":case"created":case"attached":case"detached":case"attributeChanged":case"configure":case"ready":break;default:this.hasOwnProperty(e)||this.copyOwnProperty(e,t,this)}},this)},_prepBehaviors:function(){this._prepFlattenedBehaviors(this.behaviors)},_prepFlattenedBehaviors:function(t){for(var e=0,n=t.length;n>e;e++)this._prepBehavior(t[e]);this._prepBehavior(this)},_doBehavior:function(t,e){this.behaviors.forEach(function(n){this._invokeBehavior(n,t,e)},this),this._invokeBehavior(this,t,e)},_invokeBehavior:function(t,e,n){var i=t[e];i&&i.apply(this,n||Polymer.nar)},_marshalBehaviors:function(){this.behaviors.forEach(function(t){this._marshalBehavior(t)},this),this._marshalBehavior(this)}}),Polymer.Base._addFeature({_getExtendedPrototype:function(t){return this._getExtendedNativePrototype(t)},_nativePrototypes:{},_getExtendedNativePrototype:function(t){var e=this._nativePrototypes[t];if(!e){var n=this.getNativePrototype(t);e=this.extend(Object.create(n),Polymer.Base),this._nativePrototypes[t]=e}return e},getNativePrototype:function(t){return Object.getPrototypeOf(document.createElement(t))}}),Polymer.Base._addFeature({_prepConstructor:function(){this._factoryArgs=this["extends"]?[this["extends"],this.is]:[this.is];var t=function(){return this._factory(arguments)};this.hasOwnProperty("extends")&&(t["extends"]=this["extends"]),Object.defineProperty(this,"constructor",{value:t,writable:!0,configurable:!0}),t.prototype=this},_factory:function(t){var e=document.createElement.apply(document,this._factoryArgs);return this.factoryImpl&&this.factoryImpl.apply(e,t),e}}),Polymer.nob=Object.create(null),Polymer.Base._addFeature({properties:{},getPropertyInfo:function(t){var e=this._getPropertyInfo(t,this.properties);return e||this.behaviors.some(function(n){return e=this._getPropertyInfo(t,n.properties)},this),e||Polymer.nob},_getPropertyInfo:function(t,e){var n=e&&e[t];return"function"==typeof n&&(n=e[t]={type:n}),n&&(n.defined=!0),n}}),Polymer.CaseMap={_caseMap:{},dashToCamelCase:function(t){var e=Polymer.CaseMap._caseMap[t];return e?e:t.indexOf("-")<0?Polymer.CaseMap._caseMap[t]=t:Polymer.CaseMap._caseMap[t]=t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},camelToDashCase:function(t){var e=Polymer.CaseMap._caseMap[t];return e?e:Polymer.CaseMap._caseMap[t]=t.replace(/([a-z][A-Z])/g,function(t){return t[0]+"-"+t[1].toLowerCase()})}},Polymer.Base._addFeature({_prepAttributes:function(){this._aggregatedAttributes={}},_addHostAttributes:function(t){t&&this.mixin(this._aggregatedAttributes,t)},_marshalHostAttributes:function(){this._applyAttributes(this,this._aggregatedAttributes)},_applyAttributes:function(t,e){for(var n in e)this.hasAttribute(n)||"class"===n||this.serializeValueToAttribute(e[n],n,this)},_marshalAttributes:function(){this._takeAttributesToModel(this)},_takeAttributesToModel:function(t){for(var e=0,n=this.attributes.length;n>e;e++)this._setAttributeToProperty(t,this.attributes[e].name)},_setAttributeToProperty:function(t,e){if(!this._serializing){var n=Polymer.CaseMap.dashToCamelCase(e),i=this.getPropertyInfo(n);if(i.defined||this._propertyEffects&&this._propertyEffects[n]){var o=this.getAttribute(e);t[n]=this.deserialize(o,i.type)}}},_serializing:!1,reflectPropertyToAttribute:function(t){this._serializing=!0,this.serializeValueToAttribute(this[t],Polymer.CaseMap.camelToDashCase(t)),this._serializing=!1},serializeValueToAttribute:function(t,e,n){var i=this.serialize(t);(n||this)[void 0===i?"removeAttribute":"setAttribute"](e,i)},deserialize:function(t,e){switch(e){case Number:t=Number(t);break;case Boolean:t=null!==t;break;case Object:try{t=JSON.parse(t)}catch(n){}break;case Array:try{t=JSON.parse(t)}catch(n){t=null,console.warn("Polymer::Attributes: couldn`t decode Array as JSON")}break;case Date:t=new Date(t);break;case String:}return t},serialize:function(t){switch(typeof t){case"boolean":return t?"":void 0;case"object":if(t instanceof Date)return t;if(t)try{return JSON.stringify(t)}catch(e){return""}default:return null!=t?t:void 0}}}),Polymer.Base._addFeature({_setupDebouncers:function(){this._debouncers={}},debounce:function(t,e,n){return this._debouncers[t]=Polymer.Debounce.call(this,this._debouncers[t],e,n)},isDebouncerActive:function(t){var e=this._debouncers[t];return e&&e.finish},flushDebouncer:function(t){var e=this._debouncers[t];e&&e.complete()},cancelDebouncer:function(t){var e=this._debouncers[t];e&&e.stop()}}),Polymer.version="master",Polymer.Base._addFeature({_registerFeatures:function(){this._prepIs(),this._prepAttributes(),this._prepBehaviors(),this._prepConstructor()},_prepBehavior:function(t){this._addHostAttributes(t.hostAttributes)},_marshalBehavior:function(t){},_initFeatures:function(){this._marshalHostAttributes(),this._setupDebouncers(),this._marshalBehaviors()}}),Polymer.Base._addFeature({_prepTemplate:function(){this._template=this._template||Polymer.DomModule["import"](this.is,"template"),this._template&&this._template.hasAttribute("is")&&this._warn(this._logf("_prepTemplate","top-level Polymer template must not be a type-extension, found",this._template,"Move inside simple <template>.")),this._template&&!this._template.content&&HTMLTemplateElement.bootstrap&&(HTMLTemplateElement.decorate(this._template),HTMLTemplateElement.bootstrap(this._template.content))},_stampTemplate:function(){this._template&&(this.root=this.instanceTemplate(this._template))},instanceTemplate:function(t){var e=document.importNode(t._content||t.content,!0);return e}}),function(){var t=Polymer.Base.attachedCallback;Polymer.Base._addFeature({_hostStack:[],ready:function(){},_pushHost:function(t){this.dataHost=t=t||Polymer.Base._hostStack[Polymer.Base._hostStack.length-1],t&&t._clients&&t._clients.push(this),this._beginHost()},_beginHost:function(){Polymer.Base._hostStack.push(this),this._clients||(this._clients=[])},_popHost:function(){Polymer.Base._hostStack.pop()},_tryReady:function(){this._canReady()&&this._ready()},_canReady:function(){return!this.dataHost||this.dataHost._clientsReadied},_ready:function(){this._beforeClientsReady(),this._setupRoot(),this._readyClients(),this._afterClientsReady(),this._readySelf()},_readyClients:function(){this._beginDistribute();for(var t,e=this._clients,n=0,i=e.length;i>n&&(t=e[n]);n++)t._ready();this._finishDistribute(),this._clientsReadied=!0,this._clients=null},_readySelf:function(){this._doBehavior("ready"),this._readied=!0,this._attachedPending&&(this._attachedPending=!1,this.attachedCallback())},_beforeClientsReady:function(){},_afterClientsReady:function(){},_beforeAttached:function(){},attachedCallback:function(){this._readied?(this._beforeAttached(),t.call(this)):this._attachedPending=!0}})}(),Polymer.ArraySplice=function(){function t(t,e,n){return{index:t,removed:e,addedCount:n}}function e(){}var n=0,i=1,o=2,r=3;return e.prototype={calcEditDistances:function(t,e,n,i,o,r){for(var s=r-o+1,a=n-e+1,l=new Array(s),h=0;s>h;h++)l[h]=new Array(a),l[h][0]=h;for(var c=0;a>c;c++)l[0][c]=c;for(var h=1;s>h;h++)for(var c=1;a>c;c++)if(this.equals(t[e+c-1],i[o+h-1]))l[h][c]=l[h-1][c-1];else{var u=l[h-1][c]+1,d=l[h][c-1]+1;l[h][c]=d>u?u:d}return l},spliceOperationsFromEditDistances:function(t){for(var e=t.length-1,s=t[0].length-1,a=t[e][s],l=[];e>0||s>0;)if(0!=e)if(0!=s){var h,c=t[e-1][s-1],u=t[e-1][s],d=t[e][s-1];h=d>u?c>u?u:c:c>d?d:c,h==c?(c==a?l.push(n):(l.push(i),a=c),e--,s--):h==u?(l.push(r),e--,a=u):(l.push(o),s--,a=d)}else l.push(r),e--;else l.push(o),s--;return l.reverse(),l},calcSplices:function(e,s,a,l,h,c){var u=0,d=0,f=Math.min(a-s,c-h);if(0==s&&0==h&&(u=this.sharedPrefix(e,l,f)),a==e.length&&c==l.length&&(d=this.sharedSuffix(e,l,f-u)),s+=u,h+=u,a-=d,c-=d,a-s==0&&c-h==0)return[];if(s==a){for(var p=t(s,[],0);c>h;)p.removed.push(l[h++]);return[p]}if(h==c)return[t(s,[],a-s)];for(var _=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,s,a,l,h,c)),p=void 0,m=[],y=s,v=h,g=0;g<_.length;g++)switch(_[g]){case n:p&&(m.push(p),p=void 0),y++,v++;break;case i:p||(p=t(y,[],0)),p.addedCount++,y++,p.removed.push(l[v]),v++;break;case o:p||(p=t(y,[],0)),p.addedCount++,y++;break;case r:p||(p=t(y,[],0)),p.removed.push(l[v]),v++}return p&&m.push(p),m},sharedPrefix:function(t,e,n){for(var i=0;n>i;i++)if(!this.equals(t[i],e[i]))return i;return n},sharedSuffix:function(t,e,n){for(var i=t.length,o=e.length,r=0;n>r&&this.equals(t[--i],e[--o]);)r++;return r},calculateSplices:function(t,e){return this.calcSplices(t,0,t.length,e,0,e.length)},equals:function(t,e){return t===e}},new e}(),Polymer.domInnerHTML=function(){function t(t){switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function e(e){return e.replace(s,t)}function n(e){return e.replace(a,t)}function i(t){for(var e={},n=0;n<t.length;n++)e[t[n]]=!0;return e}function o(t,i,o){switch(t.nodeType){case Node.ELEMENT_NODE:for(var s,a=t.localName,c="<"+a,u=t.attributes,d=0;s=u[d];d++)c+=" "+s.name+'="'+e(s.value)+'"';return c+=">",l[a]?c:c+r(t,o)+"</"+a+">";case Node.TEXT_NODE:var f=t.data;return i&&h[i.localName]?f:n(f);case Node.COMMENT_NODE:return"<!--"+t.data+"-->";default:throw console.error(t),new Error("not implemented")}}function r(t,e){t instanceof HTMLTemplateElement&&(t=t.content);var n="",i=Polymer.dom(t).childNodes;i=e?t._composedChildren:i;for(var r,s=0,a=i.length;a>s&&(r=i[s]);s++)n+=o(r,t,e);return n}var s=/[&\u00A0"]/g,a=/[&\u00A0<>]/g,l=i(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),h=i(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);return{getInnerHTML:r}}(),Polymer.DomApi=function(){"use strict";function t(t,e){return t=t||document,t.__domApi||(t.__domApi=new y(t,e)),t.__domApi}function e(t){return Boolean(t.__domApi)}function n(t){var e=t._lightChildren;return e?e:t.childNodes}function i(t){return t._composedChildren||(t._composedChildren=Array.prototype.slice.call(t.childNodes)),t._composedChildren}function o(t,e,n){var o=i(t),r=n?o.indexOf(n):-1;if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var a=i(e),l=0;l<a.length;l++)s(a[l],t,o,r+l);e._composedChildren=null}else s(e,t,o,r)}function r(t){return t.__patched?t._composedParent:t.parentNode}function s(t,e,n,i){t._composedParent=e,n.splice(i>=0?i:n.length,0,t)}function a(t,e){if(e._composedParent=null,t){var n=i(t),o=n.indexOf(e);o>=0&&n.splice(o,1)}}function l(t){if(!t._lightChildren){for(var e,n=Array.prototype.slice.call(t.childNodes),i=0,o=n.length;o>i&&(e=n[i]);i++)e._lightParent=e._lightParent||t;t._lightChildren=n}}function h(t){return Boolean(t&&t._insertionPoints.length)}var c=Polymer.Settings,u=Polymer.domInnerHTML.getInnerHTML,d=Element.prototype.insertBefore,f=Element.prototype.removeChild,p=Element.prototype.appendChild,_=Element.prototype.cloneNode,m=Document.prototype.importNode,y=function(t){this.node=t,this.patch&&this.patch()};if(window.wrap&&c.useShadow&&!c.useNativeShadow&&(y=function(t){this.node=wrap(t),this.patch&&this.patch()}),y.prototype={flush:function(){Polymer.dom.flush()},_lazyDistribute:function(t){t.shadyRoot&&t.shadyRoot._distributionClean&&(t.shadyRoot._distributionClean=!1,Polymer.dom.addDebouncer(t.debounce("_distribute",t._distributeContent)))},appendChild:function(t){return this._addNode(t)},insertBefore:function(t,e){return this._addNode(t,e)},_addNode:function(t,e){this._removeNodeFromParent(t);var n,i=this.getOwnerRoot();if(i&&(n=this._maybeAddInsertionPoint(t,this.node)),this._nodeHasLogicalChildren(this.node)){if(e){var r=this.childNodes,s=r.indexOf(e);if(0>s)throw Error("The ref_node to be inserted before is not a child of this node")}this._addLogicalInfo(t,this.node,s)}if(this._addNodeToHost(t),!this._maybeDistribute(t,this.node)&&!this._tryRemoveUndistributedNode(t)){e&&(e=e.localName===b?this._firstComposedNode(e):e);var a=this.node._isShadyRoot?this.node.host:this.node;o(a,t,e),e?d.call(a,t,e):p.call(a,t)}return n&&this._updateInsertionPoints(i.host),this.notifyObserver(),t},removeChild:function(e){if(t(e).parentNode!==this.node&&console.warn("The node to be removed is not a child of this node",e),this._removeNodeFromHost(e),!this._maybeDistribute(e,this.node)){var n=this.node._isShadyRoot?this.node.host:this.node;n===e.parentNode&&(a(n,e),f.call(n,e))}return this.notifyObserver(),e},replaceChild:function(t,e){return this.insertBefore(t,e),this.removeChild(e),t},_hasCachedOwnerRoot:function(t){return Boolean(void 0!==t._ownerShadyRoot)},getOwnerRoot:function(){return this._ownerShadyRootForNode(this.node)},_ownerShadyRootForNode:function(t){if(t){if(void 0===t._ownerShadyRoot){var e;if(t._isShadyRoot)e=t;else{var n=Polymer.dom(t).parentNode;e=n?n._isShadyRoot?n:this._ownerShadyRootForNode(n):null}t._ownerShadyRoot=e}return t._ownerShadyRoot}},_maybeDistribute:function(t,e){var n=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!t.__noContent&&Polymer.dom(t).querySelector(b),i=n&&Polymer.dom(n).parentNode.nodeType!==Node.DOCUMENT_FRAGMENT_NODE,o=n||t.localName===b;if(o){var r=this._ownerShadyRootForNode(e);if(r){var s=r.host;this._lazyDistribute(s)}}var a=this._parentNeedsDistribution(e);return a&&this._lazyDistribute(e),a||o&&!i},_maybeAddInsertionPoint:function(e,n){var i;if(e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE||e.__noContent)e.localName===b&&(l(n),l(e),i=!0);else for(var o,r,s,a=t(e).querySelectorAll(b),h=0;h<a.length&&(o=a[h]);h++)r=t(o).parentNode,r===e&&(r=n),s=this._maybeAddInsertionPoint(o,r),i=i||s;return i},_tryRemoveUndistributedNode:function(t){if(this.node.shadyRoot){var e=r(t);return e&&f.call(e,t),!0}},_updateInsertionPoints:function(e){for(var n,i=e.shadyRoot._insertionPoints=t(e.shadyRoot).querySelectorAll(b),o=0;o<i.length;o++)n=i[o],l(n),l(t(n).parentNode)},_nodeHasLogicalChildren:function(t){return Boolean(void 0!==t._lightChildren)},_parentNeedsDistribution:function(t){return t&&t.shadyRoot&&h(t.shadyRoot)},_removeNodeFromParent:function(n){var i=n._lightParent||n.parentNode;i&&e(i)&&t(i).notifyObserver(),this._removeNodeFromHost(n,!0)},_removeNodeFromHost:function(e,n){var i,o,s=e._lightParent;s&&(t(e)._distributeParent(),o=this._ownerShadyRootForNode(e),o&&(o.host._elementRemove(e),i=this._removeDistributedChildren(o,e)),this._removeLogicalInfo(e,s)),this._removeOwnerShadyRoot(e),o&&i?(this._updateInsertionPoints(o.host),this._lazyDistribute(o.host)):n&&a(r(e),e)},_removeDistributedChildren:function(e,n){for(var i,o=e._insertionPoints,r=0;r<o.length;r++){var s=o[r];if(this._contains(n,s))for(var l=t(s).getDistributedNodes(),h=0;h<l.length;h++){i=!0;var c=l[h],u=c.parentNode;u&&(a(u,c),f.call(u,c))}}return i},_contains:function(e,n){for(;n;){if(n==e)return!0;n=t(n).parentNode}},_addNodeToHost:function(t){var e=this.getOwnerRoot();e&&e.host._elementAdd(t)},_addLogicalInfo:function(e,n,i){var o=t(n).childNodes;if(i=void 0===i?o.length:i,e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var r,s=Array.prototype.slice.call(e.childNodes),a=0;a<s.length&&(r=s[a]);a++)o.splice(i++,0,r),r._lightParent=n;else o.splice(i,0,e),e._lightParent=n},_removeLogicalInfo:function(e,n){var i=t(n).childNodes,o=i.indexOf(e);if(0>o||n!==e._lightParent)throw Error("The node to be removed is not a child of this node");i.splice(o,1),e._lightParent=null},_removeOwnerShadyRoot:function(e){if(this._hasCachedOwnerRoot(e))for(var n,i=t(e).childNodes,o=0,r=i.length;r>o&&(n=i[o]);o++)this._removeOwnerShadyRoot(n);e._ownerShadyRoot=void 0},_firstComposedNode:function(e){for(var n,i,o=t(e).getDistributedNodes(),r=0,s=o.length;s>r&&(n=o[r]);r++)if(i=t(n).getDestinationInsertionPoints(),i[i.length-1]===e)return n},querySelector:function(t){return this.querySelectorAll(t)[0]},querySelectorAll:function(t){return this._query(function(e){return C.call(e,t)},this.node)},_query:function(e,n){n=n||this.node;var i=[];return this._queryElements(t(n).childNodes,e,i),i},_queryElements:function(t,e,n){for(var i,o=0,r=t.length;r>o&&(i=t[o]);o++)i.nodeType===Node.ELEMENT_NODE&&this._queryElement(i,e,n)},_queryElement:function(e,n,i){n(e)&&i.push(e),this._queryElements(t(e).childNodes,n,i)},getDestinationInsertionPoints:function(){return this.node._destinationInsertionPoints||[]},getDistributedNodes:function(){return this.node._distributedNodes||[]},queryDistributedElements:function(t){for(var e,n=this.getEffectiveChildNodes(),i=[],o=0,r=n.length;r>o&&(e=n[o]);o++)e.nodeType===Node.ELEMENT_NODE&&C.call(e,t)&&i.push(e);return i},getEffectiveChildNodes:function(){for(var e,n=[],i=this.childNodes,o=0,r=i.length;r>o&&(e=i[o]);o++)if(e.localName===b)for(var s=t(e).getDistributedNodes(),a=0;a<s.length;a++)n.push(s[a]);else n.push(e);return n},_clear:function(){for(;this.childNodes.length;)this.removeChild(this.childNodes[0])},setAttribute:function(t,e){this.node.setAttribute(t,e),this._distributeParent()},removeAttribute:function(t){this.node.removeAttribute(t),this._distributeParent()},_distributeParent:function(){this._parentNeedsDistribution(this.parentNode)&&this._lazyDistribute(this.parentNode)},cloneNode:function(e){var n=_.call(this.node,!1);if(e)for(var i,o=this.childNodes,r=t(n),s=0;s<o.length;s++)i=t(o[s]).cloneNode(!0),r.appendChild(i);return n},importNode:function(e,n){var i=this.node instanceof Document?this.node:this.node.ownerDocument,o=m.call(i,e,!1);if(n)for(var r,s=t(e).childNodes,a=t(o),l=0;l<s.length;l++)r=t(i).importNode(s[l],!0),a.appendChild(r);return o},observeNodes:function(t){return t?(this.observer||(this.observer=this.node.localName===b?new y.DistributedNodesObserver(this):new y.EffectiveNodesObserver(this)),this.observer.addListener(t)):void 0},unobserveNodes:function(t){this.observer&&this.observer.removeListener(t)},notifyObserver:function(){this.observer&&this.observer.notify()}},c.useShadow){var v=["cloneNode","appendChild","insertBefore","removeChild","replaceChild"];v.forEach(function(t){y.prototype[t]=function(){return this.node[t].apply(this.node,arguments)}}),y.prototype.querySelectorAll=function(t){return Array.prototype.slice.call(this.node.querySelectorAll(t))},y.prototype.getOwnerRoot=function(){for(var t=this.node;t;){if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host)return t;t=t.parentNode}},y.prototype.importNode=function(t,e){var n=this.node instanceof Document?this.node:this.node.ownerDocument;return n.importNode(t,e)},y.prototype.getDestinationInsertionPoints=function(){var t=this.node.getDestinationInsertionPoints&&this.node.getDestinationInsertionPoints();return t?Array.prototype.slice.call(t):[]},y.prototype.getDistributedNodes=function(){var t=this.node.getDistributedNodes&&this.node.getDistributedNodes();return t?Array.prototype.slice.call(t):[]},y.prototype._distributeParent=function(){};var g=["appendChild","insertBefore","removeChild","replaceChild"];g.forEach(function(t){y.prototype[t]=function(){return this.node[t].apply(this.node,arguments)}}),Object.defineProperties(y.prototype,{childNodes:{get:function(){return Array.prototype.slice.call(this.node.childNodes)},configurable:!0},children:{get:function(){return Array.prototype.slice.call(this.node.children)},configurable:!0},textContent:{get:function(){return this.node.textContent},set:function(t){return this.node.textContent=t},configurable:!0},innerHTML:{get:function(){return this.node.innerHTML},set:function(t){return this.node.innerHTML=t},configurable:!0}});var P=["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling"];P.forEach(function(t){Object.defineProperty(y.prototype,t,{get:function(){return this.node[t]},configurable:!0})})}else Object.defineProperties(y.prototype,{childNodes:{get:function(){var t=n(this.node);return Array.isArray(t)?t:Array.prototype.slice.call(t)},configurable:!0},children:{get:function(){return Array.prototype.filter.call(this.childNodes,function(t){return t.nodeType===Node.ELEMENT_NODE})},configurable:!0},parentNode:{get:function(){return this.node._lightParent||r(this.node)},configurable:!0},firstChild:{get:function(){return this.childNodes[0]},configurable:!0},lastChild:{get:function(){var t=this.childNodes;return t[t.length-1]},configurable:!0},nextSibling:{get:function(){var e=this.parentNode&&t(this.parentNode).childNodes;return e?e[Array.prototype.indexOf.call(e,this.node)+1]:void 0},configurable:!0},previousSibling:{get:function(){var e=this.parentNode&&t(this.parentNode).childNodes;return e?e[Array.prototype.indexOf.call(e,this.node)-1]:void 0},configurable:!0},firstElementChild:{get:function(){return this.children[0]},configurable:!0},lastElementChild:{get:function(){var t=this.children;return t[t.length-1]},configurable:!0},nextElementSibling:{get:function(){var e=this.parentNode&&t(this.parentNode).children;return e?e[Array.prototype.indexOf.call(e,this.node)+1]:void 0},configurable:!0},previousElementSibling:{get:function(){var e=this.parentNode&&t(this.parentNode).children;return e?e[Array.prototype.indexOf.call(e,this.node)-1]:void 0},configurable:!0},textContent:{get:function(){var t=this.node.nodeType;if(t===Node.TEXT_NODE||t===Node.COMMENT_NODE)return this.node.textContent;for(var e,n=[],i=0,o=this.childNodes;e=o[i];i++)e.nodeType!==Node.COMMENT_NODE&&n.push(e.textContent);return n.join("")},set:function(t){var e=this.node.nodeType;e===Node.TEXT_NODE||e===Node.COMMENT_NODE?this.node.textContent=t:(this._clear(),t&&this.appendChild(document.createTextNode(t)))},configurable:!0},innerHTML:{get:function(){var t=this.node.nodeType;return t===Node.TEXT_NODE||t===Node.COMMENT_NODE?null:u(this.node)},set:function(t){var e=this.node.nodeType;if(e!==Node.TEXT_NODE||e!==Node.COMMENT_NODE){this._clear();var n=document.createElement("div");n.innerHTML=t;for(var i=Array.prototype.slice.call(n.childNodes),o=0;o<i.length;o++)this.appendChild(i[o])}},configurable:!0}}),y.prototype._getComposedInnerHTML=function(){return u(this.node,!0)};var b="content";Polymer.dom=function(e,n){return e instanceof Event?Polymer.EventApi.factory(e):t(e,n)};var E=Element.prototype,C=E.matches||E.matchesSelector||E.mozMatchesSelector||E.msMatchesSelector||E.oMatchesSelector||E.webkitMatchesSelector;return{getLightChildren:n,getComposedParent:r,getComposedChildren:i,removeFromComposedParent:a,saveLightChildrenIfNeeded:l,matchesSelector:C,hasInsertionPoint:h,ctor:y,factory:t,hasDomApi:e}}(),Polymer.Base.extend(Polymer.dom,{_flushGuard:0,_FLUSH_MAX:100,_needsTakeRecords:!Polymer.Settings.useNativeCustomElements,_debouncers:[],_staticFlushList:[],_finishDebouncer:null,flush:function(){for(this._flushGuard=0,this._prepareFlush();this._debouncers.length&&this._flushGuard<this._FLUSH_MAX;){for(var t=0;t<this._debouncers.length;t++)this._debouncers[t].complete();this._finishDebouncer&&this._finishDebouncer.complete(),this._prepareFlush(),this._flushGuard++}this._flushGuard>=this._FLUSH_MAX&&console.warn("Polymer.dom.flush aborted. Flush may not be complete.")},_prepareFlush:function(){this._needsTakeRecords&&CustomElements.takeRecords();for(var t=0;t<this._staticFlushList.length;t++)this._staticFlushList[t]()},addStaticFlush:function(t){this._staticFlushList.push(t)},removeStaticFlush:function(t){var e=this._staticFlushList.indexOf(t);e>=0&&this._staticFlushList.splice(e,1)},addDebouncer:function(t){this._debouncers.push(t),this._finishDebouncer=Polymer.Debounce(this._finishDebouncer,this._finishFlush)},_finishFlush:function(){Polymer.dom._debouncers=[]}}),Polymer.EventApi=function(){"use strict";var t=Polymer.DomApi.ctor,e=Polymer.Settings;t.Event=function(t){this.event=t},e.useShadow?t.Event.prototype={get rootTarget(){return this.event.path[0]},get localTarget(){return this.event.target},get path(){return this.event.path}}:t.Event.prototype={get rootTarget(){return this.event.target},get localTarget(){for(var t=this.event.currentTarget,e=t&&Polymer.dom(t).getOwnerRoot(),n=this.path,i=0;i<n.length;i++)if(Polymer.dom(n[i]).getOwnerRoot()===e)return n[i]},get path(){if(!this.event._path){for(var t=[],e=this.rootTarget;e;)t.push(e),e=Polymer.dom(e).parentNode||e.host;t.push(window),this.event._path=t}return this.event._path}};var n=function(e){return e.__eventApi||(e.__eventApi=new t.Event(e)),e.__eventApi};return{factory:n}}(),function(){"use strict";var t=Polymer.DomApi.ctor;Object.defineProperty(t.prototype,"classList",{get:function(){return this._classList||(this._classList=new t.ClassList(this)),this._classList},configurable:!0}),t.ClassList=function(t){this.domApi=t,this.node=t.node},t.ClassList.prototype={add:function(){this.node.classList.add.apply(this.node.classList,arguments),this.domApi._distributeParent()},remove:function(){this.node.classList.remove.apply(this.node.classList,arguments),this.domApi._distributeParent()},toggle:function(){this.node.classList.toggle.apply(this.node.classList,arguments),this.domApi._distributeParent()},contains:function(){return this.node.classList.contains.apply(this.node.classList,arguments)}}}(),function(){"use strict";var t=Polymer.DomApi.ctor,e=Polymer.Settings;Polymer.DomApi.hasDomApi;if(t.EffectiveNodesObserver=function(t){this.domApi=t,this.node=this.domApi.node,this._listeners=[]},t.EffectiveNodesObserver.prototype={addListener:function(t){this._isSetup||(this._setup(),this._isSetup=!0);var e={fn:t,_nodes:[]};return this._listeners.push(e),this._scheduleNotify(),e},removeListener:function(t){var e=this._listeners.indexOf(t);e>=0&&(this._listeners.splice(e,1),t._nodes=[]),this._hasListeners()||(this._cleanup(),this._isSetup=!1)},_setup:function(){this._observeContentElements(this.domApi.childNodes)},_cleanup:function(){this._unobserveContentElements(this.domApi.childNodes)},_hasListeners:function(){return Boolean(this._listeners.length)},_scheduleNotify:function(){this._debouncer&&this._debouncer.stop(),this._debouncer=Polymer.Debounce(this._debouncer,this._notify),this._debouncer.context=this,Polymer.dom.addDebouncer(this._debouncer)},notify:function(){this._hasListeners()&&this._scheduleNotify()},_notify:function(t){this._beforeCallListeners(),this._callListeners()},_beforeCallListeners:function(){this._updateContentElements()},_updateContentElements:function(){this._observeContentElements(this.domApi.childNodes);
},_observeContentElements:function(t){for(var e,n=0;n<t.length&&(e=t[n]);n++)this._isContent(e)&&(e.__observeNodesMap=e.__observeNodesMap||new WeakMap,e.__observeNodesMap.has(this)||e.__observeNodesMap.set(this,this._observeContent(e)))},_observeContent:function(t){var e=Polymer.dom(t).observeNodes(this._scheduleNotify.bind(this));return e._avoidChangeCalculation=!0,e},_unobserveContentElements:function(t){for(var e,n,i=0;i<t.length&&(e=t[i]);i++)this._isContent(e)&&(n=e.__observeNodesMap.get(this),n&&(Polymer.dom(e).unobserveNodes(n),e.__observeNodesMap["delete"](this)))},_isContent:function(t){return"content"===t.localName},_callListeners:function(){for(var t,e=this._listeners,n=this._getEffectiveNodes(),i=0;i<e.length&&(t=e[i]);i++){var o=this._generateListenerInfo(t,n);(o||t._alwaysNotify)&&this._callListener(t,o)}},_getEffectiveNodes:function(){return this.domApi.getEffectiveChildNodes()},_generateListenerInfo:function(t,e){if(t._avoidChangeCalculation)return!0;for(var n,i=t._nodes,o={target:this.node,addedNodes:[],removedNodes:[]},r=Polymer.ArraySplice.calculateSplices(e,i),s=0;s<r.length&&(n=r[s]);s++)for(var a,l=0;l<n.removed.length&&(a=n.removed[l]);l++)o.removedNodes.push(a);for(var n,s=0;s<r.length&&(n=r[s]);s++)for(var l=n.index;l<n.index+n.addedCount;l++)o.addedNodes.push(e[l]);return t._nodes=e,o.addedNodes.length||o.removedNodes.length?o:void 0},_callListener:function(t,e){return t.fn.call(this.node,e)},enableShadowAttributeTracking:function(){}},e.useShadow){var n=t.EffectiveNodesObserver.prototype._setup,i=t.EffectiveNodesObserver.prototype._cleanup;t.EffectiveNodesObserver.prototype._beforeCallListeners;Polymer.Base.extend(t.EffectiveNodesObserver.prototype,{_setup:function(){if(!this._observer){var t=this;this._mutationHandler=function(e){e&&e.length&&t._scheduleNotify()},this._observer=new MutationObserver(this._mutationHandler),this._boundFlush=this._flush.bind(this),Polymer.dom.addStaticFlush(this._boundFlush),this._observer.observe(this.node,{childList:!0})}n.call(this)},_cleanup:function(){this._observer.disconnect(),this._observer=null,this._mutationHandler=null,Polymer.dom.removeStaticFlush(this._boundFlush),i.call(this)},_flush:function(){this._observer&&this._mutationHandler(this._observer.takeRecords())},enableShadowAttributeTracking:function(){if(this._observer){this._makeContentListenersAlwaysNotify(),this._observer.disconnect(),this._observer.observe(this.node,{childList:!0,attributes:!0,subtree:!0});var t=this.domApi.getOwnerRoot(),e=t&&t.host;e&&Polymer.dom(e).observer&&Polymer.dom(e).observer.enableShadowAttributeTracking()}},_makeContentListenersAlwaysNotify:function(){for(var t,e=0;e<this._listeners.length;e++)t=this._listeners[e],t._alwaysNotify=t._isContentListener}})}}(),function(){"use strict";var t=Polymer.DomApi.ctor,e=Polymer.Settings;t.DistributedNodesObserver=function(e){t.EffectiveNodesObserver.call(this,e)},t.DistributedNodesObserver.prototype=Object.create(t.EffectiveNodesObserver.prototype),Polymer.Base.extend(t.DistributedNodesObserver.prototype,{_setup:function(){},_cleanup:function(){},_beforeCallListeners:function(){},_getEffectiveNodes:function(){return this.domApi.getDistributedNodes()}}),e.useShadow&&Polymer.Base.extend(t.DistributedNodesObserver.prototype,{_setup:function(){if(!this._observer){var t=this.domApi.getOwnerRoot(),e=t&&t.host;e&&(this._observer=Polymer.dom(e).observeNodes(this._scheduleNotify.bind(this)),this._observer._isContentListener=!0,this._hasAttrSelect()&&Polymer.dom(e).observer.enableShadowAttributeTracking())}},_hasAttrSelect:function(){var t=this.node.getAttribute("select");return t&&t.match(/[[.]+/)},_cleanup:function(){var t=this.domApi.getOwnerRoot(),e=t&&t.host;e&&Polymer.dom(e).unobserveNodes(this._observer),this._observer=null}})}(),function(){function t(t,e){e._distributedNodes.push(t);var n=t._destinationInsertionPoints;n?n.push(e):t._destinationInsertionPoints=[e]}function e(t){var e=t._distributedNodes;if(e)for(var n=0;n<e.length;n++){var i=e[n]._destinationInsertionPoints;i&&i.splice(i.indexOf(t)+1,i.length)}}function n(t,e){var n=t._lightParent;n&&n.shadyRoot&&y(n.shadyRoot)&&n.shadyRoot._distributionClean&&(n.shadyRoot._distributionClean=!1,e.shadyRoot._dirtyRoots.push(n))}function i(t,e){var n=e._destinationInsertionPoints;return n&&n[n.length-1]===t}function o(t){return"content"==t.localName}function r(t,e,n){var i=g(e);i!==t&&P(i,e),s(e),b.call(t,e,n||null),e._composedParent=t}function s(t){var e=g(t);e&&(t._composedParent=null,E.call(e,t))}function a(t,e){for(var n=0;n<e.length;n++)e[n]._composedParent=t}function l(t){for(;t&&h(t);)t=t.domHost;return t}function h(t){for(var e,n=Polymer.dom(t).children,i=0;i<n.length;i++)if(e=n[i],"content"===e.localName)return t.domHost}function c(t){for(var e,n=0;n<t._insertionPoints.length;n++)e=t._insertionPoints[n],f(e)&&Polymer.dom(e).notifyObserver()}function u(t){f(t)&&Polymer.dom(t).notifyObserver()}function d(t){if(C&&t)for(var e=0;e<t.length;e++)CustomElements.upgrade(t[e])}var f=Polymer.DomApi.hasDomApi;Polymer.Base._addFeature({_prepShady:function(){this._useContent=this._useContent||Boolean(this._template)},_poolContent:function(){this._useContent&&p(this)},_setupRoot:function(){this._useContent&&(this._createLocalRoot(),this.dataHost||d(this._lightChildren))},_createLocalRoot:function(){this.shadyRoot=this.root,this.shadyRoot._distributionClean=!1,this.shadyRoot._isShadyRoot=!0,this.shadyRoot._dirtyRoots=[];var t=this.shadyRoot._insertionPoints=!this._notes||this._notes._hasContent?this.shadyRoot.querySelectorAll("content"):[];p(this.shadyRoot);for(var e,n=0;n<t.length;n++)e=t[n],p(e),p(e.parentNode);this.shadyRoot.host=this},get domHost(){var t=Polymer.dom(this).getOwnerRoot();return t&&t.host},distributeContent:function(t){if(this.shadyRoot){var e=Polymer.dom(this);t&&e._updateInsertionPoints(this);var n=l(this);e._lazyDistribute(n)}},_distributeContent:function(){this._useContent&&!this.shadyRoot._distributionClean&&(this._beginDistribute(),this._distributeDirtyRoots(),this._finishDistribute())},_beginDistribute:function(){this._useContent&&y(this.shadyRoot)&&(this._resetDistribution(),this._distributePool(this.shadyRoot,this._collectPool()))},_distributeDirtyRoots:function(){for(var t,e=this.shadyRoot._dirtyRoots,n=0,i=e.length;i>n&&(t=e[n]);n++)t._distributeContent();this.shadyRoot._dirtyRoots=[]},_finishDistribute:function(){if(this._useContent){if(this.shadyRoot._distributionClean=!0,y(this.shadyRoot))this._composeTree(),c(this.shadyRoot);else if(this.shadyRoot._hasDistributed){var t=this._composeNode(this);this._updateChildNodes(this,t)}else this.textContent="",this._composedChildren=null,this.appendChild(this.shadyRoot);this.shadyRoot._hasDistributed||u(this),this.shadyRoot._hasDistributed=!0}},elementMatches:function(t,e){return e=e||this,m.call(e,t)},_resetDistribution:function(){for(var t=_(this),n=0;n<t.length;n++){var i=t[n];i._destinationInsertionPoints&&(i._destinationInsertionPoints=void 0),o(i)&&e(i)}for(var r=this.shadyRoot,s=r._insertionPoints,a=0;a<s.length;a++)s[a]._distributedNodes=[]},_collectPool:function(){for(var t=[],e=_(this),n=0;n<e.length;n++){var i=e[n];o(i)?t.push.apply(t,i._distributedNodes):t.push(i)}return t},_distributePool:function(t,e){for(var i,o=t._insertionPoints,r=0,s=o.length;s>r&&(i=o[r]);r++)this._distributeInsertionPoint(i,e),n(i,this)},_distributeInsertionPoint:function(e,n){for(var i,o=!1,r=0,s=n.length;s>r;r++)i=n[r],i&&this._matchesContentSelect(i,e)&&(t(i,e),n[r]=void 0,o=!0);if(!o)for(var a=_(e),l=0;l<a.length;l++)t(a[l],e)},_composeTree:function(){this._updateChildNodes(this,this._composeNode(this));for(var t,e,n=this.shadyRoot._insertionPoints,i=0,o=n.length;o>i&&(t=n[i]);i++)e=t._lightParent||t.parentNode,e._useContent||e===this||e===this.shadyRoot||this._updateChildNodes(e,this._composeNode(e))},_composeNode:function(t){for(var e=[],n=_(t.shadyRoot||t),r=0;r<n.length;r++){var s=n[r];if(o(s))for(var a=s._distributedNodes,l=0;l<a.length;l++){var h=a[l];i(s,h)&&e.push(h)}else e.push(s)}return e},_updateChildNodes:function(t,e){for(var n,i=v(t),o=Polymer.ArraySplice.calculateSplices(e,i),l=0,h=0;l<o.length&&(n=o[l]);l++){for(var c,u=0;u<n.removed.length&&(c=n.removed[u]);u++)g(c)===t&&s(c),i.splice(n.index+h,1);h-=n.addedCount}for(var n,d,l=0;l<o.length&&(n=o[l]);l++){d=i[n.index];for(var c,u=n.index;u<n.index+n.addedCount;u++)c=e[u],r(t,c,d),i.splice(u,0,c)}a(t,e)},_matchesContentSelect:function(t,e){var n=e.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(t instanceof Element))return!1;var i=/^(:not\()?[*.#[a-zA-Z_|]/;return i.test(n)?this.elementMatches(n,t):!1},_elementAdd:function(){},_elementRemove:function(){}});var p=Polymer.DomApi.saveLightChildrenIfNeeded,_=Polymer.DomApi.getLightChildren,m=Polymer.DomApi.matchesSelector,y=Polymer.DomApi.hasInsertionPoint,v=Polymer.DomApi.getComposedChildren,g=Polymer.DomApi.getComposedParent,P=Polymer.DomApi.removeFromComposedParent,b=Element.prototype.insertBefore,E=Element.prototype.removeChild,C=window.CustomElements&&!CustomElements.useNative}(),Polymer.Settings.useShadow&&Polymer.Base._addFeature({_poolContent:function(){},_beginDistribute:function(){},distributeContent:function(){},_distributeContent:function(){},_finishDistribute:function(){},_createLocalRoot:function(){this.createShadowRoot(),this.shadowRoot.appendChild(this.root),this.root=this.shadowRoot}}),Polymer.DomModule=document.createElement("dom-module"),Polymer.Base._addFeature({_registerFeatures:function(){this._prepIs(),this._prepAttributes(),this._prepBehaviors(),this._prepConstructor(),this._prepTemplate(),this._prepShady()},_prepBehavior:function(t){this._addHostAttributes(t.hostAttributes)},_initFeatures:function(){this._poolContent(),this._pushHost(),this._stampTemplate(),this._popHost(),this._marshalHostAttributes(),this._setupDebouncers(),this._marshalBehaviors(),this._tryReady()},_marshalBehavior:function(t){}}),Polymer.nar=[],Polymer.Annotations={parseAnnotations:function(t){var e=[],n=t._content||t.content;return this._parseNodeAnnotations(n,e),e},_parseNodeAnnotations:function(t,e){return t.nodeType===Node.TEXT_NODE?this._parseTextNodeAnnotation(t,e):this._parseElementAnnotations(t,e)},_bindingRegex:/([^{[]*)({{|\[\[)([^}\]]*)(?:]]|}})/g,_parseBindings:function(t){for(var e,n,i=this._bindingRegex,o=[];null!==(e=i.exec(t));){e[1]&&o.push({literal:e[1]});var r=e[2][0],s=e[3].trim(),a=!1;"!"==s[0]&&(a=!0,s=s.substring(1).trim());var l,h,c;"{"==r&&(c=s.indexOf("::"))>0&&(h=s.substring(c+2),s=s.substring(0,c),l=!0),o.push({compoundIndex:o.length,value:s,mode:r,negate:a,event:h,customEvent:l}),n=i.lastIndex}if(n&&n<t.length){var u=t.substring(n);u&&o.push({literal:u})}return o.length?o:void 0},_literalFromParts:function(t){for(var e="",n=0;n<t.length;n++){var i=t[n].literal;e+=i||""}return e},_parseTextNodeAnnotation:function(t,e){var n=this._parseBindings(t.textContent);if(n){t.textContent=this._literalFromParts(n)||" ";var i={bindings:[{kind:"text",name:"textContent",parts:n,isCompound:1!==n.length}]};return e.push(i),i}},_parseElementAnnotations:function(t,e){var n={bindings:[],events:[]};return"content"===t.localName&&(e._hasContent=!0),this._parseChildNodesAnnotations(t,n,e),t.attributes&&(this._parseNodeAttributeAnnotations(t,n,e),this.prepElement&&this.prepElement(t)),(n.bindings.length||n.events.length||n.id)&&e.push(n),n},_parseChildNodesAnnotations:function(t,e,n,i){if(t.firstChild)for(var o=0,r=t.firstChild;r;r=r.nextSibling,o++){if("template"!==r.localName||r.hasAttribute("preserve-content")||this._parseTemplate(r,o,n,e),r.nodeType===Node.TEXT_NODE)for(var s=r.nextSibling;s&&s.nodeType===Node.TEXT_NODE;)r.textContent+=s.textContent,t.removeChild(s),s=s.nextSibling;var a=this._parseNodeAnnotations(r,n,i);a&&(a.parent=e,a.index=o)}},_parseTemplate:function(t,e,n,i){var o=document.createDocumentFragment();o._notes=this.parseAnnotations(t),o.appendChild(t.content),n.push({bindings:Polymer.nar,events:Polymer.nar,templateContent:o,parent:i,index:e})},_parseNodeAttributeAnnotations:function(t,e){for(var n,i=Array.prototype.slice.call(t.attributes),o=i.length-1;n=i[o];o--){var r,s=n.name,a=n.value;"on-"===s.slice(0,3)?(t.removeAttribute(s),e.events.push({name:s.slice(3),value:a})):(r=this._parseNodeAttributeAnnotation(t,s,a))?e.bindings.push(r):"id"===s&&(e.id=a)}},_parseNodeAttributeAnnotation:function(t,e,n){var i=this._parseBindings(n);if(i){var o=e,r="property";"$"==e[e.length-1]&&(e=e.slice(0,-1),r="attribute");var s=this._literalFromParts(i);return s&&"attribute"==r&&t.setAttribute(e,s),"input"==t.localName&&"value"==e&&t.setAttribute(o,""),t.removeAttribute(o),"property"===r&&(e=Polymer.CaseMap.dashToCamelCase(e)),{kind:r,name:e,parts:i,literal:s,isCompound:1!==i.length}}},_localSubTree:function(t,e){return t===e?t.childNodes:t._lightChildren||t.childNodes},findAnnotatedNode:function(t,e){var n=e.parent&&Polymer.Annotations.findAnnotatedNode(t,e.parent);return n?Polymer.Annotations._localSubTree(n,t)[e.index]:t}},function(){function t(t,e){return t.replace(a,function(t,i,o,r){return i+"'"+n(o.replace(/["']/g,""),e)+"'"+r})}function e(e,i){for(var o in l)for(var r,s,a,c=l[o],u=0,d=c.length;d>u&&(r=c[u]);u++)("*"===o||e.localName===o)&&(s=e.attributes[r],a=s&&s.value,a&&a.search(h)<0&&(s.value="style"===r?t(a,i):n(a,i)))}function n(t,e){if(t&&"#"===t[0])return t;var n=o(e);return n.href=t,n.href||t}function i(t,e){return r||(r=document.implementation.createHTMLDocument("temp"),s=r.createElement("base"),r.head.appendChild(s)),s.href=e,n(t,r)}function o(t){return t.__urlResolver||(t.__urlResolver=t.createElement("a"))}var r,s,a=/(url\()([^)]*)(\))/g,l={"*":["href","src","style","url"],form:["action"]},h=/\{\{|\[\[/;Polymer.ResolveUrl={resolveCss:t,resolveAttrs:e,resolveUrl:i}}(),Polymer.Base._addFeature({_prepAnnotations:function(){this._template?(Polymer.Annotations.prepElement=this._prepElement.bind(this),this._template._content&&this._template._content._notes?this._notes=this._template._content._notes:this._notes=Polymer.Annotations.parseAnnotations(this._template),this._processAnnotations(this._notes),Polymer.Annotations.prepElement=null):this._notes=[]},_processAnnotations:function(t){for(var e=0;e<t.length;e++){for(var n=t[e],i=0;i<n.bindings.length;i++)for(var o=n.bindings[i],r=0;r<o.parts.length;r++){var s=o.parts[r];s.literal||(s.signature=this._parseMethod(s.value),s.signature||(s.model=this._modelForPath(s.value)))}if(n.templateContent){this._processAnnotations(n.templateContent._notes);var a=n.templateContent._parentProps=this._discoverTemplateParentProps(n.templateContent._notes),l=[];for(var h in a)l.push({index:n.index,kind:"property",name:"_parent_"+h,parts:[{mode:"{",model:h,value:h}]});n.bindings=n.bindings.concat(l)}}},_discoverTemplateParentProps:function(t){var e={};return t.forEach(function(t){if(t.bindings.forEach(function(t){t.parts.forEach(function(t){if(t.signature)for(var n=t.signature.args,i=0;i<n.length;i++)e[n[i].model]=!0;else e[t.model]=!0})}),t.templateContent){var n=t.templateContent._parentProps;Polymer.Base.mixin(e,n)}}),e},_prepElement:function(t){Polymer.ResolveUrl.resolveAttrs(t,this._template.ownerDocument)},_findAnnotatedNode:Polymer.Annotations.findAnnotatedNode,_marshalAnnotationReferences:function(){this._template&&(this._marshalIdNodes(),this._marshalAnnotatedNodes(),this._marshalAnnotatedListeners())},_configureAnnotationReferences:function(t){for(var e=this._notes,n=this._nodes,i=0;i<e.length;i++){var o=e[i],r=n[i];this._configureTemplateContent(o,r),this._configureCompoundBindings(o,r)}},_configureTemplateContent:function(t,e){t.templateContent&&(e._content=t.templateContent)},_configureCompoundBindings:function(t,e){for(var n=t.bindings,i=0;i<n.length;i++){var o=n[i];if(o.isCompound){for(var r=e.__compoundStorage__||(e.__compoundStorage__={}),s=o.parts,a=new Array(s.length),l=0;l<s.length;l++)a[l]=s[l].literal;var h=o.name;r[h]=a,o.literal&&"property"==o.kind&&(e._configValue?e._configValue(h,o.literal):e[h]=o.literal)}}},_marshalIdNodes:function(){this.$={},this._notes.forEach(function(t){t.id&&(this.$[t.id]=this._findAnnotatedNode(this.root,t))},this)},_marshalAnnotatedNodes:function(){this._nodes&&(this._nodes=this._nodes.map(function(t){return this._findAnnotatedNode(this.root,t)},this))},_marshalAnnotatedListeners:function(){this._notes.forEach(function(t){if(t.events&&t.events.length){var e=this._findAnnotatedNode(this.root,t);t.events.forEach(function(t){this.listen(e,t.name,t.value)},this)}},this)}}),Polymer.Base._addFeature({listeners:{},_listenListeners:function(t){var e,n,i;for(i in t)i.indexOf(".")<0?(e=this,n=i):(n=i.split("."),e=this.$[n[0]],n=n[1]),this.listen(e,n,t[i])},listen:function(t,e,n){var i=this._recallEventHandler(this,e,t,n);i||(i=this._createEventHandler(t,e,n)),i._listening||(this._listen(t,e,i),i._listening=!0)},_boundListenerKey:function(t,e){return t+":"+e},_recordEventHandler:function(t,e,n,i,o){var r=t.__boundListeners;r||(r=t.__boundListeners=new WeakMap);var s=r.get(n);s||(s={},r.set(n,s));var a=this._boundListenerKey(e,i);s[a]=o},_recallEventHandler:function(t,e,n,i){var o=t.__boundListeners;if(o){var r=o.get(n);if(r){var s=this._boundListenerKey(e,i);return r[s]}}},_createEventHandler:function(t,e,n){var i=this,o=function(t){i[n]?i[n](t,t.detail):i._warn(i._logf("_createEventHandler","listener method `"+n+"` not defined"))};return o._listening=!1,this._recordEventHandler(i,e,t,n,o),o},unlisten:function(t,e,n){var i=this._recallEventHandler(this,e,t,n);i&&(this._unlisten(t,e,i),i._listening=!1)},_listen:function(t,e,n){t.addEventListener(e,n)},_unlisten:function(t,e,n){t.removeEventListener(e,n)}}),function(){"use strict";function t(t){for(var e,n=0;n<_.length;n++)e=_[n],t?document.addEventListener(e,g,!0):document.removeEventListener(e,g,!0)}function e(){if(!v){P.mouse.mouseIgnoreJob||t(!0);var e=function(){t(),P.mouse.target=null,P.mouse.mouseIgnoreJob=null};P.mouse.mouseIgnoreJob=Polymer.Debounce(P.mouse.mouseIgnoreJob,e,p)}}function n(t){var e=t.type;if(-1===_.indexOf(e))return!1;if("mousemove"===e){var n=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!y&&(n=m[t.which]||0),Boolean(1&n)}var i=void 0===t.button?0:t.button;return 0===i}function i(t){if("click"===t.type){if(0===t.detail)return!0;var e=b.findOriginalTarget(t),n=e.getBoundingClientRect(),i=t.pageX,o=t.pageY;return!(i>=n.left&&i<=n.right&&o>=n.top&&o<=n.bottom)}return!1}function o(t){for(var e,n=Polymer.dom(t).path,i="auto",o=0;o<n.length;o++)if(e=n[o],e[c]){i=e[c];break}return i}function r(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function s(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn)}var a="string"==typeof document.head.style.touchAction,l="__polymerGestures",h="__polymerGesturesHandled",c="__polymerGesturesTouchAction",u=25,d=5,f=2,p=2500,_=["mousedown","mousemove","mouseup","click"],m=[0,1,4,2],y=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}(),v=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),g=function(t){if(t[h]={skip:!0},"click"===t.type){for(var e=Polymer.dom(t).path,n=0;n<e.length;n++)if(e[n]===P.mouse.target)return;t.preventDefault(),t.stopPropagation()}},P={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}},b={gestures:{},recognizers:[],deepTargetFind:function(t,e){for(var n=document.elementFromPoint(t,e),i=n;i&&i.shadowRoot;)i=i.shadowRoot.elementFromPoint(t,e),i&&(n=i);return n},findOriginalTarget:function(t){return t.path?t.path[0]:t.target},handleNative:function(t){var n,i=t.type,o=t.currentTarget,r=o[l],s=r[i];if(s){if(!t[h]&&(t[h]={},"touch"===i.slice(0,5))){var c=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(P.touch.id=c.identifier),P.touch.id!==c.identifier)return;a||("touchstart"===i||"touchmove"===i)&&b.handleTouchAction(t),"touchend"===i&&(P.mouse.target=Polymer.dom(t).rootTarget,e(!0))}if(n=t[h],!n.skip){for(var u,d=b.recognizers,f=0;f<d.length;f++)u=d[f],s[u.name]&&!n[u.name]&&u.flow&&u.flow.start.indexOf(t.type)>-1&&u.reset&&u.reset();for(var u,f=0;f<d.length;f++)u=d[f],s[u.name]&&!n[u.name]&&(n[u.name]=!0,u[i](t))}}},handleTouchAction:function(t){var e=t.changedTouches[0],n=t.type;if("touchstart"===n)P.touch.x=e.clientX,P.touch.y=e.clientY,P.touch.scrollDecided=!1;else if("touchmove"===n){if(P.touch.scrollDecided)return;P.touch.scrollDecided=!0;var i=o(t),r=!1,s=Math.abs(P.touch.x-e.clientX),a=Math.abs(P.touch.y-e.clientY);t.cancelable&&("none"===i?r=!0:"pan-x"===i?r=a>s:"pan-y"===i&&(r=s>a)),r?t.preventDefault():b.prevent("track")}},add:function(t,e,n){var i=this.gestures[e],o=i.deps,r=i.name,s=t[l];s||(t[l]=s={});for(var a,h,c=0;c<o.length;c++)a=o[c],v&&_.indexOf(a)>-1||(h=s[a],h||(s[a]=h={_count:0}),0===h._count&&t.addEventListener(a,this.handleNative),h[r]=(h[r]||0)+1,h._count=(h._count||0)+1);t.addEventListener(e,n),i.touchAction&&this.setTouchAction(t,i.touchAction)},remove:function(t,e,n){var i=this.gestures[e],o=i.deps,r=i.name,s=t[l];if(s)for(var a,h,c=0;c<o.length;c++)a=o[c],h=s[a],h&&h[r]&&(h[r]=(h[r]||1)-1,h._count=(h._count||1)-1,0===h._count&&t.removeEventListener(a,this.handleNative));t.removeEventListener(e,n)},register:function(t){this.recognizers.push(t);for(var e=0;e<t.emits.length;e++)this.gestures[t.emits[e]]=t},findRecognizerByEvent:function(t){for(var e,n=0;n<this.recognizers.length;n++){e=this.recognizers[n];for(var i,o=0;o<e.emits.length;o++)if(i=e.emits[o],i===t)return e}return null},setTouchAction:function(t,e){a&&(t.style.touchAction=e),t[c]=e},fire:function(t,e,n){var i=Polymer.Base.fire(e,n,{node:t,bubbles:!0,cancelable:!0});if(i.defaultPrevented){var o=n.sourceEvent;o&&o.preventDefault&&o.preventDefault()}},prevent:function(t){var e=this.findRecognizerByEvent(t);e.info&&(e.info.prevent=!0)}};b.register({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:function(){},upfn:function(){}},reset:function(){s(this.info)},mousedown:function(t){if(n(t)){var e=b.findOriginalTarget(t),i=this,o=function(t){n(t)||(i.fire("up",e,t),s(i.info))},a=function(t){n(t)&&i.fire("up",e,t),s(i.info)};r(this.info,o,a),this.fire("down",e,t)}},touchstart:function(t){this.fire("down",b.findOriginalTarget(t),t.changedTouches[0])},touchend:function(t){this.fire("up",b.findOriginalTarget(t),t.changedTouches[0])},fire:function(t,e,n){b.fire(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,prevent:b.prevent.bind(b)})}}),b.register({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>f&&this.moves.shift(),this.moves.push(t)},movefn:function(){},upfn:function(){},prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,s(this.info)},hasMovedEnough:function(t,e){if(this.info.prevent)return!1;if(this.info.started)return!0;var n=Math.abs(this.info.x-t),i=Math.abs(this.info.y-e);return n>=d||i>=d},mousedown:function(t){if(n(t)){var e=b.findOriginalTarget(t),i=this,o=function(t){var o=t.clientX,r=t.clientY;i.hasMovedEnough(o,r)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start",i.info.addMove({x:o,y:r}),n(t)||(i.info.state="end",s(i.info)),i.fire(e,t),i.info.started=!0)},a=function(t){i.info.started&&(b.prevent("tap"),o(t)),s(i.info)};r(this.info,o,a),this.info.x=t.clientX,this.info.y=t.clientY}},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){var e=b.findOriginalTarget(t),n=t.changedTouches[0],i=n.clientX,o=n.clientY;this.hasMovedEnough(i,o)&&(this.info.addMove({x:i,y:o}),this.fire(e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){var e=b.findOriginalTarget(t),n=t.changedTouches[0];this.info.started&&(b.prevent("tap"),this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),this.fire(e,n))},fire:function(t,e){var n,i=this.info.moves[this.info.moves.length-2],o=this.info.moves[this.info.moves.length-1],r=o.x-this.info.x,s=o.y-this.info.y,a=0;return i&&(n=o.x-i.x,a=o.y-i.y),b.fire(t,"track",{state:this.info.state,x:e.clientX,y:e.clientY,dx:r,dy:s,ddx:n,ddy:a,sourceEvent:e,hover:function(){return b.deepTargetFind(e.clientX,e.clientY)}})}}),b.register({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(t){this.info.x=t.clientX,this.info.y=t.clientY},mousedown:function(t){n(t)&&this.save(t)},click:function(t){n(t)&&this.forward(t)},touchstart:function(t){this.save(t.changedTouches[0])},touchend:function(t){this.forward(t.changedTouches[0])},forward:function(t){var e=Math.abs(t.clientX-this.info.x),n=Math.abs(t.clientY-this.info.y),o=b.findOriginalTarget(t);(isNaN(e)||isNaN(n)||u>=e&&u>=n||i(t))&&(this.info.prevent||b.fire(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t}))}});var E={x:"pan-x",y:"pan-y",none:"none",all:"auto"};Polymer.Base._addFeature({_listen:function(t,e,n){b.gestures[e]?b.add(t,e,n):t.addEventListener(e,n)},_unlisten:function(t,e,n){b.gestures[e]?b.remove(t,e,n):t.removeEventListener(e,n)},setScrollDirection:function(t,e){e=e||this,b.setTouchAction(e,E[t]||"auto")}}),Polymer.Gestures=b}(),Polymer.Async={_currVal:0,_lastVal:0,_callbacks:[],_twiddleContent:0,_twiddle:document.createTextNode(""),run:function(t,e){return e>0?~setTimeout(t,e):(this._twiddle.textContent=this._twiddleContent++,this._callbacks.push(t),this._currVal++)},cancel:function(t){if(0>t)clearTimeout(~t);else{var e=t-this._lastVal;if(e>=0){if(!this._callbacks[e])throw"invalid async handle: "+t;this._callbacks[e]=null}}},_atEndOfMicrotask:function(){for(var t=this._callbacks.length,e=0;t>e;e++){var n=this._callbacks[e];if(n)try{n()}catch(i){throw e++,this._callbacks.splice(0,e),this._lastVal+=e,this._twiddle.textContent=this._twiddleContent++,i}}this._callbacks.splice(0,t),this._lastVal+=t}},new window.MutationObserver(function(){Polymer.Async._atEndOfMicrotask()}).observe(Polymer.Async._twiddle,{characterData:!0}),Polymer.Debounce=function(){function t(t,e,i){return t?t.stop():t=new n(this),t.go(e,i),t}var e=Polymer.Async,n=function(t){this.context=t,this.boundComplete=this.complete.bind(this)};return n.prototype={go:function(t,n){var i;this.finish=function(){e.cancel(i)},i=e.run(this.boundComplete,n),this.callback=t},stop:function(){this.finish&&(this.finish(),this.finish=null)},complete:function(){this.finish&&(this.stop(),this.callback.call(this.context))}},t}(),Polymer.Base._addFeature({$$:function(t){return Polymer.dom(this.root).querySelector(t)},toggleClass:function(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?Polymer.dom(n).classList.add(t):Polymer.dom(n).classList.remove(t)},toggleAttribute:function(t,e,n){n=n||this,1==arguments.length&&(e=!n.hasAttribute(t)),e?Polymer.dom(n).setAttribute(t,""):Polymer.dom(n).removeAttribute(t)},classFollows:function(t,e,n){n&&Polymer.dom(n).classList.remove(t),e&&Polymer.dom(e).classList.add(t)},attributeFollows:function(t,e,n){n&&Polymer.dom(n).removeAttribute(t),e&&Polymer.dom(e).setAttribute(t,"")},getEffectiveChildNodes:function(){return Polymer.dom(this).getEffectiveChildNodes()},getEffectiveChildren:function(){var t=Polymer.dom(this).getEffectiveChildNodes();return t.filter(function(t){return t.nodeType===Node.ELEMENT_NODE})},getEffectiveTextContent:function(){for(var t,e=this.getEffectiveChildNodes(),n=[],i=0;t=e[i];i++)t.nodeType!==Node.COMMENT_NODE&&n.push(Polymer.dom(t).textContent);return n.join("")},queryEffectiveChildren:function(t){var e=Polymer.dom(this).queryDistributedElements(t);return e&&e[0]},queryAllEffectiveChildren:function(t){return Polymer.dom(this).queryAllDistributedElements(t)},getContentChildNodes:function(t){var e=Polymer.dom(this.root).querySelector(t||"content");return e?Polymer.dom(e).getDistributedNodes():[]},getContentChildren:function(t){return this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})},fire:function(t,e,n){n=n||Polymer.nob;var i=n.node||this,e=null===e||void 0===e?Polymer.nob:e,o=void 0===n.bubbles?!0:n.bubbles,r=Boolean(n.cancelable),s=new CustomEvent(t,{bubbles:Boolean(o),cancelable:r,detail:e});return i.dispatchEvent(s),s},async:function(t,e){return Polymer.Async.run(t.bind(this),e)},cancelAsync:function(t){Polymer.Async.cancel(t)},arrayDelete:function(t,e){var n;if(Array.isArray(t)){if(n=t.indexOf(e),n>=0)return t.splice(n,1)}else{var i=this._get(t);if(n=i.indexOf(e),n>=0)return this.splice(t,n,1)}},transform:function(t,e){e=e||this,e.style.webkitTransform=t,e.style.transform=t},translate3d:function(t,e,n,i){i=i||this,this.transform("translate3d("+t+","+e+","+n+")",i)},importHref:function(t,e,n){var i=document.createElement("link");return i.rel="import",i.href=t,e&&(i.onload=e.bind(this)),n&&(i.onerror=n.bind(this)),document.head.appendChild(i),i},create:function(t,e){var n=document.createElement(t);if(e)for(var i in e)n[i]=e[i];return n},isLightDescendant:function(t){return this.contains(t)&&Polymer.dom(this).getOwnerRoot()===Polymer.dom(t).getOwnerRoot()},isLocalDescendant:function(t){return this.root===Polymer.dom(t).getOwnerRoot()}}),Polymer.Bind={prepareModel:function(t){t._propertyEffects={},t._bindListeners=[],Polymer.Base.mixin(t,this._modelApi)},_modelApi:{_notifyChange:function(t){var e=Polymer.CaseMap.camelToDashCase(t)+"-changed";Polymer.Base.fire(e,{value:this[t]},{bubbles:!1,node:this})},_propertySetter:function(t,e,n,i){var o=this.__data__[t];return o===e||o!==o&&e!==e||(this.__data__[t]=e,"object"==typeof e&&this._clearPath(t),this._propertyChanged&&this._propertyChanged(t,e,o),n&&this._effectEffects(t,e,n,o,i)),o},__setProperty:function(t,e,n,i){i=i||this;var o=i._propertyEffects&&i._propertyEffects[t];o?i._propertySetter(t,e,o,n):i[t]=e},_effectEffects:function(t,e,n,i,o){n.forEach(function(n){var r=Polymer.Bind["_"+n.kind+"Effect"];r&&r.call(this,t,e,n.effect,i,o)},this)},_clearPath:function(t){for(var e in this.__data__)0===e.indexOf(t+".")&&(this.__data__[e]=void 0)}},ensurePropertyEffects:function(t,e){var n=t._propertyEffects[e];return n||(n=t._propertyEffects[e]=[]),n},addPropertyEffect:function(t,e,n,i){var o=this.ensurePropertyEffects(t,e);o.push({kind:n,effect:i})},createBindings:function(t){var e=t._propertyEffects;if(e)for(var n in e){var i=e[n];i.sort(this._sortPropertyEffects),this._createAccessors(t,n,i)}},_sortPropertyEffects:function(){var t={compute:0,annotation:1,computedAnnotation:2,reflect:3,notify:4,observer:5,complexObserver:6,"function":7};return function(e,n){return t[e.kind]-t[n.kind]}}(),_createAccessors:function(t,e,n){var i={get:function(){return this.__data__[e]}},o=function(t){this._propertySetter(e,t,n)},r=t.getPropertyInfo&&t.getPropertyInfo(e);r&&r.readOnly?r.computed||(t["_set"+this.upper(e)]=o):i.set=o,Object.defineProperty(t,e,i)},upper:function(t){return t[0].toUpperCase()+t.substring(1)},_addAnnotatedListener:function(t,e,n,i,o){var r=this._notedListenerFactory(n,i,this._isStructured(i),this._isEventBogus),s=o||Polymer.CaseMap.camelToDashCase(n)+"-changed";t._bindListeners.push({index:e,property:n,path:i,changedFn:r,event:s})},_isStructured:function(t){return t.indexOf(".")>0},_isEventBogus:function(t,e){return t.path&&t.path[0]!==e},_notedListenerFactory:function(t,e,n,i){return function(o,r){if(!i(o,r))if(o.detail&&o.detail.path)this._notifyPath(this._fixPath(e,t,o.detail.path),o.detail.value);else{var s=r[t];n?this.__data__[e]!=s&&this.set(e,s):this[e]=r[t]}}},prepareInstance:function(t){t.__data__=Object.create(null)},setupBindListeners:function(t){
t._bindListeners.forEach(function(e){var n=t._nodes[e.index];n.addEventListener(e.event,t._notifyListener.bind(t,e.changedFn))})}},Polymer.Base.extend(Polymer.Bind,{_shouldAddListener:function(t){return t.name&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode&&!t.parts[0].negate},_annotationEffect:function(t,e,n){t!=n.value&&(e=this._get(n.value),this.__data__[n.value]=e);var i=n.negate?!e:e;return n.customEvent&&this._nodes[n.index][n.name]===i?void 0:this._applyEffectValue(n,i)},_reflectEffect:function(t){this.reflectPropertyToAttribute(t)},_notifyEffect:function(t,e,n,i,o){o||this._notifyChange(t)},_functionEffect:function(t,e,n,i,o){n.call(this,t,e,i,o)},_observerEffect:function(t,e,n,i){var o=this[n.method];o?o.call(this,e,i):this._warn(this._logf("_observerEffect","observer method `"+n.method+"` not defined"))},_complexObserverEffect:function(t,e,n){var i=this[n.method];if(i){var o=Polymer.Bind._marshalArgs(this.__data__,n,t,e);o&&i.apply(this,o)}else this._warn(this._logf("_complexObserverEffect","observer method `"+n.method+"` not defined"))},_computeEffect:function(t,e,n){var i=Polymer.Bind._marshalArgs(this.__data__,n,t,e);if(i){var o=this[n.method];o?this.__setProperty(n.name,o.apply(this,i)):this._warn(this._logf("_computeEffect","compute method `"+n.method+"` not defined"))}},_annotatedComputationEffect:function(t,e,n){var i=this._rootDataHost||this,o=i[n.method];if(o){var r=Polymer.Bind._marshalArgs(this.__data__,n,t,e);if(r){var s=o.apply(i,r);n.negate&&(s=!s),this._applyEffectValue(n,s)}}else i._warn(i._logf("_annotatedComputationEffect","compute method `"+n.method+"` not defined"))},_marshalArgs:function(t,e,n,i){for(var o=[],r=e.args,s=0,a=r.length;a>s;s++){var l,h=r[s],c=h.name;if(l=h.literal?h.value:h.structured?Polymer.Base._get(c,t):t[c],r.length>1&&void 0===l)return;if(h.wildcard){var u=0===c.indexOf(n+"."),d=0===e.trigger.name.indexOf(c)&&!u;o[s]={path:d?n:c,value:d?i:l,base:l}}else o[s]=l}return o}}),Polymer.Base._addFeature({_addPropertyEffect:function(t,e,n){Polymer.Bind.addPropertyEffect(this,t,e,n)},_prepEffects:function(){Polymer.Bind.prepareModel(this),this._addAnnotationEffects(this._notes)},_prepBindings:function(){Polymer.Bind.createBindings(this)},_addPropertyEffects:function(t){if(t)for(var e in t){var n=t[e];n.observer&&this._addObserverEffect(e,n.observer),n.computed&&(n.readOnly=!0,this._addComputedEffect(e,n.computed)),n.notify&&this._addPropertyEffect(e,"notify"),n.reflectToAttribute&&this._addPropertyEffect(e,"reflect"),n.readOnly&&Polymer.Bind.ensurePropertyEffects(this,e)}},_addComputedEffect:function(t,e){var n=this._parseMethod(e);n.args.forEach(function(e){this._addPropertyEffect(e.model,"compute",{method:n.method,args:n.args,trigger:e,name:t})},this)},_addObserverEffect:function(t,e){this._addPropertyEffect(t,"observer",{method:e,property:t})},_addComplexObserverEffects:function(t){t&&t.forEach(function(t){this._addComplexObserverEffect(t)},this)},_addComplexObserverEffect:function(t){var e=this._parseMethod(t);e.args.forEach(function(t){this._addPropertyEffect(t.model,"complexObserver",{method:e.method,args:e.args,trigger:t})},this)},_addAnnotationEffects:function(t){this._nodes=[],t.forEach(function(t){var e=this._nodes.push(t)-1;t.bindings.forEach(function(t){this._addAnnotationEffect(t,e)},this)},this)},_addAnnotationEffect:function(t,e){Polymer.Bind._shouldAddListener(t)&&Polymer.Bind._addAnnotatedListener(this,e,t.name,t.parts[0].value,t.parts[0].event);for(var n=0;n<t.parts.length;n++){var i=t.parts[n];i.signature?this._addAnnotatedComputationEffect(t,i,e):i.literal||this._addPropertyEffect(i.model,"annotation",{kind:t.kind,index:e,name:t.name,value:i.value,isCompound:t.isCompound,compoundIndex:i.compoundIndex,event:i.event,customEvent:i.customEvent,negate:i.negate})}},_addAnnotatedComputationEffect:function(t,e,n){var i=e.signature;i["static"]?this.__addAnnotatedComputationEffect("__static__",n,t,e,null):i.args.forEach(function(i){i.literal||this.__addAnnotatedComputationEffect(i.model,n,t,e,i)},this)},__addAnnotatedComputationEffect:function(t,e,n,i,o){this._addPropertyEffect(t,"annotatedComputation",{index:e,isCompound:n.isCompound,compoundIndex:i.compoundIndex,kind:n.kind,name:n.name,negate:i.negate,method:i.signature.method,args:i.signature.args,trigger:o})},_parseMethod:function(t){var e=t.match(/([^\s]+)\((.*)\)/);if(e){var n={method:e[1],"static":!0};if(e[2].trim()){var i=e[2].replace(/\\,/g,"&comma;").split(",");return this._parseArgs(i,n)}return n.args=Polymer.nar,n}},_parseArgs:function(t,e){return e.args=t.map(function(t){var n=this._parseArg(t);return n.literal||(e["static"]=!1),n},this),e},_parseArg:function(t){var e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,model:this._modelForPath(e)},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&"9">=i&&(i="#"),i){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.structured=e.indexOf(".")>0,n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n},_marshalInstanceEffects:function(){Polymer.Bind.prepareInstance(this),Polymer.Bind.setupBindListeners(this)},_applyEffectValue:function(t,e){var n=this._nodes[t.index],i=t.name;if(t.isCompound){var o=n.__compoundStorage__[i];o[t.compoundIndex]=e,e=o.join("")}return"attribute"!=t.kind?("className"===i&&(e=this._scopeElementClass(n,e)),("textContent"===i||"input"==n.localName&&"value"==i)&&(e=void 0==e?"":e),n[i]=e):void this.serializeValueToAttribute(e,i,n)},_executeStaticEffects:function(){this._propertyEffects.__static__&&this._effectEffects("__static__",null,this._propertyEffects.__static__)}}),Polymer.Base._addFeature({_setupConfigure:function(t){this._config={};for(var e in t)void 0!==t[e]&&(this._config[e]=t[e]);this._handlers=[]},_marshalAttributes:function(){this._takeAttributesToModel(this._config)},_attributeChangedImpl:function(t){var e=this._clientsReadied?this:this._config;this._setAttributeToProperty(e,t)},_configValue:function(t,e){this._config[t]=e},_beforeClientsReady:function(){this._configure()},_configure:function(){this._configureAnnotationReferences(),this._aboveConfig=this.mixin({},this._config);var t={};this.behaviors.forEach(function(e){this._configureProperties(e.properties,t)},this),this._configureProperties(this.properties,t),this._mixinConfigure(t,this._aboveConfig),this._config=t,this._distributeConfig(this._config)},_configureProperties:function(t,e){for(var n in t){var i=t[n];if(void 0!==i.value){var o=i.value;"function"==typeof o&&(o=o.call(this,this._config)),e[n]=o}}},_mixinConfigure:function(t,e){for(var n in e)this.getPropertyInfo(n).readOnly||(t[n]=e[n])},_distributeConfig:function(t){var e=this._propertyEffects;if(e)for(var n in t){var i=e[n];if(i)for(var o,r=0,s=i.length;s>r&&(o=i[r]);r++)if("annotation"===o.kind&&!o.isCompound){var a=this._nodes[o.effect.index];if(a._configValue){var l=n===o.effect.value?t[n]:this._get(o.effect.value,t);a._configValue(o.effect.name,l)}}}},_afterClientsReady:function(){this._executeStaticEffects(),this._applyConfig(this._config,this._aboveConfig),this._flushHandlers()},_applyConfig:function(t,e){for(var n in t)void 0===this[n]&&this.__setProperty(n,t[n],n in e)},_notifyListener:function(t,e){return this._clientsReadied?t.call(this,e,e.target):void this._queueHandler([t,e,e.target])},_queueHandler:function(t){this._handlers.push(t)},_flushHandlers:function(){for(var t,e=this._handlers,n=0,i=e.length;i>n&&(t=e[n]);n++)t[0].call(this,t[1],t[2]);this._handlers=[]}}),function(){"use strict";Polymer.Base._addFeature({notifyPath:function(t,e,n){var i={};t=this._get(t,this,i),this._notifyPath(i.path,e,n)},_notifyPath:function(t,e,n){var i=this._propertySetter(t,e);return i===e||i!==i&&e!==e?void 0:(this._pathEffector(t,e),n||this._notifyPathUp(t,e),!0)},_getPathParts:function(t){if(Array.isArray(t)){for(var e=[],n=0;n<t.length;n++)for(var i=t[n].toString().split("."),o=0;o<i.length;o++)e.push(i[o]);return e}return t.toString().split(".")},set:function(t,e,n){var i,o=n||this,r=this._getPathParts(t),s=r[r.length-1];if(r.length>1){for(var a=0;a<r.length-1;a++){var l=r[a];if(i&&"#"==l[0]?o=Polymer.Collection.get(i).getItem(l):(o=o[l],i&&parseInt(l,10)==l&&(r[a]=Polymer.Collection.get(i).getKey(o))),!o)return;i=Array.isArray(o)?o:null}if(i){var h=Polymer.Collection.get(i);if("#"==s[0]){var c=s,u=h.getItem(c);s=i.indexOf(u),h.setItem(c,e)}else if(parseInt(s,10)==s){var u=o[s],c=h.getKey(u);r[a]=c,h.setItem(c,e)}}o[s]=e,n||this._notifyPath(r.join("."),e)}else o[t]=e},get:function(t,e){return this._get(t,e)},_get:function(t,e,n){for(var i,o=e||this,r=this._getPathParts(t),s=0;s<r.length;s++){if(!o)return;var a=r[s];i&&"#"==a[0]?o=Polymer.Collection.get(i).getItem(a):(o=o[a],n&&i&&parseInt(a,10)==a&&(r[s]=Polymer.Collection.get(i).getKey(o))),i=Array.isArray(o)?o:null}return n&&(n.path=r.join(".")),o},_pathEffector:function(t,e){var n=this._modelForPath(t),i=this._propertyEffects[n];i&&i.forEach(function(n){var i=this["_"+n.kind+"PathEffect"];i&&i.call(this,t,e,n.effect)},this),this._boundPaths&&this._notifyBoundPaths(t,e)},_annotationPathEffect:function(t,e,n){if(n.value===t||0===n.value.indexOf(t+"."))Polymer.Bind._annotationEffect.call(this,t,e,n);else if(0===t.indexOf(n.value+".")&&!n.negate){var i=this._nodes[n.index];if(i&&i.notifyPath){var o=this._fixPath(n.name,n.value,t);i.notifyPath(o,e,!0)}}},_complexObserverPathEffect:function(t,e,n){this._pathMatchesEffect(t,n)&&Polymer.Bind._complexObserverEffect.call(this,t,e,n)},_computePathEffect:function(t,e,n){this._pathMatchesEffect(t,n)&&Polymer.Bind._computeEffect.call(this,t,e,n)},_annotatedComputationPathEffect:function(t,e,n){this._pathMatchesEffect(t,n)&&Polymer.Bind._annotatedComputationEffect.call(this,t,e,n)},_pathMatchesEffect:function(t,e){var n=e.trigger.name;return n==t||0===n.indexOf(t+".")||e.trigger.wildcard&&0===t.indexOf(n)},linkPaths:function(t,e){this._boundPaths=this._boundPaths||{},e?this._boundPaths[t]=e:this.unlinkPaths(t)},unlinkPaths:function(t){this._boundPaths&&delete this._boundPaths[t]},_notifyBoundPaths:function(t,e){for(var n in this._boundPaths){var i=this._boundPaths[n];0==t.indexOf(n+".")?this.notifyPath(this._fixPath(i,n,t),e):0==t.indexOf(i+".")&&this.notifyPath(this._fixPath(n,i,t),e)}},_fixPath:function(t,e,n){return t+n.slice(e.length)},_notifyPathUp:function(t,e){var n=this._modelForPath(t),i=Polymer.CaseMap.camelToDashCase(n),o=i+this._EVENT_CHANGED;this.fire(o,{path:t,value:e},{bubbles:!1})},_modelForPath:function(t){var e=t.indexOf(".");return 0>e?t:t.slice(0,e)},_EVENT_CHANGED:"-changed",notifySplices:function(t,e){var n={},i=this._get(t,this,n);this._notifySplices(i,n.path,e)},_notifySplices:function(t,e,n){var i={keySplices:Polymer.Collection.applySplices(t,n),indexSplices:n};t.hasOwnProperty("splices")||Object.defineProperty(t,"splices",{configurable:!0,writable:!0}),t.splices=i,this._notifyPath(e+".splices",i),this._notifyPath(e+".length",t.length),i.keySplices=null,i.indexSplices=null},_notifySplice:function(t,e,n,i,o){this._notifySplices(t,e,[{index:n,addedCount:i,removed:o,object:t,type:"splice"}])},push:function(t){var e={},n=this._get(t,this,e),i=Array.prototype.slice.call(arguments,1),o=n.length,r=n.push.apply(n,i);return i.length&&this._notifySplice(n,e.path,o,i.length,[]),r},pop:function(t){var e={},n=this._get(t,this,e),i=Boolean(n.length),o=Array.prototype.slice.call(arguments,1),r=n.pop.apply(n,o);return i&&this._notifySplice(n,e.path,n.length,0,[r]),r},splice:function(t,e,n){var i={},o=this._get(t,this,i);e=0>e?o.length-Math.floor(-e):Math.floor(e),e||(e=0);var r=Array.prototype.slice.call(arguments,1),s=o.splice.apply(o,r),a=Math.max(r.length-2,0);return(a||s.length)&&this._notifySplice(o,i.path,e,a,s),s},shift:function(t){var e={},n=this._get(t,this,e),i=Boolean(n.length),o=Array.prototype.slice.call(arguments,1),r=n.shift.apply(n,o);return i&&this._notifySplice(n,e.path,0,0,[r]),r},unshift:function(t){var e={},n=this._get(t,this,e),i=Array.prototype.slice.call(arguments,1),o=n.unshift.apply(n,i);return i.length&&this._notifySplice(n,e.path,0,i.length,[]),o},prepareModelNotifyPath:function(t){this.mixin(t,{fire:Polymer.Base.fire,notifyPath:Polymer.Base.notifyPath,_get:Polymer.Base._get,_EVENT_CHANGED:Polymer.Base._EVENT_CHANGED,_notifyPath:Polymer.Base._notifyPath,_notifyPathUp:Polymer.Base._notifyPathUp,_pathEffector:Polymer.Base._pathEffector,_annotationPathEffect:Polymer.Base._annotationPathEffect,_complexObserverPathEffect:Polymer.Base._complexObserverPathEffect,_annotatedComputationPathEffect:Polymer.Base._annotatedComputationPathEffect,_computePathEffect:Polymer.Base._computePathEffect,_modelForPath:Polymer.Base._modelForPath,_pathMatchesEffect:Polymer.Base._pathMatchesEffect,_notifyBoundPaths:Polymer.Base._notifyBoundPaths,_getPathParts:Polymer.Base._getPathParts})}})}(),Polymer.Base._addFeature({resolveUrl:function(t){var e=Polymer.DomModule["import"](this.is),n="";if(e){var i=e.getAttribute("assetpath")||"";n=Polymer.ResolveUrl.resolveUrl(i,e.ownerDocument.baseURI)}return Polymer.ResolveUrl.resolveUrl(t,n)}}),Polymer.CssParse=function(){var t={parse:function(t){return t=this._clean(t),this._parseCss(this._lex(t),t)},_clean:function(t){return t.replace(this._rx.comments,"").replace(this._rx.port,"")},_lex:function(t){for(var e={start:0,end:t.length},n=e,i=0,o=t.length;o>i;i++)switch(t[i]){case this.OPEN_BRACE:n.rules||(n.rules=[]);var r=n,s=r.rules[r.rules.length-1];n={start:i+1,parent:r,previous:s},r.rules.push(n);break;case this.CLOSE_BRACE:n.end=i+1,n=n.parent||e}return e},_parseCss:function(t,e){var n=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){var i=t.previous?t.previous.end:t.parent.start;n=e.substring(i,t.start-1),n=n.substring(n.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=n.trim();t.atRule=0===o.indexOf(this.AT_START),t.atRule?0===o.indexOf(this.MEDIA_START)?t.type=this.types.MEDIA_RULE:o.match(this._rx.keyframesRule)&&(t.type=this.types.KEYFRAMES_RULE):0===o.indexOf(this.VAR_START)?t.type=this.types.MIXIN_RULE:t.type=this.types.STYLE_RULE}var r=t.rules;if(r)for(var s,a=0,l=r.length;l>a&&(s=r[a]);a++)this._parseCss(s,e);return t},stringify:function(t,e,n){n=n||"";var i="";if(t.cssText||t.rules){var o=t.rules;if(!o||!e&&this._hasMixinRules(o))i=e?t.cssText:this.removeCustomProps(t.cssText),i=i.trim(),i&&(i="  "+i+"\n");else for(var r,s=0,a=o.length;a>s&&(r=o[s]);s++)i=this.stringify(r,e,i)}return i&&(t.selector&&(n+=t.selector+" "+this.OPEN_BRACE+"\n"),n+=i,t.selector&&(n+=this.CLOSE_BRACE+"\n\n")),n},_hasMixinRules:function(t){return t[0].selector.indexOf(this.VAR_START)>=0},removeCustomProps:function(t){return t=this.removeCustomPropAssignment(t),this.removeCustomPropApply(t)},removeCustomPropAssignment:function(t){return t.replace(this._rx.customProp,"").replace(this._rx.mixinProp,"")},removeCustomPropApply:function(t){return t.replace(this._rx.mixinApply,"").replace(this._rx.varApply,"")},types:{STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},OPEN_BRACE:"{",CLOSE_BRACE:"}",_rx:{comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^|[\s;])--[^;{]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^|[\s;])--[^;{]*?:[^{;]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply[\s]*\([^)]*?\)[\s]*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*var[^;]*(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/},VAR_START:"--",MEDIA_START:"@media",AT_START:"@"};return t}(),Polymer.StyleUtil=function(){return{MODULE_STYLES_SELECTOR:"style, link[rel=import][type~=css], template",INCLUDE_ATTR:"include",toCssText:function(t,e,n){return"string"==typeof t&&(t=this.parser.parse(t)),e&&this.forEachStyleRule(t,e),this.parser.stringify(t,n)},forRulesInStyles:function(t,e){if(t)for(var n,i=0,o=t.length;o>i&&(n=t[i]);i++)this.forEachStyleRule(this.rulesForStyle(n),e)},rulesForStyle:function(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=this.parser.parse(t.textContent)),t.__cssRules},clearStyleRules:function(t){t.__cssRules=null},forEachStyleRule:function(t,e){if(t){var n=(t.parsedSelector,!1);t.type===this.ruleTypes.STYLE_RULE?e(t):(t.type===this.ruleTypes.KEYFRAMES_RULE||t.type===this.ruleTypes.MIXIN_RULE)&&(n=!0);var i=t.rules;if(i&&!n)for(var o,r=0,s=i.length;s>r&&(o=i[r]);r++)this.forEachStyleRule(o,e)}},applyCss:function(t,e,n,i){var o=document.createElement("style");if(e&&o.setAttribute("scope",e),o.textContent=t,n=n||document.head,!i){var r=n.querySelectorAll("style[scope]");i=r[r.length-1]}return n.insertBefore(o,i&&i.nextSibling||n.firstChild),o},cssFromModules:function(t,e){for(var n=t.trim().split(" "),i="",o=0;o<n.length;o++)i+=this.cssFromModule(n[o],e);return i},cssFromModule:function(t,e){var n=Polymer.DomModule["import"](t);return n&&!n._cssText&&(n._cssText=this._cssFromElement(n)),!n&&e&&console.warn("Could not find style data in module named",t),n&&n._cssText||""},_cssFromElement:function(t){for(var e,n="",i=t.content||t,o=Array.prototype.slice.call(i.querySelectorAll(this.MODULE_STYLES_SELECTOR)),r=0;r<o.length;r++)if(e=o[r],"template"===e.localName)n+=this._cssFromElement(e);else if("style"===e.localName){var s=e.getAttribute(this.INCLUDE_ATTR);s&&(n+=this.cssFromModules(s,!0)),e=e.__appliedElement||e,e.parentNode.removeChild(e),n+=this.resolveCss(e.textContent,t.ownerDocument)}else e["import"]&&e["import"].body&&(n+=this.resolveCss(e["import"].body.textContent,e["import"]));return n},resolveCss:Polymer.ResolveUrl.resolveCss,parser:Polymer.CssParse,ruleTypes:Polymer.CssParse.types}}(),Polymer.StyleTransformer=function(){var t=Polymer.Settings.useNativeShadow,e=Polymer.StyleUtil,n={dom:function(t,e,n,i){this._transformDom(t,e||"",n,i)},_transformDom:function(t,e,n,i){t.setAttribute&&this.element(t,e,n,i);for(var o=Polymer.dom(t).childNodes,r=0;r<o.length;r++)this._transformDom(o[r],e,n,i)},element:function(t,e,n,o){if(n)o?t.removeAttribute(i):t.setAttribute(i,e);else if(e)if(t.classList)o?(t.classList.remove(i),t.classList.remove(e)):(t.classList.add(i),t.classList.add(e));else if(t.getAttribute){var r=t.getAttribute(v);o?r&&t.setAttribute(v,r.replace(i,"").replace(e,"")):t.setAttribute(v,r+(r?" ":"")+i+" "+e)}},elementStyles:function(n,i){for(var o,r=n._styles,s="",a=0,l=r.length;l>a&&(o=r[a]);a++){var h=e.rulesForStyle(o);s+=t?e.toCssText(h,i):this.css(h,n.is,n["extends"],i,n._scopeCssViaAttr)+"\n\n"}return s.trim()},css:function(t,n,i,o,r){var s=this._calcHostScope(n,i);n=this._calcElementScope(n,r);var a=this;return e.toCssText(t,function(t){t.isScoped||(a.rule(t,n,s),t.isScoped=!0),o&&o(t,n,s)})},_calcElementScope:function(t,e){return t?e?_+t+m:p+t:""},_calcHostScope:function(t,e){return e?"[is="+t+"]":t},rule:function(t,e,n){this._transformRule(t,this._transformComplexSelector,e,n)},_transformRule:function(t,e,n,i){for(var o,s=t.selector.split(r),a=0,l=s.length;l>a&&(o=s[a]);a++)s[a]=e.call(this,o,n,i);t.selector=t.transformedSelector=s.join(r)},_transformComplexSelector:function(t,e,n){var i=!1,o=!1,a=this;return t=t.replace(s,function(t,r,s){if(i)s=s.replace(f," ");else{var l=a._transformCompoundSelector(s,r,e,n);i=i||l.stop,o=o||l.hostContext,r=l.combinator,s=l.value}return r+s}),o&&(t=t.replace(u,function(t,e,i,o){return e+i+" "+n+o+r+" "+e+n+i+o})),t},_transformCompoundSelector:function(t,e,n,i){var o=t.search(f),r=!1;t.indexOf(c)>=0?r=!0:t.indexOf(a)>=0?(t=t.replace(h,function(t,e,n){return i+n}),t=t.replace(a,i)):0!==o&&(t=n?this._transformSimpleSelector(t,n):t),t.indexOf(d)>=0&&(e="");var s;return o>=0&&(t=t.replace(f," "),s=!0),{value:t,combinator:e,stop:s,hostContext:r}},_transformSimpleSelector:function(t,e){var n=t.split(y);return n[0]+=e,n.join(y)},documentRule:function(e){e.selector=e.parsedSelector,this.normalizeRootSelector(e),t||this._transformRule(e,this._transformDocumentSelector)},normalizeRootSelector:function(t){t.selector===l&&(t.selector="body")},_transformDocumentSelector:function(t){return t.match(f)?this._transformComplexSelector(t,o):this._transformSimpleSelector(t.trim(),o)},SCOPE_NAME:"style-scope"},i=n.SCOPE_NAME,o=":not(["+i+"]):not(."+i+")",r=",",s=/(^|[\s>+~]+)([^\s>+~]+)/g,a=":host",l=":root",h=/(\:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/g,c=":host-context",u=/(.*)(?:\:host-context)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))(.*)/,d="::content",f=/\:\:content|\:\:shadow|\/deep\//,p=".",_="["+i+"~=",m="]",y=":",v="class";return n}(),Polymer.StyleExtends=function(){var t=Polymer.StyleUtil;return{hasExtends:function(t){return Boolean(t.match(this.rx.EXTEND))},transform:function(e){var n=t.rulesForStyle(e),i=this;return t.forEachStyleRule(n,function(t){i._mapRule(t);if(t.parent)for(var e;e=i.rx.EXTEND.exec(t.cssText);){var n=e[1],o=i._findExtendor(n,t);o&&i._extendRule(t,o)}t.cssText=t.cssText.replace(i.rx.EXTEND,"")}),t.toCssText(n,function(t){t.selector.match(i.rx.STRIP)&&(t.cssText="")},!0)},_mapRule:function(t){if(t.parent){for(var e,n=t.parent.map||(t.parent.map={}),i=t.selector.split(","),o=0;o<i.length;o++)e=i[o],n[e.trim()]=t;return n}},_findExtendor:function(t,e){return e.parent&&e.parent.map&&e.parent.map[t]||this._findExtendor(t,e.parent)},_extendRule:function(t,e){t.parent!==e.parent&&this._cloneAndAddRuleToParent(e,t.parent),t["extends"]=t["extends"]||(t["extends"]=[]),t["extends"].push(e),e.selector=e.selector.replace(this.rx.STRIP,""),e.selector=(e.selector&&e.selector+",\n")+t.selector,e["extends"]&&e["extends"].forEach(function(e){this._extendRule(t,e)},this)},_cloneAndAddRuleToParent:function(t,e){t=Object.create(t),t.parent=e,t["extends"]&&(t["extends"]=t["extends"].slice()),e.rules.push(t)},rx:{EXTEND:/@extends\(([^)]*)\)\s*?;/gim,STRIP:/%[^,]*$/}}}(),function(){var t=Polymer.Base._prepElement,e=Polymer.Settings.useNativeShadow,n=Polymer.StyleUtil,i=Polymer.StyleTransformer,o=Polymer.StyleExtends;Polymer.Base._addFeature({_prepElement:function(e){this._encapsulateStyle&&i.element(e,this.is,this._scopeCssViaAttr),t.call(this,e)},_prepStyles:function(){void 0===this._encapsulateStyle&&(this._encapsulateStyle=!e&&Boolean(this._template)),this._styles=this._collectStyles();var t=i.elementStyles(this);if(t&&this._template){var o=n.applyCss(t,this.is,e?this._template.content:null);e||(this._scopeStyle=o)}},_collectStyles:function(){var t=[],e="",i=this.styleModules;if(i)for(var r,s=0,a=i.length;a>s&&(r=i[s]);s++)e+=n.cssFromModule(r);if(e+=n.cssFromModule(this.is)){var l=document.createElement("style");l.textContent=e,o.hasExtends(l.textContent)&&(e=o.transform(l)),t.push(l)}return t},_elementAdd:function(t){this._encapsulateStyle&&(t.__styleScoped?t.__styleScoped=!1:i.dom(t,this.is,this._scopeCssViaAttr))},_elementRemove:function(t){this._encapsulateStyle&&i.dom(t,this.is,this._scopeCssViaAttr,!0)},scopeSubtree:function(t,n){if(!e){var i=this,o=function(t){if(t.nodeType===Node.ELEMENT_NODE){t.className=i._scopeElementClass(t,t.className);var e=t.querySelectorAll("*");Array.prototype.forEach.call(e,function(t){t.className=i._scopeElementClass(t,t.className)})}};if(o(t),n){var r=new MutationObserver(function(t){t.forEach(function(t){if(t.addedNodes)for(var e=0;e<t.addedNodes.length;e++)o(t.addedNodes[e])})});return r.observe(t,{childList:!0,subtree:!0}),r}}}})}(),Polymer.StyleProperties=function(){"use strict";function t(t,e){var n=parseInt(t/32),i=1<<t%32;e[n]=(e[n]||0)|i}var e=Polymer.Settings.useNativeShadow,n=Polymer.DomApi.matchesSelector,i=Polymer.StyleUtil,o=Polymer.StyleTransformer;return{decorateStyles:function(t){var e=this,n={};i.forRulesInStyles(t,function(t){e.decorateRule(t),e.collectPropertiesInCssText(t.propertyInfo.cssText,n)});var o=[];for(var r in n)o.push(r);return o},decorateRule:function(t){if(t.propertyInfo)return t.propertyInfo;var e={},n={},i=this.collectProperties(t,n);return i&&(e.properties=n,t.rules=null),e.cssText=this.collectCssText(t),t.propertyInfo=e,e},collectProperties:function(t,e){var n=t.propertyInfo;if(!n){for(var i,o,r=this.rx.VAR_ASSIGN,s=t.parsedCssText;i=r.exec(s);)e[i[1]]=(i[2]||i[3]).trim(),o=!0;return o}return n.properties?(Polymer.Base.mixin(e,n.properties),!0):void 0},collectCssText:function(t){var e="",n=t.parsedCssText;n=n.replace(this.rx.BRACKETED,"").replace(this.rx.VAR_ASSIGN,"");for(var i,o=n.split(";"),r=0;r<o.length;r++)i=o[r],(i.match(this.rx.MIXIN_MATCH)||i.match(this.rx.VAR_MATCH))&&(e+=i+";\n");return e},collectPropertiesInCssText:function(t,e){for(var n;n=this.rx.VAR_CAPTURE.exec(t);){e[n[1]]=!0;var i=n[2];i&&i.match(this.rx.IS_VAR)&&(e[i]=!0)}},reify:function(t){for(var e,n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++)e=n[i],t[e]=this.valueForProperty(t[e],t)},valueForProperty:function(t,e){if(t)if(t.indexOf(";")>=0)t=this.valueForProperties(t,e);else{var n=this,i=function(t,i,o,r){var s=n.valueForProperty(e[o],e)||(e[r]?n.valueForProperty(e[r],e):r);return i+(s||"")};t=t.replace(this.rx.VAR_MATCH,i)}return t&&t.trim()||""},valueForProperties:function(t,e){for(var n,i,o=t.split(";"),r=0;r<o.length;r++)if(n=o[r]){if(i=n.match(this.rx.MIXIN_MATCH))n=this.valueForProperty(e[i[1]],e);else{var s=n.split(":");s[1]&&(s[1]=s[1].trim(),s[1]=this.valueForProperty(s[1],e)||s[1]),n=s.join(":")}o[r]=n&&n.lastIndexOf(";")===n.length-1?n.slice(0,-1):n||""}return o.join(";")},applyProperties:function(t,e){var n="";t.propertyInfo||this.decorateRule(t),t.propertyInfo.cssText&&(n=this.valueForProperties(t.propertyInfo.cssText,e)),t.cssText=n},propertyDataFromStyles:function(e,o){var r={},s=this,a=[],l=0;return i.forRulesInStyles(e,function(e){e.propertyInfo||s.decorateRule(e),o&&e.propertyInfo.properties&&n.call(o,e.transformedSelector||e.parsedSelector)&&(s.collectProperties(e,r),t(l,a)),l++}),{properties:r,key:a}},scopePropertiesFromStyles:function(t){return t._scopeStyleProperties||(t._scopeStyleProperties=this.selectedPropertiesFromStyles(t,this.SCOPE_SELECTORS)),t._scopeStyleProperties},hostPropertiesFromStyles:function(t){return t._hostStyleProperties||(t._hostStyleProperties=this.selectedPropertiesFromStyles(t,this.HOST_SELECTORS)),t._hostStyleProperties},selectedPropertiesFromStyles:function(t,e){var n={},o=this;return i.forRulesInStyles(t,function(t){t.propertyInfo||o.decorateRule(t);for(var i=0;i<e.length;i++)if(t.parsedSelector===e[i])return void o.collectProperties(t,n)}),n},transformStyles:function(t,n,i){var r=this,s=o._calcHostScope(t.is,t["extends"]),a=t["extends"]?"\\"+s.slice(0,-1)+"\\]":s,l=new RegExp(this.rx.HOST_PREFIX+a+this.rx.HOST_SUFFIX);return o.elementStyles(t,function(o){r.applyProperties(o,n),o.cssText&&!e&&r._scopeSelector(o,l,s,t._scopeCssViaAttr,i)})},_scopeSelector:function(t,e,n,i,r){t.transformedSelector=t.transformedSelector||t.selector;for(var s,a=t.transformedSelector,l=i?"["+o.SCOPE_NAME+"~="+r+"]":"."+r,h=a.split(","),c=0,u=h.length;u>c&&(s=h[c]);c++)h[c]=s.match(e)?s.replace(n,n+l):l+" "+s;t.selector=h.join(",")},applyElementScopeSelector:function(t,e,n,i){var r=i?t.getAttribute(o.SCOPE_NAME):t.className,s=n?r.replace(n,e):(r?r+" ":"")+this.XSCOPE_NAME+" "+e;r!==s&&(i?t.setAttribute(o.SCOPE_NAME,s):t.className=s)},applyElementStyle:function(t,n,o,r){var s=r?r.textContent||"":this.transformStyles(t,n,o),a=t._customStyle;return a&&!e&&a!==r&&(a._useCount--,a._useCount<=0&&a.parentNode&&a.parentNode.removeChild(a)),!e&&r&&r.parentNode||(e&&t._customStyle?(t._customStyle.textContent=s,r=t._customStyle):s&&(r=i.applyCss(s,o,e?t.root:null,t._scopeStyle))),r&&(r._useCount=r._useCount||0,t._customStyle!=r&&r._useCount++,t._customStyle=r),r},mixinCustomStyle:function(t,e){var n;for(var i in e)n=e[i],(n||0===n)&&(t[i]=n)},rx:{VAR_ASSIGN:/(?:^|[;\n]\s*)(--[\w-]*?):\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\n])|$)/gi,MIXIN_MATCH:/(?:^|\W+)@apply[\s]*\(([^)]*)\)/i,VAR_MATCH:/(^|\W+)var\([\s]*([^,)]*)[\s]*,?[\s]*((?:[^,)]*)|(?:[^;]*\([^;)]*\)))[\s]*?\)/gi,VAR_CAPTURE:/\([\s]*(--[^,\s)]*)(?:,[\s]*(--[^,\s)]*))?(?:\)|,)/gi,IS_VAR:/^--/,BRACKETED:/\{[^}]*\}/g,HOST_PREFIX:"(?:^|[^.#[:])",HOST_SUFFIX:"($|[.:[\\s>+~])"},HOST_SELECTORS:[":host"],SCOPE_SELECTORS:[":root"],XSCOPE_NAME:"x-scope"}}(),function(){Polymer.StyleCache=function(){this.cache={}},Polymer.StyleCache.prototype={MAX:100,store:function(t,e,n,i){e.keyValues=n,e.styles=i;var o=this.cache[t]=this.cache[t]||[];o.push(e),o.length>this.MAX&&o.shift()},retrieve:function(t,e,n){var i=this.cache[t];if(i)for(var o,r=i.length-1;r>=0;r--)if(o=i[r],n===o.styles&&this._objectsEqual(e,o.keyValues))return o},clear:function(){this.cache={}},_objectsEqual:function(t,e){var n,i;for(var o in t)if(n=t[o],i=e[o],!("object"==typeof n&&n?this._objectsStrictlyEqual(n,i):n===i))return!1;return Array.isArray(t)?t.length===e.length:!0},_objectsStrictlyEqual:function(t,e){return this._objectsEqual(t,e)&&this._objectsEqual(e,t)}}}(),Polymer.StyleDefaults=function(){var t=Polymer.StyleProperties,e=(Polymer.StyleUtil,Polymer.StyleCache),n={_styles:[],_properties:null,customStyle:{},_styleCache:new e,addStyle:function(t){this._styles.push(t),this._properties=null},get _styleProperties(){return this._properties||(t.decorateStyles(this._styles),this._styles._scopeStyleProperties=null,this._properties=t.scopePropertiesFromStyles(this._styles),t.mixinCustomStyle(this._properties,this.customStyle),t.reify(this._properties)),this._properties},_needsStyleProperties:function(){},_computeStyleProperties:function(){return this._styleProperties},updateStyles:function(t){this._properties=null,t&&Polymer.Base.mixin(this.customStyle,t),this._styleCache.clear();for(var e,n=0;n<this._styles.length;n++)e=this._styles[n],e=e.__importElement||e,e._apply()}};return n}(),function(){"use strict";var t=Polymer.Base.serializeValueToAttribute,e=Polymer.StyleProperties,n=Polymer.StyleTransformer,i=(Polymer.StyleUtil,Polymer.StyleDefaults),o=Polymer.Settings.useNativeShadow;Polymer.Base._addFeature({_prepStyleProperties:function(){this._ownStylePropertyNames=this._styles?e.decorateStyles(this._styles):[]},customStyle:{},_setupStyleProperties:function(){this.customStyle={}},_needsStyleProperties:function(){return Boolean(this._ownStylePropertyNames&&this._ownStylePropertyNames.length)},_beforeAttached:function(){!this._scopeSelector&&this._needsStyleProperties()&&this._updateStyleProperties()},_findStyleHost:function(){for(var t,e=this;t=Polymer.dom(e).getOwnerRoot();){if(Polymer.isInstance(t.host))return t.host;e=t.host}return i},_updateStyleProperties:function(){var t,n=this._findStyleHost();n._styleCache||(n._styleCache=new Polymer.StyleCache);var i=e.propertyDataFromStyles(n._styles,this);i.key.customStyle=this.customStyle,t=n._styleCache.retrieve(this.is,i.key,this._styles);var s=Boolean(t);s?this._styleProperties=t._styleProperties:this._computeStyleProperties(i.properties),this._computeOwnStyleProperties(),s||(t=r.retrieve(this.is,this._ownStyleProperties,this._styles));var a=Boolean(t)&&!s,l=this._applyStyleProperties(t);s||(l=l&&o?l.cloneNode(!0):l,t={style:l,_scopeSelector:this._scopeSelector,_styleProperties:this._styleProperties},i.key.customStyle={},this.mixin(i.key.customStyle,this.customStyle),n._styleCache.store(this.is,t,i.key,this._styles),a||r.store(this.is,Object.create(t),this._ownStyleProperties,this._styles))},_computeStyleProperties:function(t){var n=this._findStyleHost();n._styleProperties||n._computeStyleProperties();var i=Object.create(n._styleProperties);this.mixin(i,e.hostPropertiesFromStyles(this._styles)),t=t||e.propertyDataFromStyles(n._styles,this).properties,this.mixin(i,t),this.mixin(i,e.scopePropertiesFromStyles(this._styles)),e.mixinCustomStyle(i,this.customStyle),e.reify(i),this._styleProperties=i},_computeOwnStyleProperties:function(){for(var t,e={},n=0;n<this._ownStylePropertyNames.length;n++)t=this._ownStylePropertyNames[n],e[t]=this._styleProperties[t];this._ownStyleProperties=e},_scopeCount:0,_applyStyleProperties:function(t){var n=this._scopeSelector;this._scopeSelector=t?t._scopeSelector:this.is+"-"+this.__proto__._scopeCount++;var i=e.applyElementStyle(this,this._styleProperties,this._scopeSelector,t&&t.style);return o||e.applyElementScopeSelector(this,this._scopeSelector,n,this._scopeCssViaAttr),i},serializeValueToAttribute:function(e,n,i){
if(i=i||this,"class"===n&&!o){var r=i===this?this.domHost||this.dataHost:this;r&&(e=r._scopeElementClass(i,e))}i=Polymer.dom(i),t.call(this,e,n,i)},_scopeElementClass:function(t,e){return o||this._scopeCssViaAttr||(e+=(e?" ":"")+s+" "+this.is+(t._scopeSelector?" "+a+" "+t._scopeSelector:"")),e},updateStyles:function(t){this.isAttached&&(t&&this.mixin(this.customStyle,t),this._needsStyleProperties()?this._updateStyleProperties():this._styleProperties=null,this._styleCache&&this._styleCache.clear(),this._updateRootStyles())},_updateRootStyles:function(t){t=t||this.root;for(var e,n=Polymer.dom(t)._query(function(t){return t.shadyRoot||t.shadowRoot}),i=0,o=n.length;o>i&&(e=n[i]);i++)e.updateStyles&&e.updateStyles()}}),Polymer.updateStyles=function(t){i.updateStyles(t),Polymer.Base._updateRootStyles(document)};var r=new Polymer.StyleCache;Polymer.customStyleCache=r;var s=n.SCOPE_NAME,a=e.XSCOPE_NAME}(),Polymer.Base._addFeature({_registerFeatures:function(){this._prepIs(),this._prepAttributes(),this._prepConstructor(),this._prepTemplate(),this._prepStyles(),this._prepStyleProperties(),this._prepAnnotations(),this._prepEffects(),this._prepBehaviors(),this._prepBindings(),this._prepShady()},_prepBehavior:function(t){this._addPropertyEffects(t.properties),this._addComplexObserverEffects(t.observers),this._addHostAttributes(t.hostAttributes)},_initFeatures:function(){this._poolContent(),this._setupConfigure(),this._setupStyleProperties(),this._pushHost(),this._stampTemplate(),this._popHost(),this._marshalAnnotationReferences(),this._setupDebouncers(),this._marshalInstanceEffects(),this._marshalHostAttributes(),this._marshalBehaviors(),this._marshalAttributes(),this._tryReady()},_marshalBehavior:function(t){this._listenListeners(t.listeners)}}),function(){var t=(Polymer.Settings.useNativeShadow,Polymer.StyleProperties),e=Polymer.StyleUtil,n=Polymer.CssParse,i=Polymer.StyleDefaults,o=Polymer.StyleTransformer;Polymer({is:"custom-style","extends":"style",properties:{include:String},ready:function(){this._tryApply()},attached:function(){this._tryApply()},_tryApply:function(){if(!this._appliesToDocument&&this.parentNode&&"dom-module"!==this.parentNode.localName){this._appliesToDocument=!0;var t=this.__appliedElement||this;if(i.addStyle(t),t.textContent||this.include)this._apply();else{var e=new MutationObserver(function(){e.disconnect(),this._apply()}.bind(this));e.observe(t,{childList:!0})}}},_apply:function(){var t=this.__appliedElement||this;this.include&&(t.textContent=e.cssFromModules(this.include,!0)+t.textContent),t.textContent&&(e.forEachStyleRule(e.rulesForStyle(t),function(t){o.documentRule(t)}),this._applyCustomProperties(t))},_applyCustomProperties:function(i){this._computeStyleProperties();var o=this._styleProperties,r=e.rulesForStyle(i);i.textContent=e.toCssText(r,function(e){var i=e.cssText=e.parsedCssText;e.propertyInfo&&e.propertyInfo.cssText&&(i=n.removeCustomPropAssignment(i),e.cssText=t.valueForProperties(i,o))})}})}(),Polymer.Templatizer={properties:{__hideTemplateChildren__:{observer:"_showHideChildren"}},_instanceProps:Polymer.nob,_parentPropPrefix:"_parent_",templatize:function(t){if(this._templatized=t,t._content||(t._content=t.content),t._content._ctor)return this.ctor=t._content._ctor,void this._prepParentProperties(this.ctor.prototype,t);var e=Object.create(Polymer.Base);this._customPrepAnnotations(e,t),this._prepParentProperties(e,t),e._prepEffects(),this._customPrepEffects(e),e._prepBehaviors(),e._prepBindings(),e._notifyPathUp=this._notifyPathUpImpl,e._scopeElementClass=this._scopeElementClassImpl,e.listen=this._listenImpl,e._showHideChildren=this._showHideChildrenImpl;var n=this._constructorImpl,i=function(t,e){n.call(this,t,e)};i.prototype=e,e.constructor=i,t._content._ctor=i,this.ctor=i},_getRootDataHost:function(){return this.dataHost&&this.dataHost._rootDataHost||this.dataHost},_showHideChildrenImpl:function(t){for(var e=this._children,n=0;n<e.length;n++){var i=e[n];Boolean(t)!=Boolean(i.__hideTemplateChildren__)&&(i.nodeType===Node.TEXT_NODE?t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__:i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__)),i.__hideTemplateChildren__=t}},_debounceTemplate:function(t){Polymer.dom.addDebouncer(this.debounce("_debounceTemplate",t))},_flushTemplates:function(t){Polymer.dom.flush()},_customPrepEffects:function(t){var e=t._parentProps;for(var n in e)t._addPropertyEffect(n,"function",this._createHostPropEffector(n));for(var n in this._instanceProps)t._addPropertyEffect(n,"function",this._createInstancePropEffector(n))},_customPrepAnnotations:function(t,e){t._template=e;var n=e._content;if(!n._notes){var i=t._rootDataHost;i&&(Polymer.Annotations.prepElement=i._prepElement.bind(i)),n._notes=Polymer.Annotations.parseAnnotations(e),Polymer.Annotations.prepElement=null,this._processAnnotations(n._notes)}t._notes=n._notes,t._parentProps=n._parentProps},_prepParentProperties:function(t,e){var n=this._parentProps=t._parentProps;if(this._forwardParentProp&&n){var i,o=t._parentPropProto;if(!o){for(i in this._instanceProps)delete n[i];o=t._parentPropProto=Object.create(null),e!=this&&(Polymer.Bind.prepareModel(o),Polymer.Base.prepareModelNotifyPath(o));for(i in n){var r=this._parentPropPrefix+i,s=[{kind:"function",effect:this._createForwardPropEffector(i)},{kind:"notify"}];Polymer.Bind._createAccessors(o,r,s)}}e!=this&&(Polymer.Bind.prepareInstance(e),e._forwardParentProp=this._forwardParentProp.bind(this)),this._extendTemplate(e,o),e._pathEffector=this._pathEffectorImpl.bind(this)}},_createForwardPropEffector:function(t){return function(e,n){this._forwardParentProp(t,n)}},_createHostPropEffector:function(t){var e=this._parentPropPrefix;return function(n,i){this.dataHost._templatized[e+t]=i}},_createInstancePropEffector:function(t){return function(e,n,i,o){o||this.dataHost._forwardInstanceProp(this,t,n)}},_extendTemplate:function(t,e){Object.getOwnPropertyNames(e).forEach(function(n){var i=t[n],o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o),void 0!==i&&t._propertySetter(n,i)})},_showHideChildren:function(t){},_forwardInstancePath:function(t,e,n){},_forwardInstanceProp:function(t,e,n){},_notifyPathUpImpl:function(t,e){var n=this.dataHost,i=t.indexOf("."),o=0>i?t:t.slice(0,i);n._forwardInstancePath.call(n,this,t,e),o in n._parentProps&&n._templatized.notifyPath(n._parentPropPrefix+t,e)},_pathEffectorImpl:function(t,e,n){if(this._forwardParentPath&&0===t.indexOf(this._parentPropPrefix)){var i=t.substring(this._parentPropPrefix.length);this._forwardParentPath(i,e)}Polymer.Base._pathEffector.call(this._templatized,t,e,n)},_constructorImpl:function(t,e){this._rootDataHost=e._getRootDataHost(),this._setupConfigure(t),this._pushHost(e),this.root=this.instanceTemplate(this._template),this.root.__noContent=!this._notes._hasContent,this.root.__styleScoped=!0,this._popHost(),this._marshalAnnotatedNodes(),this._marshalInstanceEffects(),this._marshalAnnotatedListeners();for(var n=[],i=this.root.firstChild;i;i=i.nextSibling)n.push(i),i._templateInstance=this;this._children=n,e.__hideTemplateChildren__&&this._showHideChildren(!0),this._tryReady()},_listenImpl:function(t,e,n){var i=this,o=this._rootDataHost,r=o._createEventHandler(t,e,n),s=function(t){t.model=i,r(t)};o._listen(t,e,s)},_scopeElementClassImpl:function(t,e){var n=this._rootDataHost;return n?n._scopeElementClass(t,e):void 0},stamp:function(t){if(t=t||{},this._parentProps){var e=this._templatized;for(var n in this._parentProps)t[n]=e[this._parentPropPrefix+n]}return new this.ctor(t,this)},modelForElement:function(t){for(var e;t;)if(e=t._templateInstance){if(e.dataHost==this)return e;t=e.dataHost}else t=t.parentNode}},Polymer({is:"dom-template","extends":"template",behaviors:[Polymer.Templatizer],ready:function(){this.templatize(this)}}),Polymer._collections=new WeakMap,Polymer.Collection=function(t){Polymer._collections.set(t,this),this.userArray=t,this.store=t.slice(),this.initMap()},Polymer.Collection.prototype={constructor:Polymer.Collection,initMap:function(){for(var t=this.omap=new WeakMap,e=this.pmap={},n=this.store,i=0;i<n.length;i++){var o=n[i];o&&"object"==typeof o?t.set(o,i):e[o]=i}},add:function(t){var e=this.store.push(t)-1;return t&&"object"==typeof t?this.omap.set(t,e):this.pmap[t]=e,"#"+e},removeKey:function(t){t=this._parseKey(t),this._removeFromMap(this.store[t]),delete this.store[t]},_removeFromMap:function(t){t&&"object"==typeof t?this.omap["delete"](t):delete this.pmap[t]},remove:function(t){var e=this.getKey(t);return this.removeKey(e),e},getKey:function(t){var e;return e=t&&"object"==typeof t?this.omap.get(t):this.pmap[t],void 0!=e?"#"+e:void 0},getKeys:function(){return Object.keys(this.store).map(function(t){return"#"+t})},_parseKey:function(t){if("#"==t[0])return t.slice(1);throw new Error("unexpected key "+t)},setItem:function(t,e){t=this._parseKey(t);var n=this.store[t];n&&this._removeFromMap(n),e&&"object"==typeof e?this.omap.set(e,t):this.pmap[e]=t,this.store[t]=e},getItem:function(t){return t=this._parseKey(t),this.store[t]},getItems:function(){var t=[],e=this.store;for(var n in e)t.push(e[n]);return t},_applySplices:function(t){var e,n,i={};t.forEach(function(t){for(t.addedKeys=[],n=0;n<t.removed.length;n++)e=this.getKey(t.removed[n]),i[e]=i[e]?null:-1;for(n=0;n<t.addedCount;n++){var o=this.userArray[t.index+n];e=this.getKey(o),e=void 0===e?this.add(o):e,i[e]=i[e]?null:1,t.addedKeys.push(e)}},this);var o=[],r=[];for(var e in i)i[e]<0&&(this.removeKey(e),o.push(e)),i[e]>0&&r.push(e);return[{removed:o,added:r}]}},Polymer.Collection.get=function(t){return Polymer._collections.get(t)||new Polymer.Collection(t)},Polymer.Collection.applySplices=function(t,e){var n=Polymer._collections.get(t);return n?n._applySplices(e):null},Polymer({is:"dom-repeat","extends":"template",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},sort:{type:Function,observer:"_sortChanged"},filter:{type:Function,observer:"_filterChanged"},observe:{type:String,observer:"_observeChanged"},delay:Number},behaviors:[Polymer.Templatizer],observers:["_itemsChanged(items.*)"],created:function(){this._instances=[]},detached:function(){for(var t=0;t<this._instances.length;t++)this._detachRow(t)},attached:function(){for(var t=Polymer.dom(this).parentNode,e=0;e<this._instances.length;e++)Polymer.dom(t).insertBefore(this._instances[e].root,this)},ready:function(){this._instanceProps={__key__:!0},this._instanceProps[this.as]=!0,this._instanceProps[this.indexAs]=!0,this.ctor||this.templatize(this)},_sortChanged:function(){var t=this._getRootDataHost(),e=this.sort;this._sortFn=e&&("function"==typeof e?e:function(){return t[e].apply(t,arguments)}),this._needFullRefresh=!0,this.items&&this._debounceTemplate(this._render)},_filterChanged:function(){var t=this._getRootDataHost(),e=this.filter;this._filterFn=e&&("function"==typeof e?e:function(){return t[e].apply(t,arguments)}),this._needFullRefresh=!0,this.items&&this._debounceTemplate(this._render)},_observeChanged:function(){this._observePaths=this.observe&&this.observe.replace(".*",".").split(" ")},_itemsChanged:function(t){if("items"==t.path)Array.isArray(this.items)?this.collection=Polymer.Collection.get(this.items):this.items?this._error(this._logf("dom-repeat","expected array for `items`, found",this.items)):this.collection=null,this._keySplices=[],this._indexSplices=[],this._needFullRefresh=!0,this._debounceTemplate(this._render);else if("items.splices"==t.path)this._keySplices=this._keySplices.concat(t.value.keySplices),this._indexSplices=this._indexSplices.concat(t.value.indexSplices),this._debounceTemplate(this._render);else{var e=t.path.slice(6);this._forwardItemPath(e,t.value),this._checkObservedPaths(e)}},_checkObservedPaths:function(t){if(this._observePaths){t=t.substring(t.indexOf(".")+1);for(var e=this._observePaths,n=0;n<e.length;n++)if(0===t.indexOf(e[n]))return this._needFullRefresh=!0,void(this.delay?this.debounce("render",this._render,this.delay):this._debounceTemplate(this._render))}},render:function(){this._needFullRefresh=!0,this._debounceTemplate(this._render),this._flushTemplates()},_render:function(){this.collection;this._needFullRefresh?(this._applyFullRefresh(),this._needFullRefresh=!1):this._sortFn?this._applySplicesUserSort(this._keySplices):this._filterFn?this._applyFullRefresh():this._applySplicesArrayOrder(this._indexSplices),this._keySplices=[],this._indexSplices=[];for(var t=this._keyToInstIdx={},e=0;e<this._instances.length;e++){var n=this._instances[e];t[n.__key__]=e,n.__setProperty(this.indexAs,e,!0)}this.fire("dom-change")},_applyFullRefresh:function(){var t,e=this.collection;if(this._sortFn)t=e?e.getKeys():[];else{t=[];var n=this.items;if(n)for(var i=0;i<n.length;i++)t.push(e.getKey(n[i]))}this._filterFn&&(t=t.filter(function(t){return this._filterFn(e.getItem(t))},this)),this._sortFn&&t.sort(function(t,n){return this._sortFn(e.getItem(t),e.getItem(n))}.bind(this));for(var i=0;i<t.length;i++){var o=t[i],r=this._instances[i];r?(r.__setProperty("__key__",o,!0),r.__setProperty(this.as,e.getItem(o),!0)):this._instances.push(this._insertRow(i,o))}for(;i<this._instances.length;i++)this._detachRow(i);this._instances.splice(t.length,this._instances.length-t.length)},_keySort:function(t,e){return this.collection.getKey(t)-this.collection.getKey(e)},_numericSort:function(t,e){return t-e},_applySplicesUserSort:function(t){var e=this.collection,n=this._instances,i={},o=[];this._sortFn||this._keySort.bind(this);t.forEach(function(t){for(var e=0;e<t.removed.length;e++){var n=t.removed[e];i[n]=i[n]?null:-1}for(var e=0;e<t.added.length;e++){var n=t.added[e];i[n]=i[n]?null:1}},this);var r=[],s=[];for(var a in i)-1===i[a]&&r.push(this._keyToInstIdx[a]),1===i[a]&&s.push(a);if(r.length){r.sort(this._numericSort);for(var l=r.length-1;l>=0;l--){var h=r[l];void 0!==h&&(o.push(this._detachRow(h)),n.splice(h,1))}}if(s.length){this._filterFn&&(s=s.filter(function(t){return this._filterFn(e.getItem(t))},this)),s.sort(function(t,n){return this._sortFn(e.getItem(t),e.getItem(n))}.bind(this));for(var c=0,l=0;l<s.length;l++)c=this._insertRowUserSort(c,s[l],o)}},_insertRowUserSort:function(t,e,n){for(var i=this.collection,o=i.getItem(e),r=this._instances.length-1,s=-1,a=this._sortFn||this._keySort.bind(this);r>=t;){var l=t+r>>1,h=this._instances[l].__key__,c=a(i.getItem(h),o);if(0>c)t=l+1;else{if(!(c>0)){s=l;break}r=l-1}}return 0>s&&(s=r+1),this._instances.splice(s,0,this._insertRow(s,e,n)),s},_applySplicesArrayOrder:function(t){var e=[];this.collection;t.forEach(function(t){for(var n=0;n<t.removed.length;n++){var i=this._detachRow(t.index+n);i.isPlaceholder||e.push(i)}this._instances.splice(t.index,t.removed.length);for(var n=0;n<t.addedKeys.length;n++){var i={isPlaceholder:!0,key:t.addedKeys[n]};this._instances.splice(t.index+n,0,i)}},this);for(var n=this._instances.length-1;n>=0;n--){var i=this._instances[n];i.isPlaceholder&&(this._instances[n]=this._insertRow(n,i.key,e,!0))}},_detachRow:function(t){var e=this._instances[t];if(!e.isPlaceholder)for(var n=(Polymer.dom(this).parentNode,0);n<e._children.length;n++){var i=e._children[n];Polymer.dom(e.root).appendChild(i)}return e},_insertRow:function(t,e,n,i){var o;(o=n&&n.pop())?(o.__setProperty(this.as,this.collection.getItem(e),!0),o.__setProperty("__key__",e,!0)):o=this._generateRow(t,e);var r=this._instances[i?t+1:t],s=r?r._children[0]:this,a=Polymer.dom(this).parentNode;return Polymer.dom(a).insertBefore(o.root,s),o},_generateRow:function(t,e){var n={__key__:e};n[this.as]=this.collection.getItem(e),n[this.indexAs]=t;var i=this.stamp(n);return i},_showHideChildren:function(t){for(var e=0;e<this._instances.length;e++)this._instances[e]._showHideChildren(t)},_forwardInstanceProp:function(t,e,n){if(e==this.as){var i;i=this._sortFn||this._filterFn?this.items.indexOf(this.collection.getItem(t.__key__)):t[this.indexAs],this.set("items."+i,n)}},_forwardInstancePath:function(t,e,n){0===e.indexOf(this.as+".")&&this._notifyPath("items."+t.__key__+"."+e.slice(this.as.length+1),n)},_forwardParentProp:function(t,e){this._instances.forEach(function(n){n.__setProperty(t,e,!0)},this)},_forwardParentPath:function(t,e){this._instances.forEach(function(n){n._notifyPath(t,e,!0)},this)},_forwardItemPath:function(t,e){if(this._keyToInstIdx){var n=t.indexOf("."),i=t.substring(0,0>n?t.length:n),o=this._keyToInstIdx[i],r=this._instances[o];r&&(n>=0?(t=this.as+"."+t.substring(n+1),r._notifyPath(t,e,!0)):r.__setProperty(this.as,e,!0))}},itemForElement:function(t){var e=this.modelForElement(t);return e&&e[this.as]},keyForElement:function(t){var e=this.modelForElement(t);return e&&e.__key__},indexForElement:function(t){var e=this.modelForElement(t);return e&&e[this.indexAs]}}),Polymer({is:"array-selector",properties:{items:{type:Array,observer:"clearSelection"},multi:{type:Boolean,value:!1,observer:"clearSelection"},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}},clearSelection:function(){if(Array.isArray(this.selected))for(var t=0;t<this.selected.length;t++)this.unlinkPaths("selected."+t);else this.unlinkPaths("selected"),this.unlinkPaths("selectedItem");this.multi?(!this.selected||this.selected.length)&&(this.selected=[],this._selectedColl=Polymer.Collection.get(this.selected)):(this.selected=null,this._selectedColl=null),this.selectedItem=null},isSelected:function(t){return this.multi?void 0!==this._selectedColl.getKey(t):this.selected==t},deselect:function(t){if(this.multi){if(this.isSelected(t)){var e=this._selectedColl.getKey(t);this.arrayDelete("selected",t),this.unlinkPaths("selected."+e)}}else this.selected=null,this.selectedItem=null,this.unlinkPaths("selected"),this.unlinkPaths("selectedItem")},select:function(t){var e=Polymer.Collection.get(this.items),n=e.getKey(t);if(this.multi)if(this.isSelected(t))this.toggle&&this.deselect(t);else{this.push("selected",t);var i=this._selectedColl.getKey(t);this.linkPaths("selected."+i,"items."+n)}else this.toggle&&t==this.selected?this.deselect():(this.selected=t,this.selectedItem=t,this.linkPaths("selected","items."+n),this.linkPaths("selectedItem","items."+n))}}),Polymer({is:"dom-if","extends":"template",properties:{"if":{type:Boolean,value:!1,observer:"_queueRender"},restamp:{type:Boolean,value:!1,observer:"_queueRender"}},behaviors:[Polymer.Templatizer],_queueRender:function(){this._debounceTemplate(this._render)},detached:function(){this._teardownInstance()},attached:function(){this["if"]&&this.ctor&&this.async(this._ensureInstance)},render:function(){this._flushTemplates()},_render:function(){this["if"]?(this.ctor||this.templatize(this),this._ensureInstance(),this._showHideChildren()):this.restamp&&this._teardownInstance(),!this.restamp&&this._instance&&this._showHideChildren(),this["if"]!=this._lastIf&&(this.fire("dom-change"),this._lastIf=this["if"])},_ensureInstance:function(){if(!this._instance){this._instance=this.stamp();var t=this._instance.root,e=Polymer.dom(Polymer.dom(this).parentNode);e.insertBefore(t,this)}},_teardownInstance:function(){if(this._instance){var t=this._instance._children;if(t){var e=Polymer.dom(Polymer.dom(t[0]).parentNode);t.forEach(function(t){e.removeChild(t)})}this._instance=null}},_showHideChildren:function(){var t=this.__hideTemplateChildren__||!this["if"];this._instance&&this._instance._showHideChildren(t)},_forwardParentProp:function(t,e){this._instance&&(this._instance[t]=e)},_forwardParentPath:function(t,e){this._instance&&this._instance._notifyPath(t,e,!0)}}),Polymer({is:"dom-bind","extends":"template",created:function(){Polymer.RenderStatus.whenReady(this._markImportsReady.bind(this))},_ensureReady:function(){this._readied||this._readySelf()},_markImportsReady:function(){this._importsReady=!0,this._ensureReady()},_registerFeatures:function(){this._prepConstructor()},_insertChildren:function(){var t=Polymer.dom(Polymer.dom(this).parentNode);t.insertBefore(this.root,this)},_removeChildren:function(){if(this._children)for(var t=0;t<this._children.length;t++)this.root.appendChild(this._children[t])},_initFeatures:function(){},_scopeElementClass:function(t,e){return this.dataHost?this.dataHost._scopeElementClass(t,e):e},_prepConfigure:function(){var t={};for(var e in this._propertyEffects)t[e]=this[e];this._setupConfigure=this._setupConfigure.bind(this,t)},attached:function(){this._importsReady&&this.render()},detached:function(){this._removeChildren()},render:function(){this._ensureReady(),this._children||(this._template=this,this._prepAnnotations(),this._prepEffects(),this._prepBehaviors(),this._prepConfigure(),this._prepBindings(),Polymer.Base._initFeatures.call(this),this._children=Array.prototype.slice.call(this.root.childNodes)),this._insertChildren(),this.fire("dom-change")}});
// /static/bower_components/atavist-polymer/atavist-module.js  

var originalInit = Polymer.Base._initFeatures,
	originalRegister = Polymer.Base._registerFeatures,
	originalTempl = Polymer.Base.instanceTemplate;
if (Polymer.Annotations && !Polymer.Annotations._iepatch) {
	var originalParseAnnotations = Polymer.Annotations._parseNodeAnnotations;
	Polymer.Annotations._iepatch = true;
	Polymer.Annotations._parseNodeAnnotations = function(node, list) {
		if (!node) return null;
		return originalParseAnnotations.call(this, node, list);
	};
}

window.registeredElements = window.registeredElements || {};
Polymer.Base._addFeature({

	_scopeCssViaAttr: true,

	// monkey-patch this for a Safari 7 issue — a more-sustainable workaround!

	instanceTemplate: function(template) {
		if (window.HTMLTemplateElement && window.HTMLTemplateElement.decorate) {
			HTMLTemplateElement.decorate(template);
		}

		return originalTempl.call(this, template);
	},

	_initFeatures: function() {

		// we use this to make it easier to determine if an element has been "loaded" yet
		window.registeredElements[this.is] = true;

		// call the originally-defined init
		originalInit.call(this);
		if (typeof this.atavist === 'undefined' || this.atavist === true) { // then run our code
			this._atavistShared();
			if (this.__proto__.subcomponent === true) {
				this._subcomponent();
			} else {
				this._block();
				this.blockReady = true;
				this.fire('blockReady');
			}
		}

	},

	assetDomain: function() {
		if (!this.editable()) {
			return prerendered.asset_domain;
		} else if (typeof creatavist !== 'undefined') {
			return creatavist.asset_domain;
		}
	},

	cloudfrontPrefix: function() {
		if (!this.editable()) {
			return prerendered.cloudfront_prefix;
		} else if (typeof creatavist !== 'undefined') {
			return creatavist.cloudfront_prefix;
		}
	},

	cloudFront: function(path) {
		var host = this.cloudfrontPrefix(),
			media_bit = path.match(/(image|video|audio)\/(raw|derivative)?/),
			filename = path.split('/').pop();

		filename = filename.replace('x0', 'x0x0x0');
		// filename = filename.replace('lite~', 'lite~600x0x0x0~');

		if (media_bit) {
			media_bit.shift();

			media_bit = media_bit.filter(function(item) {
				return !!item;
			});

			media_bit = media_bit.join('/');
			if (media_bit === 'audio') {
				media_bit += '/raw';
			}

			if (media_bit === 'video') {
				media_bit += '/iphone';
			}
		} else {
			media_bit = '';
		}

		return [host, media_bit, filename].join('/');
	},

	editable: function() {
		return (typeof creatavist !== 'undefined' && creatavist.editable === true);
	},

	isApp: function() {
		return typeof prerendered !== 'undefined' && prerendered.environment === 'app';
	},

	reserialize: function(name, value, type) {
		switch (type) {

			case Number:
				if (typeof value !== 'undefined') {
					value = value.toString();
				}

			break;

			case Boolean:
				value = (this.hasAttribute(name)) ? 'true' : null;
			break;

			case Object:
			case Array:
				try {
					value = JSON.stringify(value);
				} catch (x) {
					value = '[invalid JSON]';
				}

			break;

			case Date:
				value = value.toString();
			break;

			case String:
			default:
			break;
		}

		return value;
	},

	seal: function(children_too, from_sidebar) {
		var properties;

		if (this.preSeal) {
			this.preSeal.call(this, from_sidebar);
		}

		properties = this.blockExport();

		// hard-code the current properties onto the element
		for (var i in properties) {
			if (properties[i] && type == Object && properties[i].temp_path && properties[i].temp_path.length) {
				properties[i].temp_path = null;
				properties[i].path = null;
			}

			this.reflectPropertyToAttribute(i);
		}

		var subs = this.querySelectorAll('.atavist-subcomponent');
		for (var i = 0; i < subs.length; i++) {
			if (subs[i] && subs[i].seal) {
				subs[i].seal();
			}
		};
	},

	persistedKeys: function() {
		var data = {};
		if (this.properties) {
			for (var key in this.properties) {
				var persist = this.getPropertyInfo(key).persisted;
				if (persist === true) {
					data[key] = this[key];
				}
			}
		}

		return data;
	},

	blockExport: function() {
		var data = {};
		if (this.properties) {
			for (var key in this.properties) {
				data[key] = this[key];
			}
		}

		return data;
	},

	setStoryData: function(data) {
		this.story_data = data;
		this.fire('story_data', data);
	},

	setSectionData: function(data) {
		this.section_data = data;
		this.fire('section_data', data);
	},

	_block: function() {

		if (!this.isApp()) {
			// zero this out
			this.setAttribute('data-assets', '');
		}

		if (this.__proto__.cover === true) {
			this.classList.add('atavist-cover');
			this.classList.remove('atavist-block');
		} else {
			this.classList.add('atavist-block');
			this.classList.remove('atavist-cover');
		}

		this.contentEditable = false;
		this.setAttribute('atavist-block', 'true');
		var data = this._findStoryData(this);
		if (data) {
			this.setStoryData(data);
			this.story_data = data;
		}

		this._initializeSubcomponents();
	},

	_initializeSubcomponents: function() {

		var subcomponents = this.querySelectorAll('.atavist-subcomponent');
		for (var i = 0; i < subcomponents.length; i++) {
			subcomponents[i].fire('subcomponentReady');
		};
	},

	_findSubcomponentParent: function(el) {
		while (el) {
			if (el.classList && (el.classList.contains('atavist-block') || el.classList.contains('atavist-cover') || el.classList.contains('atavist-parent'))) {
				return el;
			}

			el = el.parentNode;
		}

		return null;
	},

	_findStoryData: function() {
		var data = null,
			block = this;

		if (block && block.parentNode && block.parentNode.classList && block.parentNode.classList.contains('story-data-container') && block.parentNode.dataset) {
			try {
				data = JSON.parse(block.parentNode.dataset.story);
			} catch (e) {

			}
		}

		return data;
	},

	_subcomponent: function() {
		var sub = this,
			key;

		this.classList.add('atavist-subcomponent');
		this._subcomponentReadyFired = false;
		this.addEventListener('subcomponentReady', function() {

			var key = this.getAttribute('key');
			
			if (this._subcomponentReadyFired) {
				return;
			}

			this._subcomponentReadyFired = true;

			this.block = this._findSubcomponentParent(this);

			function blockReadyForSubcomponent() {
				this.subcomponentBlockReady = true;
				if (key) {
					this.reference(this.block, key);
				}

				if (this.block.story_data) {
					this.block.setStoryData(this.block.story_data);
				}

				if (this.block.section_data) {
					this.block.setSectionData(this.block.section_data);
				};

				this.fire('subcomponentBlockReady');
			}

			if (this.block) {
				if (this.block.blockReady === true) {
					blockReadyForSubcomponent.call(this);
				} else {
					this.block.addEventListener('blockReady', function() {
						if (sub.subcomponentBlockReady) return;
						blockReadyForSubcomponent.call(sub);
					});
				}
			}
		});

		var originalAttached = this.attached;
		this.attached = function() {
			var block = this._findSubcomponentParent(this);
			if (block) {
				block._initializeSubcomponents();
			};

			if (originalAttached) {
				originalAttached.call(this);
			};

		};

	},

	_atavistShared: function() {
		this.classList.add(this.__proto__.is);
		this.classList.add('atavist-shared');
		if (this.custom_id) {
			this.classList.add(this.custom_id);
		}
	},

	sanitizeBlock: function() {

		// a little dank way of excluding block boilerplate els
		$(this).find('.block-chrome, .uploader-input').remove();
		$(this).find('.atavist-subcomponent').each(function() {
			if ($(this).get(0).cleanup) $(this).get(0).cleanup();
		});

		// NB: are these too destructive???
		this.classList.remove('in-editing-mode');
		this.removeAttribute('data-block-is-loaded');
		this.removeAttribute('style');
		this.seal();
	},

	/* utility functions */
	imageLoaded: function(src, cb) {
		var img = new Image(), self = this;
		img.onload = function() {
			cb.call(self, src, img);
		};

		img.src = src;
	},

	disableRichText: function() {
		this.setAttribute('data-disable-toolbar', 'true');
		return this;
	},

	_validIslandFormatters: [
		'bold',
		'italic',
		'link'
	],

	_validBlockFormatters: [
		'h2',
		'h3',
		'ol',
		'ul',
		'center'
	],

	disableBlockElementChildren: function() {
		this.setAttribute('data-disable-return', 'true');
		this.addEventListener('subcomponentBlockReady', function() {
			this.filterChildrenNonBlock(this);
		});

		if (this.editable()) {
			this.addEventListener('keydown', function(e) {
				// return key disabled
				if (e.keyCode === 13) {
					e.preventDefault();
					return false;
				}
			});
		}

		return this;
	},

	filterChildren: function(el) {
		var spans = el.querySelectorAll('span');
		for (var i = 0; i < spans.length; i++) {
			spans[i].outerHTML = spans[i].innerHTML;
		};

		var popup_triggers = el.querySelectorAll('.popup-block-trigger'); /* these are not allowed inside of blocks */
		for (var i = 0; i < popup_triggers.length; i++) {
			popup_triggers[i].outerHTML = popup_triggers[i].textContent;
		};

		this._filterNodes(el);
	},

	_filterNodes: function(node) {
		if (!node) return;
		if (node.nodeType == Node.COMMENT_NODE) {
			node.parentNode.removeChild(node);
		}

		if (node.childNodes.length > 1) {
			Array.prototype.forEach.call(node.childNodes, function(el) {
				this._filterNodes(el);
			}.bind(this));
		}
	},

	filterChildrenNonBlock: function(el) {
		this.filterChildren(this);
		var inlineElements = ['A', 'B', 'STRONG', 'I', 'EM'],
			els = el.querySelectorAll('*');
		for (var i = 0; i < els.length; i++) {
			if (inlineElements.indexOf(els[i].tagName) !== -1) {
				els[i].setAttribute('style', '');
			} else {
				if (els[i].childNodes.length) {
					try {
						els[i].outerHTML = els[i].innerHTML;
					} catch (e) {
						els[i].parentNode.removeChild(els[i]);
					}
				} else {
					if (els[i].parentNode) {
						els[i].parentNode.removeChild(els[i]);						
					}
				}
			}
		};
	},

	contentEditableIsland: function(allows_block_elements) {
		var elementFormatters = [],
			importedFormatters;

		function nonTextNode(node) {
			return node.nodeType !== 1 ? node.parentNode : node;
		}

		function parentIsNotThis(node) {
			if (this.contains(node)) {
				return false;
			}

			return true;
		}

		if (allows_block_elements) {
			this._validIslandFormatters = this._validIslandFormatters.concat(this._validBlockFormatters);
		}

		if (this.getAttribute('data-editables')) {
			importedFormatters = this.getAttribute('data-editables').split(',');
			for (var i = 0; i < importedFormatters.length; i++) {
				if (this._validIslandFormatters.indexOf(importedFormatters[i]) !== -1) {
					elementFormatters.push(importedFormatters[i]);
				}
			}
		}

		if (elementFormatters.length < 1) {
			elementFormatters = this._validIslandFormatters.slice(0);
		}

		this.addEventListener('subcomponentBlockReady', function() {
			this.filterChildren(this);
		});

		this.setAttribute('data-editables', elementFormatters.join(','));
		this.addEventListener('click', function(e) {
			var selection = window.getSelection(),
				ancestor,
				startContainer, endContainer,
				range;
			if (selection && selection.toString().length) {
				range = selection.getRangeAt(0);
				startContainer = nonTextNode(range.startContainer);
				endContainer = nonTextNode(range.endContainer);
				ancestor = nonTextNode(range.commonAncestorContainer);

				// if the range extends beyond the current element, onClick, we can presume that it should be constricted
				// should skip false positives where range belongs to child (a,b,i) of el
				if ((startContainer !== this || endContainer !== this) && parentIsNotThis.call(this, ancestor) === true) {
					var newRange = document.createRange();
					newRange.selectNodeContents(this);
					selection.removeAllRanges();
					selection.addRange(newRange);
					e.stopPropagation();
					e.preventDefault();
				}
			}
		});

		this.addEventListener('keydown', function(e) {
			var selection,
				ancestor,
				range;

			// select-a focuses on current node only
			if (e.keyCode === 65 && e.metaKey) {
				range = document.createRange();
				range.selectNodeContents(this);
				selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);
				e.preventDefault();
			}

			// prevent spanning delete
			if (e.keyCode === 8) {
				selection = window.getSelection();
				if (selection && selection.type === 'Range') {
					range = selection.getRangeAt(0);
					ancestor = range.commonAncestorContainer.nodeType !== 1 ? range.commonAncestorContainer.parentNode : range.commonAncestorContainer;
					if (ancestor !== this && !this.contains(ancestor)) {
						e.preventDefault();
					}
				}
			}
		});

		this.addEventListener('paste', function(e) {
			setTimeout(function() {
				this.filterChildren(this);
			}.bind(this));
		});

		return this;
	},

	importReferenceData: function(data) {
		if (this.importReference) {
			this.importReference(data);
		} else {
			if (typeof data === 'object') {
				for (var i in data) {
					if (data[i] !== this[i]) {
						this[i] = data[i];
					}
				}
			} else if (typeof data === 'string' && this.use_text === true) {
				if (this.updateable_text || this._text_set !== true) { // shifty/shady
					this.textContent = data;
				}
			} else if (typeof data === 'string' && this.use_html === true) {
				if (this.updateable_text || this._text_set !== true) { // shifty/shady
					this.innerHTML = data;
				}
			}
		}
	},

	exportReferenceData: function(refValues) {
		// console.log('ref sent', refValues)
		if (typeof refValues === 'object') {
			if (!this.ref[this.ref_key]) this.ref[this.ref_key] = {};
			for (var i in refValues) { // assemble the values
				this.ref[this.ref_key][i] = refValues[i];
			}
		} else if (typeof refValues === 'string') {
			this.ref[this.ref_key] = refValues;
			this._text_set = true;
		}
	},

	referenceChanged: function(data) {
		this.importReferenceData(data);
		if (this.ref && this.checkReference) {
			var basics = this.checkReference();
			this.exportReferenceData(basics);
		}
	},

	reference: function(el, key) {
		if (this.ref_setup === true) return;

		// console.log('[' + this.is + ' listening for key', key, ']');
		var self = this, initial_ref = {};
		this.ref = el;
		this.ref_key = key;
		if (typeof el[key] !== 'undefined') {
			this.importReferenceData(el[key]);
		}

		this.ref_setup = true;
		el.addEventListener(key + '-changed', this.onReferenceChange.bind(this));
	},

	onReferenceChange: function(e) {
		var sent;
		if (e.detail && e.detail.value) {
			this.referenceChanged(e.detail.value);
		}
	},

	unbindReference: function() {
		if (this.ref && this.ref_key) {

			this.ref.removeEventListener(this.ref_key + '-changed', this.onReferenceChange);

		}
	},

	broadcastReference: function() {
		if (!this.ref || this.ref_setup !== true) return;
		var refValues;
		if (this.checkReference) {
			refValues = this.checkReference();
		}

		this.exportReferenceData(refValues);
		this.fire('change'); /* fire the change event, which signals the block code to transmit the values to the form element */
	},

	getAssets: function() {
		var assets = [];
		if (this.getAttribute('data-assets')) {
			assets = this.getAttribute('data-assets').split(',');
		};

		if (this.isApp()) {
			for (var i = 0; i < assets.length; i++) {
				assets[i] = assets[i].split('/').pop(); /* filename only in app contexts */
			};
		}

		return assets;
	},

	setAssets: function(a) {
		// for the app, we don't need/want to set assets, so we can leverage this as a static list of available assets
		if (this.isApp() === true) return;
		this.setAttribute('data-assets', a.join(','));
	},

	addAsset: function(path) {
		if (this.__proto__.subcomponent === true) {
			var block = this._findSubcomponentParent(this);
			if (block && block.getAssets) {
				var assets = block.getAssets();
				if (assets.indexOf(path) === -1) {
					assets.push(path);
					block.setAssets(assets);
				}
			}
		}
	},

	_trackedEl: function() {
		return this._setupInView()._trackedEl();
	},

	_inViewContext: function() {
		return this._setupInView().context;
	},

	_setupInView: function() {
		var inView;

		if (!window._inView) {
			inView = {
				_trackedEl: function() {
					return document.querySelector('.cover-inner-wrapper') || document.querySelector('.section-contents') || document.querySelector('.currentChapter') || document.querySelector('.in-view') || window;
				},

				_refreshWaypoints: function() {
					var waypoints = [],
						new_context_el = this._trackedEl(),
						new_context = Waypoint.Context.findOrCreateByElement(new_context_el);
					if (this.context) {
						for (var key in this.context.waypoints.vertical) {
							var waypoint = this.context.waypoints.vertical[key];

							// leave existing waypoints alone?
							if (waypoint.group.name !== 'inview') {
								continue;
							}

							waypoint.context = new_context;
							waypoint.enabled = !new_context_el.contains || new_context_el.contains(waypoint.element);
							waypoints.push(waypoint);
							this.context.remove(waypoint);
						}
					};

					this.context.destroy();

					this.context = new_context;

					for (var i = 0; i < waypoints.length; i++) {
						var waypoint = waypoints[i],
							enabled = waypoint.enabled;
						waypoint.options.context = new_context_el;
						waypoint.options.enabled = (!new_context_el.contains || new_context_el.contains(waypoint.options.element)) ? true : false;
						new Waypoint(waypoint.options);
					};

				},

				context: null

			};

			window._inView = inView;

			if (typeof creatavist !== 'undefined' && creatavist.settings && creatavist.settings.read('pagination') === 'Paginate') {
				function setupPaginationBinding() {
					if (creatavist.settings.read('pagination') !== 'Paginate') return;
					window.addEventListener('afterSectionChange', function waypointChapterChange() {
						window._inView._refreshWaypoints();
					});
				}

				if (window.paginationDone) {
					setupPaginationBinding();
				} else {
					window.addEventListener('paginationDone', setupPaginationBinding);
				}
			}
		}

		return window._inView;
	},

	_defaultInView: function() {
		return window.innerHeight - (this.element.offsetHeight / 2);
	},

	_parseInView: function(opts) {
		var wp = {};

		if (typeof opts === 'function') {
			wp.handler = opts.bind(this);
			wp.offset = this._defaultInView;
			return wp;
		} else if (typeof opts === 'object') {
			opts.handler = opts.handler.bind(this);

			if (!opts.offset) {
				opts.offset = this._defaultInView;
			}

			return opts;
		}
	},

	_addWaypoint: function(opts) {
		var wp,
			inView = this._setupInView();

		if (typeof creatavist !== 'undefined' && !creatavist.editable && !window.paginationDone) {
			window.addEventListener('paginationDone', function() {
				this._addWaypoint(opts);
			}.bind(this));
			return;
		}

		opts.group = 'inview';
		opts.element = this;

		if (!opts.dont_bind) {
			opts.handler = opts.handler.bind(this);
		}

		opts.context = this._trackedEl();
		opts.enabled = (!opts.context.contains || opts.context.contains(this)) ? true : false;
		wp = new Waypoint(opts);
		inView.context = wp.context;
	},

	/**
	 * [whenInView - fire callback everytime element enters view, and optionally when it leaves the view]
	 * @param  {Object} callbacks - set of callbacks for "enter", "entered", "exit", and "exited" callbacks
	 * @param  {Object} offsets - Waypoints-formatted option set for where the various enter/exit callbacks occur
	 */
	whenInView: function(callbacks, offsets) {
		var configs = offsets || [{
			down: 'enter',
			up: 'exited',
			offset: '100%'
		}, {
			down: 'entered',
			up: 'exit',
			offset: 'bottom-in-view'
		}, {
			down: 'exit',
			up: 'entered',
			offset: 0
		}, {
			down: 'exited',
			up: 'enter',
			offset: function() {
				return -this.adapter.outerHeight();
			}
		}];

		for (var i = 0, end = configs.length; i < end; i++) {
			var config = configs[i];

			this._addWaypoint({
				handler: (function(config) {
					return function(direction) {
						if (callbacks[config[direction]]) {
							callbacks[config[direction]].call(this, direction);
						}
					};

				}

				(config)),
				offset: config.offset
			});

		}

	},

	/**
	 * [onceInView - fire callback when element first enters view]
	 * @param  {Function} opts - function or Waypoints-formatted option set when element first enters view
	 */
	onceInView: function(opts) {
		var wp, cb, pt, ptz;
		opts = this._parseInView(opts);
		cb = opts.handler.bind(this);
		opts.dont_bind = true;
		opts.handler = function() {
			cb();
			this.destroy();
		};

		pt = this._addWaypoint(opts);
	},

	_fetchStories: function(url, data, cb) {
		var data = (data) ? data : {};
		$.ajax({
			url: url,
			data: data,
			success: cb.bind(this)
		});
	},

	fetchStories: function(data, cb) {
		return this._fetchStories('/reader_api/stories.php?organization_id=' + this.organizationID(), data, cb);
	},

	fetchRelatedStories: function(data, cb) {
		return this._fetchStories('/reader_api/related_stories.php?story_id=' + this.storyID(), data, cb);
	},

	fetchByline: function(data, cb) {
		// return this._fetchStories('/reader_api/byline.php?story_id=' + this.storyID(), data, cb);
	},

	storyID: function() {
		if (this.editable()) { // Compose environment
			return creatavist.story_id;
		} else if (creatavist.settings) {
			return creatavist.settings.read('id');
		}
		return null;
	},

	organizationID: function() {
		if (this.editable()) { // Compose environment
			return creatavist.organization_id;
		} else if (creatavist.settings) {
			return creatavist.settings.read('organization_id');
		}
		return null;
	},

});

var CustomPolymer = function(tid, type) {
	return function(proto) {
		var original_id = proto.is;
		if (type === 'navigation') {
			proto.atavist = false;
			proto.extends = 'div';
		} else {
			proto.atavist = true;
			if (proto.extends) {
				delete proto['extends'];
			}
		}

		if (type === 'cover') {
			proto.cover = true;
		}

		proto.custom_id = original_id;
		proto.is = tid;

		return Polymer(proto);
	};
};

// /static/bower_components/atavist-polymer/subcomponents.dependencies.js  

/*! Video.js v4.8.4 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,k=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ba[a])return t.Ba[a];a=t.v(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}
var videojs=window.videojs=t;t.Tb="4.8";t.Rc="https:"==document.location.protocol?"https://":"http://";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{},errorDisplay:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.ve||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.Tb&&(videojs.options.flash.swf=t.Rc+"vjs.zencdn.net/"+t.Tb+"/video-js.swf");t.cd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.ga.Ua(t.options.languages[a],c):c;return t.options.languages};t.Ba={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.qa=t.CoreObject=m();
t.qa.extend=function(a){var c,d;a=a||{};c=a.init||a.i||this.prototype.init||this.prototype.i||m();d=function(){c.apply(this,arguments)};d.prototype=t.h.create(this.prototype);d.prototype.constructor=d;d.extend=t.qa.extend;d.create=t.qa.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.qa.create=function(){var a=t.h.create(this.prototype);this.apply(a,arguments);return a};
t.d=function(a,c,d){if(t.h.isArray(c))return u(t.d,a,c,d);var e=t.getData(a);e.C||(e.C={});e.C[c]||(e.C[c]=[]);d.w||(d.w=t.w++);e.C[c].push(d);e.X||(e.disabled=l,e.X=function(c){if(!e.disabled){c=t.oc(c);var d=e.C[c.type];if(d)for(var d=d.slice(0),j=0,n=d.length;j<n&&!c.vc();j++)d[j].call(a,c)}});1==e.C[c].length&&(a.addEventListener?a.addEventListener(c,e.X,l):a.attachEvent&&a.attachEvent("on"+c,e.X))};
t.o=function(a,c,d){if(t.rc(a)){var e=t.getData(a);if(e.C){if(t.h.isArray(c))return u(t.o,a,c,d);if(c){var g=e.C[c];if(g){if(d){if(d.w)for(e=0;e<g.length;e++)g[e].w===d.w&&g.splice(e--,1)}else e.C[c]=[];t.ic(a,c)}}else for(g in e.C)c=g,e.C[c]=[],t.ic(a,c)}}};t.ic=function(a,c){var d=t.getData(a);0===d.C[c].length&&(delete d.C[c],a.removeEventListener?a.removeEventListener(c,d.X,l):a.detachEvent&&a.detachEvent("on"+c,d.X));t.Gb(d.C)&&(delete d.C,delete d.X,delete d.disabled);t.Gb(d)&&t.Ec(a)};
t.oc=function(a){function c(){return f}function d(){return l}if(!a||!a.Hb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.yd=c;a.defaultPrevented=f};a.yd=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Hb=c};a.Hb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.vc=c;a.stopPropagation()};a.vc=d;if(a.clientX!=k){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=k&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.k=function(a,c){var d=t.rc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.oc(c);d.X&&d.X.call(a,c);if(e&&!c.Hb()&&c.bubbles!==l)t.k(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.O=function(a,c,d){function e(){t.o(a,c,e);d.apply(this,arguments)}if(t.h.isArray(c))return u(t.O,a,c,d);e.w=d.w=d.w||t.w++;t.d(a,c,e)};function u(a,c,d,e){t.gc.forEach(d,function(d){a(c,d,e)})}var v=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.h.Y(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.aa=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.h={};
t.h.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.h.Y=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};t.h.z=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};t.h.md=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=t.h.Sa(e)&&t.h.Sa(g)?t.h.md(e,g):c[d]);return a};t.h.copy=function(a){return t.h.z({},a)};
t.h.Sa=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.h.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.Ad=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.w||(c.w=t.w++);e.w=d?d+"_"+c.w:c.w;return e};t.ua={};t.w=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.w++,t.ua[c]={});return t.ua[c]};
t.rc=function(a){a=a[t.expando];return!(!a||t.Gb(t.ua[a]))};t.Ec=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=k}}};t.Gb=function(a){for(var c in a)if(a[c]!==k)return l;return f};t.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
t.p=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");t.L=navigator.userAgent;t.Xc=/iPhone/i.test(t.L);t.Wc=/iPad/i.test(t.L);t.Yc=/iPod/i.test(t.L);t.Vc=t.Xc||t.Wc||t.Yc;var aa=t,x;var y=t.L.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.ke=x;t.Tc=/Android/i.test(t.L);var ba=t,z;var A=t.L.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:k):z=k;ba.Sb=z;t.Zc=t.Tc&&/webkit/i.test(t.L)&&2.3>t.Sb;t.Uc=/Firefox/i.test(t.L);t.le=/Chrome/i.test(t.L);t.cc=!!("ontouchstart"in window||window.Sc&&document instanceof window.Sc);t.Gc=function(a,c){t.h.Y(c,function(c,e){e===k||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};
t.za=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==k?f:l;c[e]=g}}return c};
t.re=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Fb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.Oa={};t.v=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.ya=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),j=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<j?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.fd=function(){document.body.focus();document.onselectstart=r(l)};t.ge=function(){document.onselectstart=r(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.yb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
t.get=function(a,c,d,e){var g,h,j,n;d=d||m();"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});h=new XMLHttpRequest;j=t.Td(a);n=window.location;j.protocol+j.host!==n.protocol+n.host&&window.XDomainRequest&&!("withCredentials"in
h)?(h=new window.XDomainRequest,h.onload=function(){c(h.responseText)},h.onerror=d,h.onprogress=m(),h.ontimeout=d):(g="file:"==j.protocol||"file:"==n.protocol,h.onreadystatechange=function(){4===h.readyState&&(200===h.status||g&&0===h.status?c(h.responseText):d(h.responseText))});try{h.open("GET",a,f),e&&(h.withCredentials=f)}catch(q){d(q);return}try{h.send()}catch(w){d(w)}};
t.Xd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};t.qc=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Td=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];e&&document.body.removeChild(c);return a};
function D(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){D(k,arguments)};t.log.history=[];t.log.error=function(){D("error",arguments)};t.log.warn=function(){D("warn",arguments)};
t.ud=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.gc={};t.gc.forEach=function(a,c,d){if(t.h.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};t.ga={};
t.ga.Ua=function(a,c){var d,e,g;a=t.h.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.h.Sa(e)&&t.h.Sa(g)?t.ga.Ua(e,g):c[d]);return a};
t.a=t.qa.extend({i:function(a,c,d){this.c=a;this.l=t.h.copy(this.l);c=this.options(c);this.U=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+t.w++);this.Gd=c.name||k;this.b=c.el||this.e();this.M=[];this.Pa={};this.Qa={};this.tc();this.I(d);if(c.Fc!==l){var e,g;e=t.bind(this.j(),this.j().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});s=t.a.prototype;
s.dispose=function(){this.k({type:"dispose",bubbles:l});if(this.M)for(var a=this.M.length-1;0<=a;a--)this.M[a].dispose&&this.M[a].dispose();this.Qa=this.Pa=this.M=k;this.o();this.b.parentNode&&this.b.parentNode.removeChild(this.b);t.Ec(this.b);this.b=k};s.c=f;s.j=p("c");s.options=function(a){return a===b?this.l:this.l=t.ga.Ua(this.l,a)};s.e=function(a,c){return t.e(a,c)};s.s=function(a){var c=this.c.language(),d=this.c.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.v=p("b");
s.ja=function(){return this.u||this.b};s.id=p("U");s.name=p("Gd");s.children=p("M");s.wd=function(a){return this.Pa[a]};s.ka=function(a){return this.Qa[a]};s.R=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.aa(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.M.push(d);"function"===typeof d.id&&(this.Pa[d.id()]=d);(e=e||d.name&&d.name())&&(this.Qa[e]=d);"function"===typeof d.el&&d.el()&&this.ja().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.ka(a));if(a&&this.M){for(var c=l,d=this.M.length-1;0<=d;d--)if(this.M[d]===a){c=f;this.M.splice(d,1);break}c&&(this.Pa[a.id]=k,this.Qa[a.name]=k,(c=a.v())&&c.parentNode===this.ja()&&this.ja().removeChild(a.v()))}};s.tc=function(){var a,c,d,e;a=this;if(c=this.options().children)if(t.h.isArray(c))for(var g=0;g<c.length;g++)d=c[g],"string"==typeof d?(e=d,d={}):e=d.name,a[e]=a.R(e,d);else t.h.Y(c,function(c,d){d!==l&&(a[c]=a.R(c,d))})};s.T=r("");
s.d=function(a,c){t.d(this.b,a,t.bind(this,c));return this};s.o=function(a,c){t.o(this.b,a,c);return this};s.O=function(a,c){t.O(this.b,a,t.bind(this,c));return this};s.k=function(a){t.k(this.b,a);return this};s.I=function(a){a&&(this.la?a.call(this):(this.$a===b&&(this.$a=[]),this.$a.push(a)));return this};s.Fa=function(){this.la=f;var a=this.$a;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.$a=[];this.k("ready")}};s.n=function(a){t.n(this.b,a);return this};
s.p=function(a){t.p(this.b,a);return this};s.show=function(){this.b.style.display="block";return this};s.W=function(){this.b.style.display="none";return this};function E(a){a.p("vjs-lock-showing")}s.disable=function(){this.W();this.show=m()};s.width=function(a,c){return F(this,"width",a,c)};s.height=function(a,c){return F(this,"height",a,c)};s.pd=function(a,c){return this.width(a,f).height(c)};
function F(a,c,d,e){if(d!==b){if(d===k||t.Ad(d))d=0;a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.k("resize");return a}if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+t.aa(c)],10)}
function G(a){var c,d,e,g,h,j,n,q;c=0;d=k;a.d("touchstart",function(a){1===a.touches.length&&(d=a.touches[0],c=(new Date).getTime(),g=f)});a.d("touchmove",function(a){1<a.touches.length?g=l:d&&(j=a.touches[0].pageX-d.pageX,n=a.touches[0].pageY-d.pageY,q=Math.sqrt(j*j+n*n),22<q&&(g=l))});h=function(){g=l};a.d("touchleave",h);a.d("touchcancel",h);a.d("touchend",function(a){d=k;g===f&&(e=(new Date).getTime()-c,250>e&&(a.preventDefault(),this.k("tap")))})}
t.t=t.a.extend({i:function(a,c){t.a.call(this,a,c);G(this);this.d("tap",this.r);this.d("click",this.r);this.d("focus",this.Xa);this.d("blur",this.Wa)}});s=t.t.prototype;
s.e=function(a,c){var d;c=t.h.z({className:this.T(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.u=t.e("div",{className:"vjs-control-content"}),this.wb=t.e("span",{className:"vjs-control-text",innerHTML:this.s(this.ta)||"Need Text"}),this.u.appendChild(this.wb),d.appendChild(this.u));return d};s.T=function(){return"vjs-control "+t.a.prototype.T.call(this)};s.r=m();s.Xa=function(){t.d(document,"keydown",t.bind(this,this.da))};
s.da=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.r()};s.Wa=function(){t.o(document,"keydown",t.bind(this,this.da))};
t.Q=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.ed=this.ka(this.l.barName);this.handle=this.ka(this.l.handleName);this.d("mousedown",this.Ya);this.d("touchstart",this.Ya);this.d("focus",this.Xa);this.d("blur",this.Wa);this.d("click",this.r);this.c.d("controlsvisible",t.bind(this,this.update));a.d(this.Ac,t.bind(this,this.update));this.S={};this.S.move=t.bind(this,this.Za);this.S.end=t.bind(this,this.Kb)}});s=t.Q.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.h.z({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.Ya=function(a){a.preventDefault();t.fd();this.n("vjs-sliding");t.d(document,"mousemove",this.S.move);t.d(document,"mouseup",this.S.end);t.d(document,"touchmove",this.S.move);t.d(document,"touchend",this.S.end);this.Za(a)};s.Za=m();
s.Kb=function(){t.ge();this.p("vjs-sliding");t.o(document,"mousemove",this.S.move,l);t.o(document,"mouseup",this.S.end,l);t.o(document,"touchmove",this.S.move,l);t.o(document,"touchend",this.S.end,l);this.update()};s.update=function(){if(this.b){var a,c=this.Eb(),d=this.handle,e=this.ed;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.v().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.v().style.left=t.round(100*c,2)+"%"}e&&(e.v().style.width=t.round(100*a,2)+"%")}};
function H(a,c){var d,e,g,h;d=a.b;e=t.ud(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.v().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.v().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.Xa=function(){t.d(document,"keyup",t.bind(this,this.da))};
s.da=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.Jc();else if(38==a.which||39==a.which)a.preventDefault(),this.Kc()};s.Wa=function(){t.o(document,"keyup",t.bind(this,this.da))};s.r=function(a){a.stopImmediatePropagation();a.preventDefault()};t.Z=t.a.extend();t.Z.prototype.defaultValue=0;
t.Z.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.h.z({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};t.ha=t.a.extend();function ca(a,c){a.R(c);c.d("click",t.bind(a,function(){E(this)}))}
t.ha.prototype.e=function(){var a=this.options().jc||"ul";this.u=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.u,className:"vjs-menu"});a.appendChild(this.u);t.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.H=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.selected(c.selected)}});t.H.prototype.e=function(a,c){return t.t.prototype.e.call(this,"li",t.h.z({className:"vjs-menu-item",innerHTML:this.l.label},c))};
t.H.prototype.r=function(){this.selected(f)};t.H.prototype.selected=function(a){a?(this.n("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.p("vjs-selected"),this.b.setAttribute("aria-selected",l))};t.K=t.t.extend({i:function(a,c){t.t.call(this,a,c);this.Aa=this.wa();this.R(this.Aa);this.N&&0===this.N.length&&this.W();this.d("keyup",this.da);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});s=t.K.prototype;s.sa=l;
s.wa=function(){var a=new t.ha(this.c);this.options().title&&a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.options().title),de:-1}));if(this.N=this.createItems())for(var c=0;c<this.N.length;c++)ca(a,this.N[c]);return a};s.va=m();s.T=function(){return this.className+" vjs-menu-button "+t.t.prototype.T.call(this)};s.Xa=m();s.Wa=m();s.r=function(){this.O("mouseout",t.bind(this,function(){E(this.Aa);this.b.blur()}));this.sa?I(this):J(this)};
s.da=function(a){a.preventDefault();32==a.which||13==a.which?this.sa?I(this):J(this):27==a.which&&this.sa&&I(this)};function J(a){a.sa=f;a.Aa.n("vjs-lock-showing");a.b.setAttribute("aria-pressed",f);a.N&&0<a.N.length&&a.N[0].v().focus()}function I(a){a.sa=l;E(a.Aa);a.b.setAttribute("aria-pressed",l)}t.D=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.h.z(this,a);this.message||(this.message=t.D.nd[this.code]||"")};t.D.prototype.code=0;
t.D.prototype.message="";t.D.prototype.status=k;t.D.Ra="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.D.nd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var K=0;K<t.D.Ra.length;K++)t.D[t.D.Ra[K]]=K,t.D.prototype[t.D.Ra[K]]=K;
var L,M,N,O;
L=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
M=L[0];for(O=0;O<L.length;O++)if(L[O][1]in document){N=L[O];break}if(N){t.Oa.Db={};for(O=0;O<N.length;O++)t.Oa.Db[M[O]]=N[O]}
t.Player=t.a.extend({i:function(a,c,d){this.P=a;a.id=a.id||"vjs_video_"+t.w++;this.ee=a&&t.za(a);c=t.h.z(da(a),c);this.Ta=c.language||t.options.language;this.Ed=c.languages||t.options.languages;this.F={};this.Bc=c.poster;this.xb=c.controls;a.controls=l;c.Fc=l;t.a.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");t.Ba[this.U]=this;c.plugins&&t.h.Y(c.plugins,function(a,c){this[a](c)},this);var e,g,h,j,n,q;e=t.bind(this,this.reportUserActivity);this.d("mousedown",
function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",function(a){if(a.screenX!=n||a.screenY!=q)n=a.screenX,q=a.screenY,e()});this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);h=setInterval(t.bind(this,function(){if(this.pa){this.pa=l;this.userActive(f);clearTimeout(j);var a=this.options().inactivityTimeout;0<a&&(j=setTimeout(t.bind(this,function(){this.pa||this.userActive(l)}),a))}}),250);this.d("dispose",function(){clearInterval(h);clearTimeout(j)})}});
s=t.Player.prototype;s.language=function(a){if(a===b)return this.Ta;this.Ta=a;return this};s.languages=p("Ed");s.l=t.options;s.dispose=function(){this.k("dispose");this.o("dispose");t.Ba[this.U]=k;this.P&&this.P.player&&(this.P.player=k);this.b&&this.b.player&&(this.b.player=k);this.m&&this.m.dispose();t.a.prototype.dispose.call(this)};
function da(a){var c={sources:[],tracks:[]};t.h.z(c,t.za(a));if(a.hasChildNodes()){var d,e,g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(t.za(d)):"track"===e&&c.tracks.push(t.za(d))}return c}
s.e=function(){var a=this.b=t.a.prototype.e.call(this,"div"),c=this.P,d;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var e,g,h,j,n;e=c.childNodes;g=e.length;for(n=[];g--;)h=e[g],j=h.nodeName.toLowerCase(),"track"===j&&n.push(h);for(e=0;e<n.length;e++)c.removeChild(n[e])}d=t.za(c);t.h.Y(d,function(c){a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.l.width,f);this.height(this.l.height,f);c.parentNode&&
c.parentNode.insertBefore(a,c);t.Fb(c,a);this.b=a;this.d("loadstart",this.Ld);this.d("waiting",this.Rd);this.d(["canplay","canplaythrough","playing","ended"],this.Qd);this.d("seeking",this.Od);this.d("seeked",this.Nd);this.d("ended",this.Hd);this.d("play",this.Mb);this.d("firstplay",this.Jd);this.d("pause",this.Lb);this.d("progress",this.Md);this.d("durationchange",this.yc);this.d("fullscreenchange",this.Kd);return a};
function P(a,c,d){a.m&&(a.la=l,a.m.dispose(),a.m=l);"Html5"!==c&&a.P&&(t.g.Ab(a.P),a.P=k);a.cb=c;a.la=l;var e=t.h.z({source:d,parentEl:a.b},a.l[c.toLowerCase()]);d&&(a.lc=d.type,d.src==a.F.src&&0<a.F.currentTime&&(e.startTime=a.F.currentTime),a.F.src=d.src);a.m=new window.videojs[c](a,e);a.m.I(function(){this.c.Fa()})}s.Ld=function(){this.error(k);this.paused()?(Q(this,l),this.O("play",function(){Q(this,f)})):this.k("firstplay")};s.sc=l;
function Q(a,c){c!==b&&a.sc!==c&&((a.sc=c)?(a.n("vjs-has-started"),a.k("firstplay")):a.p("vjs-has-started"))}s.Mb=function(){this.p("vjs-paused");this.n("vjs-playing")};s.Rd=function(){this.n("vjs-waiting")};s.Qd=function(){this.p("vjs-waiting")};s.Od=function(){this.n("vjs-seeking")};s.Nd=function(){this.p("vjs-seeking")};s.Jd=function(){this.l.starttime&&this.currentTime(this.l.starttime);this.n("vjs-has-started")};s.Lb=function(){this.p("vjs-playing");this.n("vjs-paused")};
s.Md=function(){1==this.bufferedPercent()&&this.k("loadedalldata")};s.Hd=function(){this.l.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.yc=function(){var a=R(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.n("vjs-live"):this.p("vjs-live"))};s.Kd=function(){this.isFullscreen()?this.n("vjs-fullscreen"):this.p("vjs-fullscreen")};function S(a,c,d){if(a.m&&!a.m.la)a.m.I(function(){this[c](d)});else try{a.m[c](d)}catch(e){throw t.log(e),e;}}
function R(a,c){if(a.m&&a.m.la)try{return a.m[c]()}catch(d){throw a.m[c]===b?t.log("Video.js: "+c+" method not defined for "+a.cb+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.cb+" playback technology element.",d),a.m.la=l):t.log(d),d;}}s.play=function(){S(this,"play");return this};s.pause=function(){S(this,"pause");return this};s.paused=function(){return R(this,"paused")===l?l:f};
s.currentTime=function(a){return a!==b?(S(this,"setCurrentTime",a),this):this.F.currentTime=R(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.F.duration=parseFloat(a),this;this.F.duration===b&&this.yc();return this.F.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=R(this,"buffered");if(!a||!a.length)a=t.yb(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.F.volume=a,S(this,"setVolume",a),t.Xd(a),this;a=parseFloat(R(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(S(this,"setMuted",a),this):R(this,"muted")||l};s.Da=function(){return R(this,"supportsFullScreen")||l};s.uc=l;
s.isFullscreen=function(a){return a!==b?(this.uc=!!a,this):this.uc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
s.requestFullscreen=function(){var a=t.Oa.Db;this.isFullscreen(f);a?(t.d(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.o(document,a.fullscreenchange,arguments.callee);this.k("fullscreenchange")})),this.b[a.requestFullscreen]()):this.m.Da()?S(this,"enterFullScreen"):(this.nc(),this.k("fullscreenchange"));return this};
s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.Oa.Db;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.m.Da()?S(this,"exitFullScreen"):(this.Bb(),this.k("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
s.nc=function(){this.zd=f;this.qd=document.documentElement.style.overflow;t.d(document,"keydown",t.bind(this,this.pc));document.documentElement.style.overflow="hidden";t.n(document.body,"vjs-full-window");this.k("enterFullWindow")};s.pc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Bb())};s.Bb=function(){this.zd=l;t.o(document,"keydown",this.pc);document.documentElement.style.overflow=this.qd;t.p(document.body,"vjs-full-window");this.k("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.l.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,j=a;h<j.length;h++){var n=j[h];if(g.canPlaySource(n))return{source:n,m:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return R(this,"src");t.h.isArray(a)?T(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.cb].canPlaySource(a)?T(this,[a]):(this.F.src=a.src,this.lc=a.type||"",this.I(function(){S(this,"src",a.src);"auto"==this.l.preload&&this.load();this.l.autoplay&&this.play()})));return this};
function T(a,c){var d=a.selectSource(c),e;d?d.m===a.cb?a.src(d.source):P(a,d.m,d.source):(e=setTimeout(t.bind(a,function(){this.error({code:4,message:this.s(this.options().notSupportedMessage)})}),0),a.Fa(),a.d("dispose",function(){clearTimeout(e)}))}s.load=function(){S(this,"load");return this};s.currentSrc=function(){return R(this,"currentSrc")||this.F.src||""};s.ld=function(){return this.lc||""};s.Ca=function(a){return a!==b?(S(this,"setPreload",a),this.l.preload=a,this):R(this,"preload")};
s.autoplay=function(a){return a!==b?(S(this,"setAutoplay",a),this.l.autoplay=a,this):R(this,"autoplay")};s.loop=function(a){return a!==b?(S(this,"setLoop",a),this.l.loop=a,this):R(this,"loop")};s.poster=function(a){if(a===b)return this.Bc;this.Bc=a;S(this,"setPoster",a);this.k("posterchange")};
s.controls=function(a){return a!==b?(a=!!a,this.xb!==a&&((this.xb=a)?(this.p("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.k("controlsenabled")):(this.p("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.k("controlsdisabled"))),this):this.xb};t.Player.prototype.Rb;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.Rb!==a&&((this.Rb=a)?(this.n("vjs-using-native-controls"),this.k("usingnativecontrols")):(this.p("vjs-using-native-controls"),this.k("usingcustomcontrols"))),this):this.Rb};s.ca=k;s.error=function(a){if(a===b)return this.ca;if(a===k)return this.ca=a,this.p("vjs-error"),this;this.ca=a instanceof t.D?a:new t.D(a);this.k("error");this.n("vjs-error");t.log.error("(CODE:"+this.ca.code+" "+t.D.Ra[this.ca.code]+")",this.ca.message,this.ca);return this};
s.ended=function(){return R(this,"ended")};s.seeking=function(){return R(this,"seeking")};s.pa=f;s.reportUserActivity=function(){this.pa=f};s.Qb=f;s.userActive=function(a){return a!==b?(a=!!a,a!==this.Qb&&((this.Qb=a)?(this.pa=f,this.p("vjs-user-inactive"),this.n("vjs-user-active"),this.k("useractive")):(this.pa=l,this.m&&this.m.O("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.p("vjs-user-active"),this.n("vjs-user-inactive"),this.k("userinactive"))),this):this.Qb};
s.playbackRate=function(a){return a!==b?(S(this,"setPlaybackRate",a),this):this.m&&this.m.featuresPlaybackRate?R(this,"playbackRate"):1};t.Ia=t.a.extend();t.Ia.prototype.l={se:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{}}};t.Ia.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};
t.Wb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.u=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.s("Stream Type")+"</span>"+this.s("LIVE"),"aria-live":"off"});a.appendChild(this.u);return a};t.Zb=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("play",t.bind(this,this.Mb));a.d("pause",t.bind(this,this.Lb))}});s=t.Zb.prototype;s.ta="Play";
s.T=function(){return"vjs-play-control "+t.t.prototype.T.call(this)};s.r=function(){this.c.paused()?this.c.play():this.c.pause()};s.Mb=function(){t.p(this.b,"vjs-paused");t.n(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML=this.s("Pause")};s.Lb=function(){t.p(this.b,"vjs-playing");t.n(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML=this.s("Play")};t.gb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.gb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.u);return a};t.gb.prototype.fa=function(){var a=this.c.ab?this.c.F.currentTime:this.c.currentTime();this.u.innerHTML='<span class="vjs-control-text">'+this.s("Current Time")+"</span> "+t.ya(a,this.c.duration())};
t.hb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.hb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.s("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.u);return a};
t.hb.prototype.fa=function(){var a=this.c.duration();a&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Duration Time")+"</span> "+t.ya(a))};t.ec=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.ec.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.ob=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});
t.ob.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.u=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.u);return a};t.ob.prototype.fa=function(){this.c.duration()&&(this.u.innerHTML='<span class="vjs-control-text">'+this.s("Remaining Time")+"</span> -"+t.ya(this.c.remainingTime()))};
t.Ja=t.t.extend({i:function(a,c){t.t.call(this,a,c)}});t.Ja.prototype.ta="Fullscreen";t.Ja.prototype.T=function(){return"vjs-fullscreen-control "+t.t.prototype.T.call(this)};t.Ja.prototype.r=function(){this.c.isFullscreen()?(this.c.exitFullscreen(),this.wb.innerHTML=this.s("Fullscreen")):(this.c.requestFullscreen(),this.wb.innerHTML=this.s("Non-Fullscreen"))};t.nb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.nb.prototype.l={children:{seekBar:{}}};
t.nb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.ac=t.Q.extend({i:function(a,c){t.Q.call(this,a,c);a.d("timeupdate",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.ac.prototype;s.l={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Ac="timeupdate";s.e=function(){return t.Q.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.oa=function(){var a=this.c.ab?this.c.F.currentTime:this.c.currentTime();this.b.setAttribute("aria-valuenow",t.round(100*this.Eb(),2));this.b.setAttribute("aria-valuetext",t.ya(a,this.c.duration()))};s.Eb=function(){return this.c.currentTime()/this.c.duration()};s.Ya=function(a){t.Q.prototype.Ya.call(this,a);this.c.ab=f;this.ie=!this.c.paused();this.c.pause()};s.Za=function(a){a=H(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};
s.Kb=function(a){t.Q.prototype.Kb.call(this,a);this.c.ab=l;this.ie&&this.c.play()};s.Kc=function(){this.c.currentTime(this.c.currentTime()+5)};s.Jc=function(){this.c.currentTime(this.c.currentTime()-5)};t.kb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.d("progress",t.bind(this,this.update))}});t.kb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Loaded")+"</span>: 0%</span>"})};
t.kb.prototype.update=function(){var a,c,d,e,g=this.c.buffered();a=this.c.duration();var h,j=this.c;h=j.buffered();j=j.duration();h=h.end(h.length-1);h>j&&(h=j);j=this.b.children;this.b.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=j[a])||(e=this.b.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=j.length;a>g.length;a--)this.b.removeChild(j[a-1])};t.Yb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.Yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.s("Progress")+"</span>: 0%</span>"})};t.La=t.Z.extend({i:function(a,c){t.Z.call(this,a,c);a.d("timeupdate",t.bind(this,this.fa))}});t.La.prototype.defaultValue="00:00";t.La.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.La.prototype.fa=function(){var a=this.c.ab?this.c.F.currentTime:this.c.currentTime();this.b.innerHTML='<span class="vjs-control-text">'+t.ya(a,this.c.duration())+"</span>"};t.qb=t.a.extend({i:function(a,c){t.a.call(this,a,c);a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.qb.prototype.l={children:{volumeBar:{}}};
t.qb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.pb=t.Q.extend({i:function(a,c){t.Q.call(this,a,c);a.d("volumechange",t.bind(this,this.oa));a.I(t.bind(this,this.oa))}});s=t.pb.prototype;s.oa=function(){this.b.setAttribute("aria-valuenow",t.round(100*this.c.volume(),2));this.b.setAttribute("aria-valuetext",t.round(100*this.c.volume(),2)+"%")};s.l={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Ac="volumechange";s.e=function(){return t.Q.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.Za=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(H(this,a))};s.Eb=function(){return this.c.muted()?0:this.c.volume()};s.Kc=function(){this.c.volume(this.c.volume()+0.1)};s.Jc=function(){this.c.volume(this.c.volume()-0.1)};t.fc=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});
t.fc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.rb=t.Z.extend();t.rb.prototype.defaultValue="00:00";t.rb.prototype.e=function(){return t.Z.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ia=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}))}});t.ia.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};
t.ia.prototype.r=function(){this.c.muted(this.c.muted()?l:f)};t.ia.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?this.b.children[0].children[0].innerHTML!=this.s("Unmute")&&(this.b.children[0].children[0].innerHTML=this.s("Unmute")):this.b.children[0].children[0].innerHTML!=this.s("Mute")&&(this.b.children[0].children[0].innerHTML=this.s("Mute"));for(a=0;4>a;a++)t.p(this.b,"vjs-vol-"+a);t.n(this.b,"vjs-vol-"+c)};
t.ra=t.K.extend({i:function(a,c){t.K.call(this,a,c);a.d("volumechange",t.bind(this,this.update));a.m&&a.m.featuresVolumeControl===l&&this.n("vjs-hidden");a.d("loadstart",t.bind(this,function(){a.m.featuresVolumeControl===l?this.n("vjs-hidden"):this.p("vjs-hidden")}));this.n("vjs-menu-button")}});t.ra.prototype.wa=function(){var a=new t.ha(this.c,{jc:"div"}),c=new t.pb(this.c,t.h.z({vertical:f},this.l.we));a.R(c);return a};t.ra.prototype.r=function(){t.ia.prototype.r.call(this);t.K.prototype.r.call(this)};
t.ra.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.s("Mute")+"</span></div>"})};t.ra.prototype.update=t.ia.prototype.update;t.$b=t.K.extend({i:function(a,c){t.K.call(this,a,c);this.Pc();this.Oc();a.d("loadstart",t.bind(this,this.Pc));a.d("ratechange",t.bind(this,this.Oc))}});s=t.$b.prototype;
s.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-playback-rate vjs-menu-button vjs-control",innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+this.s("Playback Rate")+"</span></div>"});this.wc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.wc);return a};s.wa=function(){var a=new t.ha(this.j()),c=this.j().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.R(new t.mb(this.j(),{rate:c[d]+"x"}));return a};
s.oa=function(){this.v().setAttribute("aria-valuenow",this.j().playbackRate())};s.r=function(){for(var a=this.j().playbackRate(),c=this.j().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.j().playbackRate(d)};function U(a){return a.j().m&&a.j().m.featuresPlaybackRate&&a.j().options().playbackRates&&0<a.j().options().playbackRates.length}s.Pc=function(){U(this)?this.p("vjs-hidden"):this.n("vjs-hidden")};
s.Oc=function(){U(this)&&(this.wc.innerHTML=this.j().playbackRate()+"x")};t.mb=t.H.extend({jc:"button",i:function(a,c){var d=this.label=c.rate,e=this.Dc=parseFloat(d,10);c.label=d;c.selected=1===e;t.H.call(this,a,c);this.j().d("ratechange",t.bind(this,this.update))}});t.mb.prototype.r=function(){t.H.prototype.r.call(this);this.j().playbackRate(this.Dc)};t.mb.prototype.update=function(){this.selected(this.j().playbackRate()==this.Dc)};
t.Ka=t.t.extend({i:function(a,c){t.t.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.W();a.d("posterchange",t.bind(this,function(){this.src(a.poster())}));a.d("play",t.bind(this,this.W))}});var ea="backgroundSize"in t.A.style;t.Ka.prototype.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});ea||a.appendChild(t.e("img"));return a};t.Ka.prototype.src=function(a){var c=this.v();a!==b&&(ea?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};
t.Ka.prototype.r=function(){this.j().controls()&&this.c.play()};t.Xb=t.a.extend({i:function(a,c){t.a.call(this,a,c)}});t.Xb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.eb=t.t.extend();t.eb.prototype.e=function(){return t.t.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.eb.prototype.r=function(){this.c.play()};
t.ib=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.update();a.d("error",t.bind(this,this.update))}});t.ib.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.u=t.e("div");a.appendChild(this.u);return a};t.ib.prototype.update=function(){this.j().error()&&(this.u.innerHTML=this.s(this.j().error().message))};
t.q=t.a.extend({i:function(a,c,d){c=c||{};c.Fc=l;t.a.call(this,a,c,d);this.featuresProgressEvents||(this.xc=f,this.Cc=setInterval(t.bind(this,function(){var a=this.j().bufferedPercent();this.gd!=a&&this.j().k("progress");this.gd=a;1===a&&clearInterval(this.Cc)}),500));this.featuresTimeupdateEvents||(this.Jb=f,this.j().d("play",t.bind(this,this.Nc)),this.j().d("pause",t.bind(this,this.bb)),this.O("timeupdate",function(){this.featuresTimeupdateEvents=f;fa(this)}));var e,g;g=this;e=this.j();a=function(){if(e.controls()&&
!e.usingNativeControls()){var a;g.d("mousedown",g.r);g.d("touchstart",function(){a=this.c.userActive()});g.d("touchmove",function(){a&&this.j().reportUserActivity()});g.d("touchend",function(a){a.preventDefault()});G(g);g.d("tap",g.Pd)}};c=t.bind(g,g.Vd);this.I(a);e.d("controlsenabled",a);e.d("controlsdisabled",c);this.I(function(){this.networkState&&0<this.networkState()&&this.j().k("loadstart")})}});s=t.q.prototype;
s.Vd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};s.r=function(a){0===a.button&&this.j().controls()&&(this.j().paused()?this.j().play():this.j().pause())};s.Pd=function(){this.j().userActive(!this.j().userActive())};function fa(a){a.Jb=l;a.bb();a.o("play",a.Nc);a.o("pause",a.bb)}
s.Nc=function(){this.kc&&this.bb();this.kc=setInterval(t.bind(this,function(){this.j().k("timeupdate")}),250)};s.bb=function(){clearInterval(this.kc);this.j().k("timeupdate")};s.dispose=function(){this.xc&&(this.xc=l,clearInterval(this.Cc));this.Jb&&fa(this);t.a.prototype.dispose.call(this)};s.Ob=function(){this.Jb&&this.j().k("timeupdate")};s.Hc=m();t.q.prototype.featuresVolumeControl=f;t.q.prototype.featuresFullscreenResize=l;t.q.prototype.featuresPlaybackRate=l;
t.q.prototype.featuresProgressEvents=l;t.q.prototype.featuresTimeupdateEvents=l;t.media={};
t.g=t.q.extend({i:function(a,c,d){this.featuresVolumeControl=t.g.jd();this.featuresPlaybackRate=t.g.hd();this.movingMediaElementInDOM=!t.Vc;this.featuresProgressEvents=this.featuresFullscreenResize=f;t.q.call(this,a,c,d);for(d=t.g.jb.length-1;0<=d;d--)t.d(this.b,t.g.jb[d],t.bind(this,this.sd));if((c=c.source)&&this.b.currentSrc!==c.src)this.b.src=c.src;if(t.cc&&a.options().nativeControlsForTouch!==l){var e,g,h,j;e=this;g=this.j();c=g.controls();e.b.controls=!!c;h=function(){e.b.controls=f};j=function(){e.b.controls=
l};g.d("controlsenabled",h);g.d("controlsdisabled",j);c=function(){g.o("controlsenabled",h);g.o("controlsdisabled",j)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.I(function(){this.P&&(this.l.autoplay&&this.paused())&&(delete this.P.poster,this.play())});this.Fa()}});s=t.g.prototype;s.dispose=function(){t.g.Ab(this.b);t.q.prototype.dispose.call(this)};
s.e=function(){var a=this.c,c=a.P,d;if(!c||this.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),t.g.Ab(c),c=d,a.P=k):(c=t.e("video"),t.Gc(c,t.h.z(a.ee||{},{id:a.id()+"_html5_api","class":"vjs-tech"}))),c.player=a,t.Fb(c,a.v());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e],h={};"undefined"!==typeof a.l[g]&&(h[g]=a.l[g]);t.Gc(c,h)}return c};s.sd=function(a){"error"==a.type&&this.error()?this.j().error(this.error().code):(a.bubbles=l,this.j().k(a))};s.play=function(){this.b.play()};
s.pause=function(){this.b.pause()};s.paused=function(){return this.b.paused};s.currentTime=function(){return this.b.currentTime};s.Ob=function(a){try{this.b.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};s.duration=function(){return this.b.duration||0};s.buffered=function(){return this.b.buffered};s.volume=function(){return this.b.volume};s.be=function(a){this.b.volume=a};s.muted=function(){return this.b.muted};s.Zd=function(a){this.b.muted=a};s.width=function(){return this.b.offsetWidth};
s.height=function(){return this.b.offsetHeight};s.Da=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(t.L)||!/Chrome|Mac OS X 10.5/.test(t.L))?f:l};
s.mc=function(){var a=this.b;"webkitDisplayingFullscreen"in a&&this.O("webkitbeginfullscreen",t.bind(this,function(){this.c.isFullscreen(f);this.O("webkitendfullscreen",t.bind(this,function(){this.c.isFullscreen(l);this.c.k("fullscreenchange")}));this.c.k("fullscreenchange")}));a.paused&&a.networkState<=a.je?(this.b.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.td=function(){this.b.webkitExitFullScreen()};
s.src=function(a){if(a===b)return this.b.src;this.b.src=a};s.load=function(){this.b.load()};s.currentSrc=function(){return this.b.currentSrc};s.poster=function(){return this.b.poster};s.Hc=function(a){this.b.poster=a};s.Ca=function(){return this.b.Ca};s.ae=function(a){this.b.Ca=a};s.autoplay=function(){return this.b.autoplay};s.Wd=function(a){this.b.autoplay=a};s.controls=function(){return this.b.controls};s.loop=function(){return this.b.loop};s.Yd=function(a){this.b.loop=a};s.error=function(){return this.b.error};
s.seeking=function(){return this.b.seeking};s.ended=function(){return this.b.ended};s.playbackRate=function(){return this.b.playbackRate};s.$d=function(a){this.b.playbackRate=a};s.networkState=function(){return this.b.networkState};t.g.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.g.ub=function(a){try{return!!t.A.canPlayType(a.type)}catch(c){return""}};t.g.jd=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};
t.g.hd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};var V,ga=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,ha=/^video\/mp4/i;t.g.zc=function(){4<=t.Sb&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ga.test(a)?"maybe":V.call(this,a)});t.Zc&&(V||(V=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ha.test(a)?"maybe":V.call(this,a)})};
t.g.he=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=V;V=k;return a};t.g.zc();t.g.jb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
t.g.Ab=function(a){if(a){a.player=k;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.f=t.q.extend({i:function(a,c,d){t.q.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.b=t.e("div",{id:a.id()+"_temp_flash"}),h=a.id()+"_flash_api",j=a.l,j=t.h.z({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:j.autoplay,preload:j.Ca,loop:j.loop,muted:j.muted},c.flashVars),n=t.h.z({wmode:"opaque",bgcolor:"#000000"},c.params),h=t.h.z({id:h,name:h,"class":"vjs-tech"},c.attributes);e&&(e.type&&t.f.Cd(e.type)?
(e=t.f.Lc(e.src),j.rtmpConnection=encodeURIComponent(e.vb),j.rtmpStream=encodeURIComponent(e.Pb)):j.src=encodeURIComponent(t.qc(e.src)));t.Fb(g,d);c.startTime&&this.I(function(){this.load();this.play();this.currentTime(c.startTime)});t.Uc&&this.I(function(){t.d(this.v(),"mousemove",t.bind(this,function(){this.j().k({type:"mousemove",bubbles:l})}))});a.d("stageclick",a.reportUserActivity);this.b=t.f.rd(c.swf,g,j,n,h)}});t.f.prototype.dispose=function(){t.q.prototype.dispose.call(this)};
t.f.prototype.play=function(){this.b.vjs_play()};t.f.prototype.pause=function(){this.b.vjs_pause()};t.f.prototype.src=function(a){if(a===b)return this.currentSrc();t.f.Bd(a)?(a=t.f.Lc(a),this.te(a.vb),this.ue(a.Pb)):(a=t.qc(a),this.b.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.f.prototype.setCurrentTime=function(a){this.Fd=a;this.b.vjs_setProperty("currentTime",a);t.q.prototype.Ob.call(this)};
t.f.prototype.currentTime=function(){return this.seeking()?this.Fd||0:this.b.vjs_getProperty("currentTime")};t.f.prototype.currentSrc=function(){var a=this.b.vjs_getProperty("currentSrc");if(a==k){var c=this.rtmpConnection(),d=this.rtmpStream();c&&d&&(a=t.f.ce(c,d))}return a};t.f.prototype.load=function(){this.b.vjs_load()};t.f.prototype.poster=function(){this.b.vjs_getProperty("poster")};t.f.prototype.setPoster=m();t.f.prototype.buffered=function(){return t.yb(0,this.b.vjs_getProperty("buffered"))};
t.f.prototype.Da=r(l);t.f.prototype.mc=r(l);function ia(){var a=W[X],c=a.charAt(0).toUpperCase()+a.slice(1);ja["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}function ka(a){ja[a]=function(){return this.b.vjs_getProperty(a)}}
var ja=t.f.prototype,W="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),la="error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),X;for(X=0;X<W.length;X++)ka(W[X]),ia();for(X=0;X<la.length;X++)ka(la[X]);t.f.isSupported=function(){return 10<=t.f.version()[0]};
t.f.ub=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in t.f.vd||a in t.f.Mc)return"maybe"};t.f.vd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.f.Mc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.f.onReady=function(a){var c;if(c=(a=t.v(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.f.checkReady(c.m)};t.f.checkReady=function(a){a.v()&&(a.v().vjs_getProperty?a.Fa():setTimeout(function(){t.f.checkReady(a)},50))};t.f.onEvent=function(a,c){t.v(a).player.k(c)};
t.f.onError=function(a,c){var d=t.v(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};t.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.f.rd=function(a,c,d,e,g){a=t.f.xd(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.f.xd=function(a,c,d,e){var g="",h="",j="";c&&t.h.Y(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.h.z({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.h.Y(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.h.z({data:a,width:"100%",height:"100%"},e);t.h.Y(e,function(a,c){j+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+j+">"+h+"</object>"};t.f.ce=function(a,c){return a+"&"+c};
t.f.Lc=function(a){var c={vb:"",Pb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.vb=a.substring(0,d);c.Pb=a.substring(e,a.length);return c};t.f.Cd=function(a){return a in t.f.Mc};t.f.ad=/^rtmp[set]?:\/\//i;t.f.Bd=function(a){return t.f.ad.test(a)};
t.$c=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(!a.l.sources||0===a.l.sources.length){c=0;for(d=a.l.techOrder;c<d.length;c++){var e=t.aa(d[c]),g=window.videojs[e];if(g&&g.isSupported()){P(a,e);break}}}else a.src(a.l.sources)}});t.Player.prototype.textTracks=function(){return this.Ea=this.Ea||[]};
function ma(a,c,d,e,g){var h=a.Ea=a.Ea||[];g=g||{};g.kind=c;g.label=d;g.language=e;c=t.aa(c||"subtitles");var j=new window.videojs[c+"Track"](a,g);h.push(j);j.zb()&&a.I(function(){setTimeout(function(){Y(j.j(),j.id())},0)})}function Y(a,c,d){for(var e=a.Ea,g=0,h=e.length,j,n;g<h;g++)j=e[g],j.id()===c?(j.show(),n=j):d&&(j.J()==d&&0<j.mode())&&j.disable();(c=n?n.J():d?d:l)&&a.k(c+"trackchange")}
t.B=t.a.extend({i:function(a,c){t.a.call(this,a,c);this.U=c.id||"vjs_"+c.kind+"_"+c.language+"_"+t.w++;this.Ic=c.src;this.od=c["default"]||c.dflt;this.fe=c.title;this.Ta=c.srclang;this.Dd=c.label;this.ba=[];this.sb=[];this.ma=this.na=0;this.c.d("fullscreenchange",t.bind(this,this.dd))}});s=t.B.prototype;s.J=p("G");s.src=p("Ic");s.zb=p("od");s.title=p("fe");s.language=p("Ta");s.label=p("Dd");s.kd=p("ba");s.bd=p("sb");s.readyState=p("na");s.mode=p("ma");
s.dd=function(){this.b.style.fontSize=this.c.isFullscreen()?140*(screen.width/this.c.width())+"%":""};s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-"+this.G+" vjs-text-track"})};s.show=function(){na(this);this.ma=2;t.a.prototype.show.call(this)};s.W=function(){na(this);this.ma=1;t.a.prototype.W.call(this)};
s.disable=function(){2==this.ma&&this.W();this.c.o("timeupdate",t.bind(this,this.update,this.U));this.c.o("ended",t.bind(this,this.reset,this.U));this.reset();this.c.ka("textTrackDisplay").removeChild(this);this.ma=0};function na(a){0===a.na&&a.load();0===a.ma&&(a.c.d("timeupdate",t.bind(a,a.update,a.U)),a.c.d("ended",t.bind(a,a.reset,a.U)),("captions"===a.G||"subtitles"===a.G)&&a.c.ka("textTrackDisplay").R(a))}
s.load=function(){0===this.na&&(this.na=1,t.get(this.Ic,t.bind(this,this.Sd),t.bind(this,this.Id)))};s.Id=function(a){this.error=a;this.na=3;this.k("error")};s.Sd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,h=a.length;g<h;g++)if(e=t.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=t.trim(a[++g])):c=this.ba.length;c={id:c,index:this.ba.length};d=e.split(/[\t ]+/);c.startTime=oa(d[0]);c.xa=oa(d[2]);for(d=[];a[++g]&&(e=t.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.ba.push(c)}this.na=2;this.k("loaded")};
function oa(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
s.update=function(){if(0<this.ba.length){var a=this.c.options().trackTimeOffset||0,a=this.c.currentTime()+a;if(this.Nb===b||a<this.Nb||this.Va<=a){var c=this.ba,d=this.c.duration(),e=0,g=l,h=[],j,n,q,w;a>=this.Va||this.Va===b?w=this.Cb!==b?this.Cb:0:(g=f,w=this.Ib!==b?this.Ib:c.length-1);for(;;){q=c[w];if(q.xa<=a)e=Math.max(e,q.xa),q.Na&&(q.Na=l);else if(a<q.startTime){if(d=Math.min(d,q.startTime),q.Na&&(q.Na=l),!g)break}else g?(h.splice(0,0,q),n===b&&(n=w),j=w):(h.push(q),j===b&&(j=w),n=w),d=Math.min(d,
q.xa),e=Math.max(e,q.startTime),q.Na=f;if(g)if(0===w)break;else w--;else if(w===c.length-1)break;else w++}this.sb=h;this.Va=d;this.Nb=e;this.Cb=j;this.Ib=n;j=this.sb;n="";a=0;for(c=j.length;a<c;a++)n+='<span class="vjs-tt-cue">'+j[a].text+"</span>";this.b.innerHTML=n;this.k("cuechange")}}};s.reset=function(){this.Va=0;this.Nb=this.c.duration();this.Ib=this.Cb=0};t.Ub=t.B.extend();t.Ub.prototype.G="captions";t.bc=t.B.extend();t.bc.prototype.G="subtitles";t.Vb=t.B.extend();t.Vb.prototype.G="chapters";
t.dc=t.a.extend({i:function(a,c,d){t.a.call(this,a,c,d);if(a.l.tracks&&0<a.l.tracks.length){c=this.c;a=a.l.tracks;for(var e=0;e<a.length;e++)d=a[e],ma(c,d.kind,d.label,d.language,d)}}});t.dc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.$=t.H.extend({i:function(a,c){var d=this.ea=c.track;c.label=d.label();c.selected=d.zb();t.H.call(this,a,c);this.c.d(d.J()+"trackchange",t.bind(this,this.update))}});
t.$.prototype.r=function(){t.H.prototype.r.call(this);Y(this.c,this.ea.U,this.ea.J())};t.$.prototype.update=function(){this.selected(2==this.ea.mode())};t.lb=t.$.extend({i:function(a,c){c.track={J:function(){return c.kind},j:a,label:function(){return c.kind+" off"},zb:r(l),mode:r(l)};t.$.call(this,a,c);this.selected(f)}});t.lb.prototype.r=function(){t.$.prototype.r.call(this);Y(this.c,this.ea.U,this.ea.J())};
t.lb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.J()==this.ea.J()&&2==e.mode()&&(g=l);this.selected(g)};t.V=t.K.extend({i:function(a,c){t.K.call(this,a,c);1>=this.N.length&&this.W()}});t.V.prototype.va=function(){var a=[],c;a.push(new t.lb(this.c,{kind:this.G}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
t.Ga=t.V.extend({i:function(a,c,d){t.V.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});t.Ga.prototype.G="captions";t.Ga.prototype.ta="Captions";t.Ga.prototype.className="vjs-captions-button";t.Ma=t.V.extend({i:function(a,c,d){t.V.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});t.Ma.prototype.G="subtitles";t.Ma.prototype.ta="Subtitles";t.Ma.prototype.className="vjs-subtitles-button";
t.Ha=t.V.extend({i:function(a,c,d){t.V.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});s=t.Ha.prototype;s.G="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.va=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.J()===this.G&&a.push(new t.$(this.c,{track:c}));return a};
s.wa=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,h=this.N=[];c<d;c++)if(e=a[c],e.J()==this.G)if(0===e.readyState())e.load(),e.d("loaded",t.bind(this,this.wa));else{g=e;break}a=this.Aa;a===b&&(a=new t.ha(this.c),a.ja().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.aa(this.G),de:-1})));if(g){e=g.ba;for(var j,c=0,d=e.length;c<d;c++)j=e[c],j=new t.fb(this.c,{track:g,cue:j}),h.push(j),a.R(j);this.R(a)}0<this.N.length&&this.show();return a};
t.fb=t.H.extend({i:function(a,c){var d=this.ea=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.xa;t.H.call(this,a,c);d.d("cuechange",t.bind(this,this.update))}});t.fb.prototype.r=function(){t.H.prototype.r.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.fb.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.xa)};
t.h.z(t.Ia.prototype.l.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var j,n,q=a[e];if(q&&"object"===typeof q)for(j in q)Object.prototype.hasOwnProperty.call(q,j)&&(n=d(q,j),n!==b?q[j]=n:delete q[j]);return c.call(a,e,q)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.hc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==k&&(a=t.JSON.parse(a||"{}"),videojs(c,a)));else{t.tb();break}else t.Qc||t.tb()};t.tb=function(){setTimeout(t.hc,1)};"complete"===document.readyState?t.Qc=f:t.O(window,"load",function(){t.Qc=f});t.tb();t.Ud=function(a,c){t.Player.prototype[a]=c};var pa=this;function $(a,c){var d=a.split("."),e=pa;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ba);$("videojs.TOUCH_ENABLED",t.cc);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.j;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.i;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.ja;t.a.prototype.el=t.a.prototype.v;t.a.prototype.addChild=t.a.prototype.R;
t.a.prototype.getChild=t.a.prototype.ka;t.a.prototype.getChildById=t.a.prototype.wd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.tc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.d;t.a.prototype.off=t.a.prototype.o;t.a.prototype.one=t.a.prototype.O;t.a.prototype.trigger=t.a.prototype.k;t.a.prototype.triggerReady=t.a.prototype.Fa;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.W;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.pd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.n;t.a.prototype.removeClass=t.a.prototype.p;t.a.prototype.buildCSSClass=t.a.prototype.T;t.a.prototype.localize=t.a.prototype.s;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.nc;t.Player.prototype.exitFullWindow=t.Player.prototype.Bb;
t.Player.prototype.preload=t.Player.prototype.Ca;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Da;t.Player.prototype.currentType=t.Player.prototype.ld;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;$("videojs.MediaLoader",t.$c);$("videojs.TextTrackDisplay",t.dc);$("videojs.ControlBar",t.Ia);$("videojs.Button",t.t);$("videojs.PlayToggle",t.Zb);$("videojs.FullscreenToggle",t.Ja);$("videojs.BigPlayButton",t.eb);$("videojs.LoadingSpinner",t.Xb);$("videojs.CurrentTimeDisplay",t.gb);$("videojs.DurationDisplay",t.hb);$("videojs.TimeDivider",t.ec);
$("videojs.RemainingTimeDisplay",t.ob);$("videojs.LiveDisplay",t.Wb);$("videojs.ErrorDisplay",t.ib);$("videojs.Slider",t.Q);$("videojs.ProgressControl",t.nb);$("videojs.SeekBar",t.ac);$("videojs.LoadProgressBar",t.kb);$("videojs.PlayProgressBar",t.Yb);$("videojs.SeekHandle",t.La);$("videojs.VolumeControl",t.qb);$("videojs.VolumeBar",t.pb);$("videojs.VolumeLevel",t.fc);$("videojs.VolumeMenuButton",t.ra);$("videojs.VolumeHandle",t.rb);$("videojs.MuteToggle",t.ia);$("videojs.PosterImage",t.Ka);
$("videojs.Menu",t.ha);$("videojs.MenuItem",t.H);$("videojs.MenuButton",t.K);$("videojs.PlaybackRateMenuButton",t.$b);t.K.prototype.createItems=t.K.prototype.va;t.V.prototype.createItems=t.V.prototype.va;t.Ha.prototype.createItems=t.Ha.prototype.va;$("videojs.SubtitlesButton",t.Ma);$("videojs.CaptionsButton",t.Ga);$("videojs.ChaptersButton",t.Ha);$("videojs.MediaTechController",t.q);t.q.prototype.featuresVolumeControl=t.q.prototype.qe;t.q.prototype.featuresFullscreenResize=t.q.prototype.me;
t.q.prototype.featuresPlaybackRate=t.q.prototype.ne;t.q.prototype.featuresProgressEvents=t.q.prototype.oe;t.q.prototype.featuresTimeupdateEvents=t.q.prototype.pe;t.q.prototype.setPoster=t.q.prototype.Hc;$("videojs.Html5",t.g);t.g.Events=t.g.jb;t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.ub;t.g.patchCanPlayType=t.g.zc;t.g.unpatchCanPlayType=t.g.he;t.g.prototype.setCurrentTime=t.g.prototype.Ob;t.g.prototype.setVolume=t.g.prototype.be;t.g.prototype.setMuted=t.g.prototype.Zd;
t.g.prototype.setPreload=t.g.prototype.ae;t.g.prototype.setAutoplay=t.g.prototype.Wd;t.g.prototype.setLoop=t.g.prototype.Yd;t.g.prototype.enterFullScreen=t.g.prototype.mc;t.g.prototype.exitFullScreen=t.g.prototype.td;t.g.prototype.playbackRate=t.g.prototype.playbackRate;t.g.prototype.setPlaybackRate=t.g.prototype.$d;$("videojs.Flash",t.f);t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.ub;t.f.onReady=t.f.onReady;$("videojs.TextTrack",t.B);t.B.prototype.label=t.B.prototype.label;
t.B.prototype.kind=t.B.prototype.J;t.B.prototype.mode=t.B.prototype.mode;t.B.prototype.cues=t.B.prototype.kd;t.B.prototype.activeCues=t.B.prototype.bd;$("videojs.CaptionsTrack",t.Ub);$("videojs.SubtitlesTrack",t.bc);$("videojs.ChaptersTrack",t.Vb);$("videojs.autoSetup",t.hc);$("videojs.plugin",t.Ud);$("videojs.createTimeRange",t.yb);$("videojs.util",t.ga);t.ga.mergeOptions=t.ga.Ua;t.addLanguage=t.cd;})();

videojs.options.flash.swf = "https://atavist-static.s3.amazonaws.com/video_js/video-js.swf";

/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){z[b]=!1,aa()},d.onload=function(){z[b]=1===d.width,aa()},d.src=c,"pending"}function f(){L=!1,O=a.devicePixelRatio,M={},N={},s.DPR=O||1,P.width=Math.max(a.innerWidth||0,y.clientWidth),P.height=Math.max(a.innerHeight||0,y.clientHeight),P.vw=P.width/100,P.vh=P.height/100,r=[P.height,P.width,O].join("-"),P.em=s.getEmValue(),P.rem=P.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===A.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),W.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):X.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):W.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(S),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(T),m>=l)return n;g=c(U),h=[],","===g.slice(-1)?(g=g.replace(V,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=function(){},u=b.createElement("img"),v=u.getAttribute,w=u.setAttribute,x=u.removeAttribute,y=b.documentElement,z={},A={algorithm:""},B="data-pfsrc",C=B+"set",D=navigator.userAgent,E=/rident/.test(D)||/ecko/.test(D)&&D.match(/rv\:(\d+)/)&&RegExp.$1>35,F="currentSrc",G=/\s+\+?\d+(e\d+)?w/,H=/(\([^)]+\))?\s*(.+)/,I=a.picturefillCFG,J="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",K="font-size:100%!important;",L=!0,M={},N={},O=a.devicePixelRatio,P={px:1,"in":96},Q=b.createElement("a"),R=!1,S=/^[ \t\n\r\u000c]+/,T=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,W=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in M))if(M[b]=!1,d&&(e=b.match(a)))M[b]=e[1]*P[e[2]];else try{M[b]=new Function("e",c(b))(P)}catch(f){}return M[b]}}(),_=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},aa=function(a){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),R=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}};o=a.console&&console.warn?function(a){console.warn(a)}:t,F in u||(F="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in u,s.supSizes="sizes"in u,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){u.srcset="data:,a",a.src="data:,a",s.supSrcset=u.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=A,s.supSrcset&&(s.sel+=",img["+C+"]"),s.DPR=O||1,s.u=P,s.types=z,q=s.supSrcset&&!s.supSizes,s.setSize=t,s.makeUrl=Z(function(a){return Q.href=a,Q.href}),s.qsa=function(a,b){return a.querySelectorAll(b)},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?$(a):!0},s.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?z[a]:!0},s.parseSize=Z(function(a){var b=(a||"").match(H);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=y.style.cssText,e=a.style.cssText;c.style.cssText=J,y.style.cssText=K,a.style.cssText=K,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),y.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in N)||A.uT){var b=s.calcLength(n(a));N[a]=b?b:P.width}return N[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},s.setRes.res=_,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[F],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=E&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=v.call(a,"src"),j.src?w.call(a,B,j.src):x.call(a,B)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=v.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:v.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&G.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g),h&&s.supSrcset&&!j.supported&&(e?(w.call(a,C,e),a.srcset=""):x.call(a,C)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!R||L||O!==a.devicePixelRatio)&&f()},s.supPicture?(aa=t,s.fillImg=t):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=y.clientHeight,i=function(){L=Math.max(a.innerWidth||0,y.clientWidth)!==P.width||y.clientHeight!==h,h=y.clientHeight,L&&s.fillImgs()};Y(a,"resize",g(i,99)),Y(b,"readystatechange",e)}(),s.picturefill=aa,s.fillImgs=aa,s.teardownRun=t,aa._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(A[b]=a[0],R&&s.fillImgs({reselect:!0}))}};for(;I&&I.length;)a.picturefillCFG.push(I.shift());a.picturefill=aa,"object"==typeof module&&"object"==typeof module.exports?module.exports=aa:"function"==typeof define&&define.amd&&define("picturefill",function(){return aa}),s.supPicture||(z["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);

// /static/bower_components/atavist-polymer/subcomponents.bump.js  

/* behaviors */
BylineBehaviors = {
	properties: {
		authors: {
			type: Array,
			value: function() {
				return [];
			}
		},
		_author: Object,
		publication: Object
	},
	ready: function() {
		// Nothing here
	},

	_customByline: function(text) {
		return {
			id: 'custom',
			profile_name: text,
			has_avatar: false,
			is_atavist: false,
			url: null,
			type: 'custom'
		};
	},

	_openModal: function(e) {
		var $modal = $.ajaxModal({
			title: 'Choose an author',
			template: 'byline_picker',
			data: {
				authors: this._authorIDs()
			},
			primaryBtn: 'Done',
			cancelBtn: 'Cancel',
			modal_size: 'modal-md',
			primaryBtnCallback: function($modal) {
				this._commitModal($modal);
			}.bind(this),
			initCallback: function($modal) {
				$modal.on('keydown', 'input[type=text]', function(e) {
					$modal.find('input:radio[value=custom]').prop('checked', true);
					if (e.keyCode === 13) {
						this._commitModal($modal);
					}
				}.bind(this));
				$modal.on('click', function(e) {
					/* Keep clicks on the form elements in the modal from closing the section titling area */
					e.stopPropagation();
				});
			}.bind(this)
		});
		e.preventDefault();
		return false;
	},

	_authorDataFromID: function(author_id) {
		var split;

		if (!author_id) {
			return {};
		};

		if (author_id === 'custom') {
			return {
				type: 'custom',
				id: null
			};
		}

		split = author_id.split('-');
		return {
			type: split[0],
			id: split[1]
		};

	},

	_commitModal: function($modal) {
		var author = this._authorDataFromID($modal.find('input:radio:checked').val());

		if (author.type === 'custom') {
			this._clearAuthors();
			this.push('authors', this._customByline($modal.find('input[id=custom_byline]').val()));
		} else {
			this._getAuthors(author.type, author.id);
		};

		$modal.modal('hide');
		this.fire('change');
	},

	_getAuthors: function(type, id) {
		this._hasRetrieved = true;
		$.atavistAjax({
			url: '/cms/account/get_byline',
			type: 'POST',
			data: {
				ids: [
					{
						id: id,
						type: type
					}
				]
			},
			success: function(data) {
				this.publication = data.publication;
				this._clearAuthors();
				for (var i = 0; i < data.authors.length; i++) {
					this.push('authors', data.authors[i]);
				};
			}.bind(this)
		});
	},

	_clearAuthors: function() {
		if (this.authors) {
			this.splice('authors', 0, this.authors.length);
		} else {
			this.authors = [];
			this._author = null;
		}
	},

	_authorIDs: function() {
		var authors = {},
			i;

		for (i in this.authors) {
			authors[this.authors[i].id] = this.authors[i].profile_name;
		};

		return authors;
	},

	_bylineDisplay: function() {
		if (this.authors && this.authors.length) {
			return this.authors[0].profile_name;
		};

		return null;
	}
};

PlanBehaviors = {
	_numericIdForPlan: function(plan_id) {
		var value = 0;
		switch (plan_id) {
			case 'pro':
				value = 4;
				break;
			case 'tier3':
				value = 3;
				break;
			case 'tier2':
				value = 2;
				break;
			case 'tier1':
				value = 1;
				break;
		}
		return value;
	},

	_ctaForOldAndNewPlans: function(old_plan, new_plan) {
		var old_numeric = this._numericIdForPlan(old_plan.type),
			new_numeric = this._numericIdForPlan(new_plan.type),
			cta = {
				label: 'Choose a Plan',
				disabled: false
			};

		if (new_numeric === 0) {
			cta.label = old_numeric > 0 ? 'Downgrade' : 'Go Free';
			if (old_numeric === 0) {
				cta.disabled = true;
			}
		} else if (new_numeric > old_numeric) {
			cta.label = 'Upgrade';
		} else if (new_numeric < old_numeric) {
			cta.label = 'Downgrade';
		} else if (new_numeric === old_numeric && new_plan.annual > old_plan.annual) {
			cta.label = 'Update';
		} else if (new_numeric === old_numeric && new_plan.annual < old_plan.annual) {
			cta.label = 'Update';
		} else {
			cta.disabled = true;
		};

		return cta;
	}
};

AccountBehaviors = {
	_auto_url_generation: function($name, $url) {

		$name.on('input', function(e) {
			if (!this._org_url_touched) {
				$url.val(e.target.value.replace(/[^a-zA-Z0-9\_\-]/gi, '').toLowerCase().substring(0, 20));
			};
		}.bind(this));

		$url.on('input', function(e) {
			this._org_url_touched = e.target.value.length > 0;
		}.bind(this));
	}
}

/* subcomponents */

Polymer({
	is: 'atavist-image',
	atavist: true,
	subcomponent: true,
	properties: {
		progress: {
			type: String,
			observer: 'progressChanged'
		},
		temp_path: {
			type: String,
			observer: 'tempPathChanged'
		},
		path: {
			type: String,
			observer: 'pathChanged'
		},
		focal_point: {
			type: Object,
			observer: 'focalPointChanged',
			value: function() {return {x: 50, y: 50};}
		},
		filename: {
			type: String,
			observer: 'filenameChanged'
		},
		width: {
			type: Number
		},
		height: {
			type: Number
		},
		real_size: {
			type: Boolean,
			observer: 'makeRealSize'
		},
		sizes: {
			type: String,
			value: '100vw'
		},
		data_key: String,
		use_as_background: {
			type: String, /* was a Boolean, but booleans behave somewhat strangely */
			observer: 'useAsBackgroundChanged',
			value: 'false'
		}
	},
	useAsBackgroundChanged: function() {
		var $childImg = $(this).find('img');
		if (this.use_as_background === undefined) return;
		if (this.use_as_background === 'true') {
			if ($childImg.length) $childImg.remove();
		} else if (!$childImg.length) {
			$(this).append('<img />');
		}

		this.updateImage();
	},

	supportsRealSize: undefined, /* on prototype so that only a single image needs to run the test */
	makeRealSize: function() {
		if (typeof this.supportsRealSize === 'undefined') {
			// tests to see if browser can support max size within a table (FF can't)

			var img = $('<img style="width:auto;max-width:100%" src="' +
			'data:image/bmp;base64,Qk1KAAAAAAAAAD4AAAAoAAAAAwAAA' +
			'AMAAAABAAEAAAAAAAwAAADEDgAAxA4AAAAAAAAAAAAAAAAAAP//' +
			'/wAAAAAAwAAAAKAAAAA%3D' +
			'">'),
			image_inner_wrapper = $('<div style="width:auto;"></div>'),
			image_outer_wrapper = $('<div style="display:table;"></div>');
			image_outermost_wrapper = $('<div style="width:1px;"></div>');

			img.appendTo(image_inner_wrapper);
			image_inner_wrapper.appendTo(image_outer_wrapper);
			image_outer_wrapper.appendTo(image_outermost_wrapper);
			image_outermost_wrapper.appendTo('body');

			this.__proto__.supportsRealSize = image_outer_wrapper.width() == 1;
			image_outermost_wrapper.remove();
		}

		if (this.supportsRealSize === true) {
			this.classList.add('real-image-size');
		} else {
			this.classList.remove('real-image-size');
		}

	},

	/**
	 * Predefined image widths for web and app, used for responsive srcset imagery
	 */

	appImageSizes: [
		1200,
		800,
		400
	],

	imageSizes: [
		2800,
		2000,
		1200,
		800,
		400
	],

	setSrcSet: function(img, srcset) {
		img.setAttribute('srcset', srcset);
	},

	/**
	 * [srcSetForPath given - path xyz, return a list of scaled images based on xyz]
	 * @param {Object} opts - Settings for the srcset returned
	 * @param {String} opts.path - incoming path upon which to base the srcset
	 * @param {Array} opts.imageSizes - array of widths used in producing the srcset
	 * @param {Number} opts.naturalWidth - optional width of the raw image, used to exclude srcset targets that are bigger
	 * @param {Boolean} opts.asString - whether or not to return the srcset as an Array or String
	 */
	srcSetForPath: function(opts) {
		var set = [],
			availableAssets = (this.block) ? this.block.getAssets() : [],
			path = opts.path,
			imageSizes = opts.imageSizes,
			as_string = (opts.asString === false) ? false : true;
		for (var i = 0; i < imageSizes.length; i++) {
			if (opts.naturalWidth && imageSizes[i] > opts.naturalWidth) {
				continue;
			}

			path = this.scalePath(this.path, imageSizes[i]);
			if (this.isApp() && availableAssets.indexOf(path) === -1) {
				console.log('skipping unavailable asset', path);
				continue;
			}

			if (as_string === true) {
				path += ' ' + imageSizes[i] + 'w';
			}

			set.push(path);
		}

		if (this.isApp() && set.length < 1 && availableAssets.length > 0) {
			console.log('falling back to asset', availableAssets[0]);
			set.push(availableAssets[0]);
		}

		var nat_width = opts.naturalWidth ? opts.naturalWidth + 'w' : '';

		if (opts.naturalWidth && !set.length) {
			// if we have the natural width, and it's an empty set, add the raw image to the set
			set.push(this.path + (this.real_size ? '' : ' ' + nat_width));
		} else if (!this.isApp() && set.length < imageSizes.length) {
			// if we have a set, but it's smaller than the target set for some reason, add the raw image as a fallback
			set.push(this.path + (this.real_size ? '' : ' ' + nat_width));
		}

		return (as_string === true) ? set.join(',') : set;
	},

	/**
	 * [scalePath - single scaled path given raw image path and width]
	 * @param  {String} path - relative raw image path
	 * @param  {Number} width - desired width for scaled image
	 * @return {String} scaled path (or filename, for apps)
	 */
	scalePath: function(path, width) {
		var path_parts = path.split('/'),
			filename = path_parts.pop(),
			origin,
			scale_bit;

		scale_bit = 'scale~' + width + 'x' + 0 + '~';
		path = path_parts.join('/').replace('raw', 'derivative');
		path = path + '/';
		path = path + scale_bit + filename;
		if (this.isApp() === true) {
			path = scale_bit + filename;
		}

		origin = this.assetDomain();
		path = origin + path;

		return path;
	},

	/**
	 * [dummyPath - lite path]
	 * @param  {String} path - relative raw image path
	 * @return {String} lite path (or filename, for apps)
	 */
	dummyPath: function(path, width) {
		var path_parts = path.split('/'),
			filename = path_parts.pop(),
			origin,
			scale_bit;

		scale_bit = 'lite~';
		path = path_parts.join('/').replace('raw', 'derivative');
		path = path + '/';
		path = path + scale_bit + filename;
		if (this.isApp() === true) {
			path = scale_bit + filename;
		}

		origin = this.assetDomain();
		path = origin + path;

		return path;
	},

	/**
	 * [preloadSrcSet - preloads a srcsetted image with callback]
	 * @param  {String} path - relative raw image path
	 * @param  {Array} imageSizes - array of desired srcset widths
	 * @param  {Function} cb - callback when preloading is complete
	 */
	preloadSrcSet: function(path, imageSizes, cb) {
		if (this.preloading && this.preloading === path) return;
		var preloader = document.createElement('img'),
			loaded = false;
		this.preloading = path;
		preloader.onload = function() {
			this.preloading = null;
			if (cb) cb.call(this, path, preloader);
		}.bind(this);
		preloader.setAttribute('sizes', this.sizes);
		this.setSrcSet(preloader, this.srcSetForPath({
			path: path,
			imageSizes: imageSizes,
			naturalWidth: this.width
		}));

		picturefill({
			elements: [preloader]
		});
	},

	/**
	 * [addAppAssets - adds srcset paths to app-facing media data attribute]
	 * @param {String} path - raw image path
	 */
	addAppAssets: function(path) {
		var srcs = this.srcSetForPath({
			path: path,
			imageSizes: this.appImageSizes,
			asString: false
		});
		for (var i = 0; i < srcs.length; i++) {
			this.addAsset(srcs[i]);
		}
	},

	/**
	 * [_widthFromPath - derive width from a derivative-style image path]
	 * @param  {String} path - scaled image path
	 * @return {Number || null}
	 */
	_widthFromPath: function(path) {
		if (!path) return null;
		var scale_bit = path.match(/scale~([0-9]+)x/);
		if (scale_bit) {
			return parseInt(scale_bit[1], 10);
		}

		return null;
	},

	loadDummy: function(insertElsewhere) {
		if (!this.filenameIsReal(this.path)) return;
		var dummy_path = this.dummyPath(this.path),
			cloudfront_path = this.cloudFront(dummy_path),
			elsewhere;

		if (this.use_as_background === 'true') {
			this.style.backgroundImage = 'url(' + cloudfront_path + ')';
		} else {
			this.querySelector('img').src = cloudfront_path;
		}

		// in certain contexts, programatically build img outside DOM so it will still load even if DOM is destroyed?
		if (insertElsewhere === true) {
			elsewhere = new Image();
			elsewhere.src = dummy_path;
		}
	},

	/**
	 * [updateImage for current path and use_as_background combo, update the element's image]
	 */
	updateImage: function() {
		var $imgEl = $(this).find('img'),
			imageSizes = (this.isApp()) ? this.appImageSizes : this.imageSizes,
			naturalWidth,
			$closestBlock,
			hasInertCloudfront = false,
			self = this;

		// if there's no path, or the subcomponent's parent block is not ready yet, we ignore calls to update the underlying image
		if (!this.path || !this.subcomponentBlockReady) return;
		this._initialUpdateImage = true;

		$closestBlock = $(this).closest('.atavist-block, .atavist-cover');
		if ($closestBlock.length && $closestBlock.attr('data-cloudfront')) {
			hasInertCloudfront = true;
		}

		if (!this.real_size && !this.editable() && hasInertCloudfront) {
			// load poster upfront
			this.loadDummy();
		}

		if (this.use_as_background === 'true') {

			// for an app, use the filename as path, else use the full path
			var path = (this.isApp()) ? this.path.split('/').pop() : this.path;

			if (this.filenameIsReal(this.path)) {
				// adds srcset assets to the media array for app usage
				this.addAppAssets(this.path);

				// preload this image's desired srcset, and use the resulting currentSrc as the background-image
				this.preloadSrcSet(this.path, imageSizes, function(originalPath, img) {
					// check against the path having changed during preloading
					if (originalPath === this.path) {

						// in environments that don't support currentSrc, PF uses plain ol' src
						this.style.backgroundImage = 'url(' + (img.currentSrc || img.src) + ')';
						this.imageWidth = img.naturalWidth;
						this.imageHeight = img.naturalHeight;
						console.log('[real bg image preloaded]');
						this.fire('imageLoaded', this.path);
					}
				});
			} else {
				// for temp images or sample image, use a simple preloader
				this.imageLoaded(path, function(src, img) {
					// check against the path having changed during temp image preloading
					if (src === self.path) {
						this.style.backgroundImage = 'url(' + path + ')';
						this.imageWidth = img.width;
						this.imageHeight = img.height;
						console.log('[placeholder bg image preloaded]');
						this.fire('imageLoaded', path);
					}
				});
			}
		} else {

			if (this.width) {
				naturalWidth = this.width;
			}

			// produce an initial, default sizes attribute based on the raw image path
			$imgEl
				.attr('sizes', this.sizes);

			if (this.filenameIsReal(this.path)) {
				// adds srcset assets to the media array for app usage
				this.addAppAssets(this.path);

				// preload this image's desired srcset, and use the resulting currentSrc as the background-image
				this.preloadSrcSet(this.path, imageSizes, function(originalPath, img) {
					// check against the path having changed during preloading
					if (originalPath === this.path) {
						var el = $imgEl.get(0),
							desiredWidth = this._widthFromPath(img.currentSrc || img.src),
							useNaturalWidth = this.width,
							dataWidth = img.naturalWidth,
							dataHeight = img.naturalHeight;

						// if we dont have a hardcoded width, and the image's naturalWidth is less than the derivative width we thought we were loading, do a re-assessment of the sizes attribute
						if (!this.width && desiredWidth && img.naturalWidth < desiredWidth) {
							el.setAttribute('sizes', this.sizes);
							useNaturalWidth = img.naturalWidth;
						}

						// set the srcset, feeding in the naturalWidth in the event that it's used to exclude target media sizes
						this.setSrcSet(el, this.srcSetForPath({
							path: this.path,
							imageSizes: imageSizes,
							naturalWidth: useNaturalWidth
						}));

						// polyfill for non-native srcset support
						picturefill({
							elements: [el]
						});
						this.imageWidth = dataWidth;
						this.imageHeight = dataHeight;
						console.log('[srcset image preloaded]');
						this.fire('imageLoaded', this.path);
					}
				});

				if (this.real_size && navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && naturalWidth && naturalWidth < $(this).width()) {
					$imgEl.width(naturalWidth);
				}
			} else {
				// for temp images, remove the srcset, (simply) set the src
				$imgEl
					.removeAttr('srcset')
					.one('load', function() {
						self.imageWidth = this.width;
						self.imageHeight = this.height; /* hardcoded for now, revisit */
						console.log('[placeholder image preloaded]');
						self.fire('imageLoaded', self.path);
					})
					.attr('src', this.path);
			}

			// clear out any background image that might be in place
			this.style.backgroundImage = '';
		}
	},

	importReference: function(data) {
		var imports = Object.keys(data),
			width;

		/* frontload the width import, so its available prior to path change */
		if ((width = imports.indexOf('width')) !== -1) {
			imports.splice(width, 1);
			imports.unshift('width');
		}

		for (var i = 0; i < imports.length; i++) {
			this[imports[i]] = data[imports[i]];
		}
	},

	progressChanged: function() {
		$(this).find('.uploader-progress')
			.toggle(this.progress !== 0)
			.find('.progress-bar')
			.css({width:this.progress + '%'});
		this.broadcastReference();
	},

	focalPointChanged: function() {
		if (this.focal_point) {
			this.style.backgroundPosition = this.focal_point.x + '% ' + this.focal_point.y + '%';
		}
	},

	tempPathChanged: function() {
		if (this.temp_path) {
			this.path = this.temp_path;
			this.uploading_animation_toggle(true);
			this.broadcastReference();
		}
	},

	filenameIsReal: function(path) {
		if (!path) {
			path = this.filename;
		}

		return (path && path.indexOf('sample.jpg') === -1 && path.indexOf('data:') === -1 && path.indexOf('blob:') === -1);
	},

	/**
	 * [checkReference sends structured data on subcompoment change, for use in external form elements]
	 */
	checkReference: function() {
		var ref = {};
		if (this.filenameIsReal(this.path)) {
			// if the filename is real, we send over a "real" path and zero out the temp path
			ref.path = this.path;
			ref.filename = this.filename;
			ref.temp_path = null;
		} else if (this.temp_path) {
			ref.temp_path = this.temp_path;
			ref.filename = null;
		}

		ref.width = this.width;
		ref.height = this.height;

		if (typeof this.progress !== 'undefined') {
			ref.progress = this.progress;
		}

		if (this.focal_point) {
			ref.focal_point = this.focal_point;
		}

		return ref;
	},

	filenameChanged: function() {
		// if the filename has changed, and we're in an editable environment
		if (this.editable() === true && typeof this.filename !== 'undefined' && typeof this.filename !== 'object') {

			// if there's a filename, we can presume that a new upload has completed
			if (this.filename && window.creatavist && window.creatavist.organization_id) {
				this.path = '/data/files/organization/' + window.creatavist.organization_id + '/image/raw/' + this.filename;

				// if this subcomponent is tied to an external piece of story/section data, fire a change event accordingly
				if (this.data_key) {
					var data = {};
					data[this.data_key] = this.filename;
					this.fire('storyData', data);
				}

			} else { // vs empty, which for now, means "nothing"?
				// if there's no filename, and temp_path is set, this means that an image has been removed, thus a placeholder is required
				if (!this.temp_path) {
					this.path = this.default_path;

					this.width = 0;
					this.height = 0;

					if (this.data_key) {
						var data = {};
						data[this.data_key] = '';
						this.fire('storyData', data);
					}
				}
			}
		}
	},

	uploading_animation_toggle: function(bool) {
		if (this.use_as_background === 'true') {
			this.classList.toggle('uploading-asset', bool);
		} else {
			this.querySelector('img').classList.toggle('uploading-asset', bool);
			this.classList.toggle('uploading-asset-container', bool);
		}
	},

	pathChanged: function(val) {
		this.updateImage();
		if (this.filenameIsReal(this.path)) {
			this.progress = 0;
			this.uploading_animation_toggle(false);
			this.temp_path = null;
			this.broadcastReference();

			if (this.data_key) {
				var data = {};
				data[this.data_key] = this.filename;
				this.fire('storyData', data);
			}
		}

		if (this.path === this.default_path) {
			// for a placeholder image, we dynamically insert the svg "x"
			if (!$(this).find('.image-block-placeholder').length > 0) {
				$(this).prepend('<div class="image-block-placeholder"><svg width="100%" height="100%" viewBox="0.65 0.5 68.75 65" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><g fill="none" fill-rule="evenodd" stroke-width="3"><g stroke="rgba(0,0,0,1)"><path d="M1 1h68v64H1z" vector-effect="non-scaling-stroke" stroke-width="0"></path><path d="M1.415 1.525l67.17 62.95M68.585 1.525l-67.17 62.95" stroke-linecap="square" vector-effect="non-scaling-stroke"></path></g></g></svg></div>');
			}
		} else {
			$(this).find('.image-block-placeholder').remove();
		}
	},

	default_path: '/static/bower_components/atavist-simple-image/sample.jpg',
	data_import: function(e) {
		if (e.detail && e.detail[this.data_key]) {
			this.filename = e.detail[this.data_key];
		}
	},

	bind_import: function(el) {
		el.addEventListener('story_data', this.data_import.bind(this));
		el.addEventListener('section_data', this.data_import.bind(this));
	},

	ready: function() {
		// console.log("atavist-image ready firing");
		if (this.data_key) {
			this.addEventListener('subcomponentReady', function(e) {
				this.bind_import(this.block);
			});
		}

		if (this.editable() === true && creatavist.uploader) {
			var self = this;
			this.classList.add('has-uploader');
			this.up = new creatavist.uploader($(this), {
				offline: false,
				set_asset_on_upload: false,
				type: 'image'
			});
			this.up.on('change', function(src, is_temp, original_filename, data) {
				if (data) {
					self.width = data.width;
					self.height = data.height;
				}

				if (is_temp === true) {
					self.filename = null;
					self.temp_path = src;
				} else {
					self.filename = this.basename(src);
				}
			});

			this.up.on('progress', function(pct) {
				self.progress = pct;
			});
		}

		this.addEventListener('subcomponentBlockReady', function() {
			// we must wait for block readiness before setting the placeholder, to give the block a chance to set real data if present
			if (!this.path) {
				this.path = this.default_path;
			} else if (!this._initialUpdateImage) {
				this.updateImage();
			}
		});
	},

	// used in covers/etc, to enable drag-n-drop uploader functionality when the subcomponent is not at the topmost z-index/layer
	addUploaderTarget: function(el) {
		this.up && this.up.addDropZone(el);
	}
});

Polymer({
	is: 'atavist-audio',
	atavist: true,
	subcomponent: true,
	properties: {
		progress: {
			type: String,
			observer: 'progressChanged'
		},
		path: {
			type: String,
			observer: 'pathChanged'
		},
		temp_path: {
			type: String,
			observer: 'tempPathChanged'
		},
		filename: {
			type: String,
			observer: 'filenameChanged'
		},
		controls: Boolean,
		play_status: {
			type: Object,
			notify: true,
			value: function() {
				return this.defaultPlayStatus;
			}
		},
		playing: {
			type: Boolean,
			notify: true,
			value: false
		}
	},

	defaultPlayStatus: {
		current: 0,
		currentFormatted: '0:00',
		duration: 0,
		durationFormatted: '0:00',
		remaining: 0,
		remainingFormatted: '0:00'
	},

	default_path: 'https://atavist-static.s3.amazonaws.com/samples/audio_block_sample.mp3',
	ready: function() {
		var self = this,
			$el = $(self);

		this.addEventListener('subcomponentBlockReady', function() {
			if (!this.path) {
				this.path = this.default_path;
			}
		});

		document.addEventListener('audio-playing', function(e) {
			if (e.target !== this && this.playing) {
				this.pause();
			}
		}.bind(this));

		this.timer = null;

		this.$player = $(this).find('audio');
		this.$scrubberBar = $(this).find('.scrubber-bar');
		this.$scrubberProgress = $(this).find('.scrubber-progress');
		this.$progressDisplay = $(this).find('.progress-display');
		this.$timeRemainingDisplay = $(this).find('.remaining-display');
		this.$playPause = $(this).find('.play-pause-control');
		this.$uploadProgress = $(this).find('.uploader-progress');

		this.$playPause.click(self.toggle);
		this.$scrubberBar.click(self.scrub);

		this.setUploaderTarget($(this));

		this.addPlaceholder();
		this.stop();
	},

	player: function() {
		return this.querySelector('audio');
	},

	pathChanged: function() {
		if (!this.path || !this.subcomponentBlockReady) return;
		var path = (this.isApp()) ? this.path.split('/').pop() : this.path;
		if (this.filenameIsReal(this.path)) {
			path = this.cloudFront(this.path);
			this.addAsset(path);
		}

		this.player().setAttribute('src', path);
		this.broadcastReference();
		if (this.path === this.default_path) {
			this.addPlaceholder(true);
		} else {
			this.progress = 0;
			$(this).find('.audio-block-placeholder').remove();
		}
	},

	filenameIsReal: function(path) {
		if (!path) {
			path = this.filename;
		}

		return (path && path.indexOf(this.default_path) === -1 && path.indexOf('data:') === -1);
	},

	progressChanged: function() {
		if (!this.$uploadProgress) return;
		this.$uploadProgress
			.toggle(this.progress !== 0)
			.find('.progress-bar')
			.css({width:this.progress + '%'});
		this.broadcastReference();
	},

	addPlaceholder: function(force) {
		var self = this;
		if (force) this.needsPlaceholder = true;
		if (self.needsPlaceholder) {
			if (!$(this).find('.audio-block-placeholder').length > 0) {
				var $placeholder = $('<div/>').addClass('audio-block-placeholder block-placeholder');
				$(this).find('.player-chrome').append($placeholder);
			}
		}
	},

	filenameChanged: function() {
		if (this.editable() === true && typeof this.filename !== 'undefined' && typeof this.filename !== 'object') {
			if (this.filename && window.creatavist && window.creatavist.organization_id) {
				this.path = '/data/files/organization/' + window.creatavist.organization_id + '/audio/' + this.filename;
				this.classList.remove('uploading-asset');
			} else { // vs empty, which for now, means "nothing"?
				if (!this.temp_path) {
					this.path = this.default_path;
				}
			}

			this.broadcastReference();
		}
	},

	checkReference: function() {
		var ref = {};
		if (this.filename && this.filename.length) {
			ref.path = this.path;
			ref.filename = this.filename;
			ref.temp_path = null;
		} else if (this.temp_path) {
			ref.temp_path = this.temp_path;
		}

		if (typeof this.progress !== 'undefined') {
			ref.progress = this.progress;
		}

		return ref;
	},

	tempPathChanged: function() {
		if (this.temp_path) {
			this.filename = null;
			this.path = this.temp_path;
			this.classList.add('uploading-asset');
			this.broadcastReference();
		}
	},

	setUploaderTarget: function(el) {
		var self = this;
		if (self.editable() === true && creatavist.uploader) {
			this.classList.add('has-uploader');
			var up = new creatavist.uploader($(el), {
				offline: false,
				set_asset_on_upload: false,
				type: 'audio'
			});

			up.on('change', function(src, is_temp) {
				if (is_temp === true) {
					self.temp_path = src;
				} else {
					self.filename = this.basename(src);
				}
			});

			up.on('progress', function(pct) {
				self.progress = pct;
			});
		}
	},

	play: function() {
		var self = this;
		this.playing = true;
		this.player().play();
		this.broadcast('silence');
		if (this.timer) clearInterval(this.timer);
		this.timer = setInterval(function() {
			self.watchProgress();
		}, 25);

		$(this).addClass('playing');
		this.fire('audio-playing');
	},

	pause: function() {
		var self = this;
		self.player().pause();
		clearInterval(self.timer);
		self.playing = false;
		self.broadcast('resume');
		$(this).removeClass('playing');
	},

	stop: function() {
		this.pause();
		this.$progressDisplay.html('');
		this.$timeRemainingDisplay.html('');
		this.$scrubberProgress.width(0);
		if (this.player().currentTime !== 0) {
			this.player().currentTime = 0;
		}

		this.play_status = {
			current: 0,
			currentFormatted: '0:00',
			duration: this.player().duration,
			durationFormatted: this.secondsToFormattedTime(this.player().duration),
			remaining: 0,
			remainingFormatted: '0:00'
		};
	},

	toggle: function() {
		var self = $(this).parents('atavist-audio:first').get(0);
		if (self.playing) {
			self.pause();
		} else {
			self.play();
		}
	},

	scrub: function(e) {
		var self = $(this).parents('atavist-audio:first').get(0),
			position = (e.offsetX / $(this).width()) * self.player().duration;
		self.player().currentTime = position;
		self.play();
	},

	watchProgress: function() {
		var self = this,
			current = self.player().currentTime,
			duration = self.player().duration,
			progress = current / duration,
			width = self.$scrubberBar.width() * progress;

		self.$scrubberProgress.width(width);
		var currentFormatted = self.secondsToFormattedTime(current),
			remainingFormatted = self.secondsToFormattedTime(duration - current),
			durationFormatted = self.secondsToFormattedTime(duration);

		if (currentFormatted) self.$progressDisplay.html(currentFormatted);
		if (remainingFormatted) self.$timeRemainingDisplay.html('–' + remainingFormatted);
		if (!isNaN(progress) && progress >= 1) {
			this.fire('audio-playback-complete');
			self.stop();
		}

		this.play_status = {
			current: current,
			currentFormatted: currentFormatted,
			duration: duration,
			durationFormatted: durationFormatted,
			remaining: duration - current,
			remainingFormatted: remainingFormatted
		};

	},

	secondsToFormattedTime: function(seconds) {
		if (isNaN(seconds) || seconds === null) return '';

		// h, m, s
		var time = [0, 0, 0];
		seconds = parseInt(seconds, 10);
		time[0] = Math.floor(seconds / 3600);
		time[1] = Math.floor((seconds - (time[0] * 3600)) / 60);
		time[2] = this.formatDigits(seconds - (time[0] * 3600) - (time[1] * 60));

		if (parseInt(time[0], 10) === 0) {

			// if there's no hours count, drop the first unit
			time.splice(0, 1);
		} else {

			// if there is an hours count, pad the minutes value with a zero as needed
			time[1] = this.formatDigits(time[1]);
		}

		return time.join(':');
	},

	formatDigits: function(n) {
		return (parseInt(n, 10) >= 10) ? n : '0' + n;
	},

	// TODO: Implement communication with audio singletons
	broadcast: function(action) {
		switch (action) {
			case 'silence':
				//if (audioController) audioController.silenceOtherInlineAudio(this);
				//window.ATCommander.send('silenceAllForPrimaryAudio');
			break;
			case 'resume':

				//window.ATCommander.send('resumeAfterPrimaryAudio');
			break;
		}
	}
});

/* video */

Polymer({
	is: 'atavist-video',
	atavist: true,
	subcomponent: true,

	properties: {
		filename: {
			type: String,
			observer: 'filenameChanged'
		},
		path: {
			type: String,
			observer: 'pathChanged'
		},
		progress: {
			type: Number,
			observer: 'progressChanged'
		},
		temp_path: {
			type: String,
			observer: 'tempPathChanged'
		},
		video_progress: {
			type: Number,
			observer: 'videoProgressChanged'
		},
		video_state: {
			type: String,
			observer: 'videoStateChanged'
		},
		controls: Boolean,
		autoplay: Boolean,
		loop: Boolean,
		muted: Boolean
	},

	filenameIsReal: function(path) {
		if (!path) {
			path = this.filename;
		}

		return (path && path.indexOf(this.default_video) === -1 && path.indexOf('data:') === -1);
	},

	tempPathChanged: function() {
		// if (this.temp_path) {
		// 	this.filename = null;
		// 	this.path = this.temp_path;
		// this.video_el.classList.add('uploading-asset');
		// 	this.broadcastReference();
		// }
	},

	checkReference: function() {
		var ref = {};
		if (this.filename && this.filename.length) {
			ref.path = this.path;
			ref.filename = this.filename;
			ref.temp_path = null;
		} else if (this.temp_path) {
			ref.temp_path = this.temp_path;
		}

		if (typeof this.progress !== 'undefined') {
			ref.progress = this.progress;
		}

		ref.video_state = this.video_state;
		if (typeof this.video_progress !== 'undefined') {
			ref.video_progress = this.video_progress;
		}

		return ref;
	},

	videoStateChanged: function() {
		// $(this).find('.video-progress-label').text(this.video_state);
		this.broadcastReference();
	},

	videoProgressChanged: function() {
		this.videoEl();
		$(this)
			.find('.uploader-progress')
			.find('.video-progress-bar')
			.toggle(this.video_progress !== 0)
			.css({width:this.video_progress + '%'});
		$(this).find('.video-progress-label').toggle(this.video_progress !== 0);
		this.broadcastReference();
		this.video_el.classList.toggle('uploading-asset', this.video_progress !== 0);
	},

	progressChanged: function() {
		this.videoEl();
		$(this)
			.find('.uploader-progress')
			.toggle(this.progress !== 0)
			.find('.regular-progress-bar')
			.css({width:this.progress + '%'});
		this.broadcastReference();
		this.video_el.classList.toggle('uploading-asset', this.progress !== 0);
	},

	filenameChanged: function() {
		if (this.editable() === true && typeof this.filename !== 'undefined' && typeof this.filename !== 'object') {
			if (this.filename) {
				this.path = '/data/files/organization/' + window.creatavist.organization_id + '/video/transcoded/iphone/' + this.filename;
			} else {
				if (!this.temp_path) {
					this.path = this.default_video;
				}
			}
		}

		this.broadcastReference();
	},

	default_video: 'https://atavist-static.s3.amazonaws.com/samples/waves.mp4',
	default_poster: 'https://atavist-static.s3.amazonaws.com/samples/waves_poster.jpg',
	videoEl: function() {
		var existing_video = this.querySelector('video');
		if (existing_video) {
			this.video_el = existing_video;
		} else {
			this.video_el = document.createElement('video');
			this.appendChild(this.video_el);
		}

		return this.video_el;
	},

	rootPath: function(path) {
		return {
			root: path.match('/data/files/organization/([0-9]+)/')[0],
			filename: path.split('/').pop()
		};
	},

	posterPath: function() {
		if (!this.path || !this.path.length) return;
		if (this.path === this.default_video) {
			return this.default_poster;
		}

		var root = this.rootPath(this.path),
			full_path;
		full_path = root.root + 'image/raw/' + root.filename.replace('.mp4', '') + '.jpg';
		return full_path;
	},

	webmPath: function(cb) {
		if (!this.path || !this.path.length || this.path === this.default_video) return;
		var webm_path = this.path.replace(new RegExp('.mp4$'), '.webm');
		this.pathExists(webm_path, function(path, exists) {
			if (exists === true) {
				cb.call(this, path);
			} else {
				this.checkTranscode();
			}
		});
	},

	checkTranscode: function() {
		if (this.editable() === true) { // if we in editing environment
			// check for webm?
			this.up.checkVideo(this.filename.replace('.mp4', ''), function(videoData) {
				console.log('[checked for webm]');
			});
		}

	},

	pathExists: function(url, callback) {
		var http = new XMLHttpRequest(),
			self = this;
		http.open('HEAD', url + '?info=true');
		http.onreadystatechange = function() {
			if (this.readyState == this.DONE) {
				callback.call(self, url, this.status != 404);
			}
		};

		http.send();
	},

	needsChromeSocketsBugFix: function() {
		if (this.editable()) {
			return false;
		};

		return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	},

	initChromeSocketsBugFix: function() {
		if (!this.needsChromeSocketsBugFix()) {
			return;
		};

		this.onceInView({
			handler: function() {
				this._hasBeenInView = true;
				if (this.player.paused()) {
					this.pathChanged();
				}
			},

			offset: '50%'
		});
	},

	shouldSetSrc: function() {
		if (!this.needsChromeSocketsBugFix()) {
			return true;
		};

		return this._hasBeenInView;
	},

	pathChanged: function() {
		if (!this.path) return;
		var video, sources, path;

		path = (this.isApp()) ? this.path.split('/').pop() : this.path;

		if (this.filenameIsReal(path)) {
			path = this.cloudFront(path);
			this.addAsset(path);
		}

		video = this.videoEl();

		sources = this.video_el.querySelectorAll('source');
		for (var i = 0; i < sources.length; i++) {
			sources[i].parentNode.removeChild(sources[i]);
		}

		if (this.shouldSetSrc()) {
			this.video_el.setAttribute('src', path);
		}

		var mp4_source = document.createElement('source');
		mp4_source.setAttribute('src', path);
		mp4_source.setAttribute('type', 'video/mp4');

		if (this.shouldSetSrc()) {
			this.video_el.appendChild(mp4_source);
		}

		if (this.path === this.default_video) {
			var webm_source = document.createElement('source');
			webm_source.setAttribute('src', this.default_video.replace('.mp4', '.webm'));
			webm_source.setAttribute('type', 'video/webm');
			this.video_el.appendChild(webm_source);
		}

		var poster = this.posterPath(),
			vjs_poster_el;

		if (poster) {
			if (this.filenameIsReal(poster)) {
				this.addAsset(poster);
			}

			if (this.isApp()) poster = poster.split('/').pop();
			this.video_el.setAttribute('poster', poster);
			vjs_poster_el = this.querySelector('.vjs-poster');
			if (vjs_poster_el) {
				vjs_poster_el.style.backgroundImage = 'url(' + poster + ')';
			}
		}

		this.sizeVideo();
		this.broadcastReference();

		if (this.path === this.default_video) {
			if (!$(this).find('.video-block-placeholder').length > 0) {
				$(this)
					.prepend('<div class="video-block-placeholder"><svg width="100%" height="100%" viewBox="0.65 0.5 68.75 65" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><g fill="none" fill-rule="evenodd" stroke-width="3"><g stroke="rgba(0,0,0,1)"><path d="M1 1h68v64H1z" vector-effect="non-scaling-stroke" stroke-width="0"></path><path d="M1.415 1.525l67.17 62.95M68.585 1.525l-67.17 62.95" stroke-linecap="square" vector-effect="non-scaling-stroke"></path></g></g></svg></div>');
			}
		} else {
			$(this).find('.video-block-placeholder').remove();
		}

		if (!this.player) {
			var self = this;
			this.video_el.classList.add('video-js');
			this.video_el.classList.add('vjs-atavist-skin');

			this.player = _V_(this.video_el, {
				controls: this.controls,
				autoplay: this.autoplay,
				muted: this.muted,
				loop: this.loop
			}, function() {
				// Player (this) is initialized and ready.
				self.sizeVideo();
				self.fire('loaded');
			});

			$(this.video_el).on('loadedmetadata', function() {
				self.sizeVideo();
			});

		}

	},

	cleanup: function() { // is this being called?
		var video = this.querySelector('video');
		if (video) {
			video.removeAttribute('id');
			video.removeAttribute('class');
			$(this).find('.video-js').replaceWith(video);
		}

	},

	sizeVideo: function() {
		this.videoEl(); /* highly suspicious, but some different order of events which leads to element being an empty shell */
		var width = this.video_el.videoWidth,
			height = this.video_el.videoHeight,
			aspectRatio = width / height,
			paddingBottom = (100 / aspectRatio) + '%';

		$(this.video_el).parents('.video-js').css({
			height: 0,
			'min-height': 0,
			'padding-bottom': paddingBottom
		});
	},

	addUploaderTarget: function(el) { // to facilitate the reality that occasionally the image target will be below other elements
		this.up && this.up.addDropZone(el);
	},

	importReference: function(data) {
		var imports = ['filename', 'progress', 'video_progress'];

		// we only accept a "path" in the reader context — elsewhere we rely on filename?
		if (!this.editable()) {
			imports.unshift('path');
		}

		for (var i = 0; i < imports.length; i++) {
			this[imports[i]] = data[imports[i]];
		}
	},

	ready: function() {
		this.addEventListener('subcomponentBlockReady', function() {
			if (!this.path) {
				this.path = this.default_video;
			} else {
				this.webmPath(function(webm) {
					var webm_source = this.video_el.querySelector('source[type="video/webm"]');
					if (!webm_source) {
						webm_source = document.createElement('source');
						this.video_el.appendChild(webm_source);
					}

					webm_source.setAttribute('src', webm);
					webm_source.setAttribute('type', 'video/webm');
				});
			};
			this.initChromeSocketsBugFix();
		});

		var self = this,
			up;

		if (this.editable() === true && creatavist.uploader) {
			this.classList.add('has-uploader');
			up = new creatavist.uploader($(this), {
				offline: false,
				set_asset_on_upload: false,
				type: 'video'
			});

			up.on('change', function(src, is_temp) {
				// if (is_temp === true) {
				// 	self.temp_path = src; // for video, we only use the temp_path on change
				// }
			});

			up.on('video', function(d) {
				// console.log(d);
			});

			up.on('video.state', function(state) {
				self.video_state = state;
				if (state === this.VIDEO_STATE_PROCESSING) {
					self.video_progress = 100;
				}
			});

			up.on('video.still', function(still_path) {
				// console.log("STILL", still_path)
			});

			up.on('progress', function(pct) {
				self.progress = pct;
			});

			up.on('video.progress', function(pct) {
				self.video_progress = pct;
			});

			up.on('video.cms', function(cms) {
				console.log('cms', cms);
				self.temp_path = null;
				self.progress = self.video_progress = 0;
				self.filename = this.basename(cms);
				self.video_el.classList.remove('uploading-asset');
			});

			up.on('video.done', function() {

			});

			this.up = up;
		}
	},

	attached: function() {
		var self = this;
	},

	play: function() {
		this.player.play();
	},

	pause: function() {
		this.player.pause();
	},

	volume: function(v) {
		this.player.volume(v);
	},

	seek: function(n) {
		this.player.currentTime(n);
	}
});

var atavist_video_embed = Polymer({
	is: 'atavist-video-embed',
	atavist: true,
	subcomponent: true,
	properties: {
		controls: Boolean,
		autoplay: Boolean,
		vimeo_url: {
			type: String,
			observer: 'urlChanged'
		},
		youtube_url: {
			type: String,
			observer: 'urlChanged'
		},
		type: {
			type: String,
			observer: 'typeChanged'
		},
		force_type: String
	},

	tests: [
		{
			type: 'vimeo',
			test: /vimeo.com\/([0-9]+)/
		},
		{
			type: 'vimeo',
			test: /vimeo.com\/video\/([0-9]+)/
		},
		{
			type: 'vimeo',
			test: /vimeo.com\/channels\/(?:[A-Za-z0-9]+)\/([0-9]+)/
		},
		{
			type: 'youtube',
			test: /youtu.be\/([A-Za-z0-9-_]+)/
		},
		{
			type: 'youtube',
			test: /youtube.com\/watch\?v=([A-Za-z0-9-_]+)/
		},
		{
			type: 'youtube',
			test: /youtube.com\/embed\/([A-Za-z0-9-_]+)/
		}
	],

	methods: {
		vimeo: {
			play: 'play',
			pause: 'pause',
			volume: 'setVolume',
			seek: 'seekTo'
		},
		youtube: {
			play: 'playVideo',
			pause: 'pauseVideo',
			volume: 'setVolume',
			seek: 'seekTo'
		}
	},

	_queueMethod: function(method, arg) {
		if (!this.queue) {
			this.queue = [];
		}

		this.queue.push({
			method: method,
			arg: arg
		});
	},

	_checkQueue: function() {
		if (!this.queue || !this.queue.length) return;
		for (var i = 0; i < this.queue.length; i++) {
			this.methodForType(this.queue[i].method, this.queue[i].arg);
		}

		this.queue = null;
	},

	methodForType: function(method, arg) {
		var actual_method;
		if (this.type && this.player) {
			actual_method = this.methods[this.type][method];
			if (this.type === 'youtube') {
				console.log('[video ' + method + ']');
				this.player[actual_method](arg);
			}

			if (this.type === 'vimeo') {
				this.player.api(actual_method, arg);
			}
		} else if (this.type) {
			this._queueMethod(method, arg);
		}
	},

	play: function() {
		this.methodForType('play');
	},

	pause: function() {
		this.methodForType('pause');
	},

	volume: function(v) {
		this.methodForType('volume', v);
	},

	seek: function(n) {
		this.methodForType('seek', n);
	},

	typeChanged: function(value) { /* what is this doing? */
		var isLoaded = value + 'Loaded',
			bool = isLoaded + 'Yet',
			doLoad = value + 'Load',
			url = this[value + '_url'];
		if (!value || !url) return;

		this.urlChanged(url);

		// console.trace();
		// console.log("the url is for sure ", this.url);

		// if (value === 'youtube' && !this.url) this.url = 'https://www.youtube.com/watch?v=8JT2IeC2zFM';
		// if (value === 'vimeo' && !this.url) this.url = 'http://vimeo.com/80158395';

		if (value && this[bool] !== true) {
			this[doLoad]();
		} else {
			this[isLoaded]();
		}
	},

	vimeoLoad: function() {
		if (this.vimeoLoading === true) return;
		this.vimeoLoading = true;
		this.loadExternalJS('https://f.vimeocdn.com/js/froogaloop2.min.js', function() {
			this.vimeoLoadedYet = true;
			this.vimeoLoaded();
		});
	},

	vimeoLoaded: function() {
		this.player = $f(this.querySelector('iframe'));
		this._checkQueue();
	},

	youtubeLoaded: function() {
		// console.log("LOADED?")
		// console.trace();
		var player = new YT.Player(this.querySelector('iframe'), {
			events: {
				onReady: function(e) {
					this.player = player;
					this._checkQueue();
				}.bind(this)
			}
		});
	},

	youtubeLoad: function() {
		if (this.youtubeLoading === true) return;
		this.youtubeLoading = true;
		var self = this;
		this.loadExternalJS('https://www.youtube.com/iframe_api');
		window.onYouTubeIframeAPIReady = function() {
			self.youtubeLoaded();
		};
	},

	urlChanged: function(value) {
		var incoming = this.urlForType(),
			formatted_url;
		if (incoming) {
			formatted_url = this.formatURL(incoming);
		}

		if (formatted_url) {
			this.querySelector('iframe').setAttribute('src', formatted_url);
			if (this.type === 'vimeo' || this.type === 'youtube') {
				this.querySelector('iframe').setAttribute('webkitallowfullscreen', true);
				this.querySelector('iframe').setAttribute('mozallowfullscreen', true);
				this.querySelector('iframe').setAttribute('allowfullscreen', true);
			}
		}
	},

	urlForType: function() {
		if (!this.type) return;
		if (this.type === 'youtube') {
			return this.youtube_url;
		} else {
			return this.vimeo_url;
		}
	},

	ready: function() {
		if (!this.youtube_url) {
			this.youtube_url = 'https://www.youtube.com/watch?v=9PncpfLrD5Q'; /* default YouTube video */
		}

		if (!this.vimeo_url) {
			this.vimeo_url = 'https://vimeo.com/122800859'; /* default Vimeo video */
		}
	},

	attached: function() {
		var self = this;
		if (!this.type) {
			this.type = 'youtube';
		}
	},

	loadExternalJS: function(src, cb) {
		var tag = document.createElement('script');
		tag.src = src;
		if (cb) tag.onload = cb.bind(this);
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},

	matchType: function(url) {
		var match, type;
		for (var i = 0; i < this.tests.length; i++) {
			if (match = url.match(this.tests[i].test)) {
				type = this.tests[i].type;
				break;
			}
		}

		return {
			match: match,
			type: type
		};
	},

	formatURL: function(url) {
		// if (!url) return;
		var match, type, embed_url, other_matches;
		for (var i = 0; i < this.tests.length; i++) {
			if (match = url.match(this.tests[i].test)) {
				type = this.tests[i].type;
				break;
			}
		}

		if (match && type === this.type) {
			embed_url = '//';
			htmlClasses = document.documentElement.className.split(' ');
			for (var x in htmlClasses) if (htmlClasses[x] == 'app') embed_url = 'https://';

			if (type === 'vimeo') {
				// //player.vimeo.com/video/VIDEO_ID
				embed_url += 'player.vimeo.com/video/' + match[1] + '?api=1';
				if (this.autoplay === true) {
					embed_url += '?autoplay=1';
				}
			} else if (type === 'youtube') {
				embed_url += 'www.youtube.com/embed/' + match[1] + '?enablejsapi=1&origin=' + window.location.protocol + '//' + document.domain;
				if (this.autoplay === true) {
					embed_url += '&autoplay=1';
				}


				if (other_matches = url.match(/(start|t)=([0-9]+)/)) {
					embed_url += '&start=' + other_matches[2];
				}

				if (other_matches = url.match(/list=([^\&].*)/)) {
					console.log(other_matches[1]);
					embed_url += '&list=' + other_matches[1];
				}

				if (other_matches = url.match(/rel=([^\&].*)/)) {
					embed_url += '&rel=' + other_matches[1];
				}
			}

		}

		return embed_url;
	}
});

Polymer({
	is: 'atavist-multi-video',
	atavist: true,
	subcomponent: true,
	properties: {
		controls: {
			type: Boolean,
			observer: 'controlsChanged'
		},
		mode: {
			type: String,
			observer: 'modeChanged'
		},
		autoplay: Boolean,
		loop: Boolean,
		muted: Boolean,
		video: {
			type: Object,
			observer: 'videoChanged',
			notify: true
		},
		vimeo_url: {
			type: String,
			observer: 'embedChanged'
		},
		youtube_url: {
			type: String,
			observer: 'embedChanged'
		}
	},
	checkReference: function() {
		return {
			mode: this.mode,
			video: this.video
		};
	},

	pathIsReal: function() {
		return (this.path && this.path.indexOf('data:') === -1);
	},

	getActiveElement: function() {
		if (this.mode === 'video') {
			return this.querySelector('atavist-video');
		} else {
			return this.querySelector('atavist-video-embed');
		}
	},

	videoChanged: function() {
		if (!this.mode) return;
		var el = this.querySelector('atavist-video');

		// if (el) {
		// 	for (var i in this.video) {
		// 		el[i] = this.video[i];
		// 	}
		// }
		// this.broadcastReference();

	},

	embedChanged: function() {
		if (!this.mode) return;
		var embed_type = this.mode + '_url',
			el = this.querySelector('atavist-video-embed');
		if (el) {
			el[embed_type] = this[embed_type];
		}
	},

	createVideo: function() {
		var vid = document.createElement('atavist-video');
		vid.autoplay = this.autoplay;
		if (this.controls === true) {
			vid.setAttribute('controls', 'true');
		};

		if (this.muted === true) {
			vid.setAttribute('muted', 'true');
		};

		if (this.loop === true) {
			vid.setAttribute('loop', 'true');
		};

		return vid;
	},

	modes: ['video', 'vimeo', 'youtube'],
	modeChanged: function(val) {
		var embed = this.querySelector('atavist-video-embed'),
			video = this.querySelector('atavist-video');
		if (!this.mode) return;
		if (this.mode === 'video') {
			if (!video) {
				video = this.createVideo();
				video.fire('subcomponentBlockReady');
				this.appendChild(video);
			}

			if (embed) $(embed).remove();

			video.style.display = '';
			video.reference(this, 'video');
			var self = this;
			video.addEventListener('change', function() {
				self.broadcastReference();
			});
		}

		if (this.mode === 'youtube' || this.mode === 'vimeo') {
			if (!embed) {
				embed = document.createElement('atavist-video-embed');
				embed.type = this.mode;
				this.appendChild(embed);
			} else {
				embed.type = this.mode;
			}

			embed.style.display = '';
			if (this.mode === 'youtube') {
				if (this.youtube_url) {
					embed.youtube_url = this.youtube_url;
				}
			} else {
				if (this.vimeo_url) {
					embed.vimeo_url = this.vimeo_url;
				}
			}

			if (video) {
				// video.style.display = 'none';
				$(video).remove();
			}
		}
	},

	play: function() {
		var el = this.getActiveElement();
		el.play();
	},

	pause: function() {
		this.getActiveElement().pause();
	},

	volume: function(v) {
		this.getActiveElement().volume(v);
	},

	seek: function(n) {
		this.getActiveElement().seek(n);
	},

	controlsChanged: function() {
		var el = this.getActiveElement();
		if (el) el.autoplay = this.autoplay;
	},

	ready: function() {
		if (!this.mode) {
			this.mode = 'youtube';
		}

		if (this.autoplay === true) {
			this.getActiveElement().setAttribute('autoplay', 'autoplay');
		}
	}
});

Polymer({
	is: 'atavist-caption',
	atavist: true,
	use_html: true,
	subcomponent: true,
	properties: {
		max_characters: {
			type: Number
		},
		updateable_text: {
			type: Boolean
		}
	},
	handlePlaceholder: function() {
		$(this).focusout(function() {
			var element = $(this);
			if (!element.text().replace(' ', '').length) {
				element.empty();
			}
		});
	},

	checkReference: function() {
		return this.innerHTML.trim();
	},

	ready: function() {
		if (this.editable() === true) {
			this.setAttribute('contenteditable', 'true');
			this.handlePlaceholder();
			this.contentEditableIsland();
		} else {
			this.setAttribute('contenteditable', 'false');
		}

		this.disableBlockElementChildren();

		this.addEventListener('keydown', function(e) {
			if (this.max_characters && this.textContent.length > this.max_characters && typeof e.which == 'number' && e.which > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8) {
				e.stopPropagation();
				e.preventDefault();
			}
		});

		this.addEventListener('paste', function(e) {
			if (!this.max_characters) return;
			var txt = e.clipboardData.getData('text'),
				cumulativeLength = this.textContent.length + txt.length;
			if (cumulativeLength > this.max_characters) {
				txt = txt.substring(0, this.max_characters - this.textContent.length);
				document.execCommand('insertHTML', false, txt);
				e.stopPropagation();
				e.preventDefault();
			}
		}, true);

		this.addEventListener('input', this.broadcastReference);

		// to capture changes made to link els
		this.addEventListener('DOMSubtreeModified', function(e) {
			if (e.target.tagName === 'A') {
				this.broadcastReference();
			}
		});

		this.addEventListener('subcomponentBlockReady', function() {
			this.broadcastReference();
		});
	},

	extends: 'p'
});

Polymer({
	is: 'atavist-text',
	atavist: true,
	use_html: true,
	subcomponent: true,
	properties: {
		has_initial_focus: {
			type: Boolean
		}
	},
	handlePlaceholder: function() {
		$(this).focusout(function() {
			var element = $(this);
			if (!element.text().replace(' ', '').length) {
				element.empty();
			}
		});
	},

	checkReference: function() {
		return this.innerHTML;
	},

	addContentEditableListeners: function(e) {
		var anchorNode = window.getSelection().anchorNode,
			node = (anchorNode && anchorNode.nodeType === 3 ? anchorNode.parentNode : anchorNode),
			tagName;

		if (node === this && node.children.length === 0) {
			document.execCommand('formatBlock', false, 'p');
		}

		if (e.which === 13) {
			tagName = node.tagName.toLowerCase();

			// if (!node.getAttribute('data-disable-return') && tagName !== 'li' && !cantReturn(node)) {
			// 	if (!e.shiftKey) {
			// 		document.execCommand('formatBlock', false, 'p');
			// 	}
			// }
		}
	},

	preventContiguousDeletion: function(e) {
		var sel,
			selRange,
			atStart, atEnd,
			range,
			node;
		if (e.keyCode === 8 || e.keyCode === 46) {
			sel = window.getSelection();
			selRange = sel.getRangeAt(0);
			range = selRange.cloneRange();
			node = (sel.anchorNode && sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode);

			range.selectNodeContents(this);
			range.setEnd(selRange.startContainer, selRange.startOffset);
			testable_string = range
				.toString()
				.trim();
			atStart = (testable_string === '');

			range.selectNodeContents(this);
			range.setStart(selRange.endContainer, selRange.endOffset);
			testable_string = range
				.toString()
				.trim();
			atEnd = (testable_string === '');

			if (!(e.keyCode === 8 && atStart) && !(e.keyCode === 46 && atEnd)) {
				e.stopPropagation();
			}
		}
	},

	_do_initial_focus: function() {
		console.log('focusing');
		var sel = window.getSelection(),
			range = document.createRange();

		range.selectNodeContents(this);
		sel.removeAllRanges();
		sel.addRange(range);
	},

	ready: function() {
		if (this.editable() === true) {
			this.setAttribute('contenteditable', 'true');
			this.handlePlaceholder();
			this.contentEditableIsland(true);
			this.addEventListener('keydown', this.preventContiguousDeletion, false);
			this.addEventListener('keyup', this.addContentEditableListeners, false);
		} else {
			this.setAttribute('contenteditable', 'false');
		}

		if (this.has_initial_focus) {
			this.addEventListener('subcomponentBlockReady', function() {
				this.block.addEventListener('blockCreated', function() {
					this.block_was_created = true;
				}.bind(this));
			});
		}

		this.addEventListener('input', this.broadcastReference);

		// to capture changes made to link els
		this.addEventListener('DOMSubtreeModified', function(e) {
			if (e.target.tagName === 'A') {
				this.broadcastReference();
			}
		});

		this.addEventListener('subcomponentBlockReady', function() {
			this.broadcastReference();
		});
	},

	attached: function() {
		if (this.has_initial_focus && this.block_was_created === true) {
			this._do_initial_focus();
		}
	}

});

Polymer({
	is: 'atavist-story-data',
	atavist: true,
	subcomponent: true,
	use_text: true,
	properties: {
		data_key: String,
		no_returns: Boolean,
		hide_if_empty: Boolean
	},
	handlePlaceholder: function() {
		$(this).focusout(function() {
			var element = $(this);
			if (!element.text().replace(' ', '').length) {
				element.empty();
			}
		});
	},

	dataImport: function(e) {
		var data = e.detail, byline_picker;
		if (this.data_key === 'byline' && typeof data.byline_picker !== 'undefined') {
			byline_picker = JSON.parse(data.byline_picker);
			try {
				if (byline_picker.hasOwnProperty('authors') && byline_picker.authors.length === 0) {
					this.textContent = '';
				} else {
					this.textContent = byline_picker.authors[0].profile_name;
				};

				this.hideIfNecessary();
				return true;
			} catch (e) {
				console.log('[Invalid byline picker object]');
			}
		};

		if (typeof data[this.data_key] !== 'undefined') {
			this.textContent = data[this.data_key];
			this.hideIfNecessary();
		}
	},

	hideIfNecessary: function() {
		if (this.hide_if_empty && this.isEmpty()) {
			this.style.display = 'none';
		} else {
			this.style.display = '';
		}
	},

	isEmpty: function() {
		return this.textContent.replace(' ', '') === '';
	},

	ready: function() {
		this.addEventListener('subcomponentReady', function(e) {
			this.block.addEventListener('story_data', this.dataImport.bind(this));
			this.block.addEventListener('section_data', this.dataImport.bind(this));
			if (this.editable() === true) {
				this.block[this.getAttribute('key')] = '{{' + this.data_key + '}}';
			}
		});
		if (this.editable() === true && this.data_key !== 'byline') {
			this.addEventListener('paste', function(e) {
				var self = this;
				setTimeout(function() {
					self.innerHTML = self.textContent;
				}, 0);
			});

			this.setAttribute('contenteditable', 'true');
			this.handlePlaceholder();
			this.addEventListener('input', function() {
				var data = {};
				data[this.data_key] = this.textContent.replace(/\n/g, '');
				this.fire('storyData', data);
			});
		} else {
			this.setAttribute('contenteditable', 'false');
		}

		this.contentEditableIsland()
			.disableBlockElementChildren()
			.disableRichText();
	}
});

Polymer({
	is: 'atavist-story-data-byline',
	atavist: true,
	subcomponent: true,
	properties: {
		data_key: String,
		legacy_data_key: String
	},
	observers: [
		'dataChanged(authors.*)'
	],
	behaviors: [
		BylineBehaviors
	],

	toBgImage: function(url) {
		return 'background-image:url(' + url + ')';
	},

	dataImport: function(e) {
		var data = e.detail,
			byline_picker,
			author;

		if (data.byline_picker) {
			byline_picker = JSON.parse(data.byline_picker);
			this.authors = byline_picker.authors;
			this.publication = byline_picker.publication;
		} else if (data.byline) {
			this.authors = [this._customByline(data.byline)];
		}
		this._author = this.authors[0];
		if (!this._hasRetrieved && this.authors && this.authors.length) {
			this._hasRetrieved = true;
			this.fetchByline(
				{
					authors: this.authors
				},
				function(data) {
					if (data.authors) {
						this.authors = data.authors;
						this._author = this.authors[0];
					}

					if (data.publication) {
						this.publication = data.publication;
					}
				});
		}
	},

	stringToBool: function(string) {
		return string === 'true' || string === true;
	},

	isPublication: function(publication) {
		return publication && publication.is_publication;
	},

	shouldShowPublication: function(publication) {
		var suppress_publication_in_byline;
		if (this.editable()) {
			suppress_publication_in_byline = creatavist.suppress_publication_in_byline;
		} else if (creatavist.settings) {
			suppress_publication_in_byline = creatavist.settings.read('suppress_publication_in_byline');
		}
		return this.isPublication(publication) && !suppress_publication_in_byline;
	},

	dataChanged: function(value) {
		var byline_display = this._bylineDisplay(),
			data = {};

		if (this.data_key) {
			data[this.data_key] = JSON.stringify({
				authors: this.authors
			});
		}

		if (this.legacy_data_key) {
			data[this.legacy_data_key] = this._bylineDisplay();
		}

		this.fire('storyData', data);
		this.fire('input'); // Dirty the form by simulating an input event
	},

	ready: function() {
		this.addEventListener('subcomponentReady', function(e) {
			this.block.addEventListener('story_data', this.dataImport.bind(this));
			this.block.addEventListener('section_data', this.dataImport.bind(this));
			if (this.editable() === true) {
				this.block[this.getAttribute('key')] = '{{' + this.data_key + '}}';
			}
		});

		if (this.editable() === true) {
			this.addEventListener('click', this._openModal.bind(this));
		}
	}
});

Polymer({
	is: 'atavist-autosizer',
	atavist: true,
	subcomponent: true,
	created: function() {
		$(this).css('opacity', 0);
		$(this).textTailor({
			ellipsis: false
		});
		setTimeout(function() {
			$(this).fadeTo(500, 1);
		}.bind(this), 1000);
	}
});

Polymer({
	is: 'atavist-row',
	subcomponent: true,
	attached: function() {
		this.addEventListener('change', function(e) {
			var el = e.target,
				key = el.getAttribute('key');
			if (key) {
				this.fire('rowChanged', key);
			}
		});
	}

});
Polymer({
	is: 'atavist-rows',
	atavist: true,
	subcomponent: true,
	properties: {
		key: String,
		minimum: Number,
		row_classes: String
	},
	created: function() {
		this._row_template = this.querySelector('template');
	},

	ready: function() {
		this.addEventListener('subcomponentBlockReady', function() {
			if (this.minimum > 0 && typeof this.ref[this.ref_key] === 'undefined') {
				this.ref[this.ref_key] = [];
				for (var i = 0; i < this.minimum; i++) {
					this.ref[this.ref_key].push({});
				}
			}

			this.externalRowsChanged(this.ref[this.ref_key]);
			this.ref.addEventListener(this.ref_key + '-changed', this.myRowsChanged.bind(this));
		});
	},

	checkReference: function() {
		return this.getRows();
	},

	myRowsChanged: function() {
		var rows = this.ref[this.ref_key];
		this.externalRowsChanged(rows);
	},

	getRows: function() {
		var rows = this.ref[this.ref_key];
		return rows;
	},

	createRow: function(i, withData) {
		var row, noder, self = this;

		// safari 7 fix:
		if (HTMLTemplateElement.decorate) {
			HTMLTemplateElement.decorate(this._row_template);
		}

		noder = this.instanceTemplate(this._row_template);
		row = document.createElement('atavist-row');
		if (withData) {
			for (var n in withData) {
				row[n] = withData[n];
			}
		}

		row.classList.add('atavist-parent');
		if (this.row_classes) {
			var extra_classes = this.row_classes.split(' ');
			for (var m = 0; m < extra_classes.length; m++) {
				row.classList.add(extra_classes[m]);
			}
		}

		row.appendChild(noder);
		row.blockReady = true;
		row.setAttribute('data-n', i);
		row._initializeSubcomponents();
		row.addEventListener('rowChanged', function(e) {
			var key_of_row_changed = e.detail,
				data = row[key_of_row_changed],
				my_i = (typeof row.current_i !== 'undefined') ? row.current_i : i;

			if (self.ref[self.ref_key][my_i]) {
				self.ref[self.ref_key][my_i][key_of_row_changed] = data; /* WOAH THIS IS DARK! */				
				self.broadcastReference();
			}
		});

		return row;
	},

	externalRowsChanged: function(rows) {
		// console.log('row <incom></incom>ing', rows)
		var enduring_n_s = [], deleted_row = false;
		for (var k = 0; k < rows.length; k++) {
			if (typeof rows[k].n !== 'undefined') {
				enduring_n_s.push(rows[k].n);
			}
		}

		if (enduring_n_s.length) {
			// console.log(enduring_n_s)
			var existing_rows = this.querySelectorAll('atavist-row'),
				effective_i = 0;
			for (var i = 0; i < existing_rows.length; i++) {
				var actual_i = parseInt(existing_rows[i].getAttribute('data-n'));
				if (enduring_n_s.indexOf(actual_i) === -1) {
					deleted_row = true;
					existing_rows[i].parentNode.removeChild(existing_rows[i]);
				} else {
					existing_rows[i].current_i = effective_i;
					effective_i++;
				}
			}
		}

		if (deleted_row === true) {
			this.fire('rowDeleted');
		}

		for (var i = 0; i < rows.length; i++) {
			var existing_rows = this.querySelectorAll('atavist-row'),
				added_row = false,
				row;
			if (existing_rows[i]) {
				row = existing_rows[i];
			} else {
				row = this.createRow(i, rows[i]);
				this.appendChild(row);
				added_row = row;
			}

			for (var j in rows[i]) {
				var el = row.querySelector('[key="' + j + '"]');
				if (el) {
					el.subcomponentBlockReady = true; /* ? */
					row[j] = rows[i][j];
					if (el.ref_setup !== true) {
						el.reference(row, j);
					} else {
						el.fire(j + '-changed', {
							value: rows[i][j]
						});
					}
				}
			}

			if (added_row !== false) {
				this.fire('rowAdded', row);
			}
		}
	}
});

Polymer({
	is: 'atavist-multi-background',
	subcomponent: true,
	properties: {
		data_key: {
			type: String
		},
		mode: {
			type: String,
			observer: 'modeChanged'
		},
		bg_properties: {
			type: Object,
			notify: true,
			observer: 'bg_propertiesChanged'
		}
	},

	mode_to_el_map: {
		image: 'atavist-background-image-with-shim',
		color: 'atavist-background-solid-color',
		video: 'atavist-background-video-with-shim'
	},

	checkReference: function() {
		return {
			mode: this.mode,
			bg_properties: this.bg_properties
		};
	},

	bg_propertiesChanged: function() {
		var firstChildEl = this.firstElementChild;
		if (!firstChildEl) return;
		for (var prop in this.bg_properties) {
			firstChildEl[prop] = this.bg_properties[prop];
		}
	},

	modeChanged: function() {
		// console.log('mode: ', this.mode);
		if (!this.mode) return;
		var firstChildEl = this.firstElementChild,
			newEl;

		if (firstChildEl) {
			if (this.mode && firstChildEl.nodeName === this.mode_to_el_map[this.mode].toUpperCase()) {
				// console.log('correct el found. doing nothing.');
				return;
			} else {
				// console.log('wrong el found. removing element');
				this.removeChild(firstChildEl);
			}
		}

		// console.log('adding the proper element');
		newEl = document.createElement(this.mode_to_el_map[this.mode]);
		if (newEl.bindToBackgroundParent) {
			newEl.bindToBackgroundParent(this);
		}

		this.appendChild(newEl);
		this.broadcastReference();
	},

	readyOrMigrate: function() {
		var current_key = this.getAttribute('key'),
			legacy_image_key = 'background_image',
			legacy_shim_key = 'shim-color',
			legacy_image,
			legacy_shim,
			legacy_fp,
			bg_properties = {};
		if (!current_key) return;
		if (this.getAttribute(current_key)) return;
		if (legacy_image = this.block.getAttribute(legacy_image_key)) {
			try {
				legacy_image = JSON.parse(legacy_image);
			} catch (e) {

			}
		}

		legacy_shim = this.block.getAttribute(legacy_shim_key);
		if (legacy_image || legacy_shim) {
			this.mode = 'image';
			if (legacy_shim) {
				bg_properties.shim_color = legacy_shim;
				this.block.removeAttribute(legacy_shim_key);
			}

			if (legacy_image) {
				bg_properties.image = legacy_image;
				if (legacy_image.focal_point) {
					legacy_fp = legacy_image.focal_point;
				}

				this.block.removeAttribute(legacy_image_key);
			}

			this.bg_properties = bg_properties;
			if (legacy_fp) {
				this.bg_properties.image.focal_point = legacy_fp;
			}
		}

		if (!this.mode) {
			/* set default here so that we've had opportunity for block to tell us a mode first */
			this.mode = 'image';
		}

	},

	ready: function() { /* transitioning from existing blocks */
		this.addEventListener('subcomponentBlockReady', this.readyOrMigrate);
	},

	addUploaderTarget: function(el) {
		var uploader_el = this.querySelector('.has-uploader');
		if (uploader_el) {
			uploader_el.addUploaderTarget(el);
		}
	}
});

Polymer({
	is: 'atavist-background-image-with-shim',
	subcomponent: true,
	properties: {
		image: {
			type: Object,
			notify: true,
			observer: 'imageChanged'
		},
		shim_color: {
			type: String,
			value: 'rgba(0,0,0,0.35)',
			observer: 'shim_colorChanged'
		}
	},

	checkReference: function() {
		return {
			image: this.image,
			shim_color: this.shim_color
		};
	},

	bindToBackgroundParent: function(parent) {
		var img = this.querySelector('.atavist-image'),
			data_key;
		function doBinding(e) {
			if (e && e.target !== parent) return;
			if (data_key = parent.getAttribute('data_key')) {
				img.data_key = data_key;
				img.bind_import(parent.block);
			}

			// wait until parent has data before we setup img event binding
			img.subcomponentBlockReady = true;
			img.reference(this, 'image');
			img.addEventListener('change', function() {
				this.broadcastReference();
				parent.broadcastReference();
			}.bind(this));
			img.fire('subcomponentBlockReady');
		}

		if (!parent.subcomponentBlockReady) {
			parent.addEventListener('subcomponentBlockReady', doBinding.bind(this));
		} else {
			doBinding.call(this);
		}

		img.subcomponentBlockReady = true;
		this.reference(parent, 'bg_properties');
		img.addUploaderTarget(this);
	},

	imageChanged: function() {
		var img = this.querySelector('.atavist-image');
		for (var prop in this.image) {
			img[prop] = this.image[prop];
		}
	},

	shim_colorChanged: function() {
		this.querySelector('.atavist-background-image-with-shim-shim').style.backgroundColor = this.shim_color;
	},

	ready: function() {
		this.querySelector('.atavist-image').addEventListener('imageLoaded', function(e) {
			var img = this.querySelector('.atavist-image'),
				details = {
					dimensions: {
						width: img.imageWidth,
						height: img.imageHeight
					}
				};

			this.fire('multibackgroundLoaded', details);
		}.bind(this));
	}

});

Polymer({
	is: 'atavist-background-solid-color',
	subcomponent: true,
	properties: {
		color: {
			type: String,
			value: 'rgb(55, 120, 250)',
			observer: 'colorChanged'
		}
	},

	colorChanged: function() {
		this.style.backgroundColor = this.color;
	},

	attached: function() {
		var details = {
			dimensions: {
				width: null,
				height: null
			}
		};

		this.fire('multibackgroundLoaded', details);
	}

});

Polymer({
	is: 'atavist-background-video-with-shim',
	subcomponent: true,
	properties: {
		video: {
			type: Object,
			notify: true,
			observer: 'videoChanged'
		},
		shim_color: {
			type: String,
			value: 'rgba(0,0,0,0.5)',
			observer: 'shim_colorChanged'
		}
	},
	videoChanged: function() {
		var video = this.querySelector('.atavist-video');
		for (var prop in this.video) {
			video[prop] = this.video[prop];
		}
	},

	shim_colorChanged: function() {
		this.querySelector('.atavist-background-video-with-shim-shim').style.backgroundColor = this.shim_color;
	},

	checkReference: function() {
		return {
			video: this.video,
			shim_color: this.shim_color
		};
	},

	bindToBackgroundParent: function(parent) {
		var video = this.querySelector('.atavist-video');
		video.subcomponentBlockReady = true;
		this.reference(parent, 'bg_properties');
		video.reference(this, 'video');
		video.addUploaderTarget(this);
		video.fire('subcomponentBlockReady');
		video.addEventListener('change', function() {
			this.broadcastReference();
			parent.broadcastReference();
		}.bind(this));
	},

	sizeVideo: function() {
		var video = this.querySelector('.atavist-video video');
		if (!video) return;
		var atavist_video = this.querySelector('.atavist-video'),
			container_width = $(this).width(),
			container_height = $(this).height(),
			vid_w_orig = video.videoWidth,
			vid_h_orig = video.videoHeight,
			scale_h = container_width / vid_w_orig,
			scale_v = container_height / vid_h_orig,
			scale = scale_h > scale_v ? scale_h : scale_v;

		$(atavist_video).width(scale * vid_w_orig);
		$(atavist_video).height(scale * vid_h_orig);
	},

	initializeVideoSizing: function() {
		var f = function f() {
			setTimeout(function() { /* necessary to prevent too-soon resizes in certain contexts */
				this.sizeVideo();
			}.bind(this), 0);
		}.bind(this);

		this.sizeVideo();

		$(this).parents('atavist-multi-background').on('multibackgroundResized', f);

		this.addEventListener('onSectionChange', f);

		$(window).on('resize.atavist_background_video, previewResize.atavist_background_video', f);
		$(window).on('previewResize.atavist_background_video_mobile_toggle', function(e) {
			if (e.originalEvent.detail === 'mobile') {
				this.toggleMobile(true);
			} else {
				this.toggleMobile(false);
			}
		}.bind(this));
	},

	supportsAutoplay: function() {

		/*

		The MIT License (MIT)

		Adapted from Modernizr, Copyright (c) 2015

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.

		*/

		var timeout,
			waitTime = 300,
			elem = document.createElement('video'),
			elemStyle = elem.style;

		function testAutoplay(arg) {
			clearTimeout(timeout);
			elem.removeEventListener('playing', testAutoplay, false);
			fireTestResult(arg && arg.type === 'playing' || elem.currentTime !== 0);
			elem.parentNode.removeChild(elem);
		}

		var fireTestResult = function fireTestResult(result) {
			this.fire('supportsAutoplay', result);
		}.bind(this);

		//skip the test if video itself, or the autoplay
		//element on it isn't supported
		if (!('autoplay' in elem)) {
			fireTestResult(false);
			return;
		}

		elemStyle.position = 'absolute';
		elemStyle.height = 0;
		elemStyle.width = 0;

		try {
			if (elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '') !== '') {
				elem.src = 'data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A';
			}
			else if (elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '') !== '') {
				elem.src = 'data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU';
			}
			else {
				fireTestResult(false);
				return;
			}
		} catch (e) {
			fireTestResult(false);
			return;
		}

		elem.setAttribute('autoplay', '');
		elem.style.cssText = 'display:none';
		document.querySelector('body').appendChild(elem);

		// wait for the next tick to add the listener, otherwise the element may
		// not have time to play in high load situations (e.g. the test suite)
		setTimeout(function() {
			elem.addEventListener('playing', testAutoplay, false);
			timeout = setTimeout(testAutoplay, waitTime);
		}, 0);

	},

	_autoplayOK: false,
	toggleMobile: function(bool) {
		var atavist_video = this.querySelector('.atavist-video'),
			video = atavist_video.querySelector('video'),
			posterPath;
		if (!video || this._autoplayOK) return;
		posterPath = video.getAttribute('poster') || '';

		if (bool) {
			atavist_video.classList.add('autoplay-unavailable');
			atavist_video.style.backgroundImage = 'url("' + posterPath + '")';
		} else {
			this._autoplayOK = true;
			atavist_video.classList.remove('autoplay-unavailable');
			atavist_video.style.backgroundImage = '';
		}
	},

	receiveMessage: function(e) {
		var original_event = e.originalEvent,
			isMobile = original_event.data === 'iphone6';

		if (original_event.origin !== location.origin) {
			return;
		} else if (isMobile) {
			this.toggleMobile(true);
		} else {
			this.toggleMobile(false);
		}
	},

	initializeAutoplay: function() {
		this.onceInView({
			handler: function() {
				// console.log('video autoplay');
				this.querySelector('video').play();
			},

			offset: '100%'
		});
	},

	ready: function() {
		var video = this.querySelector('.atavist-video video');

		$(window).on('message.atavist_background_video', this.receiveMessage.bind(this));

		video.addEventListener('loadedmetadata', function(e) {
			this.toggleMobile(false);
			video.muted = true; /* necessary for FF */
			this.initializeAutoplay();
			this.initializeVideoSizing();
		}.bind(this));

		video.addEventListener('loadedmetadata', function(e) {
			var details = {
				dimensions: {
					width: video.videoWidth,
					height: video.videoHeight
				}
			};

			this.fire('multibackgroundLoaded', details);
		}.bind(this));

		this.addEventListener('supportsAutoplay', function(e) {
			var supportsAutoplay = e.detail;

			e.stopPropagation();
			if (!supportsAutoplay) {
				this.toggleMobile(true);
			}
		}.bind(this));

		this.supportsAutoplay();
	}

});

Polymer({
	is: 'atavist-dfp',
	subcomponent: true,
	properties: {
		ad_network_id: {
			type: String,
			value: '/148387768/atavist_demo'
		},
		responsive_ad_array: {
			type: Array,
			value: function() { return [[970, 90], [728, 90], [300, 250]]; }
		},
		targeting_array: {
			type: Array,
			value: function() { return []; }
		},
		dfp_ready: Boolean
	},

	observers: [
		'loadAd(ad_network_id, responsive_ad_array, targeting_array, dfp_ready)'
	],

	loadDFPscript: function() {
		if (!window.atavistDFPloaded) {
			window.atavistDFPloaded = $.Deferred();
			if (typeof googletag === 'undefined') {
				jQuery.getScript('https://www.googletagservices.com/tag/js/gpt.js', function() {
					atavistDFPloaded.resolve();
				});
			} else {
				atavistDFPloaded.resolve();
			}
		}

		atavistDFPloaded.done(function() {
			this.dfp_ready = true;
		}.bind(this));

	},

	generateRandomString: function(length) {
		var result = '',
			chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

		return result;
	},

	generateID: function() {
		return 'atavist-dfp-ad-' + this.generateRandomString(20) ;
	},

	getResponsiveAdArray: function() {
		var adWidth = this.clientWidth,
			responsiveArray = this.responsive_ad_array,
			newArray = [];

		if (responsiveArray) {
			for (var i = 0; i < responsiveArray.length; i++) {
				if (responsiveArray[i][0] <= adWidth) {
					newArray.push(responsiveArray[i]);
				}
			}
		}

		return newArray;
	},

	_slotRenderEnded: function(event) {
		this.fire('dfpEvent', {
			name: 'slotRenderEnded',
			data: event
		});
	},

	loadAd: function() {
		if (typeof googletag === 'undefined') return;
		var wrapper = this.querySelector('.atavist-dfp-wrapper'),
			adID = this.generateID(),
			responsiveAdArray = this.getResponsiveAdArray();

		wrapper.id = adID;
		while (wrapper.hasChildNodes()) {
			wrapper.removeChild(wrapper.lastChild);
		};

		googletag.cmd.push(function() {
			var mapping =  googletag.sizeMapping().addSize([0, 0], responsiveAdArray).build(),
				slot = googletag.defineSlot(this.ad_network_id, responsiveAdArray, adID)
				.defineSizeMapping(mapping)
				.setCollapseEmptyDiv(true)
				.addService(googletag.pubads());

			if (this.targeting_array && this.targeting_array.length > 0) {
				for (var i = 0; i < this.targeting_array.length; i++) {
					var key = this.targeting_array[i][0],
						value = this.targeting_array[i][1];

					slot.setTargeting(key, value);
				}
			}

			googletag.enableServices();
			googletag.display(adID);
			if (!this._bound) {
				googletag.pubads().addEventListener('slotRenderEnded', this._slotRenderEnded.bind(this));
				this._bound = true;
			}
		}.bind(this));
	},

	attached: function() {
		this.loadDFPscript();
	}

});

Polymer({
	is: 'atavist-promo-frame',
	subcomponent: true,
	attached: function() {
		this.querySelector('iframe').setAttribute('src', '/static/reader-creator-promo/promo.html');
		var org_id = (prerendered) ? prerendered.organization_id : null,
			message = {
				organization_id: org_id
			},
			user_agent_string,
			is_ie10;

		frame_window = this.querySelector('iframe').contentWindow;
		if (!frame_window) return;
		frame_window.onload = function() {
			frame_window.postMessage(message, '*');
		};

		user_agent_string = navigator.userAgent;
		is_ie10 = user_agent_string.indexOf('MSIE 10.0') > -1;
		if (is_ie10) document.querySelector('body').classList.add('is_ie10');
	}
});

Polymer({
	is: 'atavist-logo',
	subcomponent: true,
	init: function() {
		var body = document.querySelector('body'),
			article = document.querySelector('article'),
			promoFrame = document.querySelector('.atavist-promo-frame'),
			logo = document.querySelector('.paperclip-logo'),
			backgroundWrapper = document.querySelector('.paperclip-logo-background-wrapper'),
			background = document.querySelector('.paperclip-logo-background'),
			scrollContext = document.querySelector('.in-view') || window,
			positionAnimatingElement = function() {
				var	promoWidth = promoFrame.clientWidth,
					bounds = logo.getBoundingClientRect(),
					logoCenterPointY = (bounds.height / 2) + (bounds.top), /* from top */
					logoCenterPointX = (bounds.width / 2) + (window.innerWidth - bounds.right), /* from right */

					/*

						PYTHAGOREAN THEOREM, BABY!!!!

					         /|
					        / |
					    c  /  | a
					      /   |
					     ------
					        b
					*/

					a = window.innerHeight - logoCenterPointY,
					b = promoWidth - logoCenterPointX,
					c = Math.ceil(Math.sqrt((a * a) + (b * b))),
					multiplier = 2 * c / bounds.width,
					targetWidth = bounds.width * multiplier,
					transformString = 'translate3D(-50%,-50%,0) scale(' + 0.9 * (1 / multiplier) + ')';

				backgroundWrapper.style.top = logoCenterPointY + 'px';
				backgroundWrapper.style.right = logoCenterPointX + 'px';
				background.style.width = background.style.height = targetWidth + 'px';
				background.style.webkitTransform = transformString;
				background.style.mozTransform = transformString;
				background.style.msTransform = transformString;
				background.style.oTransform = transformString;
				background.style.transform = transformString;
			},

			promoHasBeenTriggered = false,
			openPromo = function() {
				body.classList.add('promo-open');
				if (!promoHasBeenTriggered) {
					setTimeout(function() {
						if (typeof _gaq !== 'undefined') {
							_gaq.push(['b._trackEvent', 'atavistChrome', 'logoPromoTrigger', 'logo trigger', 1]);
						}
					}, 1000); /* timeout prevent JS execution from affecting animation performance */
				}

				promoHasBeenTriggered = true;
			},

			closePromo = function() {
				body.classList.remove('promo-open');
			},

			resizeTimeout,
			repositionAnimatingEl = function() {
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					positionAnimatingElement();
				}, 500);
			};

		window.addEventListener('resize', function() {

			/* 	this stuff fixes 'getBoundingClientRect' bug on Mobile Safari,
				whereby position:fixed; elements, when the document is scrolling,
				report the wrong `top` value.
			 */
			window.removeEventListener('scroll', repositionAnimatingEl);
			window.addEventListener('scroll', repositionAnimatingEl);

			repositionAnimatingEl();
		});

		if (!background || !logo || !promoFrame) return;
		setTimeout(function() {
			background.classList.remove('do-not-animate'); /* prevents initial animation */
		}, 500);

		logo.onmouseenter = logo.ontouchend = openPromo;
		promoFrame.onmouseleave = article.onclick = article.onmouseenter = article.ontouchstart = promoFrame.querySelector('.touch-close').onclick = closePromo;
		positionAnimatingElement();
	},

	isTouchDevice: function() {
		var bool;
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		} else {
			bool = false;
		}

		return bool;
	},

	ready: function() {
		var promoFrame = document.createElement('atavist-promo-frame');
		this.parentNode.appendChild(promoFrame);

		if (this.isTouchDevice()) promoFrame.classList.add('touch-promo');

		window.addEventListener('message', function(e) {
			var isMobile = e.data === 'iphone6';

			if (isMobile) {
				promoFrame.classList.add('touch-promo');
			} else {
				promoFrame.classList.remove('touch-promo');
			}
		});

		window.addEventListener('WebComponentsReady', function() {
			this.init();
		}.bind(this));
	}
});

Polymer({
	is: 'atavist-footer',
	subcomponent: true,
	initArrowOffset: function() {
		var $arrows = $('.previous-page-arrow, .next-page-arrow'),
			windowHeight = window.innerHeight,
			positionArrows;

		positionArrows = function positionArrows() {
			var pixelsOnScreen = Math.max(windowHeight - this.getBoundingClientRect().top, 0);

			$arrows.css({
				'-webkit-transition': '-webkit-transform 0ms',
				'-moz-transition': 'transform 0ms',
				'-ms-transition': 'transform 0ms',
				'-o-transition': 'transform 0ms',
				transition: 'transform 0ms'
			});

			$arrows.css({
				'-webkit-transform': 'translate3D(0, ' + -pixelsOnScreen + 'px, 0)',
				'-moz-transform': 'translate3D(0, ' + -pixelsOnScreen + 'px, 0)',
				'-ms-transform': 'translate3D(0, ' + -pixelsOnScreen + 'px, 0)',
				'-o-transform': 'translate3D(0, ' + -pixelsOnScreen + 'px, 0)',
				transform: 'translate3D(0, ' + -pixelsOnScreen + 'px, 0)'
			});

			this.arrowAnimation = window.requestAnimationFrame(positionArrows.bind(this));
		};

		window.cancelAnimationFrame(this.arrowAnimation);
		this.arrowAnimation = window.requestAnimationFrame(positionArrows.bind(this));
	},

	cancelArrowOffset: function() {
		var $arrows = $('.previous-page-arrow, .next-page-arrow');

		window.cancelAnimationFrame(this.arrowAnimation);
		$arrows.css({
			'-webkit-transform': '',
			'-moz-transform': '',
			'-ms-transform': '',
			'-o-transform': '',
			transform: ''
		});
		$arrows.css({
			'-webkit-transition': '',
			'-moz-transition': '',
			'-ms-transition': '',
			'-o-transition': '',
			transition: ''
		});
	},

	ready: function() {
		var isPaginated = $('body').hasClass('template-setting-pagination-Paginate'),
			link = this.querySelector('a'),
			href = link.href,
			org_id = (prerendered) ? prerendered.organization_id : null;

		href = href + '?ref=project_footer';
		if (org_id !== null) href = href + '&ref-org=' + org_id;
		link.href = href;

		if (isPaginated) {
			window.addEventListener('beforeSectionChange', function(e) {
				if (e.detail.n === e.detail.sections.length - 1) {
					this.initArrowOffset();
				} else {
					this.cancelArrowOffset();
				}
			}.bind(this));
		}
	},

	extends: 'footer'
});

Polymer({
	is: 'external-script',
	atavist: true,
	subcomponent: true,
	properties: {
		url: {
			type: String,
			observer: 'checkLoaded'
		},
		is_loaded: {
			type: Boolean,
			observer: 'loaded'
		}
	},

	checkLoaded: function() {
		var script_exists = document.querySelector('script[src="' + this.url + '"]');
		if (!script_exists) {
			script_exists = this.load();
		}

		if (script_exists.getAttribute('data-loaded') === 'true') {
			this.is_loaded = true;
		} else {
			script_exists.addEventListener('load', function() {
				script_exists.setAttribute('data-loaded', 'true');
				this.is_loaded = true;
			}.bind(this));
		}
	},

	loaded: function() {
		this.fire('scriptLoaded', this.url);
	},

	onceLoaded: function(cb) {
		if (this.is_loaded) {
			cb();
		} else {
			this.addEventListener('scriptLoaded', cb);
		}
	},

	load: function() {
		var el = document.createElement('script');
		el.onload = function() {
			el.setAttribute('data-loaded', 'true');
			this.is_loaded = true;
		}.bind(this);
		el.async = false;
		el.src = this.url;
		document.body.appendChild(el);
		return el;
	}

});

Polymer({
	is: 'once-loaded',
	atavist: true,
	subcomponent: true,

	properties: {
		run: {
			type: String
		},
		is_loaded: {
			type: Boolean,
			observer: 'loaded'
		}
	},

	loaded: function() {
		function doRun() {
			if (this.block && this.block[this.run]) {
				this.block[this.run]();
			}
		}

		if (this.subcomponentBlockReady) {
			doRun.call(this);
		} else {
			this.addEventListener('subcomponentBlockReady', function(e) {
				if (e.target === this) {
					doRun.call(this);
				}
			});
		}
	},

	ready: function() {
		var dependencies = this.querySelectorAll('external-script'),
			loaded = 0;
		for (var i = 0; i < dependencies.length; i++) {
			if (dependencies[i].onceLoaded) {
				dependencies[i].onceLoaded(function() {
					loaded++;
					if (loaded === dependencies.length) {
						this.is_loaded = true;
					}
				}.bind(this));
			}
		}
	}
});

// /cms/data/templates/vanilla/js/imagesloaded.pkgd.min.js  

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
// /iw/javascript/settings.js  

(function (creatavist) {

	var settings = function() {};

	settings.prototype.read = function(key) {
		if (typeof prerendered !== 'undefined') {
			if (typeof prerendered[key] !== 'undefined') {
				return prerendered[key];
			}
		}
		return null;
	};
	settings.prototype.write = function(key, value) {
		prerendered[key] = value;
	}
	settings.prototype.isIE = function() {
		return ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null)));
	};
	settings.prototype.isMobile = function () {
    	return (/ip.+mobile.+safari/i.test(window.navigator.userAgent));
    };
    settings.prototype.environment = function() {
    	return this.read('environment');
    };
    settings.prototype.hasCover = function() {
    	return (this.read('suppress_jacket_web') === 1) ? false : true;
    };
    settings.prototype.chapter = function(chapter_info, set_chapter_data) {
    	var chapters = this.chapters(),
    		returned_chapter;
    	for (var i = 0; i < chapters.length; i++) {
    		if (chapter_info.n === i || chapter_info.id === chapters[i].id) {
                if (set_chapter_data) {
                    chapters[i] = set_chapter_data;
                }
    			returned_chapter = chapters[i];
    		}
    	};
        if (set_chapter_data) {
            this.write('chapters', chapters)
        }
    	return returned_chapter;
    }
    settings.prototype.chapters = function() {
    	return (this.read('chapters')) ? this.read('chapters') : [];
    };
	creatavist.settings = new settings();
})(window.creatavist = window.creatavist || {});
// /iw/javascript/utilities.js  

$.fn.extend({
    translateX: function(px, shouldAnimate) {
        var shouldAnimate = (shouldAnimate === false) ? false : true,
            styles,
            noAnimation = {
                '-webkit-transition-duration' : "0ms",
                '-moz-transition-duration' : "0ms",
                '-ms-transition-duration' : "0ms",
                '-o-transition-duration' : "0ms",
                'transition-duration' : "0ms"                
            };

        if (!px) px = 0;
        px = px + 'px';

        styles = {
            '-webkit-transform': 'translateX('+px+') translateZ(0)',
            '-moz-transform' : 'translateX('+px+') translateZ(0)',
            '-ms-transform' : 'translateX('+px+') translateZ(0)',
            '-o-transform' : 'translateX('+px+') translateZ(0)',
            'transform' : 'translateX('+px+') translateZ(0)'            
        };

        if (!shouldAnimate) {
            styles = $.extend(styles, noAnimation);
        }

        return $(this).css(styles);

    }
});
$.paginationChapter = function( n ) {
        return $("[data-pagination-chapter-number=" + n + "]");
};

(function (creatavist) {
    var settings = creatavist.settings;
    creatavist.editable = false;
    /* ajax wrapper fetching */
    creatavist.fetch = function(url, params, callback, context, jsonp) {
        var dataType = 'jsonp';
        if (settings.read('api_prefix')) {
            url = settings.read('api_prefix') + url;
        }
        if (settings.read('isPublishedVersion') !== null) {
            params.isPublishedVersion = settings.read('isPublishedVersion')
        }
        if (jsonp === false) {
            dataType = 'json';
        }
        return $.ajax({
            url: url, 
            data: params,
            crossDomain:true,
            dataType:dataType,
            context: context,
            success: callback
        });
    };

    creatavist.fetchExtras = function(data, callback, context) {
        /* fetch extras */
        this.fetch("/api/public/extra.php", data, callback, context);
    };

    creatavist.fetchChapters = function(data, callback, context) {
        /* fetch chapters */
        this.fetch("/api/public/chapter.php", data, callback, context);
    };

    creatavist.fetchPartial = function(data, callback, context) {
        /* fetch a single template partial, rendered */
        this.fetch("/api/public/partial.php", data, callback, context);
    };

    creatavist.fetchNavigation = function(data, callback, context) {
        /* fetch navigation */
        this.fetch("/api/public/navigation.php", data, callback, context);
    };

    creatavist.basename = function(path) {
        return path.split('/').pop();
    };

    creatavist.secondsToFormattedTime = function(seconds_full) {
        if (isNaN(seconds_full) || seconds_full == null) return '';
        var seconds = parseInt(seconds_full, 10);
        var hours   = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds - (hours * 3600)) / 60);
        
        seconds = seconds - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time = '';
        if (hours > 0) time += hours+':';
        time += minutes+':'+seconds;
        return time;
    };

    creatavist.library = function(params, cb) {
        if (typeof params === 'function') {
            cb = params;
            params = {};
        } else if (typeof params === 'undefined') {
            params = {}
        }
        if (!params.no_render) {
            params.render = true;
        }
        params.organization_id = settings.read('organization_id');
        params.preview_tid = settings.read('preview_tid');
        return creatavist.fetch('/api/public/library.php', params, cb, null, false)
    }
    creatavist.stories = function(params, cb) {
        params.organization_id = settings.read('organization_id');
        return creatavist.fetch('/api/public/library.php', params, cb, null, false)
    }

    creatavist.clean_basename = function(filename) {
        /* Extract a clean basename from an Atavist path, which may or may not be an image derivative. */
        if (!filename) {
            return '';
        }
        filename = filename.split('~');
        filename = filename[filename.length - 1];
        filename = filename.split('/');
        filename = filename[filename.length - 1];
        return filename;
    }

    creatavist.image_derivative = function() {
        /*
            Usage:
            creatavist.image_derivative(basename, transform, width, height, scale_up);
        */
        var filename, transform, width, height, transform_components, path_components, dimensions;
        filename = typeof arguments[0] !== 'undefined' ? arguments[0] : null;
        transform = typeof arguments[1] !== 'undefined' ? arguments[1] : null;
        width = typeof arguments[2] !== 'undefined' ? arguments[2] : null;
        height = typeof arguments[3] !== 'undefined' ? arguments[3] : null;
        if (!filename) {
            return null;
        }
        filename = this.clean_basename(filename);
        if (width === null || height === null) {
            transform = 'raw';
        }
        dimensions = [parseInt(width), parseInt(height)];
        path_components = ['data', 'files', 'organization', settings.read('organization_id'), 'image'];
        transform_components = [];
        switch (transform) {
            case "crop":
            case "scale":
            case "cropandscale":
                transform_components.push(transform);
                if (typeof arguments[4] !== 'undefined' && arguments[4]) {
                    dimensions.push('canscaleup');
                }
                break;

            default:
                transform = 'raw';
                break;
        }
        if (transform === 'raw') {
            path_components.push('raw');
        } else {
            path_components.push('derivative');
            transform_components.push(dimensions.join('x'));
        }
        transform_components.push(filename);
        path_components.push(transform_components.join('~'));
        return '/' + path_components.join('/');
    }

    if (creatavist.settings.environment() !== "app") {
        var ATCommander = {};
        ATCommander.send = function(info, data, callback) { //sends a command to native
            switch (info) {
                case "soundtrack":
                case "soundtrackChangeTrack":
                case "soundtrackCurrentTrack":
                case "soundtrackChangeState":
                case "pauseEventAudio":
                case "playEventAudio":
                case "toggleEventAudio":
                case "volumeForEventAudio":
                case "seekEventAudio":
                case "eventAudioInfo":
                case "stopAllEventAudio":
                case "silenceAllForPrimaryAudio":
                case "resumeAfterPrimaryAudio":
                    var response = AT.audioController[info](data, callback);
                    if (callback) callback(response);
                    break;

                case "chapterSet":
                    creatavist.chapters[info](data, callback);
                    break;
            }
        };
        ATCommander.on = function(info, data, callback) {} //sends a command to native
        window.ATCommander = ATCommander;
    }


})(window.creatavist = window.creatavist || {}); 
(function() {

	var init = function() {
		window.addEventListener('WebComponentsReady', function() {
			document.querySelector('body').classList.add('web-components-ready');
		});

		Polymer.Base.importHref('/static/bower_components/atavist-utilities/inert-markup.html');
		Polymer.Base.importHref('/static/bower_components/collection-layout-default/collection-layout-default.html');
		Polymer.Base.importHref('/static/bower_components/collection-story-data-controller/collection-story-data-controller.html');
		Polymer.Base.importHref('/static/bower_components/collection-featured-story/collection-featured-story.html');
		Polymer.Base.importHref('/static/bower_components/collection-story-list/collection-story-list.html');
	};

	init();

})();
